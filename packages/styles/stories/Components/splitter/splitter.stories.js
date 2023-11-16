import paginationExampleHtml from "./pagination.example.html?raw";
import defaultExampleHtml from "./default.example.html?raw";
import splitPaneAnatomyExampleHtml from "./split-pane-anatomy.example.html?raw";
import gripAnatomyExampleHtml from "./grip-anatomy.example.html?raw";

import '../../../src/splitter.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
export default {
  title: 'Components/Splitter',
  parameters: {
    description: `The Responsive Splitter Layout structures complex application content into defined areas. The areas are resizable manually and programmatically by external triggers such as buttons or menu entries. The split panes and their parent containers are parts of the splitter and have properties that can be changed to meet the application’s needs.

**Note**: Resizing logic you should implement yourself.

Elements structure:
* \`fd-splitter\` Component
  * \`fd-splitter__pane-container\` Container for panes that has the same orientation.
    * \`fd-splitter__pane-container--vertical\` Modifier class for the container to set panes orientation to vertical (align in columns).
    * \`fd-splitter__pane-container--horizontal\` Modifier class for the container to set panes orientation to horizontal (align in rows).
  * \`fd-splitter__split-pane\`- An independent container that may interact with other panes or pane containers. Holds the Pagination Bar when off-canvas panes are available. The default background is transparent.
    *  \`fd-splitter__split-pane--translucent\`- Modifier class for translucent (\`var(--sapBackgroundColor)\`) background .
    *  \`fd-splitter__split-pane--solid\`- Modifier class for solid (\`var(--sapGroup_ContentBackground)\`) background.
  * \`fd-splitter__resizer\`- The component that allows resizing of panes and pane containers.
    * \`fd-splitter__resizer--translucent\`- Modifier class to apply transluent background to the resizer.
    * \`fd-splitter__resizer--solid\`- Modifier class to apply solid background to the resizer.
  * \`fd-splitter__resizer-decoration-before\` Resizer decoration element.
  * \`fd-splitter__resizer-grip\` Resizer grip element.
  * \`fd-splitter__resizer-decoration-after\` Resizer decoration element.
  * \`fd-splitter__pagination\` Pagination element.
  * \`fd-splitter__pagination-item\` Pagination item element.
    * \`fd-splitter__pagination-item--active\` Modifier class for the active pagination item.
  * \`fd-splitter__pagination-item-dot\` Pagination item dot element.
`,
    tags: ['btp']
  }
};
export const SplitPaneAnatomy = () => splitPaneAnatomyExampleHtml;
SplitPaneAnatomy.parameters = {
  docs: {
    description: {
      story: `Split Pane is an independent container that may interact with other panes or pane containers. It holds the Pagination Bar when off-canvas panes are available. The default background is transparent. <br>
      For translucent background use the \`fd-splitter__split-pane--translucent\` modifier class. <br>For solid background use the \`fd-splitter__split-pane--solid\` modifier class.`
    }
  }
};

export const GripAnatomy = () => gripAnatomyExampleHtml;
GripAnatomy.parameters = {
  docs: {
    description: {
      story: `Grip is the component that allows resizing of panes and pane containers. By default, its background is transparent. To apply <code>translucent</code> background to it use the <code>fd-splitter__resizer--translucent</code> modifier class to the <code>fd-splitter__resizer</code> base class. For <code>solid</code> background use <code>fd-splitter__resizer--solid</code>.`
    }
  }
};

export const PaginationBarAnatomy = () => paginationExampleHtml;
PaginationBarAnatomy.parameters = {
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



export const Examples = () => defaultExampleHtml;
Examples.parameters = {
  docs: {
    description: {
      story: `
Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.
`
    }
  }
};