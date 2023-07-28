import objectCardExampleHtml from "./object-card.example.html?raw";
import tableCardExampleHtml from "./table-card.example.html?raw";
import listCardExampleHtml from "./list-card.example.html?raw";
import analyticalCardExampleHtml from "./analytical-card.example.html?raw";
import cardAnatomyExampleHtml from "./card-anatomy.example.html?raw";
import '../../../src/button.scss';
import '../../../src/avatar.scss';
import '../../../src/badge.scss';
import '../../../src/card.scss';
import '../../../src/object-status.scss';
import '../../../src/numeric-content.scss';
import '../../../src/table.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/link.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Card',
  parameters: {
    description: `A card is content container that represents a task or a topic on the overview page of an application. It is essentially a smart component that uses UI annotations to render its content. Cards can display read-only content from different sources side by side – without requiring the user to switch screens.

**Cards can display different types of content, such as:**

- a chart
- a list
- a table
- an object or group of objects
- informative text
- a combination of two elements

Card sizes vary depending on the layout, and they are not editable. A card can focus on either a single object or topic, or on a group of objects. Several cards can reference the same application, but the information should be distinct from one card to another.

##Card anatomy

A card is a container that consists of two main components: a selectable header area (with a title) and a content area. The width and the height of a card depends on its parent, and its header can be placed either above or below the content.

Components | Description
:--------- |:-----------
Header (optional) | The header displays a mandatory title, indicating what the card is about and functions as a navigation control that directs the user to the parent app.
Content (main) | The content area is reserved for application content.
Title | A title is mandatory to explain what content is being displayed to the user.
Avatar (optional) | An avatar can be displayed in a size S (3rem).
Subtitle (optional) | The subtitle provides additional context to the title or displays a status. Its usage depends on the card type. Subtitles that exceed one line are truncated with an ellipsis.
Counter (optional) | The counter indicates how many items are showing on the card in relation to the total number of relevant items. If all the relevant items are visible on the card, no counter is shown. There is also no counter if there is an issue loading a card, or if no items are found in the filter criteria. The counter is right-aligned and is never truncated.
Footer (optional) | The footer displays a list of actions that can be performed on the card. When link is too long, or there is no more place for actions, overflow button should appear.
`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const CardAnatomy = () => cardAnatomyExampleHtml;
CardAnatomy.storyName = 'Standard card';
CardAnatomy.parameters = {
  docs: {
   description: {
      story: `The standard card displays a header area with a title and a content area, as well as any other components mentioned in the card anatomy section.
`
    }
  }
};
export const AnalyticalCard = () => analyticalCardExampleHtml;
AnalyticalCard.storyName = 'Analytical card';
AnalyticalCard.parameters = {
  docs: {
   description: {
      story: `The analytical card is used for data visualization. It can display a KPI header and various chart types in the content. The only difference between a KPI header and a standard header is that the former requires a subtitle, a KPI area and can display an optional second subtitle. To display an analytical card, add the \`fd-card--analytical\` modifier class to the main element.

####Chart types
**The content area of an analytical card can display 8 different chart types:**

- Line
- Bubble
- Column
- Stacked column
- Vertical bullet
- Donut
- Combined
- Scatter plot

`
    }
  }
};
export const ListCard = () => listCardExampleHtml;
ListCard.storyName = 'List card';
ListCard.parameters = {
  docs: {
   description: {
      story: `A card can display various types of lists. All components placed inside should behave natively.
            For this kind of card it is not recommended to keep header interactive, or navigable.
            Such a header can be achieved by adding \`fd-card__header--non-interactive\` modifier class.
        `
    }
  }
};
export const TableCard = () => tableCardExampleHtml;
TableCard.storyName = 'Table card';
TableCard.parameters = {
  docs: {
   description: {
      story: 'Cards can display tables within the content area. To display a table card, add the `fd-card--table` modifier class to the main element.'
    }
  }
};
export const ObjectCard = () => objectCardExampleHtml;
ObjectCard.storyName = 'Object card';
ObjectCard.parameters = {
  docs: {
   description: {
      story: `The object card can display a single object or a group of objects. Contrary to other cards, object card has 1rem padding on all sides of the content area. To display an object card, add the \`fd-card--object\` modifier class to the main element.

**Within the content area, there are several components:**

Component (class) |	Description
:---------------- | :-----------
\`fd-card__content-container\` | a wrapper for the content sections. By default, the content is displayed in one column. To display the content in two columns, add the \`fd-card__content-container--horizontal\` modifier class.
\`fd-card__content-section\` | a content section. A section contains a group title and one or multiple groups. The min-width of the section is 12rem and it can reach a maximum of 24rem.
\`fd-card__content-title-container\` | a container for the title.
\`fd-card__content-group\` | a container for the content group. It can also contain an avatar with size XS, a group label and a group value.
\`fd-card__content-label-container\` | a container for the label of the group.
\`fd-card__content-group-container\` | a container for the value of the group.
`
    }
  }
};