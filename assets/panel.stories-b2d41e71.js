/* empty css               *//* empty css             *//* empty css              *//* empty css                         *//* empty css                */const x=`<div class="fd-panel fd-panel--transparent" aria-labelledby="__panel-title-4" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button onclick="toggleExpandedButton(event)" class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-4">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-4">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-4" class="fd-panel__content" aria-hidden="false" id="__panel-4">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<br><br>

<div class="fd-panel fd-panel--fixed fd-panel--transparent" aria-labelledby="__panel-title-5" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-5">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-5" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`,q=`<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-1" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" onclick="toggleExpandedButton(event)"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-1">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-1">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-1" class="fd-panel__content" aria-hidden="true" id="__panel-1">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<br><br>

<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-2" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-2">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-2">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-2" class="fd-panel__content" aria-hidden="false" id="__panel-2">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<br><br>

<div class="fd-panel fd-panel--fixed fd-panel--borderless" aria-labelledby="__panel-title-3" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-3">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-3" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`,V=`<div class="fd-panel fd-panel--fixed" aria-labelledby="__panel-title-10" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-10">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
</div>
`,y=`<div class="fd-panel" aria-labelledby="__panel-title-7" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" onclick="toggleExpandedButton(event)"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-7">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-7">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-7" class="fd-panel__content" aria-hidden="true" id="__panel-7">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<div class="fd-panel" aria-labelledby="__panel-title-8" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-8">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-8">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-8" class="fd-panel__content" aria-hidden="false" id="__panel-8">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>
`,M=`<div class="fd-panel fd-panel--fixed" aria-labelledby="__panel-title-6" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-6">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-6" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`,L={title:"Components/Panel",parameters:{description:`
The panel is a container for grouping and displaying information. Panels are responsive and can be collapsed to save additional screen space.

##Usage
**Use the panel if:**

- You need to group or display information.
- You want to give users the option to hide this information.
- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).


**Do not use the panel in:**

- The content area of a **Dynamic Page**.


##Types
There are two types of panels: fixed and expandable.

  `}},a=()=>M;a.parameters={docs:{description:{story:`When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        `}}};const t=()=>y;t.parameters={docs:{description:{story:`Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).
        `}}};const e=()=>V;e.storyName="Fixed height";e.parameters={docs:{description:{story:`When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        `}}};const i=()=>q;i.parameters={docs:{description:{story:"Panel may have a border or not. For Panel without border use the `.fd-panel--borderless ` modifier class.\n        "}}};const n=()=>x;n.parameters={docs:{description:{story:"The background of the content can be set to transparent by applying the `.fd-panel--transparent ` modifier class.\n        "}}};var s,l,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"() => fixedExampleHtml",...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var o,d,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"() => expandableExampleHtml",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"() => fixedHeightContentExampleHtml",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"() => borderlessExampleHtml",...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,g,h;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:"() => transparentExampleHtml",...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const P=["Fixed","Expandable","FixedHeightContent","Borderless","Transparent"];export{i as Borderless,t as Expandable,a as Fixed,e as FixedHeightContent,n as Transparent,P as __namedExportsOrder,L as default};
//# sourceMappingURL=panel.stories-b2d41e71.js.map
