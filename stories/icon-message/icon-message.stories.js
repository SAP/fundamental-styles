export default {
    title: 'Components/Icon Message',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development'],
        description: `
The icon-message component is usefull when using semantic icons or messages.
##Usage
**Use notifications if:**
    
* You want to show a semantic icon being error, success, warning, information, question.
* You want to show a title using a semantic color
            `,
        components: ['icon-message']
    }
};

export const success = () => `
<div>
<div class="fd-icon-message-success"></div>
<div class="fd-icon-message-success fd-icon-message-success--no-icon">Success</div>
</div>
`;
success.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the success use the `fd-icon-message-success` class. To remove the icon use the `--no-icon` modifier.'
    }
};

export const error = () => `
<div>
    <div class="fd-icon-message-error"></div>
    <div class="fd-icon-message-error fd-icon-message-error--no-icon">Error</div>
</div>
`;
error.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the error use the `fd-icon-message-error` class. To remove the icon use the `--no-icon` modifier.'
    }
};

export const warning = () => `
<div>
<div class="fd-icon-message-warning"></div>
<div class="fd-icon-message-warning fd-icon-message-warning--no-icon">Warning</div>
</div>
`;
warning.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the warning use the `fd-icon-message-warning` class. To remove the icon use the `--no-icon` modifier.'
    }
};

export const question = () => `
<div>
    <div class="fd-icon-message-question"></div>
    <div class="fd-icon-message-question fd-icon-message-question--no-icon">Question</div>
</div>
`;
question.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the question use the `fd-icon-message-question` class. To remove the icon use the `--no-icon` modifier.'
    }
};

export const information = () => `
<div>
    <div class="fd-icon-message-information"></div>
    <div class="fd-icon-message-information fd-icon-message-information--no-icon">Information</div>
</div>
`;
information.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the information use the `fd-icon-message-information` class. To remove the icon use the `--no-icon` modifier.'
    }
};
