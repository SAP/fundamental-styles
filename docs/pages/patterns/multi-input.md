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


## Default and Compact sizes

{% capture default %}
<div class="fd-multi-input">
    <div class="fd-multi-input-field">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div aria-label="Image label" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true">
                    <div class="fd-input-group">
                        <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                            <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348a">
                <nav class="fd-menu">
                <ul class="fd-menu__list">
                    <li class="fd-form-item">
                        <label class="fd-form-label fd-form-label--checkbox" for="a1">
                            <input type="checkbox" class="fd-checkbox" id="a1">Apple
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <label class="fd-form-label fd-form-label--checkbox" for="b1">
                            <input type="checkbox" class="fd-checkbox" id="b1">Berry
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <label class="fd-form-label fd-form-label--checkbox" for="c1">
                            <input type="checkbox" class="fd-checkbox" id="c1">Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="fd-multi-input-tags">
        <span class="fd-token" role="button">Apple</span>
        <span class="fd-token" role="button">Berry</span>
        <span class="fd-token" role="button">Banana</span>
    </div>
</div>

<br>

<div class="fd-multi-input">
    <div class="fd-multi-input-field">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div aria-label="Image label" aria-controls="F4GcX34a" aria-expanded="false" aria-haspopup="true">
                    <div class="fd-input-group">
                        <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button class="fd-input-group__button fd-button--light fd-button--compact sap-icon--navigation-down-arrow"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34a">
                <nav class="fd-menu">
                <ul class="fd-menu__list">
                    <li class="fd-form-item">
                        <label class="fd-form-label fd-form-label--checkbox" for="a2">
                            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="a2">Apple
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <label class="fd-form-label fd-form-label--checkbox" for="b2">
                            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="b2">Berry
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <label class="fd-form-label fd-form-label--checkbox" for="c2">
                            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="c2">Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="fd-multi-input-tags">
        <span class="fd-token" role="button">Apple</span>
        <span class="fd-token" role="button">Berry</span>
        <span class="fd-token" role="button">Banana</span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
