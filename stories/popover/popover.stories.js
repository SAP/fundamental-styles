export default {
    title: 'Components/Popover',
    parameters: {
        description: `The popover is a wrapping component that accepts a "control" as well as a "body".

A control can be anything that you want to trigger the interaction from. The body will be the contents of what you reveal on the page after triggering the popover.
Commonly used as the interaction/wrapping component when composing "dropdowns", "contextual menus", "mega menu", etc, when paired with the menu component.

As a general rule, it is suggested that one popover be revealed on the page at any given time.
Opening one popover should close all others to prevent multiple layers and collisions of several popovers.`,
        docs: { iframeHeight: 350 },
        tags: ['f3', 'a11y', 'theme'],
        components: ['avatar', 'bar', 'button', 'icon', 'menu', 'popover', 'segmented-button', 'layout-grid']
    }
};

/**
 *
 * - Left Aligned - This is the default placement and no extra modifier classes are needed
 * - Right Aligned - A modifier class `--right` should be applied at the block level wrapper `fd-popover` and `--right` to the `fd-popover__body` warapper
 * - No Arrow & Left Aligned - `--no-arrow` modifier class on the `fd-popover__body` wrapper
 * - No Arrow & Right Aligned - Modifier classes `--right` at the block level wrapper `fd-popover`, `--right` and `--no-arrow` calss on the `fd-popover_body`
 */

export const placementOptions = () => `<div class="fddocs-container" style="margin-bottom: 200px">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button
                    aria-controls="popoverA1"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-button"
                    onclick="onPopoverClick('popoverA1');"
                    role="button">
                    <!- role is needed to override the combobox role due to aria-haspopup -->
                        Left Aligned (default)
                </button>
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
                <button
                    aria-controls="popoverA2"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-button"
                    onclick="onPopoverClick('popoverA2');"
                    role="button">
                        <!- role is needed to override the combobox role due to aria-haspopup -->
                        Right Aligned
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
                        No Arrow & Left Aligned
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
                        No Arrow & Right Aligned
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


/**
 * Header (with/without a subheader): `fd-popover__body-header`
 * Footer: `fd-popover__body-footer`
 */

export const layoutOptions = () => `<div class="fddocs-container">
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
                    Header Only
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
                    Footer Only
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
                        With Header, Subheader and Footer
                </button>
            </div>
            <section
                aria-hidden="false"
                class="fd-popover__body fd-popover__body--no-arrow"
                id="popoverHSF3"
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
                                        <button aria-label="email" class="fd-button fd-button--compact" aria-pressed="true">
                                            <i class="sap-icon--email"></i>
                                        </button>
                                        <button  aria-label="phone" class="fd-button fd-button--compact">
                                            <i class="sap-icon--iphone"></i>
                                        </button>
                                        <button  aria-label="notification" class="fd-button fd-button--compact">
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
                        All Cozy Mode
                </button>
            </div>
            <section
                aria-hidden="false"
                class="fd-popover__body fd-popover__body--no-arrow"
                id="popoverHSF345"
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
                </header>
                <div class="fd-bar fd-bar--cozy fd-bar--subheader">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <div class="fd-form-item">
                                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                                        <button aria-label="email" class="fd-button fd-button--compact" aria-pressed="true">
                                            <i class="sap-icon--email"></i>
                                        </button>
                                        <button aria-label="phone" class="fd-button fd-button--compact">
                                            <i class="sap-icon--iphone"></i>
                                        </button>
                                        <button aria-label="notifications" class="fd-button fd-button--compact">
                                            <i class="sap-icon--notification-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
`;

layoutOptions.storyName = 'Popover with Header, Subheader and Footer';

/**
 * Virtually any component can be used as a `fd-popover__control` to control the display of `fd-popover__body`
 */

export const controlExamples = () => `<div class="fd-container" style="margin-bottom: 200px">
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

/**
 * Add the `fd-popover-body__wrapper` wrapper on the element below the `popover__body` to prevent body overflow.
 */

export const overflowProtection = () => `<div class="fd-popover" style="margin-bottom: 300px">
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
