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
| transparent (secondary)&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--transparent\`|
| accept (semantic)&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--accept\`     |
| success (semantic)&nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-button--success\`    |
| attention (semantic)&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--attention\`  |
| critical (semantic)&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--critical\`   |
| reject (semantic)&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--reject\`     |
| negative (semantic)&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--negative\`   |
| selected (semantic)&nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-button--selected\`    |

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
        components: ['fn-button', 'fn-segmented-button', 'fn-nested-button', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        background: white;
        padding: 1rem;
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

export const Primary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Emphasized </b></div>
    <div><b>Default</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--emphasized" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;

Primary.storyName = 'Primary Buttons';
Primary.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'Primary buttons are two types: default and emphasized. For the default one no modifier class is needed, just add the `.fn-button` class to your html element. For emphasized button add `.fn-button--emphasized` modifier class to the `.fn-button` base class.'
        }
    }
};

export const Secondary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Ghost</b></div>
    <div><b>Transparent</b></div>
    <div><b>Neutral</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--ghost">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--ghost is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--ghost is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--ghost is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--ghost" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--transparent" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--neutral" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;

Secondary.storyName = 'Secondary Buttons';
Secondary.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Secondary buttons are three types: ghost, transparent and neutral.

| Style&nbsp;&nbsp;&nbsp;&nbsp;        | Modifier class           |
| ------------------------------------ | ------------------------ |
| ghost&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--ghost\`      |
| transparent&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-button--transparent\`|
| neutral&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--neutral\`    |
`
        }
    }
};

export const Semantic = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Accept</b></div>
    <div><b>Success</b></div>
    <div><b>Attention</b></div>
    <div><b>Critical</b></div>
    <div><b>Reject</b></div>
    <div><b>Negative</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--accept">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--accept is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--accept is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--accept is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--accept" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--success" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--attention" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--reject" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;

Semantic.storyName = 'Semantic Buttons';
Semantic.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For semantic button add the appropriate modifier class to the \`.fn-button\` base class.

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| accept&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--accept\`     |
| success&nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-button--success\`    |
| attention&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-button--attention\`  |
| critical&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--critical\`   |
| reject&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--reject\`     |
| negative&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-button--negative\`   |
        `
        }
    }
};

export const Icon = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Icon-Left</b></div>
    <div><b>Icon-Right</b></div>
    <div><b>Icon-Only</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--icon-left">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--icon-left is-hover">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right is-hover">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only is-hover" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--icon-left is-active">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right is-active">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only is-active" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--icon-left is-focus">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right is-focus">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only is-focus" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--icon-left" disabled>
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Send</span>
    </button>
    <button class="fn-button fn-button--emphasized fn-button--icon-right" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--transparent fn-button--icon-only" disabled aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>
`;

Icon.storyName = 'Icon Buttons';
Icon.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Depending on where you want the icon to be rendered add the appropriate modifier class to the \`.fn-button\` base class.

| Structure&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class           |
| --------------------------------- | ------------------------ |
| Icon-Left&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--icon-left\` |
| Icon-Right&nbsp;&nbsp;&nbsp;&nbsp;| \`fn-button--icon-right\`|
| Icon-Only&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--icon-only\` |
`
        }
    }
};

export const Toggle = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Selected </b></div>
    <div><b>Default</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--selected">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--selected is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--selected is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--selected is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--selected" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--ghost" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;

Toggle.storyName = 'Toggle Buttons';
Toggle.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'Add the `.fn-button--selected` class to the button when it is in toggled (selected) state.'
        }
    }
};

export const Segmented = () => `${localStyles}
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

Segmented.storyName = 'Segmented Button';
Segmented.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: ''
        }
    }
};

export const Nested = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Nested Button</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-nested-button" aria-label="nested button">
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-nested-button is-hover" aria-label="hovered nested button">
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-nested-button is-active" aria-label="active nested button">
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-nested-button is-focus" aria-label="focused nested button">
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-nested-button is-disabled" aria-label="disabled nested button" disabled>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>
`;

Nested.storyName = 'Nested Buttons';
Nested.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: ''
        }
    }
};
