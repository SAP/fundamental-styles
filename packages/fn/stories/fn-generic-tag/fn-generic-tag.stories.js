import 'fn/src/fn-generic-tag.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Generic Tag',
  parameters: {
    description: `**Modifier classes for Generic Tag style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class                |
| --------------------------------- | ----------------------------- |
| neutral&nbsp;&nbsp;&nbsp;&nbsp;   | \`none\`                      |
| positive&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-generic-tag--positive\`  |
| critical&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-generic-tag--critical\`  |
| negative&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-generic-tag--negative\`  |
| info&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-generic-tag--info\`      |
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

    .docs-fn-container {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 1rem;
        row-gap: 1rem;
        padding: 1rem;
    }
</style>
`;
export const GenericTag = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-generic-tag" tabindex="0">
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>hover</b></div>
    <div class="fn-generic-tag is-hover" tabindex="0">
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>active</b></div>
    <div class="fn-generic-tag is-active" tabindex="0">
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>focus</b></div>
    <div class="fn-generic-tag is-focus" tabindex="0">
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>disabled</b></div>
    <div class="fn-generic-tag is-disabled">
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>
</div>
`;
GenericTag.parameters = {
  docs: {
    iframeHeight: 500
  }
};
export const GenericTagPositive = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-generic-tag fn-generic-tag--positive" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>hover</b></div>
    <div class="fn-generic-tag fn-generic-tag--positive is-hover" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>active</b></div>
    <div class="fn-generic-tag fn-generic-tag--positive is-active" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>focus</b></div>
    <div class="fn-generic-tag fn-generic-tag--positive is-focus" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>disabled</b></div>
    <div class="fn-generic-tag fn-generic-tag--positive is-disabled">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>
</div>
`;
GenericTagPositive.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: `Add the \`.fn-generic-tag--positive\` modifier class to the \`.fn-generic-tag\` base class for positive generic tag.
`
    }
  }
};
export const GenericTagCritical = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-generic-tag fn-generic-tag--critical" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--alert"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>hover</b></div>
    <div class="fn-generic-tag fn-generic-tag--critical is-hover" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--alert"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>active</b></div>
    <div class="fn-generic-tag fn-generic-tag--critical is-active" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--alert"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>focus</b></div>
    <div class="fn-generic-tag fn-generic-tag--critical is-focus" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--alert"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>disabled</b></div>
    <div class="fn-generic-tag fn-generic-tag--critical is-disabled">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--alert"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>
</div>
`;
GenericTagCritical.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Add the `.fn-generic-tag--critical` modifier class to the `.fn-generic-tag` base class for critical generic tag.'
    }
  }
};
export const GenericTagNegative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-generic-tag fn-generic-tag--negative" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-cancel-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>hover</b></div>
    <div class="fn-generic-tag fn-generic-tag--negative is-hover" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-cancel-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>active</b></div>
    <div class="fn-generic-tag fn-generic-tag--negative is-active" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-cancel-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>focus</b></div>
    <div class="fn-generic-tag fn-generic-tag--negative is-focus" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-cancel-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>disabled</b></div>
    <div class="fn-generic-tag fn-generic-tag--negative is-disabled">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--sys-cancel-2"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>
</div>
`;
GenericTagNegative.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Add the `.fn-generic-tag--negative` modifier class to the `.fn-generic-tag` base class for negative generic tag.'
    }
  }
};
export const GenericTagInfo = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-generic-tag fn-generic-tag--info" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--information"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>hover</b></div>
    <div class="fn-generic-tag fn-generic-tag--info is-hover" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--information"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>active</b></div>
    <div class="fn-generic-tag fn-generic-tag--info is-active" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--information"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>focus</b></div>
    <div class="fn-generic-tag fn-generic-tag--info is-focus" tabindex="0">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--information"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>

    <div><b>disabled</b></div>
    <div class="fn-generic-tag fn-generic-tag--info is-disabled">
        <div class="fn-generic-tag__icon">
            <span class="sap-icon sap-icon--information"></span>
        </div>
        <div class="fn-generic-tag__text">KPI Name</div>
        <div class="fn-generic-tag__number">42K</div>
    </div>
</div>
`;
GenericTagInfo.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Add the `.fn-generic-tag--info` modifier class to the `.fn-generic-tag` base class for info generic tag.'
    }
  }
};
