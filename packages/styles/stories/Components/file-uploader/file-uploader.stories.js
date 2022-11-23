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

##Usage

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `<div class="fd-form-item">
  <label class="fd-form-label" id="browse_input1_label" >Upload Document</label>
  <div class="fd-file-uploader" style="width: 300px;">
    <div class="fd-file-uploader__container">
        <input
        aria-labelledby="browse_input1_label"
        class="fd-input fd-file-uploader__input"
        onclick="browseFile('input1');"
        title="Select a file"
        type="text"
        id="browse_input1"
        autocomplete="off"
        placeholder="Select a file"
        >

        <button
        class="fd-button"
        onclick="browseFile('input1');"
        id="file-uploader-button-1"
        aria-label="Select a file for uploading">
            Browse...
        </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
    <input
        aria-labelledby="browse_input1_label"
        hidden
        id="input1"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input1')">
    </div>
</div>
`;

Primary.storyName = 'Default';
Primary.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: `File Uploader is a composition of the \`fd-input\` class and the \`fd-button\` one. The button triggers the action of searching for 
            the file which needs to be uploaded. The input field shows the predetermined title i.e. Choose a file for upload.`
        }
    }
};

export const Selected = () => `<div class="fd-form-item">
  <label class="fd-form-label"  id="browse_input2_label" >Upload Document</label>
  <div class="fd-file-uploader" style="width: 300px;">
    <div class="fd-file-uploader__container">
        <input
        aria-labelledby="browse_input2_label"
        class="fd-input fd-file-uploader__input"
        onclick="browseFile('input1');"
        title="document.pdf"
        type="text"
        id="browse_input2"
        autocomplete="off"
        value="document.pdf"
        >
        <button
        class="fd-button"
        onclick="browseFile('input1');"
        id="file-uploader-button-1"
        aria-label="Select a file for uploading">Browse...
        </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true">document.pdf</div>
    <input
        aria-labelledby="browse_input2_label"
        hidden
        id="input1"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input2')"
    >
    </div>
</div>
`;

Selected.storyName = 'After Selecting';
Selected.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'Once the user selects files, update the input and the hidden div to include the file names. The hidden div will announce the file names only once when the value changes.'
        }
    }
};


export const Compact = () => `<div class="fd-form-item">
  <label class="fd-form-label" id="browse_input3_label" >Upload Document (Compact)</label>
  <div class="fd-file-uploader" style="width: 300px;">
    <div class="fd-file-uploader__container">
        <input
        aria-labelledby="browse_input3_label"
        class="fd-input fd-input--compact fd-file-uploader__input"
        onclick="browseFile('input2');"
        id="browse_input3"
        type="text"
        title="Select a file"
        placeholder="Select a file"
        autocomplete="off"
        >
        <button
        class="fd-button fd-button--compact fd-file-uploader__button"
        onclick="browseFile('input2');"
        id="file-uploader-button-3"
        aria-label="Select a file for uploading">Browse...
        </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
    <input
        aria-labelledby="browse_input3_label"
        hidden
        id="input2"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input3')">
    </div>
</div>
`;
Compact.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'For compact File Uploader apply the `--compact` modifier to the button and input elements.'
        }
    }
};

export const Status = () => `<div class="fd-form-item">
    <label class="fd-form-label" id="browse_input7_label">Upload Document (Success)</label>
    <div class="fd-file-uploader" style="width: 300px;">
        <div class="fd-file-uploader__container">
            <input
                aria-labelledby="browse_input7_label"
                class="fd-input fd-input--compact fd-file-uploader__input is-success"
                onclick="browseFile('input2');"
                id="browse_input7"
                type="text"
                title="Select a file"
                placeholder="Select a file"
                autocomplete="off"
            >
            <button
                class="fd-button fd-button--compact fd-file-uploader__button"
                onclick="browseFile('input2');"
                id="file-uploader-button-7"
                aria-label="Select a file for uploading">Browse...
            </button>
        </div>
        <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
        <input
            aria-labelledby="browse_input7_label"
            hidden
            id="input6"
            class="fd-file-uploader__hidden"
            type="file"
            onchange="selectFile(this,'browse_input7')">
    </div>
</div>
<br />
<label class="fd-form-label" id="browse_input4_label">Upload Document (Error)</label>
<div class="fd-file-uploader" style="width: 300px;">
    <div class="fd-file-uploader__container">
        <input
            aria-labelledby="browse_input4_label"
            class="fd-input fd-input--compact fd-file-uploader__input is-error"
            onclick="browseFile('input2');"
            id="browse_input4"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
        >
        <button
            class="fd-button fd-button--compact fd-file-uploader__button"
            onclick="browseFile('input2');"
            id="file-uploader-button-4"
            aria-label="Select a file for uploading">Browse...
        </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
    <input
        aria-labelledby="browse_input4_label"
        hidden
        id="input3"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input4')">
</div>
<br />
<label class="fd-form-label" id="browse_input5_label">Upload Document (Warning)</label>
<div class="fd-file-uploader" style="width: 300px;">
    <div class="fd-file-uploader__container">
        <input
            aria-labelledby="browse_input5_label"
            class="fd-input fd-input--compact fd-file-uploader__input is-warning"
            onclick="browseFile('input2');"
            id="browse_input5"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
        >
        <button
            class="fd-button fd-button--compact fd-file-uploader__button"
            onclick="browseFile('input2');"
            id="file-uploader-button-5"
            aria-label="Select a file for uploading">Browse...
        </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
    <input
        aria-labelledby="browse_input5_label"
        hidden
        id="input4"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input5')">
</div>
<br />
<label class="fd-form-label" id="browse_input6_label">Upload Document (Information)</label>
<div class="fd-file-uploader" style="width: 300px;">
    <div class="fd-file-uploader__container">
        <input
            aria-labelledby="browse_input6_label"
            class="fd-input fd-input--compact fd-file-uploader__input is-information"
            onclick="browseFile('input2');"
            id="browse_input3"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
        >
        <button
            class="fd-button fd-button--compact fd-file-uploader__button"
            onclick="browseFile('input2');"
            id="file-uploader-button-6"
            aria-label="Select a file for uploading">Browse...
        </button>
    </div>
    <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
    <input
        aria-labelledby="browse_input6_label"
        hidden
        id="input5"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input6')">
</div>
`;
Status.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'For Status File Uploader apply the corresponding status class `is-success, is-error, is-warning, is-information ` modifier to the input element.'
        }
    }
};

export const FileUploaderWithFiles = () => `<div class="fd-form-item">
    <div class="fd-file-uploader" style="width: 300px;">
        <div class="fd-file-uploader__container">
            <input
                class="fd-input fd-file-uploader__input"
                title="Select a file"
                type="text"
                autocomplete="off"
                placeholder="Select a file">
            <button class="fd-button" title="Browse for a file" aria-label="Select a file for uploading">
                Browse...
            </button>
        </div>
        <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
        <input hidden class="fd-file-uploader__hidden" type="file">
        <div class="fd-file-uploader__uploaded-files">
            <p class="fd-file-uploader__label">No File Selected</p>
        </div>
    </div>
</div>

<br><br><hr><br>

<div class="fd-form-item">
    <div class="fd-file-uploader" style="width: 300px;">
        <div class="fd-file-uploader__container">
            <input class="fd-input fd-file-uploader__input" title="Select a file" type="text" autocomplete="off" placeholder="Select a file">
            <button class="fd-button" title="Browse for a file" aria-label="Select a file for uploading">
                Browse...
            </button>
        </div>
        <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
        <input aria-labelledby="browse_input1_label" hidden class="fd-file-uploader__hidden" type="file">
        
        <div class="fd-file-uploader__uploaded-files">
            <h3 class="fd-file-uploader__label">File Selected:</h3>
            <ul class="fd-file-uploader__list">
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--positive">
                        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
                        <span class="fd-object-status__text">Filename.format</span>
                    </span>
                    <div class="fd-file-uploader__actions">
                        <button title="Download File" aria-label="Download" class="fd-button fd-button--transparent">
                            <i class="sap-icon--download"></i>
                        </button>
                        <button title="Delete File" aria-label="Delete" class="fd-button fd-button--transparent">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </li>
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--positive">
                        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
                        <span class="fd-object-status__text">Verylonglonglonglonglonglongfilename.format</span>
                    </span>
                    <div class="fd-file-uploader__actions">
                        <button title="Download File" aria-label="Download" class="fd-button fd-button--transparent">
                            <i class="sap-icon--download"></i>
                        </button>
                        <button title="Delete File" aria-label="Delete" class="fd-button fd-button--transparent">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </li>
            </ul>

            <h3 class="fd-file-uploader__label">Invalid Files:</h3>
            <ul class="fd-file-uploader__list">
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--negative">
                        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                        <span class="fd-object-status__text">Negative Object Status</span>
                    </span>
                </li>
                <li class="fd-file-uploader__list-item">
                    <div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon" role="alert">
                        <p class="fd-message-strip__text">
                            Example text: File with 12343 bytes is too big. Maximum of 1 byte are allowed.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<br><br><hr><br>

<h3>Compact</h3>
<div class="fd-form-item">
    <div class="fd-file-uploader" style="width: 300px;">
        <div class="fd-file-uploader__container">
            <input class="fd-input fd-input--compact fd-file-uploader__input" title="Select a file" type="text" autocomplete="off" placeholder="Select a file">
            <button class="fd-button fd-button--compact" title="Browse for a file" aria-label="Select a file for uploading">
                Browse...
            </button>
        </div>
        <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true"></div>
        <input hidden class="fd-file-uploader__hidden" type="file">

        <div class="fd-file-uploader__uploaded-files">
            <p class="fd-file-uploader__label">File Selected:</p>
            <ul class="fd-file-uploader__list">
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--positive">
                        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
                        <span class="fd-object-status__text">Filename.format</span>
                    </span>
                    <div class="fd-file-uploader__actions">
                        <button title="Download File" aria-label="Download" class="fd-button fd-button--compact fd-button--transparent">
                            <i class="sap-icon--download"></i>
                        </button>
                        <button title="Delete File" aria-label="Delete" class="fd-button fd-button--compact fd-button--transparent">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </li>
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--positive">
                        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
                        <span class="fd-object-status__text">Filename.format</span>
                    </span>
                    <div class="fd-file-uploader__actions">
                        <button title="Download File" aria-label="Download" class="fd-button fd-button--compact fd-button--transparent">
                            <i class="sap-icon--download"></i>
                        </button>
                        <button title="Delete File" aria-label="Delete" class="fd-button fd-button--compact fd-button--transparent">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </li>
            </ul>
            <p class="fd-file-uploader__label">Invalid Files:</p>
            <ul class="fd-file-uploader__list">
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--critical">
                        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
                        <span class="fd-object-status__text">Critical Object Status</span>
                    </span>
                </li>
                <li class="fd-file-uploader__list-item">
                    <span class="fd-object-status fd-object-status--informative">
                        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
                        <span class="fd-object-status__text">Info Object Status</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

FileUploaderWithFiles.storyName = `File Uploader with File List`;
FileUploaderWithFiles.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: `<span class="fd-info-label fd-info-label--accent-color-3"><span class="fd-info-label__text">non-fiori 3</span></span><span style="margin-right: 0.5rem;"></span><span class="fd-info-label fd-info-label--accent-color-4"><span class="fd-info-label__text">CX</span></span>`
        }
    }
};