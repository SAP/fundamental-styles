import 'fn/src/fn-checkbox.scss';
import 'fn/src/fn-fieldset.scss';
import 'fn/src/fn-radio.scss';
import 'fn/src/fn-switch.scss';

export default {
  title: 'Toggles',
  parameters: {
    description: `

        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

    .docs-fn-header-container code {
        margin: 0 1rem;
    }

    .docs-fn-container-group {
        background: white;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }
</style>
`;
export const Checkbox = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>

    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <label class="fn-checkbox is-hover" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-hover" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>

    <label class="fn-checkbox is-hover" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-hover" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <label class="fn-checkbox is-focus" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-focus" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>

    <label class="fn-checkbox is-focus" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-focus" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <label class="fn-checkbox is-disabled">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox" disabled>
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-disabled">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox" disabled>
        <span class="fn-checkbox__checkmark"></span>
    </label>

    <label class="fn-checkbox is-disabled">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox" disabled>
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-disabled">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox" disabled>
        <span class="fn-checkbox__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:read-only</b></div>
    <label class="fn-checkbox is-readonly">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox" readonly disabled>
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-readonly">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox" readonly disabled>
        <span class="fn-checkbox__checkmark"></span>
    </label>

    <label class="fn-checkbox is-readonly">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox" readonly disabled>
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-readonly">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox" readonly disabled>
        <span class="fn-checkbox__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:display</b></div>
    <label class="fn-checkbox is-display" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-display" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>

    <label class="fn-checkbox is-display" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
        <span class="fn-checkbox__label">Checkbox</span>
    </label>

    <label class="fn-checkbox is-display" tabindex="0">
        <input class="fn-checkbox__input" type="checkbox" checked="checked" tabindex="-1" aria-label="checkbox">
        <span class="fn-checkbox__checkmark"></span>
    </label>
</div>
`;
Checkbox.parameters = {
  docs: {
    iframeHeight: 500
  }
};
export const CheckboxGroup = () => `${localStyles}
<div class="docs-fn-container-group">
    <fieldset class="fn-fieldset">
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group"
                tabindex="-1"
                aria-label="checkbox"
                checked="checked"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">First</span>
        </label>
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group"
                tabindex="-1"
                aria-label="checkbox"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Second</span>
        </label>
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group"
                tabindex="-1"
                aria-label="checkbox"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Third</span>
        </label>
    </fieldset>
</div>

<div class="docs-fn-container-group">
    <fieldset class="fn-fieldset fn-fieldset--full-width" style="width: 120px;">
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group_width"
                tabindex="-1"
                aria-label="checkbox"
                checked="checked"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">First</span>
        </label>
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group_width"
                tabindex="-1"
                aria-label="checkbox"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Second</span>
        </label>
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group_width"
                tabindex="-1"
                aria-label="checkbox"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Third</span>
        </label>
    </fieldset>
</div>

<div class="docs-fn-container-group">
    <fieldset class="fn-fieldset fn-fieldset--horizontal">
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group_horizontal"
                tabindex="-1"
                aria-label="checkbox"
                checked="checked"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Checkbox</span>
        </label>
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group_horizontal"
                tabindex="-1"
                aria-label="checkbox"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Checkbox</span>
        </label>
        <label class="fn-checkbox" tabindex="0">
            <input
                class="fn-checkbox__input"
                type="checkbox"
                name="checkbox_group_horizontal"
                tabindex="-1"
                aria-label="checkbox"
            >
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Checkbox</span>
        </label>
    </fieldset>
</div>
`;
CheckboxGroup.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Use the `<fieldset>` HTML element with class `.fn-fieldset` to group checkbox controls. The controls are displayed vertically and have `fit-content` width. The `.fn-fieldset--full-width` modifier class will display the checkbox controls with the same width as the parent element. To display the controls horizontally apply the `.fn-fieldset--horizontal` modifier class.'
    }
  }
};
export const Radio = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>

    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <label class="fn-radio is-hover" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-hover" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>

    <label class="fn-radio is-hover" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-hover" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <label class="fn-radio is-focus" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-focus" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>

    <label class="fn-radio is-focus" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-focus" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <label class="fn-radio is-disabled">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" disabled>
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-disabled">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" disabled>
        <span class="fn-radio__checkmark"></span>
    </label>

    <label class="fn-radio is-disabled">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio" disabled>
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-disabled">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio" disabled>
        <span class="fn-radio__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:read-only</b></div>
    <label class="fn-radio is-readonly">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" readonly disabled>
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-readonly">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" readonly disabled>
        <span class="fn-radio__checkmark"></span>
    </label>

    <label class="fn-radio is-readonly">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio" readonly disabled>
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-readonly">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio" readonly disabled>
        <span class="fn-radio__checkmark"></span>
    </label>
</div>

<div class="docs-fn-container">
    <div><b>:display</b></div>
    <label class="fn-radio is-display" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-display" tabindex="0">
        <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>

    <label class="fn-radio is-display" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
        <span class="fn-radio__label">Radio Button</span>
    </label>

    <label class="fn-radio is-display" tabindex="0">
        <input class="fn-radio__input" type="radio" checked="checked" tabindex="-1" aria-label="radio">
        <span class="fn-radio__checkmark"></span>
    </label>
</div>

`;
Radio.parameters = {
  docs: {
    iframeHeight: 500
  }
};
export const RadioGroup = () => `${localStyles}
<div class="docs-fn-container-group">
    <fieldset class="fn-fieldset">
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio"  checked="checked" name="group1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">First</span>
        </label>
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Second</span>
        </label>
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group1">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Third</span>
        </label>
    </fieldset>
</div>

<div class="docs-fn-container-group">
    <fieldset class="fn-fieldset fn-fieldset--full-width" style="width: 120px;">
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio"  checked="checked" name="group2">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">First</span>
        </label>
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group2">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Second</span>
        </label>
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group2">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Third</span>
        </label>
    </fieldset>
</div>

<div class="docs-fn-container-group">
    <fieldset class="fn-fieldset fn-fieldset--horizontal">
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio"  checked="checked" name="group3">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Radio Button</span>
        </label>
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group3">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Radio Button</span>
        </label>
        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group3">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Radio Button</span>
        </label>
    </fieldset>
</div>
`;
RadioGroup.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Use the `<fieldset>` HTML element with class `.fn-fieldset` to group radio button controls. The controls are displayed vertically and have `fit-content` width. The `.fn-fieldset--full-width` modifier class will display the radio buttons with the same width as the parent element. To display the controls horizontally apply the `.fn-fieldset--horizontal` modifier class.'
    }
  }
};
export const CheckboxAndRadioButtonLongText = () => `${localStyles}
<div>
    <div style="display: flex;">
        <label class="fn-checkbox" tabindex="0">
            <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </label>

        <label class="fn-radio" tabindex="0">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group3">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </label>
    </div>
    <br><br>
    <h4>Long label with truncate</h4>
    <div style="display: flex;">
        <label class="fn-checkbox" tabindex="0" style="max-width: 50%;">
            <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
            <span class="fn-checkbox__checkmark"></span>
            <span class="fn-checkbox__label fn-checkbox__label--truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </label>

        <label class="fn-radio" tabindex="0" style="max-width: 50%;">
            <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio" name="group3">
            <span class="fn-radio__checkmark"></span>
            <span class="fn-radio__label fn-radio__label--truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </label>
    </div>
</div>
`;
CheckboxAndRadioButtonLongText.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'By default, long checkbox and radio button label will wrap in the next line. To add ellipsis and keep the text in a single line use the `fn-radio__label--truncate` and `fn-checkbox__label--truncate` modifier classes together with the `fn-radio__label` and `fn-checkbox__label` base classes.'
    }
  }
};
export const SwitchToggle = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-switch">
        <label class="fn-switch__toggle">
            <input type="checkbox" class="fn-switch__input">
            <span class="fn-switch__slider"></span>
            <span class="fn-switch__label">Toggle</span>
        </label>
    </div>
</div>

`;
SwitchToggle.storyName = 'Switch';
SwitchToggle.parameters = {
  docs: {
    iframeHeight: 500
  }
};
