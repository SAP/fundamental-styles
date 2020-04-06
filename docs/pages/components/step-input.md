---
title: Step Input
id: step-input
keywords: Step Input, Step, Input
sidebar: left-navigation-sidebar
toc: false
permalink: components/step-input.html
folder: components
---

The Step Input component is an opinionated composition of the Input, Button components.
It is typically used to enter numbers.The value can be increased or reduced with the provided controls.
{: .docs-intro}

## Step Input with compact
{% capture step-input-compact %}

<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-1-compact', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-1-compact" type="text" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-1-compact', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>RTL Support</h3>
<div class="fd-step-input" dir="rtl">
    <div class="fd-step-input__content-wrapper">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-1-compact-rtl', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-1-compact-rtl" type="text" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-1-compact-rtl', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
{% endcapture %}
{% include display-component.html component=step-input-compact %}

## Step Input with Cozy
{% capture step-input-cozy %}

<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper fd-step-input__content-wrapper--cozy">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon fd-step-input__icon--cozy sap-icon--less" onclick="stepInputValue('step-2-cozy', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-2-cozy" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon fd-step-input__icon--cozy sap-icon--add" onclick="stepInputValue('step-2-cozy', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>RTL Support</h3>
<div class="fd-step-input" dir="rtl">
    <div class="fd-step-input__content-wrapper fd-step-input__content-wrapper--cozy">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon fd-step-input__icon--cozy sap-icon--less" onclick="stepInputValue('step-2-cozy-rtl', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-2-cozy-rtl" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon fd-step-input__icon--cozy sap-icon--add" onclick="stepInputValue('step-2-cozy-rtl', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
{% endcapture %}
{% include display-component.html component=step-input-cozy %}

## Step Input with Diffrent states
{% capture step-input-states %}
<h3>Success</h3>
<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper is-success">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-3-success', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-3-success" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-3-success', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>Information</h3>
<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper is-information is-error">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-4-info', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-4-info" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-4-info', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>Error</h3>
<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper is-error">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-5-error', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-5-error" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-5-error', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>

<br><br>
<h3>Warning</h3>
<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper is-warning">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-6-warn', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-6-warn" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-6-warn', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>

{% endcapture %}
{% include display-component.html component=step-input-states %}
## Step Input with disabled and Read only state
{% capture step-input-disabled %}

<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper is-disabled">
        <div class="fd-step-input__icon-container">
            <span class="fd-step-input__icon sap-icon--less" onclick="stepInputValue('step-1-compact', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext fd-step-input__inputtext--no-number-spinner" id="step-1-compact" type="number" value="0">
        <div class="fd-step-input__icon-container">    
            <span class="fd-step-input__icon sap-icon--add" onclick="stepInputValue('step-1-compact', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description is-disabled">PC</span>
</div>

<br><br>
<h3>Read Only</h3>
<div class="fd-step-input">
    <div class="fd-step-input__content-wrapper is-readonly">
        <div class="fd-step-input__icon-container is-readonly ">
            <span class="fd-step-input__icon is-hidden sap-icon--less " onclick="stepInputValue('step-2-cozy-rtl', 'down');">
            </span>
        </div>
        <input class="fd-step-input__inputtext is-readonly fd-step-input__inputtext--no-number-spinner" id="step-2-cozy-rtl" type="number" value="0" readonly>
        <div class="fd-step-input__icon-container is-readonly ">    
            <span class="fd-step-input__icon is-hidden sap-icon--add" onclick="stepInputValue('step-2-cozy-rtl', 'up');">
            </span>
        </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>

{% endcapture %}
{% include display-component.html component=step-input-disabled %}
