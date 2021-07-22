export default {
    title: 'Components/Forms/Form Display Mode',
    parameters: {
        description: 'Display Only Mode: the data is presented only as label-value field pairs without editable fields.',
        tags: ['f3', 'theme'],
        components: ['form-header', 'form-item', 'form-group', 'form-layout-grid', 'layout-grid', 'form-label', 'icon', 'button', 'text', 'input']
    }
};

export const primary = () => `
<form>
    <div class="fd-form-header">
        <div class="fd-form-header__text">
            User Account
        </div>
    </div>
    <div class="fd-form-group">
        <div class="fd-form-group__header">
            <h3 class="fd-form-group__header-text">Personal Information</h3>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label" for="text-2-name">Name:</label>
            <p id="text-2-name" class="fd-text">Amelia Perry</p>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label" ffor="text-1-street">Street/No.: </label>
            <p id="text-1-street" class="fd-text">495, Myrtle St.</p>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label" for="text-1-zip-city">ZIP Code/City: </label>
            <p id="text-1-zip-city" class="fd-text">43823/Downtown</p>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label" for="text-1-country">Country:</label>
            <p id="text-1-country" class="fd-text">US</p>
        </div>
    </div>
</form>
`;

primary.storyName = 'Simple Example';
primary.parameters = {
    docs: {
        storyDescription: 'A simple example with vertical layout.'
    }
};
