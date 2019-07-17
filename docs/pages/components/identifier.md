---
title: Identifier
id: identifier
keywords: icon, identifier
sidebar: left-navigation-sidebar
toc: false
permalink: components/identifier.html
folder: components
---

Identifier is a way to visually present something using an icon or user initials.
{: .docs-intro}

There are multiple sizes:
- Default matches the base font size (14px)
- Extra Extra Small (`--xxs` - 20px)
- Extra Small (`--xs` - 28px)
- Small (`--s`) - 32px
- Medium (`--m`) - 48px
- Large (`--l`) - 64px
- Extra Large (`--xl`) - 80px
- Extra Extra Large (`--xxl`) - 112px

<br>

## Icon
Include `role="presentation"` when the identifier is used for only illustrative purposes. For example, if the icon sits right next to a label, use role.

{% capture identifier-icon %}
<span class="fd-identifier fd-identifier--xxs sap-icon--washing-machine" role="presentation"></span>
<span class="fd-identifier fd-identifier--xs sap-icon--washing-machine" role="presentation"></span>
<span class="fd-identifier fd-identifier--s sap-icon--washing-machine" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--washing-machine" role="presentation"></span>
<span class="fd-identifier fd-identifier--l sap-icon--washing-machine" role="presentation"></span>
<span class="fd-identifier fd-identifier--xl sap-icon--washing-machine" role="presentation"></span>
<span class="fd-identifier fd-identifier--xxl sap-icon--washing-machine" role="presentation"></span>
{% endcapture %}
{% include display-component.html component=identifier-icon %}
<br>

## Initials
Include aria-label when there is no text equivalent for the identifier. This is not necessary if the identifier is used for illustrative purposes only. See Icon above.

{% capture identifier-initials %}
<span class="fd-identifier fd-identifier--xxs" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xs" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--s" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--m" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--l" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xl" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xxl" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=identifier-initials %}
<br>

## Circle
A circle style can be rendered using the `--circle` modifier.

{% capture identifier-circle %}
<span class="fd-identifier fd-identifier--xxs fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--xs fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--s fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--m fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--xl fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--xxl fd-identifier--circle sap-icon--money-bills" role="presentation"></span>

<span class="fd-identifier fd-identifier--xxs fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xs fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--s fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--m fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--l fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xl fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xxl fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=identifier-circle %}
<br>


## Background image

A background image can be applied to any style using the `--thumbnail` modifier.

{% capture identifier-thumbnail %}
<span class="fd-identifier fd-identifier--xxs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class="fd-identifier fd-identifier--xs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class="fd-identifier fd-identifier--s fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class="fd-identifier fd-identifier--m fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class="fd-identifier fd-identifier--l fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class="fd-identifier fd-identifier--xl fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class="fd-identifier fd-identifier--xxl fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>


{% endcapture %}
{% include display-component.html component=identifier-thumbnail %}
<br>



## Transparent

A transparent style can be rendered using the `--transparent` modifier.

{% capture identifier-transparent %}
<span class="fd-identifier fd-identifier--xxs fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--xs fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--s fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--m fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--l fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--xl fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-identifier fd-identifier--xxl fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>

<span class="fd-identifier fd-identifier--xxs fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xs fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--s fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--m fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--l fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xl fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-identifier fd-identifier--xxl fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=identifier-transparent %}
<br>

## Accent Colors
Use helpers classes to change the background colors, for example, `.fd-has-background-color-accent-9`.

{% capture identifier-accent-colors %}
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-1" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-2" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-3" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-4" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-5" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-6" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-7" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-8" role="presentation"></span>
<span class="fd-identifier fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-9" role="presentation"></span>
{% endcapture %}
{% include display-component.html component=identifier-accent-colors %}
