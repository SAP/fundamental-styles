import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/input.css';
import '../../dist/segmented-button.css';

export default {
    title: 'Components/Bar',
    parameters: {
        description: `The bar component is a container that holds titles, buttons and input controls. The contents are distributed into three areas: left, middle and right. This component’s primary function is to display page **headers** and **footers**. It is mainly used to construct a **Page**, and acts as a building block for other components like **Dialog**, **Popover** etc.
        <br><br>

**The bar component has two modes:**

- Default (desktop)
- Cozy (tablet and mobile)

## Usage 
### Header
**Use the header bar if:**

- Your page contains several controls, and the actions are valid for the entire page.

**Do not use the header bar if:**

- You have closing or finalizing actions for the whole page. In this case, use a **footer** instead.

### Footer
**Use the footer bar if:**

- You have closing or finalizing actions on your page that apply to the whole page.

**Do not use the footer bar if:**

- You have different containers on your page (such as charts, tables, and forms) and the action influences only certain items. In this case, place the action as close to the corresponding item(s) as possible.
- You have global actions (such as *Edit* or *Delete*) that are not finalizing or closing actions. In this case, use a **header** instead.


### Buttons
- Use only icon buttons **or** text buttons. Icon and text should not be combined into one button.
- Buttons are sorted by usage i.e. from frequently-used to seldomly-used.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const desktop = () => `
<div class="fd-bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <span aria-label="text">TEXT</span>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>  
<div class="fd-bar" dir="rtl">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-right-arrow"></button>
        </div>
        <div class="fd-bar__element">
          <span aria-label="text">TEXT</span>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
`;

desktop.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The default bar contains a back button, page title, segmented button and product switch button. It can be displayed by using the <code class="docs-code">fd-bar</code> class, and is responsive to desktop screen sizes.'
    }
};

export const tabletAndMobile = () => `
<div class="fd-bar fd-bar--cozy">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
`;

tabletAndMobile.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription: 'The cozy bar contains a back button, icon buttons, segmented button and product switch button. It is responsive to tablet and mobile screen sizes. To apply cozy mode, add the <code class="docs-code">--cozy</code> modifier class to the container element.'
    }
};

export const barAsHeader = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--header fd-bar--cozy">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br> 
<div class="fd-bar fd-bar--header" dir="rtl">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-right-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
`;

barAsHeader.parameters = {
    docs: {
        iframeHeight: 350,
        storyDescription: 'The header bar contains actions that impact the entire page. It can be displayed by adding the <code class="docs-code">--header</code> modifier class to the container element.'
    }
};


export const barAsSubheader = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact sap-icon--home"></button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact sap-icon--grid"></button>
        </div>
    </div>
</div>
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--subheader fd-bar--cozy">
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-form-item">
                <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                    <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                    <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
                </div>
            </div>
        </div>
    </div>
</div>
<br><br>
<div><b>Full width element</b></div>
<br>
<div class="fd-bar fd-bar--subheader fd-bar--cozy">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910" aria-label="input">
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>
<div class="fd-bar fd-bar--subheader" dir="rtl">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-right-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--compact fd-button--transparent sap-icon--home"></button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--compact fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
`;

barAsSubheader.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: 'To change the header bar into a subheader, add the <code class="docs-code">--subheader</code> modifier class to the container element.'
    }
};


export const headerWithSubheader = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--header-with-subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--home"></button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--account"></button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--email" aria-pressed="true"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--iphone"></button>
                <button aria-label="button" class="fd-button fd-button--compact sap-icon--notification-2"></button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span class="fd-image--s" aria-label="Image label"
                style="background-image: url('https://placeimg.com/400/400/nature');">
            </span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent sap-icon--grid"></button>
        </div>
    </div>
</div>
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 " aria-label="input">
        </div>
    </div>
</div>
`;

headerWithSubheader.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'To add a subheader under a header bar, the container element should have the <code class="docs-code">--header-with-subheader</code> modifier class, which will remove the element’s box shadow.'
    }
};

export const barAsFooter = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--footer fd-bar--cozy">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>
<div class="fd-bar fd-bar--footer" dir="rtl">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
`;

barAsFooter.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The footer bar should display only closing and finalizing action buttons that impact the entire page such as *Save* or *Cancel*. It can be displayed by adding the <code class="docs-code">--footer</code> modifier class to the container element.'
    }
};

export const barAsFloatingFooter = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--floating-footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--floating-footer fd-bar--cozy">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>RTL Support</b></div>
<br>
<div class="fd-bar fd-bar--floating-footer" dir="rtl">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
`;

barAsFloatingFooter.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The floating footer bar should also display only finalizing action buttons that impact the entire page. This type floats above the page at the bottom of the screen and is always visible when scrolling. It can be displayed by adding the <code class="docs-code">--floating-footer</code> modifier class to the container element.'
    }
};
