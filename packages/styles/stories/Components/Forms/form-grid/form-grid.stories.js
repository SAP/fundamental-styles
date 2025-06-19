import '../../../../src/form-label.scss';
import '../../../../src/form-layout-grid.scss';
import '../../../../src/layout-grid.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
import '../../../../src/select.scss';
import '../../../../src/icon.scss';
import '../../../../src/button.scss';
export default {
  title: 'Components/Forms/Form Grid',
  parameters: {
    description: `
The form grid component provides responsive layouts for forms on a 12-column grid. There are four breakpoints that result in four supported sizes:

Size | Form width | Breakpoint
:----- | :-------------- | :---------------
Small | < 600 px | 601 px breaks to medium
Medium | 601 px – 1024 px | 1025 px breaks to large
Large | 1025 px – 1440 px | 1441 px breaks to extra-large
Extra-large&nbsp;&nbsp;&nbsp; | 1441 px and above&nbsp;&nbsp;&nbsp; | _no breakpoint above 1441 px_

**Note:** These breakpoints are not dependent on the screen width, but rather the width of the form.

##Label-Field Ratio
Within each size, the number of labels, field, and empty grid columns can be defined. The optional empty grid columns are placed after the input field elements to avoid excessive stretching of the input fields.

This ratio is displayed as **X**:**Y**:**Z**, where **X** is the number of grids used by the labels, **Y** stands for the fields, and **Z** for empty grid columns.
We highly recommend changing the default of the label-field-ratio according to your app’s needs. For more information, see the recommended layouts in the **Layout** section.

##Columns
When working with form groups, it's always best to use the recommended number of columns to make the most of your screen space. That way, users aren't prompted to scroll down because of unused white space, and the form is visually balanced between the left and right side of the screen.
<br><br>
`,
    tags: []
  }
};
const docsStyles = `
  <!-- Styles related to the docs -->
  <style>
      .fd-form-layout-grid-container {
        border: 1px solid; margin: 0 auto;
      }
  </style>

`;
export const SSize = () => `<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical fd-form-group" style="max-width:600px;">
    <div class="fd-row fd-form-item">
        <div class="fd-col">
                <label class="fd-form-label" for="input-1-name">Name:</label>
        </div>
        <div class="fd-col">
            <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
    </div>
    <div class="fd-row fd-form-item">
        <div class="fd-col">
                <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
        </div>
        <div class="fd-col">
            <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-1-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
    </div>
    <div class="fd-row fd-form-item">
        <div class="fd-col">
                <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col">
            <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
    </div>
    <div class="fd-row fd-form-item">
        <div class="fd-col">
                <label class="fd-form-label" for="input-1-country">Country:</label>
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
                        aria-label="Country"
                        tabindex="0">
                        <span class="fd-select__text-content">US</span>
                        <span class="fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
` + docsStyles;
SSize.storyName = 'Small';
SSize.parameters = {
  docs: {
   description: {
      story: `The small form grid uses a single-column layout and is best used for mobile screens and dialogs. The form groups are positioned below each other in a single column and the labels are positioned above the fields to avoid the labels from truncating.

#### Label-field ratio
The small form grid is organized into a **12:12:0** label-field ratio.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 12 | A label handles the space of a whole row.
| Fields | 12 | A field handles the space of a whole row.
| Empty grid columns | 0 | There are no empty spaces on the right of the fields.

`
    }
  }
};
export const MSizeDefault = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group" style="max-width:1024px;">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2">
      <label class="fd-form-label" for="input-2-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10">
      <input class="fd-input" type="text" id="input-2-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2">
      <label class="fd-form-label fd-form-label--required" for="input-2-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-2-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-2-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2">
      <label class="fd-form-label fd-form-label--required" for="input-2-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-2-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-2-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2">
      <label class="fd-form-label" for="input-2-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--10">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
              aria-controls="h031XCM509"
              aria-expanded="false"
              aria-haspopup="listbox"
              class="fd-select__control"
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
MSizeDefault.storyName = 'Default [M]';
MSizeDefault.parameters = {
  docs: {
   description: {
      story: `
The default medium form grid uses a single-column layout. The labels are positioned in the same row as the corresponding input field or value, and form groups are positioned below each other.

####Label-field ratio
The default medium form grid is organized into a **2:10:0** label-field ratio.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 2 | Only two grid columns of the responsive grid layout are used by the labels.
| Fields | 10 | The rest of the grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 0 | There are no empty spaces on the right of the fields.

`
    }
  }
};
export const MSizeSplitScreen = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group" style="max-width:1024px;">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label" for="input-3-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--7 fd-col-md--offset-after--1">
      <input class="fd-input" type="text" id="input-3-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label fd-form-label--required" for="input-3-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--7 fd-col-md--offset-after--1">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-3-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-3-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label fd-form-label--required" for="input-3-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--7 fd-col-md--offset-after--1">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-3-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-3-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label" for="input-3-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--7 fd-col-md--offset-after--1">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
              aria-controls="h031XCM509"
              aria-expanded="false"
              aria-haspopup="listbox"
              class="fd-select__control"
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
MSizeSplitScreen.storyName = 'Split screen [M]';
MSizeSplitScreen.parameters = {
  docs: {
   description: {
      story: `
When the form is positioned in the details part of a split screen, the medium form grid should use a label-field ratio of **4:7:1**.

####Label-field ratio
The medium form grid is organized into a **4:7:1** label-field ratio for split-screen views.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 4 | Only four grid columns of the responsive grid layout are used by the labels.
| Fields | 7 | Seven grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 1 | There is one empty space on the right of the field.

`
    }
  }
};
export const MSizeFullScreenApp = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group" style="max-width:1024px;">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--3">
      <label class="fd-form-label" for="input-4-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--5 fd-col-md--offset-after--4">
      <input class="fd-input" type="text" id="input-4-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--3">
      <label class="fd-form-label fd-form-label--required" for="input-4-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--5 fd-col-md--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-4-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-4-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--3">
      <label class="fd-form-label fd-form-label--required" for="input-4-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--5 fd-col-md--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-4-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
            <input class="fd-input" type="text" id="input-4-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--3">
      <label class="fd-form-label" for="input-4-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--5 fd-col-md--offset-after--4">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
              aria-controls="h031XCM509"
              aria-expanded="false"
              aria-haspopup="listbox"
              class="fd-select__control"
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
MSizeFullScreenApp.storyName = 'Full screen [M]';
MSizeFullScreenApp.parameters = {
  docs: {
   description: {
      story: `
If the form is being viewed in a full-screen app, the medium form grid should use a single-column layout.
####Label-field ratio
The medium form grid is organized into a **3:5:4** label-field ratio for full-screen views.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 3 | Only three grid columns of the responsive grid layout are used by the labels.
| Fields | 5 | Five grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 4 | There are four empty spaces on the right of the field.

`
    }
  }
};
export const MSizeFullScreenAppLongLabel = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group" style="max-width:1024px;">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label" for="input-5-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-md--offset-after--4">
      <input class="fd-input" type="text" id="input-5-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label fd-form-label--required" for="input-5-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-md--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-5-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-5-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label fd-form-label--required" for="input-5-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-md--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-5-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-5-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--4">
      <label class="fd-form-label" for="input-5-country">Country:</label>
    </div>
    <div class="fd-col fd-col-md--8 fd-col-md--offset-after--4">
      <div class="fd-popover" style="width:100%">
        <div class="fd-popover__control">
          <div class="fd-select">
            <div
              aria-controls="h031XCM509"
              aria-expanded="false"
              aria-haspopup="listbox"
              class="fd-select__control"
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
MSizeFullScreenAppLongLabel.storyName = 'Long label [M]';
MSizeFullScreenAppLongLabel.parameters = {
  docs: {
   description: {
      story: `
The medium form width can go down to 601 px, providing insufficient space for longer labels and fields. If long labels or input values are necessary, use the label-field ratio of 4:8:0.
####Label-field ratio

The medium form grid is organized into a **3:5:4** label-field ratio to accommodate long labels and fields.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 4 | Only four grid columns of the responsive grid layout are used by the labels.
| Fields | 8 | Eight grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 0 | There is no empty space on the right of the field.

`
    }
  }
};
export const LSizeDefault = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group" style="max-width:1440px;">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label" for="input-6-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <input class="fd-input" type="text" id="input-6-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-6-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-6-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-6-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label fd-form-label--required" for="input-6-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-6-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-6-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4">
      <label class="fd-form-label" for="input-6-country">Country:</label>
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
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
LSizeDefault.storyName = 'Default [L]';
LSizeDefault.parameters = {
  docs: {
   description: {
      story: `
The default large form grid uses a two-column layout. The form groups are placed side-by-side, displaying all information on one screen to avoid scrolling. In these columns, the labels are positioned in the same row as the corresponding input field or value. Therefore, the form groups adopt the Z layout, directing users’ attention to each row instead of columns.
####Label-field ratio

The default large form grid is organized into a **4:8:0** label-field ratio.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 4 | Only four grid columns of the responsive grid layout are used by the labels.
| Fields | 8 | The rest of the grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 0 | There is no empty space on the right of the field.

`
    }
  }
};
export const LSizeSingleFormGroup = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group" style="max-width:1440px;">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label" for="input-7-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <input class="fd-input" type="text" id="input-7-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label fd-form-label--required" for="input-7-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-7-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-7-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label fd-form-label--required" for="input-7-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--5 fd-col-lg--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-7-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-7-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--3">
      <label class="fd-form-label" for="input-7-country">Country:</label>
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
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
LSizeSingleFormGroup.storyName = 'Single form [L]';
LSizeSingleFormGroup.parameters = {
  docs: {
   description: {
      story: `
If the form contains a single form group, you can use a single-column layout.


####Label-field ratio
The large form grid is organized into a **3:5:4** label-field ratio for single form groups.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 3 | Only three grid columns of the responsive grid layout are used by the labels.
| Fields | 5 | Five of the grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 4 | There are four empty spaces on the right of the field.
        `
    }
  }
};
export const LSizeMultipleFormGroup = () => `<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--lg-vertical fd-form-layout-grid-container--xl-vertical" style="max-width:1440px;">
  <div class="fd-row">
    <div class="fd-col fd-col-lg--6 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-7-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <input class="fd-input" type="text" id="input-7-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-7-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-7-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-7-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-7-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-7-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-7-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-7-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-lg--6 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-8-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <input class="fd-input" type="text" id="input-8-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-8-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-8-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-8-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label fd-form-label--required" for="input-8-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-8-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-8-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--12">
          <label class="fd-form-label" for="input-8-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
LSizeMultipleFormGroup.storyName = 'Multiple form [L]';
LSizeMultipleFormGroup.parameters = {
  docs: {
   description: {
      story: `
If the form contains multiple form groups, you can use a two-column layout.

####Label-field ratio
The large form grid is organized into a **12:12:0** label-field ratio for multiple form groups.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 12 | A label handles the space of a whole row.
| Fields | 12 | A field handles the space of a whole row.
| Empty grid columns | 0 | There are no empty spaces on the right of the fields.

**Note:** As explained in the main description, large goes down to 1025 px. Therefore, long labels that are put next to fields might not fit on smaller large-sized screens (especially in split-view apps). For this reason, labels are put above fields.

        `
    }
  }
};
export const XlDefault = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label" for="input-9-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <input class="fd-input" type="text" id="input-9-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label fd-form-label--required" for="input-9-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-9-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-9-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label fd-form-label--required" for="input-9-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-9-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-9-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
      <label class="fd-form-label" for="input-9-country">Country:</label>
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
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
XlDefault.storyName = 'Default [XL]';
XlDefault.parameters = {
  docs: {
   description: {
      story: `
The default extra-large form grid uses a two-column layout. The form groups are placed side-by-side, displaying all information on one screen to avoid scrolling. In these columns, the labels are positioned in the same row as the corresponding input field or value. The form groups adopt the Z layout.
####Label-field ratio

The default extra-large form grid is organized into a **4:8:0** label-field ratio. Technically, the value is set to -1 and inherits the value of size large, see also the development hint below.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 4 | Only four grid columns of the responsive grid layout are used by the labels.
| Fields | 8 | The rest of the grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 0 | There are no empty spaces on the right of the fields.

`
    }
  }
};
export const XlSingleFormGroup = () => `<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label" for="input-10-name">Name:</label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after--4">
      <input class="fd-input" type="text" id="input-10-name" placeholder="Enter First and Last Name" value="Amelia Perry">
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label fd-form-label--required" for="input-10-street">Street/No.: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-10-street" placeholder="Enter address" value="Myrtle St.">
        </div>
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-10-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label fd-form-label--required" for="input-10-zip">ZIP Code/City: </label>
    </div>
    <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--5 fd-col-xl--offset-after--4">
      <div class="fd-row">
        <div class="fd-col fd-col--8">
          <input class="fd-input" type="text" id="input-10-zip" placeholder="Enter ZIP Code" value="43823">
        </div>
        <div class="fd-col fd-col--4">
          <input class="fd-input" type="text" id="input-10-city" placeholder="Enter City" aria-label="City" value="Downtown">
        </div>
      </div>
    </div>
  </div>

  <div class="fd-row fd-form-item">
    <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--3">
      <label class="fd-form-label" for="input-10-country">Country:</label>
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
              aria-label="Country"
              tabindex="0"
            >
              <span class="fd-select__text-content">US</span>
              <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
XlSingleFormGroup.storyName = 'Single form [XL]';
XlSingleFormGroup.parameters = {
  docs: {
   description: {
      story: `
If the form contains a single form group, you can use a single-column layout.

####Label-field ratio
The extra-large form grid is organized into a **3:5:4** label-field ratio for single form groups.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 3 | Only three grid columns of the responsive grid layout are used by the labels.
| Fields | 5 | Five of the grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 4 | There are four empty spaces on the right of the fields.

**Note:** If the form is put into a full-screen app and it contains multiple form groups, you can also use a three-column layout with a label-field ratio of **12:12:0**.

`
    }
  }
};
export const XlDoubleFormGroup = () => `<div class="fd-container fd-form-layout-grid-container">
  <div class="fd-row">
    <div class="fd-col fd-col-xl--6 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-11-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <input class="fd-input" type="text" id="input-11-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-11-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-11-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-11-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-11-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-11-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-11-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-11-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-xl--6 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-11a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <input class="fd-input" type="text" id="input-11a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-11a-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-11a-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-11a-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label fd-form-label--required" for="input-11a-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--8">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-11a-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-11a-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--4">
          <label class="fd-form-label" for="input-11a-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
XlDoubleFormGroup.storyName = 'Double form [XL]';
XlDoubleFormGroup.parameters = {
  docs: {
   description: {
      story: `
If the form contains multiple form groups, you can use a two-column layout.

####Label-field ratio
The extra-large form grid is organized into a **4:8:0** label-field ratio for double form groups.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 4 | Only four grid columns of the responsive grid layout are used by the labels.
| Fields | 8 | The rest of the grid columns of the responsive grid layout are used by the fields.
| Empty grid columns | 0 | There are no empty spaces on the right of the fields.

`
    }
  }
};
export const XlMultipleFormGroup = () => `<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--xl-vertical">
  <div class="fd-row">
    <div class="fd-col fd-col-xl--4 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-12-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-12-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-12-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-12-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-12-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-12-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-12-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-xl--4 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-12a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-12a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-12a-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-12a-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-12a-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-12a-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-12a-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-12a-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-12a-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-xl--4 fd-col--wrap fd-form-group">
      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-12b-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-12b-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-12b-street">Street/No.: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-12b-street" placeholder="Enter address" value="Myrtle St.">
          </div>
          <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-12b-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label fd-form-label--required" for="input-12b-zip">ZIP Code/City: </label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <div class="fd-row">
            <div class="fd-col fd-col--8">
              <input class="fd-input" type="text" id="input-12b-zip" placeholder="Enter ZIP Code" value="43823">
          </div>
          <div class="fd-col fd-col--4">
              <input class="fd-input" type="text" id="input-12b-city" placeholder="Enter City" aria-label="City" value="Downtown">
          </div>
          </div>
        </div>
      </div>

      <div class="fd-row fd-form-item">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-12b-country">Country:</label>
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
                  aria-label="Country"
                  tabindex="0"
                >
                  <span class="fd-select__text-content">US</span>
                  <span class="fd-button fd-button--transparent fd-select__button">
                  <i class="sap-icon--slim-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
XlMultipleFormGroup.storyName = 'Multiple form [XL]';
XlMultipleFormGroup.parameters = {
  docs: {
   description: {
      story: `
####Label-field ratio
The extra-large form grid is organized into a **12:12:0** label-field ratio for multiple form groups.

| Components | Grid columns | Description
| :------ | :--------: | :----------------------
| Label | 12 | A label handles the space of a whole row.
| Fields | 12 | A field handles the space of a whole row.
| Empty grid columns | 0 | There is no empty space on the right of the field.

`
    }
  }
};

export const ColumnRecommended = () => `<h2>Layout 1</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-14-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-14-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-14a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-14a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Layout 2</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col-md--12 fd-col-lg--6 fd-col-xl--6 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-15-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-15-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-md--12 fd-col-lg--6 fd-col-xl--6 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-15a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-15a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Layout 3</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col-md--12 fd-col-xl--6 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-16-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-16-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-md--12 fd-col-xl--6 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-16a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-16a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
ColumnRecommended.storyName = 'Recommended layouts';
ColumnRecommended.parameters = {
  docs: {
   description: {
      story: `
These are the recommended layouts that display the ideal amount of columns for each screen size.

####Layout 1

| Screen size | Columns
| :----------: | :---------------:
| XL | 2
| L | 2
| M | 2
| S | 1

####Layout 2

| Screen size | Columns
| :----------: | :---------------:
| XL | 2
| L | 2
| M | 1
| S | 1

####Layout 3

| Screen size | Columns
| :----------: | :---------------:
| XL | 2
| L | 1
| M | 1
| S | 1

`
    }
  }
};
export const ColumnPossible = () => `<h2>Layout 4</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col-xl--4 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-17-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-17-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-xl--4 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-17a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-17a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-xl--4 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-17b-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-17b-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Layout 5</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--xl-vertical fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-18-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-18-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-18a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-18a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
ColumnPossible.storyName = 'Layout variations';
ColumnPossible.parameters = {
  docs: {
   description: {
      story: `
Although not the best solutions, these layouts are also possible.

####Layout 4

| Screen size | Columns
| :----------: | :---------------:
| XL | 3
| L | 1
| M | 1
| S | 1


####Layout 5

| Screen size | Columns
| :----------: | :---------------:
| XL | 1
| L | 1
| M | 1
| S | 1

`
    }
  }
};
export const ColumnNotRecommended = () => `<h1>XL3-L2-M2-S1</h1>
<div class="fd-container fd-form-layout-grid-container fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col-lg--6 fd-col-xl--4 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-19-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-19-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-lg--6 fd-col-xl--4 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-19a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-19a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col-lg--6 fd-col-xl--4 fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
          <label class="fd-form-label" for="input-19b-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
          <input class="fd-input" type="text" id="input-19b-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
ColumnNotRecommended.parameters = {
  docs: {
   description: {
      story: `
The layout that is not recommended for a form group are **XL3-L2-M2-S1**
`
    }
  }
};
export const Vertical = () => `<h2>Vertical layout at every breakpoint</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col">
          <label class="fd-form-label" for="input-14-name">Name:</label>
        </div>
        <div class="fd-col">
          <input class="fd-input" type="text" id="input-14-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col">
          <label class="fd-form-label" for="input-14a-name">Name:</label>
        </div>
        <div class="fd-col">
          <input class="fd-input" type="text" id="input-14a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Vertical layout at S (default) and LG breakpoint</h2>
<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--lg-vertical fd-form-group">
  <div class="fd-row">
    <div class="fd-col fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--4 fd-col-lg--12 fd-col-xl--4">
          <label class="fd-form-label" for="input-14-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--8 fd-col-lg--12 fd-col-xl--8">
          <input class="fd-input" type="text" id="input-14-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>

    <div class="fd-col fd-col--wrap fd-form-item">
      <div class="fd-row">
        <div class="fd-col fd-col-md--4 fd-col-lg--12 fd-col-xl--4">
          <label class="fd-form-label" for="input-14a-name">Name:</label>
        </div>
        <div class="fd-col fd-col-md--8 fd-col-lg--12 fd-col-xl--8">
          <input class="fd-input" type="text" id="input-14a-name" placeholder="Enter First and Last Name" value="Amelia Perry">
        </div>
      </div>
    </div>
  </div>
</div>
` + docsStyles;
Vertical.storyName = 'Vertical layout';
Vertical.parameters = {
  docs: {
   description: {
      story: `
Form could be displayed in vertical (form controls below labels) or horizontal layout (form controls on the same line as labels).
When the form displayed in vertical layout there should be a gap after each form item.
All forms are displayed in vertical layout under S breakpoint.
To display form in vertical layout under different breakpoints apply modifier classes from the following table.

| Modifier | Breakpoint
| :------ | :--------:
| (no modifier class) | **S** |
| \`.fd-form-layout-grid-container--vertical\` | **All**
| \`.fd-form-layout-grid-container--md-vertical\` | **MD**
| \`.fd-form-layout-grid-container--lg-vertical\` | **LG**
| \`.fd-form-layout-grid-container--xl-vertical\` | **XL**
        `
    }
  }
};