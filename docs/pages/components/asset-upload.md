---
title: Asset Upload
id: asset-upload
keywords: asset upload, file upload, asset, file, upload
sidebar: left-navigation-sidebar
toc: false
permalink: components/asset-upload.html
folder: components
summary:
---

Asset Upload provides a stylized component for file upload button.
{: .docs-intro}

## Asset Upload with Icon and Message

{% capture default %}
<div class="fd-asset-upload">
    <input type="file" id="asset-upload" class="fd-asset-upload__input"/>
    <label for="asset-upload" class="fd-asset-upload__label">
        <span class="fd-asset-upload__text">Upload Link</span>
        <span class="fd-asset-upload__message">Maximum file size is 100MB</span>
    </label>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Asset Upload with no message
Optional message can be excluded by removing the span tag containing `fd-asset-upload__message` class.

{% capture default %}
<div class="fd-asset-upload">
    <input type="file" id="asset-upload" class="fd-asset-upload__input"/>
    <label for="asset-upload" class="fd-asset-upload__label">
        <span class="fd-asset-upload__text">Upload Link</span>
    </label>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Asset Upload with no icon
Add the modifier class `fd-asset-upload--no-icon` to supress the upload icon.

{% capture default %}
<div class="fd-asset-upload fd-asset-upload--no-icon">
    <input type="file" id="asset-upload" class="fd-asset-upload__input"/>
    <label for="asset-upload" class="fd-asset-upload__label">
        <span class="fd-asset-upload__text">Upload Link</span>
    </label>
</div>
{% endcapture %}
{% include display-component.html component=default %}
