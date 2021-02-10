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

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the <code>rtl</code> directive to the main element.`,
        tags: ['non-f3', 'a11y', 'theme'],
        components: ['button', 'icon', 'title', 'action-bar', 'menu', 'popover']
    }
};

export const backBtn = () => `<div class="fd-action-bar">
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

backBtn.storyName = 'Default';
backBtn.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The default action bar displays a page title, description, back button and action buttons. To display a back button, add the <code>fd-action-bar\\_\\_description--back</code> modifier class to the description element.'
    }
};

export const noBackBtn = () => `<div class="fd-action-bar">
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

noBackBtn.storyName = 'No back button';
noBackBtn.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'This action bar doesn’t display a back button.'
    }
};
export const backBtnNoDescription = () => `<div class="fd-action-bar">
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

backBtnNoDescription.storyName = 'No description';
backBtnNoDescription.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'This action bar doesn’t display a description.'
    }
};
export const longTitleDescription = () => `<div class="fd-action-bar">
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

longTitleDescription.storyName = 'Descriptive';
longTitleDescription.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The descriptive action bar displays a long page title and description.'
    }
};

export const actions = () => `<div class="fd-action-bar">
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
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="wgxzK859">
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

actions.storyName = 'Contextual';
actions.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The contextual action bar displays a page title and contextual menu with several main actions. To display a contextual menu, add the <code>fd-popover</code> class to the<code>fd-action-bar\\_\\_actions</code> element.'
    }
};

export const responsiveL = () => `<div class="fd-action-bar fd-action-bar--m_l">
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

responsiveL.storyName = 'Responsive (M-L)';
responsiveL.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'This action bar is responsive and fits the M and L sizes required for tablet and small desktop screens. To display this size, add the <code>fd-action-bar--m\\_l</code> modifier class to the main element.'
    }
};

export const responsiveXL = () => `<div class=" fd-action-bar fd-action-bar--xl">
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

responsiveXL.storyName = 'Responsive (XL)';
responsiveXL.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'This action bar is responsive and fits the XL size required for larger screens of 1440px or more. To display this size, add the <code>fd-action-bar--xl</code> modifier class to the main element.'
    }
};

export const mobile = () => `<div style="width:319px;">
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

mobile.storyName = 'Mobile';
mobile.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'This action bar is mobile responsive. To display the mobile action bar, add the <code>fd-action-bar--s</code> modifier class to the main element.'
    }
};
