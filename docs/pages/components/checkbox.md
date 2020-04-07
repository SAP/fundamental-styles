---
title: Checkbox
id: checkbox
keywords: checkbox, displayonly-checkbox
sidebar: left-navigation-sidebar
toc: false
permalink: components/checkbox.html
folder: components
---

Checkboxes allow users to select a subset of options.
{: .docs-intro}

## Introduction
Checboxes can be used inside a form to select from given options. It gives option to select particular option or not.
Selection of Multiple checkbox options are possible.

A checkbox can have 3 states. 
<ul>
    <li>checked</li>
    <li>unchecked</li>
    <li>Indeterminate</li>
</ul>

## Indeterminate state checkbox

{% capture indeterminate-checkbox %}
<p> Checkbox states</p>
    <input type="checkbox" class="fd-checkbox" id="B6CUi438" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="B6CUi438">Indeterminate Ckeckbox</label>

{% endcapture %}

{% include display-component.html component=indeterminate-checkbox %}

## Cozy Checkbox states

{% capture cozy-checkbox %}
<p> Checkbox states</p>
    <input type="checkbox" class="fd-checkbox" id="KnKOd417" name="checkbox" >
	<label class="fd-checkbox__label" for="KnKOd417">Default checkbox</label>

    <input type="checkbox" class="fd-checkbox" id="Vmvua940" name="checkbox" checked>
	<label class="fd-checkbox__label" for="Vmvua940">Checked checkbox</label>

    <input type="checkbox" class="fd-checkbox" id="B6CUi438" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="B6CUi438">Indeterminate Ckeckbox</label>

{% endcapture %}

{% include display-component.html component=cozy-checkbox %}

## Compact Checkbox states

{% capture compact-checkbox %}
    <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="KnKOd417" name="checkbox" >
	<label class="fd-checkbox__label" for="KnKOd417">Default checkbox</label>

    <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Vmvua940" name="checkbox" checked>
	<label class="fd-checkbox__label" for="Vmvua940">Checked checkbox</label>

    <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="B6CUi438" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="B6CUi438">Indeterminate Ckeckbox</label>
{% endcapture %}

{% include display-component.html component=compact-checkbox %}

## Disabled Checkbox 

{% capture disabled-checkbox %}
    <input type="checkbox" class="fd-checkbox" id="fz7Au268" name="checkbox" disabled>
	<label class="fd-checkbox__label" for="fz7Au268">Label</label>
  
    <input type="checkbox" class="fd-checkbox" id="XkY6u803" name="checkbox" disabled checked>
	<label class="fd-checkbox__label" for="XkY6u803">Label</label>
  
    <input type="checkbox" class="fd-checkbox" id="3ioxI590" name="checkbox" disabled indeterminate>
	<label class="fd-checkbox__label" for="3ioxI590">Label</label>
{% endcapture %}

{% include display-component.html component=disabled-checkbox %}

## Checkbox Intercation States

{% capture checkbox-interaction-states %}
    <input type="checkbox" class="fd-checkbox is-success" id="z3h5E577" name="checkbox" >
	<label class="fd-checkbox__label" for="z3h5E577">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-error" id="wzgmo573" name="checkbox" >
	<label class="fd-checkbox__label" for="wzgmo573">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-warning" id="xKsvq131" name="checkbox" >
	<label class="fd-checkbox__label" for="xKsvq131">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-information" id="oIwYW653" name="checkbox" >
	<label class="fd-checkbox__label" for="oIwYW653">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-success" id="BVVnS213" name="checkbox" checked>
	<label class="fd-checkbox__label" for="BVVnS213">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-error" id="o6jYz764" name="checkbox" checked>
	<label class="fd-checkbox__label" for="o6jYz764">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-warning" id="IcRL5321" name="checkbox" checked>
	<label class="fd-checkbox__label" for="IcRL5321">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-information" id="NrhH7399" name="checkbox" checked>
	<label class="fd-checkbox__label" for="NrhH7399">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-success" id="x1JgL105" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="x1JgL105">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-error" id="dOKph699" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="dOKph699">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-warning" id="Fyp8j109" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="Fyp8j109">Label</label>
  
    <input type="checkbox" class="fd-checkbox is-information" id="h4z5N521" name="checkbox" indeterminate>
	<label class="fd-checkbox__label" for="h4z5N521">Label</label>
{% endcapture %}

{% include display-component.html component=checkbox-interaction-states %}

## Checkbox RTL mode

{% capture checkbox-rtl %}
    <div dir="RTL">
        <input type="checkbox" class="fd-checkbox is-success" id="z3h5E577" name="checkbox" >
        <label class="fd-checkbox__label" for="z3h5E577">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-error" id="wzgmo573" name="checkbox" >
        <label class="fd-checkbox__label" for="wzgmo573">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-warning" id="xKsvq131" name="checkbox" >
        <label class="fd-checkbox__label" for="xKsvq131">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-information" id="oIwYW653" name="checkbox" >
        <label class="fd-checkbox__label" for="oIwYW653">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-success" id="BVVnS213" name="checkbox" checked>
        <label class="fd-checkbox__label" for="BVVnS213">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-error" id="o6jYz764" name="checkbox" checked>
        <label class="fd-checkbox__label" for="o6jYz764">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-warning" id="IcRL5321" name="checkbox" checked>
        <label class="fd-checkbox__label" for="IcRL5321">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-information" id="NrhH7399" name="checkbox" checked>
        <label class="fd-checkbox__label" for="NrhH7399">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-success" id="x1JgL105" name="checkbox" indeterminate>
        <label class="fd-checkbox__label" for="x1JgL105">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-error" id="dOKph699" name="checkbox" indeterminate>
        <label class="fd-checkbox__label" for="dOKph699">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-warning" id="Fyp8j109" name="checkbox" indeterminate>
        <label class="fd-checkbox__label" for="Fyp8j109">Label</label>
    
        <input type="checkbox" class="fd-checkbox is-information" id="h4z5N521" name="checkbox" indeterminate>
        <label class="fd-checkbox__label" for="h4z5N521">Label</label>
    </div>
{% endcapture %}

{% include display-component.html component=checkbox-rtl %}

## Display Only Checkbox

{% capture checkbox-rtl %}
    <input type="checkbox" class="fd-checkbox--display-only" id="1tn4O446" checked style="display:none">
	<label class="fd-checkbox--display-only__label" for="1tn4O446">Label</label>
  
    <input type="checkbox" class="fd-checkbox--display-only" id="StRHi735"  style="display:none">
	<label class="fd-checkbox--display-only__label" for="StRHi735">Label</label>
  
    <input type="checkbox" class="fd-checkbox--display-only" id="GWRmH826" indeterminate style="display:none">
	<label class="fd-checkbox--display-only__label" for="GWRmH826">Label</label>
{% endcapture %}

{% include display-component.html component=checkbox-rtl %}

## Display Only Checkbox RTL

{% capture checkbox-rtl %}
    <div dir="RTL">
        <input type="checkbox" class="fd-checkbox--display-only" id="1tn4O446" checked style="display:none">
        <label class="fd-checkbox--display-only__label" for="1tn4O446">Label</label>
    
        <input type="checkbox" class="fd-checkbox--display-only" id="StRHi735"  style="display:none">
        <label class="fd-checkbox--display-only__label" for="StRHi735">Label</label>
    
        <input type="checkbox" class="fd-checkbox--display-only" id="GWRmH826" indeterminate style="display:none">
        <label class="fd-checkbox--display-only__label" for="GWRmH826">Label</label>
    </div>
{% endcapture %}

{% include display-component.html component=checkbox-rtl %}