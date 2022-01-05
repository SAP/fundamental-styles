export default {
    title: 'Experimental/Card',
    parameters: {
        components: ['fn-card', 'fn-avatar', 'icon', 'fn-info-label', 'fn-title', 'fn-button'],
        description: `
There are two types of cards - "container" cards (default), and "data" cards which are interactive / hoverable / focusable / selectable. Typically container cards will contain complex
controls within the card whereas the data cards are themselves what the user will be interacting with.
<br><br>
By default, cards only have a minimum width, so the developer should set width rules or keep the card in a container of appropriate width.
`
    }
};

export const Card = () => `
    <div class="fn-card" style="max-width: 40rem">
        <span class="fn-info-label fn-info-label--yellow">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">In Progress</span>
        </span>
        <h1 class="fn-card__title--large">Card - Large Title</h1>
        <span class="fn-card__description">Card Description</span>
        <div class="fn-card__container">
            <span class="fn-card__container-title">Types</span>
            <div class="fn-card__container-item">
                <div class="fn-avatar fn-avatar--xs fn-avatar--lime">
                    <div class="fn-avatar__icon">
                        <span class="sap-icon sap-icon--accept"></span>
                    </div>
                </div>
                <span>Standard</span>
            </div>
            <div class="fn-card__container-item">
                <div class="fn-avatar fn-avatar--xs fn-avatar--crimson">
                    <div class="fn-avatar__icon">
                        <span class="sap-icon sap-icon--cancel"></span>
                    </div>
                </div>
                <span>Catalog</span>
            </div>
        </div>
        <div class="fn-card__container">
            <span class="fn-card__container-title">Search Metadata</span>
            <div class="fn-card__container-item">
                <span>keywords, comma, separated</span>
            </div>
        </div>
        <div class="fn-card__container">
            <span class="fn-card__container-title">Contributors</span>
            <div class="fn-card__container-item">
                <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--indigo">
                    <div class="fn-avatar__initials">J</div>
                </div>
                <span>Jane Doe</span>
            </div>
            <div class="fn-card__container-item">
                <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--thumbnail">
                    <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
                </div>
                <span>John Doe</span>
            </div>
        </div>
    </div>
`;

Card.parameters = {
    docs: {
        storyDescription: 'This is a container (default) card component with an info label, title, description, and some card containers containing additional information.'
    }
};

export const DataCard = () => `
    <div class="fn-card fn-card--data" style="max-width: 40rem">
        <h1 class="fn-card__title">Data Card Title</h1>
        <span class="fn-card__subtitle">Card Subtitle</span>
    </div>
    <br/><br/>
    <div class="fn-card fn-card--data is-focus" style="max-width: 40rem">
        <div class="fn-card__title-icon-button-container">
            <h1 class="fn-card__title">Focused Data Card Title</h1>
            <button class="fn-button fn-button--ghost fn-card__title-button">
                <span class="fn-button__text">Button</span>
            </button>
        </div>
    </div>
    <br/><br/>
    <div class="fn-card fn-card--data is-selected" aria-selected="true" style="max-width: 40rem">
        <div class="fn-card__title-icon-button-container">
            <div class="fn-avatar fn-avatar--xs fn-avatar--circle fn-card__title-icon">
                <div class="fn-avatar__icon">
                    <span class="sap-icon sap-icon--accept"></span>
                </div>
            </div>
            <div class="fn-card__title-container">
                <h1 class="fn-card__title">Selected Data Card Title</h1>
                <span class="fn-card__subtitle">Card Subtitle</span>
            </div>
        </div>
    </div>
    <br/><br/>  
`;

DataCard.parameters = {
    docs: {
        storyDescription: 'This is a data card with hover, focus, and selected states.'
    }
};
