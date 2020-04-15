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
    <div class="fd-input-group fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-1', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-input--no-number-spinner fd-step-input__inputtext fd-input-group__input" id="step-1" type="number" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-1', 'up');" type="button"></button>
            </div>
    </div>
 <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>RTL Support</h3>
<div class="fd-step-input" dir="rtl">
    <div class="fd-input-group fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-1-rtl', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-step-input__inputtext fd-input-group__input" id="step-1-rtl" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-1-rtl', 'up');" type="button"></button>
            </div>
    </div>
     <span class="fd-step-input__unit-description">PC</span>
</div>
{% endcapture %}
{% include display-component.html component=step-input-compact %}

## Step Input with Cozy

{% capture step-input-cozy %}

<div class="fd-step-input">
<div class="fd-input-group fd-input-group--control fd-step-input__content-wrapper">
            <div class="fd-input-group__addon fd-input-group__addon--button fd-step-input__button-container">
                <button aria-label="Step down" class="fd-button fd-step-input__button sap-icon--less" onclick="stepInputValue('step-2', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-step-input__inputtext fd-input-group__input" id="step-2" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--button fd-step-input__button-container">
                <button aria-label="Step up" class="fd-button fd-step-input__button sap-icon--add " onclick="stepInputValue('step-2', 'up');" type="button"></button>
            </div>
    </div>
  <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>RTL Support</h3>
<div class="fd-step-input" dir="rtl">
    <div class="fd-input-group fd-input-group--control fd-step-input__content-wrapper">
            <div class="fd-input-group__addon fd-input-group__addon--button fd-step-input__button-container">
                <button aria-label="Step down" class="fd-button fd-step-input__button sap-icon--less " onclick="stepInputValue('step-2-rtl', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-step-input__inputtext fd-input-group__input" id="step-2-rtl" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container">
                <button aria-label="Step up" class="fd-button fd-step-input__button sap-icon--add " onclick="stepInputValue('step-2-rtl', 'up');" type="button"></button>
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
  <div class="fd-input-group is-success fd-input-group--control fd-step-input__content-wrapper  fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-3', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-step-input__inputtext fd-input-group__input" id="step-3" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-3', 'up');" type="button"></button>
            </div>
</div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>Information</h3>
<div class="fd-step-input">
   <div class="fd-input-group is-information fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-3-info', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-step-input__inputtext fd-input-group__input " id="step-3-info" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-3-info', 'up');" type="button"></button>
            </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>
<br><br>
<h3>Error</h3>
<div class="fd-step-input">
   <div class="fd-input-group is-error fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-4', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-step-input__inputtext fd-input-group__input" id="step-4" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-4', 'up');" type="button"></button>
            </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>

<br><br>

<h3>Warning</h3>
<div class="fd-step-input">
    <div class="fd-input-group is-warning fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-5', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-step-input__inputtext fd-input-group__input" id="step-5" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-5', 'up');" type="button"></button>
            </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>

{% endcapture %}
{% include display-component.html component=step-input-states %}

## Step Input with disabled and Read only state

{% capture step-input-disabled %}

<div class="fd-step-input">
    <div class="fd-input-group is-disabled fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-6', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-step-input__inputtext fd-input-group__input" id="step-6" type="text" value="0">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-6', 'up');" type="button"></button>
            </div>
    </div>
    <span class="fd-step-input__unit-description is-disabled">PC</span>
</div>

<br><br>

<h3>Read Only</h3>

<div class="fd-step-input">
<div class="fd-input-group is-readonly fd-input-group--control fd-step-input__content-wrapper fd-step-input__content-wrapper--compact is-readonly">
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container is-readonly fd-step-input__button-container--compact">
                <button aria-label="Step down" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--less " onclick="stepInputValue('step-7', 'down');" type="button"></button>
            </div>
            <input class="fd-input fd-input--compact fd-input--compact fd-step-input__inputtext fd-input-group__input" id="step-7" type="text" value="0" readonly>
            <div class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button fd-step-input__button-container is-readonly fd-step-input__button-container--compact">
                <button aria-label="Step up" class="fd-button fd-step-input__button fd-step-input__button--compact sap-icon--add " onclick="stepInputValue('step-7', 'up');" type="button"></button>
            </div>
    </div>
    <span class="fd-step-input__unit-description">PC</span>
</div>

{% endcapture %}
{% include display-component.html component=step-input-disabled %}
