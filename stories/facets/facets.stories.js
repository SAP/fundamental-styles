export default {
    title: 'Dev/Facets',
    parameters: {
        description: `Facets can be used as a standalone component or linked to another component. Facets are usually a part of the *Object Page* header content.
        Each facet adapts its size to the content and makes optimal use of the space without truncating the texts. If the facets do not all fit on one line, those on the right wrap to the line below. `,
        components: ['facet', 'form-label', 'object-status', 'title', 'text', 'object-number', 'icon', 'button', 'rating-indicator', 'avatar', 'link', 'bar', 'breadcrumb', 'tabs', 'popover', 'toolbar', 'margins', 'paddings', 'dynamic-page']
    }
};


export const combined = () =>
    `<div class="fd-facet-group" role="group">
        <div class="fd-facet fd-facet--image fd-margin-end--md">
            <span class="fd-avatar fd-avatar--l" aria-label="Avatar">
                <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
            </span>
        </div>
        <div class="fd-facet fd-facet--form fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="formFacetTitle1">
            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="formFacetTitle1">Technical Data</h1>
            <div class="fd-facet__container fd-margin-bottom--tiny">
                <label class="fd-form-label" for="form-value-05">Base unit:</label>
                <div class="fd-text" id="form-value-05">Each</div>
            </div>
            <div class="fd-facet__container fd-margin-bottom--tiny">
                <label class="fd-form-label" for="form-value-06">Length:</label>
                <div class="fd-text" id="form-value-06">23.24 Centimeter</div>
            </div>
            <div class="fd-facet__container fd-margin-bottom--tiny">
                <label class="fd-form-label" for="form-value-07">Width:</label>
                <div class="fd-text" id="form-value-07">86.1 Centimeter</div>
            </div>
            <div class="fd-facet__container">
                <label class="fd-form-label" for="form-value-08">Height:</label>
                <div class="fd-text" id="form-value-08">20.8 Centimeter</div>
            </div>
        </div>
        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle1">
            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle1">Status</h1>
            <span class="fd-object-status fd-object-status--positive fd-object-status--large fd-facet__object-status">
                <span class="fd-object-status__text fd-facet__object-status-text">Delivery</span>
            </span>
        </div>
        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle2">
            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle2">Delivery Time</h1>
            <span class="fd-object-status fd-object-status--large fd-object-status--critical fd-facet__object-status">
                <i class="fd-object-status__icon sap-icon--shipping-status fd-padding--none fd-margin-end--tiny" role="presentation"></i>
                <span class="fd-object-status__text fd-facet__object-status-text">12 days</span>
            </span>
        </div>
        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle3">
            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle3">Assembly Option </h1>
            <span class="fd-object-status fd-object-status--negative fd-object-status--large fd-facet__object-status">
                <span class="fd-object-status__text fd-facet__object-status-text">To be selected</span>
            </span>
        </div>
        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle4">
            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle4">Pricing </h1>
            <span class="fd-object-number fd-object-number--large fd-object-number--informative">
                <span class="fd-object-number__text">579</span><span class="fd-object-number__unit">EUR</span>
            </span>
        </div>

        <div class="fd-facet fd-facet--rating-indicator fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="ratingFacetTitle1">
            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="ratingFacetTitle1">Average User Rating</h1>
            <h2 class="fd-form-label">6 reviews</h2>
            <div class="fd-rating-indicator fd-facet__container">
                <div class="fd-rating-indicator__container fd-facet__rating-container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-1" name="rating-max-value-5" value="1">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-1"></label>

                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-2" name="rating-max-value-5" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-max-value-5-2"></label>

                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-3" name="rating-max-value-5" value="3">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-3"></label>

                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-4" name="rating-max-value-5" value="4">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-4"></label>

                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-5" name="rating-max-value-5" value="5">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-5"></label>
                </div>
                <span class="fd-rating-indicator__dynamic-text fd-facet__rating-dynamic-text fd-margin-top--tiny">(2 of 5)</span>
            </div>
        </div>
    </div>
`;

combined.storyName = 'Combination of facets';
combined.parameters = {
    docs: {
        storyDescription: 'Facet types(image, form, and key-value) used together.'
    }
};

export const keyValue = () =>
    `<div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle5">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle5"> Status </h1>
        <span class="fd-object-status fd-object-status--positive fd-object-status--large fd-facet__object-status">
            <span class="fd-object-status__text fd-facet__object-status-text">Delivery</span>
        </span>
    </div>
    <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle6">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle6"> Delivery Time </h1>
        <span class="fd-object-status fd-object-status--negative fd-object-status--large fd-facet__object-status">
            <span class="fd-object-status__text fd-facet__object-status-text">12 days</span>
        </span>
    </div>
    <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle7">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle7"> Assembly Option </h1>
        <span class="fd-object-status fd-object-status--critical fd-object-status--large fd-facet__object-status">
            <span class="fd-object-status__text fd-facet__object-status-text">To be selected</span>
        </span>
    </div>
    <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle8">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle8"> Pricing </h1>
        <span class="fd-object-number fd-object-number--large ">
            <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
        </span>
    </div>
`;

keyValue.storyName = 'Key-Value Facet';
keyValue.parameters = {
    docs: {
        storyDescription: `Key-Value facet is used to highlight important data or KPIs. It consists of a mandatory title
        and a text or number in a larger font size(**Object Status** or **Object Number**). The value can also have an icon to its left.
        `
    }
};

export const formFacet = () =>
    `<div class="fd-facet fd-facet--form fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="formFacetTitle2">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="formFacetTitle2"> Technical Data </h1>
        <div class="fd-facet__container fd-margin-bottom--tiny">
            <label class="fd-form-label" for="form-value-01">Base unit:</label>
            <div class="fd-text" id="form-value-01">Each</div>
        </div>
        <div class="fd-facet__container fd-margin-bottom--tiny">
            <label class="fd-form-label" for="form-value-02">Length:</label>
            <div class="fd-text" id="form-value-02">23.24 Centimeter</div>
        </div>
        <div class="fd-facet__container fd-margin-bottom--tiny">
            <label class="fd-form-label" for="form-value-03">Width:</label>
            <div class="fd-text" id="form-value-03">86.1 Centimeter</div>
        </div>
        <div class="fd-facet__container">
            <label class="fd-form-label" for="form-value-04">Height:</label>
            <div class="fd-text" id="form-value-04">20.8 Centimeter</div>
        </div>
    </div>
`;

formFacet.storyName = 'Form Facet';
formFacet.parameters = {
    docs: {
        storyDescription: `Form facet is used to display datasets. It consists of an optional title and label-value pair.
        Note that the labels can be icons, but need to have a text for accessibility purposes.
        `
    }
};

export const formFacetLink = () =>
    `<div class="fd-facet fd-facet--form fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="formFacetTitle3">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="formFacetTitle3">Contact Information</h1>
        <div class="fd-facet__container fd-margin-bottom--tiny">
            <i class="sap-icon--add-employee" role="presentation"></i>
            <div class="fd-text">
                <a href="#" class="fd-link fd-margin-begin--tiny" tabindex="0">John Miller</a>
            </div>
        </div>
        <div class="fd-facet__container fd-margin-bottom--tiny">
            <i class="sap-icon--outgoing-call" role="presentation"></i>
            <div class="fd-text">
                <a href="#" class="fd-link fd-margin-begin--tiny" tabindex="0">+1 234 5678</a>
            </div>
        </div>
        <div class="fd-facet__container fd-margin-bottom--tiny">
            <i class="sap-icon--email" role="presentation"></i>
            <div class="fd-text">
                <a href="#" class="fd-link fd-margin-begin--tiny" tabindex="0">john.miller@company.com</a>
            </div>
        </div>
        <div class="fd-facet__container">
            <label class="fd-form-label" for="form-value-09">Height:</label>
            <div class="fd-text" id="form-value-09">20.8 Centimeter</div>
        </div>
    </div>
`;

formFacetLink.storyName = 'Form Facet with Link';
formFacetLink.parameters = {
    docs: {
        storyDescription: 'Text in a form facet can also hold a link by using the Link component.'
    }
};

export const ratingIndicator = () =>
    `<div class="fd-facet fd-facet--rating-indicator fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="ratingFacetTitle2">
        <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="ratingFacetTitle2">Average User Rating</h1>
        <h2 class="fd-form-label">6 reviews</h2>
        <div class="fd-rating-indicator fd-facet__container">
            <div class="fd-rating-indicator__container fd-facet__rating-container" aria-label="Star Rating (out of 5)">
            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="1-rating-max-value-5-1" name="1-rating-max-value-5" value="1">
            <label class="fd-rating-indicator__label" for="1-rating-max-value-5-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="1-rating-max-value-5-2" name="1-rating-max-value-5" value="2">
            <label class="fd-rating-indicator__label" for="1-rating-max-value-5-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="1-rating-max-value-5-3" name="1-rating-max-value-5" value="3">
            <label class="fd-rating-indicator__label" for="1-rating-max-value-5-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="1-rating-max-value-5-4" name="1-rating-max-value-5" value="4" checked>
            <label class="fd-rating-indicator__label" for="1-rating-max-value-5-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="1-rating-max-value-5-5" name="1-rating-max-value-5" value="5">
            <label class="fd-rating-indicator__label" for="1-rating-max-value-5-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text fd-facet__rating-dynamic-text fd-margin-top--tiny">(4 of 5)</span>
        </div>
    </div>
`;
ratingIndicator.storyName = 'Rating Indicator Facet';
ratingIndicator.parameters = {
    docs: {
        storyDescription: `The Rating Indicator Facet displays a **Rating Indicator**. It consists of a mandatory title, optional supplementary texts 
        like a subtitle or a dynamic text, and the rating indicator.`
    }
};

export const imageFacet = () =>
    `<div class="fd-facet fd-facet--image fd-margin-end--md">
        <span class="fd-avatar fd-avatar--l" aria-label="Avatar">
            <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
        </span>
    </div>
`;

imageFacet.storyName = 'Image/Avatar Facet';
imageFacet.parameters = {
    docs: {
        storyDescription: 'Counter added to a tab'
    }
};


export const objectPage = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Desktop Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area" tabindex="0" aria-hidden="false" id="mainContainer">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                    </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--collapsed" tabindex="0" aria-hidden="true" id="mainImageContainer">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <div class="fd-facet fd-facet--image fd-facet--image-header-title fd-margin-end--sm">
                                <span class="fd-avatar fd-avatar--s" aria-label="Avatar">
                                    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                                </span>
                            </div>
                            <div class="fd-dynamic-page__title-subtitle-container">
                                <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
                            </div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvx6" aria-hidden="false" aria-label="Dynamic Page Desktop Header" >
                    <div class="fd-facet-group">
                        <div class="fd-facet fd-facet--image fd-margin-end--md">
                            <span class="fd-avatar fd-avatar--l" aria-label="Avatar">
                                <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--form fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="formFacetTitle4">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="formFacetTitle4">Technical Data</h1>
                            <div class="fd-facet__container fd-margin-bottom--tiny">
                                <label class="fd-form-label" for="form-value-10">Base unit:</label>
                                <div class="fd-text" id="form-value-10">Each</div>
                            </div>
                            <div class="fd-facet__container fd-margin-bottom--tiny">
                                <label class="fd-form-label" for="form-value-11">Length:</label>
                                <div class="fd-text" id="form-value-11">23.24 Centimeter</div>
                            </div>
                            <div class="fd-facet__container fd-margin-bottom--tiny">
                                <label class="fd-form-label" for="form-value-12">Width:</label>
                                <div class="fd-text" id="form-value-12">86.1 Centimeter</div>
                            </div>
                            <div class="fd-facet__container">
                                <label class="fd-form-label" for="form-value-13">Height:</label>
                                <div class="fd-text" id="form-value-13">20.8 Centimeter</div>
                            </div>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle9">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle9">Status</h1>
                            <span class="fd-object-status fd-object-status--positive fd-object-status--large fd-facet__object-status">
                                <span class="fd-object-status__text fd-facet__object-status-text">Delivery</span>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle10">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle10">Delivery Time</h1>
                            <span class="fd-object-status fd-object-status--large fd-object-status--critical fd-facet__object-status">
                                <i class="fd-object-status__icon sap-icon--shipping-status fd-padding--none fd-margin-end--tiny" role="presentation"></i>
                                <span class="fd-object-status__text fd-facet__object-status-text">12 days</span>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle11">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle11">Assembly Option </h1>
                            <span class="fd-object-status fd-object-status--negative fd-object-status--large fd-facet__object-status">
                                <span class="fd-object-status__text fd-facet__object-status-text">To be selected</span>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle12">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle12">Pricing </h1>
                            <span class="fd-object-number fd-object-number--large fd-object-number--informative">
                                <span class="fd-object-number__text">579</span><span class="fd-object-number__unit">EUR</span>
                            </span>
                        </div>
                    
                        <div class="fd-facet fd-facet--rating-indicator fd-margin-end--md  fd-margin-bottom--sm" role="group" aria-labelledby="ratingFacetTitle3">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="ratingFacetTitle3">Average User Rating</h1>
                            <h2 class="fd-form-label">6 reviews</h2>
                            <div class="fd-rating-indicator fd-facet__container">
                                <div class="fd-rating-indicator__container fd-facet__rating-container" aria-label="Star Rating (out of 5)">
                                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-1" name="2-rating-max-value-5" value="1">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-1"></label>
                    
                                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-2" name="2-rating-max-value-5" value="2" checked>
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-2"></label>
                    
                                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-3" name="2-rating-max-value-5" value="3">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-3"></label>
                    
                                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-4" name="2-rating-max-value-5" value="4">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-4"></label>
                    
                                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-5" name="2-rating-max-value-5" value="5">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-5"></label>
                                </div>
                                <span class="fd-rating-indicator__dynamic-text fd-facet__rating-dynamic-text fd-margin-top--tiny">(2 of 5)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                                aria-label="Collapse" 
                                aria-expanded="true" 
                                aria-hidden="false"
                                id="expandBtn"
                                aria-haspopup="true" 
                                onclick="
                                        toggleElAttrs('fddplhvx6', ['aria-hidden']);
                                        toggleElAttrs('expandBtn', ['aria-expanded']);
                                        toggleElAttrs('expandBtn', ['aria-hidden']);
                                        toggleElAttrs('collapseBtn', ['aria-expanded']);
                                        toggleElAttrs('collapseBtn', ['aria-hidden']);
                                        toggleElAttrs('mainContainer', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainer', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                                aria-label="Collapse" 
                                aria-expanded="false" 
                                aria-hidden="true"
                                id="collapseBtn"
                                aria-haspopup="true" 
                                onclick="
                                        toggleElAttrs('fddplhvx6', ['aria-hidden']);
                                        toggleElAttrs('collapseBtn', ['aria-expanded']);
                                        toggleElAttrs('collapseBtn', ['aria-hidden']);
                                        toggleElAttrs('expandBtn', ['aria-expanded']);
                                        toggleElAttrs('expandBtn', ['aria-hidden']);
                                        toggleElAttrs('mainContainer', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainer', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact" 
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="tab" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV557" href="#fuCwV557">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="tab" class="fd-tabs__item" aria-selected="true">
                        <a class="fd-tabs__link" aria-controls="AiWfz155" href="#AiWfz155">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV557" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz155" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
`;

objectPage.storyName = 'Facets in Object Page';
objectPage.parameters = {
    docs: {
        storyDescription: `All facet types used together in the context of a dynamic page. To have the image from the image facet appear next to the title, add the class 
        \`fd-facet\` and apply the modifiers \`fd-facet--image\` and \`fd-facet--image-header-title\` to the 
        \`fd-dynamic-page__title-container\` class. Note that the dynamic page title and subtitle should be placed in the \`fd-dynamic-page__title-subtitle-container\` class
        for proper alignment with the image.

The final structure of a collapsed header with image next to the title is shown below with changes marked in bold:

- <code class="docs-code">fd-dynamic-page\\_\\_title-area</code> The area holding title, KPI content, subtitle, and actions
  - <code class="docs-code">fd-dynamic-page\\_\\_main-container</code> Main container that holds Breadcrumb, image, title, title content and actions
    - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb-title-container</code> Container that holds breadcrumb, title, and title content
        - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb-container</code> Breadcrumbs Container, can contain toolbar container
            - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb</code> Breadcrumbs
        - **<code class="docs-code-grey">fd-dynamic-page\\_\\_title-container</code> The container for image, title, subtitle and toolbar**
            - **<code class="docs-code-grey">fd-facet fd-facet--image fd-facet--image-header-title</code> The image facet**
            - **<code class="docs-code-grey">fd-facet\\_\\_title-subtitle-container</code> The container for title and subtitle**
                - <code class="docs-code">fd-dynamic-page\\_\\_title</code> Dynamic page title
                - **<code class="docs-code-grey">fd-dynamic-page\\_\\_subtitle</code> Dynamic page subtitle**
            - <code class="docs-code">fd-dynamic-page\\_\\_title-content</code> The KPI content
            - <code class="docs-code">fd-dynamic-page\\_\\_toolbar-container</code> Container that holds toolbar-related actions
                - <code class="docs-code">fd-dynamic-page\\_\\_toolbar</code> Toolbar container for actions
                - <code class="docs-code">fd-dynamic-page\\_\\_toolbar--actions</code> Navigation actions
`
    }
};


export const objectPageMobile = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area" tabindex="0" aria-hidden="false" id="mainContainerMobile">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Men</a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Shoes</a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" href="#">Running Shoes</a></li>
                                    </ul>
                                </nav>
                                <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="fd-dynamic-page__title-container">
                                <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover fd-toolbar__overflow">
                                        <div class="fd-popover__control">
                                            <button
                                                id="maisodusakdnsmb"
                                                onclick="
                                                    toggleElAttrs('wgxzK85901', ['aria-hidden']);
                                                    toggleElAttrs('maisodusakdnsmb', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85901"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Header actions">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85901">
                                            <div class="fd-toolbar__overflow__body">
                                                <button class="fd-button fd-button--transparent">Accept</button>
                                                <button class="fd-button fd-button--transparent">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__subtitle"> Expanded header in mobile </div>
                </div>
                <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--collapsed" tabindex="0" aria-hidden="true" id="mainImageContainerMobile">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                                    </ul>
                                </nav>
                                <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="fd-dynamic-page__title-container">
                                <div class="fd-facet fd-facet--image fd-facet--image-header-title fd-margin-end--sm">
                                    <span class="fd-avatar fd-avatar--s" aria-label="Avatar">
                                        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                                    </span>
                                </div>
                                <div class="fd-dynamic-page__title-subtitle-container">
                                    <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                    <div class="fd-dynamic-page__subtitle"> Collapsed header in mobile </div>
                                </div>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover fd-toolbar__overflow">
                                        <div class="fd-popover__control">
                                            <button
                                                id="maisodusakdnsmag"
                                                onclick="
                                                    toggleElAttrs('wgxzK85911', ['aria-hidden']);
                                                    toggleElAttrs('maisodusakdnsmag', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85911"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Header actions">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85911">
                                            <div class="fd-toolbar__overflow__body">
                                                <button class="fd-button fd-button--transparent">Accept</button>
                                                <button class="fd-button fd-button--transparent">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-container">
                    <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvc7" aria-hidden="false" aria-label="Dynamic Page Mobile Header">
                        <div class="fd-facet-group">
                            <div class="fd-facet fd-facet--image fd-margin-end--sm fd-margin-bottom--tiny">
                                <span class="fd-avatar fd-avatar--l" aria-label="Avatar">
                                    <i class="fd-avatar__icon sap-icon--camera" role="presentation"></i>
                                </span>
                            </div>
                            
                            <div class="fd-facet fd-facet--key-value fd-margin-end--md  fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle13">
                                <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle13">Availablity</h1>
                                <span class="fd-object-status fd-object-status--positive fd-object-status--large fd-facet__object-status">
                                    <span class="fd-object-status__text fd-facet__object-status-text">In Stock</span>
                                </span>
                            </div>
                            <div class="fd-facet fd-facet--key-value fd-margin-end--md  fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle14">
                                <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle14">Price </h1>
                                <span class="fd-object-number fd-object-number--large fd-object-number--informative">
                                    <span class="fd-object-number__text">750</span><span class="fd-object-number__unit">EUR</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                        <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                            <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                                aria-label="Collapse header" 
                                aria-expanded="true" 
                                aria-hidden="false"
                                id="expandBtnMobile"
                                aria-haspopup="true" 
                                onclick="
                                        toggleElAttrs('fddplhvc7', ['aria-hidden']);
                                        toggleElAttrs('expandBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('expandBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('mainContainerMobile', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainerMobile', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-up"></i>
                            </button>
                            <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                                aria-label="Expand header" 
                                aria-expanded="false" 
                                aria-hidden="true"
                                id="collapseBtnMobile"
                                aria-haspopup="true" 
                                onclick="
                                        toggleElAttrs('fddplhvc7', ['aria-hidden']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('expandBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('expandBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('mainContainerMobile', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainerMobile', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                    </div>
                </div>
                <div class="fd-dynamic-page__tabs--overflow">
                    <ul class="fd-tabs fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                        <li class="fd-tabs__item" aria-controls="fuCwV559" role="tab">
                            <a class="fd-tabs__link" href="#fuCwV559">
                                <span class="fd-tabs__tag">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li class="fd-tabs__item" aria-selected="true" role="tab">
                            <a class="fd-tabs__link" aria-controls="AiWfz161" href="#AiWfz161">
                                <span class="fd-tabs__tag">
                                    Selected
                                </span>
                            </a>
                        </li>
                    </ul>  
                </div>
            </header>
            <div class="fd-dynamic-page__content">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV559" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz161" role="tabpanel">
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <footer class="fd-bar fd-bar--cozy fd-bar--floating-footer" style="position:relative">
                <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
`;
objectPageMobile.storyName = 'Facets in Object Page Mobile';

