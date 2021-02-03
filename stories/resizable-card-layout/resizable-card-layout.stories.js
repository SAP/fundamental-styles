export default {
    title: 'Layouts/Resizable Card Layout',
    parameters: {
        description: `The resizable card layout is a layout for the overview page. It enables users to define a personalized card layout by changing not only the position of a card, but also its size, and thus how the card content is presented.
        
This layout gives users much greater flexibility in tailoring the overview page to their specific business needs. And it allows app teams to offer varying levels of detail for any given card. Whenever the size of a card changes, the content adapts automatically to show the most relevant information in the available space.

Cards can be resized vertically in rows of 1 rem and horizontally in steps of 20 rem (minimum width).
        `,
        tags: ['f3', 'theme', 'development'],
        components: [
            'resizable-card-layout',
            'button',
            'avatar',
            'badge',
            'card',
            'object-status',
            'numeric-content',
            'table',
            'checkbox',
            'list',
            'link',
            'icon'
        ]
    }
};

export const resizeCardHorizontalVerticalDirection = () =>
    `<div id="one" class="fd-resizable-card fd-resizable-card__resize--indication-border">
        <div class="fd-resizable-card__resize__handle--vertical"></div>
        <div class="fd-resizable-card__card">
            <div class="fd-card" role="region" aria-label="List Card Example 4">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Quick Links</div>
                            <span class="fd-object-status fd-card__counter">4 of 20</span>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <ul class="fd-list fd-list--no-border" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fd-resizable-card__icon-container">
                <div class="fd-resizable-card--icon fd-resizable-card__resize__cursor--both"></div>
            </div>
        </div>
        <div class="fd-resizable-card__resize__handle--horizontal"></div>
    </div>
`;

resizeCardHorizontalVerticalDirection.storyName = 'Card resize in horizontal and vertical directions';
resizeCardHorizontalVerticalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Cards can be resized in horizontal direction as well as vertical direction. Resize handle will expand on right border for horizontal resize and bottom border for vertical resize.
        `
    }
};

export const resizeCardHorizontalDirection = () =>
    `<div id="two" class="fd-resizable-card fd-resizable-card__resize--indication-border">
        <div class="fd-resizable-card__resize__handle--vertical"></div>
        <div class="fd-resizable-card__card">
            <div class="fd-card" role="region" aria-label="List Card Example 5">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Quick Links</div>
                            <span class="fd-object-status fd-card__counter">4 of 20</span>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <ul class="fd-list fd-list--no-border" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fd-resizable-card__icon-container">
                <div class="fd-resizable-card--icon fd-resizable-card__resize__cursor--both"></div>
            </div>
        </div>
        <div class="fd-resizable-card__resize--icon fd-resizable-card__resize__cursor--horizontal"></div>
    </div>
`;

resizeCardHorizontalDirection.storyName = 'Card resize in horizontal directions';
resizeCardHorizontalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Cards can also be resized in horizontal direction only. Resize handle will expand on right border.
        `
    }
};

export const resizeCardVerticalDirection = () =>
    `<div id="three" class="fd-resizable-card fd-resizable-card__resize--indication-border">
        <div class="fd-resizable-card__card">
            <div class="fd-card" role="region" aria-label="List Card Example 6">
                <a class="fd-card__header" tabindex="0">
                    <div class="fd-card__header-text">
                        <div class="fd-card__title-area">
                            <div class="fd-card__title">Quick Links</div>
                            <span class="fd-object-status fd-card__counter">4 of 20</span>
                        </div>
                    </div>
                </a>
                <div class="fd-card__content" role="group" aria-label="Card Content">
                    <ul class="fd-list fd-list--no-border" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                            <span class="fd-list__title">List item 1</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                            <span class="fd-list__title">List item 2</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                            <span class="fd-list__title">List item 3</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item">
                            <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                            <span class="fd-list__title">List item 4</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fd-resizable-card__icon-container">
                <div class="fd-resizable-card--icon fd-resizable-card__resize__cursor--both"></div>
            </div>
        </div>
        <div class="fd-resizable-card__resize__handle--horizontal"></div>
        <div class="fd-resizable-card__resize--icon fd-resizable-card__resize__cursor--vertical"></div>
    </div>
`;

resizeCardVerticalDirection.storyName = 'Card resize in vertical directions';
resizeCardVerticalDirection.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `Cards can be resized in vertical direction only. Resize handle will expand on bottom border.
        `
    }
};
