---
title: Time
id: time
keywords: time
sidebar: left-navigation-sidebar
toc: false
permalink: components/time.html
folder: components
summary:
---

The time component is used to select a time value.
{: .docs-intro}

Multiple instances can be used in the `time-picker` to choose hours, minutes, seconds and period of the day. It will be rare to see this component used alone.

> Looking for Time Picker? From a style perspective, a time-picker is simply a composition of our existing time, input group and popover, but contains no new styles of its own. Therefore, we consider it a pattern. [See the time picker pattern here]({{site.baseurl}}/patterns/time-picker).


## Time Items
These are classes used to describe slider items. 

<div style="width: 100%;">
    <table style="width: 100%;">
        <tr>
            <td><code style="white-space: nowrap;">.fd-time__item</code></td>
            <td>Class used to style default time slider item</td>
            <td><span class="fd-time__item">10</span></td>
        </tr>
        <tr>
            <td><code style="white-space: nowrap;">.fd-time__item--collapsed</code></td>
            <td>Class used to style collapsed time slider item</td>
            <td><span class="fd-time__item fd-time__item--collapsed">10</span></td>
        </tr>
        <tr>
            <td><code style="white-space: nowrap;">.fd-time__item--current</code></td>
            <td>Class used to style current time slider item</td>
            <td><span class="fd-time__item fd-time__item--current">10</span></td>
        </tr>
    </table>
</div>

<br>


## Default Cozy Mode
Default cozy mode implemented mostly to be used mobile devices. There should be at most 1 active column. 
In those examples it's hour or meridian. The rest should be marked as collapsed
{% capture default-time %}
<div class="docs-time-wrapper">
    <div class="fd-time">
        <div class="fd-time__col">
            <label class="fd-time__slider-label fd-form-label">Hrs</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
            <div class="fd-time__wrapper fd-time__wrapper--active">
                <ul class="fd-time__list">
                    <span class="fd-time__item">01</span>
                    <span class="fd-time__item">02</span>
                    <span class="fd-time__item">03</span>
                    <span class="fd-time__item">
                        <div class="fd-time__current-indicator"></div>
                        04
                    </span>
                    <span class="fd-time__item">05</span>
                    <span class="fd-time__item">06</span>
                    <span class="fd-time__item">07</span>
                    <span class="fd-time__item">08</span>
                    <span class="fd-time__item">09</span>
                    <span class="fd-time__item">10</span>
                </ul>
            </div>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label fd-form-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>
    
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
    </div>
    
    <div class="fd-time">
        <div class="fd-time__col">
            <label class="fd-time__slider-label fd-form-label">Hrs</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">04</span>
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
        <div class="fd-time__col fd-time__col--period">
            <label class="fd-time__slider-label fd-form-label">AM/PM</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper fd-time__wrapper--meridian">
                <span class="fd-time__item fd-time__item--hidden">AM</span>
                <span class="fd-time__item">
                    PM
                    <div class="fd-time__current-indicator"></div>
                </span>
                <span class="fd-time__item">AM</span>
            </div>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
        </div>
    </div>

</div>
{% endcapture %}

{% include display-component.html component=default-time %}



## Tablet Mode
{% capture tablet-time %}
<div class="docs-time-wrapper"> 
    <div class="fd-time fd-time--tablet">
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
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>
    
    <div class="fd-time fd-time--tablet">
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
    </div>
    
    <div class="fd-time fd-time--tablet">
        <div class="fd-time__col">
            <label class="fd-time__slider-label fd-form-label">Hrs</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">04</span>
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
            <label class="fd-time__slider-label fd-form-label">AM/PM</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--hidden">AM</span>
                <span class="fd-time__item fd-time__item--current">PM</span>
                <span class="fd-time__item">AM</span>
            </div>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=tablet-time %}

## Compact Mode

{% capture compact-time %}
<div class="docs-time-wrapper"> 
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
                <span class="fd-time__item fd-time__item--collapsed">20</span>
            </div>
        </div>
    </div>
    
    <div class="fd-time fd-time--compact">
        <div class="fd-time__col">
            <label class="fd-time__slider-label fd-form-label">Hrs</label>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase Hours"></button>
            <div class="fd-time__wrapper">
                <span class="fd-time__item">01</span>
                <span class="fd-time__item">02</span>
                <span class="fd-time__item">03</span>
                <span class="fd-time__item fd-time__item--current">04</span>
                <span class="fd-time__item">05</span>
                <span class="fd-time__item">06</span>
                <span class="fd-time__item">07</span>
            </div>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease Hours"></button>            
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
    </div>
    
    <div class="fd-time fd-time--compact">
        <div class="fd-time__col">
            <label class="fd-time__slider-label fd-form-label">Hrs</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--current">04</span>
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
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--hidden">AM</span>
                <span class="fd-time__item fd-time__item--current">PM</span>
                <span class="fd-time__item">AM</span>
            </div>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=compact-time %}
