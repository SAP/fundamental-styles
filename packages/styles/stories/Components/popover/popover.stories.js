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

export const Variants = () => `<div class="fddocs-container" style="margin-bottom: 275px">
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
                </ul>
            </nav>
        </div>
    </div>

    <div class="fd-popover">
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
        <div class="fd-popover__body" aria-hidden="false" id="popoverHSF2">
            <nav class="fd-menu" aria-label="options with footer">
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
                </ul>
            </nav>
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
            class="fd-popover__body"
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
            <nav class="fd-menu" aria-label="options with header, subheader and footer">
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
                </ul>
            </nav>
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
Header | \`fd-popover__body-header\` | To display a header.
Footer | \`fd-popover__body-footer\` | To display a footer with actions.

You can also have subheader by using **Bar** component with subheader.
        `
        }
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
            <div class="fd-popover">
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
                <div class="fd-popover__body" aria-hidden="false" id="popoverB4">
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
            story: `As popover's triggers buttons, images, icons, and more can be used. In the example below, the **Avatar** and **Icon** act as triggers.
        `
        }
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
            story: `When the content overflows, the popover body can become scrollable. To achieve this, add element with class \`fd-popover-body__wrapper\` inside the popover body element.
        `
        }
    }
};

export const Placement = () => `<div style="display: flex; justify-content: center; padding: 100px 0 25px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--arrow-bottom" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="margin: 0 100px;">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--center fd-popover__body--arrow-bottom fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--right fd-popover__body--arrow-bottom fd-popover__body--arrow-x-end" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 0 100px 50px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--arrow-right" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 50px 100px 50px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--middle fd-popover__body--arrow-right fd-popover__body--arrow-y-center" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--middle fd-popover__body--arrow-left fd-popover__body--arrow-y-center" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between; padding: 50px 100px 25px">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--bottom fd-popover__body--arrow-right fd-popover__body--arrow-y-end" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--bottom fd-popover__body--arrow-left fd-popover__body--arrow-y-end" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: center; padding-bottom: 100px;">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="margin: 0 100px;">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--center fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1');"
                role="button"
            >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--arrow-x-end" aria-hidden="false" id="popoverF1">
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
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
`;

Placement.parameters = {
    docs: {
        description: {
            story: `It's possible to show popover on different sides of the trigger. To do that apply the following modifier classes to the popover body element.

| Modifier | Description |
| :---- | :---------- |
| \`fd-popover__body\` | Positions the popover below the trigger. *(default)* |
| \`fd-popover__body--above\` | Positions the popover above the trigger. |
| \`fd-popover__body--before\` | Positions the popover before the trigger. |
| \`fd-popover__body--after\` | Positions the popover next to the trigger. |

To align the popover arrow with the trigger apply the following modifier classes to the popover body element.

| Arrow modifier class | Description |
| :------------- | :---------- |
| \`fd-popover__body\` | Positions the arrow on the top left side of the popover. *(default)* |
| \`fd-popover__body--arrow-bottom\` | Positions the arrow on the bottom left right side of the popover. |
| \`fd-popover__body--arrow-left\` | Positions the arrow on the left top side of the popover. |
| \`fd-popover__body--arrow-right\` | Positions the arrow on the right top side of the popover. |
| \`fd-popover__body--arrow-x-center\` | Positions the arrow horizontally centered on the popover. |
| \`fd-popover__body--arrow-x-end\` | Positions the arrow to the end by horizontal line of the popover body. |
| \`fd-popover__body--arrow-y-center\` | Positions the arrow vertically centered on the popover. |
| \`fd-popover__body--arrow-y-end\` | Positions the arrow to the end by vertical line of the popover. |
        `
        }
    }
};

export const NoArrow = () => `<div class="fd-popover" style="margin-bottom: 100px">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onClick="onPopoverClick('popoverF1');"
            role="button"
        >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverF1">
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
                </ul>
            </nav>
        </div>
    </div>
</div>`;

NoArrow.parameters = {
    docs: {
        description: {
            story: `It's possible to hide popover's arrow. 
To achieve this apply the \`fd-popover__body--no-arrow\` modifier class to the popover body element and remove all the arrow modifier classes.`
        }
    }
};