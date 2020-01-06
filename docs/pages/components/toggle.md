---
title: Toggle / Switch
id: toggle
keywords: toggle, swtich
sidebar: left-navigation-sidebar
toc: false
permalink: components/toggle.html
folder: components
---

The toggle/switch is meant to resemble a physical switch and allow a user to turn a setting “on” or “off”. It should be used to switch between two states/modes: active or inactive.
{: .docs-intro}

It is recommended to always display the toggle with a label above it as well as the label of the selected state. For example, the label above would be Active, the toggle state would be “on” and the selected state label displayed to the right of the toggle would be “Yes”.


## Toggle with Labels on Sides
This is basic usage of toggle

{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Toggle with label</label>
        <label class="fd-switch__label">
            <span class="fd-switch">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__text--on">on</span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__text--off">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Compact Toggle with label</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--compact">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__text--on">on</span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__text--off">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Toggle without Labels on Sides
When there is no need to put any label on toggle sides, it's mandatory to add `fd-switch--no-text` modifier.

{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Toggle without label</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--no-text">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Compact Toggle without label</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--no-text fd-switch--compact">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3431">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=default %}

> **Note:** Use a checkbox instead: 
> -	If it is not clear if the control is showing a state or action. 
> -	If there are more than two options.

## Semantic Toggle
`fd-switch--semantic` modifier renders semnatic colors and icons inside the toggle switch
{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Semantic Toggle</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--semantic">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Semantic Compact Toggle</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--semantic fd-switch--compact">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3431">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Rtl

{% capture default %}
<div dir="rtl">
    <label class="fd-switch__label">
        <span class="fd-switch fd-switch--semantic" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                    <span class="fd-switch__text fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                    <span class="fd-switch__handle" role="presentation"></span>
                    <span class="fd-switch__text fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
                </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label">
        <span class="fd-switch fd-switch--semantic fd-switch--compact" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__text fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                   <span class="fd-switch__handle" role="presentation"></span>
                   <span class="fd-switch__text fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
               </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label">
        <span class="fd-switch fd-switch--no-text fd-switch--compact" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__handle" role="presentation"></span>
               </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label">
        <span class="fd-switch fd-switch--no-text" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__handle" role="presentation"></span>
               </div>
            </div>
        </span>
    </label>
</div>
{% endcapture %}
{% include display-component.html component=default %}
