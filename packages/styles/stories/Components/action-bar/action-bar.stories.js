import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/action-bar.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
export default {
    title: 'Components/Action Bar',
    parameters: {
        description: `The action bar displays at the top of the page, and includes the page’s title, description, back button and action buttons.

##Usage
**Use action bar if:**

-	You want to control the settings of the UI, which affects all items.
-	You want to display actions at the top of the screen.

For the page title, a Title component is utilized that is an H1 but visually styled as an H3. As the first heading on the page, for accessibility purposes it must be an H1. See the Title component page for further information on semantic versus visual heading levels.

**Do not use action bar if:**

-	You want to display finalizing actions at the bottom of the screen. Instead, use the **Bar** component and choose a footer.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \`rtl\` directive to the main element.`,
        tags: ['non-f3', 'a11y', 'theme']
    }
};

export const BackBtn = () => `<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent fd-button--compact">
                <i  role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
</div>
`;

BackBtn.storyName = 'Default';
BackBtn.parameters = {
    docs: {
        description: {
            story: 'The default action bar displays a page title, description, back button and action buttons. To display a back button, add the `fd-action-bar__description--back` modifier class to the description element.'
        }
    }
};

export const NoBackBtn = () => `<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description">Action bar Description </p>
</div>
`;

NoBackBtn.storyName = 'No back button';
NoBackBtn.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'This action bar doesn’t display a back button.'
        }
    }
};
export const BackBtnNoDescription = () => `<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent fd-button--compact">
                <i  role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact fd-button--emphasized">Button</button>
        </div>
    </div>
</div>
`;

BackBtnNoDescription.storyName = 'No description';
BackBtnNoDescription.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'This action bar doesn’t display a description.'
        }
    }
};
export const LongTitleDescription = () => `<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent fd-button--compact">
                <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long.</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long
    </p>
</div>
`;

LongTitleDescription.storyName = 'Descriptive';
LongTitleDescription.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The descriptive action bar displays a long page title and description.'
        }
    }
};

export const Actions = () => `<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent fd-button--compact"
                    aria-controls="wgxzK859" aria-haspopup="true" aria-expanded="true" aria-label="More"
                    onclick="onPopoverClick('wgxzK859');">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--compact fd-popover__body--right" aria-hidden="false" id="wgxzK859">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Assign</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Expire</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Archive</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
               </div>
            </div>
        </div>
    </div>
</div>
<div style="min-height: 200px"></div>
`;

Actions.storyName = 'Contextual';
Actions.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The contextual action bar displays a page title and contextual menu with several main actions. To display a contextual menu, add the `fd-popover` class to the`fd-action-bar__actions` element.'
        }
    }
};

export const ResponsiveL = () => `<div class="fd-action-bar fd-action-bar--m_l">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent fd-button--compact">
                <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description</p>
</div>
`;

ResponsiveL.storyName = 'Responsive (M-L)';
ResponsiveL.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'This action bar is responsive and fits the M and L sizes required for tablet and small desktop screens. To display this size, add the `fd-action-bar--m\\_l` modifier class to the main element.'
        }
    }
};

export const ResponsiveXL = () => `<div class=" fd-action-bar fd-action-bar--xl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent fd-button--compact">
                <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button fd-button--compact">Button</button>
            <button aria-label="button"class="fd-button fd-button--compact fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
</div>
`;

ResponsiveXL.storyName = 'Responsive (XL)';
ResponsiveXL.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'This action bar is responsive and fits the XL size required for larger screens of 1440px or more. To display this size, add the `fd-action-bar--xl` modifier class to the main element.'
        }
    }
};

export const Mobile = () => `<div style="width:319px;">
    <div class="fd-action-bar fd-action-bar--s">
        <div class="fd-action-bar__header">
            <div class="fd-action-bar__back">
                <button aria-label="Go Back" class="fd-button fd-button--transparent">
                    <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
                </button>
            </div>
            <div class="fd-action-bar__title">
                <h1 class="fd-title fd-title--h3">Action Bar with description and back button</h1>
            </div>
            <div class="fd-action-bar__actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent" onclick="onPopoverClick('wgxzK85');"
                        aria-controls="wgxzK85" aria-haspopup="true" aria-expanded="true" aria-label="More">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="wgxzK85">
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
        </div>
    </div>
</div>
<div style="min-height: 200px"></div>
`;

Mobile.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'This action bar is mobile responsive. To display the mobile action bar, add the `fd-action-bar--s` modifier class to the main element.'
        }
    }
};
