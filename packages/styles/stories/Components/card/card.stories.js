import objectCardExampleHtml from "./object-card.example.html?raw";
import tableCardExampleHtml from "./table-card.example.html?raw";
import listCardExampleHtml from "./list-card.example.html?raw";
import analyticalCardExampleHtml from "./analytical-card.example.html?raw";
import cardAnatomyExampleHtml from "./card-anatomy.example.html?raw";
import extendedHeaderExampleHtml from "./extended-header.example.html?raw";
import numericHeaderExampleHtml from "./numeric-header.example.html?raw";
import cardMediaExampleHtml from "./card-media.example.html?raw";
import cardInteractionStatesExampleHtml from "./card-interaction-states.example.html?raw";
import cardEmptyStateExampleHtml from "./card-empty-state.example.html?raw";

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
  title: 'Components/Card',
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

- <b>badge</b> (optional): The Badge for Cards can contain Icon and Text, Text only or Icon only. There are no interaction states on Badge for Cards. Badge on Cards consumes the <b>Inverted Object Status/Tag</b> with some modifications. A Badge can only expand to the max width of the card that it is applied to. Text on it will not wrap, but truncate. 
- <b>content</b> (main): the content area is reserved for application content.
    
- <b>footer</b> (optional): the footer displays a list of actions that can be performed on the card. When link is too long, or there is no more place for actions, overflow button should appear.

`,
    tags: ['development']
  }
};

export const CardAnatomy = () => cardAnatomyExampleHtml;
CardAnatomy.storyName = 'Standard card | Main Header';
CardAnatomy.parameters = {
  docs: {
   description: {
      story: `The main card header block comes in two interactivity variants: non-interactive and interactive. It shows the basic information of the card. 

  - <b>title</b>: title is mandatory to explain what content is being displayed to the user. It wraps 3 lines.
  - <b>avatar</b> (optional): avatar should be displayed in a size S (3rem).
  - <b>subtitle</b> (optional): the subtitle provides additional context to the title or displays a status. Its usage depends on the card type. Subtitles that exceed one line are truncated with an ellipsis (it wraps 2 lines).
  - <b>counter</b> (optional): the counter indicates how many items are showing on the card in relation to the total number of relevant items. If all the relevant items are visible on the card, no counter is shown. There is also no counter if there is an issue loading a card, or if no items are found in the filter criteria. The counter is right-aligned and is never truncated.
  - <b>interactive element</b> (optional): like an icon button.

For non-interactive main header add the <code>.fd-card__header-main--non-interactive</code> modifier class to the <code>.fd-card__header-main</code> base class.
`
    }
  }
};

export const CardInteractionStates = () => cardInteractionStatesExampleHtml;
CardInteractionStates.storyName = 'Interaction States on Cards';

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

export const CardMedia = () => cardMediaExampleHtml;
CardMedia.storyName = 'Media on Cards';
CardMedia.parameters = {
  docs: {
   description: {
      story: `The Media Block is flexible in height but fixed in width to the card size. The media can only contain an image / graphic OR solid color plus text.
      The Image can fill the media container or can come with a padding of 1rem (results in 16px) top, left and right. Corner radius 0.5rem (results in 8px). For this option add the modifier class <code>.fd-card__media--with-padding</code> to <code>.fd-card__media</code> base class. <br><br>
 
<h4>Title on Media</h4>
A title on Media Block is possible if using a solid colored background an NO image! To ensure legibility and ACC standards in the Media Block / Banner, always make sure a sufficient contrast ratio is achieved. 
Solid background colors can be bright <b>Shell Category Colors</b> or the lighter <b>Legend Background Colors</b>.

- For <b>Shell Category Colors</b> add the <code>.fd-card__media--bg-shell-*</code> modifier to the <code>.fd-card__media</code> base class, where * can be a number from 1 to 16. For example: <code>fd-card__media--bg-shell-5</code>
- For <b>Legend Background Colors</b> add the <code>.fd-card__media--bg-legend-*</code> modifier to the <code>.fd-card__media</code> base class, where * can be a number from 1 to 20. For example: <code>fd-card__media--bg-legend-7</code>


<h4>Media as Banner</h4>
To highlight certain content in a crisp and highly visual way, the Media Block offers the flexibility to be designed as a stand-alone banner. Use the <code>.fd-card--banner</code> modifier class to achieve this type of Card. <br>
When the Card is used as a banner, the solid background can be applied on the whole media container or on the content container, in cases where it's used together with an image or as an overlay.

To achieve a banner with a solid background with no image use the <code>.fd-card__media--bg-shell-*</code> or <code>.fd-card__media--bg-legend-*</code> modifer with the <code>.fd-card__media</code> base class.

If you want to apply background on the content container when it's used with an image, use the <code>.fd-card__media-content-container--bg-shell-*</code> or <code>.fd-card__media-content-container--bg-legend-*</code> modifer with the <code>.fd-card__media-content-container</code> base class.

The content container can be displayed as an overlay in case of using an image / a graphic behind. Use the modifier class <code>.fd-card__media-content-container--overlay</code> with the <code>.fd-card__media-content-container</code> base class.


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