import '../../dist/carousel.css';

export default {
    title: 'Components/Carousel',
    parameters: {
        description: `
`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};


export const carousel = () => `
<div style="display: flex; justify-content: space-between;">
    <div class="fd-carousel" style="margin: 3rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
        <div class="fd-carousel__page-indicator">
            <button class="fd-button fd-carousel__button sap-icon--slim-arrow-left"></button>
            <div class="fd-carousel__page-indicator-container">
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot fd-carousel__dot--active"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
            </div>
            <button class="fd-button fd-carousel__button sap-icon--slim-arrow-right"></button>
        </div>
    </div>

    <div class="fd-carousel" style="margin: 3rem;">
        <div class="fd-carousel__content" style="min-height: 15.5rem;"></div>
        <div class="fd-carousel__page-indicator">
            <button class="fd-button fd-carousel__button sap-icon--slim-arrow-left"></button>
            <div class="fd-carousel__page-indicator-container">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
            <button class="fd-button fd-carousel__button sap-icon--slim-arrow-right"></button>
        </div>
    </div>
</div>

<div style="display: flex; justify-content: space-between;">
    <div class="fd-carousel" style="margin: 3rem;">
        <div class="fd-carousel__page-indicator">
            <div class="fd-carousel__page-indicator-container">
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot fd-carousel__dot--active"></div>
                <div class="fd-carousel__dot"></div>
                <div class="fd-carousel__dot"></div>
            </div>
        </div>
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--left sap-icon--slim-arrow-left"></button>
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--right  sap-icon--slim-arrow-right"></button>
        </div>
    </div>

    <div class="fd-carousel" style="margin: 3rem;">
        <div class="fd-carousel__page-indicator">
            <div class="fd-carousel__page-indicator-container">
                <div class="fd-carousel__text">1 of 4</div>
            </div>
        </div>
        <div class="fd-carousel__content" style="min-height: 15.5rem;">
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--left sap-icon--slim-arrow-left"></button>
            <button 
                class="fd-button fd-carousel__button fd-carousel__button--right  sap-icon--slim-arrow-right"></button>
        </div>
    </div>
</div>
`;

carousel.storyName = '';
carousel.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `
`
    }
};
