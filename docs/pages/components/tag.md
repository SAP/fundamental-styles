---
title: Tag
id: tag
keywords: tag, token
sidebar: left-navigation-sidebar
toc: false
permalink: components/tag.html
folder: components
summary:
---

Tags are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.
{: .docs-intro}

<br>

{% capture default-tag %}
<span class="fd-tag" role="button">
  Bibendum
  <span class="fd-tag__close"></span>
</span>

<span class="fd-tag" role="button">
  Lorem
  <span class="fd-tag__close"></span>
</span>

<span class="fd-tag" role="button">
  Dolor
  <span class="fd-tag__close"></span>
</span>

<span class="fd-tag" role="button">
  Filter
  <span class="fd-tag__close"></span>
</span>

<span class="fd-tag" role="button">
  Filter
  <span class="fd-tag__close"></span>
</span>
{% endcapture %}
{% include display-component.html component=default-tag %}

{% capture rtl-tag %}
<div dir="rtl">
  <span class="fd-tag" role="button">
    Bibendum
    <span class="fd-tag__close"></span>
  </span>

  <span class="fd-tag" role="button">
    Lorem
    <span class="fd-tag__close"></span>
  </span>

  <span class="fd-tag" role="button">
    Dolor
    <span class="fd-tag__close"></span>
  </span>

  <span class="fd-tag" role="button">
    Filter
    <span class="fd-tag__close"></span>
  </span>

  <span class="fd-tag" role="button">
    Filter
    <span class="fd-tag__close"></span>
  </span>
</div>
{% endcapture %}
{% include display-component.html component=rtl-tag %}
