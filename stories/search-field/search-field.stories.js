import '../../dist/search-field.css';

export default {
    title: 'Components/Search Field',
    parameters: {
        description: 'Search Field Description goes here...',
        tags: ['f3', 'development', 'theme']
    }
};

export const example1 = () => `
<div class="fd-search-field"></div>
`;

example1.storyName = 'Example 1 Title';
example1.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Example 1 Description'
    }
};
