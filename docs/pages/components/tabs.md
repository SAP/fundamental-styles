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

## Tabs in standard mode

{% capture default-tab %}
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            Link
        </a>
    </li>
    <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
            Selected
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            Link
        </a>
    </li>
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
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
{% endcapture %}
{% include display-component.html component=default-tab %}

<br/>

## Tabs with Counters

{% capture counter-tab %}
<ul class="fd-tabs fd-tabs--s fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item">
        <p class="fd-tabs__count">13</p>
        <a class="fd-tabs__link" aria-controls="d9vOir" href="#d9vOir" role="tab">
            Link
        </a>
    </li>
    <li class="fd-tabs__item">
      <p class="fd-tabs__count">1</p>
      <a class="fd-tabs__link" aria-controls="bSj6ft" aria-selected="true" href="#bSj6ft" role="tab">
            Selected
        </a>
    </li>
    <li class="fd-tabs__item">
        <p class="fd-tabs__count">97</p>
        <a class="fd-tabs__link" aria-controls="VrHfHi" href="#VrHfHi" role="tab">
            Link
        </a>
    </li>
    <button class="fd-button fd-button--light fd-button--compact fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="d9vOir" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="bSj6ft" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="VrHfHi" role="tabpanel">
    Nullam ut
</div>
{% endcapture %}
{% include display-component.html component=counter-tab %}

<br/>

## Standard Tabs with `nav` element
{% capture nav-tab %}
<nav class="fd-tabs fd-tabs--l" role="tablist">
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
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
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
{% endcapture %}
{% include display-component.html component=nav-tab %}

<br/>

## Icon Only Cozy Mode
{% capture icon-only-tab %}
<ul class="fd-tabs fd-tabs--l fd-tabs--icon-only" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--icon-only">
        <a class="fd-tabs__link" aria-controls="pliA92" href="#pliA92" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">12</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--icon-only">
      <a class="fd-tabs__link" aria-controls="ZAN8Hd" aria-selected="true" href="#ZAN8Hd" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">15</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item-">
        <a class="fd-tabs__link" aria-controls="QrQ5Cl" href="#QrQ5Cl" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="pliA92" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="ZAN8Hd" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="QrQ5Cl" role="tabpanel">
    Nullam ut
</div>
{% endcapture %}
{% include display-component.html component=icon-only-tab %}

## Icon Only Compact Mode
{% capture icon-only-compact-tab %}
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--icon-only">
        <a class="fd-tabs__link" aria-controls="0bT4aB" href="#0bT4aB" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">5</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="kzRyN3" aria-selected="true" href="#kzRyN3" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">78</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="f2epu6" href="#f2epu6" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">43</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--light fd-button--compact fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="0bT4aB" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="kzRyN3" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="f2epu6" role="tabpanel">
    Nullam ut
</div>
{% endcapture %}
{% include display-component.html component=icon-only-compact-tab %}

<br/>

## Cozy Process Mode
{% capture process-tab %}
<ul class="fd-tabs fd-tabs--l fd-tabs--process" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="NoQLy6" href="#NoQLy6" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">58 of 122 items</span>
            <span class="fd-tabs__label">Description</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="h4yBDR" href="#h4yBDR" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">22 of 122 items</span>
            <span class="fd-tabs__label">Description</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="nd1EMQ" href="#nd1EMQ" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">42 of 122 items</span>
            <span class="fd-tabs__label">Description</span>
        </div>
    </li>
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="NoQLy6" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="h4yBDR" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="nd1EMQ" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=process-tab %}

<br>

## Compact Process Mode
{% capture compact-process-tab %}
<ul class="fd-tabs fd-tabs--s fd-tabs--process fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="LHsxsZ" href="#LHsxsZ" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">58 of 122 items</span>
            <span class="fd-tabs__label">Description</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="ZQvAjG" href="#ZQvAjG" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">42 of 122 items</span>
            <span class="fd-tabs__label">Description</span>
        </div>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="wdqPV9" href="#wdqPV9" role="tab">
            <span class="fd-tabs__icon sap-icon--cart"></span>
        </a>
        <div class="fd-tabs__process">
            <span class="fd-tabs__label">22 of 122 items</span>
            <span class="fd-tabs__label">Description</span>
        </div>
    </li>
    <button class="fd-button fd-button--light fd-button--compact fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="LHsxsZ" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="ZQvAjG" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="wdqPV9" role="tabpanel">
    Nullam ut
</div>
{% endcapture %}
{% include display-component.html component=compact-process-tab %}

<br> 

## Filter Cozy Mode
{% capture filter-tab %}
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--header">
        <a class="fd-tabs__link" aria-controls="5ZkDVE" href="#5ZkDVE" role="tab">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">100</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="znvnwr" href="#znvnwr" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="oyYpL7" href="#oyYpL7" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="gRpu9H" href="#gRpu9H" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
</div>
{% endcapture %}
{% include display-component.html component=filter-tab %}

<br>

## Filter Compact Tabs
{% capture filter-compact-tab %}
<ul class="fd-tabs fd-tabs--s fd-tabs--filter fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--header">
        <a class="fd-tabs__link" aria-controls="YETAv8" href="#YETAv8" role="tab">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="eu3WeD" href="#eu3WeD" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">3</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="VqJcYO" href="#VqJcYO" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">40</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="ceoDu7" href="#ceoDu7" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">107</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <button class="fd-button fd-button--light fd-button--compact fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="YETAv8" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="eu3WeD" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="VqJcYO" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="ceoDu7" role="tabpanel">
    Occaecat cupidatat
</div>
{% endcapture %}
{% include display-component.html component=filter-compact-tab %}


{% capture semantic-tab %}
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="XTsSDD" href="#XTsSDD" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">54</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--warning">
      <a class="fd-tabs__link" aria-controls="DomvG6" aria-selected="true" href="#DomvG6" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">71</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--information">
        <a class="fd-tabs__link" aria-controls="DqIStt" href="#DqIStt" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">23</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="bRCSzS" href="#bRCSzS" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">4</p>
            </span>
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--neutral">
        <a class="fd-tabs__link" aria-controls="xMN6I9" href="#xMN6I9" role="tab">
            <span class="fd-tabs__icon sap-icon--cart">
                <p class="fd-tabs__count">100</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="XTsSDD" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="DomvG6" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DqIStt" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="bRCSzS" role="tabpanel">
    Quaerat voluptatem
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="xMN6I9" role="tabpanel">
    Occaecat cupidatat
</div>
{% endcapture %}
{% include display-component.html component=semantic-tab %}



{% capture semantic-inline-tab %}
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="5abyKZ" href="#5abyKZ" role="tab">
            <p class="fd-tabs__count">15</p>
            Error
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--information">
      <a class="fd-tabs__link" aria-controls="wupC7s" aria-selected="true" href="#wupC7s" role="tab">
          <p class="fd-tabs__count">9</p>
            Information
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--warning">
        <a class="fd-tabs__link" aria-controls="XlKpQM" href="#XlKpQM" role="tab">
            <p class="fd-tabs__count">31</p>
            Warning
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="3dUJAI" href="#3dUJAI" role="tab">
            <p class="fd-tabs__count">65</p>
            Success
        </a>
    </li>
    <li class="fd-tabs__item fd-tabs__item--neutral">
        <a class="fd-tabs__link" aria-controls="TWlAup" href="#TWlAup" role="tab">
            <p class="fd-tabs__count">159</p>
            Neutral
        </a>
    </li>
    <button class="fd-button fd-button--light fd-tabs__overflow"></button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5abyKZ" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="wupC7s" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="XlKpQM" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="3dUJAI" role="tabpanel">
    Tincidunt nunc
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="TWlAup" role="tabpanel">
    Occaecat cupidatat
</div>
{% endcapture %}
{% include display-component.html component=semantic-inline-tab %}

