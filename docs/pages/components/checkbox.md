---
title: Checkbox
id: checkbox
keywords: checkbox, displayonly-checkbox
sidebar: left-navigation-sidebar
toc: false
permalink: components/checkbox.html
folder: components
---

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
            <label class="fd-checkbox__label" for="Ai4ez611">
                Field label
            </label>
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
            <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119">
            <label class="fd-checkbox__label" for="Ai4ez6119">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
            <label class="fd-checkbox__label" for="Ai4ez6129">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
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
            <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192">
            <label class="fd-checkbox__label" for="Ai4ez61192">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
            <label class="fd-checkbox__label" for="Ai4ez61292">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
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

## Display Only Checkbox
{% capture display-checkbox %}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Display Only Checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--display-only" id="1tn4O446" checked>
            <label class="fd-checkbox__label--display-only" for="1tn4O446">Label</label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--display-only" id="StRHi735">
            <label class="fd-checkbox__label--display-only" for="StRHi735">Label</label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--display-only" id="GWRmH826">
            <label class="fd-checkbox__label--display-only" for="GWRmH826">Label</label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset" dir="rtl">
    <legend class="fd-fieldset__legend">Display Only Checkboxes RTL Support</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--display-only" id="1tn4O446" checked>
            <label class="fd-checkbox__label--display-only" for="1tn4O446">Label</label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--display-only" id="StRHi735">
            <label class="fd-checkbox__label--display-only" for="StRHi735">Label</label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--display-only" id="GWRmH836" >
            <label class="fd-checkbox__label--display-only" for="GWRmH836">Label</label>
        </div>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=display-checkbox %}
