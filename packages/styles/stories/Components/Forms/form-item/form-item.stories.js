import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
    title: 'Components/Forms/Form Item',
    parameters: {
        description: `
A form item is essentially a label positioned above an input field. When the user places their cursor in the input field, the field is highlighted in blue to indicate that it’s active.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`;

Primary.storyName = 'Default';
Primary.parameters = {
    docs: {
        description: {
            story: `The default form item displays a label placed above an empty input field with placeholder text that can be replaced with regular text.
        `
        }
    }
};

export const Compact = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1b">Compact Input:</label>
        <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
    </div>
`;

Compact.parameters = {
    docs: {
        description: {
            story: `Form items can be displayed in compact mode by adding the \`--compact\` modifier class to the \`fd-input\` element.
        `
        }
    }
};

export const Required = () => `<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`;

Required.parameters = {
    docs: {
        description: {
            story: `To indicate to the user that it’s required to fill out an input field, add the \`--required\` modifier class to the \`fd-form-label\` element.
        `
        }
    }
};
