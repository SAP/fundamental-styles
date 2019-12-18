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

{% capture sizes %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Default Size </label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910 ">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Compact Size </label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon fd-input-group__addon--compact">$</span>
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 ">
    </div>
</div>
{% endcapture %}

{% include display-component.html component=sizes %}

## Text add-on

The Input Group with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right (or both) of the input element.

{% capture text-addon %}

<div class="fd-form-item">
    <label class="fd-form-label" for="">Left Aligned Text Add-on</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910 ">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Right Aligned Text Add-on</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910 ">
        <span class="fd-input-group__addon">€</span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Right Aligned Text Add-on With Right Aligned Input Text</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input right-align" type="text" id="" name="" value="1234568910 ">
        <span class="fd-input-group__addon">€</span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Left and Right Aligned Text Add-ons</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="This is a test">
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
            <span class="sap-icon--employee" role="presentation"></span>
        </span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with icon on the right</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with icon on the right and right aligned input text</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input right-align" type="text" id="" name="" value="1000000">
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
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light">
                Button
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with icon action</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--icon fd-button--light sap-icon--navigation-down-arrow"></button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Compact Input with icon action</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button--icon fd-button--light fd-button--compact sap-icon--navigation-down-arrow"></button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Input with text action on left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light">
                Button
            </button>
        </span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}

## States

{% capture states %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Valid (Success)</label>
    <div class="fd-input-group is-valid">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Invalid (Error)</label>
    <div class="fd-input-group is-invalid">
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Warning (Alert)</label>
    <div class="fd-input-group is-warning">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Information</label>
    <div class="fd-input-group is-information">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button--light fd-button--compact">
                Button
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Disabled</label>
    <div class="fd-input-group is-disabled">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" placeholder="Enter a value">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Disabled Valid (Success)</label>
    <div class="fd-input-group is-valid is-disabled">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Disabled Invalid (Error)</label>
    <div class="fd-input-group is-invalid is-disabled">
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Disabled Warning (Alert)</label>
    <div class="fd-input-group is-warning is-disabled">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Disabled Information</label>
    <div class="fd-input-group is-information is-disabled">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light fd-button--compact">
                Button
            </button>
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=states %}

## Focus

The Input Group supports **focus** state, it can be added by putting `.is-focus` class to component.
<div class="fd-form-item">
    <label class="fd-form-label" for="">Default</label>
    <div class="fd-input-group is-focus">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Error State</label>
    <div class="fd-input-group is-invalid is-focus">
        <input class="fd-input fd-input-group__input" type="text" id="" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>


## Textareas

{% capture button-addon %}
<div class="fd-form-item">
    <label class="fd-form-label" for="">Textarea with text add-on</label>
    <div class="fd-input-group">
        <textarea class="fd-textarea fd-input-group__input" id=""></textarea>
        <span class="fd-input-group__addon">
            km/h
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Textarea with action</label>
    <div class="fd-input-group">
        <textarea class="fd-textarea fd-input-group__input" id=""></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light">
                Button
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Compact textarea with action</label>
    <div class="fd-input-group is-valid">
        <textarea class="fd-textarea fd-textarea--compact fd-input-group__input" id=""></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light">
                Button
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="">Compact textarea with action</label>
    <div class="fd-input-group is-invalid">
        <textarea class="fd-textarea fd-textarea--compact fd-input-group__input" id=""></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light">
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
        <input class="fd-input fd-input--no-number-spinner fd-input-group__input" id="spinner-1" type="number" value="100" />
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button--light fd-button--half sap-icon--slim-arrow-up" aria-label="Step up" onclick="document.getElementById('spinner-1').stepUp();"></button>
            <button class="fd-input-group__button fd-button--light fd-button--half sap-icon--slim-arrow-down" aria-label="Step down" onclick="document.getElementById('spinner-1').stepDown();"></button>
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-spinner %}
