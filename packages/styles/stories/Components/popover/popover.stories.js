import '../../../src/avatar.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
import '../../../src/segmented-button.scss';
import '../../../src/layout-grid.scss';
export default {
    title: 'Components/Popover',
    parameters: {
        description: `The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). It can also be paired with a **Menu**, whereas the menu button would trigger a dropdown (body).

##Usage
**Use a popover if:**

- You need to define your own structure.
- You want to show UI elements that are not available with the quick view.


**Do not use a popover if:**

- The objects are in a master list (in this case, the details are shown in the details area).


##Guidelines
- As a general rule, it is suggested that one popover be revealed on the page at any given time. Opening one popover should close all others to prevent multiple layers and collisions of several popovers.
- Show status information as text fields in a content group. You can use semantic text colors.
- You can define a height for the popover. If the content exceeds the height, a scroll bar is displayed.

`,
        docs: { iframeHeight: 350 },
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Alignment = () => `<div class="fddocs-container" style="margin-bottom: 200px">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button
                    aria-controls="popoverA1"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-button"
                    onclick="onPopoverClick('popoverA1');"
                    role="button"
                >
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>

                Left-aligned (default)
            </div>
            <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
                <nav class="fd-menu" aria-label="options">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
                Right-aligned

                <button
                    aria-controls="popoverA2"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-button"
                    onclick="onPopoverClick('popoverA2');"
                    role="button"
                >
                        <!- role is needed to override the combobox role due to aria-haspopup -->
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA2">
                <div style="margin: 20px;">
                    <span
                        aria-label="Avatar"
                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail"
                        role="img"
                        style="background-image: url('assets/images/avatars/3.svg');"></span>
                </div>
            </div>
        </div>

        <div class="fd-popover">
            <div class="fd-popover__control">
                <button
                    aria-controls="popoverA3"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-button"
                    onclick="onPopoverClick('popoverA3');"
                    role="button">
                        <!- role is needed to override the combobox role due to aria-haspopup -->
                        Left-aligned (no arrow)
                    </button>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverA3">
                <nav class="fd-menu" aria-label="more options">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
                <button
                    aria-controls="popoverA4"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-button"
                    onclick="onPopoverClick('popoverA4');"
                    role="button">
                        <!- role is needed to override the combobox role due to aria-haspopup -->
                        Right-aligned (no arrow)
                    </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="false" id="popoverA4">
                <nav class="fd-menu" aria-label="arrow-less options list">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
`;

Alignment.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `The popover body can be aligned to the left or right of the control. Additionally, it’s possible to remove the arrow from the body by adding the \`fd-popover__body--no-arrow\` modifier class to the body element.

Alignment | Modifier class
:------------- | :-----------------
Left | (default)
Right | \`fd-popover__body--right\`
        ` }
    }
};

export const Variants = () => `<div class="fddocs-container">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF1"
                aria-expanded="true"
                aria-haspopup="true"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF1');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Header
                </button>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popoverHSF1">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button aria-label="previous options" class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>
                        <div class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
            </div>
            <nav class="fd-menu" aria-label="options with header">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 4</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF2"
                aria-expanded="true"
                aria-haspopup="dialog"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF2');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Footer
                </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverHSF2">
            <div style="margin: 20px;">
                <span
                    class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail"
                    style="background-image: url('assets/images/avatars/2.svg');"
                    role="img"
                    aria-label="Avatar">
                </span>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="fddocs-container" style="margin-top:300px; margin-bottom: 300px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF3"
                aria-expanded="true"
                aria-haspopup="dialog"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF3');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Header, subheader and footer
            </button>
        </div>
        <section
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow"
            id="popoverHSF3"
            aria-label="Dialog Data 1"
            role="dialog">
            <header class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button
                                aria-label="back button"
                                class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>
                        <div id="popoverHeader" class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
                <div class="fd-bar fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">
                            <div class="fd-form-item">
                                <div class="fd-segmented-button" role="group" aria-label="Group label">
                                    <button aria-label="email" class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">
                                        <i class="sap-icon--email"></i>
                                    </button>
                                    <button  aria-label="phone" class="fd-button fd-button--compact" aria-pressed="false">
                                        <i class="sap-icon--iphone"></i>
                                    </button>
                                    <button  aria-label="notification" class="fd-button fd-button--compact" aria-pressed="false">
                                        <i class="sap-icon--notification-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div style="margin: 20px 80px;">
                <span
                    class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail"
                    style="background-image: url('assets/images/avatars/2.svg');"
                    role="img"
                    aria-label="Avatar"></span>
            </div>
            <footer class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF345"
                aria-expanded="true"
                aria-haspopup="dialog"
                class="fd-button"
                onclick="onPopoverClick('popoverHSF345');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    Cozy mode
            </button>
        </div>
        <section
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--no-arrow"
            id="popoverHSF345"
            aria-label="Dialog data"
            role="dialog">
            <header class="fd-popover__body-header">
                <div class="fd-bar fd-bar--cozy fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button
                                aria-label="go back"
                                class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>
                        <div class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
                <div class="fd-bar fd-bar--cozy fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">
                            <div class="fd-form-item">
                                <div class="fd-segmented-button" role="group" aria-label="Group label">
                                    <button aria-label="email" class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">
                                        <i class="sap-icon--email"></i>
                                    </button>
                                    <button aria-label="phone" class="fd-button fd-button--compact" aria-pressed="false">
                                        <i class="sap-icon--iphone"></i>
                                    </button>
                                    <button aria-label="notifications" class="fd-button fd-button--compact" aria-pressed="false">
                                        <i class="sap-icon--notification-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div style="margin: 20px 80px;">
                <span
                    class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail"
                    style="background-image: url('assets/images/avatars/1.svg');"
                    role="img"
                    aria-label="Avatar">
                </span>
            </div>
            <footer class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--cozy fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </div>
</div>

<div class="fddocs-container" style="margin-top:300px; margin-bottom: 300px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                aria-controls="popoverHSF3"
                aria-expanded="true"
                aria-haspopup="dialog"
                class="fd-button fd-button--compact"
                onclick="onPopoverClick('popoverHSF3');"
                role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                    <i role="presentation" class="sap-icon--navigation-down-arrow"></i>
            </button>
            Compact body
        </div>
        <section
            aria-hidden="false"
            class="fd-popover__body fd-popover__body--compact"
            id="popoverHSF3"
            aria-label="Dialog Data 1"
            role="dialog">
            <nav class="fd-menu" aria-label="options with header">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 4</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
</div>
`;

Variants.storyName = 'Body variants';

Variants.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `There are several variants of the popover body that can be displayed depending on the use case.

Variant | Modifier class | Description
:------ | :------------- | :---------------
Header | \`fd-popover__body-header\` | To display a header with text.
Footer | \`fd-popover__body-footer\` | To display a footer with actions.
Header, subheader | \`fd-popover__body-header\` containing \`fd-bar fd-bar--header-with-subheader\` and \`fd-bar fd-bar--subheader\` | This variant uses the **Bar** component.
Cozy mode | \`fd-bar--cozy\` | Add this modifier class to the header area where \`fd-bar\` is used.
Compact mode | \`fd-popover__body--compact\` | Add this modifier class the popover body component to display the popover in compact mode.

        ` }
    }
};

export const ControlExamples = () => `<div class="fd-container" style="margin-bottom: 200px">
    <div class="fd-row">
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control" style="width: 48px; height: 48px;">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                            aria-controls="popoverB2"
                            aria-expanded="true"
                            aria-haspopup="true"
                            aria-label="Avatar"
                            style="background-image: url('assets/images/avatars/3.svg');"
                            onclick="onPopoverClick('popoverB2');"
                            role="button"
                            tabindex="0"></span>
                </div>
                <div class="fd-popover__body fd-popover__body--left" aria-hidden="false" id="popoverB2">
                    <nav class="fd-menu" aria-label="navigation items">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 1</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 2</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 3</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 4</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button
                        class="fd-button"
                        aria-label="Cart"
                        aria-controls="popoverB4"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverB4');"
                        role="button">
                        <!- role is needed to override the combobox role due to aria-haspopup -->
                        <i class="sap-icon--cart" role="presentation"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="false" id="popoverB4">
                    <nav class="fd-menu" aria-label="options triggered by icon button">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 1</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 2</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 3</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Option 4</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
`;

ControlExamples.storyName = 'Control variants';

ControlExamples.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `Controls can be displayed as buttons, images, icons, and more. In the example below, the **Avatar** and **Icon** act as controls.
        ` }
    }
};

export const Scrollable = () => `<div class="fd-popover" style="margin-bottom: 300px">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1');"
            role="button">
                <!- role is needed to override the combobox role due to aria-haspopup -->
                Popover with overflow
            </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverF1">
      <div class="fd-popover__wrapper" style="max-height: 250px;">
          <nav class="fd-menu" aria-label="big navigation menu">
              <ul class="fd-menu__list fd-menu__list--no-shadow">
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 1</span>
                      </a>
                  </li>
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 2</span>
                      </a>
                  </li>
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 3</span>
                      </a>
                  </li>
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 4</span>
                      </a>
                  </li>
                                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 5</span>
                      </a>
                  </li>
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 6</span>
                      </a>
                  </li>
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 7</span>
                      </a>
                  </li>
                  <li class="fd-menu__item">
                      <a class="fd-menu__link" href="#">
                          <span class="fd-menu__title">Option 8</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
    </div>
</div>
`;

Scrollable.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `When the content overflows, the popover body can become scrollable. To achieve this, add \`fd-popover-body__wrapper\` on the element below the body element.
        ` }
    }
};
