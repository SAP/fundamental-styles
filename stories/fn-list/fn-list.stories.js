export default {
    title: 'Experimental/List',
    parameters: {
        description: `
        
**Modifier classes for list style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| default &nbsp;&nbsp;&nbsp;&nbsp;        | \`none\`                  |
| emphasized &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-list--emphasized\` |

        `,
        components: ['fn-list', 'icon']
    }
};

const localStyles = `
<style>

</style>
`;

export const Primary = () => `${localStyles}

`;

Primary.storyName = 'List';

Primary.parameters = {
    docs: {
        description: {
            story: 'List'
        }
    }
};
