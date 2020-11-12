export default {
    title: 'Components/Forms/Form Group',
    parameters: {
        description: `
        Form groups are used to assemble form elements with labels, messages, and help containers.

        These components can be used alone. For example, the 'form__item' element with the label and control could  
        be used without the full form group since not every form field will need error messages.`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['form-layout-grid', 'form-group', 'form-item', 'form-label', 'input']
    }
};

export const primary = () => `<div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label" for="input-1">Default input:</label>
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
`;

primary.storyName = 'Default';

export const compact = () => `<div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label" for="input-1b">Compact Input:</label>
            <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
        </div>
    </div>
`;

export const required = () => `<div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
            <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
        </div>
    </div>
`;

export const groupHeader = () => `
    <div class="fd-form-group">
        <div class="fd-form-group__header">
            <span class="fd-form-group__header-text">Group Header</span>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1d">Group Header Input:</label>
            <input class="fd-input" type="text" id="input-1d" placeholder="Field placeholder text">
        </div>
    </div>
`;
groupHeader.parameters = {
    docs: {
        storyDescription: `
        To provide a group header, use the class <code class="docs-code">fd-form-group\\_\\_header</code> and wrap the header text in <code class="docs-code">fd-form-group\\_\\_header-text</code>.
        `
    }
};

export const groupHeaderCompact = () => `
    <div class="fd-form-group">
        <div class="fd-form-group__header fd-form-group__header--compact">
            <span class="fd-form-group__header-text">Group Header</span>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1e">Compact Group Header Input:</label>
            <input class="fd-input" type="text" id="input-1e" placeholder="Field placeholder text">
        </div>
    </div>
`;
groupHeaderCompact.storyName = 'Compact Group Header';
groupHeaderCompact.parameters = {
    docs: {
        storyDescription: `
        A compact group header can be displayed by adding the <code class="docs-code">--compact</code> modifier class to the element.
        `
    }
};

export const groupHeaderInFormGrid = () => `
<div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row"> 
        <div class="fd-form-group fd-col fd-col-md--6  fd-col-lg--6 fd-col-xl--6 fd-col--wrap">
            <div class="fd-form-group__header">
                <span class="fd-form-group__header-text">Group Header 1</span>
            </div>
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14x-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14x-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14y-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14y-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
            </div>
        </div>

        <div class="fd-form-group fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap">
            <div class="fd-form-group__header">
                <span class="fd-form-group__header-text">Group Header 2</span>
            </div>
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14a-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14b-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14b-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14c-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14c-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
            </div>
        </div>
        <div class="fd-form-group fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap">
            <div class="fd-form-group__header">
                <span class="fd-form-group__header-text">Group Header 3</span>
            </div>
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14j-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14j-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14h-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14h-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                <label class="fd-form-label" for="input-14k-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                <input class="fd-input" type="text" id="input-14k-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
            </div>
        </div>
  </div>
</div>
`;
