/* empty css                *//* empty css               *//* empty css             *//* empty css                */const g=`<h3>Left and right-aligned</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--reject">Reject</button>
</div>
<h3>Left-aligned</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <button class="fd-button fd-button--reject">Reject</button>
</div>
<h3>Centered</h3>
<div class="fd-toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Centered</button>
    <span class="fd-toolbar__spacer"></span>
</div>
<h3>Right-aligned</h3>
<div class="fd-toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Left, center, and right-aligned</h3>
<div class="fd-toolbar">
    <button class="fd-button">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Centered</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Spacers</h3>
<div class="fd-toolbar">
    <button class="fd-button">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Spacers with fixed width</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--transparent">Accept</button>
    <button class="fd-button fd-button--transparent">Reject</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:50px;"></span>
    <button class="fd-button">Edit</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:150px;"></span>
    <button class="fd-button fd-button--transparent">Delete</button>
</div>
`,w=`
<div class="fd-toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--reject">Reject</button>
    <span class="fd-toolbar__separator"></span>
</div>
<div class="fd-toolbar fd-toolbar--solid">
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
`,x=`<div style="padding: 1rem">
    <h3>Solid</h3>
    <div class="fd-toolbar fd-toolbar--solid">
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
    <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
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
    <div class="fd-toolbar fd-toolbar--clear fd-toolbar--auto">
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
    <h3>Info</h3>
    <div class="fd-toolbar fd-toolbar--info">3 item selected</div>
    <br>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active">3 item selected</div>
    <h3>Title</h3>
    <div class="fd-toolbar fd-toolbar--title">
        <h4 class="fd-title fd-title--h4 fd-toolbar__title">Products (104)</h4>
        <span class="fd-toolbar__spacer"></span>
        <button class="fd-button fd-button--transparent">Save</button>
        <button class="fd-button fd-button--transparent">Delete</button>
    </div>
</div>
`,S=`<div style="height:250px">
    <div class="fd-toolbar">
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
                </div>
            </div>
        </div>
    </div>
</div>`,T=`<div class="fd-toolbar">
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
`,P={title:"Components/Toolbar",parameters:{description:`The toolbar enables the user to change the UI or trigger an action. For example, the user can change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. This component is usually paired with buttons, which are always right-aligned.

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
Cozy | \`is-cozy\` | < 599 px | Mobile and small tablets
Compact | Default | 600 px and above | Desktop
<br>

        `,tags:["f3","a11y","theme","design"]}},n=()=>T;n.parameters={docs:{description:{story:`
The primary toolbar displays several actions separated by icon buttons. It is displayed in cozy mode, which is ideal for mobile and small tablet screens.
`}}};const a=()=>S;a.parameters={docs:{description:{story:"The overflow toolbar can display additional elements when space is limited. This can be achieved with a **Button** and/or **Popover** component.\n\nTo display an overflow in a button, pass the `sap-icon--overflow` in the `fd-button` class. Additionally, you can add a popover by passing `fd-popover` in the `fd-toolbar__overflow` element.\n Add any element inside overflow body with `fd-toolbar__overflow-button` , `fd-toolbar__overflow-button--menu` `fd-toolbar__overflow-label ` modifier ,        "}}};const o=()=>x,t=()=>w;t.storyName="Separators";t.parameters={docs:{description:{story:"Separators should be used to visually separate items from each other. To display separators in toolbars, add the `fd-toolbar__separator` class after the component you are separating.\n"}}};o.parameters={docs:{description:{story:"Toolbar can be styled in various ways depending on the use case.\n\nTypes | Modifier class | Description\n:-------- | :------------- | :---------------\nSolid | `fd-toolbar--solid` | Displays a solid background color.\nTransparent | `fd-toolbar--transparent` | Displays a transparent background.\nAuto | ` fd-toolbar--auto` | Can inherit the design from the parent component it’s being used with.\nInfo | ` fd-toolbar--info` | Commonly used to display information (text or icons) and is slightly smaller than the regular toolbar.\nTitle | ` fd-toolbar--title` | Should be used whenever a title is required.\nNo border-bottom | `fd-toolbar—clear` | This is not a type, but it removes the bottom border of each toolbar type.\nActive | ` fd-toolbar--active` | This is also not a type, but it enables active and hover states in each type.\n\n"}}};const s=()=>g;s.parameters={docs:{description:{story:`Toolbars are typically used for left/right alignment; however, they can be displayed in any way with the \`fd-toolbar__spacer\` class.

**Note:** Spacers share the horizontal space equally; therefore, the content is not centered as precisely as it is in the **Bar** component.
`}}};var e,r,l;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:"() => primaryExampleHtml",...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var b,d,i;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"() => overflowExampleHtml",...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"() => typesExampleHtml",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,h,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"() => separatorExampleHtml",...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,_,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"() => alignmentExampleHtml",...(y=(_=s.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const j=["Primary","Overflow","Types","Separator","Alignment"];export{s as Alignment,a as Overflow,n as Primary,t as Separator,o as Types,j as __namedExportsOrder,P as default};
//# sourceMappingURL=toolbar.stories-bbc729c5.js.map
