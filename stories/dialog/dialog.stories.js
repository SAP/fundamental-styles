import '../../dist/dialog.css';
import '../../dist/icon.css';
import '../../dist/input-group.css';

export default {
    title: 'Components/Dialog',
    parameters: {
        description: `
The dialog component is a container that displays in response to an action made by the user. It interrupts the app’s current process to prompt the user for either information or a response, which requires them to make a decision before the process can continue.

##Usage
**Use the dialog if:**

- You want to display complex content, but don’t want the user to navigate away from the current page.
- You want to display an additional step or process that needs to be confirmed by a user action.
- You want to enable the user to create an object with a small number of fields (up to 8 fields).

**Do not use the dialog if:**

- You want to display a simple message. Use the **Message Box** component instead.
- You just want to confirm a successful action.
- You do not want to interrupt the user.
- You want to enable users to create an object with more than 8 fields. Use an object page instead.
        

## Structure

Dialog consists of the following elements:

- <code class="docs-code">fd-dialog</code>
  - <code class="docs-code">fd-dialog\\_\\_content</code>: Dialog window
    - <code class="docs-code">fd-dialog\\_\\_header</code>: Dialog header
      - <code class="docs-code">fd-dialog\\_\\_title</code>: Dialog title
    - <code class="docs-code">fd-dialog\\_\\_subheader</code>: Dialog subheader
    - <code class="docs-code">fd-dialog\\_\\_body</code>: Dialog content
    - <code class="docs-code">fd-dialog\\_\\_loader</code>: Dialog loader
    - <code class="docs-code">fd-dialog\\_\\_footer</code>: Dialog footer
      - <code class="docs-code">fd-dialog\\_\\_decisive-button</code>: Dialog footer's _Begin/End_ button
    - <code class="docs-code">fd-dialog\\_\\_resize-handle</code>: Handle for resizing modal

    The component displays in a fixed position and is activated by adding the <code>fd-dialog--active</code>class. Dialog's header, subheader and footer are elements from the **Bar** component. To style it according to dialog’s needs, CSS classes are used to slightly override bar’s original behaviour. However, dialog headers and footers can be customized using bar component features.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const defaultDialog = () => `
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    Dialog header
                </div>
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-title-1">
                        Dialog title
                    </h3>
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
</div>
`;

defaultDialog.storyName = 'Default';
defaultDialog.parameters = {
    docs: {
        iframeHeight: 400
    }
};


export const sizeModifiers = () =>`
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
<div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-2">
    <header class="fd-dialog__header fd-bar fd-bar--header">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h3 class="fd-dialog__title" id="dialog-title-2">
                    Small Dialog
                </h3>
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
</div>
<br />
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
<div class="fd-dialog__content fd-dialog__content--m" role="dialog" aria-modal="true" aria-labelledby="dialog-title-3">
    <header class="fd-dialog__header fd-bar fd-bar--header">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h3 class="fd-dialog__title" id="dialog-title-3">
                    Medium Dialog
                </h3>
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
</div>
<br />
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
<div class="fd-dialog__content fd-dialog__content--l" role="dialog" aria-modal="true" aria-labelledby="dialog-title-4">
    <header class="fd-dialog__header fd-bar fd-bar--header">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h3 class="fd-dialog__title" id="dialog-title-4">
                    Large Dialog
                </h3>
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
</div>
<br />
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
<div class="fd-dialog__content fd-dialog__content--xl" role="dialog" aria-modal="true" aria-labelledby="dialog-title-5">
    <header class="fd-dialog__header fd-bar fd-bar--header">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h3 class="fd-dialog__title" id="dialog-title-5">
                    Extra Large Dialog
                </h3>
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
</div>
`;

sizeModifiers.parameters = {
    docs: {
        iframeHeight: 800,
        storyDescription: `
By default dialog body has no horizontal paddings. Header, subheader, body and footer paddings should be applied responsively based on dialogs window width.
Modifying header/subheader/body/footer horizontal paddings:

- \`.fd-dialog__content--s\`: 1rem - max-width: 599px
- \`.fd-dialog__content--m\`: 2rem - min-width: 600px and max-width: 1023px
- \`.fd-dialog__content--l\`: 2rem - min-width: 1024px and max-width: 1439px
- \`.fd-dialog__content--xl\`: 3rem - min-width: 1440px

By default dialog body has vertical padding. This behavior might be changed using:

- \`.fd-dialog__body--no-vertical-padding\`: padding-top: 0, padding-bottom: 0

By default dialog on mobile devices should take full height and width of the screen. This behaviour can be changed using \`.fd-dialog__content--no-mobile-stretch\` class, which will add additional spacing around dialog.

- \`.fd-dialog__content--mobile\`: dialog takes full height and width
- \`.fd-dialog__content--no-mobile-stretch\`: margin: 6% 10%
Please remember that on mobile devices Bar component should be used with \`.fd-bar--cozy\` class.

**DIALOG HEADER/BODY/FOOTER HORIZONTAL PADDINGS**
`
    }
};

export const withResizeHandle = () => `
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-6">
            <span class="fd-dialog__resize-handle"></span>
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-6">
                            Lorem ipsum
                        </h3>
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
    </div>
`;

withResizeHandle.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
To open Dialog with resize handle add span element with \`.fd-dialog__resize-handle\` class inside \`.fd-dialog__content\` container.
Horizontal and vertical resize should be enabled only for desktop devices. Resizable Dialog should be desktop only feature.
`
    }
};

export const draggableMode = () => `
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--draggable-grab fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-7">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-title-7">
                        Lorem ipsum
                    </h3>
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
</div>
`;

draggableMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
Dialog can be opened in draggable mode, enabling drag dialog over browser view-port area (only for desktop). Draggable mode can be visualized using following classes:

- \`.fd-dialog__content--draggable-grab\`: element can be dragged
- \`.fd-dialog__content--draggable-grabbing\`: element is being dragged
`
    }
};

export const selectDialogExample = () => `
<button class="fd-button" onclick="toggleDialog('select-dialog-example', true)">Open example</button>
<div class="fd-dialog" id="select-dialog-example">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-8">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-title-8">
                        Select Dialog
                    </h3>
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
                    <input class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                    <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                        <button class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact sap-icon--search"></button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--compact">
                <li class="fd-list__item">
                    <span class="fd-list__title">List item 1</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">List item 2</span>
                </li>
                <li class="fd-list__item is-active">
                    <span class="fd-list__title">List item 3</span>
                </li>
                <li class="fd-list__item is-active">
                    <span class="fd-list__title">List item 4</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">List item 5</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">List item 6</span>
                </li>
                <li class="fd-list__footer">
                    2 items selected
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Select</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleDialog('select-dialog-example', false)">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

selectDialogExample.parameters = {
    docs: {
        iframeHeight: 500
    }
};


export const loadingDialogExample = () => `
<button class="fd-button" onclick="toggleDialog('loading-dialog-example', true)">Open example</button>
<div class="fd-dialog" id="loading-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-9">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h1 class="fd-dialog__title" id="dialog-title-9">
                        Loading Data...
                    </h1>
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
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleDialog('loading-dialog-example', false)">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;
loadingDialogExample.parameters = {
    docs: {
        iframeHeight: 500
    }
};

