var b=Object.defineProperty,g=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var r=(e,a,t)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,n=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&r(e,t,a[t]);if(i)for(var t of i(a))E.call(a,t)&&r(e,t,a[t]);return e},l=(e,a)=>g(e,P(a));/* empty css                     *//* empty css              *//* empty css               */const L=`<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
      </div>
      <p class="fd-layout-panel__description">
        .fd-layout-panel__description
      </p>
    </div>
    <div class="fd-layout-panel__actions">
      .fd-layout-panel__actions
    </div>
  </div>
  <div class="fd-layout-panel__filters" id="">
    .fd-layout-panel__filters
  </div>
  <div class="fd-layout-panel__body">
    .fd-layout-panel__body
  </div>
  <div class="fd-layout-panel__footer fd-layout-panel__footer--end">
    .fd-layout-panel__footer.fd-layout-panel__footer--end
  </div>
</div>
<br><br>
<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
      </div>
      <p class="fd-layout-panel__description">
        .fd-layout-panel__description
      </p>
    </div>
    <div class="fd-layout-panel__actions">
      .fd-layout-panel__actions
    </div>
  </div>
  <div class="fd-layout-panel__filters" id="">
    .fd-layout-panel__filters
  </div>
  <div class="fd-layout-panel__body">
    .fd-layout-panel__body
  </div>
  <div class="fd-layout-panel__footer fd-layout-panel__footer--start">
    .fd-layout-panel__footer.fd-layout-panel__footer--start
  </div>
</div>
`,k=`<div class="fd-layout-panel fd-layout-panel--transparent">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
      </div>
      <p class="fd-layout-panel__description">
        .fd-layout-panel__description
      </p>
    </div>
    <div class="fd-layout-panel__actions">
      <button class="fd-button fd-button--emphasized">Action</button>
    </div>
  </div>
  <div class="fd-layout-panel__filters" id="">
    .fd-layout-panel__filters
  </div>
  <div class="fd-layout-panel__body">
    .fd-layout-panel__body
  </div>
  <div class="fd-layout-panel__footer">
    .fd-layout-panel__footer
  </div>
</div>
`,H=`<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
      </div>
      <p class="fd-layout-panel__description">
        .fd-layout-panel__description
      </p>
    </div>
    <div class="fd-layout-panel__actions">
      .fd-layout-panel__actions
    </div>
  </div>
  <div class="fd-layout-panel__filters" id="">
    .fd-layout-panel__filters
  </div>
  <div class="fd-layout-panel__body">
    .fd-layout-panel__body
  </div>
  <div class="fd-layout-panel__footer">
    .fd-layout-panel__footer
  </div>
</div>
`,z={title:"Layouts/Layout Panel",parameters:{description:"\n  Layout Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.\n\n  Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.\n\n  ## Elements\n  - `.fd-layout-panel`\n    - `.fd-layout-panel--transparent`: for Layout Panel with transparent background\n  - `.fd-layout-panel__header`\n  - `.fd-layout-panel__head`: Container for title and description\n  - `.fd-layout-panel__title`\n  - `.fd-layout-panel__description`\n  - `.fd-layout-panel__actions`: Layout Panel actions such as add, remove, delete, sort, etc.\n  - `.fd-layout-panel__filters`: Layout Panel filters that is specific to the data being displayed within the panel\n  - `.fd-layout-panel__body`: Main content of the Layout Panel can that hold lists, table, tree, text, form or any other infomation. \n    - `.fd-layout-panel__body--bleed`: removes the paddings on the body.\n  - `.fd-layout-panel__footer`: Layout Panel footer can be utilized for pagination, secondary actions, add more data, etc. \n    - `.fd-layout-panel__footer--start`: position the content of the footer to the left\n    - `.fd-layout-panel__footer--end`: position the content of the footer to the right\n      "}},o=()=>H,d=()=>k,s=()=>L;var p,_,f;o.parameters=l(n({},o.parameters),{docs:l(n({},(p=o.parameters)==null?void 0:p.docs),{source:n({originalSource:"() => primaryExampleHtml"},(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source)})});var c,u,y;d.parameters=l(n({},d.parameters),{docs:l(n({},(c=d.parameters)==null?void 0:c.docs),{source:n({originalSource:"() => transparentBackgroundExampleHtml"},(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source)})});var v,h,m;s.parameters=l(n({},s.parameters),{docs:l(n({},(v=s.parameters)==null?void 0:v.docs),{source:n({originalSource:"() => footerVariationsExampleHtml"},(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source)})});const F=["Primary","TransparentBackground","FooterVariations"];export{s as FooterVariations,o as Primary,d as TransparentBackground,F as __namedExportsOrder,z as default};
