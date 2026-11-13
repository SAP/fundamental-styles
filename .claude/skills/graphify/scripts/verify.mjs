import assert from 'node:assert/strict';
import test from 'node:test';
import { augmentGraph } from './styles-graph.mjs';

const source = 'packages/styles/src/button.scss';
const helper = 'packages/styles/src/mixins/_button.scss';
const example = 'packages/styles/stories/Components/button/default.example.html';
const story = 'packages/styles/stories/Components/button/button.stories.js';

function fixture() {
    return new Map([
        [
            source,
            [
                '// @include fake();',
                "@import './mixins/button';",
                '$block: #{$fd-namespace}-button;',
                '.#{$block} {',
                '  @include fd-reset();',
                '  --fdButton_Color: var(--sapButton_Color);',
                '}'
            ].join('\n')
        ],
        [helper, '@mixin fd-reset() { margin: 0; }'],
        [example, '<!-- <b class="fd-fake"></b> -->\n<button class="fd-button fd-button--ghost">Go</button>'],
        [story, "import './default.example.html?raw';\nimport '../../../src/button.scss';"],
        ['docs/components/button.md', '# Button']
    ]);
}

test('connects Sass partial imports, mixin definitions and uses with source lines', () => {
    const graph = augmentGraph({ nodes: [], edges: [] }, fixture());
    const file = graph.nodes.find((node) => node.source_file === source && node.metadata.kind === 'file');
    const mixin = graph.nodes.find((node) => node.label === 'fd-reset');
    assert.equal(mixin.source_file, helper);
    const imported = graph.edges.find((edge) => edge.source === file.id && edge.relation === 'imports_from');
    assert.equal(graph.nodes.find((node) => node.id === imported.target).source_file, helper);
    assert.equal(imported.source_location, 'L2');
    assert.ok(
        graph.edges.some(
            (edge) => edge.source === file.id && edge.target === mixin.id && edge.relation === 'uses_mixin'
        )
    );
    assert.ok(
        graph.edges.some(
            (edge) => edge.target === mixin.id && edge.relation === 'defines_mixin' && edge.source_file === helper
        )
    );
    assert.ok(!graph.nodes.some((node) => node.label === 'fake'));
});

test('connects interpolated base classes, literal HTML classes and CSS token references', () => {
    const graph = augmentGraph({ nodes: [], edges: [] }, fixture());
    const block = graph.nodes.find((node) => node.label === 'fd-button');
    assert.equal(block.source_file, source);
    assert.ok(
        graph.edges.some(
            (edge) => edge.target === block.id && edge.relation === 'defines_class' && edge.source_file === source
        )
    );
    assert.ok(
        graph.edges.some(
            (edge) => edge.target === block.id && edge.relation === 'uses_class' && edge.source_file === example
        )
    );
    assert.ok(graph.nodes.some((node) => node.label === 'fd-button--ghost'));
    assert.ok(!graph.nodes.some((node) => node.label === 'fd-fake'));
    const token = graph.nodes.find((node) => node.label === '--sapButton_Color');
    assert.ok(graph.edges.some((edge) => edge.target === token.id && edge.relation === 'uses_token'));
    assert.ok(graph.edges.some((edge) => edge.relation === 'defines_token' && edge.source_file === source));
});

test('replaces native unresolved imports with actual SCSS and HTML files', () => {
    const native = {
        nodes: [{ id: 'story', label: story, source_file: story, source_location: 'L1' }],
        edges: [
            {
                source: 'story',
                target: 'ref_html',
                relation: 'imports_from',
                source_file: story,
                source_location: 'L1'
            },
            { source: 'story', target: 'ref_scss', relation: 'imports_from', source_file: story, source_location: 'L2' }
        ]
    };
    const graph = augmentGraph(native, fixture());
    assert.deepEqual(
        graph.edges
            .filter((edge) => edge.source === 'story')
            .map((edge) => graph.nodes.find((node) => node.id === edge.target).source_file),
        [example, source]
    );
    assert.ok(
        graph.edges.some((edge) => edge.relation === 'documents' && edge.source_file === 'docs/components/button.md')
    );
});

test('fails on invalid SCSS and never invents a local import target', () => {
    assert.throws(() => augmentGraph({ nodes: [], edges: [] }, new Map([[source, 'a {']])));
    const graph = augmentGraph({ nodes: [], edges: [] }, new Map([[source, "@import './missing';"]]));
    assert.ok(!graph.edges.some((edge) => edge.relation === 'imports_from'));
    assert.equal(graph.styles_summary.unresolved_imports, 1);
});

test('indexes actual HTML class attributes, excluding data attributes and script strings', () => {
    const graph = augmentGraph(
        { nodes: [], edges: [] },
        new Map([
            [
                example,
                '<script>const html = \'<b class="fd-script"></b>\';</script>\n' +
                    '<button data-class="fd-data" CLASS="fd-button">Go</button>'
            ]
        ])
    );
    assert.ok(graph.nodes.some((node) => node.label === 'fd-button'));
    assert.ok(!graph.nodes.some((node) => node.label === 'fd-data' || node.label === 'fd-script'));
    assert.equal(graph.edges.find((edge) => edge.relation === 'uses_class').source_location, 'L2');
});
