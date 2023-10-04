import desktopExampleHtml from './desktop.example.html?raw';
import tabletExampleHtml from './tablet.example.html?raw';
import mobileExampleHtml from './mobile.example.html?raw';

import '../../../src/icon.scss';
import '../../../src/link.scss';
import '../../../src/button.scss';
import '../../../src/toolbar.scss';
import '../../../src/title-bar.scss';
import '../../../src/breadcrumb.scss';
import '../../../src/segmented-button.scss';

export default {
    title: 'BTP/Title Bar',
    parameters: {
        description: `Title Bar is a composite control that uses a toolbar as a container and a title for labeling. It varies from the standard title control in its bold visual state and text size. In addition, the title bar comes in three variants:

- <b>Standard</b>&nbsp;- similar to the Fiori title but visually different
- <b>Title and Subtitle</b>&nbsp;- when an additional line of text is displayed below the title
- <b>Title and Info Icon</b>&nbsp;- when an additional icon is displayed right after the title
`,
        tags: ['btp', 'development', 'horizon-only']
    }
};
export const Desktop = () => desktopExampleHtml;
Desktop.parameters = {
    docs: {
      description: {
        story: ``
      }
    }
  };


export const Tablet = () => tabletExampleHtml;
Tablet.parameters = {
    docs: {
      description: {
        story: ``
      }
    }
  };

export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
    docs: {
      description: {
        story: ``
      }
    }
  };