var x=Object.defineProperty,b=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var _=(e,n,i)=>n in e?x(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,a=(e,n)=>{for(var i in n||(n={}))I.call(n,i)&&_(e,i,n[i]);if(m)for(var i of m(n))N.call(n,i)&&_(e,i,n[i]);return e},t=(e,n)=>b(e,M(n));/* empty css             */const w=`<div class="fd-navigation-menu">
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
`,k=`<div class="fd-navigation-menu">
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
`,y=`<div class="fd-navigation-menu">
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
`;const G={title:"Dev/Navigation Menu",parameters:{description:"",tags:["btp","development","horizon-only"]}},s=()=>w;s.storyName="Parent Navigation Menu Item";s.parameters={docs:{description:{story:`The Parent Navigation Menu Item has base class <code>.fd-navigation-menu__item</code>. <br>
      When the item has children use the <code>fd-navigation-menu__item--has-children</code> modifier class. <br>
      For item with external link indicator apply the <code>fd-navigation-menu__item--has-link-indicator</code> modifier class.
      `}}};const d=()=>k;d.storyName="Child Navigation Menu Item";d.parameters={docs:{description:{story:`For Child Navigation Menu Item apply the <code>.fd-navigation-menu__item--child</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `}}};const o=()=>y;o.storyName="Group Navigation Menu Item";o.parameters={docs:{description:{story:`For Group Navigation Menu Item apply the <code>.fd-navigation-menu__item--group</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `}}};var c,v,u;s.parameters=t(a({},s.parameters),{docs:t(a({},(c=s.parameters)==null?void 0:c.docs),{source:a({originalSource:"() => navigationMenuItemExampleHtml"},(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source)})});var r,l,p;d.parameters=t(a({},d.parameters),{docs:t(a({},(r=d.parameters)==null?void 0:r.docs),{source:a({originalSource:"() => navigationMenuItemChildExampleHtml"},(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source)})});var g,f,h;o.parameters=t(a({},o.parameters),{docs:t(a({},(g=o.parameters)==null?void 0:g.docs),{source:a({originalSource:"() => navigationMenuItemGroupExampleHtml"},(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source)})});const H=["NavigationMenuItem","NavigationMenuItemChild","NavigationMenuItemGroup"];export{s as NavigationMenuItem,d as NavigationMenuItemChild,o as NavigationMenuItemGroup,H as __namedExportsOrder,G as default};
