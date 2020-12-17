export default {
    title: 'Components/Forms/Form Header',
    parameters: {
        description: `
Form headers are essentially titles that provide users with more context about a group of input fields. For instance, a form header titled with “Personal information” would categorize input fields with labels: “Name, Address, etc.”
`,
        tags: ['f3', 'theme'],
        components: ['form-header']
    }
};

export const primary = () => `<div class="fd-form-header">
        <span class="fd-form-header__text">Form Header</span>
    </div>
`;

primary.storyName = 'Default';
primary.parameters = {
    docs: {
        storyDescription: `
Default form headers are displayed in text that does not wrap but truncates into an ellipsis.
`
    }
};
