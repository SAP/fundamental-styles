import '../../dist/card.css';
import '../../dist/button.css';

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
<div class="fd-card">Test</div>
`;

cardAnatomy.parameters = {
    docs: {
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

