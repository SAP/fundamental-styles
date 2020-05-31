---
title: Message Strip
id: message-strip
keywords: message alert message-strip
sidebar: left-navigation-sidebar
toc: false
permalink: components/message-strip.html
folder: components
summary:
tags: [f3, a11y, theme]
---

Message Strip provide inline messages within the application that are color-coded to emphasize the level of urgency.
{: .docs-intro}

<br>

## Default Message Strip
The Message Strip provides information that is useful and relevant, but not critical. It can also provide feedback that an action has been executed. In most cases, the user should be able to dismiss the Message Strip so include the modifier class `fd-message-strip--dismissible` and include the close button.

{% capture default-message-strip %}
<div class="fd-message-strip fd-message-strip--dismissible" role="alert"  id="ZvPBg609" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et mattis erat vel aliquet in sem urna et sagittis diam in vehicula. <a href="#" class="fd-link">Learn More</a>
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ZvPBg609" aria-label="Close"></button>
</div>
<br>
{% endcapture %}

{% include display-component.html component=default-message-strip %}

## Information
Add the modifier class `fd-message-strip--information` for Information Message Strip.

{% capture information-message-strip %}
<div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="alert"  id="JwPcf464" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et. <a href="#" class="fd-link">Learn More</a>
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="JwPcf464" aria-label="Close"></button>
</div>
<br>

{% endcapture %}

{% include display-component.html component=information-message-strip %}

## Success
Add the modifier class `fd-message-strip--success` for Success Message Strip.

{% capture success-message-strip %}
<div class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible" role="alert" id="ulr5z216">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ulr5z216" aria-label="Close"></button>
</div>
{% endcapture %}

{% include display-component.html component=success-message-strip %}

## Warning
The Message Strip warns of potential issues, but the user can still continue. The user will need to dismiss the Message Strip.

Add the modifier class `fd-message-strip--warning` for Warning Message Strip.

{% capture warning-message-strip %}
<div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert" id="fwYq4606">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="fwYq4606" aria-label="Close"></button>
</div>
{% endcapture %}

{% include display-component.html component=warning-message-strip %}

## Error
This Message Strip is triggered after the user entered data incorrectly or a system error has occurred. It should interrupt the user. A final action such as Submit cannot be carried out until the user has rectified the error. The user will need to dismiss the Message Strip.

Add the modifier class `fd-message-strip--error` for Error Message Strip.

{% capture error-message-strip %}
<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close"></button>
</div>
{% endcapture %}

{% include display-component.html component=error-message-strip %}

## No Icons

Add the modifier class `fd-message-strip--no-icon` to render Message Strip without any icon

{% capture no-icon %}
<div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close"></button>
</div>
<br />
<div class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close"></button>
</div>
<br />
<div class="fd-message-strip fd-message-strip--warning fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close"></button>
</div>
<br />
<div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close"></button>
</div>
{% endcapture %}

{% include display-component.html component=no-icon class='no-icon' %}



## Right to left support
If right to left text direction is provided, the dismiss button moves to left side.

{% capture default-message-strip %}
<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert" id="BQ6WP516" dir="rtl">
  <p class="fd-message-strip__text">
   حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.
   </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="BQ6WP516" aria-label="Close"></button>
</div>
{% endcapture %}

{% include display-component.html component=default-message-strip %}
