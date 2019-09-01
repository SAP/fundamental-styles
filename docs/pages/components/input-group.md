---
title: Input Group
id: input-group
keywords: input group, input groups, input, groups
sidebar: left-navigation-sidebar
toc: false
permalink: components/input-group.html
folder: components
---

The input group includes form inputs with add-ons that allow the user to better understand the information being entered.
{: .docs-intro}


## Sizes

The Input Group supports **compact** mode (by virtue of the `--compact` modifier on child components).

{% capture text-addon %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Default Size </label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input" type="text" id="" name="" value="1234568910 ">
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Compact Size </label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input--compact" type="text" id="" name="" value="1234568910 ">
    </div>
</div>
{% endcapture %}

{% include display-component.html component=text-addon %}


## Text add-on

The Input Group with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right (or both) of the input element.

{% capture text-addon %}

<div class="fd-form-item">
    <label class="fd-form-label" for="">Left Aligned Text Add-on</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input" type="text" id="" name="" value="1234568910 ">
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Right Aligned Text Add-on</label>
    <div class="fd-input-group">
        <input class="fd-input" type="text" id="" name="" value="1234568910 ">
        <span class="fd-input-group__addon">€</span>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Left and Right Aligned Text Add-ons</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input" type="text" id="" name="" value="This is a test">
        <span class="fd-input-group__addon">.00</span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=text-addon %}


## Input with icons

The Input with add-on supports icons.

{% capture input-action %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with icon on the left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">
            <span class="sap-icon--globe" role="presentation"></span>
        </span>
        <input class="fd-input" type="text" id="" name="" value="1000000">
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with icon on the right</label>
    <div class="fd-input-group">
        <input class="fd-input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-action %}


## Input with actions

The Input with add-on supports actions. Actions can be shown with a text label or icon.

{% capture button-addon %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with text add-on</label>
    <div class="fd-input-group">
        <input class="fd-input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--light">
                Button
            </button>
        </span>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with icon action</label>
    <div class="fd-input-group">
        <input class="fd-input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--icon fd-button--light sap-icon--navigation-down-arrow"></button>
        </span>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with text action on left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--light">
                Button
            </button>
        </span>
        <input class="fd-input" type="text" id="" name="" value="1000000">
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}


## Textareas

{% capture button-addon %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Textarea with text add-on</label>
    <div class="fd-input-group">
        <textarea class="fd-textarea" id=""></textarea>
        <span class="fd-input-group__addon">
            km/h
        </span>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="">Textarea with action</label>
    <div class="fd-input-group">
        <textarea class="fd-textarea" id=""></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--light">
                Button
            </button>
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}


## Number input

For an integer value input, a spinner can be added allowing the user to increase or decrease the value.

{% capture input-spinner %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Quantity Spinner</label>
    <div class="fd-input-group">
        <input class="fd-input" id="spinner-1" type="number" value="100" />
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--light fd-button--half sap-icon--slim-arrow-up" aria-label="Step up" onclick="document.getElementById('spinner-1').stepUp();"></button>
            <button class="fd-button--light fd-button--half sap-icon--slim-arrow-down" aria-label="Step down" onclick="document.getElementById('spinner-1').stepDown();"></button>
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-spinner %}
