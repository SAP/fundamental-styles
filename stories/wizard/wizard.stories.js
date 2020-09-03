import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/wizard.css';

export default {
    title: 'Components/Wizard',
    parameters: {
        description: `Some description


### USE THE TREE IF:
- case 1
- case 2
- case 3

`,
        docs: { iframeHeight: 400 },
        tags: ['f3', 'theme', 'development']
    }
};

export const example1 = () => `
    <div class="fd-wizard">Wizard rocks!</div>
`;

example1.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `Example 1 <code class="docs-code">class*</code> bla bla bla
`
    }
};
