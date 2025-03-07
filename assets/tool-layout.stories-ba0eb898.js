const o=`<div class="sap-tool-layout">
    <div class="sap-tool-layout__container">
        <div class="sap-tool-layout__header-container">
            <div style="width: 100%; height: 3rem; background: #103900;"></div>
        </div>
    </div>
    <div class="sap-tool-layout__container">
        <div class="sap-tool-layout__navigation-container">
            <div style="width: 15rem; height: 20rem; background: #06BA63;"></div>
        </div>
        <div class="sap-tool-layout__content-container">
            <div style="width: 100%; height: 20rem; background: #0FFF95;"></div>
        </div>
    </div>
</div>

`,s=`<h4>With Vertical Navigation</h4>
<div style="width: 800px;">
    <div class="sap-tool-layout sap-tool-layout--tablet">
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #103900;"></div>
            </div>
        </div>
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__navigation-container">
                <div style="width: 5rem; height: 20rem; background: #06BA63"></div>
            </div>
            <div class="sap-tool-layout__content-container">
                <div  style="width: 100%; height: 20rem; background: #0FFF95;"></div>
            </div>
        </div>
    </div>
</div>
<br><br>
<h4>With Horizontal Navigation</h4>
<div style="width: 800px;">
    <div class="sap-tool-layout sap-tool-layout--tablet sap-tool-layout--horizontal-navigation">
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #103900;"></div>
            </div>
        </div>
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__navigation-container sap-tool-layout__navigation-container--horizontal">
                <div style="width: 100%; height: 3rem; background: #06BA63;"></div>
            </div>
            <div class="sap-tool-layout__content-container">
                <div style="width: 100%; height: 20rem; background: #0FFF95;"></div>
            </div>
        </div>
    </div>
</div>
`,n=`<div style="width: 20rem;">
    <div class="sap-tool-layout sap-tool-layout--phone">
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #103900;"></div>
            </div>
        </div>
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__content-container">
                <div style="width: 100%; height: 20rem; background: #06BA63;"></div>
            </div>
        </div>
    </div>
</div>
`,u=`<div style="height: 30rem; position: relative;">
    <div class="sap-tool-layout sap-tool-layout--sticky">
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #103900;"></div>
            </div>
        </div>
        <div class="sap-tool-layout__container">
            <div class="sap-tool-layout__navigation-container">
                <div style="width: 15rem; height: 100%; background: #06BA63;"></div>
            </div>
            <div class="sap-tool-layout__content-container">
                <div style="width: 100%; height: 100%; background: #0FFF95;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. 
                </div>
            </div>
        </div>
    </div>
</div>


`;const r={title:"Tool Layout",parameters:{description:`The Tool Layout is an essential part of most BTP tools. The layout combines the Tool Header and the Navigation components in one consistent structure. In addition, it provides necessary interaction between the two components out of the box.
## Anatomy
- <b>Tool Header </b>- always present and is a top-aligned UI element that contains global actions and controls navigation
- <b>Navigation </b>- side navigation in all of its variants (expanded, snapped)
- <b>Content </b>- an empty container area that can hold any content.

## Structure
- <code>.sap-tool-layout</code>
  - <code>.sap-tool-layout--tablet</code>&nbsp; - modifier class for tablets
  - <code>.sap-tool-layout--phone</code>&nbsp; - modifier class for phones
  - <code>.sap-tool-layout--sticky</code>&nbsp; - modifier class for positioning the header on the top
  - <code>.sap-tool-layout--horizontal-navigation</code>&nbsp; - modifier class for layout with Horizontal Navigation
- <code>.sap-tool-layout__container</code>
- <code>.sap-tool-layout__header-container</code>&nbsp; - wraping element around the Tool Header
- <code>.sap-tool-layout__navigation-container</code>&nbsp; - wraping element around the Navigation (all its variants)
  - <code>.sap-tool-layout__navigation-container--horizontal</code>&nbsp; - modifier class for when the navigation is horizontal
- <code>.sap-tool-layout__content-container</code>&nbsp; - wraping element around the page content. By default, the background of the content area is <code>var(--sapBackgroundColor)</code>
  - <code>.sap-tool-layout__content-container--transparent</code>&nbsp; - modifier class to apply transparent background to the content area.
  - <code>.sap-tool-layout__content-container--list</code>&nbsp; - modifier class to apply list <code>var(--sapGroup_ContentBackground)</code> background to the content area.
`,tags:["btp","development","horizon-only"]}},e=()=>o;e.parameters={docs:{description:{story:""}}};const t=()=>u;t.parameters={docs:{description:{story:"The <code>fd-tool-layout--sticky</code> modifier class will position the whole layout absolutely with the header container always on top. The navigation and content containers receive the scroll overflow."}}};const i=()=>s;i.parameters={docs:{description:{story:"Apply the <code>sap-tool-layout--tablet</code> modifier class for tablet devices."}}};const a=()=>n;a.parameters={docs:{description:{story:"Apply the <code>sap-tool-layout--phone</code> modifier class for mobile devices."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => desktopExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => stickyExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => tabletExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => mobileExampleHtml",...a.parameters?.docs?.source}}};const l=["Desktop","Sticky","Tablet","Mobile"];export{e as Desktop,a as Mobile,t as Sticky,i as Tablet,l as __namedExportsOrder,r as default};
