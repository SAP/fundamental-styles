import '../../../src/icon.scss';
import '../../../src/generic-tag.scss';
export default {
    title: 'Components/Generic Tag',
    parameters: {
        description: `The generic tag control displays complementary information related to the current page, such as key performance indicators (KPI) and situations.

Type/State | &nbsp;&nbsp;&nbsp;&nbsp;Modifier class
:--------- |:-----------
Neutral/None | &nbsp;&nbsp;&nbsp;&nbsp;default
Error | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--error\`
Success | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--success\`
Warning | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--warning\`
Information | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--information\`

`,
    }
};


const localStyles = `
<style>

    .docs-link-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
    }

    .docs-link-container-header {
        margin: 2rem 0;
    }

    @media (min-width:600px) {
        .docs-link-container {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width:1025px) {
        .docs-link-container {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        }
    }


</style>
`;

export const Primary = () => `${localStyles}
<div class="docs-link-container">
    <div>
        <div class="docs-link-container-header"><b>Regular</b></div>
        <div class="fd-generic-tag" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__name">Product Cost</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--error" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-error" role="presentation" aria-hidden="true" aria-label="error"></span>
            <span class="fd-generic-tag__name">Error</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--success" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-success" role="presentation" aria-hidden="true" aria-label="success"></span>
            <span class="fd-generic-tag__name">Success</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--information" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-information" role="presentation" aria-hidden="true" aria-label="information"></span>
            <span class="fd-generic-tag__name">Information</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--warning" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-warning" role="presentation" aria-hidden="true" aria-label="warning"></span>
            <span class="fd-generic-tag__name">Warning</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
    </div>
    <div>
        <div class="docs-link-container-header"><b>Hover</b></div>
        <div class="fd-generic-tag is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__name">Product Cost</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--error is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-error" role="presentation" aria-hidden="true" aria-label="error"></span>
            <span class="fd-generic-tag__name">Error</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--success is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-success" role="presentation" aria-hidden="true" aria-label="success"></span>
            <span class="fd-generic-tag__name">Success</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--information is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-information" role="presentation" aria-hidden="true" aria-label="information"></span>
            <span class="fd-generic-tag__name">Information</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--warning is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-warning" role="presentation" aria-hidden="true" aria-label="warning"></span>
            <span class="fd-generic-tag__name">Warning</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
    </div>
    <div>
        <div class="docs-link-container-header"><b>Active</b></div>
        <div class="fd-generic-tag is-active" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__name">Product Cost</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--error is-active" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-error" role="presentation" aria-hidden="true" aria-label="error"></span>
            <span class="fd-generic-tag__name">Error</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--success is-active" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-success" role="presentation" aria-hidden="true" aria-label="success"></span>
            <span class="fd-generic-tag__name">Success</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--information is-active" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-information" role="presentation" aria-hidden="true" aria-label="information"></span>
            <span class="fd-generic-tag__name">Information</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--warning is-active" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-warning" role="presentation" aria-hidden="true" aria-label="warning"></span>
            <span class="fd-generic-tag__name">Warning</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
    </div>
    <div>
        <div class="docs-link-container-header"><b>Focus</b></div>
        <div class="fd-generic-tag is-focus" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__name">Product Cost</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--error is-focus" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-error" role="presentation" aria-hidden="true" aria-label="error"></span>
            <span class="fd-generic-tag__name">Error</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--success is-focus" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-success" role="presentation" aria-hidden="true" aria-label="success"></span>
            <span class="fd-generic-tag__name">Success</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--information is-focus" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-information" role="presentation" aria-hidden="true" aria-label="information"></span>
            <span class="fd-generic-tag__name">Information</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--warning is-focus" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-warning" role="presentation" aria-hidden="true" aria-label="warning"></span>
            <span class="fd-generic-tag__name">Warning</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
    </div>
</div>
`;

Primary.storyName = 'Types';
Primary.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: ``
        }
    }
};


export const Compact = () => `${localStyles}
<div class="docs-link-container">
    <div>
        <div class="docs-link-container-header"><b>Compact</b></div>
        <div class="fd-generic-tag fd-generic-tag--compact" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__name">Product Cost</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--compact fd-generic-tag--error" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-error" role="presentation" aria-hidden="true" aria-label="error"></span>
            <span class="fd-generic-tag__name">Error</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--compact fd-generic-tag--success" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-success" role="presentation" aria-hidden="true" aria-label="success"></span>
            <span class="fd-generic-tag__name">Success</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--compact fd-generic-tag--information" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-information" role="presentation" aria-hidden="true" aria-label="information"></span>
            <span class="fd-generic-tag__name">Information</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--compact fd-generic-tag--warning" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-warning" role="presentation" aria-hidden="true" aria-label="warning"></span>
            <span class="fd-generic-tag__name">Warning</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
    </div>
    <div>
        <div class="docs-link-container-header"><b>Cozy</b></div>
        <div class="fd-generic-tag is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__name">Product Cost</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--error is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-error" role="presentation" aria-hidden="true" aria-label="error"></span>
            <span class="fd-generic-tag__name">Error</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--success is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-success" role="presentation" aria-hidden="true" aria-label="success"></span>
            <span class="fd-generic-tag__name">Success</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--information is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-information" role="presentation" aria-hidden="true" aria-label="information"></span>
            <span class="fd-generic-tag__name">Information</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
        <br><br>
        <div class="fd-generic-tag fd-generic-tag--warning is-hover" role="button" tabindex="0" aria-roledescription="Object Tag">
            <span class="fd-generic-tag__icon sap-icon--message-warning" role="presentation" aria-hidden="true" aria-label="warning"></span>
            <span class="fd-generic-tag__name">Warning</span>
            <span class="fd-generic-tag__value">3.5M EUR</span>
        </div>
    </div>
</div>
`;

Compact.storyName = 'Compact and Cozy';
Compact.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `In cozy mode the Generic Tag has margin top and bottom of 0.5625rem. In compact mode the margin value is 0.1875rem. For compact Generic Tag use the \`.fd-generic-tag--compact\` modifier class. `
        }
    }
};