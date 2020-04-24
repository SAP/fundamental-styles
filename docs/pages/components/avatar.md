---
title: Avatar
id: avatar
keywords: icon, avatar, identifier
sidebar: left-navigation-sidebar
toc: false
permalink: components/avatar.html
folder: components
---

Avatar is a way to visually present something using an icon or user initials.
{: .docs-intro}

There are multiple sizes:
- Extra Small (`--xs` - 2rem)
- Small (`--s`) - 3rem
- Medium (`--m`) - 4rem
- Large (`--l`) - 5rem
- Extra Large (`--xl`) - 7rem

<br>

## Icon
Include `role="presentation"` when the avatar is used for only illustrative purposes. For example, if the icon sits right next to a label, use role.

{% capture avatar-icon %}
<span class="fd-avatar fd-avatar--xs sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--s sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--l sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl sap-icon--washing-machine" role="presentation"></span>
{% endcapture %}
{% include display-component.html component=avatar-icon %}
<br>

## Initials
Include aria-label when there is no text equivalent for the avatar. This is not necessary if the avatar is used for illustrative purposes only. See Icon above.

{% capture avatar-initials %}
<span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=avatar-initials %}
<br>

## Circle
A circle style can be rendered using the `--circle` modifier.

{% capture avatar-circle %}
<span class="fd-avatar fd-avatar--xs fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle sap-icon--money-bills" role="presentation"></span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=avatar-circle %}
<br>


## Background image

A background image can be applied to any style using the `--thumbnail` modifier.

{% capture avatar-thumbnail %}
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>


{% endcapture %}
{% include display-component.html component=avatar-thumbnail %}
<br>



## Transparent

A transparent style can be rendered using the `--transparent` modifier.

{% capture avatar-transparent %}
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=avatar-transparent %}
<br>

## Placeholder Background

An Avatar with placeholder background can be rendered using the `--placeholder` modifier.

{% capture avatar-placeholder %}
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>

{% endcapture %}
{% include display-component.html component=avatar-placeholder %}
<br>

## TileIcon Background

An Avatar with TileIcon background can be rendered using the `--tile` modifier.

{% capture avatar-tile %}
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>

{% endcapture %}
{% include display-component.html component=avatar-tile %}
<br>

## Accent Colors
Use helpers classes to change the background colors, for example, `.fd-has-background-color-accent-9`.

{% capture avatar-accent-colors %}
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-1" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-2" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-3" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-4" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-5" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-6" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-7" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-8" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-9" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--money-bills fd-has-background-color-accent-10" role="presentation"></span>
{% endcapture %}
{% include display-component.html component=avatar-accent-colors %}

## Zoom Icon
A zoom icon button can be added with another element using the `.fd-avatar__zoom-icon` class.

{% capture avatar-zoom-icon %}
<span class="fd-avatar fd-avatar--xs fd-avatar--circle sap-icon--money-bills fd-has-background-color-accent-1" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle sap-icon--money-bills fd-has-background-color-accent-2" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle sap-icon--money-bills fd-has-background-color-accent-3" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle sap-icon--money-bills fd-has-background-color-accent-4" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle sap-icon--money-bills fd-has-background-color-accent-5" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>

<span class="fd-avatar fd-avatar--xs fd-has-background-color-accent-1" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--s fd-has-background-color-accent-2" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--m fd-has-background-color-accent-3" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--l fd-has-background-color-accent-4" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--xl fd-has-background-color-accent-5" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
{% endcapture %}
{% include display-component.html component=avatar-zoom-icon %}
<br>

## Borders

An optional border can be added with the `--border` modifier.

{% capture avatar-transparent %}
<span class="fd-avatar fd-avatar--xs fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
{% endcapture %}
{% include display-component.html component=avatar-transparent %}
<br>
