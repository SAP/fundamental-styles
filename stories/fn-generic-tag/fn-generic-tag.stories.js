export default {
    title: 'Experimental/Generic Tag',
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
        components: ['fn-generic-tag', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 1rem;
        row-gap: 1rem;
        background: white;
        padding: 1rem;
    }
</style>
`;

export const genericTag = () => `${localStyles}
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

genericTag.storyName = 'Generic Tag';
genericTag.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const genericTagPositive = () => `${localStyles}
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

genericTagPositive.storyName = 'Generic Tag Positive';
genericTagPositive.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Add the \`.fn-generic-tag--positive\` modifier class to the \`.fn-generic-tag\` base class for positive generic tag.
`
    }
};

export const genericTagCritical = () => `${localStyles}
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

genericTagCritical.storyName = 'Generic Tag Critical';
genericTagCritical.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-generic-tag--critical` modifier class to the `.fn-generic-tag` base class for critical generic tag.'
    }
};

export const genericTagNegative = () => `${localStyles}
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

genericTagNegative.storyName = 'Generic Tag Negative';
genericTagNegative.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-generic-tag--negative` modifier class to the `.fn-generic-tag` base class for negative generic tag.'
    }
};

export const genericTagInfo = () => `${localStyles}
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

genericTagInfo.storyName = 'Generic Tag Info';
genericTagInfo.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-generic-tag--info` modifier class to the `.fn-generic-tag` base class for info generic tag.'
    }
};
