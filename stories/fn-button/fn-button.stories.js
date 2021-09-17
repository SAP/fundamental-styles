export default {
    title: 'Experimental/Button',
    parameters: {
        description: `Fiori Next BUtton
        `,
        components: ['fn-button']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: flex;
        flex-wrap: wrap;
        background: white;
        padding: 1rem;
        
    }
    .docs-fn-container > button {
       margin: 0 0.5rem;
    }
</style>
`;

export const primary = () => `${localStyles}
<div class="docs-fn-container">
    <button class="fn-button">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button is-pressed">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button disabled" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;

primary.storyName = 'Default';

primary.parameters = {
    docs: {
        iframeHeight: 500
    }
};
