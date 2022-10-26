import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
    title: 'Components/Forms/Form Label',
    parameters: {
        description: `
Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`;

Primary.storyName = 'Default';
Primary.parameters = {
    docs: {
        description: {
            story: `
The default form label is displayed in grey text above an input field. To display a form label, add the \`fd-form-label\` class as a child element of the \`fd-form-item\` element.
        `
        }
    }
};

export const Required = () => `<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`;

Required.parameters = {
    docs: {
        description: {
            story: `
To indicate to the user that it’s required to fill out an input field, add the \`--required\` modifier class to the \`fd-form-label\` element.
        `
        }
    }
};

export const Colon = () => `<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon" for="input-1d">Input With Colon</label>
        <input class="fd-input" type="text" id="input-1d" placeholder="Field placeholder text">
    </div>
`;

Colon.parameters = {
    docs: {
        description: {
            story: `
A form label can be displayed with a colon that does not disappear when truncated. To achieve this, add the \`--colon\` modifier class to the \`fd-form-label\` element.
        `
        }
    }
};

export const Disabled = () => `<div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
`;

Disabled.parameters = {
    docs: {
        description: {
            story: `
A form label can be displayed as disabled to indicate to the users that it cannot be interacted with. To display a disabled form label, add the \`is-disabled\` class to the \`fd-input\` element.
        `
        }
    }
};
