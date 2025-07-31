import '../../src/sap-title.scss';
import '../../src/sap-colors.scss';

import withPageTitleExampleHtml from "./with-page-title.example.html?raw";
import noPageTitleExampleHtml from "./no-page-title.example.html?raw";
import noInlinePaddingExampleHtml from "./no-inline-padding.example.html?raw";


export default {
    title: 'Titles',
    parameters: {
        description: `Page Title, Section Title, and Subsection Title can be used as building blocks for home pages. These elements follow a responsive spacing system for horizontal padding, which can be disabled using the <code>.no-inline-padding</code> modifier class.

Typically, there is only one <b>Page Title</b> (optional), displayed in the content area above the group name. The top padding of a <b>Section Title</b> varies depending on whether a <b>Page Title</b> is present. Additionally, the vertical padding of a <b>Section Title</b> depends on its position — whether it is the first <b>Section Title</b> on the page or situated between sections. <br><b>Subsection Title</b> has no padding-top, but if there's no <b>Section Title</b>, than <b>Subsection Title</b> adds 1rem padding-top.`,
    }
};
export const Home = () => withPageTitleExampleHtml;
Home.storyName = 'Page Title, Section Title and Subsection Title';
Home.parameters = {
  docs: {
    description: {
      story: `The first <b>Section Title</b> under the <b>Page Title</b> has a 0.5rem top padding. Between sections, the top padding is 3rem for XL, L, and M screens, and 2rem for S screens.<br><br><b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>`
    }
  }
};

export const NoPageTitle = () => noPageTitleExampleHtml;
NoPageTitle.storyName = 'Section Title and Subsection Title (no Page Title)';
NoPageTitle.parameters = {
  docs: {
    description: {
      story: `When there is no <b>Page Title</b>, the first <b>Section Title</b> has a top padding of 1.5rem. The padding between sections remains the same: 3rem for XL, L, and M screens, and 2rem for S screens. <br><br><b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>`
    }
  }
};

export const NoInlinePadding = () => noInlinePaddingExampleHtml;
NoInlinePadding.storyName = '';
NoInlinePadding.parameters = {
  docs: {
    description: {
      story: `To disable the responsive horizontal (inline) paddings add <code>.no-inline-padding</code> on the title element.`
    }
  }
};
