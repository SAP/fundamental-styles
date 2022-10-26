import 'fn/src/fn-shell.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-search.scss';
import 'fn/src/fn-avatar.scss';
import 'fn/src/fn-button.scss';
import 'styles/src/icon.scss';
import 'styles/src/toolbar.scss';

export default {
  title: 'Shell',
  parameters: {
    tags: ['f3', 'a11y', 'theme'],
    description: `
The shell offers consistent, responsive navigation across all products and applications. It also includes support for branding, product navigation, search, notifications, and user settings. This is a composite component comprised of mandatory and optional elements. Shell should always be placed inside the shell layout container. As mentioned earlier, it is completely responsive by default with margins and padding already built in. 
        
**Shell has two primary container groups:**

-	Product: for branding and product elements.
-	Actions: for search, product links, and user settings.

##Elements
The shell supports layout functionality and has some built-in elements, but relies on standalone components for most of its content.
        
Elements | Class | Description
:------------ | :------- | :------------
Logo (mandatory) | \`fn-shell__logo\` | For company branding, add the \`--image-replaced\` modifier class when using CSS to display the logo.
Title (mandatory) | \`fn-shell__title\` | Displays the current application.
Group (mandatory) | \`fn-shell__group\` | A container for the product title, the search, and the actions.
Product Group (mandatory) | \`fn-shell__group--product\` | A container for the product group.
Search Group (optional) | \`fn-shell__group--search\` | A container for the search group.
Actions Group (mandatory) | \`fn-shell__group--actions\` | A container for the actions group.
Avatar (mandatory) | \`fn-shell__avatar\` | For user settings and application meta links such as _Sign Out_.
<br>
`
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }
</style>
`;
export const ShellXlSize = () => `${localStyles}
    <div class="fn-shell">
        <div class="fn-shell__group fn-shell__group--product">
            <span class="fn-shell__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="52" height="26" alt="SAP"></span>
            <span class="fn-shell__title">Product Name</span>
        </div>
        <div class="fn-shell__group fn-shell__group--search">
            <div class="fn-search">
                <span class="sap-icon sap-icon--search"></span>
                <input type="search" class="fn-search__input" placeholder="Search everything" />
                <span class="sap-icon sap-icon--navigation-right-arrow"></span>
            </div>
        </div>
        <div class="fn-shell__group fn-shell__group--actions">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Settings">
                <span class="sap-icon sap-icon--settings"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Notification">
                <span class="sap-icon sap-icon--bell"></span>
            </button>
            <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--m fn-shell__avatar" tabindex="0">
                <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
            </div>
        </div>
    </div>
`;
ShellXlSize.storyName = 'Extra large';
export const ShellLSize = () => `${localStyles}
    <div class="fn-shell">
        <div class="fn-shell__group fn-shell__group--product">
            <span class="fn-shell__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="52" height="26" alt="SAP"></span>
            <span class="fn-shell__title">Product Name</span>
        </div>
        <div class="fn-shell__group fn-shell__group--search">
            <div class="fn-search">
                <span class="sap-icon sap-icon--search"></span>
                <input type="search" class="fn-search__input" placeholder="Search everything" />
                <span class="sap-icon sap-icon--navigation-right-arrow"></span>
            </div>
        </div>
        <div class="fn-shell__group fn-shell__group--actions">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Settings">
                <span class="sap-icon sap-icon--settings"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Notification">
                <span class="sap-icon sap-icon--bell"></span>
            </button>
            <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--m fn-shell__avatar" tabindex="0">
                <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
            </div>
        </div>
    </div>
`;
ShellLSize.storyName = 'Large';
export const ShellMSize = () => `${localStyles}
    <div class="fn-shell">
        <div class="fn-shell__group fn-shell__group--product">
            <span class="fn-shell__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="52" height="26" alt="SAP"></span>
            <span class="fn-shell__title">Product Name</span>
        </div>
        <div class="fn-shell__group fn-shell__group--actions">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Search">
                <span class="sap-icon sap-icon--search"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Settings">
                <span class="sap-icon sap-icon--settings"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Notification">
                <span class="sap-icon sap-icon--bell"></span>
            </button>
            <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--m fn-shell__avatar" tabindex="0">
                <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
            </div>
        </div>
    </div>
`;
ShellMSize.storyName = 'Medium';
ShellMSize.parameters = {
  docs: {
    storyDescription: 'In the medium-sized screen for tablets, the search input is replaced with a search button.'
  }
};
export const ShellSSize = () => `${localStyles}
    <div class="fn-shell">
        <div class="fn-shell__group fn-shell__group--product">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Menu">
                <span class="sap-icon sap-icon--menu2"></span>
            </button>
            <span class="fn-shell__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="52" height="26" alt="SAP"></span>
        </div>
        <div class="fn-shell__group fn-shell__group--actions">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Search">
                <span class="sap-icon sap-icon--search"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Settings">
                <span class="sap-icon sap-icon--settings"></span>
            </button>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="Notification">
                <span class="sap-icon sap-icon--bell"></span>
            </button>
            <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--m fn-shell__avatar" tabindex="0">
                <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
            </div>
        </div>
    </div>
`;
ShellSSize.storyName = 'Small';
ShellSSize.parameters = {
  docs: {
    storyDescription: 'For small mobile-sized screens, the Product Title is hidden and a menu button appears.'
  }
};
