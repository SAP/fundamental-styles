export default {
    title: 'Components/Micro Process Flow',
    parameters: {
        description: `
The micro process flow control enables you to visualize the state of individual items in a linear workflow.
You can embed it into a list or a table.

**There are two micro process flow types:**

 - Dependent Steps (Default)
 - Independent Steps

 **Micro process flow with icons support such semantic types:**

 - Information
 - Negative
 - Critical
 - Positive

Use the Micro Process Flow base class with following modifiers:

- \`fd-micro-process-flow\`
    - \`fd-micro-process-flow--icon\`
      `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['micro-process-flow', 'icon', 'status-indicator']
    }
};

export const defaultMicroProcessFlow = () => `
    <h4>Standard</h4>
    <div class="fd-micro-process-flow fd-micro-process-flow--icon">
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-success"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-information" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-information"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-critical" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-negative" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-error"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                </span>
            </div>
        </div>
    </div>
    
    <h4>Cozy size</h4>
    <div class="fd-micro-process-flow fd-micro-process-flow--icon fd-micro-process-flow--cozy">
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-success"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-information" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-information"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-critical" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-negative" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-error"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content"></span>
            </div>
        </div>
    </div>

    <h4>Independent steps</h4>
    <div class="fd-micro-process-flow fd-micro-process-flow--icon fd-micro-process-flow--independent">
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-success"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-information" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-information"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-critical" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-negative" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-error"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                </span>
            </div>
        </div>
    </div>

    <h4>Intermediary indicator</h4>
    <div class="fd-micro-process-flow fd-micro-process-flow--icon">
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-success"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-information" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-information"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector">
                <i role="presentation" class="fd-micro-process-flow__step-intermediary-icon sap-icon--decline sap-icon--color-negative"></i>
            </div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-success"></i>
                </span>
            </div>
        </div>
    </div>

    <h4>Custom icons</h4>
    <div class="fd-micro-process-flow fd-micro-process-flow--icon">
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--customer"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--factory"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-information" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--cargo-train"></i>
                </span>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step" tabindex="0">
                <span class="fd-micro-process-flow__step-content">
                    <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--decision"></i>
                </span>
            </div>
        </div>
    </div>

    <h4>Using status indicator</h4>
    <div class="fd-micro-process-flow">
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step" tabindex="0">
                <div class="fd-micro-process-flow__step-content">
                    <div class="fd-status-indicator coreographed fd-status-indicator--md fd-status-indicator--positive">
                        <svg class="fd-status-indicator__svg" version="1.1" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 26 25" preserveAspectRatio="xMidYMid meet" x="0" y="0" width="100%" height="100%">
                            <svg xlmns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" overflow="visible" id="__path32" data-sap-ui="__path32">
                                <defs>
                                <linearGradient id="__path32-gradient" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="1" stop-color="white"></stop>
                                    <stop offset="1" stop-color="transparent"></stop>
                                </linearGradient>
                                <mask id="__path32-mask">
                                    <path id="__path32-mask-shape" d="M22.9,17.2c-1.7,0-3.2,1.2-3.5,2.8h-4.8c-0.4-1.6-1.8-2.8-3.6-2.8c-0.1,0-0.2,0-0.3,0l-0.5-1.7h16L30.5,5H7L5.8,1l0,0l0,0
                                                l0-0.1L5.6,0.9l-5-0.4l0.2,1.7l3.4,0.3l4.7,15.4c-0.9,0.7-1.5,1.7-1.5,2.9c0,2,1.6,3.7,3.7,3.7c1.7,0,3.2-1.2,3.6-2.8h4.8
                                                c0.4,1.6,1.8,2.8,3.5,2.8c2,0,3.7-1.6,3.7-3.7C26.6,18.8,24.9,17.2,22.9,17.2z" stroke-width="0" stroke="white" fill="url(#__path32-gradient)">
                                    </path>
                                </mask>
                                </defs>
                                <path id="__path32-shape" d="M22.9,17.2c-1.7,0-3.2,1.2-3.5,2.8h-4.8c-0.4-1.6-1.8-2.8-3.6-2.8c-0.1,0-0.2,0-0.3,0l-0.5-1.7h16L30.5,5H7L5.8,1l0,0l0,0
                                        l0-0.1L5.6,0.9l-5-0.4l0.2,1.7l3.4,0.3l4.7,15.4c-0.9,0.7-1.5,1.7-1.5,2.9c0,2,1.6,3.7,3.7,3.7c1.7,0,3.2-1.2,3.6-2.8h4.8
                                        c0.4,1.6,1.8,2.8,3.5,2.8c2,0,3.7-1.6,3.7-3.7C26.6,18.8,24.9,17.2,22.9,17.2z" stroke-width="0" stroke="#89919A " mask="url(#__path32-mask)">
                                </path>
                                <path id="__path32-shape-border" d="M22.9,17.2c-1.7,0-3.2,1.2-3.5,2.8h-4.8c-0.4-1.6-1.8-2.8-3.6-2.8c-0.1,0-0.2,0-0.3,0l-0.5-1.7h16L30.5,5H7L5.8,1l0,0l0,0
                                        l0-0.1L5.6,0.9l-5-0.4l0.2,1.7l3.4,0.3l4.7,15.4c-0.9,0.7-1.5,1.7-1.5,2.9c0,2,1.6,3.7,3.7,3.7c1.7,0,3.2-1.2,3.6-2.8h4.8
                                        c0.4,1.6,1.8,2.8,3.5,2.8c2,0,3.7-1.6,3.7-3.7C26.6,18.8,24.9,17.2,22.9,17.2z" stroke-width="0.25" stroke="#89919A " fill="transparent">
                                </path>
                            </svg>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step" tabindex="0">
                <div class="fd-micro-process-flow__step-content">
                    <div class="fd-status-indicator coreographed fd-status-indicator--md fd-status-indicator--positive">
                        <svg class="fd-status-indicator__svg fd-status-indicator--negative" version="1.1" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 26 25" preserveAspectRatio="xMidYMid meet" x="0" y="0" width="100%" height="100%">
                            <svg xlmns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" overflow="visible" id="__path28" data-sap-ui="__path28">
                                <defs>
                                    <linearGradient id="__path28-gradient" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="1" stop-color="white"></stop>
                                    <stop offset="1" stop-color="transparent"></stop>
                                    </linearGradient>
                                    <mask id="__path28-mask">
                                    <path id="__path28-mask-shape" d="M13,0.5c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S19.6,0.5,13,0.5z M16.4,10.1L15.9,12h-5.3v0.3H16
                                            l-0.5,1.9h-4.6c0.5,1.3,1.6,2,3.1,2c0.8,0,1.5-0.2,2.2-0.7l0.7-0.6v2.7l-0.1,0.1c-0.9,0.4-1.8,0.6-2.6,0.6c-1.6,0-2.9-0.3-3.8-1
                                            c-0.9-0.7-1.5-1.7-2-3H6.4l0.5-1.9h1V12H6.4l0.5-1.9h1.3C8.6,8.9,9.3,8,10.3,7.3c1-0.8,2.3-1.1,3.8-1.1c1.1,0,2,0.2,2.8,0.7L17.3,7
                                            l-0.6,2.3l-0.5-0.4c-0.4-0.2-0.9-0.4-1.4-0.5c-0.6-0.1-1.1-0.1-1.7,0c-0.6,0.1-1,0.3-1.5,0.7c-0.3,0.3-0.6,0.6-0.7,1H16.4z" stroke-width="0" stroke="white" fill="url(#__path28-gradient)">
                                    </path>
                                    </mask>
                                </defs>
                                <path id="__path28-shape" d="M13,0.5c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S19.6,0.5,13,0.5z M16.4,10.1L15.9,12h-5.3v0.3H16
                                            l-0.5,1.9h-4.6c0.5,1.3,1.6,2,3.1,2c0.8,0,1.5-0.2,2.2-0.7l0.7-0.6v2.7l-0.1,0.1c-0.9,0.4-1.8,0.6-2.6,0.6c-1.6,0-2.9-0.3-3.8-1
                                            c-0.9-0.7-1.5-1.7-2-3H6.4l0.5-1.9h1V12H6.4l0.5-1.9h1.3C8.6,8.9,9.3,8,10.3,7.3c1-0.8,2.3-1.1,3.8-1.1c1.1,0,2,0.2,2.8,0.7L17.3,7
                                            l-0.6,2.3l-0.5-0.4c-0.4-0.2-0.9-0.4-1.4-0.5c-0.6-0.1-1.1-0.1-1.7,0c-0.6,0.1-1,0.3-1.5,0.7c-0.3,0.3-0.6,0.6-0.7,1H16.4z" stroke-width="0" stroke="#89919A " mask="url(#__path28-mask)">
                                </path>
                                <path id="__path28-shape-border" d="M13,0.5c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S19.6,0.5,13,0.5z M16.4,10.1L15.9,12h-5.3v0.3H16
                                            l-0.5,1.9h-4.6c0.5,1.3,1.6,2,3.1,2c0.8,0,1.5-0.2,2.2-0.7l0.7-0.6v2.7l-0.1,0.1c-0.9,0.4-1.8,0.6-2.6,0.6c-1.6,0-2.9-0.3-3.8-1
                                            c-0.9-0.7-1.5-1.7-2-3H6.4l0.5-1.9h1V12H6.4l0.5-1.9h1.3C8.6,8.9,9.3,8,10.3,7.3c1-0.8,2.3-1.1,3.8-1.1c1.1,0,2,0.2,2.8,0.7L17.3,7
                                            l-0.6,2.3l-0.5-0.4c-0.4-0.2-0.9-0.4-1.4-0.5c-0.6-0.1-1.1-0.1-1.7,0c-0.6,0.1-1,0.3-1.5,0.7c-0.3,0.3-0.6,0.6-0.7,1H16.4z" stroke-width="0.25" stroke="#89919A " fill="transparent">
                                </path>
                            </svg>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step" tabindex="0">
                <div class="fd-micro-process-flow__step-content">
                    <div class="fd-status-indicator coreographed fd-status-indicator--md fd-status-indicator--positive">
                        <svg version="1.1" class="fd-status-indicator__svg fd-status-indicator--critical" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 26 25" preserveAspectRatio="xMidYMid meet" x="0" y="0" width="100%" height="100%">
                            <svg xlmns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" overflow="visible" id="__path29" data-sap-ui="__path29">
                            <defs>
                                <linearGradient id="__path29-gradient" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="1" stop-color="white"></stop>
                                <stop offset="1" stop-color="transparent"></stop>
                                </linearGradient>
                                <mask id="__path29-mask">
                                <path id="__path29-mask-shape" d="M19.6,12.9l0-3.7l-4.9,3.7V9.2l-5,3.9l-0.3,0l0-9.4H5.8v9.4H4.6V0.5H1l-0.3,24h23.6V9.3L19.6,12.9z M22.2,19.9H17v-2.4h5.2
                                        V19.9z stroke-width=" 0" stroke="white" fill="url(#__path29-gradient)">
                                </path>
                                </mask>
                            </defs>
                            <path id="__path29-shape" d="M19.6,12.9l0-3.7l-4.9,3.7V9.2l-5,3.9l-0.3,0l0-9.4H5.8v9.4H4.6V0.5H1l-0.3,24h23.6V9.3L19.6,12.9z M22.2,19.9H17v-2.4h5.2
                                V19.9z stroke-width=" 0" stroke="#89919A " mask="url(#__path29-mask)">
                            </path>
                            <path id="__path29-shape-border" d="M19.6,12.9l0-3.7l-4.9,3.7V9.2l-5,3.9l-0.3,0l0-9.4H5.8v9.4H4.6V0.5H1l-0.3,24h23.6V9.3L19.6,12.9z M22.2,19.9H17v-2.4h5.2
                                V19.9z stroke-width=" 0.25" stroke="#89919A " fill="transparent">
                            </path>
                            </svg>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="fd-micro-process-flow__step-connector"></div>
        </div>
        <div class="fd-micro-process-flow__step-wrapper">
            <div class="fd-micro-process-flow__step" tabindex="0">
                <div class="fd-micro-process-flow__step-content">
                    <div class="fd-status-indicator coreographed fd-status-indicator--md fd-status-indicator--positive">
                        <svg version="1.1" class="fd-status-indicator__svg" xlmns="http://www.w3.org/2000/svg" viewBox="0 0 45 25" preserveAspectRatio="xMidYMid meet" x="0" y="0" width="100%" height="100%">
                            <svg xlmns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" overflow="visible" id="__path30" data-sap-ui="__path30">
                            <defs>
                                <linearGradient id="__path30-gradient" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0.5" stop-color="white"></stop>
                                <stop offset="0.5" stop-color="transparent"></stop>
                                </linearGradient>
                                <mask id="__path30-mask">
                                <path id="__path30-mask-shape" d="M44.2,13.1l-2.6-6.5c-0.1-0.2-0.6-1.9-2.2-1.9h-6V2.3c0-1-0.8-1.8-1.8-1.8H2.7c-1.1,0-1.9,0.9-1.9,1.9v18.4h3.3h0.5l0,0
                                            c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h0.5h0.6l0,0c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h9.1h2.9l0,0
                                            c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h4.5V13.1z" stroke-width="0" stroke="white" fill="url(#__path30-gradient)">
                                </path>
                                </mask>
                            </defs>
                            <path id="__path30-shape" d="M44.2,13.1l-2.6-6.5c-0.1-0.2-0.6-1.9-2.2-1.9h-6V2.3c0-1-0.8-1.8-1.8-1.8H2.7c-1.1,0-1.9,0.9-1.9,1.9v18.4h3.3h0.5l0,0
                                    c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h0.5h0.6l0,0c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h9.1h2.9l0,0
                                    c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h4.5V13.1z" stroke-width="0" stroke="#89919A " mask="url(#__path30-mask)">
                            </path>
                            <path id="__path30-shape-border" d="M44.2,13.1l-2.6-6.5c-0.1-0.2-0.6-1.9-2.2-1.9h-6V2.3c0-1-0.8-1.8-1.8-1.8H2.7c-1.1,0-1.9,0.9-1.9,1.9v18.4h3.3h0.5l0,0
                                    c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h0.5h0.6l0,0c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h9.1h2.9l0,0
                                    c0,2,1.6,3.7,3.7,3.7c2,0,3.7-1.6,3.7-3.7l0,0h4.5V13.1z" stroke-width="0.25" stroke="#89919A " fill="transparent">
                            </path>
                            </svg>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h4>Overflow</h4>
    <div class="fd-micro-process-flow fd-micro-process-flow--icon fd-micro-process-flow--overflow">
        <div class="fd-micro-process-flow__nav">
            <i role="presentation" class="fd-micro-process-flow__nav-icon sap-icon--navigation-left-arrow"></i>
            <span class="fd-micro-process-flow__nav-counter">3</span>
        </div>
        <div class="fd-micro-process-flow__content">
            <div class="fd-micro-process-flow__step-wrapper">
                <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-positive" tabindex="0">
                    <span class="fd-micro-process-flow__step-content">
                        <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-success"></i>
                    </span>
                </div>
                <div class="fd-micro-process-flow__step-connector"></div>
            </div>
            <div class="fd-micro-process-flow__step-wrapper">
                <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-information" tabindex="0">
                    <span class="fd-micro-process-flow__step-content">
                        <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-information"></i>
                    </span>
                </div>
                <div class="fd-micro-process-flow__step-connector"></div>
            </div>
            <div class="fd-micro-process-flow__step-wrapper">
                <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-critical" tabindex="0">
                    <span class="fd-micro-process-flow__step-content">
                        <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                    </span>
                </div>
                <div class="fd-micro-process-flow__step-connector"></div>
            </div>
            <div class="fd-micro-process-flow__step-wrapper">
                <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-negative" tabindex="0">
                    <span class="fd-micro-process-flow__step-content">
                        <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-error"></i>
                    </span>
                </div>
                <div class="fd-micro-process-flow__step-connector"></div>
            </div>
            <div class="fd-micro-process-flow__step-wrapper">
                <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                    <span class="fd-micro-process-flow__step-content">
                        <i role="presentation" class="fd-micro-process-flow__step-icon sap-icon--message-warning"></i>
                    </span>
                </div>
                <div class="fd-micro-process-flow__step-connector"></div>
            </div>
            <div class="fd-micro-process-flow__step-wrapper">
                <div class="fd-micro-process-flow__step fd-micro-process-flow__step--state-empty" tabindex="0">
                    <span class="fd-micro-process-flow__step-content">
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-micro-process-flow__nav">
            <span class="fd-micro-process-flow__nav-counter">10</span>
            <i role="presentation" class="fd-micro-process-flow__nav-icon sap-icon--navigation-right-arrow"></i>
        </div>
    </div>
`;
defaultMicroProcessFlow.storyName = 'Default';
defaultMicroProcessFlow.parameters = {
    docs: {
        storyDescription: `
The default micro process flow using icons.
        `
    }
};
