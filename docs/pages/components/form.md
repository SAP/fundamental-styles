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
        <label class="fd-form-label" for="input-1a">Default Input:</label>
        <input class="fd-input" type="text" id="input-1a" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
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
        <input class="fd-input is-disabled" type="text" id="input-05">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-06">Read-Only Input:</label>
        <input class="fd-input" type="text" id="input-06" value="Read Only" readonly>
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--inline">
        <label class="fd-form-label" for="input-1a">Default Input:</label>
        <input class="fd-input" type="text" id="input-1a" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--inline">
        <label class="fd-form-label" for="input-1b">Compact Input:</label>
        <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--inline">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
    <br />
    <br />
    <div class="fd-form-item fd-form-item--inline">
        <label class="fd-form-label" aria-required="true" for="input-1d">Password:</label>
        <input class="fd-input" type="password" id="input-1d">
    </div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br/>

## Form Items with Help Messaging

Help elements give the user information about the input. Two types of help elements can be used.

- The inline help element is displayed as a ? Icon. On hover or click, help content is displayed.
- Help content can also be visible at all times to avoid mistakes. This type of help generally contains validation rules about the data allowed in the input field. An example is "Maximum 20 characters". This is displayed below the input field.

{% capture inputs-help %}
    <div class="fd-form-item">
        <label class="fd-form-label fd-form-label--inline-help" for="input-44">
            Input with inline help:
            <span class="fd-inline-help">
                <span class="fd-inline-help__content fd-inline-help__content--bottom-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </span>
            </span>
        </label>
        <input class="fd-input" type="text" id="input-45">
    </div>
    <br />
    <br />
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-45">Input with Help Message:</label>
        <input class="fd-input" type="text" id="input-45">
        <span class="fd-form-message fd-form-message--help">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</span>
    </div>
{% endcapture %}

{% include display-component.html component=inputs-help %}

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
    <label class="fd-form-label" for="OatmD552">
        Normal Input:
    </label>
    <input type="text" class="fd-input" id="OatmD552" placeholder="Field placeholder text">
    <span class="fd-form-message">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</span>
</div>

<br />
<br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-2">
        Valid Input:
    </label>
    <input class="fd-input is-valid" type="text" id="input-2">
    <span class="fd-form-message fd-form-message--success">Success message</span>
</div>

<br />
<br />

<div class="fd-form-item">
    <label class="fd-form-label" for="UI7xy545">
        Invalid Input:
    </label>
    <input type="text" class="fd-input is-invalid" id="UI7xy545" placeholder="Field placeholder text">
    <span class="fd-form-message fd-form-message--error">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc metus lacus commodo eget justo ut rutrum varius nunc acus commodo eget justo ut rutrum varius nunc commodo</span>
</div>

<br />
<br />

<div class="fd-form-item">
    <label class="fd-form-label" for="pvsz1273">
        Warning Input:
    </label>
    <span class="fd-form-message fd-form-message--warning">Pellentesque metus lacus commodo justo nunc</span>
    <input type="text" class="fd-input is-warning" id="pvsz1273" placeholder="Field placeholder text">
</div>

<br />
<br />

<div class="fd-form-item">
    <label class="fd-form-label" for="VmsRZ860">
        Field Label:
    </label>
    <span class="fd-form-message fd-form-message--information">Information message</span>
    <input type="text" class="fd-input is-information" id="VmsRZ860" placeholder="Field placeholder text">
</div>

<br />
<br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-6">Disabled Input:</label>
    <input class="fd-input" type="text" id="input-6" value="Non editable data" disabled>
</div>

<br />
<br />

<div class="fd-form-item">
    <label class="fd-form-label" for="input-7">Read Only Input:</label>
    <input class="fd-input" type="text" id="input-7" value="Read only data" readonly>
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
        <textarea class="fd-textarea" id="textarea-1">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="textarea-2">Compact text area:</label>
        <textarea class="fd-textarea fd-textarea--compact" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
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
In special cases, there are only two mutually exclusive options. Combine them into a single checkbox or toggle switch. For example, use a checkbox for “I agree” (for example, to terms and conditions) instead of two radio buttons for “I agree” and “I don’t agree”.
- The options are numbers with fixed steps. Use a slider control.

{% capture radio-buttons%}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Radio Buttons Cozy Mode</legend>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh761">
            <input type="radio" class="fd-radio" id="pDidh761" name="radio" checked>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh7612">
            <input type="radio" class="fd-radio" id="pDidh7612" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh7613">
            <input type="radio" class="fd-radio" id="pDidh7613" name="radio">Field label
        </label>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Radio Buttons Compact Mode</legend>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh76111">
            <input type="radio" class="fd-radio fd-radio--compact" id="pDidh76111" name="radio" checked>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh761211">
            <input type="radio" class="fd-radio fd-radio--compact" id="pDidh761211" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh761311">
            <input type="radio" class="fd-radio fd-radio--compact" id="pDidh761311" name="radio">Field label
        </label>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Radio buttons Disabled</legend>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh764">
            <input type="radio" class="fd-radio" id="pDidh764" name="radio" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh7615">
            <input type="radio" class="fd-radio" id="pDidh7615" name="radio" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="pDidh7616">
            <input type="radio" class="fd-radio" id="pDidh7616" name="radio" disabled>Field label
        </label>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Inline Radio buttons</legend>
    <div class="fd-form-item fd-form-item--horizontal fd-form-item--radio">
        <label class="fd-form-label" for="pDidh767">
            <input type="radio" class="fd-radio" id="pDidh767" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--horizontal fd-form-item--radio">
        <label class="fd-form-label" for="pDidh7618">
            <input type="radio" class="fd-radio" id="pDidh7618" name="radio" >Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--horizontal fd-form-item--radio">
        <label class="fd-form-label" for="pDidh7619">
            <input type="radio" class="fd-radio" id="pDidh7619" name="radio">Field label
        </label>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Interaction States</legend>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh761">
            <input type="radio" class="fd-radio" id="iSpDidh761" name="radio" checked>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh7612">
            <input type="radio" class="fd-radio is-valid" id="iSpDidh7612" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh7613">
            <input type="radio" class="fd-radio is-invalid" id="iSpDidh7613" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh7614">
            <input type="radio" class="fd-radio is-warning" id="iSpDidh7614" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh7615">
            <input type="radio" class="fd-radio is-information" id="iSpDidh7615" name="radio">Field label
        </label>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Interaction States Compact Mode</legend>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh7619">
            <input type="radio" class="fd-radio fd-radio--compact" id="iSpDidh7619" name="radio" checked>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76129">
            <input type="radio" class="fd-radio fd-radio--compact is-valid" id="iSpDidh76129" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76139">
            <input type="radio" class="fd-radio fd-radio--compact is-invalid" id="iSpDidh76139" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76149">
            <input type="radio" class="fd-radio fd-radio--compact is-warning" id="iSpDidh76149" name="radio">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76159">
            <input type="radio" class="fd-radio fd-radio--compact is-information" id="iSpDidh76159" name="radio">Field label
        </label>
    </div>
</fieldset>
<br /><br />
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Interaction States Compact Mode Disabled</legend>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh7619d">
            <input type="radio" class="fd-radio fd-radio--compact" id="iSpDidh7619d" name="radio" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76129d">
            <input type="radio" class="fd-radio fd-radio--compact is-valid" id="iSpDidh76129d" name="radio" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76139d">
            <input type="radio" class="fd-radio fd-radio--compact is-invalid" id="iSpDidh76139d" name="radio" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76149d">
            <input type="radio" class="fd-radio fd-radio--compact is-warning" id="iSpDidh76149d" name="radio" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--radio">
        <label class="fd-form-label" for="iSpDidh76159d">
            <input type="radio" class="fd-radio fd-radio--compact is-information" id="iSpDidh76159d" name="radio" disabled>Field label
        </label>
    </div>
</fieldset>
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
    <div class="fd-form-item fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez611">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">Text Option
        </label>
    </div>
    <div class="fd-form-item fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez612">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>Selected State
        </label>
    </div>
    <div class="fd-form-item fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez613">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">TriState Text
        </label>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes disabled</legend>
    <div class="fd-form-item fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez614">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez614" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez615">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez615" disabled>Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez616">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez616" disabled>Field label
        </label>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes inline</legend>
    <div class="fd-form-item fd-form-item--horizontal fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez617">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--horizontal fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez618">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618">Field label
        </label>
    </div>
    <div class="fd-form-item fd-form-item--horizontal fd-form-item--checkbox">
        <label class="fd-form-label" for="Ai4ez619">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619">Field label
        </label>
    </div>
</fieldset>{% endcapture %}

{% include display-component.html component=checkbox %}

<br>
