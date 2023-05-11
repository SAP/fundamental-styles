import mobileExampleHtml from "./mobile.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import groupExampleHtml from "./group.example.html?raw";
import withActionsExampleHtml from "./with-actions.example.html?raw";
import showLessExampleHtml from "./show-less.example.html?raw";
import showMoreExampleHtml from "./show-more.example.html?raw";
import linkedExampleHtml from "./linked.example.html?raw";
import noImageExampleHtml from "./no-image.example.html?raw";
import placeHolderImageExampleHtml from "./place-holder-image.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";
import '../../../src/action-sheet.scss';
import '../../../src/feed-list.scss';
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
import '../../../src/link.scss';
export default {
  title: 'Components/Feed List and Item',
  parameters: {
    description: `The feed list displays feed list items that individually consist of a username, a written entry and an optional image. There is also a separate byline below that can contain a time stamp or an attribute in the form of free text.


##Usage
**Use the feed list if:**

-        You expect multiple instances, such as notes or feed entries.
-        The items in the feed list are homogenous.
-        A user needs to input small amounts of text without formatting.

**Do not use feed list if:**

-       The user needs to format the text (rich text editor).
-       You need only a single text box instance. Instead, use **Text Area**.
-       You want to display empty fields for the user to input feed entries. Instead, use **Feed Input**.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Standard = () => standardExampleHtml;
Standard.parameters = {
  docs: {
    description: {
      story: 'The standard feed list item displays a user\'s name and written text, an image and an additional attribute (in this example, it is a time stamp).'
    }
  }
};
export const PlaceHolderImage = () => placeHolderImageExampleHtml;
PlaceHolderImage.storyName = 'Placeholder image';
PlaceHolderImage.parameters = {
  docs: {
    description: {
      story: 'The feed list item will display a placeholder image if the user does not have an image assigned.'
    }
  }
};
export const NoImage = () => noImageExampleHtml;
NoImage.storyName = 'No image';
NoImage.parameters = {
  docs: {
    description: {
      story: 'The feed list item can be displayed without an image by removing the `fd-avatar` element from the container.'
    }
  }
};
export const Linked = () => linkedExampleHtml;
Linked.parameters = {
  docs: {
    description: {
      story: 'The feed list item can display linked usernames (and images). To display a linked username, add the `fd-link` class with the `fd-link--emphasized` modifier to the `fd-feed-list__name` element.'
    }
  }
};
export const ShowMore = () => showMoreExampleHtml;
ShowMore.storyName = 'Show more';
ShowMore.parameters = {
  docs: {
    description: {
      story: 'Feed list items can display a <i>MORE</i> link that can show more text (when/if it is truncated). Truncation occurs when the text reaches 300 characters. When hovering over the link, the text is highlighted and underlined.'
    }
  }
};
export const ShowLess = () => showLessExampleHtml;
ShowLess.storyName = 'Show less';
ShowLess.parameters = {
  docs: {
    description: {
      story: 'Similarly, feed list items can display a <i>LESS</i> link that will revert the text back to when it was truncated.'
    }
  }
};
export const WithActions = () => withActionsExampleHtml;
WithActions.storyName = 'Actions';
WithActions.parameters = {
  docs: {
    description: {
      story: 'Feed list items can display actions that users can perform on their individual feed posts. These typically include actions like <i>Edit</i> and <i>Delete</i>, however, other actions can be displayed depending on the use case. It is recommended to display a maximum of 5 actions per post.'
    }
  }
};
export const Group = () => groupExampleHtml;
Group.parameters = {
  docs: {
    description: {
      story: 'Evidently, feed list items can be displayed in a group. The example below displays a feed list item with a placeholder image and two standard feed list items.'
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.storyName = 'Borderless group';
Borderless.parameters = {
  docs: {
    description: {
      story: 'When feed list items are displayed in a group, they are usually separated by borders. However, to remove the borders, add the `fd-feed-list--no-border` modifier class to the main element.'
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: 'The feed list item can be mobile responsive by adding the `fd-feed-list--s` modifier class to the main element.'
    }
  }
};