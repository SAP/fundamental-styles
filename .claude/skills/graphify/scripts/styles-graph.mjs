import path from 'node:path';
import { createHash } from 'node:crypto';
import scss from 'postcss-scss';

function id(kind, value) {
    return 'styles_' + kind + '_' + createHash('sha256').update(value).digest('hex').slice(0, 20);
}

function resolveImport(from, specifier, files) {
    if (!specifier.startsWith('.')) return;
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(from), specifier.split('?')[0]));
    const directory = path.posix.dirname(target);
    const name = path.posix.basename(target);
    const partial = path.posix.join(directory, '_' + name);
    return [target, partial, target + '.scss', partial + '.scss', target + '/_index.scss', target + '/index.scss'].find(
        (candidate) => files.has(candidate)
    );
}

export function augmentGraph(native, files) {
    if (!Array.isArray(native.nodes) || !Array.isArray(native.edges)) {
        throw new Error('Expected Graphify raw extraction with nodes and edges; check the supported version.');
    }
    const nodes = new Map(native.nodes.map((node) => [node.id, { ...node }]));
    const edges = native.edges.map((edge) => ({ ...edge }));
    const trees = new Map();
    const variables = new Map([
        ['fd-namespace', 'fd'],
        ['sap-namespace', 'sap']
    ]);
    const summary = { scss_files: 0, html_examples: 0, unresolved_imports: 0 };
    const edgeKeys = new Set();

    function fileNode(file) {
        const key = id('file', file);
        if (!nodes.has(key))
            nodes.set(key, {
                id: key,
                label: file,
                file_type: file.endsWith('.md') ? 'document' : 'code',
                source_file: file,
                source_location: 'L1',
                _origin: 'ast',
                metadata: { kind: 'file' }
            });
        return key;
    }

    function symbol(kind, label, file, line, declaration = false) {
        const key = id(kind, label);
        const owner =
            kind === 'class' &&
            /^packages\/[^/]+\/src\/[^/]+\.scss$/.test(file) &&
            label === 'fd-' + path.posix.basename(file, '.scss');
        if (!nodes.has(key) || (declaration && !nodes.get(key).metadata.declaration) || owner)
            nodes.set(key, {
                id: key,
                label,
                file_type: 'code',
                source_file: file,
                source_location: 'L' + line,
                _origin: 'ast',
                metadata: { kind, declaration }
            });
        return key;
    }

    function link(file, target, relation, line = 1) {
        const source = fileNode(file);
        const key = [source, target, relation].join(':');
        if (edgeKeys.has(key)) return;
        edgeKeys.add(key);
        edges.push({
            source,
            target,
            relation,
            context: relation === 'imports_from' ? 'import' : relation,
            confidence: 'EXTRACTED',
            weight: 1,
            source_file: file,
            source_location: 'L' + line,
            _origin: 'ast'
        });
    }

    function literal(value, local) {
        let result = value.replace(/\s*!default\s*$/, '').replace(/^['"]|['"]$/g, '');
        for (let iteration = 0; iteration < 4; iteration++) {
            const next = result.replace(
                /#\{\$([\w-]+)\}/g,
                (match, name) => local.get(name) || variables.get(name) || match
            );
            if (next === result) break;
            result = next;
        }
        return result;
    }

    for (const [file, content] of files) {
        if (!file.endsWith('.scss')) continue;
        const tree = scss.parse(content, { from: file });
        trees.set(file, tree);
        tree.walkDecls((decl) => {
            if (decl.prop.startsWith('$block-') && !variables.has(decl.prop.slice(1))) {
                variables.set(decl.prop.slice(1), decl.value);
            }
        });
    }

    for (const [file, tree] of trees) {
        summary.scss_files++;
        fileNode(file);
        const local = new Map();
        tree.walkDecls((decl) => {
            if (decl.prop.startsWith('$')) local.set(decl.prop.slice(1), decl.value);
            const line = decl.source.start.line;
            if (decl.prop.startsWith('--'))
                link(file, symbol('token', decl.prop, file, line, true), 'defines_token', line);
            for (const match of decl.value.matchAll(/var\(\s*(--[\w-]+)/g)) {
                link(file, symbol('token', match[1], file, line), 'uses_token', line);
            }
        });
        tree.walkRules((rule) => {
            const selector = literal(rule.selector, local);
            for (const match of selector.matchAll(/\.((?:fd|sap)-[\w-]+)/g)) {
                link(
                    file,
                    symbol('class', match[1], file, rule.source.start.line, true),
                    'defines_class',
                    rule.source.start.line
                );
            }
        });
        tree.walkAtRules((rule) => {
            const line = rule.source.start.line;
            if (['import', 'use', 'forward'].includes(rule.name)) {
                for (const match of rule.params.matchAll(/['"]([^'"]+)['"]/g)) {
                    const target = resolveImport(file, match[1], files);
                    if (target) link(file, fileNode(target), 'imports_from', line);
                    else if (match[1].startsWith('.')) summary.unresolved_imports++;
                }
            }
            if (['mixin', 'include'].includes(rule.name)) {
                const name = rule.params.match(/^[\w.-]+/)?.[0];
                if (name)
                    link(
                        file,
                        symbol('mixin', name, file, line, rule.name === 'mixin'),
                        rule.name === 'mixin' ? 'defines_mixin' : 'uses_mixin',
                        line
                    );
            }
        });
        const docs = 'docs/components/' + path.posix.basename(file, '.scss') + '.md';
        if (/^packages\/[^/]+\/src\/[^_][^/]*\.scss$/.test(file) && files.has(docs)) {
            link(docs, fileNode(file), 'documents');
        }
    }

    for (const [file, content] of files) {
        if (!file.endsWith('.example.html')) continue;
        summary.html_examples++;
        fileNode(file);
        const markup = content.replace(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, (ignored) =>
            ignored.replace(/[^\n]/g, ' ')
        );
        for (const tag of markup.matchAll(/<[a-z][\w:-]*(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi)) {
            for (const match of tag[0].matchAll(/(?<![\w:-])class\s*=\s*(["'])(.*?)\1/gis)) {
                const line = markup.slice(0, tag.index + match.index).split('\n').length;
                for (const name of match[2].split(/\s+/).filter((value) => /^(fd|sap)-[\w-]+$/.test(value))) {
                    link(file, symbol('class', name, file, line), 'uses_class', line);
                }
            }
        }
    }

    for (const edge of edges) {
        if (
            edge.relation !== 'imports_from' ||
            !files.has(edge.source_file) ||
            !/\.[cm]?[jt]sx?$/.test(edge.source_file)
        )
            continue;
        const line = Number(edge.source_location?.match(/^L(\d+)/)?.[1]);
        if (!line) continue;
        const statement = files.get(edge.source_file).split('\n')[line - 1];
        const specifier = statement?.match(/\bimport\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/)?.[1];
        if (!specifier || !/\.(scss|example\.html)(\?|$)/.test(specifier)) continue;
        const target = resolveImport(edge.source_file, specifier, files);
        if (target) edge.target = fileNode(target);
    }

    return { ...native, nodes: [...nodes.values()], edges, directed: true, styles_summary: summary };
}
