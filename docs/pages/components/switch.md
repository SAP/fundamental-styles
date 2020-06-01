---
title: Switch
id: switch
keywords: toggle, switch
sidebar: left-navigation-sidebar
toc: false
permalink: components/switch.html
folder: components
tags: [f3, a11y, theme]
---

The Switch is meant to resemble a physical switch and allow a user to turn a setting “on” or “off”. It should be used to switch between two states/modes: active or inactive.
{: .docs-intro}

## Default Switch

{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Default (Cosy) Switch</label>
        <label class="fd-switch__label">
            <span class="fd-switch">
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
        <label class="fd-form-label">Compact Switch</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--compact">
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

## Switch with Text

{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">With Off Text</label>
        <label class="fd-switch__label">
            <span class="fd-switch__text">Off</span> 
            <span class="fd-switch">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21Y677251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">With On Text</label>
        <label class="fd-switch__label">
            <span class="fd-switch__text">On</span> 
            <span class="fd-switch">
                <input class="fd-switch__input" checked type="checkbox" name="" value="" id="y21653431">
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

## Semantic Switch
`fd-switch--semantic` modifier renders semnatic colors and icons inside the switch
{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Semantic Switch</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--semantic">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Semantic Compact Switch</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--semantic fd-switch--compact">
                <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3431">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
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
                    <span class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                    <span class="fd-switch__handle" role="presentation"></span>
                    <span class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
                </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label">
        <span class="fd-switch fd-switch--semantic fd-switch--compact" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></span>
                   <span class="fd-switch__handle" role="presentation"></span>
                   <span class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></span>
               </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label">
        <span class="fd-switch fd-switch--compact" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__handle" role="presentation"></span>
               </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label">
        <span class="fd-switch" >
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
