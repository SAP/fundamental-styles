---
title: Input Group
id: input-group
keywords: input group, input groups, input, groups
sidebar: left-navigation-sidebar
toc: false
permalink: components/input-group.html
folder: components
---

<style type="text/css">
.fd-form__group {
    margin-bottom: 20px;
}
</style>

The input group includes form inputs with add-ons that allow the user to better understand the information being entered.
{: .docs-intro}

<br>

## Sizes
The Input Group supports `--compact` mode

{% capture text-addon %}
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Default Size </label>
        <div class="fd-input-group fd-input-group--before">
            <span class="fd-input-group__addon fd-input-group__addon--before">$</span>
            <input class="fd-input" type="text" id="" name="" value="1234568910 ">
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Compact Size </label>
        <div class="fd-input-group fd-input-group--before fd-input-group--compact">
            <span class="fd-input-group__addon fd-input-group__addon--before">$</span>
            <input class="fd-input fd-input--compact" type="text" id="" name="" value="1234568910 ">
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=text-addon %}

## Text add-on

The Input Group with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right of the input element.





{% capture text-addon %}
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Left Aligned Text Add-on</label>
        <div class="fd-input-group fd-input-group--before">
            <span class="fd-input-group__addon fd-input-group__addon--before">$</span>
            <input class="fd-input" type="text" id="" name="" value="1234568910 ">
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Right Aligned Text Addon</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="1234568910 ">
            <span class="fd-input-group__addon fd-input-group__addon--after">€</span>
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Right Aligned Text Addon</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="" placeholder="Field placeholder text">
            <span class="fd-input-group__addon fd-input-group__addon--after">km/h</span>
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Character Counter Example</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="This is a test">
            <span class="fd-input-group__addon fd-input-group__addon--after">50</span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=text-addon %}

<br />

## Number input

For an integer value input, a spinner can be added allowing the user to increase or decrease the value.

{% capture input-spinner %}
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Quantity Spinner</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="number" id="spinner-1" name="" value="100" />
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                <button class="fd-input-group__button fd-input-group__button--step-up sap-icon--slim-arrow-up" aria-label="Step up" onclick="document.getElementById('spinner-1').stepUp();"></button>
                <button class="fd-input-group__button fd-input-group__button--step-down sap-icon--slim-arrow-down" aria-label="Step down" onclick="document.getElementById('spinner-1').stepDown();"></button>
            </span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-spinner %}

<br/>

## Input with icons

The Input with add-on supports icons.

{% capture input-action %}
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Search input</label>
        <div class="fd-input-group">
            <input class="fd-input" type="search" id="search-1" name="" value="Search Term" placeholder="Enter Term..">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-input-group__button--clear" aria-label="Clear" onclick="document.getElementById('search-1').value = '';"></button>
            </span>
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Input with icon on the left</label>
        <div class="fd-input-group fd-input-group--before">
            <span class="fd-input-group__addon fd-input-group__addon--before">
                <span class="sap-icon--globe" role="presentation"></span>
            </span>
            <input class="fd-input" type="text" id="" name="" value="1000000">
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Input with icon on the right</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="1000000">
            <span class="fd-input-group__addon fd-input-group__addon--after">
                <span class="sap-icon--hide" role="presentation"></span>
            </span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-action %}

<br>

## Input with actions

The Input with add-on supports actions. Actions can be shown with a text label or icon.

{% capture button-addon %}
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Input with action</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="1000000">
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                <button class="fd-button--light">
                    Button
                </button>
            </span>
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Input with icon action</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="1000000">
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                <button class="fd-button--icon fd-button--light sap-icon--navigation-down-arrow"></button>
            </span>
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Input with text action</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="1000000">
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                <button class="fd-button--light">
                    Button
                </button>
            </span>
        </div>
    </div>
</div>

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Input with icon text action</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-input" type="text" id="" name="" value="1000000">
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--after">
                <button class="fd-button--icon fd-button--light sap-icon--navigation-down-arrow"></button>
            </span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}

<br>


## Textarea with input group

{% capture button-addon %}
<div class="fd-input-group fd-input-group--after">
    <textarea class="fd-textarea" id=""></textarea>
    <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--textarea">
        km/h
    </span>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}

<br>
