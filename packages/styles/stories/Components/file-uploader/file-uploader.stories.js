import fileUploaderWithFilesExampleHtml from "./file-uploader-with-files.example.html?raw";
import statusExampleHtml from "./status.example.html?raw";
import selectedExampleHtml from "./selected.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/button.scss';
import '../../../src/form-item.scss';
import '../../../src/file-uploader.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
import '../../../src/object-status.scss';
import '../../../src/message-strip.scss';
import '../../../src/info-label.scss';

export default {
  title: 'Components/File Uploader',
  parameters: {
    description: `
The File Uploader component allows the user to select the files from the system to upload.
It is an opinionated composition of the input and button components.

##Usage

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: `File Uploader is a composition of the \`fd-input\` class and the \`fd-button\` one. The button triggers the action of searching for
            the file which needs to be uploaded. The input field shows the predetermined title i.e. Choose a file for upload.`
    }
  }
};
export const Selected = () => selectedExampleHtml;
Selected.storyName = 'After Selecting';
Selected.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: 'Once the user selects files, update the input and the hidden div to include the file names. The hidden div will announce the file names only once when the value changes.'
    }
  }
};
export const Status = () => statusExampleHtml;
Status.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: 'For Status File Uploader apply the corresponding status class `is-success, is-error, is-warning, is-information ` modifier to the input element.'
    }
  }
};
export const FileUploaderWithFiles = () => fileUploaderWithFilesExampleHtml;
FileUploaderWithFiles.storyName = `File Uploader with File List`;
FileUploaderWithFiles.parameters = {
  docs: {
    story: {
      iframeHeight: 250
    },
    description: {
      story: `<span class="fd-info-label fd-info-label--accent-color-3"><span class="fd-info-label__text">non-fiori 3</span></span><span style="margin-right: 0.5rem;"></span><span class="fd-info-label fd-info-label--accent-color-4"><span class="fd-info-label__text">CX</span></span>`
    }
  }
};