import '../../dist/form-label.css';
import '../../dist/form-layout-grid.css';

export default {
    title: 'Components/Forms/Form Grid',
    parameters: {
        description: `
A form is used to present data to the user and to allow users to enter data in a structured way. The form acts as a container for other UI elements (such as labels, input fields, and checkboxes), while structuring these into a specific layout.

There are three types of forms:

- Display-only: the data is presented only as label-value field pairs without editable fields.

- Editable: the data is presented as label-input field pairs, so users can enter data.

- Mixed: some fields are editable and some are not.

By using the responsive grid layout, the form offers a responsive layout based on a 12-column grid. There are four breakpoints, which result in three supported sizes: XL, L, M, and S. These breakpoints are not the XL, L, M, and S breakpoints of the page. In contrast to the page’s breakpoints, which react to the screen width, the breakpoints of the responsive grid layout react to the width of the form.

### Breakpoints

**Default** reaches up to the next specified breakpoint. This means that if the next specified breakpoint is medium, as soon as the width of the form reaches 601 px, it changes from S to M, because the default value of breakpointM is 600. The value of breakpointM is the first value of the smaller size.

The property breakpointL between sizes L and M works in the same way: **Size M** reaches from 601 px to 1024 px. This means that as soon as the width of the form reaches 1025 px, it changes from M to L, because the default value of breakpointL is 1024.

**Size L** reaches from 1025 px to 1440 px. This means that as soon as the width of the form reaches  1441 px, it changes from L to XL, because the default value of breakpointXL is 1440

### Label-Field Ratio 

For each size, you can define how many grid columns are used for **labels**, **fields** (implicitly), and **empty grid columns**.

The optional empty grid columns are placed after the input elements. They avoid excessive stretching of the input fields. This ratio is displayed as **x:y:z**, where **x** is the number of grids used by the labels, **y** stands for the fields, and **z** for empty columns.

We highly recommend to change the default of the label-field-ratio according to your app’s needs. For more information, see the recommended layouts in the Layout section.`,
        tags: ['f3', 'a11y']
    }
};

export const variousColumns = () => `
<div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
        <div class="fd-col fd-col--2 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label fd-form-label--required" for="input-1c-layout">2 Column Label:</label>
        </div>
        <div class="fd-col fd-col--10">
            <input class="fd-input" type="text" id="input-1c-layout" placeholder="10 Column input">
        </div>
    </div>
    <div class="fd-row">
      <div class="fd-col fd-col--3 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
        <label class="fd-form-label fd-form-label--required" for="input-1c-layout">3 Column Label:</label>
      </div>
      <div class="fd-col fd-col--5 fd-col--offset-after-4">
          <input class="fd-input" type="text" id="input-1c-layout" placeholder="5 Column input and 4 Empty Columns after">
      </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label" for="input-1-layout">4 Column Label:</label>
        </div>
        <div class="fd-col fd-col--7 fd-col--offset-after-1">
            <input class="fd-input" type="text" id="input-1-layout" placeholder="7 Column input with 1 Empty Column After">
        </div>
    </div>
    <div class="fd-row">
      <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
        <label class="fd-form-label fd-form-label--required" for="input-1c-layout">4 Column Label:</label>
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1c-layout" placeholder="8 Column input">
      </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label" id="groupLabel" for="input-2">2 times 6 Column Inputs and 1 empty column after inputs: </label>
        </div>
        <div class="fd-col fd-col--7">
            <div class="fd-row">
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input1-of-2" aria-label="input1-of-2" placeholder="6 Column input">
                  </div>
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input2-of-2" aria-label="input2-of-2" placeholder="6 Column input">
                  </div>
              </div>
          </div>
    </div>
</div>
`;

variousColumns.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: `To display the form using a 4-7-1 layout, use 3 div elements. The first containing the \`fd-container fd-form-layout-grid-container\` class.
The second containing the \`fd-row\` class. For the most inner element , use the \`fd-col fd-col--x\` ,where **x** is the appropriate column size and \`fd-form-layout-grid-flex fd-form-layout-grid-flex--right\` classes.`
    }
};

export const fourSevenOneCompactLayout = () => `
<div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label" for="input-1-compact">Default Input:</label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1-compact" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label fd-form-label--required" for="input-1b-compact">Required Input: </label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1b-compact" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel-compact">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label"  id="groupLabel-compact">2 Inputs: </label>
        </div>
        <div class="fd-col fd-col--7">
            <div class="fd-row">
                  <div class="fd-col fd-col--6">
                      <input class="fd-input fd-input--compact" type="text" id="input1-of-2-compact" aria-label="input1-of-2-compact" placeholder="Field placeholder text">
                  </div>
                  <div class="fd-col fd-col--6">
                      <input class="fd-input fd-input--compact" type="text" id="input2-of-2-compact" aria-label="input2-of-2-compact" placeholder="Field placeholder text">
                  </div>
              </div>
          </div>
      </div>
</div>
`;

fourSevenOneCompactLayout.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
To display the form using a compact layout, add the \`--compact\` modifier on the \`fd-input\` class.`
    }
};

export const vertical12ColumnLayout = () => `
<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical">
    <div class="fd-row">
        <div class="fd-col fd-col--12">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label" for="input-1-horiztonal">Default Input:</label>
            </div>
        </div>
        <div class="fd-col fd-col--12">
            <input class="fd-input" type="text" id="input-1-horiztonal" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--12">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label fd-form-label--required" for="input-1-horizontal">Required Input: </label>
            </div>
        </div>
        <div class="fd-col fd-col--12">
            <input class="fd-input" type="text" id="input-1-horizontal" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel-horizontal">
        <div class="fd-col fd-col--4">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label" id="groupLabel-horizontal">2 Inputs: </label>
            </div>
        </div>
        <div class="fd-col fd-col--12">
            <div class="fd-row">
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input-2-horizontal" aria-label="input1-of-2-horizontal" placeholder="Field placeholder text">
                  </div>
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input-3-horizontal" aria-label="input2-of-2-horizontal" placeholder="Field placeholder text">
                  </div>
              </div>
          </div>
    </div>
</div>
`;

vertical12ColumnLayout.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: `To display the 12 column grid, apply the \`--vertical\` modifier on the \`fd-form-layout-grid-container\` class.
For the inner columns, only use the \`fd-col fd-col--12\` class.`
    }
};
