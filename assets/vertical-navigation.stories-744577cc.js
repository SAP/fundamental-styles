/* empty css               *//* empty css             *//* empty css             *//* empty css                */const o=`<div class="fd-vertical-nav fd-vertical-nav--overflow" style="max-height: 200px;">
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
`,d=`<div class="fd-vertical-nav">
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
`,c=`<div class="fd-vertical-nav">
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
`,r=`<div class="fd-vertical-nav">
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
`,_=`<div class="fd-vertical-nav fd-vertical-nav--condensed">
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
`,v=`<div class="fd-vertical-nav" style="height: 450px;">
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
`,p=`<div class="fd-vertical-nav">
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
`;const x={title:"Components/Vertical Navigation",parameters:{description:`
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
        `,tags:["btp","theme","development"]}},i=()=>p;i.storyName="Default";i.parameters={docs:{description:{story:`
The default vertical navigation is comprised of several navigation list items.
        `}}};const n=()=>v;n.storyName="Utility Section";n.parameters={docs:{description:{story:`
The vertical navigation can also have a bottom-aligned "Utility" section.
        `}}};const e=()=>_;e.parameters={docs:{description:{story:`
In condensed mode, only icons are shown unless some navigation items have second levels and the second level is expanded.
        `}}};const a=()=>r;a.storyName="Text Only";a.parameters={docs:{description:{story:`
A vertical navigation list does not need to have icons. However this is only available in expanded mode.
        `}}};const t=()=>c;t.storyName="Navigation Indication";t.parameters={docs:{description:{story:`
All the possible combinations of navigation indication are visualized below. When a second level item has been navigated to and the second list has been collapsed, the indicator is shown on the right of the corresponding first level item, but the text and icon color do not change.
        `}}};const l=()=>d;l.parameters={docs:{description:{story:`The Vertical Navigation items can be further visually grouped using the Group Header List Item.
        `}}};const s=()=>o;s.storyName="Grouping with Overflow";s.parameters={docs:{description:{story:'To clip the content and add a vertical scroll to the Vertical Navigation add the  `fd-vertical-nav--overflow` modifier class to the `fd-vertical-nav` base class. You need to manually set the max-height of the element on the `fd-vertical-nav` level. For example: `style="max-height: 200px;"`.\n        '}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => cozyExampleHtml",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => utilityExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => condensedExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => textExampleHtml",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => indicationExampleHtml",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => groupingExampleHtml",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => groupingOverflowExampleHtml",...s.parameters?.docs?.source}}};const b=["Cozy","Utility","Condensed","Text","Indication","Grouping","GroupingOverflow"];export{e as Condensed,i as Cozy,l as Grouping,s as GroupingOverflow,t as Indication,a as Text,n as Utility,b as __namedExportsOrder,x as default};
