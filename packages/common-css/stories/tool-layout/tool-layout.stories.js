import desktopExampleHtml from './desktop.example.html?raw';
import tabletExampleHtml from './tablet.example.html?raw';
import mobileExampleHtml from './mobile.example.html?raw';
import stickyExampleHtml from './sticky.example.html?raw';

import '../../src/sap-tool-layout.scss';

export default {
  title: 'Tool Layout',
  parameters: {
    description: `The Tool Layout is an essential part of most BTP tools. The layout combines the Tool Header and the Navigation components in one consistent structure. In addition, it provides necessary interaction between the two components out of the box.
## Anatomy
- <b>Tool Header </b>- always present and is a top-aligned UI element that contains global actions and controls navigation
- <b>Navigation </b>- side navigation in all of its variants (expanded, snapped)
- <b>Content </b>- an empty container area that can hold any content.

## Structure
- <code>.sap-tool-layout</code>
  - <code>.sap-tool-layout--tablet</code>&nbsp; - modifier class for tablets
  - <code>.sap-tool-layout--phone</code>&nbsp; - modifier class for phones
  - <code>.sap-tool-layout--sticky</code>&nbsp; - modifier class for positioning the header on the top
  - <code>.sap-tool-layout--horizontal-navigation</code>&nbsp; - modifier class for layout with Horizontal Navigation
- <code>.sap-tool-layout__container</code>
- <code>.sap-tool-layout__header-container</code>&nbsp; - wraping element around the Tool Header
- <code>.sap-tool-layout__navigation-container</code>&nbsp; - wraping element around the Navigation (all its variants)
  - <code>.sap-tool-layout__navigation-container--horizontal</code>&nbsp; - modifier class for when the navigation is horizontal
- <code>.sap-tool-layout__content-container</code>&nbsp; - wraping element around the page content. By default, the background of the content area is <code>var(--sapBackgroundColor)</code>
  - <code>.sap-tool-layout__content-container--transparent</code>&nbsp; - modifier class to apply transparent background to the content area.
  - <code>.sap-tool-layout__content-container--list</code>&nbsp; - modifier class to apply list <code>var(--sapGroup_ContentBackground)</code> background to the content area.
`,
    tags: ['btp', 'development', 'horizon-only']
  }
};
export const Desktop = () => desktopExampleHtml;
Desktop.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};

export const Sticky = () => stickyExampleHtml;
Sticky.parameters = {
  docs: {
    description: {
      story: `The <code>fd-tool-layout--sticky</code> modifier class will position the whole layout absolutely with the header container always on top. The navigation and content containers receive the scroll overflow.`
    }
  }
};


export const Tablet = () => tabletExampleHtml;
Tablet.parameters = {
  docs: {
    description: {
      story: `Apply the <code>sap-tool-layout--tablet</code> modifier class for tablet devices.`
    }
  }
};

export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: `Apply the <code>sap-tool-layout--phone</code> modifier class for mobile devices.`
    }
  }
};