export default {
    title: 'FN Components/Card',
    parameters: {
        components: ['fn-card', 'icon', 'fn-button', 'fn-avatar'],
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
        <h1 class="fn-card__title">Card Title</h1>
        <span class="fn-card__subtitle">Card Subtitle</span>
    </div>
`;

Card.parameters = {
    docs: {
        storyDescription: 'This is a container (default) card component.'
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
            <button class="fn-button fn-button--secondary fn-card__title-button">
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
