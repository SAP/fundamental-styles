export default {
    title: 'Experimental/Button',
    parameters: {
        description: `
**Modifier classes for button style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| default (primary)&nbsp;&nbsp;&nbsp;&nbsp;        | \`none\`                  |
| emphasized (primary)&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--emphasized\` |
| ghost (secondary)&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--ghost\`      |
| neutral (secondary) &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--neutral\`    |
| transparent (layout)&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--transparent\`|
| accept (semantic)&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--accept\`     |
| success (semantic)&nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-button--success\`    |
| attention (semantic)&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--attention\`  |
| critical (semantic)&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--critical\`   |
| reject (semantic)&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--reject\`     |
| negative (semantic)&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--negative\`   |
| toggled (semantic)&nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-button--toggled\`    |

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
        components: ['fn-button', 'fn-segmented-button', 'icon']
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

export const defaultPrimary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
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
    <button class="fn-button is-active">
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
    <button class="fn-button fn-button--icon-only is-active" aria-label="Share">
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
    <button class="fn-button fn-button--icon-right is-active">
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
    <button class="fn-button fn-button--icon-left is-active">
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

defaultPrimary.storyName = 'Default (Primary) Button';

defaultPrimary.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'For the default button no modifier class is needed. For an icon-only button add the `.fn-button--icon-only` modifier class. To add an icon you can use `.fn-button--icon-right` or `.fn-button--icon-left` based on where you want the icon to be rendered.'
    }
};


export const emphasized = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--emphasized fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--emphasized fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--emphasized fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

emphasized.storyName = 'Emphasized (Primary) Button';

emphasized.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--emphasized` modifier class to `.fn-button` for emphasized button.'
    }
};

export const ghost = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--ghost">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--ghost fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--ghost fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--ghost fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

ghost.storyName = 'Ghost (Secondary) Button';

ghost.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--ghost` modifier class to `.fn-button` for ghost button.'
    }
};

export const neutral = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--neutral">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--neutral fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--neutral fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--neutral fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--neutral fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

neutral.storyName = 'Neutral (Secondary) Button';

neutral.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--neutral` modifier class to `.fn-button` for neutral button.'
    }
};

export const transparent = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--transparent">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--transparent fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--transparent fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

transparent.storyName = 'Transparent (Layout) Button';

transparent.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--transparent` modifier class to `.fn-button` for transparent button.'
    }
};

export const accept = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--accept">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--accept is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--accept is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--accept is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--accept" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--accept fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--accept fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--accept fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--accept fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

accept.storyName = 'Accept (Semantic) Button';

accept.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--accept` modifier class to `.fn-button` for Accept button.'
    }
};

export const success = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--success">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--success fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--success fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--success fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--success fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

success.storyName = 'Success (Semantic) Button';

success.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--success` modifier class to `.fn-button` for success button.'
    }
};

export const attention = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--attention">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--attention fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--attention fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--attention fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--attention fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

attention.storyName = 'Attention (Semantic) Button';

attention.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--attention` modifier class to `.fn-button` for attention button.'
    }
};

export const critical = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--critical">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--critical fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--critical fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--critical fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

critical.storyName = 'Critical (Semantic) Button';

critical.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--critical` modifier class to `.fn-button` for critical button.'
    }
};

export const reject = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--reject">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--reject fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--reject fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--reject fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--reject fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

reject.storyName = 'Reject (Semantic) Button';

reject.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--reject` modifier class to `.fn-button` for reject button.'
    }
};

export const negative = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--negative">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--negative fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--negative fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--negative fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

negative.storyName = 'Negative (Semantic) Button';

negative.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--negative` modifier class to `.fn-button` for negative button.'
    }
};

export const toggled = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Active</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>No-Icon</b></div>
    <button class="fn-button fn-button--ghost fn-button--toggled">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Only</b></div>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-only" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-only is-hover" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-only is-active" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-only is-focus" aria-label="Share">
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-only disabled" aria-label="Share" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
</div>


<div class="docs-fn-container">
    <div><b>Icon-Right</b></div>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-right">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-right is-hover">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-right is-active">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-right is-focus">
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--paper-plane"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>Icon-Left</b></div>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-left">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
    <button class="fn-button fn-button--ghost fn-button--toggled fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--share-2"></span>
        <span class="fn-button__text">Share</span>
    </button>
</div>
`;

toggled.storyName = 'Toggled Button';

toggled.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-button--toggled` modifier class to `.fn-button` for toggled button.'
    }
};

export const segmented = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--selected">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent">
            <span class="fn-button__text">Button</span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--transparent fn-button--icon-right">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--selected fn-button--icon-right">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-right">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-right">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-right">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--transparent fn-button--icon-left">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-left">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--selected fn-button--icon-left">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-left">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-left">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--selected fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--transparent" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--transparent" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--selected" disabled>
            <span class="fn-button__text">Button</span>
        </button>
    </div>
</div>
`;

segmented.storyName = 'Segmented Button';

segmented.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: ''
    }
};

