import '../../dist/form-item.css';
import '../../dist/form-label.css';
import '../../dist/form-select.css';

export default {
    title: 'Components/Forms/FormSelect',
    parameters: {
        description: `
> **DEPRECATED**. Form Select does not exist as a Fiori 3 component so it has been deprecated.  
> It has been replaced by the Custom Select Component.

A Form Select is similar to a Dropdown but is more commonly used within a form. It can also be set to a disabled state.`
    }
};

export const primary = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="select-1">Default Select:</label>
        <select class="fd-form-select" id="select-1" name="">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
`;

primary.storyName = 'Default';

export const disabled = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="select-2">Disabled Select:</label>
        <select class="fd-form-select" id="select-2" name="" disabled>
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
`;
