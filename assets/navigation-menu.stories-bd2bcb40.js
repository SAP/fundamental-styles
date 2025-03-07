/* empty css             */const e=`<div class="fd-navigation-menu">
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
`,t=`<div class="fd-navigation-menu">
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
`,s=`<div class="fd-navigation-menu">
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
`;const o={title:"Dev/Navigation Menu",parameters:{description:"",tags:["btp","development","horizon-only"]}},n=()=>e;n.storyName="Parent Navigation Menu Item";n.parameters={docs:{description:{story:`The Parent Navigation Menu Item has base class <code>.fd-navigation-menu__item</code>. <br>
      When the item has children use the <code>fd-navigation-menu__item--has-children</code> modifier class. <br>
      For item with external link indicator apply the <code>fd-navigation-menu__item--has-link-indicator</code> modifier class.
      `}}};const i=()=>t;i.storyName="Child Navigation Menu Item";i.parameters={docs:{description:{story:`For Child Navigation Menu Item apply the <code>.fd-navigation-menu__item--child</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `}}};const a=()=>s;a.storyName="Group Navigation Menu Item";a.parameters={docs:{description:{story:`For Group Navigation Menu Item apply the <code>.fd-navigation-menu__item--group</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => navigationMenuItemExampleHtml",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => navigationMenuItemChildExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => navigationMenuItemGroupExampleHtml",...a.parameters?.docs?.source}}};const m=["NavigationMenuItem","NavigationMenuItemChild","NavigationMenuItemGroup"];export{n as NavigationMenuItem,i as NavigationMenuItemChild,a as NavigationMenuItemGroup,m as __namedExportsOrder,o as default};
