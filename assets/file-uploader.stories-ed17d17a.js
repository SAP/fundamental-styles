var S=Object.defineProperty,x=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(i,l,n)=>l in i?S(i,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[l]=n,e=(i,l)=>{for(var n in l||(l={}))D.call(l,n)&&p(i,n,l[n]);if(r)for(var n of r(l))j.call(l,n)&&p(i,n,l[n]);return i},t=(i,l)=>x(i,U(l));/* empty css               *//* empty css                  *//* empty css                   *//* empty css              *//* empty css                      *//* empty css                      *//* empty css                   */const k=`<div class="fd-form-item">
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
</div>`,E=`<div class="fd-form-item">
    <label class="fd-form-label" id="browse_input7_label">Upload Document (Success)</label>
    <div class="fd-file-uploader" style="width: 300px;">
        <div class="fd-file-uploader__container">
            <input
                aria-labelledby="browse_input7_label"
                class="fd-input fd-file-uploader__input is-success"
                onclick="browseFile('input2');"
                id="browse_input7"
                type="text"
                title="Select a file"
                placeholder="Select a file"
                autocomplete="off"
            >
            <button
                class="fd-button fd-file-uploader__button"
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
            class="fd-input fd-file-uploader__input is-error"
            onclick="browseFile('input2');"
            id="browse_input4"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
        >
        <button
            class="fd-button fd-file-uploader__button"
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
            class="fd-input fd-file-uploader__input is-warning"
            onclick="browseFile('input2');"
            id="browse_input5"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
        >
        <button
            class="fd-button fd-file-uploader__button"
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
            class="fd-input fd-file-uploader__input is-information"
            onclick="browseFile('input2');"
            id="browse_input3"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
        >
        <button
            class="fd-button fd-file-uploader__button"
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
`,B=`<div class="fd-form-item">
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
`,H=`<div class="fd-form-item">
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
`;const L={title:"Components/File Uploader",parameters:{description:`
The File Uploader component allows the user to select the files from the system to upload.
It is an opinionated composition of the input and button components.

##Usage

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.
`,tags:["f3","a11y","theme"]}},a=()=>H;a.storyName="Default";a.parameters={docs:{description:{story:"File Uploader is a composition of the `fd-input` class and the `fd-button` one. The button triggers the action of searching for\n            the file which needs to be uploaded. The input field shows the predetermined title i.e. Choose a file for upload."}}};const s=()=>B;s.storyName="After Selecting";s.parameters={docs:{description:{story:"Once the user selects files, update the input and the hidden div to include the file names. The hidden div will announce the file names only once when the value changes."}}};const d=()=>E;d.parameters={docs:{description:{story:"For Status File Uploader apply the corresponding status class `is-success, is-error, is-warning, is-information ` modifier to the input element."}}};const o=()=>k;o.storyName="File Uploader with File List";o.parameters={docs:{description:{story:'<span class="fd-info-label fd-info-label--accent-color-3"><span class="fd-info-label__text">non-fiori 3</span></span><span style="margin-right: 0.5rem;"></span><span class="fd-info-label fd-info-label--accent-color-4"><span class="fd-info-label__text">CX</span></span>'}}};var c,f,u;a.parameters=t(e({},a.parameters),{docs:t(e({},(c=a.parameters)==null?void 0:c.docs),{source:e({originalSource:"() => primaryExampleHtml"},(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source)})});var b,_,m;s.parameters=t(e({},s.parameters),{docs:t(e({},(b=s.parameters)==null?void 0:b.docs),{source:e({originalSource:"() => selectedExampleHtml"},(m=(_=s.parameters)==null?void 0:_.docs)==null?void 0:m.source)})});var h,v,w;d.parameters=t(e({},d.parameters),{docs:t(e({},(h=d.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => statusExampleHtml"},(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source)})});var y,g,F;o.parameters=t(e({},o.parameters),{docs:t(e({},(y=o.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => fileUploaderWithFilesExampleHtml"},(F=(g=o.parameters)==null?void 0:g.docs)==null?void 0:F.source)})});const M=["Primary","Selected","Status","FileUploaderWithFiles"];export{o as FileUploaderWithFiles,a as Primary,s as Selected,d as Status,M as __namedExportsOrder,L as default};
