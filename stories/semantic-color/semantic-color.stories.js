export default {
    title: 'Components/Semantic Color',
    parameters: {
        tags: ['f3', 'a11y', 'theme'],
        description: `
The semantic-color component is usefull when using semantic icons or messages.
The default semantics are the information colors
##Usage
**Use notifications if:**
    
* You want to show a semantic icon being error, success, warning, information, question.
* You want to show a title using a semantic color
            `,
        components: ['semantic-color']
    }
};

export const information = () => `
<div>
    <i arial-label="information" class="fd-semantic-color__icon"></i>
    <br>
    <span class="fd-semantic-color">Information</div>
</div>
`;
information.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display information semantics use the `fd-semantic-color` class. To use the icon use the `__icon` element.'
    }
};

export const success = () => `
<div>
<i arial-label="success" class="fd-semantic-color__icon--success"></i>
<br>
<span class="fd-semantic-color fd-semantic-color--success">Success</span>
</div>
`;
success.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To  `fd-semantic-color-modifiersuccess` class.  To use the icon add the `--success` modifier to the `__icon` element.'
    }
};

export const error = () => `
<div>
    <i arial-label="error" class="fd-semantic-color__icon--error"></i>
    <br>
    <span class="fd-semantic-color fd-semantic-color--error">Error</span>
</div>
`;
error.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the error use the `--error` modifier.  To use the icon add the `--error` modifier to the `__icon` element.'
    }
};

export const warning = () => `
<div>
<i arial-label="warning" class="fd-semantic-color--warning fd-semantic-color__icon--warning"></i>
<br>
<span class="fd-semantic-color fd-semantic-color--warning">Warning</span>
</div>
`;
warning.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the warning use the `--warning` modifier. To use the icon add the `--warning` modifier to the `__icon` element.'
    }
};

export const question = () => `
<div>
    <i arial-label="information" class="fd-semantic-color--question fd-semantic-color__icon--question"></i>
    <br>
    <span class="fd-semantic-color fd-semantic-color--question">Question</span>
</div>
`;
question.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the question use the `--question` modifier.  To use the icon add the `--question` modifier to the `__icon` element.'
    }
};

