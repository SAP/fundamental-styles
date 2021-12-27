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
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        background: white;
        padding: 1rem;
        align-items: center;
    }

</style>
`;

export const search = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-search">
        <span class="sap-icon sap-icon--search"></span>
        <input type="search" class="fn-search__input" placeholder="Search everything" />
        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-search">
        <span class="sap-icon sap-icon--search"></span>
        <input type="search" class="fn-search__input is-hover" placeholder="Search everything" />
        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-search">
        <span class="sap-icon sap-icon--search"></span>
        <input type="search" class="fn-search__input is-active" placeholder="Search everything" />
        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-search">
        <span class="sap-icon sap-icon--search"></span>
        <input type="search" class="fn-search__input is-focus" placeholder="Search everything" />
        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-search is-disabled">
        <span class="sap-icon sap-icon--search"></span>
        <input type="search" class="fn-search__input" placeholder="Search everything" disabled />
        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
    </div>
</div>
`;

search.storyName = 'Search';

search.parameters = {
    docs: {
        iframeHeight: 500
    }
};
