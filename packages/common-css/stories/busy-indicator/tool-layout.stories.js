import desktopExampleHtml from './desktop.example.html?raw';

import '../../src/sap-busy-indicator.scss';

export default {
    title: 'Busy Indicator in a Dialog',
    parameters: {
        description: `
        test
`,
        tags: ['f3', 'development']
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
