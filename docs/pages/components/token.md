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

{% capture default-alert %}
<span class="fd-token" role="button">Bibendum</span>
<span class="fd-token" role="button">Lorem</span>
<span class="fd-token" role="button">Dolor</span>
<span class="fd-token" role="button">Filter</span>
{% endcapture %}

{% capture selected-alert %}
<span class="fd-token fd-token--selected" role="button">Bibendum</span>
<span class="fd-token fd-token--selected" role="button">Lorem</span>
<span class="fd-token fd-token--selected" role="button">Dolor</span>
<span class="fd-token fd-token--selected" role="button">Filter</span>
{% endcapture %}

{% capture compact-alert %}
<span class="fd-token fd-token--compact" role="button">Bibendum</span>
<span class="fd-token fd-token--compact" role="button">Lorem</span>
<span class="fd-token fd-token--compact" role="button">Dolor</span>
<span class="fd-token fd-token--compact" role="button">Filter</span>
{% endcapture %}

{% capture tokenizer %}
<div class="tokenizer">
    <span class="fd-token fd-token--compact" role="button">Bibendum</span>
    <span class="fd-token fd-token--compact" role="button">Lorem</span>
    <input class="fd-input" />
</div>
{% endcapture %}

{% include display-component.html component=default-alert %}

{% include display-component.html component=selected-alert %}

{% include display-component.html component=compact-alert %}

{% include display-component.html component=tokenizer %}
