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
<div class="fd-fieldset">
    <div class="fd-form-item">
        <label class="fd-form-label" for="y21YO391">Live:</label>
        <label>
            <span class="fd-toggle">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO391">
                <span class="fd-toggle__switch" role="presentation"></span>
            </span>
        </label>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Toggle with label on the side
When the value of the toggle requires translation, it is suggested to display the text value (ex. On/Off) outside and to the right of of the toggle to allow for longer translations.  (ex. French translation of “On” is “Allumez”)

{% capture default %}
<div class="fd-form-item">
    <label class="fd-form-label" for="y21YO3911">
        <span class="fd-toggle">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Allumez
    </label>
</div>

{% endcapture %}
{% include display-component.html component=default %}


To clarify the current state, display the text value to the right of the toggle (ex. On or Off). 

{% capture default %}
    <div class="fd-form-item">
        <label class="fd-form-label" for="y21YO3911">
            <span class="fd-toggle">
                <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
                <span class="fd-toggle__switch" role="presentation"></span>
            </span>
            Off
        </label>
    </div>
{% endcapture %}
{% include display-component.html component=default %}


> **Note:** Use a checkbox instead: 
> -	If it is not clear if the control is showing a state or action. 
> -	If there are more than two options.

## Symantic Toggle
`fd-toggle--semantic` modifier renders semnatic colors and icons inside the toggle switch

{% capture default %}
<label>
    <span class="fd-toggle fd-toggle--semantic">
        <input class="fd-toggle__input" type="checkbox" name="" value="" id="Enrat404">
        <span class="fd-toggle__switch" role="presentation">
            <span class="fd-toggle__semantic--off sap-icon--decline"></span>
            <span class="fd-toggle__semantic--on sap-icon--accept"></span>
        </span>
    </span>
</label>
{% endcapture %}
{% include display-component.html component=default %}


## Compact Mode
`fd-toggle--compact` modifier can be used to render the compact size of the toggle 
{% capture default %}
<label>
    <span class="fd-toggle fd-toggle--compact">
        <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO391">
        <span class="fd-toggle__switch" role="presentation"></span>
    </span>
</label>

<label>
    <span class="fd-toggle fd-toggle--compact fd-toggle--semantic">
        <input class="fd-toggle__input" type="checkbox" name="" value="" id="Enrat404">
        <span class="fd-toggle__switch" role="presentation">
            <span class="fd-toggle__semantic--off sap-icon--decline"></span>
            <span class="fd-toggle__semantic--on sap-icon--accept"></span>
        </span>
    </span>
</label>
{% endcapture %}
{% include display-component.html component=default %}


## Other Size Options

In addition to `default` and `--compact`, the toggle can be set to 3 sizes: `--xs`, `--s` and `--l`. When used with forms, it is recommended to use the small size so that form components will be consistent.

> Node: `--semantic` modifier is currently not supported by these optional sizes

{% capture default %}
<div class="fd-form-item">
    <label class="fd-form-label" for="ImBw4551a">
        <span class="fd-toggle fd-toggle--xs">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="ImBw4551a">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Small Toggle
    </label>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="ImBw4551b">
        <span class="fd-toggle fd-toggle--s">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="ImBw4551b" checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small Toggle
    </label>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="V2bRj442g">
        <span class="fd-toggle fd-toggle--l">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="V2bRj442g" checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>

{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Disabled state

The toggle can be set to the disable state and still indicate the state of the toggle. To do this, add the `disabled` parameter to the input element.

{% capture toggle-disabled %}
<div class="fd-form-item">
    <label class="fd-form-label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--compact">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="ImBw4551c" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Small Toggle
    </label>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--compact">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="ImBw4551c" disabled checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small Toggle
    </label>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="P3D2k380d">
        <span class="fd-toggle">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="P3D2k380d" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Default Toggle
    </label>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="V2bRj442f">
        <span class="fd-toggle fd-toggle--l">
            <input class="fd-toggle__input" type="checkbox" name="" value="" id="V2bRj442f" disabled checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=toggle-disabled %}
