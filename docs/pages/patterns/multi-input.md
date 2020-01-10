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
                        <div class="fd-tokenizer">
                            <div class="fd-tokenizer__inner">
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Bibendum
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Dolor
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Filter
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--readonly fd-token--compact">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                </span>
                                <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                            </div>
                        </div>
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
                        <input type="checkbox" class="fd-checkbox" id="a1">
                        <label class="fd-checkbox__label" for="a1">
                            Apple
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="b1">
                        <label class="fd-checkbox__label" for="b1">
                            Berry
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="c1">
                        <label class="fd-checkbox__label" for="c1">
                            Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<br>

<div class="fd-multi-input">
    <div class="fd-multi-input-field">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div aria-label="Image label" aria-controls="F4GcX34a" aria-expanded="false" aria-haspopup="true">
                    <div class="fd-input-group">
                        <div class="fd-tokenizer fd-tokenizer--compact">
                            <div class="fd-tokenizer__inner">
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Bibendum
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Dolor
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--compact" role="button">
                                    <span class="fd-token__text">
                                        Filter
                                    </span>
                                    <button class="fd-token__close"></button>
                                </span>
                                <span class="fd-token fd-token--readonly fd-token--compact">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                </span>
                                <input class="fd-input fd-input-group__input fd-input--compact fd-tokenizer__input" />
                            </div>
                        </div>
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
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="a2">
                        <label class="fd-checkbox__label" for="a2">
                            Apple
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="b2">
                        <label class="fd-checkbox__label" for="b2">
                            Berry
                        </label>
                    </li>
                    <li class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="c2">
                        <label class="fd-checkbox__label" for="c2">
                            Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
