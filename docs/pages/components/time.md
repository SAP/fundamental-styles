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


<br>


## Cozy Mode
{% capture default-time %}

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25" placeholder="hh:mm">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rthHR811" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHR811">
        <div class="fd-time">
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

<br/>
<br/>

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25:10" placeholder="hh:mm:ss">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rthHHK11" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHHK11">
        <div class="fd-time">
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

<br/>
<br/>

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




## Tablet Mode
{% capture tablet-time %}

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25" placeholder="hh:mm">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rthHR811" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHR811">
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

<br/>
<br/>

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25:10" placeholder="hh:mm:ss">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rthHHK11" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHHK11">
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

<br/>
<br/>

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
            <input type="text" class="fd-input fd-input-group__input" value="4:25" id="" placeholder="hh:mm">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rthHR875" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHR875">
        <div class="fd-time fd-time--compact">
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
                    <span class="fd-time__item fd-time__item--collapsed">20</span>
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

<br/>
<br/>

<div class="fd-popover fd-popover--no-arrow">
    <div class="fd-popover__control">
        <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" value="4:25:10" placeholder="hh:mm:ss">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--history fd-popover__control" aria-controls="rthHHK11" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHHK11">
        <div class="fd-time fd-time--compact">
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

<br/>
<br/>

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
        <div class="fd-time fd-time--compact">
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
