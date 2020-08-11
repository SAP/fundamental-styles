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

**Default** reaches up to the next specified breakpoint. This means that if the next specified breakpoint is medium, as soon as the width of the form reaches 601 px, it changes from S to M, because the default value of the breakpoint is 600.

The property breakpointL between sizes L and M works in the same way: **Size M** reaches from 601 px to 1024 px. This means that as soon as the width of the form reaches 1025 px, it changes from M to L, because the default value of the breakpoint is 1024.

**Size L** reaches from 1025 px to 1440 px. This means that as soon as the width of the form reaches  1441 px, it changes from L to **XL**, because the default value of XL is 1440

### Label-Field Ratio 

For each size, you can define how many grid columns are used for **labels**, **fields** (implicitly), and **empty grid columns**.

The optional empty grid columns are placed after the input elements. They avoid excessive stretching of the input fields. This ratio is displayed as **x:y:z**, where **x** is the number of grids used by the labels, **y** stands for the fields, and **z** for empty columns.

We highly recommend to change the default of the label-field-ratio according to your app’s needs. For more information, see the recommended layouts in the Layout section.`,
        tags: ['f3', 'a11y']
    }
};

export const sSize = () => `
<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical" style="max-width:600px">
    <div class="fd-row">
        <div class="fd-col">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label" for="input-1-name">Name:</label>
            </div>
        </div>
        <div class="fd-col">
            <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
            </div>
        </div>
        <div class="fd-col">
            <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
            </div>
        </div>
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col">
            <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label" for="input-1-country">Country:</label>
            </div>
        </div>
        <div class="fd-col fd-col--4">
            <div class="fd-popover" style="width:100%">
                <div class="fd-popover__control">
                  <div class="fd-select">
                    <div
                        aria-controls="h031XCM509"
                        aria-expanded="false"
                        aria-haspopup="listbox"
                        class="fd-select__control"
                        role="combobox"
                        tabindex="0">
                        <span class="fd-select__text-content">US</span>
                        <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

sSize.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `
Size S is targeting smartphones and dialogs.

This form uses a single-column layout. This means that the form groups are positioned below each other in a single column and the labels are positioned above the fields to avoid truncation of the labels.

The label-field ratio is 12:12:0 by default:

- 12 grid columns of the responsive grid layout are used by the labels.
(A label handles the space of a whole row.)

- 12 grid columns of the responsive grid layout are used by the fields.
(A field handles the space of a whole row.)

- 0 grid columns of the responsive grid layout are used by empty columns.
(There is no empty space on the right of the field.)`
    }
};

export const mSizeDefault = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1024px">
  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label" for="input-1-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2  fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10  fd-col-lg--8">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2  fd-col-lg--4">
      <label class="fd-form-label" for="input-1-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--10  fd-col-lg--8">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

mSizeDefault.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
Size M is using a single-column layout. The labels are positioned in the same row as the corresponding input field or value, and form groups are positioned below each other.

The label-field ratio is **2:10:0** by default:

- 2 grid columns of the responsive grid layout are used by the labels.

- 10 grid columns of the responsive grid layout are used by the fields.

- 0 columns of the responsive grid layout are used by empty columns.

If you place the form in the details part of a split screen, use a single-column layout with the label-field ratio **4:7:1** (4 grid columns used by the labels, 7 grid columns used by the fields, and 1 grid column used by empty columns).

If you place the form in a full-screen app, use a single-column layout with the label-field ratio **3:5:4** (3 grid columns used by the labels, 5 grid columns used by the fields, and 4 grid columns used by empty columns).

Size M goes down to 601 px. In this size, the 3:5:4 approach may not be wide enough for longer labels and fields. So if you expect long labels or input values, use the label-field ratio **4:8:0** (4 grid columns used by the labels, 8 grid columns used by the fields, and 0 grid columns used by empty columns).`
    }
};

export const mSizeSplitScreen = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1024px">
  <div class="fd-row">
    <div class="fd-col fd-col-md--4  fd-col-lg--4">
      <label class="fd-form-label" for="input-1-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--7  fd-col-lg--8 fd-col-md--offset-after--1">
      <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--4  fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--7  fd-col-lg--8 fd-col-md--offset-after--1">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--4  fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--7  fd-col-lg--8 fd-col-md--offset-after--1">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--4  fd-col-lg--4">
      <label class="fd-form-label" for="input-1-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--7  fd-col-lg--8 fd-col-md--offset-after--1">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

mSizeSplitScreen.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
When placing the form in the details part of a split screen, use a single-column layout with the label-field ratio **4:7:1** 
- 4 grid columns used by the labels
- 7 grid columns used by the fields
- 1 grid column used by empty columns
`
    }
};


export const mSizeFullScreenApp = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1024px">
  <div class="fd-row">
    <div class="fd-col fd-col-md--3  fd-col-lg--4">
      <label class="fd-form-label" for="input-1-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--5  fd-col-lg--8 fd-col-md--offset-after--4">
      <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--3  fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--5  fd-col-lg--8 fd-col-md--offset-after--4">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--3  fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--5  fd-col-lg--8 fd-col-md--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--3  fd-col-lg--4">
      <label class="fd-form-label" for="input-1-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--5  fd-col-lg--8 fd-col-md--offset-after--4">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

mSizeFullScreenApp.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `
When placing the form in a full-screen app, use a single-column layout with the label-field ratio **3:5:4** (
- 3 grid columns used by the labels
- 5 grid columns used by the fields
- 4 grid columns used by empty columns

Size M goes down to 601 px. In this size, the 3:5:4 approach may not be wide enough for longer labels and fields. So if you expect long labels or input values, use the label-field ratio **4:8:0** (4 grid columns used by the labels, 8 grid columns used by the fields, and 0 grid columns used by empty columns).`
    }
};

export const mSizeFullScreenAppLongLabel = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1024px">
  <div class="fd-row">
    <div class="fd-col fd-col-md--4 fd-col-lg--3">
      <label class="fd-form-label" for="input-1-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-lg--5 fd-col--offset-after--4">
      <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--4 fd-col-lg--3">
      <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-lg--5 fd-col--offset-after--4">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--4 fd-col-lg--3">
      <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-lg--5 fd-col--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--4 fd-col-lg--3">
      <label class="fd-form-label" for="input-1-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-lg--5 fd-col--offset-after--4">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

mSizeFullScreenAppLongLabel.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `

Size M goes down to 601 px. In this size, the 3:5:4 approach may not be wide enough for longer labels and fields. So if you expect long labels or input values, use the label-field ratio **4:8:0** 
- 4 grid columns used by the labels
- 8 grid columns used by the fields
- 0 grid columns used by empty columns`
    }
};

export const lSizeDefault = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1440px">
  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label" for="input-1-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label" for="input-1-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

lSizeDefault.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Size L use a two-column layout. That means that the form groups are placed next to each other to have all the information on one screen and to avoid scrolling. In these columns, the labels are positioned in the same row as the corresponding input field or value. So the form groups adopt the Z layout (reading direction in rows, not in columns).

The label-field ratio is **4:8:0** by default:

- 4 grid columns of the responsive grid layout are used by the labels.

- 8 grid columns of the responsive grid layout are used by fields.

- 0 grid columns of the responsive grid layout are used by empty columns.
`
    }
};

export const lSizeSingleFormGroup = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1440px">
  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label" for="input-1-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col  fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col  fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col  fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label" for="input-1-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</div>
`;

lSizeSingleFormGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
If the form contains a single form group, use a single-column layout with a label-field ratio of **3:5:4** 
- 3 grid columns used by the labels
- 5 grid columns used by the fields
- 4 grid columns used by empty columns.

If the form contains multiple form groups, you can also use a two-column layout with a label-field ratio of **12:12:0** (12 grid columns used by the labels, 12 grid columns used by the fields, and 0 grid columns used by empty columns). As explained already in the section Responsiveness (Breakpoints), Size L goes down to 1025 px. In this size, long labels that are put next to the fields might not fit on smaller L-sized screens (especially in split apps). Therefore labels are put above fields.`
    }
};

export const lSizeMultipleFormGroup = () => `
<div class="fd-container fd-form-layout-grid-container" style="max-width:1440px">
  <div class="fd-row">
    <div class="fd-col fd-col-lg--6 fd-col--wrap">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-1-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-1-country">Country:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-popover" style="width:100%">
            <div class="fd-popover__control">
              <div class="fd-select">
                <div
                    aria-controls="h031XCM509"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    class="fd-select__control"
                    role="combobox"
                    tabindex="0">
                    <span class="fd-select__text-content">US</span>
                    <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    
    

    <div class="fd-col fd-col-lg--6 fd-col--wrap">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-1-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-1-number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-1-country">Country:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-popover" style="width:100%">
            <div class="fd-popover__control">
              <div class="fd-select">
                <div
                    aria-controls="h031XCM509"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    class="fd-select__control"
                    role="combobox"
                    tabindex="0">
                    <span class="fd-select__text-content">US</span>
                    <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

lSizeMultipleFormGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
If the form contains multiple form groups, you can also use a two-column layout with a label-field ratio of **12:12:0** 

- 12 grid columns used by the labels
- 12 grid columns used by the fields
- 0 grid columns used by empty columns. As explained already in the section Responsiveness (Breakpoints), Size L goes down to 1025 px. 
In this size, long labels that are put next to the fields might not fit on smaller L-sized screens (especially in split apps). Therefore labels are put above fields.`
    }
};

export const xlDefault = () => `
<div class="fd-container fd-form-layout-grid-container">
  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label" for="input-2-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <input class="fd-input" type="text" id="input-2-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label fd-form-label--required" for="input-2-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-2-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-2-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label fd-form-label--required" for="input-2-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-2-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-2-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label" for="input-2-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

xlDefault.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Size XL uses also a two-column layout. To have all the information on one screen and avoid scrolling, the form groups are placed next to each other.  In these columns, the labels are positioned in the same row as the corresponding input field or value. The form groups adopt the Z layout.

The label-field ratio for size XL is **4:8:0** (technically the value is set to -1 and inherits the value of size L, see also the development hint below) by default:

- 4 grid columns of the responsive grid layout are used by labels.
- 8 grid columns of the responsive grid layout are used by fields.
- 0 grid columns of the responsive grid layout are used by empty columns.
`
    }
};


export const xlSingleFormGroup = () => `
<div class="fd-container fd-form-layout-grid-container">
  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label" for="input-2-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after--4">
      <input class="fd-input" type="text" id="input-2-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label fd-form-label--required" for="input-2-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after--4">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-2-street" placeholder="Enter address" value="Myrtle St.">
      </div>
      <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-2-number" placeholder="Enter Street Number" value="495">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label fd-form-label--required" for="input-2-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-2-zip" placeholder="Enter ZIP Code" value="43823">
      </div>
      <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-2-city" placeholder="Enter City" value="Downtown">
      </div>
      </div>
    </div>
  </div>

  <div class="fd-row">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label" for="input-2-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after-4">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
                aria-controls="h031XCM509"
                aria-expanded="false"
                aria-haspopup="listbox"
                class="fd-select__control"
                role="combobox"
                tabindex="0">
                <span class="fd-select__text-content">US</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>

</div>
`;

xlSingleFormGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `

If the form contains a single form group, use a single-column layout with a label-field ratio of **3:5:4** 
- 3 grid columns used by the labels
- 5 grid columns used by the fields
- 4 grid columns used by empty columns

If the form contains multiple form groups, you can also use a **two-column layout** with a label-field ratio of **4:8:0**  (4 grid columns used by the labels, 8 grid columns used by the fields, and 0 grid columns used by empty columns).

If the form is put into a full-screen app and it contains multiple form groups, you can also use a **three-column layout** with a label-field ratio of **12:12:0** (12 grid columns used by the labels, 12 grid columns used by the fields, and 0 grid columns used by empty columns).
`
    }
};

export const xlDoubleFormGroup = () => `
<div class="fd-container fd-form-layout-grid-container">
  <div class="fd-row">
    <div class="fd-col fd-col-xl--6 fd-col--wrap">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-2-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <input class="fd-input" type="text" id="input-2-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-2-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2-number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-2-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2-city" placeholder="Enter City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-2-country">Country:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-popover" style="width:100%">
            <div class="fd-popover__control">
              <div class="fd-select">
                <div
                    aria-controls="h031XCM509"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    class="fd-select__control"
                    role="combobox"
                    tabindex="0">
                    <span class="fd-select__text-content">US</span>
                    <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="fd-col fd-col-xl--6 fd-col--wrap">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-2a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <input class="fd-input" type="text" id="input-2a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-2a-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2a-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2a-number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-2a-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2a-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2a-city" placeholder="Enter City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-2a-country">Country:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-popover" style="width:100%">
            <div class="fd-popover__control">
              <div class="fd-select">
                <div
                    aria-controls="h031XCM509"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    class="fd-select__control"
                    role="combobox"
                    tabindex="0">
                    <span class="fd-select__text-content">US</span>
                    <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

xlDoubleFormGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `

If the form contains multiple form groups, you can also use a **two-column layout** with a label-field ratio of **4:8:0**  
- 4 grid columns used by the labels
- 8 grid columns used by the fields, 
- 0 grid columns used by empty columns

If the form is put into a full-screen app and it contains multiple form groups, you can also use a **three-column layout** with a label-field ratio of **12:12:0** (12 grid columns used by the labels, 12 grid columns used by the fields, and 0 grid columns used by empty columns).
`
    }
};

export const xlMultipleFormGroup = () => `
<div class="fd-container fd-form-layout-grid-container">
  <div class="fd-row">
    <div class="fd-col fd-col-xl--4 fd-col--wrap">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-2-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-2-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-2-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2-number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-2-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2-city" placeholder="Enter City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-2-country">Country:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-popover" style="width:100%">
            <div class="fd-popover__control">
              <div class="fd-select">
                <div
                    aria-controls="h031XCM509"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    class="fd-select__control"
                    role="combobox"
                    tabindex="0">
                    <span class="fd-select__text-content">US</span>
                    <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="fd-col fd-col-xl--4 fd-col--wrap">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-2a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-2a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-2a-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2a-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2a-number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-2a-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-2a-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-2a-city" placeholder="Enter City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-2a-country">Country:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-popover" style="width:100%">
            <div class="fd-popover__control">
              <div class="fd-select">
                <div
                    aria-controls="h031XCM509"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    class="fd-select__control"
                    role="combobox"
                    tabindex="0">
                    <span class="fd-select__text-content">US</span>
                    <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    

    <div class="fd-col fd-col-xl--4 fd-col--wrap">
    <div class="fd-row">
      <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
        <label class="fd-form-label" for="input-2b-name">Name:</label>
      </div>
      <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
        <input class="fd-input" type="text" id="input-2b-name" placeholder="Enter First and Last Name" value="Amelia Perry">
      </div>
    </div>

    <div class="fd-row">
      <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
        <label class="fd-form-label fd-form-label--required" for="input-2b-street">Street/No.: </label>
      </div>
      <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
        <div class="fd-row">
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-2b-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
            <input class="fd-input" type="text" id="input-2b-number" placeholder="Enter Street Number" value="495">
        </div>
        </div>
      </div>
    </div>

    <div class="fd-row">
      <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
        <label class="fd-form-label fd-form-label--required" for="input-2b-zip">ZIP Code/City: </label>
      </div>
      <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
        <div class="fd-row">
          <div class="fd-col fd-col--8">
            <input class="fd-input" type="text" id="input-2b-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-2b-city" placeholder="Enter City" value="Downtown">
        </div>
        </div>
      </div>
    </div>

    <div class="fd-row">
      <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
        <label class="fd-form-label" for="input-2b-country">Country:</label>
      </div>
      <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
        <div class="fd-popover" style="width:100%">
          <div class="fd-popover__control">
            <div class="fd-select">
              <div
                  aria-controls="h031XCM509"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  class="fd-select__control"
                  role="combobox"
                  tabindex="0">
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>


  </div>
</div>
`;

xlMultipleFormGroup.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `

If the form is put into a full-screen app and it contains multiple form groups, you can also use a **three-column layout** with a label-field ratio of **12:12:0** 
- 12 grid columns used by the labels
- 12 grid columns used by the fields
- 0 grid columns used by empty columns
`
    }
};

export const fourSevenOneCompactLayout = () => `
<div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
        <div class="fd-col fd-col--4">
          <label class="fd-form-label" for="input-1-compact">Default Input:</label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1-compact" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--4">
          <label class="fd-form-label fd-form-label--required" for="input-1b-compact">Required Input: </label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1b-compact" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel-compact">
        <div class="fd-col fd-col--4">
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
