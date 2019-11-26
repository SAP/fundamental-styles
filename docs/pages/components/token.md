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
    <input class="fd-input fd-tokenizer__input" />
</div>
{% endcapture %}

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
    <input class="fd-input fd-input--compact fd-tokenizer__input" />
</div>
{% endcapture %}

{% include display-component.html component=default-token %}

{% include display-component.html component=selected-token %}

{% include display-component.html component=compact-token %}

{% include display-component.html component=tokenizer %}

{% include display-component.html component=compact-tokenizer %}
