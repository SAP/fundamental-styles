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
\`fd-list__byline--2-col\` | Displays a 2-column byline that consists of two sides: left and right.
\`fd-list__byline-left\` | The left side is best suited for standard text, and occupies 60% of the available space.
\`fd-list__byline-right\` | The right side is best suited for supplemental information (can be a semantic status), and occupies 40% of the available space.
\` fd-list__byline-right--*\` | To represent a semantic status, replace the * with either: _neutral_, _positive_, _negative_, _critical_ or _informative_.
`,
    tags: ['f3', 'a11y', 'theme', 'development'],
    components: ['upload-collection', 'list', 'icon', 'link', 'button', 'object-status', 'input', 'form-group']
  }
};

export const standard = () => `<h4>Default mode</h4>
<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content fd-upload-collection__content">
      <a href="#" class="fd-list__title fd-link">File_Name.extension</a>
      <div class="fd-upload-collection__description">
        This is the file description
        <span class="fd-upload-collection__text-separator"> </span>
        This is an additional description
      </div>
      <div class="fd-upload-collection__status-group">
        <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
        <span class="fd-upload-collection__text-separator"> </span>
        <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
      </div>
    </div>
    <div class="fd-upload-collection__button-group">
      <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
      <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
    </div>
  </li>
</ul>

<br/><br/>

<h4>Edit Mode</h4>

<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content fd-upload-collection__content">
      <div class="fd-upload-collection__form-item">
        <input class="fd-input" type="text" placeholder="Filename">
        <span class="fd-upload-collection__extension">.jpg</span>
      </div>
      <div class="fd-upload-collection__description">
        This is the file description
        <span class="fd-upload-collection__text-separator"> </span>
        This is an additional description
      </div>
    </div>
    <div class="fd-upload-collection__button-group">
      <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
      <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
    </div>
  </li>
</ul>

<br/><br/>

<h4>Default mode - small</h4>

<ul class="fd-list fd-list--byline" role="list" style="width: 29.5rem;">
  <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item fd-upload-collection__item--small">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content fd-upload-collection__content">
      <a href="#" class="fd-list__title fd-link">File_Name.extension</a>
      <div class="fd-upload-collection__description">
        This is the file description
        <span class="fd-upload-collection__text-separator"> </span>
        This is an additional description
      </div>
      <div class="fd-upload-collection__status-group">
        <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
        <span class="fd-upload-collection__text-separator"> </span>
        <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
      </div>
    </div>
    <div class="fd-upload-collection__button-group fd-upload-collection__button-group--small">
      <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
      <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
    </div>
  </li>
</ul>

<br/><br/>

<h4>Edit Mode - small</h4>

<ul class="fd-list fd-list--byline" role="list" style="width: 29.5rem;">
  <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item fd-upload-collection__item--small">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content fd-upload-collection__content">
      <div class="fd-upload-collection__form-item fd-upload-collection__form-item--small">
        <input class="fd-input" type="text" placeholder="Filename">
        <span class="fd-upload-collection__extension">.jpg</span>
      </div>
      <div class="fd-upload-collection__description">
        This is the file description
        <span class="fd-upload-collection__text-separator"> </span>
        This is an additional description
      </div>
    </div>
    <div class="fd-upload-collection__button-group fd-upload-collection__button-group--small">
      <button aria-label="Edit" class="fd-button">Ok</button>
      <button aria-label="Delete" class="fd-button">Cancel</button>
    </div>
  </li>
</ul>

`;

standard.storyName = 'Default';

standard.parameters = {
  docs: {
    iframeHeight: 785,
    storyDescription: `The default upload collection.`
  }
};
