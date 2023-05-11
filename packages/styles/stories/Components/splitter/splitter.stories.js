import resizerAppearanceExampleHtml from "./resizer-appearance.example.html?raw";
import paginationExampleHtml from "./pagination.example.html?raw";
import mixedAndNestedExampleHtml from "./mixed-and-nested.example.html?raw";
import defaultExampleHtml from "./default.example.html?raw";
import '../../../src/splitter.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
export default {
  title: 'Components/Splitter',
  parameters: {
    description: `
The responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed on one screen or across different areas, which may also be off-canvas. This depends on the device class and the requirements and settings of the application.

**Note**: Resizing logic you should implement yourself.

Elements structure:
* \`fd-splitter\` Component
  * \`fd-splitter__pane-container\` Container for panes that has the same orientation.
  * \`fd-splitter__pane-container--vertical\` Modifier class for the container to set panes orientation to vertical (align in columns).
  * \`fd-splitter__pane-container--horizontal\` Modifier class for the container to set panes orientation to horizontal (align in rows).
    * \`fd-splitter__split-pane\` Pane that can be resized.
    * \`fd-splitter__resizer\` Resizer element.
    * \`fd-splitter__resizer--translucent\` Modifier class for the resizer to change its look.
    * \`fd-splitter__resizer--transparent\` Modifier class for the resizer to change its look.
      * \`fd-splitter__resizer-decoration-before\` Resizer decoration element.
      * \`fd-splitter__resizer-grip\` Resizer grip element.
      * \`fd-splitter__resizer-decoration-after\` Resizer decoration element.
    * \`fd-splitter__pagination\` Pagination element.
      * \`fd-splitter__pagination-item\` Pagination item element.
      * \`fd-splitter__pagination-item--active\` Modifier class for the active pagination item.
        * \`fd-splitter__pagination-item-dot\` Pagination item dot element.
`,
    tags: ['f3', 'theme']
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: `
Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.
`
    }
  }
};
export const MixedAndNested = () => mixedAndNestedExampleHtml;
MixedAndNested.parameters = {
  docs: {
    description: {
      story: `
Splitter may contain nested containers with different orientations.
`
    }
  }
};
export const Pagination = () => paginationExampleHtml;
Pagination.parameters = {
  docs: {
    description: {
      story: `
Not all the panes should be visible at the same time. Some of them might be just hidden or goes off-canvas at certain breakpoint.
Navigate into off-canvas panes possible via the navigation. Navigation should be placed in root container.
There should be only one or two root panes. In case there is only one on-canvas root pane navigation will be shown just below, having the full width.
Otherwise navigation will be shown below the right root pane.

**Note:** Navigation logic you should implement yourself.
`
    }
  }
};
export const ResizerAppearance = () => resizerAppearanceExampleHtml;
ResizerAppearance.parameters = {
  docs: {
    description: {
      story: `
While panes have transparent background resizer has its own by default
but it's possible to pick one from several options. To do that apply modifier class to the resizer element:
* \`fd-splitter__resizer--translucent\` Translucent appearance
* \`fd-splitter__resizer--transparent\` Transparent appearance
`
    }
  }
};