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


## Toggle with Label on top
To clarify the meaning of the toggle, use a label above it (ex. Live).

{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Toggle with label</label>
        <label class="fd-form-label fd-form-label--toggle">
            <span class="fd-toggle">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
                <div class="fd-toggle__wrapper">
                    <div class="fd-toggle__inner">
                        <span class="fd-toggle__label">on</span>
                        <span class="fd-toggle__switch" role="presentation"></span>
                        <span class="fd-toggle__label">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Compact Toggle with label</label>
        <label class="fd-form-label fd-form-label--toggle">
            <span class="fd-toggle fd-toggle--compact">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
                <div class="fd-toggle__wrapper">
                    <div class="fd-toggle__inner">
                        <span class="fd-toggle__label">on</span>
                        <span class="fd-toggle__switch" role="presentation"></span>
                        <span class="fd-toggle__label">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Toggle with label on the side
When the value of the toggle requires translation, it is suggested to display the text value (ex. On/Off) outside and to the right of of the toggle to allow for longer translations.  (ex. French translation of “On” is “Allumez”)

{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Toggle without label</label>
        <label class="fd-form-label fd-form-label--toggle">
            <span class="fd-toggle fd-toggle--no-label">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3251">
                <div class="fd-toggle__wrapper">
                    <div class="fd-toggle__inner">
                        <span class="fd-toggle__switch" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Compact Toggle without label</label>
        <label class="fd-form-label fd-form-label--toggle">
            <span class="fd-toggle fd-toggle--no-label fd-toggle--compact">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3431">
                <div class="fd-toggle__wrapper">
                    <div class="fd-toggle__inner">
                        <span class="fd-toggle__switch" role="presentation"></span>
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
`fd-toggle--semantic` modifier renders semnatic colors and icons inside the toggle switch
{% capture default %}
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label">Semantic Toggle</label>
        <label class="fd-form-label fd-form-label--toggle">
            <span class="fd-toggle fd-toggle--semantic">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3251">
                <div class="fd-toggle__wrapper">
                    <div class="fd-toggle__inner">
                        <span class="fd-toggle__label fd-toggle__icon-on sap-icon--accept"></span>
                        <span class="fd-toggle__switch" role="presentation"></span>
                        <span class="fd-toggle__label fd-toggle__icon-off sap-icon--decline"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label">Semantic Compact Toggle</label>
        <label class="fd-form-label fd-form-label--toggle">
            <span class="fd-toggle fd-toggle--semantic fd-toggle--compact">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3431">
                <div class="fd-toggle__wrapper">
                    <div class="fd-toggle__inner">
                        <span class="fd-toggle__label fd-toggle__icon-on sap-icon--accept"></span>
                        <span class="fd-toggle__switch" role="presentation"></span>
                        <span class="fd-toggle__label fd-toggle__icon-off sap-icon--decline"></span>
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
    <label class="fd-form-label fd-form-label--toggle" >
        <span class="fd-toggle fd-toggle--semantic" >
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-toggle__wrapper">
                <div class="fd-toggle__inner">
                    <span class="fd-toggle__label fd-toggle__icon-on sap-icon--accept"></span>
                    <span class="fd-toggle__switch" role="presentation"></span>
                    <span class="fd-toggle__label fd-toggle__icon-off sap-icon--decline"></span>
                </div>
            </div>
        </span>
    </label>
    <label class="fd-form-label fd-form-label--toggle">
        <span class="fd-toggle fd-toggle--semantic fd-toggle--compact" >
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
            <div class="fd-toggle__wrapper">
                <div class="fd-toggle__inner">
                    <span class="fd-toggle__label fd-toggle__icon-on sap-icon--accept"></span>
                    <span class="fd-toggle__switch" role="presentation"></span>
                    <span class="fd-toggle__label fd-toggle__icon-off sap-icon--decline"></span>
                </div>
            </div>
        </span>
    </label>
</div>
{% endcapture %}
{% include display-component.html component=default %}
