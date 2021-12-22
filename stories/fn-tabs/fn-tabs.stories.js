export default {
    title: 'Experimental/Tabs',
    parameters: {
        description: `**Modifier classes for Tabs style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;          | Modifier class           |
| -------------------------------------- | ------------------------ |
| default&nbsp;&nbsp;&nbsp;&nbsp;        | \`none\`                 |
| positive&nbsp;&nbsp;&nbsp;&nbsp;       | \`.fn-tabs--positive\`  |
| critical&nbsp;&nbsp;&nbsp;&nbsp;       | \`.fn-tabs--critical\`  |
| negative&nbsp;&nbsp;&nbsp;&nbsp;       | \`.fn-tabs--negative\`  |
| multi-instance&nbsp;&nbsp;&nbsp;&nbsp; | \`.fn-tabs--multi-instance\`  |
<br>

## Structure

- \`fn-tabs\`: Tabs container. Modifier classes: \`fn-positive\`, \`fn-critical\`, \`fn-negative\` and \`fn-multi-instance\`
    - \`fn-tabs__item\`: Tabs Instance. Modifier classes: \`fn-tabs__item--selected\` for when the item is selected
    - \`fn-tabs__right-container\`: A tabs item that serves as a container for overflow menu and add new instance button. The item is pushed to the right hand-side of the container.
      - \`fn-tabs__icon\`: container for an icon
      - \`fn-tabs__text\`: text content container
      - \`fn-tabs__button\`: modifier class for nested button used in cases where the item has children and in Multi-instance tabs
   

<br><br><br>
    `,
        components: ['fn-tabs', 'fn-nested-button', 'fn-button', 'icon']
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

export const defaultTabs = () => `${localStyles}
<div class="docs-fn-container">
    <ul class="fn-tabs" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">   
            <div class="fn-tabs__text">Tab Item  (42)</div>
        </li>
        <li role="tab" class="fn-tabs__item is-disabled">   
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" class="fn-tabs__right-container">   
            <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--overflow"></span>
            </button>
        </li>
    </ul>
</div>
`;

defaultTabs.storyName = 'Default';

defaultTabs.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const semantic = () => `${localStyles}
<div class="docs-fn-container">
    <ul class="fn-tabs fn-tabs--positive" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
    </ul>
</div>

<div class="docs-fn-container">
    <ul class="fn-tabs fn-tabs--critical" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
    </ul>
</div>

<div class="docs-fn-container">
    <ul class="fn-tabs fn-tabs--negative" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="show children elements" tabindex="-1">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
        <li role="tab" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
        </li>
    </ul>
</div>
`;

semantic.storyName = 'Semantic Tabs';

semantic.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'The `.fn-tabs--positive`, `.fn-tabs--critical` or `.fn-tabs--negative` modifier classes are added to the `.fn-tabs` base class to achieve positive, critical or negative tabs. '
    }
};

export const multiInstance = () => `${localStyles}
<div class="docs-fn-container">
    <ul class="fn-tabs fn-tabs--multi-instance" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="close tab" tabindex="-1">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="close tab" tabindex="-1">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="close tab" tabindex="-1">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="close tab" tabindex="-1">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button" aria-label="close tab" tabindex="-1">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </li>
        <li role="tab" class="fn-tabs__right-container">
            <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--overflow"></span>
            </button>
            <button class="fn-button fn-button--transparent fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--add"></span>
            </button>
        </li>
    </ul>
</div>
`;

multiInstance.storyName = 'Multi-Instance Tabs';

multiInstance.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'The `.fn-tabs--multi-instance` modifier class toachieve Multi Instance tabs. It can be combined with a semantic modifier class.'
    }
};


