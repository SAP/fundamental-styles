import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/title.css';
import '../../dist/action-bar.css';

export default {
    title: 'Components/Action Bar',
    parameters: {
        description: `The Action Bar is located at the top of the page and is used for the following:

- Page title
- Main Actions for the page

For the page title, a Title component is utilized that is an H1 but visually styled as an H3. As the first heading on the page, for accessibility purposes it must be an H1. See the Title component page for further information on semantic versus visual heading levels.`,
        tags: ['non-f3', 'a11y', 'theme']
    }
};

export const backBtn = () => `
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-left-arrow"></button>
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
<br><br>
<h3>RTL Support</h3>
<br>
<div class="fd-action-bar" dir="rtl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-right-arrow"></button>
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

backBtn.storyName = 'Action bar with back button, description and action buttons.';

export const noBackBtn = () => `
<div class="fd-action-bar">
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
<br><br>
<h3>RTL Support</h3>
<br>
<div class="fd-action-bar" dir="rtl">
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

noBackBtn.storyName = 'Action bar with no Back button';

export const backBtnNoDescription = () => `
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-left-arrow"></button>
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
<br><br>
<h3>RTL Support</h3>
<br>
<div class="fd-action-bar" dir="rtl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-right-arrow"></button>
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

backBtnNoDescription.storyName = 'Action bar with Back button and No description.';

export const longTitleDescription = () => `
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-left-arrow"></button>
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
<br><br>
<h3>RTL Support</h3>
<br>
<div class="fd-action-bar" dir="rtl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-right-arrow"></button>
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

longTitleDescription.storyName = 'Action bar with Long page title and description.';


export const actions = () => `
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--overflow"
                    aria-controls="wgxzK859" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                </div>
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="wgxzK859">
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
`;

actions.storyName = 'Several Main Actions in a Contextual Menu';

export const responsiveL = () => `

<div class="fd-action-bar fd-action-bar--m_l">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-left-arrow"></button>
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
<br><br>
<h3>RTL Support</h3>
<br>
<div class="fd-action-bar fd-action-bar--m_l" dir="rtl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-right-arrow"></button>
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

responsiveL.storyName = 'Action bar with back button, description, action buttons and Responsive Behaviour - M_L';

export const responsiveXL = () => `
<div class=" fd-action-bar fd-action-bar--xl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-left-arrow"></button>
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
<br><br>
<h3>RTL Support</h3>
<br>
<div class=" fd-action-bar fd-action-bar--xl" dir="rtl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="button"class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-right-arrow"></button>
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

responsiveXL.storyName = 'Action bar with back button, description, action buttons and Responsive Behaviour - XL .';

export const mobile = () => `
<div style="width:319px;">
    <div class="fd-action-bar fd-action-bar--s"> 
        <div class="fd-action-bar__header">
            <div class="fd-action-bar__back">
                <button aria-label="button"class="fd-button fd-button--transparent sap-icon--navigation-left-arrow" aria-label="Back"></button>
            </div>
            <div class="fd-action-bar__title">
                <h1 class="fd-title fd-title--h3">Action Bar with description and back button</h1>
            </div>
            <div class="fd-action-bar__actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="button"class="fd-button fd-button--transparent sap-icon--overflow"
                        aria-controls="wgxzK85" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="wgxzK85">
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
<br><br>
<h3>RTL Support</h3>
<br>
<div style="width:319px;" dir="rtl">
    <div class="fd-action-bar fd-action-bar--s"> 
        <div class="fd-action-bar__header">
            <div class="fd-action-bar__back">
                <button aria-label="button"class="fd-button fd-button--transparent sap-icon--navigation-right-arrow" aria-label="Back"></button>
            </div>
            <div class="fd-action-bar__title">
                <h1 class="fd-title fd-title--h3">Action Bar with description and back button</h1>
            </div>
            <div class="fd-action-bar__actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="button"class="fd-button fd-button--transparent sap-icon--overflow"
                        aria-controls="wgxzK86" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="wgxzK86">
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
`;

mobile.storyName = 'Action bar mobile view';
