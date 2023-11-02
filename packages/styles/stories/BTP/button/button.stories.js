import toolHeaderButtonExampleHtml from './tool-header.example.html?raw';
import nestedButtonExampleHtml from './nested.example.html?raw';
import nestedSquareButtonExampleHtml from './nested-square.example.html?raw';
import description from './button.md?raw';

import '../../../src/icon.scss';
import '../../../src/button.scss';

export default {
    title: 'BTP/Button',
    parameters: {
        description,
        tags: ['a11y', 'btp', 'horizon-only']
    }
};

export const ToolHeaderButton = () => toolHeaderButtonExampleHtml;
ToolHeaderButton.parameters = {
    docs: {
        description: {
            story: `The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. It is intended to be used within the controls and patterns for the  <b>BTP</b> area. Use the <code>.fd-button--tool-header</code> modifier class for this type of button.
`
        }
    }
};

export const NestedButton = () => nestedButtonExampleHtml;
NestedButton.parameters = {
    docs: {
        description: {
            story: `The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area. Use the <code>.fd-button--nested</code> modifier class with the <code>.fd-button</code> base class for this type of button.
`
        }
    }
};

export const NestedSquareButton = () => nestedSquareButtonExampleHtml;
NestedSquareButton.parameters = {
    docs: {
        description: {
            story: `Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button.
`
        }
    }
};
