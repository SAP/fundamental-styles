---
title: Token
id: token
keywords: tag, token
sidebar: left-navigation-sidebar
toc: false
permalink: components/token.html
folder: components
summary:
---

Token are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.
{: .docs-intro}

<br>

## Default Token
{% capture default-token %}
<span class="fd-token" role="button">
    Bibendum
    <button class="fd-token__close"></button>
</span>
<span class="fd-token" role="button">
    Lorem
    <button class="fd-token__close"></button>
</span>
<span class="fd-token" role="button">
    Dolor
    <button class="fd-token__close"></button>
</span>
<span class="fd-token" role="button">
    Filter
    <button class="fd-token__close"></button>
</span>
{% endcapture %}
{% include display-component.html component=default-token %}

## Selected Token
`fd-token--selected` modifier different color of token
{% capture selected-token %}
<span class="fd-token fd-token--selected" role="button">
    Bibendum
    <button class="fd-token__close"></button>
</span>
<span class="fd-token fd-token--selected" role="button">
    Lorem
    <button class="fd-token__close"></button>
</span>
<span class="fd-token fd-token--selected" role="button">
    Dolor
    <button class="fd-token__close"></button>
</span>
<span class="fd-token fd-token--selected" role="button">
    Filter
    <button class="fd-token__close"></button>
</span>
{% endcapture %}
{% include display-component.html component=selected-token %}

## Readonly Token
`fd-token--readonly` modifier different color of token. Readonly token shouldn't contain close button
{% capture selected-token %}
<span class="fd-token fd-token--readonly" role="button">
    Bibendum
</span>
<span class="fd-token fd-token--readonly" role="button">
    Lorem
</span>
<span class="fd-token fd-token--readonly" role="button">
    Dolor
</span>
<span class="fd-token fd-token--readonly" role="button">
    Filter
</span>
{% endcapture %}
{% include display-component.html component=selected-token %}

## Compact Token
`fd-token--compact` modifier adds compact mode
{% capture compact-token %}
<span class="fd-token fd-token--compact" role="button">
    Bibendum
    <button class="fd-token__close"></button>
</span>
<span class="fd-token fd-token--compact" role="button">
    Lorem
    <button class="fd-token__close"></button>
</span>
<span class="fd-token fd-token--compact" role="button">
    Dolor
    <button class="fd-token__close"></button>
</span>
<span class="fd-token fd-token--compact" role="button">
    Filter
    <button class="fd-token__close"></button>
</span>
{% endcapture %}
{% include display-component.html component=compact-token %}


## Tokenizer
Tokenizer is container for tokens, can be placed inside multi input components. 
To show focus on whole element, it's needed to add `.is-focus` into container.

{% capture tokenizer %}
<div class="fd-tokenizer">
    <span class="fd-token" role="button">
        Bibendum
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token" role="button">
        Lorem
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token" role="button">
        Dolor
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token" role="button">
        Filter
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--readonly">
        Lorem
    </span>
    <input class="fd-input fd-tokenizer__input" />
</div>
<br/><br/>
<div class="fd-tokenizer is-focus">
    <span class="fd-token" role="button">
        Bibendum
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token" role="button">
        Lorem
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token" role="button">
        Dolor
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token" role="button">
        Filter
        <button class="fd-token__close"></button>
    </span>
    <input class="fd-input fd-tokenizer__input" />
</div>
{% endcapture %}
{% include display-component.html component=tokenizer %}

## Compact Tokenizer
{% capture compact-tokenizer %}
<div class="fd-tokenizer fd-tokenizer--compact">
    <span class="fd-token fd-token--compact" role="button">
        Bibendum
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--compact" role="button">
        Lorem
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--compact" role="button">
        Dolor
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--compact" role="button">
        Filter
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--readonly fd-token--compact">
        Lorem
    </span>
    <input class="fd-input fd-input--compact fd-tokenizer__input" />
</div>
<br/><br/>
<div class="fd-tokenizer fd-tokenizer--compact is-focus">
    <span class="fd-token fd-token--compact" role="button">
        Bibendum
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--compact" role="button">
        Lorem
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--compact" role="button">
        Dolor
        <button class="fd-token__close"></button>
    </span>
    <span class="fd-token fd-token--compact" role="button">
        Filter
        <button class="fd-token__close"></button>
    </span>
    <input class="fd-input fd-input--compact fd-tokenizer__input" />
</div>
{% endcapture %}
{% include display-component.html component=compact-tokenizer %}
