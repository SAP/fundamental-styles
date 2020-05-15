---
title: Step Input
id: step-input
keywords: Step Input, Step, Input
sidebar: left-navigation-sidebar
toc: false
permalink: components/step-input.html
folder: components
---

The step input control allows the user to change the input values in predefined increments (steps).

Use the step input if:
<ul>
    <li>The user needs to adjust amounts, quantities, or other values quickly.</li>
    <li>The user needs to adjust values for a specific step (for example, in a shopping cart).</li>
</ul>
Do not use the step input if:
<ul>
    <li>The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use the regular input field control instead.</li>
    <li>You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular input field control instead.</li>
    <li>You want the user to enter dates and times. In this case, use the date picker, date range selection, time picker, or date/time picker instead.</li>
</ul>


{: .docs-intro}


## Step Input with Cozy
On smartphones and tablets, the step input is shown in cozy mode (default).

{% capture step-input-cozy %}
<div class="fd-step-input">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-3', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-3" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-3', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
<br><br>
<h3>RTL Support</h3>
<div dir="rtl">
    <div class="fd-step-input">
            <button aria-label="Step down" class="
                fd-button
                fd-button--transparent
                fd-step-input__button
                sap-icon--less"
                onclick="stepInputValue('step-4', 'down');"
                tabindex="-1" type="button">
            </button>
        <input class="
                fd-input 
                fd-input--no-number-spinner 
                fd-step-input__input
        " id="step-4" type="number" value="0">
            <button aria-label="Step up" class="
                fd-button 
                fd-button--transparent
                fd-step-input__button
                sap-icon--add"
                onclick="stepInputValue('step-4', 'up');" 
                tabindex="-1" type="button">
            </button>
    </div>
    
</div>
{% endcapture %}
{% include display-component.html component=step-input-cozy %}


## Compact Step Input
The Step Input should be used in compact mode when using a desktop of devices with large screens. 
It can be achieved by adding the `--compact` modifier to the main element as well as the button and input elements.

{% capture step-input-compact %}
<div class="fd-form-item fd-form-item--horizontal">
    <div class="fd-step-input fd-step-input--compact">
            <button aria-label="Step down" class="
                fd-button
                fd-button--compact
                fd-button--transparent
                fd-step-input__button
                sap-icon--less"
                onclick="stepInputValue('step-1', 'down');"
                tabindex="-1" type="button">
            </button>
        <input class="
                fd-input 
                fd-input--compact 
                fd-input--no-number-spinner 
                fd-step-input__input
        " id="step-1" type="number" value="0">
            <button aria-label="Step up" class="
                fd-button 
                fd-button--compact
                fd-button--transparent
                fd-step-input__button
                sap-icon--add"
                onclick="stepInputValue('step-1', 'up');" 
                tabindex="-1" type="button">
            </button>
    </div>
    <span class="fd-form-label fd-form-label--unit-description">PC</span>
</div>
<br><br>
<h3>RTL Support</h3>
<div class="fd-form-item fd-form-item--horizontal" dir="rtl">
    <div class="fd-step-input fd-step-input--compact">
            <button aria-label="Step down" class="
                fd-button
                fd-button--compact
                fd-button--transparent
                fd-step-input__button
                sap-icon--less"
                onclick="stepInputValue('step-2', 'down');"
                tabindex="-1" type="button">
            </button>
        <input class="
                fd-input 
                fd-input--compact 
                fd-input--no-number-spinner 
                fd-step-input__input
        " id="step-2" type="number" value="0">
            <button aria-label="Step up" class="
                fd-button 
                fd-button--compact
                fd-button--transparent
                fd-step-input__button
                sap-icon--add"
                onclick="stepInputValue('step-2', 'up');" 
                tabindex="-1" type="button">
            </button>
    </div>
    <span class="fd-form-label fd-form-label--unit-description">PC</span>
</div>
{% endcapture %}
{% include display-component.html component=step-input-compact %}

## Focused Step Input
By default there is built-in focus indicator for StepInput component, which is not supported by IE11.
To make focus work on IE11, it should be added by putting `.is-focus` class to component

{% capture step-input-cozy %}
<div class="fd-step-input is-focus">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-20', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-20" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-20', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
<br><br>
<h3>RTL Support</h3>
<div dir="rtl">
    <div class="fd-step-input is-focus">
            <button aria-label="Step down" class="
                fd-button
                fd-button--transparent
                fd-step-input__button
                sap-icon--less"
                onclick="stepInputValue('step-21', 'down');"
                tabindex="-1" type="button">
            </button>
        <input class="
                fd-input 
                fd-input--no-number-spinner 
                fd-step-input__input
        " id="step-21" type="number" value="0">
            <button aria-label="Step up" class="
                fd-button 
                fd-button--transparent
                fd-step-input__button
                sap-icon--add"
                onclick="stepInputValue('step-21', 'up');" 
                tabindex="-1" type="button">
            </button>
    </div>
    
</div>
{% endcapture %}
{% include display-component.html component=step-input-cozy %}

## Step Input with Different states
The Step Input component also supports semantic states as does every form. 
The semantic states can be customized by adding the `is-error` | `is-success` | `is-warning` | or `is-information` into the fd-step-input element.

{% capture step-input-states %}

<h3>Success</h3>

<div class="fd-step-input is-success">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-5', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-5" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-5', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>

<br><br>
<h3>Information</h3>
<div class="fd-step-input is-information">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-6', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-6" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-6', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>
<br><br>
<h3>Error</h3>
<div class="fd-step-input is-error">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-7', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-7" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-7', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>

<br><br>

<h3>Warning</h3>
<div class="fd-step-input is-warning">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button
        sap-icon--less"
        onclick="stepInputValue('step-8', 'down');"
        tabindex="-1" type="button">
    </button>
    <input class="
        fd-input 
        fd-input--no-number-spinner 
        fd-step-input__input
    " id="step-8" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button 
        fd-button--transparent
        fd-step-input__button
        sap-icon--add"
        onclick="stepInputValue('step-8', 'up');" 
        tabindex="-1" type="button">
    </button>
</div>


<br>
<br>

<h3>Compact Success</h3>
<div class="fd-step-input is-success fd-step-input--compact">
        <button aria-label="Step down" class="
            fd-button
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-9', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--compact 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-9" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-9', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>


<br>
<br>

<h3>Compact Warning</h3>
<div class="fd-step-input is-warning fd-step-input--compact">
        <button aria-label="Step down" class="
            fd-button
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-10', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--compact 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-10" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-10', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>


<br>
<br>

<h3>Compact Error</h3>
<div class="fd-step-input is-error fd-step-input--compact">
        <button aria-label="Step down" class="
            fd-button
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-11', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--compact 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-11" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-11', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>


<br>
<br>

<h3>Compact Information</h3>
<div class="fd-step-input is-information fd-step-input--compact">
        <button aria-label="Step down" class="
            fd-button
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-12', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--compact 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-12" type="number" value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--compact
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-12', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>

{% endcapture %}
{% include display-component.html component=step-input-states %}

## Step Input with disabled and Read only state

{% capture step-input-disabled %}

<h3>Disabled</h3>

<div class="fd-step-input is-disabled">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-13', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-13" type="number" value="0" disabled>
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-13', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>


<br><br>

<h3>Read Only</h3>

<div class="fd-step-input is-readonly">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button
            sap-icon--less"
            onclick="stepInputValue('step-14', 'down');"
            tabindex="-1" type="button">
        </button>
    <input class="
            fd-input 
            fd-input--no-number-spinner 
            fd-step-input__input
    " id="step-14" type="number" readonly value="0">
        <button aria-label="Step up" class="
            fd-button 
            fd-button--transparent
            fd-step-input__button
            sap-icon--add"
            onclick="stepInputValue('step-14', 'up');" 
            tabindex="-1" type="button">
        </button>
</div>


{% endcapture %}
{% include display-component.html component=step-input-disabled %}
