export default {
    title: 'Components/File Uploader',
    parameters: {
        description: `
The File Uploader component allows the user to select the files from the system to upload.
The File Uploader component is an opinionated composition of the input and button components.
Please refer to the input and button components documentation for the complete list of modifiers.

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.
`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['button', 'form-item', 'file-uploader', 'form-label', 'input']
    }
};

export const primary = () => `
<div class="fd-form-item">
  <div class="fd-file-uploader">
    <input 
      aria-label="File upload"
      class="fd-input fd-file-uploader__input" 
      onclick="browseFile('input1');" 
      title="Choose a file for upload" 
      type="text" 
      id="browse_input1" 
      autocomplete="off"
      placeholder="Choose a file for upload"
      readonly>
    <button 
      class="fd-button"
      onclick="browseFile('input1');" 
      id="file-uploader-button-1" 
      aria-label="Select a file for uploading">Browse...
    </button>
  </div>
  <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
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
        aria-label="File upload"
        id="browse_input1-rtl"
        class="fd-input fd-file-uploader__input" 
        onclick="browseFile('input1');" 
        title="Choose a file for upload" 
        autocomplete="off"
        type="text" 
        id="browse_input1-rtl" 
        placeholder="Choose a file for upload" 
        readonly>
      <button 
        class="fd-button"
        onclick="browseFile('input1');" 
        id="file-uploader-button-2" 
        aria-label="Select a file for uploading">Browse...
      </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
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

export const selected = () => `
<div class="fd-form-item">
  <div class="fd-file-uploader">
    <input 
      aria-label="File upload"
      class="fd-input fd-file-uploader__input" 
      onclick="browseFile('input1');" 
      title="document.pdf" 
      type="text" 
      id="browse_input1" 
      autocomplete="off"
      value="document.pdf"
      readonly>
    <button 
      class="fd-button"
      onclick="browseFile('input1');" 
      id="file-uploader-button-1" 
      aria-label="Select a file for uploading">Browse...
    </button>
  </div>
  <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true">document.pdf</div>
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
        aria-label="File upload"
        class="fd-input fd-file-uploader__input" 
        onclick="browseFile('input1');" 
        title="document.pdf" 
        autocomplete="off"
        type="text" 
        id="browse_input1-rtl" 
        value="document.pdf" 
        readonly>
      <button 
        class="fd-button"
        onclick="browseFile('input1');" 
        id="file-uploader-button-2" 
        aria-label="Select a file for uploading">Browse...
      </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true">document.pdf</div>
    <input
      id="input1-rtl"
      class="fd-file-uploader__hidden"
      type="file"
      onchange="selectFile(this,'browse_input1-rtl')">
  </div>
</div>
`;

selected.storyName = 'After Selecting';
selected.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'Once the user selects files, update the input and the hidden div to include the file names. The hidden div will announce the file names only once when the value changes.'
    }
};


export const compact = () => `
<div class="fd-form-item">
  <div class="fd-file-uploader">
    <input 
      aria-label="File upload"
      class="fd-input fd-input--compact fd-file-uploader__input" 
      onclick="browseFile('input2');" 
      id="browse_input2" 
      type="text"
      title="Choose a file for upload"  
      placeholder="Choose a file for upload"
      autocomplete="off"
      readonly>
    <button
      class="fd-button fd-button--compact fd-file-uploader__button"  
      onclick="browseFile('input2');"
      id="file-uploader-button-3" 
      aria-label="Select a file for uploading">Browse...
    </button>
  </div>
  <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
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
        aria-label="File upload"
        class="fd-input fd-input--compact fd-file-uploader__input" 
        onclick="browseFile('input2-rtl');" 
        id="browse_input2-rtl" 
        type="text" 
        autocomplete="off"
        title="Choose a file for upload to localserver"  
        placeholder="Choose a file for upload to localserver" 
        readonly>
      <button 
        class="fd-button fd-button--compact fd-file-uploader__button"  
        onclick="browseFile('input2-rtl');" 
        id="file-uploader-button-4" 
        aria-label="Select a file for uploading">Browse...
      </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
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
