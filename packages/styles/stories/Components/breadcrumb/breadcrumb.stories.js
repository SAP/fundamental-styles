import overflowExampleHtml from "./overflow.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";
import '../../../src/popover.scss';
import '../../../src/list.scss';
import '../../../src/breadcrumb.scss';
import '../../../src/icon.scss';
import '../../../src/link.scss';
export default {
  title: 'Components/Breadcrumb',
  parameters: {
    description: `
The breadcrumb component is a type of navigation that indicates the position of a page within the application’s page hierarchy. Users can navigate backward by selecting the previous pages in the navigation path.

##Usage
**Use breadcrumb if:**

- You want to show secondary navigation on the object page
- You want to show navigation in a table
- You want to show navigation in charts
- Use a breadcrumb only when the drilldown scenario leads to related object pages: parent object page / child object page 1 / child object page 2 / child object page 3.

**Do not use breadcrumb if:**

- Your hierarchy contains only one level.

**Do not include these elements in your breadcrumb path:**

- Other floorplans, such as overview pages and list reports
- Cross-application navigation to other object pages
- Independent object pages, such as fact sheets
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Standard = () => standardExampleHtml;
Standard.parameters = {
  docs: {
    description: {
      story: 'The standard breadcrumb component displays several pages in text format separated by dividers, indicating a navigation path. Each page can be specifically selected to navigate to its corresponding page. It can be displayed by using the `fd-breadcrumb` class.'
    }
  }
};
export const Overflow = () => overflowExampleHtml;
Overflow.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: 'The overflow breadcrumb component displays a dropdown menu, followed by several pages in the navigation path. <br>Like the standard breadcrumb, each page can be selected to navigate to its corresponding page. This type is responsive and will collapse into a dropdown menu if there is insufficient horizontal space on the screen. <br>To display the overflow breadcrumb, include the `fd-popover` component in the first breadcrumb item within the element.'
    }
  }
};