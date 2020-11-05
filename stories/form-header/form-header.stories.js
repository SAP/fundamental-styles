export default {
    title: 'Components/Forms/Form Header',
    parameters: {
        tags: ['f3', 'theme'],
        components: ['form-header']
    }
};

export const primary = () => `<div class="fd-form-header">
        <span class="fd-form-header__text">Form Header</span>
    </div>
`;

primary.storyName = 'Form Header without Toolbar';
