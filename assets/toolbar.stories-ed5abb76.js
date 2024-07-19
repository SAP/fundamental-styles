var I=Object.defineProperty,A=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(s,a,o)=>a in s?I(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,t=(s,a)=>{for(var o in a||(a={}))P.call(a,o)&&c(s,o,a[o]);if(d)for(var o of d(a))j.call(a,o)&&c(s,o,a[o]);return s},n=(s,a)=>A(s,D(a));/* empty css                *//* empty css               *//* empty css             *//* empty css                */const H=`<h3>Left and right-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Left and right-aligned toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--reject">Reject</button>
</div>
<h3>Left-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Left-aligned toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <button class="fd-button fd-button--reject">Reject</button>
</div>
<h3>Centered</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Centered toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Centered</button>
    <span class="fd-toolbar__spacer"></span>
</div>
<h3>Right-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Right-aligned toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Left, center, and right-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <button class="fd-button">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Centered</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Spacers</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Spacers toolbar">
    <button class="fd-button">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Spacers with fixed width</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Spacers with fixed width toolbar">
    <button class="fd-button fd-button--transparent">Accept</button>
    <button class="fd-button fd-button--transparent">Reject</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:50px;"></span>
    <button class="fd-button">Edit</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:150px;"></span>
    <button class="fd-button fd-button--transparent">Delete</button>
</div>
`,L=`
<div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--reject">Reject</button>
    <span class="fd-toolbar__separator"></span>
</div>
<br><br>
<div class="fd-toolbar fd-toolbar--solid" role="toolbar" aria-label="Toolbar">
    <span class="fd-toolbar__spacer"></span>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
`,R=`<div style="padding: 1rem">
    <h3>Solid</h3>
    <div class="fd-toolbar fd-toolbar--solid" role="toolbar" aria-label="Solid toolbar">
        <span>Products (23)</span>
        <button class="fd-button fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Transparent</h3>
    <div class="fd-toolbar fd-toolbar--transparent" role="toolbar" aria-label="Transparent toolbar">
        <button class="fd-button fd-button--transparent">Create</button>
        <button class="fd-button fd-button--transparent">Save</button>
        <span class="fd-toolbar__spacer"> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Auto</h3>
    <div class="fd-toolbar fd-toolbar--auto" role="toolbar" aria-label="Auto toolbar">
        <button class="fd-button fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer"> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Clear</h3>
    <div class="fd-toolbar fd-toolbar--clear" role="toolbar" aria-label="Clear toolbar">
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Info (not active)</h3>
    <div class="fd-toolbar fd-toolbar--info" role="toolbar" aria-label="Info, not active toolbar">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Info (active)</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active" tabindex="0" role="toolbar" aria-label="Info, active toolbar">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Info (active, hover state)</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active is-hover" tabindex="0" role="toolbar" aria-label="Info, active toolbar, hover state">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Info (active, active state)</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active is-active" tabindex="0" role="toolbar" aria-label="Info, active toolbar, active state">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Title</h3>
    <div class="fd-toolbar fd-toolbar--title" role="toolbar" aria-label="Title toolbar">
        <h4 class="fd-title fd-title--h4 fd-toolbar__title">Products (104)</h4>
        <span class="fd-toolbar__spacer"></span>
        <button class="fd-button fd-button--transparent">Save</button>
        <button class="fd-button fd-button--transparent">Delete</button>
    </div>
</div>
`,z=`<div style="height:450px">
    <div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
        <span>Products (34)</span>
        <button class="fd-button fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer"> </span>
        <button class="fd-button fd-button--transparent">Save</button>
        <button class="fd-button fd-button--transparent">Copy</button>
        <span class="fd-toolbar__separator"></span>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button class="fd-button fd-button--transparent"
                        aria-controls="wgxzK85912"
                        aria-haspopup="true"
                        aria-expanded="true"
                        id="amr9034qihr"
                        onclick="toggleElAttrs('wgxzK85912', ['aria-hidden']);toggleElAttrs('amr9034qihr', ['aria-expanded']);"
                        aria-label="More">
                    <i class="sap-icon--overflow"></i>
                </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                 aria-hidden="false"
                 id="wgxzK85912">
                <div class="fd-toolbar__overflow">
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Edit</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Delete</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Assign</button>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Exit</button>
                    <span class="fd-toolbar__separator"></span>
                    <label class="fd-label fd-toolbar__overflow-label">Label</label>
                    <label class="fd-form-label fd-toolbar__overflow-label">Form Label</label>
                </div>
            </div>
        </div>
    </div>
</div>`,k=`<div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
    <span class="fd-toolbar__spacer"> </span>
    <button class="fd-button fd-button--transparent">New</button>
    <button class="fd-button fd-button--transparent">Open</button>
    <button class="fd-button fd-button--transparent">Edit</button>
    <button class="fd-button fd-button--transparent">Delete</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
`,K={title:"Components/Toolbar",parameters:{description:`The toolbar enables the user to change the UI or trigger an action. For example, the user can change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. This component is usually paired with buttons, which are always right-aligned.

##Usage
**Toolbar actions can be as follows:**

- They can be independent of the current selection and not related to a specific item or object.
- They can be specific to the current object (user selects one item).
- They can apply to a set of items (user selects two or more items).
- They can control the settings for parts of the UI content. For example, an action can affect all items in a **Table**.

##Sizes
There are two sizes of the toolbar that should be chosen based on the type of device and its screen width.

Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Screen width&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Device
:---- | :-------- | :--------- | :-------
Cozy | default | < 599 px | Mobile and small tablets
Compact |  \`is-compact\` | 600 px and above | Desktop
<br>

        `,tags:["f3","a11y","theme","design"]}},r=()=>k;r.parameters={docs:{description:{story:`
The primary toolbar displays several actions separated by icon buttons. It is displayed in cozy mode, which is ideal for mobile and small tablet screens.
`}}};const l=()=>z;l.parameters={docs:{description:{story:"The Overflow behaviour of the toolbar can place elements in an overflow state when there is not enough space to display all of them.\n      The overflowing elements are represented by a button and upon interacting with the button a popover with a list of elements is shown. <br> The vertical spacing between the elements is achieved by additional modifier classes: <br>\n- `fd-toolbar__overflow-button` for buttons <br>\n- `fd-toolbar__overflow-button--menu` for menu button<br>\n- `fd-toolbar__overflow-label` for label <br>\n- `fd-toolbar__overflow-form-label` for form label <br>"}}};const b=()=>R,e=()=>L;e.storyName="Separators";e.parameters={docs:{description:{story:"Separators should be used to visually separate items from each other. To display separators in toolbars, add the `fd-toolbar__separator` class after the component you are separating.\n"}}};b.parameters={docs:{description:{story:"Toolbar can be styled in various ways depending on the use case.\n\nTypes | Modifier class | Description\n:-------- | :------------- | :---------------\nSolid | `fd-toolbar--solid` | Displays a solid background color.\nTransparent | `fd-toolbar--transparent` | Displays a transparent background.\nAuto | ` fd-toolbar--auto` | Can inherit the design from the parent component it’s being used with.\nInfo | ` fd-toolbar--info` | When the toolbar is set to the active state it becomes an info bar. The info bar is fully clickable and is not recommended to be used as a generic toolbar. Recommended contents are text and an icon.\nTitle | ` fd-toolbar--title` | Should be used whenever a title is required.\nNo border-bottom | `fd-toolbar--clear` | This is not a type, but it removes the bottom border of each toolbar type.\nActive | ` fd-toolbar--active` | This is also not a type, but it enables active and hover states in each type.\n\n"}}};const i=()=>H;i.parameters={docs:{description:{story:`Toolbars are typically used for left/right alignment; however, they can be displayed in any way with the \`fd-toolbar__spacer\` class.

**Note:** Spacers share the horizontal space equally; therefore, the content is not centered as precisely as it is in the **Bar** component.
`}}};var p,u,f;r.parameters=n(t({},r.parameters),{docs:n(t({},(p=r.parameters)==null?void 0:p.docs),{source:t({originalSource:"() => primaryExampleHtml"},(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source)})});var h,v,_;l.parameters=n(t({},l.parameters),{docs:n(t({},(h=l.parameters)==null?void 0:h.docs),{source:t({originalSource:"() => overflowExampleHtml"},(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source)})});var m,y,g;b.parameters=n(t({},b.parameters),{docs:n(t({},(m=b.parameters)==null?void 0:m.docs),{source:t({originalSource:"() => typesExampleHtml"},(g=(y=b.parameters)==null?void 0:y.docs)==null?void 0:g.source)})});var w,x,T;e.parameters=n(t({},e.parameters),{docs:n(t({},(w=e.parameters)==null?void 0:w.docs),{source:t({originalSource:"() => separatorExampleHtml"},(T=(x=e.parameters)==null?void 0:x.docs)==null?void 0:T.source)})});var S,C,E;i.parameters=n(t({},i.parameters),{docs:n(t({},(S=i.parameters)==null?void 0:S.docs),{source:t({originalSource:"() => alignmentExampleHtml"},(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source)})});const U=["Primary","Overflow","Types","Separator","Alignment"];export{i as Alignment,l as Overflow,r as Primary,e as Separator,b as Types,U as __namedExportsOrder,K as default};
