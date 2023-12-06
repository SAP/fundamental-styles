/* empty css             */const u=`<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item is-hover" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item is-active" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected) with children
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-link-indicator is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected) with external link indicator
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item is-focus" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
`,r=`<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-hover" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-active" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-selected" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-focus" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
`,l=`<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-hover" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-active" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-selected" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-focus" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <br>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
`;const g={title:"Dev/Navigation Menu",parameters:{description:"",tags:["btp","development","horizon-only"]}},n=()=>u;n.storyName="Parent Navigation Menu Item";n.parameters={docs:{description:{story:`The Parent Navigation Menu Item has base class <code>.fd-navigation-menu__item</code>. <br>
      When the item has children use the <code>fd-navigation-menu__item--has-children</code> modifier class. <br>
      For item with external link indicator apply the <code>fd-navigation-menu__item--has-link-indicator</code> modifier class.
      `}}};const i=()=>r;i.storyName="Child Navigation Menu Item";i.parameters={docs:{description:{story:`For Child Navigation Menu Item apply the <code>.fd-navigation-menu__item--child</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `}}};const a=()=>l;a.storyName="Group Navigation Menu Item";a.parameters={docs:{description:{story:`For Group Navigation Menu Item apply the <code>.fd-navigation-menu__item--group</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `}}};var e,t,s;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:"() => navigationMenuItemExampleHtml",...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var d,o,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"() => navigationMenuItemChildExampleHtml",...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var _,c,v;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:"() => navigationMenuItemGroupExampleHtml",...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const f=["NavigationMenuItem","NavigationMenuItemChild","NavigationMenuItemGroup"];export{n as NavigationMenuItem,i as NavigationMenuItemChild,a as NavigationMenuItemGroup,f as __namedExportsOrder,g as default};
//# sourceMappingURL=navigation-menu.stories-5b88307e.js.map
