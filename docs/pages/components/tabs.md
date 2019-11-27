---
title: Tabs
id: tabs
keywords: tab, tabs
sidebar: left-navigation-sidebar
toc: false
permalink: components/tabs.html
folder: components
summary:
---

Tabs are based on a folder metaphor and used to separate content into different sections. Tabs should be ordered to create a visual hierarchy based on priority.
{: .docs-intro}

<br>

## Tabs with `list` element

{% capture default-tab %}
<ul class="fd-tabs" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <p class="fd-tabs__count">1</p>
            Link
        </a>
    </li>
    <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
          <p class="fd-tabs__count">1</p>
            Selected
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            <p class="fd-tabs__count">1</p>
            Link
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="IR27Y941" aria-disabled="true" role="tab">
            <p class="fd-tabs__count">1</p>
            Disabled
        </a>
    </li>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="IR27Y941" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=default-tab %}

<br/>

## Tabs with `nav` element
{% capture modified-tab %}
<nav class="fd-tabs" role="tablist">
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="kf8369" href="#kf8369" role="tab">
            Link
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="9uQ282" aria-selected="true" href="#9uQ282" role="tab">
            Selected
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="DGl707" href="#DGl707" role="tab">
            Link
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="98q398" aria-disabled="true" role="tab">
            Disabled
        </a>
    </span>
</nav>
<div class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="98q398" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=modified-tab %}

{% capture default-tab %}
<ul class="fd-tabs fd-tabs--icon-only" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--icon-only">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">12</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--icon-only">
      <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">15</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item-">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--icon-only">
        <a class="fd-tabs__link" aria-controls="IR27Y941" aria-disabled="true" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">100</p>
            </span>
        </a>
    </li>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="IR27Y941" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=default-tab %}

{% capture default-tab %}
<ul class="fd-tabs fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--icon-only">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="IR27Y941" aria-disabled="true" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="IR27Y941" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=default-tab %}

<br/>


{% capture default-tab %}
<ul class="fd-tabs fd-tabs--process" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">53 of 122 smth</span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">53 of 122 smth</span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">53 of 122 smth</span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=default-tab %}


{% capture default-tab %}
<ul class="fd-tabs fd-tabs--process fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">53 of 122 smth</span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">53 of 122 smth</span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">53 of 122 smth</span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=default-tab %}


{% capture default-tab %}
<ul class="fd-tabs fd-tabs--filter" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link fd-tabs__link--header" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__counter-header">100</span>
            <span class="fd-tabs__label">products</span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=default-tab %}



{% capture default-tab %}
<ul class="fd-tabs fd-tabs--filter fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link fd-tabs__link--header" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__counter-header">100</span>
            <span class="fd-tabs__label">products</span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
            <span class="fd-tabs__label">Confirm Confirm</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=default-tab %}


{% capture default-tab %}
<ul class="fd-tabs fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--warning">
      <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--information">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="7ae0T209" href="#7ae0T209" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--neutral">
        <a class="fd-tabs__link" aria-controls="7a20T2d9" href="#7a20T2d9" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=default-tab %}



{% capture default-tab %}
<ul class="fd-tabs" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <p class="fd-tabs__count">1</p>
            Link
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--information">
      <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
          <p class="fd-tabs__count">1</p>
            Selected
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--warning">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            <p class="fd-tabs__count">1</p>
            Link
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="IR27Y941" href="#IR27Y941" role="tab">
            <p class="fd-tabs__count">1</p>
            Disabled
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--neutral">
        <a class="fd-tabs__link" aria-controls="IR27Y941" href="#IR27Y941" role="tab">
            <p class="fd-tabs__count">1</p>
            Disabled
        </a>
    </li>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="IR27Y941" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=default-tab %}

