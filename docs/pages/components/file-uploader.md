---
title: File Uploader
id: file-uploader
keywords: file uploader,files
sidebar: left-navigation-sidebar
toc: false
permalink: components/file-uploader.html
folder: components
summary:
tags: [f3, a11y, theme]
---

The File uploader componet is an opinionated composistion of the input and button components.
Please see the `input` and `button` components documentation for the complete list of modifiers.
<br/><br/>
`File Uploader` allows user to select the files when click on the input or browse button.
Input element is readonly and populated with the selected file name.
{: .docs-intro}
<br/>

## Cozy Mode

{% capture default %}

<div class="fd-file-uploader">
    <input class="fd-input fd-file-uploader__input" onclick="browseFile('input1');" title="Select a file for uploading" aria-label="Select a file for uploading" type="text" id="browse_input1" placeholder=" Choose a file for upload to localserver " readonly>
    <button class="fd-button" onclick="browseFile('input1');"  id="fileuploader-button1" aria-label="Select a file for uploading" >Browse...</button>
  
</div>
  <input
    id="input1"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input1')"
  
/>
<br/>
<br/>
<br/>
<h3>RTL Support</h3>
<div class="fd-file-uploader" dir="rtl">
    <input class="fd-input fd-file-uploader__input" onclick="browseFile('input1-rtl');" title="Select a file for uploading" aria-label="Select a file for uploading" type="text" id="browse_input1-rtl" placeholder=" Choose a file for upload to localserver " readonly>
    <button class="fd-button" onclick="browseFile('input1-rtl');"  id="fileuploader-button1" aria-label="Select a file for uploading" >Browse...</button>
  
</div>
  <input
    id="input1-rtl"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input1-rtl')"
  
/>

{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Compact Mode

{% capture default %}

<div class="fd-file-uploader">
    <input class="fd-input fd-input--compact fd-file-uploader__input" onclick="browseFile('input2');" id="browse_input2" type="text" aria-label="Select a file for uploading" title="Select a file for uploading"  placeholder="Choose a file for upload to localserver" readonly>
    <button class="fd-button fd-button--compact "  onclick="browseFile('input2');" id="fileuplader-button2" aria-label="Select a file for uploading">Browse...</button>
  
</div>
  <input
    id="input2"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input2')"

/>
<br/>
<br/>
<br/>
<h3>RTL Support</h3>
<div class="fd-file-uploader" dir="rtl">
    <input class="fd-input fd-input--compact fd-file-uploader__input" onclick="browseFile('input2-rtl');" id="browse_input2-rtl" type="text" aria-label="Select a file for uploading" title="Select a file for uploading"  placeholder="Choose a file for upload to localserver" readonly>
    <button class="fd-button fd-button--compact "  onclick="browseFile('input2-rtl');" id="fileuplader-button2" aria-label="Select a file for uploading">Browse...</button>
  
</div>
  <input
    id="input2-rtl"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input2-rtl')"

/>

  
{% endcapture %}
{% include display-component.html component=default %}
