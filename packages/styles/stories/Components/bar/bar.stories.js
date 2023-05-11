import floatingFooterExampleHtml from "./floating-footer.example.html?raw";
import footerExampleHtml from "./footer.example.html?raw";
import headerWithSubheaderExampleHtml from "./header-with-subheader.example.html?raw";
import subheaderExampleHtml from "./subheader.example.html?raw";
import headerExampleHtml from "./header.example.html?raw";
import responsiveExampleHtml from "./responsive.example.html?raw";
import cozyExampleHtml from "./cozy.example.html?raw";
import defaultExampleHtml from "./default.example.html?raw";
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/input.scss';
import '../../../src/segmented-button.scss';
import '../../../src/avatar.scss';
import '../../../src/bar.scss';
import '../../../src/title.scss';
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

## Paddings

Modifier classes are available to adjust the paddings of the bar when it is being used in the \`fd-page\`. Alternatively the \`--responsive-paddings\` modifier may be used to apply this styles automatically.

| **Padding** | &nbsp;&nbsp; **Amount** | **Modifier class** |
| :--------- | ----------: | :----------------------- | ---------------: |
| S | &nbsp;&nbsp; 1rem | \`--page-s\` |
| S | &nbsp;&nbsp; 1rem | \`--home-page-s\` |
| M_L | &nbsp;&nbsp; 2rem | \`--page-m_l\` |
| M_L | &nbsp;&nbsp; 2rem | \`--home-page-m_l\` |
| XL | &nbsp;&nbsp; 3rem | \`--page-xl\` |
| XL | &nbsp;&nbsp; 3rem | \`--home-page-xl\` |
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: 'The default bar contains a back button, page title, segmented button and product switch button. It can be displayed by using the `fd-bar` class, and is responsive to desktop screen sizes. The default bar is in compact mode.'
    }
  }
};
export const Cozy = () => cozyExampleHtml;
Cozy.parameters = {
  docs: {
    story: {
      iframeHeight: 100
    },
    description: {
      story: 'The cozy bar contains a back button, icon buttons, segmented button and product switch button. It is responsive to tablet and mobile screen sizes. To apply cozy mode, add the `--cozy` modifier class to the container element.'
    }
  }
};
export const Responsive = () => responsiveExampleHtml;
Responsive.parameters = {
  docs: {
    story: {
      iframeHeight: 100
    },
    description: {
      story: 'The bar can be made responsive with the `--responsive-paddings` modifier class. The paddings will automatically change with the screen size.'
    }
  }
};
export const Header = () => headerExampleHtml;
Header.parameters = {
  docs: {
    story: {
      iframeHeight: 350
    },
    description: {
      story: 'The header bar contains actions that impact the entire page. It can be displayed by adding the `--header` modifier class to the container element.'
    }
  }
};
export const Subheader = () => subheaderExampleHtml;
Subheader.parameters = {
  docs: {
    story: {
      iframeHeight: 450
    },
    description: {
      story: 'To change the header bar into a subheader, add the `--subheader` modifier class to the container element.'
    }
  }
};
export const HeaderWithSubheader = () => headerWithSubheaderExampleHtml;
HeaderWithSubheader.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: 'To add a subheader under a header bar, the container element should have the `--header-with-subheader` modifier class, which will remove the element’s box shadow.'
    }
  }
};
export const Footer = () => footerExampleHtml;
Footer.parameters = {
  docs: {
    story: {
      iframeHeight: 150
    },
    description: {
      story: 'The footer bar should display only closing and finalizing action buttons that impact the entire page such as *Save* or *Cancel*. It can be displayed by adding the `--footer` modifier class to the container element.'
    }
  }
};
export const FloatingFooter = () => floatingFooterExampleHtml;
FloatingFooter.parameters = {
  docs: {
    story: {
      iframeHeight: 150
    },
    description: {
      story: 'The floating footer bar should also display only finalizing action buttons that impact the entire page. This type floats above the page at the bottom of the screen and is always visible when scrolling. It can be displayed by adding the `--floating-footer` modifier class to the container element.'
    }
  }
};