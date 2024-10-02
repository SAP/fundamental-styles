var I=Object.defineProperty,U=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var p=(s,a,t)=>a in s?I(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,i=(s,a)=>{for(var t in a||(a={}))z.call(a,t)&&p(s,t,a[t]);if(v)for(var t of v(a))G.call(a,t)&&p(s,t,a[t]);return s},n=(s,a)=>U(s,A(a));/* empty css               *//* empty css             *//* empty css             *//* empty css                */const F=`<div class="fd-vertical-nav fd-vertical-nav--overflow" style="max-height: 200px;">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 5">
        <ul class="fd-list" aria-label="Main Menu List 5">
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable" onclick="toggleVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-right-arrow" aria-label="Expand second submenu 3"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--indicated" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                        <span class="fd-list__navigation-item-indicator"></span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--course-book"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--employee"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--indicated" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--lead
                "></i>
                <span class="fd-list__navigation-item-text">Sales</span>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--filter-analytics"></i>
                <span class="fd-list__navigation-item-text">Analytics</span>
            </li>
            <li role="listitem" class="fd-list__group-header fd-vertical-nav__group-header">
                <span class="fd-list__title">Employee Services</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--headset"></i>
                <span class="fd-list__navigation-item-text">Support</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--nutrition-activity"></i>
                <span class="fd-list__navigation-item-text">Lunch</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--stethoscope"></i>
                <span class="fd-list__navigation-item-text">Health</span>
            </li>
        </ul>
    </nav>
</div>
`,Y=`<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 5">
        <ul class="fd-list" aria-label="Main Menu List 5">
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable" onclick="toggleVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-right-arrow" aria-label="Expand second submenu 3"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--indicated" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                        <span class="fd-list__navigation-item-indicator"></span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--course-book"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--employee"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--indicated" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--lead
                "></i>
                <span class="fd-list__navigation-item-text">Sales</span>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--filter-analytics"></i>
                <span class="fd-list__navigation-item-text">Analytics</span>
            </li>
            <li role="listitem" class="fd-list__group-header fd-vertical-nav__group-header">
                <span class="fd-list__title">Employee Services</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--headset"></i>
                <span class="fd-list__navigation-item-text">Support</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--nutrition-activity"></i>
                <span class="fd-list__navigation-item-text">Lunch</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--stethoscope"></i>
                <span class="fd-list__navigation-item-text">Health</span>
            </li>
        </ul>
    </nav>
</div>
`,B=`<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 3">
        <ul class="fd-list" aria-label="Main Menu List 3">
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded" aria-label="Expand second submenu 3"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--indicated" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                        <span class="fd-list__navigation-item-indicator"></span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
        </ul>
    </nav>
</div>
<br/><br/>
<div class="fd-vertical-nav fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 4">
        <ul class="fd-list" aria-label="Main Menu List 4">
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" id="parentCalendarButton" onclick="toggleCondensedVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow" aria-label="Expand second submenu 4"></button>
                <span class="fd-list__navigation-item-indicator"></span>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-list__navigation-item-popover--first-level" aria-hidden="false" id="popoverA1">
                    <ul class="fd-list">
                        <li class="fd-list__navigation-item fd-list__navigation-item--condensed">
                            <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                            <span class="fd-list__navigation-item-text">Calendar</span>
                        </li>
                    </ul>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-list__navigation-item-popover--second-level" aria-hidden="false" id="popoverA2">
                    <ul class="fd-list">
                        <li class="fd-list__navigation-item fd-list__navigation-item--condensed fd-list__navigation-item--indicated" tabindex="0">
                            <span class="fd-list__navigation-item-text">Second level item 1</span>
                            <span class="fd-list__navigation-item-indicator"></span>
                        </li>
                        <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                            <span class="fd-list__navigation-item-text">Second level item 2</span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`,W=`<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 3">
        <ul class="fd-list" aria-label="Main Menu List 3">
            <li class="fd-list__navigation-item" tabindex="0">
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <span class="fd-list__navigation-item-text">Calendar</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded" aria-label="Expand second submenu 3"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <span class="fd-list__navigation-item-text">Customers</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded" aria-label="Expand third submenu 2"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`,j=`<div class="fd-vertical-nav fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 2">
        <ul class="fd-list" aria-label="Main Menu List 2">
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`,q=`<div class="fd-vertical-nav" style="height: 450px;">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded" aria-label="Expand second submenu"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
    <nav class="fd-vertical-nav__utility-section" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--legend"></i>
                <span class="fd-list__navigation-item-text">Legal Information</span>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--chain-link"></i>
                <span class="fd-list__navigation-item-text">Useful Links</span>
            </li>
        </ul>
    </nav>
</div>
<br/><br/>
<div class="fd-vertical-nav fd-vertical-nav--condensed">
  <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 2">
    <ul class="fd-list" aria-label="Main Menu List 2">
      <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
        <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
        <span class="fd-list__navigation-item-text">Overview</span>
      </li>
      <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
        <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
        <span class="fd-list__navigation-item-text">Calendar</span>
      </li>
      <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
        <i role="presentation" class="fd-list__navigation-item-icon sap-icon--customer"></i>
        <span class="fd-list__navigation-item-text">Customers</span>
      </li>
      <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
        <i role="presentation" class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
        <span class="fd-list__navigation-item-text">Deliveries</span>
      </li>
    </ul>
  </nav>
  <nav class="fd-vertical-nav__utility-section" aria-label="Main Menu">
    <ul class="fd-list" aria-label="Main Menu List">
        <li class="fd-list__navigation-item" tabindex="0">
            <i role="presentation" class="fd-list__navigation-item-icon sap-icon--legend"></i>
            <span class="fd-list__navigation-item-text">Legal Information</span>
        </li>
        <li class="fd-list__navigation-item" tabindex="0">
            <i role="presentation" class="fd-list__navigation-item-icon sap-icon--chain-link"></i>
            <span class="fd-list__navigation-item-text">Useful Links</span>
        </li>
    </ul>
  </nav>
</div>
`,J=`<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar Calendar Calendar Calendar Calendar Calendar </span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded" aria-label="Expand submenu"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2 Second level item 2 Second level item 2 Second level item 2 Second level item 2 </span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--expandable is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
                <button class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded" aria-label="Expand second submenu"></button>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item" tabindex="0">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item" tabindex="0">
                <i role="presentation" class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;const Z={title:"Components/Vertical Navigation",parameters:{description:`
The Vertical Navigation can be used as an alternative to the Horizontal Navigation.<br>
This navigation type is composed by two distinct item levels:<br>

- First Level items - always visible, can be either navigable in and of themselves or be a container for Second Level items (it should not be both)
- Second Level items → Are always contained by a First Level item, and can have their visibility toggled by this First Level item. They are always only navigable

##Usage
**Use the vertical navigation if:**

- You need to display global navigation structures of up to two levels.
- Your scenarios are in the tooling or administration space.
- If you want the entries to change as though they are dynamic content.

**Do not use the vertical navigation if:**

- Your scenarios are not in the tooling or administration space.

##States
Vertical navigation can be viewed in three different states:

- **Expanded:** everything is shown; icons and/or text.
- **Condensed:** only icons are shown; text-only condensed state is not supported.
- **Off-canvas:** side navigation is completely off-screen, and can be triggered via the menu icon in the shellbar.
**Note:** It is recommend to use only two states per device.
        `,tags:["btp","theme","development"]}},e=()=>J;e.storyName="Default";e.parameters={docs:{description:{story:`
The default vertical navigation is comprised of several navigation list items.
        `}}};const l=()=>q;l.storyName="Utility Section";l.parameters={docs:{description:{story:`
The vertical navigation can also have a bottom-aligned "Utility" section.
        `}}};const r=()=>j;r.parameters={docs:{description:{story:`
In condensed mode, only icons are shown unless some navigation items have second levels and the second level is expanded.
        `}}};const o=()=>W;o.storyName="Text Only";o.parameters={docs:{description:{story:`
A vertical navigation list does not need to have icons. However this is only available in expanded mode.
        `}}};const d=()=>B;d.storyName="Navigation Indication";d.parameters={docs:{description:{story:`
All the possible combinations of navigation indication are visualized below. When a second level item has been navigated to and the second list has been collapsed, the indicator is shown on the right of the corresponding first level item, but the text and icon color do not change.
        `}}};const _=()=>Y;_.parameters={docs:{description:{story:`The Vertical Navigation items can be further visually grouped using the Group Header List Item.
        `}}};const c=()=>F;c.storyName="Grouping with Overflow";c.parameters={docs:{description:{story:'To clip the content and add a vertical scroll to the Vertical Navigation add the  `fd-vertical-nav--overflow` modifier class to the `fd-vertical-nav` base class. You need to manually set the max-height of the element on the `fd-vertical-nav` level. For example: `style="max-height: 200px;"`.\n        '}}};var m,g,f;e.parameters=n(i({},e.parameters),{docs:n(i({},(m=e.parameters)==null?void 0:m.docs),{source:i({originalSource:"() => cozyExampleHtml"},(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source)})});var u,x,b;l.parameters=n(i({},l.parameters),{docs:n(i({},(u=l.parameters)==null?void 0:u.docs),{source:i({originalSource:"() => utilityExampleHtml"},(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source)})});var h,y,w;r.parameters=n(i({},r.parameters),{docs:n(i({},(h=r.parameters)==null?void 0:h.docs),{source:i({originalSource:"() => condensedExampleHtml"},(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var S,M,C;o.parameters=n(i({},o.parameters),{docs:n(i({},(S=o.parameters)==null?void 0:S.docs),{source:i({originalSource:"() => textExampleHtml"},(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source)})});var E,L,N;d.parameters=n(i({},d.parameters),{docs:n(i({},(E=d.parameters)==null?void 0:E.docs),{source:i({originalSource:"() => indicationExampleHtml"},(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source)})});var H,O,k;_.parameters=n(i({},_.parameters),{docs:n(i({},(H=_.parameters)==null?void 0:H.docs),{source:i({originalSource:"() => groupingExampleHtml"},(k=(O=_.parameters)==null?void 0:O.docs)==null?void 0:k.source)})});var V,D,T;c.parameters=n(i({},c.parameters),{docs:n(i({},(V=c.parameters)==null?void 0:V.docs),{source:i({originalSource:"() => groupingOverflowExampleHtml"},(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source)})});const $=["Cozy","Utility","Condensed","Text","Indication","Grouping","GroupingOverflow"];export{r as Condensed,e as Cozy,_ as Grouping,c as GroupingOverflow,d as Indication,o as Text,l as Utility,$ as __namedExportsOrder,Z as default};
