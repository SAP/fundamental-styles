export default {
    title: 'Components/Bar',
    parameters: {
        description: `The bar component is a container that holds titles, buttons and input controls. Its contents are distributed into three areas: left, middle and right. This component’s primary function is to display page **headers** and **footers**. It is mainly used to construct a **Page**, and acts as a building block for other components like **Dialog**, **Popover** etc.
        <br><br>

**The bar component has two modes:**

- Default (desktop)
- Cozy (tablet and mobile)

## Usage 
### Header
**Use the header bar if:**

- Your page contains several controls, and the actions are valid for the entire page.

**Do not use the header bar if:**

- You have closing or finalizing actions for the whole page. In this case, use a footer instead.

### Footer
**Use the footer bar if:**

- You have closing or finalizing actions on your page that apply to the whole page.

**Do not use the footer bar if:**

- You have different containers on your page (such as charts, tables, and forms) and the action influences only certain items. In this case, place the action as close to the corresponding item(s) as possible.
- You have global actions (such as *Edit* or *Delete*) that are not finalizing or closing actions. In this case, use a header instead.


### Buttons
- Use only icon buttons **or** text buttons. Icon and text should not be combined into one button.
- Buttons are sorted by usage i.e. from frequently-used to seldomly-used.
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['button', 'icon', 'input', 'segmented-button', 'avatar', 'bar']
    }
};

export const Default = () => `
<p><b>Compact bar with compact elements</b></p>
<div class="fd-bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <span aria-label="text">TEXT</span>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
            style="background-image: url('/assets/images/avatars/1.svg')"
            role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
<p><b>Compact bar with cozy elements</b></p>
<div class="fd-bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <span aria-label="text">TEXT</span>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
            style="background-image: url('/assets/images/avatars/1.svg')"
            role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
`;

Default.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The default bar contains a back button, page title, segmented button and product switch button. It can be displayed by using the <code class="docs-code">fd-bar</code> class, and is responsive to desktop screen sizes. The default bar is in compact mode. Fiori 3 doesn\'t forbid including cozy elements inside (e.g. cozy buttons)'
    }
};

export const Cozy = () => `<div class="fd-bar fd-bar--cozy">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
            </div>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
`;

Cozy.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription: 'The cozy bar contains a back button, icon buttons, segmented button and product switch button. It is responsive to tablet and mobile screen sizes. To apply cozy mode, add the <code class="docs-code">--cozy</code> modifier class to the container element.'
    }
};

export const Header = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
            </div>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--header fd-bar--cozy">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
            </div>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
`;

Header.parameters = {
    docs: {
        iframeHeight: 350,
        storyDescription: 'The header bar contains actions that impact the entire page. It can be displayed by adding the <code class="docs-code">--header</code> modifier class to the container element.'
    }
};


export const Subheader = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
            </div>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--compact fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
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
                    <button aria-label="button" class="fd-button" aria-pressed="true">
                        <i class="sap-icon--email"></i>
                    </button>
                    <button aria-label="button" class="fd-button">
                        <i class="sap-icon--iphone"></i>
                    </button>
                    <button aria-label="button" class="fd-button">
                        <i class="sap-icon--notification-2"></i>
                    </button>
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
`;

Subheader.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: 'To change the header bar into a subheader, add the <code class="docs-code">--subheader</code> modifier class to the container element.'
    }
};


export const HeaderWithSubheader = () => `
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--header-with-subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
        </div>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--grid"></i>
            </button>
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

HeaderWithSubheader.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'To add a subheader under a header bar, the container element should have the <code class="docs-code">--header-with-subheader</code> modifier class, which will remove the element’s box shadow.'
    }
};

export const Footer = () => `
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
`;

Footer.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The footer bar should display only closing and finalizing action buttons that impact the entire page such as *Save* or *Cancel*. It can be displayed by adding the <code class="docs-code">--footer</code> modifier class to the container element.'
    }
};

export const FloatingFooter = () => `
<div style="margin-bottom: 2rem;"><b>Default (desktop)</b></div>
<br>
<div style="position: relative;">
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
</div>
<br><br>
<div style="margin-bottom: 2rem;"><b>Cozy (tablet and mobile)</b></div>
<br>
<div style="position: relative;">
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
</div>
`;

FloatingFooter.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The floating footer bar should also display only finalizing action buttons that impact the entire page. This type floats above the page at the bottom of the screen and is always visible when scrolling. It can be displayed by adding the <code class="docs-code">--floating-footer</code> modifier class to the container element.'
    }
};
