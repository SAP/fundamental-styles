---
title: Time Picker
id: time-picker
keywords: time picker
sidebar: left-navigation-sidebar
toc: false
permalink: components/time-picker.html
folder: components
summary:
---

The Time Picker is an opinionated component composed of an `input-group`, `popover`, and `time` components to create a time selection interaction.

This component mostly relies on the CSS of other components and has very little CSS of its own.
{: .docs-intro}
<br>

## Basic Time Picker

A basic example of a time picker.

{% capture default-timepicker %}

<div class="fd-time-picker">
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after">
                <input type="time" class="fd-form-control" id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                    <button class="fd-button--light sap-icon--history fd-popover__control" aria-controls="rthHR811" aria-expanded="false" aria-haspopup="true"></button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHR811">
            <div class="fd-time">
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light sap-icon--navigation-up-arrow" aria-label="Increase hours" aria-controls="BW7dC141"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="hh" value="" id="BW7dC141" aria-label="Hours">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease hours" aria-controls="BW7dC141"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase minutes" aria-controls="VyQHq609"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="mm" value="" id="VyQHq609" aria-label="Minutes">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease minutes" aria-controls="VyQHq609"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase seconds" aria-controls="Tbwlb978"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="ss" value="" id="Tbwlb978" aria-label="Seconds">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease seconds" aria-controls="Tbwlb978"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase period" aria-controls="UxXMT681"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="am" value="" id="UxXMT681" aria-label="Period">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease period" aria-controls="UxXMT681"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<br>

<div class="fd-time-picker">
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after fd-input-group--compact">
                <input class="fd-form-control fd-form-control--compact" type="text" id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button ">
                    <button class="fd-button--light fd-button--compact sap-icon--history fd-popover__control" aria-controls="bJuyJ846" aria-expanded="false" aria-haspopup="true"></button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="bJuyJ846">
            <div class="fd-time">
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase hours" aria-controls="BW7dC141a"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="hh" value="" id="BW7dC141a" aria-label="Hours">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease hours" aria-controls="BW7dC141a"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase minutes" aria-controls="VyQHq609a"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="mm" value="" id="VyQHq609a" aria-label="Minutes">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease minutes" aria-controls="VyQHq609a"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase seconds" aria-controls="Tbwlb978a"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="ss" value="" id="Tbwlb978a" aria-label="Seconds">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease seconds" aria-controls="Tbwlb978a"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase period" aria-controls="UxXMT681a"></button>
                    </div>
                    <input class="fd-time__input fd-form-control" type="text" placeholder="am" value="" id="UxXMT681a" aria-label="Period">
                    <div class="fd-time__control">
                        <button class="fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease period" aria-controls="UxXMT681a"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-timepicker %}
