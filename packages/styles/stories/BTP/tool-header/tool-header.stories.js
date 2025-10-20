import desktopExampleHtml from './desktop.example.html?raw';
import tabletExampleHtml from './tablet.example.html?raw';
import mobileExampleHtml from './mobile.example.html?raw';
import '../../../src/avatar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/search-field.scss';
import '../../../src/tool-header.scss';
import '../../../src/message-strip.scss';

export default {
    title: 'BTP/Tool Header',
    parameters: {
        description: `The Tool Header exists on all BTP tools. It is the uppermost section of the tool. It is always visible to give users access to various functions. <br>
<div class="fd-message-strip fd-message-strip--warning fd-message-strip--link">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-warning" role="presentation" aria-hidden="true"></span>
  </div><p class="fd-message-strip__text" id="message-strip-text-4">
    This component is deprecated. Please use the <a class="fd-link fd-link--emphasized" href="../?path=/docs/sap-fiori-components-shellbar--docs" target="_blank">SHELLBAR</a> component instead.
  </p></div>

## Structure
- <code>fd-tool-header</code> -&nbsp;<b>(required)</b> Tool Header Container element. Holds all Tool Header UI elements
        - <code>fd-tool-header--menu</code> -&nbsp; if the Tool Header has a Menu Button
- <code>fd-tool-header__group</code> -&nbsp; groups UI elements. The spacing between the groups is 0.75rem;
        - <code>fd-tool-header__group--hidden</code> -&nbsp;modifier class to hide an entire group;
        - <code>fd-tool-header__group--menu</code> -&nbsp;modifier class for the group element that contains the Menu Button;
        - <code>fd-tool-header__group--center</code> -&nbsp;modifier class for the group element that contains the Search/Context Switch;
        - <code>fd-tool-header__group--actions</code> -&nbsp;modifier class for the group element that contains the <b>custom</b> and <b>system</b> actions;

- <code>fd-tool-header__element</code> -&nbsp;a wrapping HTML element around every UI control. The spacing between individual elements in the group is 0.375rem;
        - <code>fd-tool-header__element--hidden</code> -&nbsp;modifier class to hide an element depending on the screen size;

- <code>fd-tool-header__logo</code> -&nbsp;<b>(required)</b> the logo is the logo of the company using the tool. The SAP logo is used as default. The logo is an interactive element that always navigates to the tool's homepage. 

- <code>fd-tool-header__product-name</code> -&nbsp;<b>(required)</b> the Product Name is the official name of the tool. 

- <code>fd-tool-header__second-title</code> -&nbsp; the Second Title is an optional second text identifier of the tool. 

- <code>fd-tool-header__separator</code> -&nbsp; The Separator is an optional element that adds space between the <b>Custom Actions Area</b> (optional), <b>System Actions Area</b> (optional) and <b>User Avatar</b> (required).
`,
        tags: ['btp', 'development', 'horizon-only']
    }
};
export const Desktop = () => desktopExampleHtml;
Desktop.parameters = {
    docs: {
      description: {
        story: `When <b>menu button</b> is present use the <code>fd-tool-header--menu</code> modifier class with the <code>fd-tool-header</code> base class. Additionally, apply the <code>fd-tool-header__group--menu</code> modifier to the <code>fd-tool-header__group</code> wrapping element.`
      }
    }
  };


export const Tablet = () => tabletExampleHtml;
Tablet.parameters = {
    docs: {
      description: {
        story: `The <b>second title</b> is not displayed on tablets. The <b>separator</b> between the actions areas is hidden on tablet portrait orientation. The separator between the actions and the user avatar is present in all views.`
      }
    }
  };

export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
    docs: {
      description: {
        story: `Phone specification depicts only deltas from the tablet specification. It is possible that actions will overflow on phones. In such cases, the overflowing actions are displayed in a dropdown menu. The <b>Product Name</b>, <b>Second Title</b>, and <b>Separator</b> between the actions areas are not displayed on phones.`
      }
    }
  };