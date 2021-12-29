export default {
    title: 'Experimental/Card',
    parameters: {
        description: `
        `,
        components: ['fn-card', 'fn-avatar', 'fn-info-label', 'fn-title']
    }
};

export const card = () => `
    <div class="fn-card">
        <h1 class="fn-card__title">Card</h1>
        <span class="fn-card__description">Control Description</span>
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

card.storyName = 'Card';
card.parameters = {
    docs: {
        iframeHeight: 500
    }
};
