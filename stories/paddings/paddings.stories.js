export default {
    title: 'Layouts/Paddings',
    parameters: {
        description: `The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
        With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element.
        We now provide a number of predefined padding clases which add predefined padding values.`,
        tags: ['f3', 'theme'],
        components: ['paddings']
    }
};

export const AllRoundPadding = () => `<div class="docs-column-flex docs-column-flex--inline">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container</div>
        </div>
    </div>
`;
AllRoundPadding.storyName = 'All-Round Padding';
AllRoundPadding.parameters = {
    docs: {
        storyDescription: `All-round padding appears on all sides of the container they are applied to. Use <code>fd-padding</code>
        class to apply a padding of 1rem.`
    }
};

export const DoubleSidedPadding = () => `<div class="docs-column-flex docs-column-flex--inline">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-begin-end--tiny">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(tiny)</div>
        </div>
        <br />
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-begin-end--sm">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(sm)</div>
        </div>
        <br />
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-begin-end--md">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(md)</div>
        </div>
        <br />
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-begin-end--lg">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(lg)</div>
        </div>
    </div>
`;
DoubleSidedPadding.storyName = 'Double-Sided Padding';
DoubleSidedPadding.parameters = {
    docs: {
        storyDescription: `Double sided paddings appear on two opposite sides of the element. Use <code>fd-padding-begin-end</code>
        class with any of the following modifiers:

| Element | Modifier class |
| ----------------: | :------------ |
| Tiny | \`fd-padding-begin-end--tiny\` |
| Small | \`fd-padding-begin-end--sm\` |
| Medium | \`fd-padding-begin-end--md\` |
| Large | \`fd-padding-begin-end--lg\` |
`
    }
};


export const NoPadding = () => `<div class="docs-column-flex docs-column-flex--inline">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 docs-layout-grid-bg--padded fd-padding--none">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container</div>
        </div>
    </div>
`;
NoPadding.parameters = {
    docs: {
        storyDescription: `No padding classes remove existing container paddings. Use <code>fd-padding--none</code>
        modifier to remove existing padding. Place the no padding classes last to make sure they will be applied.`
    }
};

export const ResponsivePadding = () => `<div class="docs-column-flex docs-column-flex--inline">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-responsive--sm">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(sm)</div>
        </div>
        <br />
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-responsive--md">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(md)</div>
        </div>
        <br />
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-responsive--lg">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(lg)</div>
        </div>
        <br />
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1 fd-padding-responsive--xl">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">container(xl)</div>
        </div>
    </div>
`;
ResponsivePadding.parameters = {
    docs: {
        storyDescription: `The responsive padding class adds a double sided padding inside a container based on its width. Use <code>fd-padding-responsive</code>
        class with any of the following modifiers:

| Element | Modifier class |
| ----------------: | :------------ |
| Small | \`fd-padding-responsive--sm\` |
| Medium | \`fd-padding-responsive--md\` |
| Large | \`fd-padding-responsive--lg\` |
| Extra-large | \`fd-padding-responsive--xl\` |
`
    }
};
