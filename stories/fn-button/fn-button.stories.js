export default {
    title: 'Experimental/Button',
    parameters: {
        description: `
**Modifier classes for button style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| primary&nbsp;&nbsp;&nbsp;&nbsp;   | \`none\`                 |
| secondary&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--secondary\` |
| flat&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--flat\`      |
| outline&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-button--outline\`   |
| naked&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--naked\`     |
| link&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--link\`      |

<br><br>

**Modifier classes for button structure:**

| Structure&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class           |
| --------------------------------- | ------------------------ |
| No-Icon&nbsp;&nbsp;&nbsp;&nbsp;   | \`none\`                 |
| Icon-Only&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--icon-only\` |
| Icon-Left&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--icon-left\` |
| Icon-Right&nbsp;&nbsp;&nbsp;&nbsp;| \`fn-button--icon-right\`|

<br><br>
        `,
        components: ['fn-button', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        column-gap: 0.5rem;
        row-gap: 0.5rem;
        background: white;
        padding: 1.5rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

    .docs-fn-header-container code {
        margin: 0 1rem;
    }
</style>
`;

export const primary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
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
    <button class="fn-button" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--icon-only is-pressed" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--icon-only" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--icon-right is-pressed">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--icon-left is-pressed">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

primary.storyName = 'Primary Button';

primary.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Primary button is the default button, no modifier class is needed. For an Icon-Only button add the `.fn-button--icon-only` modifier class. To add an icon you can use `.fn-button--icon-right` or `.fn-button--icon-left` based on where you want the icon to be rendered.'
    }
};


export const secondary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--secondary">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary is-pressed">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--secondary fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-only is-pressed" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--secondary fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-right is-pressed">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--secondary fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-left is-pressed">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

secondary.storyName = 'Secondary Button';

secondary.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--secondary` modifier class to `.fn-button` for Secondary Button.'
    }
};

export const flat = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--flat">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--flat is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--flat is-pressed">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--flat is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--flat" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--flat fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-only is-pressed" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--flat fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-right is-pressed">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--flat fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-left is-pressed">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--flat fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

flat.storyName = 'Flat Button';

flat.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--flat` modifier class to `.fn-button` for Flat Button.'
    }
};

export const link = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--link">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--link is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--link is-pressed">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--link is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--link" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--link fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-only is-pressed" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--link fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-right is-pressed">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--link fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-left is-pressed">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--link fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

link.storyName = 'Link Button';

link.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--link` modifier class to `.fn-button` for Link Button.'
    }
};

export const outline = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--outline">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--outline is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--outline is-pressed">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--outline is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--outline" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--outline fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-only is-pressed" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--outline fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-right is-pressed">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--outline fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-left is-pressed">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--outline fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

outline.storyName = 'Outline Button';

outline.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--outline` modifier class to `.fn-button` for Outline Button.'
    }
};

export const naked = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--naked">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--naked is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--naked is-pressed">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--naked is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--naked" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--naked fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-only is-pressed" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--naked fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-right is-pressed">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--naked fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-left is-pressed">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--naked fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

naked.storyName = 'Naked Button';

naked.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--naked` modifier class to `.fn-button` for Naked Button.'
    }
};
