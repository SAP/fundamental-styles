---
title: Forms
id: form
keywords: form, forms, checkboxes, input, inputs, input help elemnts, input sates, select, radio buttons,
sidebar: left-navigation-sidebar
toc: false
permalink: components/form.html
folder: components
---

Form groups are used to assemble form elements with labels, messages, and help containers.
{: .docs-intro}

These components can be used alone. For example, the `form__item` element with the label and control could be used without the full form group since not every form field will need error messages.

<br>

## Inputs
Inputs are used to collect data from the user and should always be paired with a label. When a field is required, the label should include an asterisk (*).

A text input field allows users to enter and edit text or numeric values in one line. To help users enter a valid value, it provides additional features like “auto-complete”, “suggestions”, and “value help”.

Use the input field if:

- The user needs to enter a short, single-line text or numbers, dates or times.
- The user needs to select one or more items from a list of items, such a a multi-input.
- The user needs to find one or more items out of a list of items by searching for more than one attribute, such as a combobox.

Do not use the input field if:

- The user needs to enter long texts. In this case, use the textarea.
- The user needs to carry out a search. In this case, use the search field.

{% capture inputs %} 
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
    <br><br>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1b">Compact Input:</label>
        <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" aria-required="true" for="input-1d">Password:</label>
        <input class="fd-input" type="password" id="input-1d">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-01">Invalid (Error) Input:</label>
        <input class="fd-input is-invalid" type="text" id="input-01" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-02">Valid (Success) Input:</label>
        <input class="fd-input is-valid" type="text" id="input-02" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-03">Warning (Alert) Input:</label>
        <input class="fd-input is-warning" type="text" id="input-03" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-04">Information Input:</label>
        <input class="fd-input is-information" type="text" id="input-04">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input:</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-06">Read-Only Input:</label>
        <input class="fd-input" type="text" id="input-06" readonly placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" for="input-07">Default input:</label>
            <input class="fd-input" type="text" id="input-07" placeholder="Field placeholder text" aria-label="Image label">
    </div>
    <br><br>
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" for="input-08">Compact input:</label>
            <input class="fd-input fd-input--compact" type="text" id="input-08" placeholder="Field placeholder text" aria-label="Image label">
    </div>
    <br /><br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label fd-form-label--required" for="input-09">Required Input:</label>
        <input class="fd-input" type="text" id="input-09" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" aria-required="true" for="input-10">Password:</label>
        <input class="fd-input" type="password" id="input-10">
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--horizontal">
        <label class="fd-form-label" aria-required="true" for="input-11">Input:</label>
        <input class="fd-input" type="text" id="input-11">
    </div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br/>

## Input States
The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.
* **Normal**: The field is editable but no validation has occurred
* **Valid**: The data format entered has been validated and it's correct, such as an email address.
* **Invalid**: The data entered is not valid and must be corrected.
* **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
* **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.
* **Read Only**: Used to display static information in the context of a form.

Along with Invalid and Warning, error messages should be displayed below the field so the user can correct the error and move forward.

{% capture inputs %}
<div class="fd-form-item">
    <label class="fd-form-label" for="input-1aa">Normal input:</label>
    <input class="fd-input" type="text" id="input-1aa" placeholder="Field placeholder text" aria-label="Image label">
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1bb">Valid input:</label>
    <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverB2" aria-expanded="false" aria-haspopup="true">
            <input class="fd-input is-valid" type="text" id="input-1bb" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB2">
            <div class="fd-form-message fd-form-message--success">Success message</div>
        </div>
    </div>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1cc">Error input:</label>
    <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverB3" aria-expanded="false" aria-haspopup="true">
            <input class="fd-input is-invalid" type="text" id="input-1cc" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB3">
            <div class="fd-form-message fd-form-message--error" >Error message</div>
        </div>
    </div>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1dd">Warning input:</label>
    <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
        <div class="fd-popover__control" aria-controls="popoverB4" aria-expanded="false" aria-haspopup="true">
            <input class="fd-input is-warning" type="text" id="input-1dd" placeholder="Field placeholder text" aria-label="Image label">
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverB4">
            <div class="fd-form-message fd-form-message--warning">Warning message</div>
        </div>
    </div>
</div>

<br /><br />

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

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1ff">Disabled Input:</label>
    <input class="fd-input" type="text" id="input-1ff" value="Non editable data" disabled>
</div>

<br /><br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-1gg">Read Only Input:</label>
    <input class="fd-input" type="text" id="input-1gg" value="Read only data" readonly>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br>
## Textarea
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input control instead.
- Users need to enter formatted text. Use the rich text editor instead.

{% capture inputs %}
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-1">Text area:</label>
        <textarea class="fd-textarea" id="textarea-1" placeholder="Write something here"></textarea>
    </div>
    <br/>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-2">Compact text area:</label>
        <textarea class="fd-textarea fd-textarea--compact" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
        <div class="fd-textarea-counter">150 characters left</div>
    </div>
    <br/>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-3">Success (valid) text area:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverT51" aria-expanded="false" aria-haspopup="true">
                <textarea class="fd-textarea is-valid" id="textarea-3" placeholder="Write something here"></textarea>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT51">
                <div class="fd-form-message fd-form-message--success">Valid message</div>
            </div>
        </div>
        <div class="fd-textarea-counter">150 characters left</div>
    </div>
    <br/>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-4">Error(invalid) text area:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverT52" aria-expanded="false" aria-haspopup="true">
                <textarea class="fd-textarea is-invalid" id="textarea-4" placeholder="Write something here"></textarea>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT52">
                <div class="fd-form-message fd-form-message--error">Invalid message</div>
            </div>
        </div>
    </div>
    <br/>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-5">Warning text area:</label>
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverT53" aria-expanded="false" aria-haspopup="true">
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
        <div class="fd-form-input-message-group fd-popover fd-popover--input-message-group">
            <div class="fd-popover__control" aria-controls="popoverT54" aria-expanded="false" aria-haspopup="true">
                <textarea class="fd-textarea is-information" id="textarea-6" placeholder="Write something here"></textarea>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="popoverT54">
                <div class="fd-form-message fd-form-message--information">Information message</div>
            </div>
        </div>
    </div>
    <br/>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-7">Text area:</label>
        <textarea class="fd-textarea" id="textarea-7" placeholder="Write something here" disabled></textarea>
    </div>
    <br/>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-8">Text area:</label>
        <textarea class="fd-textarea" id="textarea-8" placeholder="Write something here" readonly></textarea>
    </div>
    <br/>
    <div class="fd-form-item" dir="rtl">
        <label class="fd-form-label" for="textarea-9">Text area:</label>
        <textarea class="fd-textarea" id="textarea-9" placeholder="Write something here"></textarea>
        <div class="fd-textarea-counter">150 characters left</div>
    </div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br>

## Form Select
The Form Select component is similar to a dropdown but is more commonly used within a form. It can also be set to a disabled state.

{% capture select %}
    <div class="fd-form-item">
        <label class="fd-form-label" for="select-1">Default Select:</label>
        <select class="fd-form-select" id="select-1" name="">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="select-2">Disabled Select:</label>
        <select class="fd-form-select" id="select-2" name="" disabled>
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
{% endcapture %}

{% include display-component.html component=select %}

<br/>

## Radio buttons
Radio buttons provide users with a set of mutually exclusive options. They allow a user to select only one option from two or more choices. Each option is represented by a radio button. Consequently, radio buttons only work in groups.

Use the radio button if:

- You need to help users choose quickly between at least two clearly different choices.

Do not use the radio button if:

- You need to offer the user the option of multiple selection. In this case, use checkboxes instead because radio buttons are for single-selection contexts only.
- You need to present more than 8 options. Use a dropdown box or list view.
In special cases, there are only two mutually exclusive options. Combine them into a single checkbox or switch. For example, use a checkbox for “I agree” (for example, to terms and conditions) instead of two radio buttons for “I agree” and “I don’t agree”.
- The options are numbers with fixed steps. Use a slider control.

{% capture radio-buttons%}
<fieldset class="fd-fieldset" id="radio1">
    <legend class="fd-fieldset__legend">Radio Buttons Cozy Mode</legend>
    <div class="fd-form__group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh761" name="radio1" checked>
            <label class="fd-radio__label" for="pDidh761">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7612" name="radio1">
            <label class="fd-radio__label" for="pDidh7612">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7613" name="radio1">
            <label class="fd-radio__label" for="pDidh7613">
                Field label
            </label>
        </div>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset" id="radio2">
    <legend class="fd-fieldset__legend">Radio Buttons Compact Mode</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact" id="pDidh76111" name="radio2" checked>
            <label class="fd-radio__label" for="pDidh76111">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact" id="pDidh761211" name="radio2">
            <label class="fd-radio__label" for="pDidh761211">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact" id="pDidh761311" name="radio2">
            <label class="fd-radio__label" for="pDidh761311">
                Field label
            </label>
        </div>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset" id="radio3">
    <legend class="fd-fieldset__legend">Radio buttons Disabled</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh764" name="radio3" disabled>
            <label class="fd-radio__label" for="pDidh764">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7615" name="radio3" disabled>
            <label class="fd-radio__label" for="pDidh7615">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7616" name="radio3" disabled>
            <label class="fd-radio__label" for="pDidh7616">
                Field label
            </label>
        </div>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset" id="radio4">
    <legend class="fd-fieldset__legend">Inline Radio buttons</legend>
        <div class="fd-form-group fd-form-group--inline">
            <div class="fd-form-group__item fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh767" name="radio4" checked>
                <label class="fd-radio__label" for="pDidh767">
                    Field label
                </label>
            </div>
            <div class="fd-form-group__item fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh7618" name="radio4" >
                <label class="fd-radio__label" for="pDidh7618">
                    Field label
                </label>
            </div>
            <div class="fd-form-group__item fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh7619" name="radio4">
                <label class="fd-radio__label" for="pDidh7619">
                    Field label
                </label>
            </div>
        </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset" id="radio5">
    <legend class="fd-fieldset__legend">Interaction States</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="iSpDidh761" name="radio5" checked>
            <label class="fd-radio__label" for="iSpDidh761">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-valid" id="iSpDidh7612" name="radio5">
            <label class="fd-radio__label" for="iSpDidh7612">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-invalid" id="iSpDidh7613" name="radio5">
            <label class="fd-radio__label" for="iSpDidh7613">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-warning" id="iSpDidh7614" name="radio5">
            <label class="fd-radio__label" for="iSpDidh7614">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-information" id="iSpDidh7615" name="radio5">
            <label class="fd-radio__label" for="iSpDidh7615">
                Field label
            </label>
        </div>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset" id="radio6">
    <legend class="fd-fieldset__legend">Interaction States Compact Mode</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact" id="iSpDidh7619" name="radio6" checked>
            <label class="fd-radio__label" for="iSpDidh7619">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-valid" id="iSpDidh76129" name="radio6">
            <label class="fd-radio__label" for="iSpDidh76129">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-invalid" id="iSpDidh76139" name="radio6">
            <label class="fd-radio__label" for="iSpDidh76139">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-warning" id="iSpDidh76149" name="radio6">
            <label class="fd-radio__label" for="iSpDidh76149">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-information" id="iSpDidh76159" name="radio6">
            <label class="fd-radio__label" for="iSpDidh76159">
                Field label
            </label>
        </div>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset" id="radio7">
    <legend class="fd-fieldset__legend">Interaction States Compact Mode Disabled</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact" id="iSpDidh7619d" name="radio7" disabled>
            <label class="fd-radio__label" for="iSpDidh7619d">Field label</label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-valid" id="iSpDidh76129d" name="radio7" disabled>
            <label class="fd-radio__label" for="iSpDidh76129d">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-invalid" id="iSpDidh76139d" name="radio7" disabled>
            <label class="fd-radio__label" for="iSpDidh76139d">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-warning" id="iSpDidh76149d" name="radio7" disabled>
            <label class="fd-radio__label" for="iSpDidh76149d">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio fd-radio--compact is-information" id="iSpDidh76159d" name="radio7" disabled>
            <label class="fd-radio__label" for="iSpDidh76159d">
                Field label
            </label>
        </div>
    </div>
</fieldset><br /><br />
<fieldset class="fd-fieldset" id="radiortl" dir="rtl">
    <legend class="fd-fieldset__legend">Interaction States</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="radioRtl1" name="radiortl" checked>
            <label class="fd-radio__label" for="radioRtl1">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-valid" id="radioRtl2" name="radiortl">
            <label class="fd-radio__label" for="radioRtl2">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-invalid" id="radioRtl3" name="radiortl">
            <label class="fd-radio__label" for="radioRtl3">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-warning" id="radioRtl4" name="radiortl">
            <label class="fd-radio__label" for="radioRtl4">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio is-information" id="radioRtl5" name="radiortl">
            <label class="fd-radio__label" for="radioRtl5">
                Field label
            </label>
        </div>
    </div>
</fieldset>
<br /><br />
{% endcapture %}

{% include display-component.html component=radio-buttons %}

<br>

## Checkbox
With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row.

Use the check box if:

- Only one option can be selected or deselected, for example to accept terms of use. Use it only if the meaning is obvious.
- A group or a list of options can be selected independently of each other.
- All available options need to be displayed right away without any user interaction.
- An intermediate selection state (Tri-State) is required when multiple sub-options are grouped under a parent option. The Tri-State will represent that multiple (but not all) sub-options are selected in the list.

Do not use the checkbox control if:

- The user needs to choose multiple options from a large list. Use a multi-combo box instead.
- The user can choose only one option from a list. Use a radio buttons, a select, or a list instead.
- The user needs to perform instantaneous actions that do not need reviewing or confirming. Consider using the switch control instead.
- There is not enough space available on the screen. Use the combo box control instead.


{% capture checkbox %}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">Text Option</label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">TriState Text</label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes disabled</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez614" disabled>
            <label class="fd-checkbox__label" for="Ai4ez614">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez615" disabled>
            <label class="fd-checkbox__label" for="Ai4ez615">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez616" disabled>
            <label class="fd-checkbox__label" for="Ai4ez616">
                Field label
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes inline</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                Field label
            </label>
        </div>
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618">
            <label class="fd-checkbox__label" for="Ai4ez618">
                Field label
            </label>
        </div>
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619">
            <label class="fd-checkbox__label" for="Ai4ez619">
                Field label
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes Compact Mode</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6171">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6171">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6181">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6181">
                Field label
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6191">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6191">
                Field label
            </label>
        </div>
    </div>
</fieldset>


<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes Error</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-invalid" id="Ai4ez6119">
            <label class="fd-checkbox__label" for="Ai4ez6119">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-invalid" id="Ai4ez6129" checked>
            <label class="fd-checkbox__label" for="Ai4ez6129">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-invalid" id="Ai4ez613i1">
            <label class="fd-checkbox__label" for="Ai4ez613i1">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes Success</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-valid" id="Ai4ez61192">
            <label class="fd-checkbox__label" for="Ai4ez61192">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-valid" id="Ai4ez61292" checked>
            <label class="fd-checkbox__label" for="Ai4ez61292">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-valid" id="Ai4ez613i2">
            <label class="fd-checkbox__label" for="Ai4ez613i2">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes Warning</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193">
            <label class="fd-checkbox__label" for="Ai4ez61193">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
            <label class="fd-checkbox__label" for="Ai4ez61293">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
            <label class="fd-checkbox__label" for="Ai4ez613i3">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes Information</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194">
            <label class="fd-checkbox__label" for="Ai4ez61194">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
            <label class="fd-checkbox__label" for="Ai4ez61294">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
            <label class="fd-checkbox__label" for="Ai4ez613i4">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes Disabled</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez61196" disabled>
            <label class="fd-checkbox__label" for="Ai4ez61196">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled>
            <label class="fd-checkbox__label" for="Ai4ez61296">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled>
            <label class="fd-checkbox__label" for="Ai4ez613i6">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset" dir="rtl">
    <legend class="fd-fieldset__legend">Checkboxes RTL Support</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611tt">
            <label class="fd-checkbox__label" for="Ai4ez611tt">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612tt" checked>
            <label class="fd-checkbox__label" for="Ai4ez612tt">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613i7">
            <label class="fd-checkbox__label" for="Ai4ez613i7">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=checkbox %}

<br>

## Form with 4-7-1 Layout

{% capture form-edit %}
<div class="fd-edit-mode-container">
    <div class="fd-form-edit-mode-row">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <div class="fd-form-edit-mode-flex fd-form-edit-mode-flex--right">
                <label class="fd-form-label" for="input-1">Default Input:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <div class="fd-form-edit-mode-flex fd-form-edit-mode-flex--right">
                <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <div class="fd-form-edit-mode-flex fd-form-edit-mode-flex--right">
                <label class="fd-form-label" for="input-2">2 Inputs:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <div class="fd-form-edit-mode-row">
                    <div class="fd-form-edit-mode fd-form-edit-mode--6">
                        <input class="fd-input" type="text" id="input-2" placeholder="Field placeholder text">
                    </div>
                    <div class="fd-form-edit-mode fd-form-edit-mode--6">
                        <input class="fd-input" type="text" id="input-3" placeholder="Field placeholder text">
                    </div>
                </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=form-edit %}

<br>


## Form with 4-7-1 Layout

{% capture form-edit %}
<div class="fd-edit-mode-container">
    <div class="fd-form-edit-mode-row">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <label class="fd-form-label" for="input-1">Default Input:</label>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <label class="fd-form-label" for="input-2">2 Inputs:</label>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <div class="fd-form-edit-mode-row">
                <div class="fd-form-edit-mode fd-form-edit-mode--6">
                    <input class="fd-input" type="text" id="input-2" placeholder="Field placeholder text">
                </div>
                <div class="fd-form-edit-mode fd-form-edit-mode--6">
                    <input class="fd-input" type="text" id="input-3" placeholder="Field placeholder text">
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=form-edit %}

<br>

## Form with 4-7-1 compact Layout

{% capture form-edit %}
<div class="fd-edit-mode-container">
    <div class="fd-form-edit-mode-row fd-form-edit-mode-row--compact">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <div class="fd-form-edit-mode-flex fd-form-edit-mode-flex--right">
                <label class="fd-form-label" for="input-1">Default Input:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row fd-form-edit-mode-row--compact">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <div class="fd-form-edit-mode-flex fd-form-edit-mode-flex--right">
                <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row fd-form-edit-mode-row--compact">
        <div class="fd-form-edit-mode fd-form-edit-mode--4 fd-form-edit-mode--label">
            <div class="fd-form-edit-mode-flex fd-form-edit-mode-flex--right">
                <label class="fd-form-label" for="input-2">2 Inputs:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--7">
            <div class="fd-form-edit-mode-row fd-form-edit-mode-row--compact">
                    <div class="fd-form-edit-mode fd-form-edit-mode--6">
                        <input class="fd-input fd-input--compact" type="text" id="input-2" placeholder="Field placeholder text">
                    </div>
                    <div class="fd-form-edit-mode fd-form-edit-mode--6">
                        <input class="fd-input fd-input--compact" type="text" id="input-3" placeholder="Field placeholder text">
                    </div>
                </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=form-edit %}

<br>

## Form with 12 column Layout

{% capture form-edit %}
<div class="fd-edit-mode-container">
    <div class="fd-form-edit-mode-row fd-form-edit-mode-row--vertical">
        <div class="fd-form-edit-mode fd-form-edit-mode--12">
            <div class="fd-form-edit-mode-flex">
                <label class="fd-form-label" for="input-1">Default Input:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--12">
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row fd-form-edit-mode-row--vertical">
        <div class="fd-form-edit-mode fd-form-edit-mode--12">
            <div class="fd-form-edit-mode-flex">
                <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--12">
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-form-edit-mode-row fd-form-edit-mode-row--vertical">
        <div class="fd-form-edit-mode fd-form-edit-mode--12">
            <div class="fd-form-edit-mode-flex">
                <label class="fd-form-label" for="input-2">2 Inputs:</label>
            </div>
        </div>
        <div class="fd-form-edit-mode fd-form-edit-mode--12">
            <div class="fd-form-edit-mode-row fd-form-edit-mode-row--vertical">
                <div class="fd-form-edit-mode fd-form-edit-mode--6">
                    <input class="fd-input" type="text" id="input-2" placeholder="Field placeholder text">
                </div>
                <div class="fd-form-edit-mode fd-form-edit-mode--6">
                    <input class="fd-input" type="text" id="input-3" placeholder="Field placeholder text">
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=form-edit %}

<br>