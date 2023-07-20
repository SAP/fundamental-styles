import toolHeaderButtonExampleHtml from "./tool-header-button.example.html?raw";
import badgeButtonExampleHtml from "./badge-button.example.html?raw";
import nestedButtonExampleHtml from "./nested-button.example.html?raw";

import '../../../src/btp/button.scss';
import '../../../src/icon.scss';

export default {
  title: 'BTP/Button',
  parameters: {
    description: `This is an extension of the Button (Horizon) and is intended to be used within the controls and patterns for the BTP area. 
`,
    tags: ['btp']
  }
};
export const ToolHeaderButton = () => toolHeaderButtonExampleHtml;
ToolHeaderButton.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. <br>Use the <code>.fdb-button--tool-header</code> modifier class to the <code>.fdb-button</code> base class.`
    }
  }
};

export const BadgeOnButton = () => badgeButtonExampleHtml;
BadgeOnButton.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `The badge is a span element with class <code>.fdb-button__badge</code> with absolute position.`
    }
  }
};

export const NestedButton = () => nestedButtonExampleHtml;
NestedButton.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `For nested button use <code>.fdb-button--nested</code> modifier class with <code>.fdb-button</code> base class.`
    }
  }
};
