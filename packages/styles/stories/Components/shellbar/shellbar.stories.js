import responsivePaddingsExampleHtml from "./responsive-paddings.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import optionalItemsExampleHtml from "./optional-items.example.html?raw";
import overflowToolbarExampleHtml from "./overflow-toolbar.example.html?raw";
import responsivenessExampleHtml from "./responsiveness.example.html?raw";

import '../../../src/button.scss';
import '../../../src/input-group.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/avatar.scss';
import '../../../src/input-group.scss';
import '../../../src/popover.scss';
import '../../../src/product-switch.scss';
import '../../../src/shellbar.scss';
import '../../../src/select.scss';
import '../../../src/object-status.scss';
import '../../../src/object-marker.scss';
import '../../../src/switch.scss';
import '../../../src/toolbar.scss';

export default {
  title: 'Components/Shellbar',
  parameters: {
    tags: ['experimental', 'uxc'],
    description: `The Shell Bar serves as the topmost section across all SAP products, providing users with a way to orient themselves within the diverse SAP product landscape. It is always visible and offers relevant information about the current context, including product and brand details, while also providing access to specific functions such as search, notifications, user profiles, and more.

**Shellbar has two primary container groups:**

-	Product: for branding and product elements.
-	Actions: for search, product links, and user settings.

##Elements
<ul>
    <li>\`fd-shellbar\`<span>: the main container</span>
      <ul>
        <li>\`fd-shellbar--sm\`<span>: adds fixed left and right spacing of 1rem</span></li>
        <li>\`fd-shellbar--md\`<span>: adds fixed left and right spacing of 2rem</span></li>
        <li>\`fd-shellbar--lg\`<span>: adds fixed left and right spacing of 2rem</span></li>
        <li>\`fd-shellbar--xl\`<span>: adds fixed left and right spacing of 3rem</span></li>
        <li>\`fd-shellbar--xxl\`<span>: adds fixed left and right spacing of 3rem</span></li>
        <li>\`fd-shellbar--side-nav\`<span>: adds fixed left and right spacing of 1rem, should be used in case Side Navigation is displayed</span></li>
        <li>\`fd-shellbar--responsive-paddings\`<span>: adds responsive left and right spacing based on the screen size.</span></li>
      </ul>
    </li>
    <li>\`fd-shellbar__group\`<span>: groups elements</span>
      <ul>
        <li>\`fd-shellbar__group--product\`<span>: defines a container that can hold the Side Navigation Button, Branding, and the Additional Content Area (Context Area)</span></li>
        <li>\`fd-shellbar__group--actions\`<span>: defines a container for controls like the Search Field, Notifications, User Profile, Product Switch, and more.</span></li>
        <li>\`fd-shellbar__group--context-area\`<span>: defines a container for components that are related to whole product rather than specific application.</span></li>
        <li>\`fd-shellbar__group--full-width\`<span>: expands the container to take up the full available width.</span></li>
      </ul>
    </li>
    <li>\`fd-shellbar__branding\`<span>: a container for the logo, product name, and solution name</span>
      <ul>
        <li>\`fd-shellbar__branding--non-interactive\`<span>: in Lean Shell Bar, the Branding is not clickable. Use this modifier class to remove the ineratctive state from the element.</span></li>
      </ul>
    </li>
    <li>\`fd-shellbar__logo\`
      <ul>
        <li>\`fd-shellbar__logo--image-replaced\`</li>
      </ul>
    </li>
    <li>\`fd-shellbar__title\`<span>: the Product name</span></li>
    <li>\`fd-shellbar__subtitle\`<span>: the Solution name</span></li>
    <li>\`fd-shellbar__action\`<span>: is a container for controls in the actions group, with modifier classes that control the visibility of the element based on the screen size. </span>
      <ul>
        <li>\`fd-shellbar__action--grow\`</li>
        <li>\`fd-shellbar__action--shrink\`</li>
        <li>\`fd-shellbar__action--mobile\`</li>
        <li>\`fd-shellbar__action--desktop\`</li>
      </ul>
    </li>
    <li>\`fd-shellbar__product\`<span>: a container for Product name and Solution name</span></li>
    <li>\`fd-shellbar__button\`<span>: is an override style of \`fd-button\`, tailored for use within the Shell Bar.</span>
      <ul>
        <li>\`fd-shellbar__button--menu\`<span>: is an override style of the Menu Button, tailored for use within the Shell Bar.</span></li>
      </ul>
    </li>
    <li>\`fd-shellbar__separator\`<span>: a span element that creates a small distance between elements in additional context area. The separator should, by default, isolate the left area (hamburger menu, branding) and the right area (actions, avatar, product switcher) from the additional context area, with optional placement between elements in the additional context area for visual grouping.</span>
    </li>
    <li>\`fd-shellbar__spacer\`<span>: a span element that can be used to create space between groups of elements in context area. Visually separates the context area into left and right group.</span></li>
    <li>\`fd-shellbar__search-field\`<span>: an override style of the search input, designed specifically for use within the Shell Bar </span></li>
</ul>
`
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Shell Bar with Mandatory Elements';
Primary.parameters = {
  docs: {
    description: {
      story: `The Shell Bar has 2 mandatory components: 
      <ul>
        <li><b>Branding:</b> Visual branding elements, such as the SAP or company logo (mandatory), the Product Name (mandatory) and Solution Name (optional). Clicking on the Branding navigates users back to the product's home page. Use the official SAP product name and logo by default, allowing customers to customize the logo and sub-brand text if needed, but avoid including "SAP" in the product name. The solution name, optional and limited to 40 characters, should only be used with the product name in exceptional cases and not for app names or navigation. </li>
        <li><b>User Profile:</b> offers access to user-specific settings and displays either an image or initials.</li>
      </ul>

    `
    }
  }
};
export const OptionalItems = () => optionalItemsExampleHtml;
OptionalItems.storyName = 'Shell Bar with Optional Elements';
OptionalItems.parameters = {
  docs: {
    description: {
      story: `The following elements of the Shell Bar are optional:: 
      <ul>
        <li><b>Side Navigation Button:</b> expands or collapses a vertical navigation panel for local navigation, and is mandatory in the Shell Bar if side navigation is used.</li>
        <li><b>Additional Context Area:</b> for containers holding product-related elements like system or status information, and should include components relevant to the entire product, not specific applications, while avoiding content meant for other Shell Bar elements.</li>
        <li><b>Search:</b> the search field in the Shell Bar can be expanded or collapsed based on screen size, and on smaller screens (S), it may be collapsed or moved to the overflow menu if multiple action icons are present.</li>
        <li><b>Joule:</b> AI Assistant</li>
        <li><b>Notifications:</b> are optional, but if enabled, the icon will display with a badge indicating the notification count.</li>
        <li><b>Additional Actions:</b> You can add unlimited custom actions to the Shell Bar, but it's recommended to limit them to seven, ensuring they impact the entire product, use icon-only buttons, and include tooltips. The order is flexible, except for the Support action, which is always placed on the right.</li>
        <li><b>Help:</b> used to trigger the help functionality within products.</li>
        <li><b>Feedback:</b> used to trigger the "Leave Feedback" functionality within products.</li>
        <li><b>Product Switch:</b> used for global navigation, allowing users to switch between different SAP products and services.</li>
        <li><b>Separator:</b> creates a small distance between elements in additional context area.</li>
        <li><b>Spacer:</b> creates space between groups of elements in context area. Visually separates the context area into left and right group.</li>
      </ul>`
    }
  }
};

export const ResponsivePaddings = () => responsivePaddingsExampleHtml;
ResponsivePaddings.parameters = {
  docs: {
    description: {
      story: `When Side Navigation is displayed, the left and right spacing is fixed at 1rem (16px) for alignment with the navigation panel. Without Side Navigation, the Shell Bar follows the Responsive Spacing System: 1rem for Size S, 2rem for Sizes M and L, and 3rem for Sizes XL and XXL (48px). Apply <code>fd-shellbar--responsive-paddings</code> modifier class for responsive paddings, and <code>fd-shellbar--side-nav</code> for fix paddings with Side Navigation.
        `
    }
  }
};

export const OverflowToolbar = () => overflowToolbarExampleHtml;
OverflowToolbar.storyName = 'Actions in Overflow Toolbar';
OverflowToolbar.parameters = {
  docs: {
    description: {
      story: `Controls like Search, Notifications, Joule, Help, and Feedback can be placed inside an Overflow Toolbar(clear type).
        `
    }
  }
};

export const Responsiveness = () => responsivenessExampleHtml;
Responsiveness.storyName = 'Actions in Overflow Toolbar';
Responsiveness.parameters = {
  docs: {
    description: {
      story: `Truncation and overflow logic of Shell Bar are based on priorities, such as when a component with a higher priority takes precedence over an element with a lower priority. <br>
      For all screen sizes the following elements are always displayed:
      <ul>
        <li>Side Navigation Button (if used)</li>
        <li>Avatar (User Menu)</li>
        <li>Product Switcher (if used)</li>
      </ul>

<div style="font-weight: bold; font-size: 1.2rem;">XXL (1920=>) / XL (1440 – 1919) / L (1024 - 1439) / M (600 - 1023)</div>
<br>
<b>Visible items:</b>

<ul>
  <li>Hamburger Menu</li>
  <li>Branding (Logo + Product Name)</li>
  <li>Additional context area</li>
  <li>Search positioned right (expanded or collapsed)</li>
  <li>Shell Actions Buttons (visible or hidden under overflow)</li>
  <li>User Profile</li>
  <li>Product Switcher</li>
</ul>

<div style="font-weight: bold; font-size: 1.2rem;">S (599<=)</div>
<br>
<b>Visible items:</b>

<ul>
  <li>Hamburger Menu</li>
  <li>Branding (Logo)</li>
  <li>Additional context area</li>
  <li>Overflow Button with all Shell Actions including search & notifications (if there are more than 1 action)</li>
  <li>User Profile</li>
  <li>Product Switcher</li>
</ul>

<br>
<b>Overflow</b>
The overflow is displayed via a Popover and is used when there is more than one action available; the button should show a toggled state when the Popover is active.`
    }
  }
};