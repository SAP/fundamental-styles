import '../../dist/search-field.css';

export default {
    title: 'Components/Search Field',
    parameters: {
        description: 'Search Field Description goes here...',
        tags: ['f3', 'development', 'theme']
    }
};

export const example1 = () => `
<div class="fd-search-field">
    <div class="fd-search-field__container">
        <input type="text" class="fd-search-field__input" placeholder="Search">
        <button class="fd-search-field__button">X</button>
        <button class="fd-search-field__button">C</button>
    </div>
</div>
<br><br>
<div class="fd-search-field fd-search-field--compact">
    <div class="fd-search-field__container">
        <input type="text" class="fd-search-field__input" placeholder="Search">
        <button class="fd-search-field__button">X</button>
        <button class="fd-search-field__button">C</button>
    </div>
</div>
`;

example1.storyName = 'Example 1 Title';
example1.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Example 1 Description'
    }
};
