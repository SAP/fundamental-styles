export default {
    title: 'Components/Forms/Form Header',
    parameters: {
        description: `
Form headers are essentially titles that provide users with more context about a group of input fields. For instance, a form header titled with “Personal information” would categorize input fields with labels: “Name, Address, etc.”
`,
        tags: ['f3', 'theme'],
        components: ['form-header', 'form-group', 'form-item', 'form-label', 'input']
    }
};

export const primary = () => `
<div class="fd-form-header">
    <span class="fd-form-header__text">Form Header</span>
</div>
<div class="fd-form-group">
    <div class="fd-form-group__header">
        <h3 class="fd-form-group__header-text" id="basicGroupHeader">Group Header</h3>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-11b">Compact Input:</label>
        <input class="fd-input" type="text" id="input-11b" placeholder="Field placeholder text">
    </div>
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

export const translucent = () => `
<div class="fd-form-header fd-form-header--translucent">
    <span class="fd-form-header__text">Form Header</span>
</div>
<div class="fd-form-group">
    <div class="fd-form-group__header">
        <h3 class="fd-form-group__header-text" id="basicGroupHeader">Group Header</h3>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-12b">Compact Input:</label>
        <input class="fd-input" type="text" id="input-12b" placeholder="Field placeholder text">
    </div>
</div>
`;

translucent.storyName = 'Translucent';
translucent.parameters = {
    docs: {
        storyDescription: 'Header with translucent background displayed with `transparent` background-color'
    }
};

export const transparent = () => `
<div class="fd-form-header fd-form-header--transparent">
    <span class="fd-form-header__text">Form Header</span>
</div>
<div class="fd-form-group">
    <div class="fd-form-group__header">
        <h3 class="fd-form-group__header-text" id="basicGroupHeader">Group Header</h3>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-11b">Compact Input:</label>
        <input class="fd-input" type="text" id="input-11b" placeholder="Field placeholder text">
    </div>
</div>
`;

transparent.storyName = 'Transparent';
transparent.parameters = {
    docs: {
        storyDescription: 'Header with transparent background displayed with `transparent` background-color'
    }
};

export const solid = () => `
<div class="fd-form-header fd-form-header--solid">
    <span class="fd-form-header__text">Form Header</span>
</div>
<div class="fd-form-group">
    <div class="fd-form-group__header">
        <h3 class="fd-form-group__header-text" id="basicGroupHeader">Group Header</h3>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-11b">Input:</label>
        <input class="fd-input" type="text" id="input-11b" placeholder="Field placeholder text">
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-12b">Input:</label>
        <input class="fd-input" type="text" id="input-12b" placeholder="Field placeholder text">
    </div>
</div>
`;

solid.storyName = 'Solid';
solid.parameters = {
    docs: {
        storyDescription: 'Header with solid background displayed with `--sapGroup_ContentBackground` background-color'
    }
};
