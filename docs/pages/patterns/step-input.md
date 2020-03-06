---
title: Step Input
id: step-input
keywords: step input
sidebar: left-navigation-sidebar
toc: false
permalink: patterns/step-input.html
folder: patterns
summary:
---

The Step Input component is an opinionated composition of the InputGroup, Button and FormInput compponents.
It is typically used to enter numbers.The value can be increased or reduced with the provided controls.
{: .docs-intro}

{% capture default %}

<div class="fd-form-group">
    <label class="fd-form-label">Step Input</label>
    <div class="fd-form-item">
        <div class="fd-input-group--control fd-input-group">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button aria-label="Step down" class="fd-button fd-button--transparent fd-button--standard sap-icon--less fd-input-group__button" onclick="stepInputValue('step-1', 'down');" type="button"></button>
            </span>
            <input class="fd-input fd-input-group__input" id="step-1" type="text" value="0">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button aria-label="Step up" class="fd-button fd-button--transparent fd-button--standard sap-icon--add fd-input-group__button" onclick="stepInputValue('step-1', 'up');" type="button"></button>
            </span>
        </div>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=default %}
