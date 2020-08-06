import '../../dist/avatar.css';
import '../../dist/badge.css';
import '../../dist/button.css';
import '../../dist/card.css';

export default {
    title: 'Components/Card',
    parameters: {
        description: `A Card is an app content container that represents a task or a topic on an overview page. 
It is a smart component that uses UI annotations to render its content. Cards can show application content from different sources side by side – without requiring the user to switch screens.
Cards can display different content:

- a chart
- a list
- a table
- informative text
- a combination of two elements

Card fields are not editable. A card can focus on a single object or topic, or on a group of objects. Cards sizes vary depanding on the layout.
Several cards can reference the same applicaton but the information should not be repeated. 
`,
        tags: ['development']
    }
};


export const cardAnatomy = () => `
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin-bottom: 1rem;">
        <div class="fd-card">
            <a class="fd-card__header">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-wrapper">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-card__counter">Counter</span>
                    </div>
                    <div class="fd-card__subtitle">Card Subtitle</div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <a class="fd-card__header">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-wrapper">
                        <div class="fd-card__title">Card Title With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <span class="fd-object-status fd-object-status--informative fd-card__counter">1 of 15</span>
                    </div>
                    <div class="fd-card__subtitle">Card Subtitle With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <a class="fd-card__header">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-wrapper">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-object-status--positive fd-card__counter">6 of 15</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <div class="fd-badge">Badge</div>
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-wrapper">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-object-status--critical fd-card__counter">3 of 15</span>
                    </div>
                    <div class="fd-card__subtitle">Card Subtitle</div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <div class="fd-badge">New</div>
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-wrapper">
                        <div class="fd-card__title">Card Title With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        <span class="fd-object-status fd-card__counter">1 of 15</span>
                    </div>
                    <div class="fd-card__subtitle">Card Subtitle With a Very Long Text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
    <div style="width: 300px; height: 400px">
        <div class="fd-card">
            <div class="fd-badge">Updated Content</div>
            <a class="fd-card__header">
                <div class="fd-card__header-text">
                    <div class="fd-card__title-wrapper">
                        <div class="fd-card__title">Card Title</div>
                        <span class="fd-object-status fd-card__counter">1 of 15</span>
                    </div>
                </div>
            </a>
            <div class="fd-card__content"></div>
        </div>
    </div>
</div>
`;

cardAnatomy.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `Card consists of two mandatory components: a clickable header area and a content area. A footer are is only used for actions in the quick view card.

Header:

- indicates what the card is about
- functions as a navigation area for opening the parent app
- consists of a mandatory title, an optional subtitle and a counter

 - Title (mandatory) - explains why this card exists and why a user might want to use it. Titles that exceed three lines are truncated with the ellipsis.
 - Subtitle (optional) - qualifies the title, offers an explanation, or shows a status. Its usage depends on the card type. Subtitles that exceed one line are truncated with the ellipsis.
 - Counter - indicates how many items are showing on the card in relation to the total number of relevant items. If all the relevant items are visible on the card, no counter is shown. There is also no counter if there is an issue loading a card, or no items are found for the filter criteria. The counter is right-aligned and is never truncated.

Content:
- reserved for application content.
`
    }
};





// TEMPLATE
export const primary = () => `
<div class="fd-card">Test</div>
`;

primary.storyName = 'Card title';
primary.parameters = {
    docs: {
        storyDescription: 'Card section description'
    }
};

