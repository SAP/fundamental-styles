---
title: Token
id: token
keywords: tag, token
sidebar: left-navigation-sidebar
toc: false
permalink: components/token.html
folder: components
summary:
tags: [f3, a11y, theme]
---

Token are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.
{: .docs-intro}

<br>

## Default Token
{% capture default-token %}
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
{% endcapture %}
{% include display-component.html component=default-token %}

## Selected Token
`fd-token--selected` modifier different color of token
{% capture selected-token %}
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
{% endcapture %}
{% include display-component.html component=selected-token %}

## Readonly Token
`fd-token--readonly` modifier different color of token. Readonly token shouldn't contain close button
{% capture readonly-token %}
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
</span>
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
</span>
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
</span>
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
</span>
{% endcapture %}
{% include display-component.html component=readonly-token %}

## Compact Token
`fd-token--compact` modifier adds compact mode
{% capture compact-token %}
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
    <button class="fd-token__close" tabindex="-1"></button>
</span>
{% endcapture %}
{% include display-component.html component=compact-token %}


## Tokenizer - Cozy
Tokenizer is a container for tokens, often placed inside multi-input components. 
To focus the whole element, `.is-focus` should be added to the container.
The Cozy tokenizer is for small and medium sized screens. 
The user can review the tokens by swiping them to the left or right.

{% capture tokenizer %}
<div class="fd-tokenizer ">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" />
    </div>
</div>
<br/><br/>
<div class="fd-tokenizer is-focus">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" />
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tokenizer %}

## Tokenizer - Compact
The Compact tokenizer is for large screens.
The user can review tokens by pressing the right or left arrows on the keyboard.

{% capture compact-tokenizer %}
<div class="fd-tokenizer fd-tokenizer--compact">
    <div class="fd-tokenizer__inner">
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--readonly fd-token--compact">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-input--compact fd-tokenizer__input" />
    </div>
</div>
<br/><br/>
<div class="fd-tokenizer fd-tokenizer--compact is-focus">
    <div class="fd-tokenizer__inner">
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--readonly fd-token--compact">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-input--compact fd-tokenizer__input" />
    </div>
</div>
{% endcapture %}
{% include display-component.html component=compact-tokenizer %}

## Tokenizer - Scrollable
The Compact tokenizer is for large screens.
The user can review tokens by pressing the `tab` and `shift + tab` on the keyboard.

{% capture compact-tokenizer %}
<div class="fd-tokenizer fd-tokenizer--scrollable">
    <div class="fd-tokenizer__inner" id="tokenizer-scrollable">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 1
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 2
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 3
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 4
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 5
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 6
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 7
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 8
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 9
            </span>
            <button class="fd-token__close" tabindex="-1"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Long Token Option 10
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" />
    </div>
</div>
{% endcapture %}
{% include display-component.html component=compact-tokenizer %}
