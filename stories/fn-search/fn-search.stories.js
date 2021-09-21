export default {
    title: 'Experimental/Search',
    parameters: {
        description: '',
        components: ['fn-search', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        background: white;
        padding: 1.5rem;
    }

</style>
`;

export const search = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-search">
        <span class="sap-icon sap-icon--search fn-search__icon"></span>
        <input type="search" class="fn-search__input" placeholder="Search everything" />
        <button class="fn-search__button">
            <span class="sap-icon sap-icon--navigation-right-arrow"></span>
        </button>
        <button class="fn-search__clear">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
</div>
`;

search.storyName = 'Search';

search.parameters = {
    docs: {
        iframeHeight: 500
    }
};
