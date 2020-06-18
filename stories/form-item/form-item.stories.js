import '../../dist/form-item.css';

export default {
    title: 'Components/Forms/FormItem',
    parameters: {
        tags: ['f3', 'a11y', 'theme']
    }
};

export const primary = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`;

primary.storyName = 'Default';

export const compact = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1b">Compact Input:</label>
        <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
    </div>
`;

export const required = () => `
    <div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`;
