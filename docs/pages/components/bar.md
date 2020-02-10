---
title: Bar
id: bar
keywords: bar, header, subheader, footer, floating-footer
sidebar: left-navigation-sidebar
toc: false
permalink: components/bar.html
folder: components
summary:
---

The Bar component is a container that holds titles, buttons and input controls. Its content is distributed in three areas - left, middle and right. <br>
The Bar has 2 modes - `Desktop` (default) and `Tablet/Mobile` (cosy).
{: .docs-intro}

<br>

## Bar - Desktop

{% capture bar-default-desktop %}

<div class="fd-bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>  
<div class="fd-bar" dir="rtl">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-right-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=bar-default-desktop %}

<br>

## Bar - Tablet and Mobile (Cosy)
For Tablet and Mobile (Cosy mode) apply the `fd-bar--cosy` class to the container element. 

{% capture bar-default-mobile %}

<div class="fd-bar fd-bar--cosy">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
    
{% endcapture %}

{% include display-component.html component=bar-default-mobile %}

<br>

## Bar As Header
For Header in Bar Design apply the `fd-bar--header` class to the container element.

{% capture bar-default-header %}
<div><b>Desktop</b></div>
<br>
<div class="fd-bar fd-bar--header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>Tablet and Mobile (Cosy)</b></div>
<br>
<div class="fd-bar fd-bar--header fd-bar--cosy">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br> 
<div class="fd-bar fd-bar--header" dir="rtl">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-right-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=bar-default-header %}

<br>

## Bar As SubHeader
SubHeader in Bar Design is achieved by adding the `fd-bar--subheader` class to the container element.

{% capture bar-default-subheader %}
<div><b>Desktop</b></div>
<br>
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact sap-icon--home"></button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>Tablet and Mobile (Cosy)</b></div>
<br>
<div class="fd-bar fd-bar--subheader fd-bar--cosy">
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-form-item">
                <div class="fd-button-group" role="group" aria-label="Group label">
                    <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                    <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                    <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
                </div>
            </div>
        </div>
    </div>
</div>
<br><br>
<div><b>Full width element</b></div>
<br>
<div class="fd-bar fd-bar--subheader fd-bar--cosy">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 ">
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>
<div class="fd-bar fd-bar--subheader" dir="rtl">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--compact fd-button--light sap-icon--navigation-right-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--compact fd-button--light sap-icon--home"></button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--compact fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=bar-default-subheader %}

<br>

## Header with SubHeader
If a Header is followed by a SubHeader, the Header container should have the  `fd-bar--header-with-subheader` modifier class which is removing the element's box-shadow.

{% capture bar-default-header-subheader %}
<div><b>Desktop</b></div>
<br>
<div class="fd-bar fd-bar--header-with-subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-button-group" role="group" aria-label="Group label">
                <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light sap-icon--grid"></button>
        </div>
    </div>
</div>
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 ">
        </div>
    </div>
</div>

{% endcapture %}

{% include display-component.html component=bar-default-header-subheader %}

<br>

## Bar As Footer

{% capture bar-default-footer %}
<div><b>Desktop</b></div>
<br>
<div class="fd-bar fd-bar--footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>Tablet and Mobile (Cosy)</b></div>
<br>
<div class="fd-bar fd-bar--footer fd-bar--cosy">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--emphasized">Save</button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>
<div class="fd-bar fd-bar--footer" dir="rtl">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
    
{% endcapture %}

{% include display-component.html component=bar-default-footer %}
<br>

## Bar As Floating Footer

{% capture bar-default-floating-footer %}
<div><b>Desktop</b></div>
<br>
<div class="fd-bar fd-bar--floating-footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>Tablet and Mobile (Cosy)</b></div>
<br>
<div class="fd-bar fd-bar--floating-footer fd-bar--cosy">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--emphasized">Save</button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>
<div class="fd-bar fd-bar--floating-footer" dir="rtl">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=bar-default-floating-footer %}

