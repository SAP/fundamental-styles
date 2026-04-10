import floatingFooterExampleHtml from "./floating-footer.example.html?raw";
import footerExampleHtml from "./footer.example.html?raw";
import headerWithSubheaderExampleHtml from "./header-with-subheader.example.html?raw";
import subheaderExampleHtml from "./subheader.example.html?raw";
import headerExampleHtml from "./header.example.html?raw";
import responsiveExampleHtml from "./responsive.example.html?raw";
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
    description: `The Bar is a container primarily used for displaying titles, buttons, and input controls. It serves as the foundational design and functionality for page headers, footers, dialogs, and popovers that require a header and/or footer. A header can consist of just a title or a title with a navigation button (back or home) at the front. A subheader can also be included in the header design. Footers can be either fixed or floating. The buttons in the footer are intended for finalizing actions, following a primary-to-tertiary hierarchy, and should be positioned in the right area. <br><br>

**The bar component has two modes:**

- Compact (default, desktop)
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

| **Padding**     | &nbsp;&nbsp; **Amount** | **Modifier class** |
| :-------------- | ----------------: | :----------------------- | ---------------: |
| \`s / sm\`      | &nbsp;&nbsp; 1rem | \`fd-bar--page-s\` **or** \`fd-bar--page-sm\` |
| \`s / sm\`      | &nbsp;&nbsp; 1rem | \`fd-bar--home-page-s\` **or** \`fd-bar--home-page-sm\` |
| \`m_l / md_lg\` | &nbsp;&nbsp; 2rem | \`fd-bar--page-m_l\` **or** \`fd-bar--page-md_lg\` |
| \`m_l / md_lg\` | &nbsp;&nbsp; 2rem | \`fd-bar--home-page-m_l\` **or** \`fd-bar--home-page-md_lg\` |
| \`xl \`         | &nbsp;&nbsp; 3rem | \`fd-bar--page-xl\` |
| \`xl\`          | &nbsp;&nbsp; 3rem | \`fd-bar--home-page-xl\` |
        `,
    tags: []
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'The default bar contains a back button, page title, segmented button and product switch button.'
    }
  }
};

export const Responsive = () => responsiveExampleHtml;
Responsive.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'Responsive paddings can be added to the Bar component with the `fd-bar--responsive-paddings` modifier class. The value of the paddings will automatically change depending on the screen size.'
    }
  }
};
export const Header = () => headerExampleHtml;
Header.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'For Bar designed as a **Header** add the `fd-bar--header` modifier class to the `fd-bar` base class.'
    }
  }
};
export const Subheader = () => subheaderExampleHtml;
Subheader.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'For Bar designed as a **Subheader** add the `fd-bar--subheader` modifier class to the `fd-bar` base class.'
    }
  }
};
export const HeaderWithSubheader = () => headerWithSubheaderExampleHtml;
HeaderWithSubheader.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'When combining Header + Subheader underneath only the subheader will get the shadow and not the header. For this type of Bar design use the `fd-bar--header-with-subheader` modifier class. '
    }
  }
};
export const Footer = () => footerExampleHtml;
Footer.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'The **Footer** design is achieved by adding the `fd-bar--footer` modifier class to the `fd-bar` base class.'
    }
  }
};
export const FloatingFooter = () => floatingFooterExampleHtml;
FloatingFooter.parameters = {
  docs: {
    story: {
    },
    description: {
      story: 'The **Floating Footer** floats above the page at the bottom of the screen and is always visible when scrolling. For this type of Bar design add the `fd-bar--floating-footer` modifier class to the `fd-bar` base class.'
    }
  }
};