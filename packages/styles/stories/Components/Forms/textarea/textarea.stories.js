import '../../../../src/textarea.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-label.scss';
import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/popover.scss';
export default {
    title: 'Components/Forms/Textarea',
    parameters: {
        description: `
The text area is an input component that allows the user to enter several lines of text.
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input component instead.
- Users need to enter formatted text. Use the rich text editor instead.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-1">Text area(cozy):</label>
    <textarea class="fd-textarea" id="textarea-1" placeholder="Write something here"></textarea>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--compact" for="textarea-123">Text area(compact):</label>
    <textarea class="fd-textarea fd-textarea--compact" id="textarea-123" placeholder="Write something here"></textarea>
</div>
`;

Primary.storyName = 'Content Density - cozy and compact';
Primary.parameters = {
    docs: {
        iframeHeight: 250
    }
};

export const Counter = () => `<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-2">Compact text area:</label>
    <textarea class="fd-textarea fd-textarea--compact" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    <div class="fd-textarea-counter">150 characters left</div>
</div>
`;

Counter.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'A checkbox can appear in two different sizes. In `cozy` mode, it is bigger than it is in `compact` mode. This makes the checkbox easier to select on touch devices.'
        }
    }
};

export const DisabledAndReadOnly = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-7">Text area:</label>
    <textarea class="fd-textarea" id="textarea-7" disabled>Disabled textarea</textarea>
</div>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-8">Text area:</label>
    <textarea class="fd-textarea" id="textarea-8" readonly>Read Only textarea</textarea>
</div>
`;

DisabledAndReadOnly.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'A checkbox can appear in two different sizes. In `cozy` mode, it is bigger than it is in `compact` mode. This makes the checkbox easier to select on touch devices.'
        }
    }
};

export const States = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-3">Success text area:</label>
    <div class="fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverT51" aria-expanded="false" aria-haspopup="true" onfocusin="onPopoverClick('popoverT51')" onfocusout="onPopoverClick('popoverT51')">
            <textarea class="fd-textarea is-success" id="textarea-3" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT51">
            <div class="fd-form-message fd-form-message--success">Success message</div>
        </div>
    </div>
    <div class="fd-textarea-counter">150 characters left</div>
</div>
<br/>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-4">Error text area:</label>
    <div class="fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverT52" aria-expanded="false" aria-haspopup="true" onfocusin="onPopoverClick('popoverT52')" onfocusout="onPopoverClick('popoverT52')">
            <textarea class="fd-textarea is-error" id="textarea-4" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT52">
            <div class="fd-form-message fd-form-message--error">Error message</div>
        </div>
    </div>
</div>
<br/>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-5">Warning text area:</label>
    <div class="fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverT53" aria-expanded="false" aria-haspopup="true" onfocusin="onPopoverClick('popoverT53')" onfocusout="onPopoverClick('popoverT53')">
            <textarea class="fd-textarea is-warning" id="textarea-5" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT53">
            <div class="fd-form-message fd-form-message--warning">Warning message</div>
        </div>
    </div>
</div>
<br/>
<div class="fd-form-item">
    <label class="fd-form-label" for="textarea-6">Information text area:</label>
    <div class="fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverT54" aria-expanded="false" aria-haspopup="true" onfocusin="onPopoverClick('popoverT54')" onfocusout="onPopoverClick('popoverT54')">
            <textarea class="fd-textarea is-information" id="textarea-6" placeholder="Write something here"></textarea>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT54">
            <div class="fd-form-message fd-form-message--information">Information message</div>
        </div>
    </div>
</div>
`;

States.storyName = 'Responsiveness';
States.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none).'
        }
    }
};
