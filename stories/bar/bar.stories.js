import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/input.css';
import '../../dist/segmented-button.css';

export default {
    title: 'Components/Bar',
    parameters: {
        description: `The Bar component is a container that holds titles, buttons and input controls. Its content is distributed in three areas - left, middle and right.
The Bar has 2 modes - Desktop (default) and Tablet/Mobile (cozy).`,
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
        iframeHeight: 200
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
        storyDescription: 'For Tablet and Mobile (Cozy mode) apply the <code>fd-bar--cozy</code> class to the container element.'
    }
};

export const barAsHeader = () => `
<div><b>Desktop</b></div>
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
<div><b>Tablet and Mobile (Cozy)</b></div>
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
        storyDescription: 'For Header in Bar Design apply the <code>fd-bar--header</code> class to the container element.'
    }
};


export const barAsSubheader = () => `
<div><b>Desktop</b></div>
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
<div><b>Tablet and Mobile (Cozy)</b></div>
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
        storyDescription: 'SubHeader in Bar Design is achieved by adding the <code>fd-bar--subheader</code> class to the container element.'
    }
};


export const headerWithSubheader = () => `
<div><b>Desktop</b></div>
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
        iframeHeight: 150,
        storyDescription: 'If a Header is followed by a SubHeader, the Header container should have the <code>fd-bar--header-with-subheader</code> modifier class which is removing the element’s box-shadow.'
    }
};

export const barAsFooter = () => `
<div><b>Desktop</b></div>
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
<div><b>Tablet and Mobile (Cozy)</b></div>
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
        iframeHeight: 350
    }
};

export const barAsFloatingFooter = () => `
<div><b>Desktop</b></div>
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
<div><b>Tablet and Mobile (Cozy)</b></div>
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
        iframeHeight: 350
    }
};
