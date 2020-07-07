import '../../dist/button.css';
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
Please refer to the input and button components documentation for the complete list of modifiers.

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const primary = () => `
<div class="fd-form-item">
    <div class="fd-file-uploader">
        <input 
          class="fd-input fd-file-uploader__input" 
          onclick="browseFile('input1');" 
          title="Select a file for uploading" 
          aria-label="Select a file for uploading"
          aria-live="polite"
          autocomplete="off"
          type="text" 
          id="browse_input1" 
          placeholder=" Choose a file for upload" 
          tabindex="-1"
          readonly>
        <button 
          class="fd-button"
          onclick="browseFile('input1');" 
          tabindex="0"
          id="file-uploader-button-1" 
          aria-label="Select a file for uploading">Browse...
        </button>
    </div>
    <input
      id="input1"
      class="fd-file-uploader__hidden"
      type="file"
      onchange="selectFile(this,'browse_input1')">
</div>

<br/>
<br/>
<br/>

<div dir="rtl">
  <h3>RTL Support</h3>
  <div class="fd-form-item">
      <div class="fd-file-uploader">
          <input 
            class="fd-input fd-file-uploader__input" 
            onclick="browseFile('input1');" 
            title="Select a file for uploading" 
            aria-label="Select a file for uploading"
            aria-live="polite"
            autocomplete="off"
            type="text" 
            id="browse_input1-rtl" 
            placeholder=" Choose a file for upload" 
            tabindex="-1"
            readonly>
          <button 
            class="fd-button"
            onclick="browseFile('input1');" 
            tabindex="0"
            id="file-uploader-button-2" 
            aria-label="Select a file for uploading">Browse...
          </button>
      </div>
      <input
        id="input1-rtl"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input1-rtl')">
  </div>
</div>
`;

primary.storyName = 'Default';
primary.parameters = {
    docs: {
        iframeHeight: 250
    }
};

export const compact = () => `
<div class="fd-form-item">
  <div class="fd-file-uploader">
      <input 
        class="fd-input fd-input--compact fd-file-uploader__input" 
        onclick="browseFile('input2');" 
        id="browse_input2" 
        type="text"
        aria-label="Select a file for uploading" 
        title="Select a file for uploading"  
        placeholder="Choose a file for upload"
        tabindex="-1"
        readonly>
      <button
        class="fd-button fd-button--compact fd-file-uploader__button"  
        onclick="browseFile('input2');"
        id="file-uploader-button-3" 
        aria-label="Select a file for uploading">Browse...
      </button>
  </div>
  <input
    id="input2"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input2')">
</div>

<br/>
<br/>
<br/>

<div dir="rtl">
  <h3>RTL Support</h3>
  <div class="fd-form-item">
    <div class="fd-file-uploader">
      <input 
      class="fd-input fd-input--compact fd-file-uploader__input" 
      onclick="browseFile('input2-rtl');" 
      id="browse_input2-rtl" 
      type="text" 
      aria-label="Select a file for uploading"
      tabindex="-1"
      title="Select a file for uploading"  
      placeholder="Choose a file for upload to localserver" 
      readonly>
      <button 
        class="fd-button fd-button--compact fd-file-uploader__button"  
        onclick="browseFile('input2-rtl');" 
        id="file-uploader-button-4" 
        aria-label="Select a file for uploading">Browse...
      </button>
    </div>
      <input
        id="input2-rtl"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input2-rtl')">
  </div>
</div>
`;
compact.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'For compact File Uploader apply the `--compact` modifier to the button and input elements.'
    }
};
