import buttonsExampleHtml from "./buttons.example.html?raw";
import errorExampleHtml from "./error.example.html?raw";
import noItemsExampleHtml from "./no-items.example.html?raw";
import searchExampleHtml from "./search.example.html?raw";
import filterExampleHtml from "./filter.example.html?raw";
import '../../../src/message-page.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/link.scss';
export default {
  title: 'Components/Message Page',
  parameters: {
    description: `Message page displays a message to the user when an app or list is empty or if an error has occurred. The text and icon on the message page changes depending on the use case, however, the layout stays the same. It is responsive and adjusts to fit the available screen space.

**The message page can be used in the following situations:**

- Filter with no results
- Search with no results
- Empty app
- Too many items
- Item saved as a tile that is no longer available
- Error

##Guidelines
- The icon is mandatory and can vary depending on the message. The default icon is \`.sap-icon--documents\`.
- The title is also mandatory. Add a description with further details if needed.
- The message should be as concise as possible.
        `,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
const messageBoxHeight = 800;
export const Filter = () => filterExampleHtml;
Filter.parameters = {
  docs: {
    story: {
      iframeHeight: messageBoxHeight
    },
    description: {
      story: `The filter message page is displayed when the user has set a filter and there are no results. This message then prompts the user to remove or re-evaluate the filter they set for the page. It is mandatory to use the \`.sap-icon--filter\`  icon.
    `
    }
  }
};
export const Search = () => searchExampleHtml;
Search.parameters = {
  docs: {
    story: {
      iframeHeight: messageBoxHeight
    },
    description: {
      story: `The search message page is displayed when a user has searched for something, but there are no results for that inquiry. It is mandatory to use the \`.sap-icon--search\` icon.
    `
    }
  }
};
export const NoItems = () => noItemsExampleHtml;
NoItems.storyName = 'No items';
NoItems.parameters = {
  docs: {
    story: {
      iframeHeight: messageBoxHeight
    },
    description: {
      story: `Message page displays a message indicating that there are no items when the user attempts to view a page that is supposed to contain items, but they are either not available or do not exist. It is mandatory to use either the \`.sap-icon--product\` icon, or another icon that matches your use case.
        `
    }
  }
};
export const Error = () => errorExampleHtml;
Error.parameters = {
  docs: {
    story: {
      iframeHeight: messageBoxHeight
    },
    description: {
      story: `The error message page is displayed when the user attempts to view a page but an error has occurred, resulting in no available content. If you can, provide a link to the app start screen in the error message. It is mandatory to use the \`.sap-icon--document\` icon.
    `
    }
  }
};
export const Buttons = () => buttonsExampleHtml;
Buttons.storyName = 'Formatted text and buttons';
Buttons.parameters = {
  docs: {
    story: {
      iframeHeight: messageBoxHeight
    },
    description: {
      story: `The message page with formatted text and buttons is useful for when you want to add formatted text (bold, italic, underline and/or bullet points) and buttons to the action area. It's highly recommended not to add more than two buttons.
    `
    }
  }
};