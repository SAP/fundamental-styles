import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
export default {
    title: 'Components/Forms/Form Message',
    parameters: {
        description: `
A form message can appear as a result of interacting with an input field. It essentially sends semantic feedback to the user, informing them whether the data they entered was successful, erroneous, needs further attention, or more.

##Highlight indicators
Form messages can be displayed in various semantic states by adding the following classes to the \`fd-input\` element:

States | Class | Description
:----- | :---- | :----------
Default | _n/a_ | The field is editable, but no validation has occurred.
Success | \`is-success\` | The data format entered has been validated and is correct, such as an email address.
Error |\`is-error\` | The data entered is not valid and must be corrected, stopping the user from moving forward.
Warning | \`is-warning\` | The data entered is formatted correctly but there are other issues that are problematic. However, these issues will not stop the user from moving forward.
Disabled | \`is-disabled\` | Indicates the field is not editable. This state is commonly used when the field is dependent on a previous entry/selection within the form.
Read-only&nbsp;&nbsp;&nbsp; | \`is-readonly\`&nbsp;&nbsp;&nbsp; | Used to display static information in the context of a form.

        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Success = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1bb">Success input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB2" aria-expanded="false" aria-haspopup="true"
                 onfocusin="onPopoverClick('popoverB2')" onfocusout="onPopoverClick('popoverB2')">
                <input class="fd-input is-success" type="text" id="input-1bb" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverB2">
                <div class="fd-form-message fd-form-message--success">Success message</div>
            </div>
        </div>
    </div>
`;

Success.parameters = {
    docs: {
        description: {
            story: `To display a success message below an input field, add the \`--success\` modifier class to the \`fd-form-message\` element.
        `
        }
    }
};

export const Error = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1cc">Error input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB3" aria-expanded="false" aria-haspopup="true"
                 onfocusin="onPopoverClick('popoverB3')" onfocusout="onPopoverClick('popoverB3')">
                <input class="fd-input is-error" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverB3">
                <div class="fd-form-message fd-form-message--error" >Error message</div>
            </div>
        </div>
    </div>
`;

Error.parameters = {
    docs: {
        description: {
            story: `To display an error message below an input field, add the \`--error\` modifier class to the \`fd-form-message\` element.
        `
        }
    }
};

export const Warning = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1cc">Warning input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB4" aria-expanded="false" aria-haspopup="true"
                 onfocusin="onPopoverClick('popoverB4')" onfocusout="onPopoverClick('popoverB4')">
                <input class="fd-input is-warning" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverB4">
            <div class="fd-form-message fd-form-message--warning" >Warning message</div>
            </div>
        </div>
    </div>
`;

Warning.parameters = {
    docs: {
        description: {
            story: `To display a warning message below an input field, add the \`--warning\` modifier class to the \`fd-form-message\` element.
        `
        }
    }
};

export const Information = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1ee">Information input:</label>
        <div class="fd-form-input-message-group fd-popover">
            <div class="fd-popover__control" aria-controls="popoverB5" aria-expanded="false" aria-haspopup="true"
                 onfocusin="onPopoverClick('popoverB5')" onfocusout="onPopoverClick('popoverB5')">
                <input class="fd-input fd-input--compact is-information" type="text" id="input-1ee" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverB5">
                <div class="fd-form-message fd-form-message--information">Information message</div>
            </div>
        </div>
    </div>
`;

Information.parameters = {
    docs: {
        description: {
            story: `To display an information message below an input field, add the \`--information\` modifier class to the \`fd-form-message\` element.
        `
        }
    }
};
