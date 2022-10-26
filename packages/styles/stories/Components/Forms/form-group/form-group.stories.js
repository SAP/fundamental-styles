import '../../../../src/form-layout-grid.scss';
import '../../../../src/form-group.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
    title: 'Components/Forms/Form Group',
    parameters: {
        description: `
Form groups are used to assemble form elements with labels, messages, and help containers.

These components can be used alone. For example, the \`form__item\` element with the label and control could be used without the full form group since not every form field will need error messages.

        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `<div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label" for="input-1">Default input:</label>
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
`;

Primary.storyName = 'Default';
Primary.parameters = {
    docs: {
        description: {
            story: `
The default form group component displays an inline label and an input field that is highlighted in blue when selected.
`
        }
    }
};

export const Compact = () => `<div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label" for="input-1b">Compact Input:</label>
            <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
        </div>
    </div>
`;

Compact.parameters = {
    docs: {
        description: {
            story: `
Form group can be displayed in compact mode, which is ideal for larger desktop screens. To display a compact form group, add the \`--compact\` modifier class to the \`fd-input\` element.
`
        }
    }
};

export const Required = () => `<div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
            <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
        </div>
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

export const GroupHeader = () =>
    `<div class="fd-form-group" role="group" aria-labelledby="basicGroupHeader">
        <div class="fd-form-group__header">
            <h1 class="fd-form-group__header-text" id="basicGroupHeader">Group Header</h1>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1d">Group Header Input:</label>
            <input class="fd-input" type="text" id="input-1d" placeholder="Field placeholder text">
        </div>
    </div>
`;

GroupHeader.storyName = 'Group header';
GroupHeader.parameters = {
    docs: {
        description: {
            story: `
Form groups can be grouped together under a header with the \`fd-form-group__header\` class.
`
        }
    }
};

export const GroupHeaderCompact = () =>
    `<div class="fd-form-group" role="group" aria-labelledby="compactGroupHeader">
        <div class="fd-form-group__header fd-form-group__header--compact">
            <h1 class="fd-form-group__header-text" id="compactGroupHeader">Group Header</h1>
        </div>
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1e">Compact Group Header Input:</label>
            <input class="fd-input" type="text" id="input-1e" placeholder="Field placeholder text">
        </div>
    </div>
`;
GroupHeaderCompact.storyName = 'Group header (compact)';
GroupHeaderCompact.parameters = {
    docs: {
        description: {
            story: `
Form group headers can be displayed in compact mode. To display compact group headers, add the \`--compact\` modifier class to the \`fd-form-group__header\` element.
        `
        }
    }
};

export const GroupHeaderInFormGrid = () =>
    `<div class="fd-container fd-form-layout-grid-container">
        <div class="fd-row">
            <div class="fd-form-group fd-col fd-col-md--6  fd-col-lg--6 fd-col-xl--6 fd-col--wrap" role="group" aria-labelledby="grid1GroupHeader">
                <div class="fd-form-group__header"  id="grid1GroupHeader">
                    <h1 class="fd-form-group__header-text">Group Header 1</h1>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14x-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14x-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14y-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14y-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
            </div>
            <div class="fd-form-group fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap" role="group" aria-labelledby="grid2GroupHeader">
                <div class="fd-form-group__header">
                    <h1 class="fd-form-group__header-text" id="grid2GroupHeader">Group Header 2</h1>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14a-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14b-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14b-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14c-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14c-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
            </div>
            <div class="fd-form-group fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap" role="group" aria-labelledby="grid3GroupHeader">
                <div class="fd-form-group__header">
                    <h1 class="fd-form-group__header-text" id="grid3GroupHeader">Group Header 3</h1>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14j-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14j-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-form-item fd-row">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                        <label class="fd-form-label" for="input-14h-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                        <input class="fd-input" type="text" id="input-14h-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-form-item fd-row">
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
GroupHeaderInFormGrid.storyName = 'Group header (form grid)';
GroupHeaderInFormGrid.parameters = {
    docs: {
        description: {
            story: `
When group headers are displayed in a **Form Grid**, paddings are added to the groups.
        `
        }
    }
};
