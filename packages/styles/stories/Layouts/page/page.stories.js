import responsivePageExampleHtml from "./responsive-page.example.html?raw";
import transparentPageExampleHtml from "./transparent-page.example.html?raw";
import basicPageExampleHtml from "./basic-page.example.html?raw";
import '../../../src/page.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
export default {
  title: 'Layouts/Page',
  parameters: {
    description: `
 - \`fd-page\`: standard (default)
 - \`fd-page--solid\`: solid
 - \`fd-page--list\`: list
 - \`fd-page--transparent:\` transparent


 ### CONTAINER HIERARCHY

 The elements used to construct a page are:

 - fd-page: The page-level wrapper
 - Header: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--header\` modifier classes
 - Header with SubHeader: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--header-with-subheader\` modifier classes
 - SubHeader: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--subheader\` modifier classes
 - Content: The page content is wrapped in \`fd-page__content container\`
 - Footer: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--footer\` modifier classes


 ### PAGE RESPONSIVE BEHAVIOUR

 The left and right spacings of the Bar and the Content could be adjusted according to the container width.

 - default: Bar component with \`fd-bar--page modifier\` class and \`fd-page__content\` class for the content
 - Size S: Bar component with additional \`fd-bar--page-s\` modifier class and \`fd-page__content--s\` modifier class for the content
 - Size M & L: Bar component with additional \`fd-bar--page-m_l\` modifier class and \`fd-page__content--m_l\` modifier class for the content
 - Size XL: Bar component with additional \`fd-bar--page-xl\` modifier class and \`fd-page__content--xl\` modifier class for the content
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const BasicPage = () => basicPageExampleHtml;
BasicPage.parameters = {
  docs: {
    iframeHeight: 500
  }
};
export const TransparentPage = () => transparentPageExampleHtml;
TransparentPage.parameters = {
  docs: {
    story: {
      iframeHeight: 550
    },
    description: {
      story: 'Page with Transparent Background Design, Header with SubHeader, and Responsive Behaviour - M_L'
    }
  }
};
export const ResponsivePage = () => responsivePageExampleHtml;
ResponsivePage.parameters = {
  docs: {
    story: {
      iframeHeight: 550
    },
    description: {
      story: 'Home page with List Background Design, Floating Footer and Responsive Behaviour - XL'
    }
  }
};