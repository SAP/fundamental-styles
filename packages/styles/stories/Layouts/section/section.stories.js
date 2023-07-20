import testingSectionWithHeadlinesExampleHtml from "./testing-section-with-headlines.example.html?raw";
import testingSimpleSectionExampleHtml from "./testing-simple-section.example.html?raw";
import sectionHeadersExampleHtml from "./section-headers.example.html?raw";
import sectionPanelsExampleHtml from "./section-panels.example.html?raw";
import sectionLayoutGridExampleHtml from "./section-layout-grid.example.html?raw";
import structureExampleHtml from "./structure.example.html?raw";
import '../../../src/section.scss';
import '../../../src/layout-grid.scss';
import '../../../src/layout-panel.scss';
import '../../../src/layout.scss';
export default {
  title: 'Layouts/Section',
  parameters: {
    description: `
The section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.

You will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.

Can hold two child types:
- \`.fd-layout-panel\`
- \`.fd-container\`, \`.fd-row\` and \`fd-col--[num]\` can be used to organize panels or content when a grid layout is not desired.`,
    tags: ['non-f3']
  }
};
export const Structure = () => structureExampleHtml;
Structure.storyName = 'Section Structure';
Structure.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};
export const SectionLayoutGrid = () => sectionLayoutGridExampleHtml;
SectionLayoutGrid.storyName = 'With Layout Grid';
SectionLayoutGrid.parameters = {
  docs: {
    description: {
      story: `
Shows an example with the grid span helper class.
This is most appropriate when displaying a collection of content in a linear order.`
    }
  }
};
export const SectionPanels = () => sectionPanelsExampleHtml;
SectionPanels.storyName = 'With Panels';
SectionPanels.parameters = {
  docs: {
    description: {
      story: `
Shows an alternate layout option using columns.
This may be more appropriate depending on the need to maintain source order and structure.`
    }
  }
};
export const SectionHeaders = () => sectionHeadersExampleHtml;
SectionHeaders.storyName = 'With Headers';
SectionHeaders.parameters = {
  docs: {
    description: {
      story: 'Header and title elements are available when necessary to label content groups.'
    }
  }
};
export const TestingSimpleSection = () => testingSimpleSectionExampleHtml;
TestingSimpleSection.parameters = {
  docs: {
    disable: true
  }
};
export const TestingSectionWithHeadlines = () => testingSectionWithHeadlinesExampleHtml;
TestingSectionWithHeadlines.parameters = {
  docs: {
    disable: true
  }
};