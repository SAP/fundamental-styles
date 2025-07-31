import '../../src/sap-display.scss';
import '../../src/sap-sr-only.scss';
import '../../../styles/src/icon.scss';
import description from './display.story.description.html?raw';
import displayHelperClassExampleHtml from './display-helper-class.example.html?raw';
import screenReaderOnlyExampleHtml from './screen-reader-only.example.html?raw';

export default {
  title: 'Display',
  parameters: {
    description
  }
};
const localStyles = `
<style>
    .sap-docs-container section{
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }
    .sap-docs-container div {
        background: #69ADF8;
        width: 4rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin: 0.1rem;
    }
</style>
`;
export const DisplayHelperClass = () => `${localStyles}${displayHelperClassExampleHtml}`;
DisplayHelperClass.storyName = 'Display';
DisplayHelperClass.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const ScreenReaderOnly = () => `${localStyles}${screenReaderOnlyExampleHtml}`;
ScreenReaderOnly.storyName = 'Screen-reader-only elements';
ScreenReaderOnly.parameters = {
  docs: {
    description: {
      story: `The <code>.sap-sr-only</code> class will hide the element visually without hiding it from screen readers. <br><br><b>SCSS Mixin: </b><code>@include sap-sr-only();</code>
        `
    }
  }
};
