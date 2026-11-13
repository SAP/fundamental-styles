import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { augmentGraph } from './styles-graph.mjs';

const root = fileURLToPath(new URL('../../../../', import.meta.url));
const output = path.join(root, 'graphify-out');
const args = process.argv.slice(2);

if (args.includes('--help')) {
    console.log(
        'Build the local code + SCSS + HTML Graphify graph (no model or API key).\n' +
            'Usage: node .claude/skills/graphify/scripts/build.mjs [--check]\n' +
            '--check: exit 0 when current; exit 1 when missing or stale.'
    );
    process.exit(0);
}
if (args.some((arg) => arg !== '--check')) {
    console.error('Unsupported argument; use --help.');
    process.exit(2);
}

function run(command, parameters, capture = false, cwd = root) {
    const result = spawnSync(command, parameters, { cwd, encoding: 'utf8', stdio: capture ? 'pipe' : 'inherit' });
    if (result.error || result.status !== 0)
        throw new Error(command + ' failed: ' + (result.error?.message || result.stderr || result.status));
    return result.stdout?.trim();
}

function corpus() {
    const tracked = execFileSync(
        'git',
        ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--exclude-from=.graphifyignore'],
        { cwd: root, encoding: 'utf8' }
    );
    const excluded = new Set(
        execFileSync('git', ['ls-files', '-z', '--cached', '--ignored', '--exclude-from=.graphifyignore'], {
            cwd: root,
            encoding: 'utf8'
        }).split('\0')
    );
    const files = new Map();
    const hashes = {};
    for (const file of [...new Set(tracked.split('\0').filter(Boolean))].sort()) {
        if (excluded.has(file)) continue;
        const adapterSource = /^packages\/[^/]+\/(src\/.*\.scss|stories\/.*\.(example\.html|[cm]?[jt]sx?))$/.test(file);
        const documentation = /^docs\/components\/[^/]+\.md$/.test(file);
        const nativeSource =
            /\.[cm]?[jt]sx?$/.test(file) ||
            (file.endsWith('.json') && !file.startsWith('docs/')) ||
            file.endsWith('.sh');
        const configuration = ['.graphifyignore', '.gitignore'].includes(file);
        if (!adapterSource && !documentation && !nativeSource && !configuration) continue;
        if (/(^|\/)\.env(?:[./]|$)|\.(env|pem|key)$|(^|\/)(credentials|secrets|auth)\./i.test(file)) continue;
        const absolute = path.join(root, file);
        if (!fs.existsSync(absolute) || !fs.lstatSync(absolute).isFile()) continue;
        const content = fs.readFileSync(absolute, 'utf8');
        hashes[file] = createHash('sha256').update(content).digest('hex');
        if (adapterSource || documentation) files.set(file, content);
    }
    return { files, hashes };
}

try {
    const { files, hashes } = corpus();
    const stamp = path.join(output, 'build.json');
    if (args.includes('--check')) {
        const current =
            fs.existsSync(stamp) &&
            fs.existsSync(path.join(output, 'graph.json')) &&
            JSON.stringify(JSON.parse(fs.readFileSync(stamp, 'utf8')).sources) === JSON.stringify(hashes);
        console.log(
            current
                ? 'Graph is current.'
                : 'Graph is missing or stale. Run node .claude/skills/graphify/scripts/build.mjs'
        );
        process.exit(current ? 0 : 1);
    }
    const version = run('graphify', ['--version'], true);
    if (version !== 'graphify 0.9.93')
        throw new Error(
            'This adapter is tested with graphify 0.9.93. Install with: uv tool install "graphifyy==0.9.93"'
        );
    fs.mkdirSync(output, { recursive: true });
    const stage = fs.mkdtempSync(path.join(output, 'build-'));
    const stagedOutput = path.join(stage, 'graphify-out');
    run('graphify', ['extract', '.', '--code-only', '--no-cluster', '--max-workers', '2', '--out', stage]);
    const graphPath = path.join(stagedOutput, 'graph.json');
    const graph = augmentGraph(JSON.parse(fs.readFileSync(graphPath, 'utf8')), files);
    fs.writeFileSync(graphPath, JSON.stringify(graph));
    run('graphify', ['cluster-only', stage, '--no-label', '--no-viz']);
    const built = JSON.parse(fs.readFileSync(graphPath, 'utf8'));
    const degree = new Map();
    for (const edge of built.links || built.edges) {
        for (const endpoint of [edge.source, edge.target]) degree.set(endpoint, (degree.get(endpoint) || 0) + 1);
    }
    const groups = new Map();
    for (const node of built.nodes) {
        if (!groups.has(node.community)) groups.set(node.community, []);
        groups.get(node.community).push(node);
    }
    const labels = {};
    for (const [community, members] of groups) {
        const hub = [...members].sort(
            (left, right) => (degree.get(right.id) || 0) - (degree.get(left.id) || 0) || left.id.localeCompare(right.id)
        )[0];
        labels[community] = hub.label + ' (' + members.length + ' nodes)';
        for (const member of members) member.community_name = labels[community];
    }
    fs.writeFileSync(path.join(stagedOutput, '.graphify_labels.json'), JSON.stringify(labels));
    fs.writeFileSync(graphPath, JSON.stringify(built));
    // Graphify resolves the analysis sidecar from cwd even when --graph points elsewhere.
    run('graphify', ['export', 'html', '--graph', graphPath, '--node-limit', '20000'], false, stage);
    const htmlPath = path.join(stagedOutput, 'graph.html');
    const html = fs
        .readFileSync(htmlPath, 'utf8')
        .replace(
            /<title>[^<]*<\/title>/,
            '<title>fundamental-styles source graph</title><link rel="icon" href="data:,">'
        );
    fs.writeFileSync(htmlPath, html);
    const reportPath = path.join(stagedOutput, 'GRAPH_REPORT.md');
    fs.writeFileSync(reportPath, fs.readFileSync(reportPath, 'utf8').replaceAll(stage, root));
    const report = {
        built_at: new Date().toISOString(),
        graphify_version: version,
        nodes: built.nodes.length,
        edges: (built.links || built.edges).length,
        ...graph.styles_summary,
        sources: hashes
    };
    fs.writeFileSync(path.join(stagedOutput, 'build.json'), JSON.stringify(report, null, 2) + '\n');
    for (const name of [
        'graph.json',
        'graph.html',
        'GRAPH_REPORT.md',
        '.graphify_analysis.json',
        '.graphify_labels.json',
        'build.json'
    ]) {
        const from = path.join(stagedOutput, name);
        if (fs.existsSync(from)) fs.renameSync(from, path.join(output, name));
    }
    fs.rmSync(stage, { recursive: true });
    console.log(
        'Built ' +
            report.nodes +
            ' nodes / ' +
            report.edges +
            ' edges; ' +
            report.scss_files +
            ' SCSS files / ' +
            report.html_examples +
            ' HTML examples.'
    );
    if (report.unresolved_imports)
        console.log(
            'Unresolved relative Sass imports: ' + report.unresolved_imports + '. The graph does not invent targets.'
        );
    console.log('Open graphify-out/graph.html or run graphify query "fd-button" --budget 1200');
} catch (error) {
    console.error(error.message);
    process.exitCode = 2;
}
