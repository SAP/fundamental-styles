import 'fn/src/fn-button.scss';
import 'fn/src/fn-segmented-button.scss';
import 'fn/src/fn-nested-button.scss';
import 'fn/src/fn-split-button.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Button',
  parameters: {
    description: `
**Modifier classes for button style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;             | Modifier class            |
| ----------------------------------------- | ------------------------- |
| primary (default)&nbsp;&nbsp;&nbsp;&nbsp; | \`none\`                  |
| emphasized &nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-button--emphasized\` |
| secondary &nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-button--secondary\`  |
| layout &nbsp;&nbsp;&nbsp;&nbsp;           | \`fn-button--layout\`     |
| positive &nbsp;&nbsp;&nbsp;&nbsp;         | \`fn-button--positive\`   |
| critical &nbsp;&nbsp;&nbsp;&nbsp;         | \`fn-button--critical\`   |
| negative &nbsp;&nbsp;&nbsp;&nbsp;         | \`fn-button--negative\`   |
| selected &nbsp;&nbsp;&nbsp;&nbsp;         | \`fn-button--selected\`   |

<br><br>

        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-container > div {
        text-align: center;
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
    <div><b>Primary</b></div>
    <div><b>Primary Emphasized </b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
    </div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;
Primary.storyName = 'Primary Button';
Primary.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Primary buttons don\'t need a modifier, just add the `.fn-button` class to your html element. For emphasized button add `.fn-button--emphasized` modifier class to the `.fn-button` base class.'
    }
  }
};
export const Secondary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Secondary</b></div>
    <div><b>Secondary Emphasized</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--secondary">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--secondary is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--secondary is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--secondary is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--secondary" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary fn-button--emphasized" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;
Secondary.storyName = 'Secondary Buttons';
Secondary.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: `

| Style&nbsp;&nbsp;&nbsp;&nbsp;                 | Modifier class                                |
| --------------------------------------------- | --------------------------------------------- |
| secondary&nbsp;&nbsp;&nbsp;&nbsp;             | \`fn-button--secondary\`                      |
| secondary emphasized&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-button--secondary fn-button--emphasized\`|
`
    }
  }
};
export const LayoutBtn = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--layout">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--layout is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--layout is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--layout is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--layout" disabled>
        <span class="fn-button__text">Button</span>
    </button>
</div>
`;
LayoutBtn.storyName = 'Layout Button';
LayoutBtn.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: `For Layout type of button add the \`fn-button--layout\` modifier class to the \`fn-button\` base class.
`
    }
  }
};
export const Semantic = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Positive</b></div>
    <div><b>Positive Emphasized</b></div>
    <div><b>Critical</b></div>
    <div><b>Critical Emphasized</b></div>
    <div><b>Negative</b></div>
    <div><b>Negative Emphasized</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--positive">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--positive fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--emphasized">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--positive is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--positive fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--positive is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--positive fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--positive is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--positive fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--positive" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--positive fn-button--emphasized" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--critical fn-button--emphasized" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--negative fn-button--emphasized" disabled>
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

| Style&nbsp;&nbsp;&nbsp;&nbsp;               | Modifier class                                |
| ------------------------------------------- | --------------------------------------------- |
| positive&nbsp;&nbsp;&nbsp;&nbsp;            | \`fn-button--positive\`                       |
| positive emphasized&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--positive fn-button--emphasized\` |
| critical&nbsp;&nbsp;&nbsp;&nbsp;            | \`fn-button--critical\`                       |
| critical emphasized&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--critical fn-button--emphasized\` |
| negative&nbsp;&nbsp;&nbsp;&nbsp;            | \`fn-button--negative\`                       |
| negative emphasized&nbsp;&nbsp;&nbsp;&nbsp; | \`fn-button--negative fn-button--emphasized\` |
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
    <button class="fn-button">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button is-hover">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-hover">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--layout fn-button--icon-only is-hover" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button is-active">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-active">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--layout fn-button--icon-only is-active" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button is-focus">
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--emphasized is-focus">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--layout fn-button--icon-only is-focus" aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button" disabled>
        <span class="sap-icon sap-icon--paper-plane"></span>
        <span class="fn-button__text">Send</span>
    </button>
    <button class="fn-button fn-button--emphasized" disabled>
        <span class="fn-button__text">Send</span>
        <span class="sap-icon sap-icon--share-2"></span>
    </button>
    <button class="fn-button fn-button--layout fn-button--icon-only" disabled aria-label="More">
        <span class="sap-icon sap-icon--overflow"></span>
    </button>
</div>
`;
Icon.storyName = 'Icon Buttons';
Icon.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: `For icon-only type of button add the \`.fn-button--icon-only\` modifier class to the \`.fn-button\` base class.
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
    <button class="fn-button fn-button--secondary">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--selected is-hover">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary is-hover">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--selected is-active">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary is-active">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--selected is-focus">
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary is-focus">
        <span class="fn-button__text">Button</span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--selected" disabled>
        <span class="fn-button__text">Button</span>
    </button>
    <button class="fn-button fn-button--secondary" disabled>
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
export const Menu = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <button class="fn-button fn-button--emphasized">
        <span class="sap-icon sap-icon--attachment"></span>
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
    <button class="fn-button fn-button--secondary">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <button class="fn-button fn-button--emphasized is-hover">
        <span class="sap-icon sap-icon--attachment"></span>
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
    <button class="fn-button fn-button--secondary is-hover">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <button class="fn-button fn-button--emphasized is-active">
        <span class="sap-icon sap-icon--attachment"></span>
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
    <button class="fn-button fn-button--secondary is-active">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <button class="fn-button fn-button--emphasized is-focus">
        <span class="sap-icon sap-icon--attachment"></span>
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
    <button class="fn-button fn-button--secondary is-focus">
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <button class="fn-button fn-button--emphasized" disabled>
        <span class="sap-icon sap-icon--attachment"></span>
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
    <button class="fn-button fn-button--secondary" disabled>
        <span class="fn-button__text">Button</span>
        <span class="sap-icon sap-icon--megamenu"></span>
    </button>
</div>
`;
Menu.storyName = 'Menu Buttons';
Menu.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: ''
    }
  }
};
export const Segmented = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--selected">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Button</span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--selected">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="fn-button__text">Send</span>
            <span class="sap-icon sap-icon--paper-plane"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--layout">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--selected">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
        <button class="fn-button fn-button--layout">
            <span class="sap-icon sap-icon--share-2"></span>
            <span class="fn-button__text">Share</span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--selected fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
        <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Share">
            <span class="sap-icon sap-icon--share-2"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div class="fn-segmented-button" role="group" aria-label="Group label">
        <button class="fn-button fn-button--layout" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-button fn-button--layout" disabled>
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
export const Split = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <div class="fn-split-button">
        <button class="fn-button fn-button--secondary">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>

    <div class="fn-split-button fn-split-button--emphasized">
        <button class="fn-button fn-button--emphasized">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split fn-nested-button--emphasized" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <div class="fn-split-button is-hover">
        <button class="fn-button fn-button--secondary">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split is-hover" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
    
    <div class="fn-split-button fn-split-button--emphasized is-hover">
        <button class="fn-button fn-button--emphasized">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split fn-nested-button--emphasized is-hover" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <div class="fn-split-button is-hover">
        <button class="fn-button fn-button--secondary">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split is-active" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
    
    <div class="fn-split-button fn-split-button--emphasized is-hover">
        <button class="fn-button fn-button--emphasized">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split fn-nested-button--emphasized is-active" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <div class="fn-split-button is-hover">
        <button class="fn-button fn-button--secondary">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split is-focus" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
    
    <div class="fn-split-button fn-split-button--emphasized is-hover">
        <button class="fn-button fn-button--emphasized">
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split fn-nested-button--emphasized is-focus" aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <div class="fn-split-button is-disabled">
        <button class="fn-button fn-button--secondary" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split" disabled aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
    
    <div class="fn-split-button fn-split-button--emphasized is-disabled">
        <button class="fn-button fn-button--emphasized" disabled>
            <span class="fn-button__text">Button</span>
        </button>
        <button class="fn-nested-button fn-nested-button--split fn-nested-button--emphasized" disabled aria-label="nested button">
            <span class="sap-icon sap-icon--megamenu"></span>
        </button>
    </div>
</div>
`;
Split.storyName = 'Split Buttons';
Split.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: ''
    }
  }
};
