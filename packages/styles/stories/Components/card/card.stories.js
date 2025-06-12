import objectCardExampleHtml from "./object-card.example.html?raw";
import tableCardExampleHtml from "./table-card.example.html?raw";
import listCardExampleHtml from "./list-card.example.html?raw";
import analyticalCardExampleHtml from "./analytical-card.example.html?raw";
import cardAnatomyExampleHtml from "./card-anatomy.example.html?raw";
import extendedHeaderExampleHtml from "./extended-header.example.html?raw";
import numericHeaderExampleHtml from "./numeric-header.example.html?raw";
import cardEmptyStateExampleHtml from "./card-empty-state.example.html?raw";
import cardNonInteractiveExampleHtml from "./card-non-interactive.example.html?raw";
import cardNonInteractiveHeaderExampleHtml from "./card-non-interactive-header.example.html?raw";
import cardInteractiveButtonExampleHtml from "./card-button-interactive.example.html?raw";
import cardInteractiveListitemExampleHtml from "./card-listitem-interactive.example.html?raw";

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
import '../../../src/form-label.scss';
import '../../../src/rating-indicator.scss';
import '../../../src/illustrated-message.scss';
export default {
  title: 'Components/Card/Card',
  parameters: {
    description: `The Card is a container that consists of a <b>Header</b>, <b>Extended Header</b>, <b>Numeric Content</b>, <b>Content</b> and <b>Footer area</b>. 
    It takes the width of its parent. An additional Media Block is optional. The Header could be placed either above or below the Content and is not separated with a line. All building blocks are optional. 

**Cards can display different types of content, such as:**

- a chart
- a list
- a table
- an object or group of objects
- informative text
- a combination of two elements

Card sizes vary depending on the layout, and they are not editable. A card can focus on either a single object or topic, or on a group of objects. Several cards can reference the same application, but the information should be distinct from one card to another.

##Card anatomy

- <b>header</b> (optional): the card header is a flexible combination of 3 block areas: main header, numeric header and extended header. The header displays a mandatory title, indicating what the card is about and functions as a navigation control that directs the user to the parent app.
  - <b>main header</b>: the main card header block shows the basic information of the card. It can contain <b>avatar</b> (optional), <b>title</b>, <b>subtitle</b> (optional), <b>counter</b> (optional) and/or <b>button</b> (optional).
  - <b>extended header</b>: the extended header is a flexible block to hold various other components, like time stamp, rating, tags, label/value, long text, numeric values, etc. The components can be arranged in left column or right column, each column is suggested to have maximum 3 lines for placing the components.
  - <b>numeric header</b>: the numeric header block is designed for displaying numeric information. It consumes Numeric Content (Horizon) and can show additional qualifying information and side indicators, if required. 

- <b>badge</b> (optional): The Badge for Cards can contain Icon and Text, Text only or Icon only. There are no interaction states on Badge for Cards. Badge on Cards consumes the <b>Inverted Object Status/Tag</b> with some modifications. A Badge can only expand to the max width of the card that it is applied to. Text on it will not wrap, but truncate. <b>There can be max 2 badges per Card.</b>
- <b>content</b> (main): the content area is reserved for application content.
    
- <b>footer</b> (optional): the footer displays a list of actions that can be performed on the card. When link is too long, or there is no more place for actions, overflow button should appear.

##Accessibility
Use the <code>listitem</code> role for cards when nested interactivity is needed—such as when a card is clickable and contains interactive elements like buttons or links inside. <br>
The <code>listitem</code> role supports all card types:

<ol>
    <li>No interactivity</li>
    <li>Non-interactive card with interactive elements inside</li>
    <li>
      <ul>
        <li>Interactive card</li>
        <li>Interactive card with interactive elements</li>
      </ul>
    </li>
</ol>

Note: Cards with the listitem role must be inside a parent element with <code>role="list"</code> — even if there's only one card.<br>

<b>Important:</b>The product where the card is hosted decides on the role assignment of the card container and card. To assure all 4 interactive variants are supported, the container must be of <code>role="list"</code>, and the card of <code>role="listitem"</code>.

Use <code>aria-description</code> or <code>aria-describedby</code> to provide key details about the card for screen reader users:

<ul>
    <li>Card Type: Describe what the card represents (e.g., list, calendar, to-do).</li>
    <li>Interactivity: State if the card is interactive or active.</li>
    <li>How to Interact: Include instructions like 'Press Enter to activate.'</li>
    <li>Badges and Indicators: Explain any labels or icons (e.g., “New item added”) to improve clarity and accessibility.</li>
</ul>

`,
    tags: ['development']
  }
};

export const CardNonInteractive = () => cardNonInteractiveExampleHtml;
CardNonInteractive.storyName = 'Non-interactive card';
CardNonInteractive.parameters = {
  docs: {
   description: {
      story: `A non-interactive card can have either a non-interactive or interactive header. A non-interactive header may still contain interactive elements, such as buttons.`
    }
  }
};

export const CardNonInteractiveHeader = () => cardNonInteractiveHeaderExampleHtml;
CardNonInteractiveHeader.storyName = 'Header Interaction - non-interactive Cards';
CardNonInteractiveHeader.parameters = {
  docs: {
   description: {
      story: `For interactive header use the modifier class <code>.fd-card__header--interactive</code> on <code>.fd-card__header</code>.
`
    }
  }
};

export const CardInteractiveButton = () => cardInteractiveButtonExampleHtml;
CardInteractiveButton.storyName = 'Interactive card with role button';
CardInteractiveButton.parameters = {
  docs: {
   description: {
      story: `The role <b>button</b> can be assigned to an interactive card that has <b>NO</b> interactive element inside. In this case, the card could be placed in any container.
`
    }
  }
};

export const CardInteractiveListitem = () => cardInteractiveListitemExampleHtml;
CardInteractiveListitem.storyName = 'Interactive card with role listitem';
CardInteractiveListitem.parameters = {
  docs: {
   description: {
      story: `The <b>listitem</b> is the recommended role for card. With this role, all interactive variants of the card can be covered: 
  - Non-interactive card
  - Non-interactive card with interactive elements inside
  - Interactive card 
  - Interactive card with interactive elements
<br><br>
Only the list item role allows nested interactions, which means: the card can be interactive itself while also having interactive elements inside. It is not recommended to use interactive cards outside list containers!<br>
The card container must be a list, even when there's only one card. The container of the list has role region and aria-label. If there's no container for the list, the label has to be placed on the card container list.`
    }
  }
};

export const CardAnatomy = () => cardAnatomyExampleHtml;
CardAnatomy.storyName = 'Standard card | Main Header';
CardAnatomy.parameters = {
  docs: {
   description: {
      story: `The main card header block shows the basic information of the card. It comes in two interactivity variants: 
- <b>non-interactive</b>: default 
- <b>interactive</b>: add the <code>.fd-card__header--interactive</code> modifier class to the <code>.fd-card__header</code> base class. 

<br> Building blocks of the Main Header: 
- <b>title</b>: title is mandatory to explain what content is being displayed to the user. It wraps 3 lines. 
- <b>avatar</b> (optional): avatar should be displayed in a size S (3rem). 
- <b>subtitle</b> (optional): the subtitle provides additional context to the title or displays a status. Its usage depends on the card type. Subtitles that exceed one line are truncated with an ellipsis (it wraps 2 lines).
- <b>counter</b> (optional): the counter indicates how many items are showing on the card in relation to the total number of relevant items. If all the relevant items are visible on the card, no counter is shown. There is also no counter if there is an issue loading a card, or if no items are found in the filter criteria. The counter is right-aligned and is never truncated. 
- <b>interactive element</b> (optional): like an icon button.
`
    }
  }
};

export const ExtendedHeader = () => extendedHeaderExampleHtml;
ExtendedHeader.parameters = {
  docs: {
   description: {
      story: `The Extended header is a flexible block to hold various other components, like time stamp, rating, tags, label/value, long text, numeric values, etc. The components can be arranged in left column or right column, each column is suggested to have maximum 3 lines for placing the components.

- <code>.fd-card__header-extended--top-aligned</code> and <code>.fd-card__header-extended--bottom-aligned</code> modifier classes applied with the <code>.fd-card__header-extended</code> base class will align the content of the columns vertically to the top or the bottom (default is center). 
- <code>.fd-card__header-column--right-aligned</code> modifier class for <code>.fd-card__header-column</code> will align the content of the column to the right.
`
    }
  }
};

export const NumericHeader = () => numericHeaderExampleHtml;
NumericHeader.parameters = {
  docs: {
   description: {
      story: `The numeric header block is designed for displaying numeric information.
`
    }
  }
};

export const CardEmptyState = () => cardEmptyStateExampleHtml;
CardEmptyState.storyName = 'Empty State';
CardEmptyState.parameters = {
  docs: {
   description: {
      story: `Use Illustrated Messages component inside the Card content to represent an empty state. The content container has 1rem spacing.`
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
- Scatter plot`
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