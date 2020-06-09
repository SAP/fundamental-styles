import '../../dist/form-message.css';
import '../../dist/form-item.css';
import '../../dist/form-label.css';
import '../../dist/input.css';
import '../../dist/popover.css';

export default {
    title: 'Components/Forms/FormMessage',
    parameters: {
        description: `
Input States

The state of the input field can reflect the validity of the data entered, whether the input data is editable or disabled.

* **Default**: The field is editable but no validation has occurred
* **Success**: The data format entered has been validated and it's correct, such as an email address.
* **Error**: The data entered is not valid and must be corrected.
* **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
* **Disabled**: Indicates the field is not editable, commonly used when the field is dependent on a previous entry/selection within the form.
* **Read Only**: Used to display static information in the context of a form.

Along with Error and Warning, error messages should be displayed below the field so the user can correct the error and move forward.`
    }
};

export const success = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1bb">Success input:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverB2" aria-expanded="false" aria-haspopup="true">
                <input class="fd-input is-success" type="text" id="input-1bb" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB2">
                <div class="fd-form-message fd-form-message--success">Success message</div>
            </div>
        </div>
    </div>
`;

export const error = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1cc">Error input:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverB3" aria-expanded="false" aria-haspopup="true">
                <input class="fd-input is-error" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB3">
                <div class="fd-form-message fd-form-message--error" >Error message</div>
            </div>
        </div>
    </div>
`;

export const warning = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1cc">Warning input:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverB3" aria-expanded="false" aria-haspopup="true">
                <input class="fd-input is-warning" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB3">
            <div class="fd-form-message fd-form-message--warning" >Warning message</div>
            </div>
        </div>
    </div>
`;

export const information = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1ee">Information input:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverB5" aria-expanded="false" aria-haspopup="true">
                <input class="fd-input fd-input--compact is-information" type="text" id="input-1ee" placeholder="Field placeholder text" aria-label="Image label">
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB5">
                <div class="fd-form-message fd-form-message--information">Information message</div>
            </div>
        </div>
    </div>
`;
