import noDataExampleHtml from "./no-data.example.html?raw";
import editExampleHtml from "./edit.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";
import '../../../src/upload-collection.scss';
import '../../../src/list.scss';
import '../../../src/icon.scss';
import '../../../src/link.scss';
import '../../../src/button.scss';
import '../../../src/object-status.scss';
import '../../../src/input.scss';
import '../../../src/form-group.scss';
import '../../../src/message-page.scss';
import '../../../src/object-marker.scss';
export default {
  title: 'Components/Upload Collection',
  parameters: {
    description: `
The upload collection control allows users to upload single or multiple files from a device (desktop, tablet, or phone) to the SAP Fiori app. Typically, uploaded files appear in an Attachments tab. However, files can also be displayed elsewhere.

##Usage

**Use the upload collection if:**

-	You want to show a list of uploaded files that can be modified.
- You want to allow users to add or remove files, and to change the file names.
-	You are still using the old sap.ca.ui.FileUpload control.

**Do not use the byline list if:**

-	The user can upload only one file to the app. In this case, use the File Uploader control instead.

##Elements
The upload collection is essentially a byline list with a few additional elements

Modifier/Class | Description
:---------------| :---------------
\`fd-upload-collection\` | Applied on \`fd-list\` level.
\`fd-upload-collection--sm\` | A modifier class applied when the item is less than 30rem.
\`fd-upload-collection__item\` | Item container for the upload collection.
\`fd-upload-collection__thumbnail\` | Modifier class for the thumbnail.
\`fd-upload-collection__title-container\` | Container for the list title. Used when title has additional items such as Object Marker.
\`fd-upload-collection__title\` | Modifier class for the list title.
\`fd-upload-collection__description\` | Description element for the upload collection.
\`fd-upload-collection__text-separator\` | Bullet point text separator for statuses and descriptions.
\`fd-upload-collection__status-group\` | Status group container for the upload collection.
\`fd-upload-collection__status-group-item\` | Status group item for the upload collection.
\`fd-upload-collection__status-group-item-text\` | Status group item text for the upload collection.
\`fd-upload-collection__button-group\` | Container for the edit/delete/Ok/Cancel buttons.
\`fd-upload-collection__form-item\` | Form item element.
\`fd-upload-collection__extension\` | File extension element for the upload collection.
`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Standard = () => standardExampleHtml;
Standard.storyName = 'Default';
Standard.parameters = {
  docs: {
    story: {
      iframeHeight: 785
    },
    description: {
      story: 'The default upload collection.'
    }
  }
};
export const Edit = () => editExampleHtml;
Edit.parameters = {
  docs: {
    story: {
      iframeHeight: 785
    },
    description: {
      story: 'Users can activate edit mode where the file name can be changed.'
    }
  }
};
export const NoData = () => noDataExampleHtml;
NoData.parameters = {
  docs: {
    story: {
      iframeHeight: 785
    },
    description: {
      story: 'Use a message page component when the user has yet to upload any files.'
    }
  }
};