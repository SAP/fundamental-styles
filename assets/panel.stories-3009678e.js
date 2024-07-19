var N=Object.defineProperty,w=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(n,a,i)=>a in n?N(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,e=(n,a)=>{for(var i in a||(a={}))L.call(a,i)&&c(n,i,a[i]);if(u)for(var i of u(a))P.call(a,i)&&c(n,i,a[i]);return n},t=(n,a)=>w(n,H(a));/* empty css               *//* empty css             *//* empty css              *//* empty css                         *//* empty css                */const C=`<div class="fd-panel fd-panel--transparent" aria-labelledby="__panel-title-4" role="form">
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
`,D=`<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-1" role="form">
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
`,j=`<div class="fd-panel fd-panel--fixed" aria-labelledby="__panel-title-10" role="form">
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
`,A=`<div class="fd-panel" aria-labelledby="__panel-title-7" role="form">
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
`,k=`<div class="fd-panel fd-panel--fixed" aria-labelledby="__panel-title-6" role="form">
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
`,z={title:"Components/Panel",parameters:{description:`
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

  `}},l=()=>k;l.parameters={docs:{description:{story:`When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        `}}};const r=()=>A;r.parameters={docs:{description:{story:`Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).
        `}}};const s=()=>j;s.storyName="Fixed height";s.parameters={docs:{description:{story:`When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        `}}};const o=()=>D;o.parameters={docs:{description:{story:"Panel may have a border or not. For Panel without border use the `.fd-panel--borderless ` modifier class.\n        "}}};const d=()=>C;d.parameters={docs:{description:{story:"The background of the content can be set to transparent by applying the `.fd-panel--transparent ` modifier class.\n        "}}};var p,m,b;l.parameters=t(e({},l.parameters),{docs:t(e({},(p=l.parameters)==null?void 0:p.docs),{source:e({originalSource:"() => fixedExampleHtml"},(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source)})});var f,v,_;r.parameters=t(e({},r.parameters),{docs:t(e({},(f=r.parameters)==null?void 0:f.docs),{source:e({originalSource:"() => expandableExampleHtml"},(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source)})});var g,h,x;s.parameters=t(e({},s.parameters),{docs:t(e({},(g=s.parameters)==null?void 0:g.docs),{source:e({originalSource:"() => fixedHeightContentExampleHtml"},(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source)})});var q,V,y;o.parameters=t(e({},o.parameters),{docs:t(e({},(q=o.parameters)==null?void 0:q.docs),{source:e({originalSource:"() => borderlessExampleHtml"},(y=(V=o.parameters)==null?void 0:V.docs)==null?void 0:y.source)})});var M,S,E;d.parameters=t(e({},d.parameters),{docs:t(e({},(M=d.parameters)==null?void 0:M.docs),{source:e({originalSource:"() => transparentExampleHtml"},(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source)})});const U=["Fixed","Expandable","FixedHeightContent","Borderless","Transparent"];export{o as Borderless,r as Expandable,l as Fixed,s as FixedHeightContent,d as Transparent,U as __namedExportsOrder,z as default};
