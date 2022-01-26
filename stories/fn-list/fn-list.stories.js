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
    <ul class="fn-list">
        <li class="fn-list__item" tabindex="0">
            <span>List Item 1</span>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span>List Item 2</span>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span>List Item 3</span>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span>List Item 4</span>
        </li>
    </ul>
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
