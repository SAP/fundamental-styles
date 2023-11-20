import anatomyExampleHtml from "./anatomy.example.html?raw";

import '../../../src/side-panel.scss';
import '../../../src/title-bar.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';

export default {
  title: 'BTP/Side Panel',
  parameters: {
    description: `<br><br>### Elements
- Title Bar / Header (mandatory): the Title Bar for the Side Panel.
- Open Sub Panel (optional):	opens the Sub Panel to show additional content.
- Expand / Collapse Side Panel (mandatory): expands or Collapses the Side Panel.
- Close Panel (mandatory):	closes the Side Panel completely.
- Content Area (mandatory):	main panel content is displayed here. Level 1: content area can be split by a Responsive Splitter (horizontal) content from either area can be dragged and dropped into either content area.
- Responsive Splitter (optional): 	a responsive splitter can be used to split content in the content area and can be moved up or down to show or hide content allowing users to view more or less content. Content can be dragged and dropped from content areas to perform actions.
- Pagination Bar (optional)
- Footer (optional): optional actions for the Side Panel can be placed in the footer. Footers are optional and not required.
- Close Sub Panel (optional): closes the Sub Panel
- Sub Panel (optional):	sub panel content is displayed here. Level 2: content area can be split by a Responsive Splitter (Horizontal) content from either area can be dragged and dropped into either content area.

`,
    tags: ['btp','horizon-only']
  }
};

export const Anatomy = () => anatomyExampleHtml;
Anatomy.parameters = {
  docs: {
    story: {
    },
    description: {
      story: ``
    }
  }
};
