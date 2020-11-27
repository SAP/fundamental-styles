export default {
    title: 'Components/Icon Message',
    parameters: {
        tags: ['f3', 'a11y', 'theme'],
        description: `
The icon-message component is usefull when using semantic icons or messages.
The default semantics are the information colors
##Usage
**Use notifications if:**
    
* You want to show a semantic icon being error, success, warning, information, question.
* You want to show a text using a semantic color
            `,
        components: ['icon-message']
    }
};

export const icons = () => `
<div>
    <i arial-label="information" class="fd-icon-message__icon"></i>
    <i arial-label="success" class="fd-icon-message__icon--success"></i>
    <i arial-label="error" class="fd-icon-message__icon--error"></i>
    <i arial-label="warning" class="fd-icon-message__icon--warning"></i>
    <i arial-label="question" class="fd-icon-message__icon--question"></i>
</div>
`;
icons.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display icons with semantic colors use the `fd-icon-message__icon`.For success color use the `--success` modifier. For error color use the `--error` modifier. For warning color use the `--warning` modifier. For question color use the `--question` modifier.'
    }
};

export const text = () => `
<div>
<span class="fd-icon-message">Information</span>
<span class="fd-icon-message fd-icon-message--success">Success</span>
<span class="fd-icon-message fd-icon-message--error">Error</span>
<span class="fd-icon-message fd-icon-message--warning">Warning</span>
<span class="fd-icon-message fd-icon-message--question">Question</span>
</div>
`;
text.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display text with semantic colors use the `fd-icon-message` class.For success color use the `--success` modifier. For error color use the `--error` modifier. For warning color use the `--warning` modifier. For question color use the `--question` modifier.'
    }
};
