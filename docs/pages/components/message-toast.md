---
title: Message Toast
id: message-toast
keywords: message message-toast
sidebar: left-navigation-sidebar
toc: false
permalink: components/message-toast.html
folder: components
summary:
---

Message Toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds.
{: .docs-intro}

### Usage
Message Toast is used in the following cases:
- To display a short success message.
- To avoid interrupting the user while they are performing an action.
- To confirm a successful action.

### Responsiveness
- The behavior of the message toast is the same on all devices. The max-width of the element is 15rem, after which the text wraps.

### Position
- The message toast is always centered horizontally at the bottom of the screen.

### Behavior and Interaction
- The message toast fades in and out automatically. The timing and duration of the message toast is defined by the app.

<br>

## Message Toast

{% capture default-message-toast %}
<div class="fd-message-toast">Product added</div>
<br><br>
<div class="fd-message-toast">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
{% endcapture %}
{% include display-component.html component=default-message-toast %}
