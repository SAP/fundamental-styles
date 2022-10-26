import '../../../src/dialog.scss';
import '../../../src/input-group.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/title.scss';
import '../../../src/icon.scss';
import '../../../src/list.scss';
import '../../../src/checkbox.scss';
import '../../../src/busy-indicator.scss';
import '../../../src/form-label.scss';
import '../../../src/form-layout-grid.scss';
import '../../../src/layout-grid.scss';
import '../../../src/input.scss';
import '../../../src/popover.scss';
import '../../../src/select.scss';
import '../../../src/textarea.scss';
export default {
    title: 'Components/Dialog',
    parameters: {
        description: `The dialog component is a container that appears in response to an action made by the user. It interrupts the app’s current process to prompt the user for either information or a confirmation, which requires them to make a decision before the process can continue. Dialog displays in a fixed position and is activated by adding the \`fd-dialog--active\` class.

##Usage
**Use the dialog if:**

- You want to display complex content, but don’t want the user to navigate away from the current page.
- You want to display an additional step or process that needs to be confirmed by a user action.
- You want to enable the user to create an object with a small number of fields (up to 8 fields).

**Do not use the dialog if:**

- You want to display a simple message. Use the **Message Box** component instead.
- You just want to confirm a successful action.
- You do not want to interrupt the user.
- You want to enable users to create an object with more than 8 fields. Use an **Object Page** instead.


## Structure

**Dialog consists of the following elements:**

- \`fd-dialog\` Main element
  - \`fd-dialog__content\` Dialog window
    - \`fd-dialog__header\` Dialog header
      - \`fd-dialog__title\` Dialog title
    - \`fd-dialog__subheader\` Dialog subheader
    - \`fd-dialog__body\` Dialog content
    - \`fd-dialog__loader\` Dialog loader
    - \`fd-dialog__footer\` Dialog footer
      - \`fd-dialog__decisive-button\` Dialog footer's _Begin/End_ button
    - \`fd-dialog__resize-handle\` Handle for resizing modal

**Additional classes (applied to main \`.fd-dialog\` element):**

- \`fd-dialog--no-backdrop\` needed, if dialog is used without overlay. Centers the dialog vertically and horizontally
- \`fd-dialog--targeted\` to be used, if dialog is attached to the specific element, not body

Note: Dialog's header, subheader and footer are elements from the **Bar** component. This means that dialog headers and footers can be customized using bar component features. To style the elements according to dialog’s needs, CSS classes are used to slightly override bar’s original behaviour.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const DefaultDialog = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    Dialog header
                </div>
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        Dialog title
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    Dialog subheader
                </div>
            </div>
        </div>
        <div class="fd-dialog__body">
            Dialog body
            <div class="fd-dialog__loader">
                Dialog loader
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    Dialog footer
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

DefaultDialog.storyName = 'Default';
DefaultDialog.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The default dialog component displays a container comprising a header, title, and subheader; followed by a body (content area), loader, footer and action buttons. The container also features a resize handle in the bottom-right corner of the footer, see resizable dialog below for more information.'
        }
    }
};


export const Sizes = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-2">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-2">
                        Small Dialog
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
<br />
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--m" role="dialog" aria-modal="true" aria-labelledby="dialog-title-3">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-3">
                        Medium Dialog
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
<br />
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--l" role="dialog" aria-modal="true" aria-labelledby="dialog-title-4">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-4">
                        Large Dialog
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
<br />
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--xl" role="dialog" aria-modal="true" aria-labelledby="dialog-title-5">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-5">
                        Extra Large Dialog
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

Sizes.parameters = {
    docs: {
        iframeHeight: 800,
        description: {
            story: `
By default, dialog’s body has no horizontal paddings. If horizontal paddings are added, they should behave responsively based on dialog's window width.

####Horizontal padding

These modifier classes are used to display horizontal padding for dialog's header, subheader, body and footer in various sizes.

| rem | min-width | max width | modifier class |
| ---- | ---------- | ---------- | ----------- |
| 0 | _n/a_ | _n/a_ | \`fd-dialog__body--no-horizontal-padding\` |
| 1rem | _n/a_ | 599px | \`fd-dialog__content--s\` |
| 2rem | 600px | 1023px | \`fd-dialog__content--m\` |
| 2rem | 1024px | 1439px | \`fd-dialog__content--l\` |
| 3rem | 1440px | _n/a_ | \`fd-dialog__content--xl\` |

####Vertical padding

The default dialog’s body has vertical padding, however, it can be removed if it's suitable for the use case.

| Modifier class | Modification |
| ----------------: | :------------ |
| \`fd-dialog__body--no-vertical-padding\` | padding-top: 0, padding-bottom: 0 |

####Mobile
It is recommended that the default dialog takes the full width and height of the mobile screen. If necessary, this behaviour can be changed using the second modifier class below.

| Modifier class | Modification |
| ----------------: | :------------ |
|\`fd-dialog__content--mobile\` | full width and height of mobile screen |
| \`fd-dialog__content--no-mobile-stretch\` | adds additional spacing around the container (margin 6% & 10%) |

Note: On mobile devices, the bar component should be used with the \`fd-bar--cozy\` class.
`
        }
    }
};

export const Resizable = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-6">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-6">
                        Lorem ipsum
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

Resizable.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Dialog can also be displayed with a resize handle by adding a span element with a \`fd-dialog__resize-handle\` class inside the \`fd-dialog__content\` container.

Note: This feature should be enabled for desktop screens only.`
        }
    }
};

export const Draggable = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--draggable-grab fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-7">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-7">
                        Lorem ipsum
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

Draggable.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Dialog can be draggable, enabling the user to drag the container around with their cursor on a desktop screen.

| Modifier class | Modification |
| ----------------: | :------------ |
| \`fd-dialog__content--draggable-grab\` | Modifies the element to be draggable |
| \`fd-dialog__content--draggable-grabbing\` | Visualizes the grabbing cursor |
`
        }
    }
};

export const Selectable = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-8">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-8">
                        Select Dialog
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Clear</button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-input-group">
                    <input class="fd-input fd-input-group__input fd-input--compact" type="text" aria-label="search" placeholder="Search...">
                    <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                        <button class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact" aria-label="perform search">
                            <i class="sap-icon--search" role="presentation"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--selection fd-list--compact fd-list--no-border" aria-label="selection list" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez4" aria-labelledby="Az0bg4">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez4"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg4">List item 1</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez5" checked aria-labelledby="Az0bg5">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez5"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg5">List item 2</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6" checked aria-labelledby="Az0bg6">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg6">List item 3</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4e44" aria-labelledby="440bg6">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4e44"></label>
                    </div>
                    <span class="fd-list__title" id="440bg6">List item 4</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4e55" aria-labelledby="550bg6">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4e55"></label>
                    </div>
                    <span class="fd-list__title" id="550bg6">List item 5</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4e66" aria-labelledby="660bg6">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4e66"></label>
                    </div>
                    <span class="fd-list__title" id="660bg6">List item 6</span>
                </li>
            </ul>
            <span class="fd-list__footer">
                2 items selected
            </span>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Select</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>`;

Selectable.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `The selectable dialog displays list items in the content area that can be selected. Users can search items from the list, select one or more items, and finalize their choice by selecting the _Select_ button. To display the selectable dialog, include the \`fd-list fd-list--compact\` class to the body's container element.
        `
        }
    }
};


export const Loading = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active" id="loading-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-9">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-9">
                        Loading Data...
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <strong>Status:</strong> Connecting 127.0.0.1
            <div class="fd-dialog__loader fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
                <div class="fd-busy-indicator--circle-0"></div>
                <div class="fd-busy-indicator--circle-1"></div>
                <div class="fd-busy-indicator--circle-2"></div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>`;

Loading.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'Dialog can display a busy indicator that signals to the user that data is loading. To display a busy indicator in the content area, add the `fd-busy-indicator--l` to the `fd-dialog__loader` container element. Although the busy indicator is large in this example, you can choose a smaller size. See **Busy Indicator** for more sizes.'
        }
    }
};

export const HorizontalFormInDialog = () => `
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-2">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h2 class="fd-title fd-title--h5" id="dialog-title-22">
                Form Dialog
                </h2>
            </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <div class="fd-container fd-form-layout-grid-container fd-form-group">
                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4">
                        <label class="fd-form-label" for="input-222-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8">
                        <input class="fd-input" type="text" id="input-222-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4">
                        <label class="fd-form-label fd-form-label--required" for="input-233-street">Street/No.: </label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8">
                        <div class="fd-row">
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-233-street" placeholder="Enter address" value="Myrtle St.">
                            </div>
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-233-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2  fd-col-lg--4">
                        <label class="fd-form-label fd-form-label--required" for="input-233-zip">ZIP Code/City: </label>
                    </div>
                    <div class="fd-col fd-col-md--10  fd-col-lg--8">
                        <div class="fd-row">
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-233-zip" placeholder="Enter ZIP Code" value="43823">
                            </div>
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-233-city" placeholder="Enter City" aria-label="City" value="Downtown">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4">
                        <label class="fd-form-label for="text-243-name">Bio: </label>
                    </div>
                    <div class="fd-col fd-col-md--10  fd-col-lg--8">
                        <textarea class="fd-textarea" id="text-243-name" >Disabled textarea</textarea>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2  fd-col-lg--4">
                        <label class="fd-form-label" for="input-2-country">Country:</label>
                    </div>
                    <div class="fd-col fd-col-md--10  fd-col-lg--8">
                        <div class="fd-popover" style="width:100%">
                            <div class="fd-popover__control">
                                <div class="fd-select">
                                    <div aria-controls="h031XCM509" aria-expanded="false" aria-haspopup="listbox" class="fd-select__control" aria-label="Country" tabindex="0">
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
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

HorizontalFormInDialog.storyName = 'Horizontal Form';
HorizontalFormInDialog.parameters = {
    docs: {
        description: {
            story: 'Horizontal Form displays all the components aligned horizontally. It is created by positioning the `fd-form-label` class and the `fd-input` class in the same row.'
        }
    }
};


export const VerticalFormInDialog = () => `<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-2">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h2 class="fd-title fd-title--h5" id="dialog-title-223">
                Form Dialog
                </h2>
            </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical fd-form-group">
                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label" for="input-2224-name">Name:</label>
                    </div>
                    <div class="fd-col">
                        <input class="fd-input" type="text" id="input-2224-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label fd-form-label--required" for="input-2334-street">Street/No.: </label>
                    </div>
                    <div class="fd-col">
                        <div class="fd-row">
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-2334-street" placeholder="Enter address" value="Myrtle St.">
                            </div>
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-2334-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label fd-form-label--required" for="input-2334-zip">ZIP Code/City: </label>
                    </div>
                    <div class="fd-col">
                        <div class="fd-row">
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-2334-zip" placeholder="Enter ZIP Code" value="43823">
                            </div>
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-2334-city" placeholder="Enter City" aria-label="City" value="Downtown">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label for="text-2434-name">Bio: </label>
                    </div>
                    <div class="fd-col">
                        <textarea class="fd-textarea" id="text-2434-name" >Disabled textarea</textarea>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label" for="input-2-country">Country:</label>
                    </div>
                    <div class="fd-col">
                        <div class="fd-popover" style="width:100%">
                            <div class="fd-popover__control">
                                <div class="fd-select">
                                    <div aria-controls="h031XCM509" aria-expanded="false" aria-haspopup="listbox" class="fd-select__control" aria-label="Country" tabindex="0">
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
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

VerticalFormInDialog.storyName = 'Vertical Form';
VerticalFormInDialog.parameters = {
    docs: {
        description: {
            story: 'Verical Form displays all the components aligned vertically. It is created by positioning the `fd-form-label` class above the `fd-input` class in seperate rows.'
        }
    }
};
