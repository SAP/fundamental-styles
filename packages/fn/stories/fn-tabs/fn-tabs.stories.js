import 'fn/src/fn-tabs.scss';
import 'fn/src/fn-nested-button.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-split-button.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Tabs',
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
    tags: []
  }
};
const localStyles = `
<style>
.docs-story {
    background: white;
}

</style>
`;
export const DefaultTabs = () => `${localStyles}
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
        <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
            <span class="sap-icon sap-icon--overflow"></span>
        </button>
    </li>
</ul>
`;
DefaultTabs.storyName = 'Default';
DefaultTabs.parameters = {
  docs: {
    iframeHeight: 500
  }
};
export const Semantic = () => `${localStyles}
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

    <br/><br/><br/>

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

    <br/><br/><br/>

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
`;
Semantic.storyName = 'Semantic Tabs';
Semantic.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'The `.fn-tabs--positive`, `.fn-tabs--critical` or `.fn-tabs--negative` modifier classes are added to the `.fn-tabs` base class to achieve positive, critical or negative tabs. '
    }
  }
};
export const MultiInstance = () => `${localStyles}
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
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--overflow"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--add"></span>
            </button>
        </li>
    </ul>
`;
MultiInstance.storyName = 'Multi-Instance Tabs';
MultiInstance.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'The `.fn-tabs--multi-instance` modifier class toachieve Multi Instance tabs. It can be combined with a semantic modifier class.'
    }
  }
};
export const Split = () => `${localStyles}
    <ul class="fn-tabs" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="-1" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" tabindex="-1" aria-label="show children elements" disabled>
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
    </ul>
    
    <br/><br/><br/>

    <ul class="fn-tabs fn-tabs--positive" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="-1" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" tabindex="-1" aria-label="show children elements" disabled>
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
    </ul>

    <br/><br/><br/>

    <ul class="fn-tabs fn-tabs--critical" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="-1" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" tabindex="-1" aria-label="show children elements" disabled>
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
    </ul>

    <br/><br/><br/>

    <ul class="fn-tabs fn-tabs--negative" role="tablist">
        <li role="tab" tabindex="0" class="fn-tabs__item fn-tabs__item--selected">
            <div class="fn-tabs__icon">
                <span class="sap-icon sap-icon--calendar"></span>
            </div>
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-nested-button--split fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="0" class="fn-tabs__item">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button fn-tabs__button--split" aria-label="show children elements">
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
        <li role="tab" tabindex="-1" class="fn-tabs__item is-disabled">
            <div class="fn-tabs__text">Tab Item</div>
            <button class="fn-nested-button fn-tabs__button fn-tabs__button--split" aria-label="show children elements" tabindex="-1" disabled>
                <span class="sap-icon sap-icon--megamenu"></span>
            </button>
        </li>
    </ul>
`;
Split.storyName = 'Split Tabs';
Split.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'For Split Tabs you need to add the `.fn-nested-button--split` and `.fn-tabs__button--split` modifier classes to the button element with base class `.fn-nested-button` aka the Nested Button.'
    }
  }
};
