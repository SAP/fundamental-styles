export default {
    title: 'Experimental/Tabs',
    parameters: {
        description: '',
        components: ['fn-tabs']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        background: white;
        padding: 1.5rem;
    }

</style>
`;

export const group = () => `${localStyles}
<div class="docs-fn-container">
    <ul class="fn-tabs" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">One</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Two</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Three</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Four</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Five</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Six</li>
        <li role="tab" class="fn-tabs__item is-disabled">Seven</li>
    </ul>
</div>
`;

group.storyName = 'Group';

group.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const individual = () => `${localStyles}
<div class="docs-fn-container">
    <ul class="fn-tabs fn-tabs--individual" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">One</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Two</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Three</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Four</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Five</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Six</li>
        <li role="tab" class="fn-tabs__item is-disabled">Seven</li>
    </ul>
</div>
`;

individual.storyName = 'Individual';

individual.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Use the `.fn-tabs--individual` modifier class for Individual Tabs. '
    }
};

export const line = () => `${localStyles}
<div class="docs-fn-container">
    <ul class="fn-tabs fn-tabs--line" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">One</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Two</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Three</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Four</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Five</li>
        <li role="tab" tabindex="0" class="fn-tabs__item">Six</li>
        <li role="tab" class="fn-tabs__item is-disabled">Seven</li>
    </ul>
</div>
`;

line.storyName = 'Line';

line.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Use the `.fn-tabs--line` modifier class for Line Tabs. '
    }
};
