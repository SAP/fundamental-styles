---
title: Time Picker
id: time-picker
keywords: time picker
sidebar: left-navigation-sidebar
toc: false
permalink: patterns/time-picker.html
folder: patterns
summary:
---

The Time Picker is an opinionated component composed of an `input-group`, `popover`, and `time` components to create a time selection interaction.

This component mostly relies on the CSS of other components and has no CSS of its own.
{: .docs-intro}
<br>
## Cozy Mode
{% capture default-time %}

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25:10 PM" placeholder="hh:mm:ss am/pm">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rKLOR811" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rKLOR811">
        <div class="fd-time">
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Hrs</label>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item">01</span>
                    <span class="fd-time__item">02</span>
                    <span class="fd-time__item">03</span>
                    <span class="fd-time__item fd-time__item--current">04</span>
                    <span class="fd-time__item">05</span>
                    <span class="fd-time__item">06</span>
                    <span class="fd-time__item">07</span>
                </div>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
            </div>
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Min</label>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase minutes"></button>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">25</span>
                </div>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease minutes"></button>
            </div>
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Sec</label>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase seconds"></button>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">10</span>
                </div>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease seconds"></button>
            </div>
            <div class="fd-time__col fd-time__col--period">
                <label class="fd-time__slider-label fd-form-label">AM/PM</label>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow"></button>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--hidden">AM</span>
                    <span class="fd-time__item fd-time__item--current">PM</span>
                    <span class="fd-time__item">AM</span>
                </div>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow"></button>
            </div>
        </div>
       <div class="fd-popover__body-footer">
            <div class="fd-bar fd-bar--cosy fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">OK</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-time %}



## Tablet Mode
{% capture tablet-time %}

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25:10 PM" placeholder="hh:mm:ss am/pm">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rKLHJ5311" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rKLHJ5311">
        <div class="fd-time fd-time--tablet">
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Hrs</label>
                <div class="fd-time__wrapper">
                    <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
                    <span class="fd-time__item">01</span>
                    <span class="fd-time__item">02</span>
                    <span class="fd-time__item">03</span>
                    <span class="fd-time__item fd-time__item--current">04</span>
                    <span class="fd-time__item">05</span>
                    <span class="fd-time__item">06</span>
                    <span class="fd-time__item">07</span>
                    <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
                </div>
            </div>                    
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Min</label>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">25</span>
                </div>
            </div>
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Sec</label>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">10</span>
                </div>
            </div>
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label"></label>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">PM</span>
                </div>
            </div>
        </div>
       <div class="fd-popover__body-footer">
            <div class="fd-bar fd-bar--cosy fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">OK</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=tablet-time %}

## Compact Mode

{% capture compact-time %}

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25:10 PM" placeholder="hh:mm:ss am/pm">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rKGNR811" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rKGNR811">
        <div class="fd-time fd-time--compact">
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Hrs</label>
                <div class="fd-time__wrapper">
                    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
                    <span class="fd-time__item">01</span>
                    <span class="fd-time__item">02</span>
                    <span class="fd-time__item">03</span>
                    <span class="fd-time__item fd-time__item--current">04</span>
                    <span class="fd-time__item">05</span>
                    <span class="fd-time__item">06</span>
                    <span class="fd-time__item">07</span>
                    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
                </div>
            </div>                    
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Min</label>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">25</span>
                </div>
            </div>
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label">Sec</label>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">10</span>
                </div>
            </div>
            <div class="fd-time__col">
                <label class="fd-time__slider-label fd-form-label"></label>
                <div class="fd-time__wrapper">
                    <span class="fd-time__item fd-time__item--collapsed">PM</span>
                </div>
            </div>
        </div>
       <div class="fd-popover__body-footer">
            <div class="fd-bar fd-bar--cosy fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--compact fd-button--emphasized">OK</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--compact fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=compact-time %}
