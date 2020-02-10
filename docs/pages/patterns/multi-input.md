---
title: Multi Input
id: multi-input
keywords: multi input
sidebar: left-navigation-sidebar
toc: false
permalink: patterns/multi-input.html
folder: patterns
summary:
---

The multi-input component is an opinionated composition of the `input group`, `popover`, `checkbox`,`list` and `token` 
components. The `popover` is shared between `combobox` and `select` component. In `Select` there are much more examples of 
modifications that can be provided also to combobox component. <br/><br/>
Multi Input pattern allows user to enter multiple values, which are displayed as a tokens. There is also provided editable
input field fo help user with finding correct value, or adding custom value.
{: .docs-intro}

## Default and Compact sizes

{% capture default %}
<label class="fd-form-label">
    Multi Input Cozy Mode
</label>
<br/>
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Kiwi
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token fd-token--readonly">
                        <span class="fd-token__text">
                            Lemon
                        </span>
                    </span>
                    <span class="fd-tokenizer__indicator">4 more</span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button--light sap-icon--value-help" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcX348a">
        <ul class="fd-list fd-list--multi-input">
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez611">
                    <span class="fd-list__title">
                        Apple
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez612">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez612">
                    <span class="fd-list__title">
                        Orange
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez614">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez614">
                    <span class="fd-list__title">
                        Banana
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez615">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez615">
                    <span class="fd-list__title">
                        Kiwi
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez617">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez617">
                    <span class="fd-list__title">
                        Lemon
                    </span>
                </label>
             </li>
             <li class="fd-list__footer">
                <a class="fd-link" href="#">Show All</a>
            </li>
        </ul>
    </div>
</div>
<br>
<br/>

<label class="fd-form-label">
    Multi Input Compact Mode
</label>
<br/>
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcX34a" aria-expanded="false" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control">
            <div class="fd-tokenizer fd-tokenizer--compact">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token fd-token--compact" role="button">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token fd-token--compact" role="button">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token fd-token--compact" role="button">
                        <span class="fd-token__text">
                            Kiwi
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token fd-token--compact" role="button">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token fd-token--compact fd-token--readonly">
                        <span class="fd-token__text">
                            Lemon
                        </span>
                    </span>
                    <span class="fd-tokenizer__indicator">4 more</span> 
                    <input class="fd-input fd-input-group__input fd-input--compact fd-tokenizer__input" />
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                <button class="fd-input-group__button fd-button--light fd-button--compact sap-icon--value-help" aria-controls="F4GcX34a" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcX34a">
         <ul class="fd-list fd-list--multi-input fd-list--compact">
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai1ez611">
                <label class="fd-checkbox__label fd-list__label" for="Ai1ez611">
                    <span class="fd-list__title">
                        Apple
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai2ez612">
                <label class="fd-checkbox__label fd-list__label" for="Ai2ez612">
                    <span class="fd-list__title">
                        Orange
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai3ez614">
                <label class="fd-checkbox__label fd-list__label" for="Ai3ez614">
                    <span class="fd-list__title">
                        Banana
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai8ez615">
                <label class="fd-checkbox__label fd-list__label" for="Ai8ez615">
                    <span class="fd-list__title">
                        Kiwi
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="AiHez617">
                <label class="fd-checkbox__label fd-list__label" for="AiHez617">
                    <span class="fd-list__title">
                        Lemon
                    </span>
                </label>
             </li>
             <li class="fd-list__footer">
                <a class="fd-link" href="#">Show All</a>
            </li>
         </ul>
     </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}


## Multi Input with Items Grouping
Item group headers can be used, to categorize certain types of elements.

{% capture multi-input-group %}
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4H8X34a" aria-expanded="false" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Kiwi
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token fd-token--readonly">
                        <span class="fd-token__text">
                            Lemon
                        </span>
                    </span>
                    <span class="fd-tokenizer__indicator">4 more</span> 
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button--light sap-icon--value-help" aria-controls="F4H8X34a" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4H8X34a">
         <ul class="fd-list fd-list--multi-input">
            <li class="fd-list__group-header">
                Fruits
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai1ez651">
                <label class="fd-checkbox__label fd-list__label" for="Ai1ez651">
                    <span class="fd-list__title">
                        Apple
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai2ez652">
                <label class="fd-checkbox__label fd-list__label" for="Ai2ez652">
                    <span class="fd-list__title">
                        Orange
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai3ez654">
                <label class="fd-checkbox__label fd-list__label" for="Ai3ez654">
                    <span class="fd-list__title">
                        Banana
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai8ez655">
                <label class="fd-checkbox__label fd-list__label" for="Ai8ez655">
                    <span class="fd-list__title">
                        Kiwi
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="AiHez657">
                <label class="fd-checkbox__label fd-list__label" for="AiHez657">
                    <span class="fd-list__title">
                        Lemon
                    </span>
                </label>
             </li>
            <li class="fd-list__group-header">
                Vegetables
            </li>
            <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai8ez689">
                <label class="fd-checkbox__label fd-list__label" for="Ai8ez689">
                    <span class="fd-list__title">
                        Onion
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai8ez685">
                <label class="fd-checkbox__label fd-list__label" for="Ai8ez685">
                    <span class="fd-list__title">
                        Tomato
                    </span>
                </label>
            </li>
            <li class="fd-list__footer">
                <a class="fd-link" href="#">Show All</a>
            </li>
         </ul>
     </div>
</div>
{% endcapture %}
{% include display-component.html component=multi-input-group %}


## Readonly Multi Input
To add readonly state, it is mandatory to add `readonly` attribute to `fd-nput-group` element
Readonly state can be enabled also by adding `.is-readonly` class, or `aria-readonly="true"` 

{% capture disabled %}
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcX3X8a" aria-expanded="false" aria-haspopup="false">
        <div class="fd-input-group fd-input-group--control" readonly aria-readonly="true">
            <div class="fd-tokenizer fd-tokenizer--readonly">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Bibendum
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Lorem
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Dolor
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Filter
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly">
                        <span class="fd-token__text">
                            Lorem
                        </span>
                    </span>
                    <span class="fd-tokenizer__indicator">
                        <div class="fd-popover">
                            <div class="fd-popover__control fd-input-group__control" aria-controls="F4GF5348a" aria-expanded="false" aria-haspopup="true">
                                <a href="#" class="fd-link">
                                    4 more
                                </a>
                            </div>
                            <div class="fd-popover__body" aria-hidden="true" id="F4GF5348a">
                                <nav class="fd-menu" id="">
                                    <ul class="fd-menu__list">
                                        <li><a href="#" class="fd-menu__item">Option 1</a></li>
                                        <li><a href="#" class="fd-menu__item">Option 2</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" readonly aria-readonly="true" />
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=disabled %}



## Disabled Multi Input
To add disabled state, it is mandatory to add `disabled` attribute to `fd-popover__control` and `fd-nput-group` element
Disabled state can be enabled also by adding `.is-disabled` class, or `aria-disabled="true"` 

{% capture readonly %}
<div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
        <div class="fd-input-group fd-input-group--control"  aria-disabled="true" disabled>
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Bibendum
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Lorem
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Dolor
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly" role="button">
                        <span class="fd-token__text">
                            Filter
                        </span>
                    </span>
                    <span class="fd-token fd-token--readonly">
                        <span class="fd-token__text">
                            Lorem
                        </span>
                    </span>
                    <span class="fd-tokenizer__indicator">
                        <div class="fd-popover">
                            <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX34Xa" aria-expanded="false" aria-haspopup="true">
                                <a href="#" class="fd-link">
                                    4 more
                                </a>
                            </div>
                            <div class="fd-popover__body" aria-hidden="true" id="F4GcX34Xa">
                                <nav class="fd-menu" id="">
                                    <ul class="fd-menu__list">
                                        <li><a href="#" class="fd-menu__item">Option 1</a></li>
                                        <li><a href="#" class="fd-menu__item">Option 2</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button tabindex="-1" class="fd-input-group__button fd-button--light sap-icon--value-help"></button>
            </span>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=readonly %}


## Semantic Multi Input
Whole list of states for MultiInput can be found on `form` and `select` documentation.
To add `semantic` mode into `multi-input`, it's mandatory to add one of `is-invalid` | `is-valid` | `is-warning` | `is-information` class into `fd-input-group`
To add message inside `body`, it's needed to put element with `fd-list__message` class.
Also the `fd-list--has-message` modifier should be added to `ul` element.

{% capture semantic-input %}
<div class="fd-popover">
    <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcKJH8a" aria-expanded="false" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control is-valid">
            <div class="fd-tokenizer">
                 <div class="fd-tokenizer__inner">
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Apple
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Orange
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Kiwi
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Banana
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-token fd-token--readonly">
                         <span class="fd-token__text">
                             Lemon
                         </span>
                     </span>
                     <span class="fd-tokenizer__indicator">4 more</span> 
                     <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                 </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button--light sap-icon--value-help" aria-controls="F4GcKJH8a" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcKJH8a">
        <ul class="fd-list fd-list--multi-input fd-list--has-message">
            <li class="fd-list__message fd-list__message--success">Success Message</li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="AGi4ez611">
                <label class="fd-checkbox__label fd-list__label" for="AGi4ez611">
                    <span class="fd-list__title">
                        Apple
                    </span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4Fez612">
                <label class="fd-checkbox__label fd-list__label" for="Ai4Fez612">
                    <span class="fd-list__title">Orange</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4eGz614">
                <label class="fd-checkbox__label fd-list__label" for="Ai4eGz614">
                    <span class="fd-list__title">Kiwi</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4egh614">
                <label class="fd-checkbox__label fd-list__label" for="Ai4egh614">
                    <span class="fd-list__title">Banana</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="jdFffsd3">
                <label class="fd-checkbox__label fd-list__label" for="jdFffsd3">
                    <span class="fd-list__title">Lemon</span>
                </label>
            </li>
             <li class="fd-list__footer">
                <a class="fd-link" href="#">Show All</a>
            </li>
        </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
<br>

{% endcapture %}
{% include display-component.html component=semantic-input %}
