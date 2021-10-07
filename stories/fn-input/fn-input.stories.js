export default {
    title: 'Experimental/Text Field',
    parameters: {
        description: `**Modifier classes for text field:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;      | Modifier class                |
| ---------------------------------- | ----------------------------- |
| default&nbsp;&nbsp;&nbsp;&nbsp;    | \`none\`                      |
| information&nbsp;&nbsp;&nbsp;&nbsp;| \`fn-text-field--information\`|
| warning&nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-text-field--warning\`    |
| error&nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-text-field--error\`      |
| success&nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-text-field--success\`    |

<br><br>

        `,
        components: ['fn-input', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        background: white;
        padding: 1.5rem;
        border-radius: 0.25rem;
    }
</style>
`;

export const defaultInput = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-text-field">
        <label class="fn-text-field__label" for="field-1">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-1" placeholder="Placeholder" />
            <div class="fn-text-field__input-border"></div>
        </div>
    </div>

    <br><br>
    <h4>Disabled</h4>
    <div class="fn-text-field is-disabled">
        <label class="fn-text-field__label" for="field-2">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-2" placeholder="Placeholder" disabled/>
            <div class="fn-text-field__input-border"></div>
        </div>
    </div>

    <br><br>
    <h4>Readonly</h4>
    <div class="fn-text-field">
        <label class="fn-text-field__label" for="field-3">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-3" placeholder="Placeholder" value="Typed" readonly/>
            <div class="fn-text-field__input-border"></div>
        </div>
    </div>
    
</div>
`;

defaultInput.storyName = 'Default Input';
defaultInput.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const informationInput = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-text-field fn-text-field--information">
        <label class="fn-text-field__label" for="field-4">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-4" placeholder="Placeholder" />
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--information"></span>
        </div>
    </div>

    <br><br>
    <h4>Disabled</h4>
    <div class="fn-text-field fn-text-field--information is-disabled">
        <label class="fn-text-field__label" for="field-5">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-5" placeholder="Placeholder" disabled/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--information"></span>
        </div>
    </div>

    <br><br>
    <h4>Readonly</h4>
    <div class="fn-text-field fn-text-field--information is-readonly">
        <label class="fn-text-field__label" for="field-6">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-6" placeholder="Placeholder" value="Typed" readonly/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--information"></span>
        </div>
    </div>
    
</div>
`;

informationInput.storyName = 'Information Input';
informationInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-text-field--information` modifier class to `.fn-text-field` for Information Input.'
    }
};

export const warningInput = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-text-field fn-text-field--warning">
        <label class="fn-text-field__label" for="field-7">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-7" placeholder="Placeholder" />
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--alert"></span>
        </div>
    </div>

    <br><br>
    <h4>Disabled</h4>
    <div class="fn-text-field fn-text-field--warning is-disabled">
        <label class="fn-text-field__label" for="field-8">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-8" placeholder="Placeholder" disabled/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--alert"></span>
        </div>
    </div>

    <br><br>
    <h4>Readonly</h4>
    <div class="fn-text-field fn-text-field--warning is-readonly">
        <label class="fn-text-field__label" for="field-9">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-9" placeholder="Placeholder" value="Typed" readonly/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--alert"></span>
        </div>
    </div>
    
</div>
`;

warningInput.storyName = 'Warning Input';
warningInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-text-field--warning` modifier class to `.fn-text-field` for Warning Input.'
    }
};

export const errorInput = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-text-field fn-text-field--error">
        <label class="fn-text-field__label" for="field-10">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-10" placeholder="Placeholder" />
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--error"></span>
        </div>
    </div>

    <br><br>
    <h4>Disabled</h4>
    <div class="fn-text-field fn-text-field--error is-disabled">
        <label class="fn-text-field__label" for="field-11">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-11" placeholder="Placeholder" disabled/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--error"></span>
        </div>
    </div>

    <br><br>
    <h4>Readonly</h4>
    <div class="fn-text-field fn-text-field--error is-readonly">
        <label class="fn-text-field__label" for="field-12">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-12" placeholder="Placeholder" value="Typed" readonly/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--error"></span>
        </div>
    </div>
    
</div>
`;

errorInput.storyName = 'Error Input';
errorInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-text-field--error` modifier class to `.fn-text-field` for Error Input.'
    }
};


export const successInput = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-text-field fn-text-field--success">
        <label class="fn-text-field__label" for="field-13">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-13" placeholder="Placeholder" />
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
    </div>

    <br><br>
    <h4>Disabled</h4>
    <div class="fn-text-field fn-text-field--success is-disabled">
        <label class="fn-text-field__label" for="field-14">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-14" placeholder="Placeholder" disabled/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
    </div>

    <br><br>
    <h4>Readonly</h4>
    <div class="fn-text-field fn-text-field--success is-readonly">
        <label class="fn-text-field__label" for="field-15">Label</label>
        <div class="fn-text-field__input-container">
            <input class="fn-text-field__input" type="text" id="field-15" placeholder="Placeholder" value="Typed" readonly/>
            <div class="fn-text-field__input-border"></div>
            <span class="sap-icon sap-icon--sys-enter-2"></span>
        </div>
    </div>
    
</div>
`;

successInput.storyName = 'Success Input';
successInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-text-field--success` modifier class to `.fn-text-field` for Success Input.'
    }
};
