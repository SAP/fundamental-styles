import 'fn/src/fn-title.scss';

export default {
  title: 'Title',
  parameters: {
    description: `
A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.`,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }
</style>
`;
export const Levels = () => `${localStyles}
<h1 class="fn-title fn-title--h1">Title Heading 1</h1>
<br>
<h2 class="fn-title fn-title--h2">Title Heading 2</h2>
<br>
<h3 class="fn-title fn-title--h3">Title Heading 3</h3>
<br>
<h4 class="fn-title fn-title--h4">Title Heading 4</h4>
<br>
<h5 class="fn-title fn-title--h5">Title Heading 5</h5>
<br>
<h6 class="fn-title fn-title--h6">Title Heading 6</h6>
`;
Levels.storyName = 'Semantic Level';
Levels.parameters = {
  docs: {
    iframeHeight: 250,
    description: {
      story: 'There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.'
    }
  }
};
export const VisualLevel = () => `${localStyles}
<h1 class="fn-title fn-title--h6">Title Heading 1</h1>
<br>
<h2 class="fn-title fn-title--h5">Title Heading 2</h2>
<br>
<h3 class="fn-title fn-title--h4">Title Heading 3</h3>
<br>
<h4 class="fn-title fn-title--h3">Title Heading 4</h4>
<br>
<h5 class="fn-title fn-title--h2">Title Heading 5</h5>
<br>
<h6 class="fn-title fn-title--h1">Title Heading 6</h6>
`;
VisualLevel.parameters = {
  docs: {
    iframeHeight: 250,
    description: {
      story: 'If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance.'
    }
  }
};
export const Wrapping = () => `${localStyles}
<div style="width: 600px">
    <h1 class="fn-title fn-title--h1 fn-title--wrap">"Insanity: doing the same thing over and over again and expecting different results." - Albert Einstein</h1>
    <br><br><br>
    <h2 class="fn-title fn-title--h2 fn-title--wrap">"Insanity: doing the same thing over and over again and expecting different results." - Albert Einstein</h2>
    <br><br><br>
    <h3 class="fn-title fn-title--h3 fn-title--wrap">"Insanity: doing the same thing over and over again and expecting different results." - Albert Einstein</h3>
    <br><br><br>
    <h4 class="fn-title fn-title--h4 fn-title--wrap">"Insanity: doing the same thing over and over again and expecting different results." - Albert Einstein</h4>
    <br><br><br>
    <h5 class="fn-title fn-title--h5 fn-title--wrap">"Insanity: doing the same thing over and over again and expecting different results." - Albert Einstein</h5>
    <br><br><br>
    <h6 class="fn-title fn-title--h6 fn-title--wrap">"Insanity: doing the same thing over and over again and expecting different results." - Albert Einstein</h6>
</div>
`;
Wrapping.storyName = 'Text Wrapping';
Wrapping.parameters = {
  docs: {
    iframeHeight: 300,
    description: {
      story: 'Add the `--wrap` modifier to cause the overflow text to wrap instead.'
    }
  }
};
