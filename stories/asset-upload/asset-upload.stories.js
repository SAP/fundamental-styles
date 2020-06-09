import '../../dist/asset-upload.css';

export default {
    title: 'Components/Asset Upload',
    parameters: {
        alert: 'UNDER REVIEW. This component is under review. A new version will be implemented soon. Asset Upload provides a stylized component for file upload button.'
    }
};

export const iconMessage = () => `
<div class="fd-asset-upload">
    <input type="file" id="asset-upload" class="fd-asset-upload__input"/>
    <label for="asset-upload" class="fd-asset-upload__label">
        <span class="fd-asset-upload__text">Upload Link</span>
        <span class="fd-asset-upload__message">Maximum file size is 100MB</span>
    </label>
</div>
`;

iconMessage.storyName = 'Asset Upload with Icon and Message';
iconMessage.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const noMessage = () => `
<div class="fd-asset-upload">
    <input type="file" id="asset-upload" class="fd-asset-upload__input"/>
    <label for="asset-upload" class="fd-asset-upload__label">
        <span class="fd-asset-upload__text">Upload Link</span>
    </label>
</div>
`;

noMessage.storyName = 'Asset Upload with no message';
noMessage.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const noIcon = () => `
<div class="fd-asset-upload fd-asset-upload--no-icon">
    <input type="file" id="asset-upload" class="fd-asset-upload__input"/>
    <label for="asset-upload" class="fd-asset-upload__label">
        <span class="fd-asset-upload__text">Upload Link</span>
    </label>
</div>
`;

noIcon.storyName = 'Asset Upload with no icon';
noIcon.parameters = {
    docs: {
        iframeHeight: 200
    }
};
