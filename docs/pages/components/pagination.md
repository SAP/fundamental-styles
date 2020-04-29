---
title: Pagination
id: pagination
keywords: pagination
sidebar: left-navigation-sidebar
toc: false
permalink: components/pagination.html
folder: components
summary:
---

Pagination is commonly used for tables and tiles. It allows users to see how many pages of content exist, to navigate and highlights which page they are currently viewing.
{: .docs-intro}

<br>

## First Page
When the first page is active, the Back arrow should be disabled.

{% capture pagination %}
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="true"></a>
    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
    <a href="#" class="fd-pagination__link">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
{% endcapture %}

{% include display-component.html component=pagination %}

<br>

## Second Page

{% capture pagination-second %}
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
{% endcapture %}

{% include display-component.html component=pagination-second %}

<br>

## More than three Pages

{% capture pagination-more %}
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
{% endcapture %}

{% include display-component.html component=pagination-more %}

<br>

## In between more than three Pages

{% capture pagination-more-between %}
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">21</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">22</a>
    <a href="#" class="fd-pagination__link">23</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
{% endcapture %}

{% include display-component.html component=pagination-more-between %}

<br>

## Last Page
On the last page, the Next arrow should be disabled.

{% capture pagination-last %}
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">49</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="true"></a>
  </nav>
</div>
{% endcapture %}

{% include display-component.html component=pagination-last %}
