import mediumSizeExampleHtml from "./medium-size.example.html?raw";
import titleAndTextExampleHtml from "./title-and-text.example.html?raw";
import titleAsLinkExampleHtml from "./title-as-link.example.html?raw";
import boldTitleExampleHtml from "./bold-title.example.html?raw";
import titleOnlyExampleHtml from "./title-only.example.html?raw";
import '../../../src/object-identifier.scss';
import '../../../src/link.scss';
import '../../../src/table.scss';
export default {
  title: 'Components/Object Identifier',
  parameters: {
    description: `
The object identifier is a short text that represents the key identifier of an object, and can be displayed in various types of containers, tables, panels, popovers and more. The text wraps if there is insufficient horizontal space.

The object identifier should be easily read by the users, preferably displaying text instead of an ID. If it necessary to distinguish objects by their IDs, then it should appear as descriptive text below the title text.

**The object number comprises:**

- A title text
- An optional descriptive text
- An active state (if desired) which resembles a link that can trigger an event

##Usage
**Use the object identifier if:**

- You want to indicate the key identifier on an object.

**Do not use the object identifier if:**

- You want to display system messages.
- They are for decorative purposes only.
`,
    tags: ['f3']
  }
};
export const TitleOnly = () => titleOnlyExampleHtml;
TitleOnly.storyName = 'Title';
TitleOnly.parameters = {
  docs: {
    description: {
      story: 'To display the object identifier as a title, add the `fd-object-identifier__title` modifier class to the main element.'
    }
  }
};
export const BoldTitle = () => boldTitleExampleHtml;
BoldTitle.storyName = 'Bold';
BoldTitle.parameters = {
  docs: {
    description: {
      story: `To display the object identifier's title in bold, replace \`fd-object-identifier__title\`
        with the \`fd-object-identifier__title--bold\` modifier class.`
    }
  }
};
export const TitleAsLink = () => titleAsLinkExampleHtml;
TitleAsLink.storyName = 'Link';
TitleAsLink.parameters = {
  docs: {
    description: {
      story: 'To display the object identifier as a link, use anchor element with `.fd-link .fd-object-identifier__link` classes.'
    }
  }
};
export const TitleAndText = () => titleAndTextExampleHtml;
TitleAndText.storyName = 'Descriptive';
TitleAndText.parameters = {
  docs: {
    description: {
      story: 'To display the object identifier\'s title with descriptive text, add an additional tag below the title container and a `fd-object-identifier__text` modifier class.'
    }
  }
};
export const MediumSize = () => mediumSizeExampleHtml;
MediumSize.parameters = {
  docs: {
    description: {
      story: 'To display the object identifier title in medium size, add the `fd-object-identifier--medium` modifier.'
    }
  }
};