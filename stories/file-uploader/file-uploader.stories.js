import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/form-item.css';
import '../../dist/file-uploader.css';
import '../../dist/form-label.css';
import '../../dist/input.css';

export default {
    title: 'Components/FileUploader',
    parameters: {
        description: `
The File Uploader component allows the user to select the files from the system to upload.
The File Uploader component is an opinionated composition of the input and button components.
Please see the input and button components documentation for the complete list of modifiers.

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

/** On smartphones and tablets, the file uploader is shown in cozy mode (default). */

export const primary = () => `
<div class="fd-form-item">
    <div class="fd-file-uploader">
        <input class="fd-input fd-file-uploader__input" 
        title="Select a file for uploading" 
        aria-label="Select a file for uploading" 
        type="text" 
        id="browse_input1" 
        placeholder=" Choose a file for upload to localserver " 
        readonly>
        <button class="fd-button" 
        id="fileuploader-button1" 
        aria-label="Select a file for uploading" >
        Browse...
        </button>
    </div>
      <input
        id="input1"
        class="fd-file-uploader__hidden"
        type="file"
      />
    </div>
`;

primary.storyName = 'Default';

/**
 * The File Uploader should be used in compact mode when using a desktop of devices with large screens.
It can be achieved by adding the `--compact` modifier to the button and input elements.
 */

export const compact = () => `
<div class="fd-form-item">
    <div class="fd-file-uploader">
      <input class="fd-input fd-input--compact fd-file-uploader__input" 
      id="browse_input2-rtl" 
      type="text" 
      aria-label="Select a file for uploading" 
      title="Select a file for uploading"  
      placeholder="Choose a file for upload to localserver" 
      readonly>
      <button class="fd-button fd-button--compact "  
      id="fileuplader-button2" 
      aria-label="Select a file for uploading">Browse...
      </button>
    </div>
      <input
        id="input2-rtl"
        class="fd-file-uploader__hidden"
        type="file"
      />
  </div>
`;

