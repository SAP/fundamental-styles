var h=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(l,t,n)=>t in l?h(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,s=(l,t)=>{for(var n in t||(t={}))T.call(t,n)&&c(l,n,t[n]);if(d)for(var n of d(t))y.call(t,n)&&c(l,n,t[n]);return l},a=(l,t)=>x(l,j(t));/* empty css             *//* empty css             *//* empty css             *//* empty css               *//* empty css                      *//* empty css              *//* empty css                   *//* empty css                     *//* empty css                      */const E=`
<div style="height: 600px; width: 100%;">
  <div class="fd-message-page">
    <div class="fd-message-page__container">
      <div class="fd-message-page__icon-container">
        <i role="presentation" class="sap-icon--attachment fd-message-page__icon"></i>
      </div>
      <div role="status" aria-live="polite" class="fd-message-page__content">
        <div class="fd-message-page__title">
          No files found.
        </div>
        <div class="fd-message-page__subtitle">
          Drop files to upload, or use the "+" button.
        </div>
      </div>
    </div>
  </div>
</div>
`,D=`
<h4>Edit Mode</h4>

<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
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
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
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
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
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

<h4>Edit Mode - small</h4>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list" style="width: 29.5rem;">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
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
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
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
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
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
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
</ul>

`,k=`<h4>Default mode</h4>
<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interactive fd-upload-collection__item--interactive fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__title-container">
                <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--request" aria-label="icon for request" role="img"></i>
                </div>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite" role="img"></i>
                </div>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">
                Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_File_Name.extension
            </a>
            <div class="fd-upload-collection__description">
                This is the long long long long long long long long long long long long long long long long long long long file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an long long long long long long long long long long long long long long long long long long long additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">
                        This is a long long long long long long long long long long long negative status
                    </span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">
                        This is a long long long long long long long long long long long positive status
                    </span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>

<br/><br/>

<h4>Default mode - small</h4>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list" style="width: 29.5rem;">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>

`;const A={title:"Components/Upload Collection",parameters:{description:`
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
`,tags:["f3","a11y","theme","development"]}},o=()=>k;o.storyName="Default";o.parameters={docs:{description:{story:"The default upload collection."}}};const i=()=>D;i.parameters={docs:{description:{story:"Users can activate edit mode where the file name can be changed."}}};const e=()=>E;e.parameters={docs:{description:{story:"Use a message page component when the user has yet to upload any files."}}};var p,u,_;o.parameters=a(s({},o.parameters),{docs:a(s({},(p=o.parameters)==null?void 0:p.docs),{source:s({originalSource:"() => standardExampleHtml"},(_=(u=o.parameters)==null?void 0:u.docs)==null?void 0:_.source)})});var r,f,b;i.parameters=a(s({},i.parameters),{docs:a(s({},(r=i.parameters)==null?void 0:r.docs),{source:s({originalSource:"() => editExampleHtml"},(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source)})});var m,g,v;e.parameters=a(s({},e.parameters),{docs:a(s({},(m=e.parameters)==null?void 0:m.docs),{source:s({originalSource:"() => noDataExampleHtml"},(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source)})});const Y=["Standard","Edit","NoData"];export{i as Edit,e as NoData,o as Standard,Y as __namedExportsOrder,A as default};
