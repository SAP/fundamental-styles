import '../../dist/avatar.css';
import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/popover.css';
import '../../dist/segmented-button.css';

export default {
    title: 'Components/Popover',
    parameters: {
        description: `The popover is a wrapping component that accepts a "control" as well as a "body".

A control can be anything that you want to trigger the interaction from. The body will be the contents of what you reveal on the page after triggering the popover.
Commonly used as the interaction/wrapping component when composing "dropdowns", "contextual menus", "mega menu", etc, when paired with the menu component.

As a general rule, it is suggested that one popover be revealed on the page at any given time.
Opening one popover should close all others to prevent multiple layers and collisions of several popovers.`,
        docs: { iframeHeight: 350 },
        tags: ['f3', 'a11y', 'theme']
    }
};

/**
 *
 * - Left Aligned - This is the default placement and no extra modifier classes are needed
 * - Right Aligned - A modifier class `--right` should be applied at the block level wrapper `fd-popover` and `--right` to the `fd-popover__body` warapper
 * - No Arrow & Left Aligned - `--no-arrow` modifier class on the `fd-popover__body` wrapper
 * - No Arrow & Right Aligned - Modifier classes `--right` at the block level wrapper `fd-popover`, `--right` and `--no-arrow` calss on the `fd-popover_body`
 */

export const placementOptions = () => `
    <div class="fddocs-container"> 
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button class="fd-button" aria-label="Image label" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA1');">Left Aligned (default)</button>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popoverA1">
                <nav class="fd-menu" id="">
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
                <button class="fd-button" aria-label="Image label" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA2');">Right Aligned</button>
            </div>
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="popoverA2">
                <div style="margin: 20px;">
                    <span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature');" role="presentation" aria-label="Nature"></span>
                </div>
            </div>
        </div>

        <div class="fd-popover">
            <div class="fd-popover__control">
                <button class="fd-button" aria-label="Image label" aria-controls="popoverA3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA3');">No Arrow & Left Aligned</button>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA3">
                <nav class="fd-menu" id="">
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
                <button class="fd-button" aria-label="Image label" aria-controls="popoverA4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA4');">No Arrow & Right Aligned</button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA4">
                <nav class="fd-menu" id="">
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

export const layoutOptions = () => `
<div class="fddocs-container"> 
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button" aria-label="Image label" aria-controls="popoverHSF1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverHSF1');">Header Only</button>
        </div>
        <div class="fd-popover__body" aria-hidden="true" id="popoverHSF1">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                        </div>
                        <div class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
            </div>
            <nav class="fd-menu" id="">
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
            <button class="fd-button" aria-label="Image label" aria-controls="popoverHSF2" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverHSF2');">Footer Only</button>
        </div>
        <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="popoverHSF2">
            <div style="margin: 20px;">
                <span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature');" role="presentation" aria-label="Nature"></span>
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

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button" aria-label="Image label" aria-controls="popoverHSF3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverHSF3');">With Header, Subheader and Footer</button>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverHSF3">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                        </div>
                        <div class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
                <div class="fd-bar fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">
                            <div class="fd-form-item">
                                <div class="fd-segmented-button" role="group" aria-label="Group label">
                                    <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                                    <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                                    <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin: 20px 80px;">
                <span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature');" role="presentation" aria-label="Nature"></span>
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

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button" aria-label="Image label" aria-controls="popoverHSF345" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverHSF345');">All Cozy Mode</button>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverHSF345">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--cozy fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                        </div>
                        <div class="fd-bar__element">
                            Header
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-bar fd-bar--cozy fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">
                            <div class="fd-form-item">
                                <div class="fd-segmented-button" role="group" aria-label="Group label">
                                    <button class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                                    <button class="fd-button fd-button--compact sap-icon--iphone"></button>
                                    <button class="fd-button fd-button--compact sap-icon--notification-2"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div style="margin: 20px 80px;">
                <span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature');" role="presentation" aria-label="Nature"></span>
            </div>
            <div class="fd-popover__body-footer">
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
            </div>
        </div>
    </div>
</div>
`;

layoutOptions.storyName = 'Popover with Header, Subheader and Footer';

/**
 * Virtually any component can be used as a `fd-popover__control` to control the display of `fd-popover__body`
 */

export const controlExamples = () => `
<div class="fddocs-container">
    <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control" style="width: 48px; height: 48px;">
            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail aria-label="Image label" aria-controls="popoverB2" aria-expanded="false" aria-haspopup="true" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');" onclick="onPopoverClick('popoverB2');"></span>
        </div>
        <div class="fd-popover__body fd-popover__body--left" aria-hidden="true" id="popoverB2">
            <nav class="fd-menu" id="">
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
            <span class="sap-icon--cart sap-icon--xl" aria-label="Image label" aria-controls="popoverB4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverB4');"></span>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverB4">
            <nav class="fd-menu" id="">
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
 * Add the `fd-popover-body__wrapper` wrapper on the element below the `popover__body` to prevent body overflow.
 */

export const overflowProtection = () => `
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button" aria-label="Image label" aria-controls="popoverF1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverF1');">Popover with overflow</button>
    </div>
      <div class="fd-popover__body" aria-hidden="true" id="popoverF1">
      <div class="fd-popover__wrapper" style="max-height: 250px;">
          <nav class="fd-menu" id="">
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
