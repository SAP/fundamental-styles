import wrappingExampleHtml from "./wrapping.example.html?raw";
import elisionExampleHtml from "./elision.example.html?raw";
import visualLevelExampleHtml from "./visual-level.example.html?raw";
import levelsExampleHtml from "./levels.example.html?raw";
import '../../../src/title.scss';
export default {
  title: 'Components/Title',
  parameters: {
    description: `
A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.`,
    tags: ['f3']
  }
};
export const Levels = () => levelsExampleHtml;
Levels.storyName = 'Semantic Level';
Levels.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: 'There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.'
    }
  }
};
export const VisualLevel = () => visualLevelExampleHtml;
VisualLevel.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: 'If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance.'
    }
  }
};
export const Elision = () => elisionExampleHtml;
Elision.storyName = 'Text Elision';
Elision.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: 'By default the Title text overflow will be elided when longer than its container.'
    }
  }
};
export const Wrapping = () => wrappingExampleHtml;
Wrapping.storyName = 'Text Wrapping';
Wrapping.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'Add the `--wrap` modifier to cause the overflow text to wrap instead.'
    }
  }
};