/* empty css                *//* empty css             *//* empty css                   *//* empty css             *//* empty css             */const l=`
<nav aria-label="overflowing product breadcrumbs">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item"><div class="fd-popover">
            <div class="fd-popover__control">
                <div
                    aria-controls="breadcrumb1"
                    aria-expanded="true"
                    aria-haspopup="true"
                    aria-label="Show collapsed breadcrumbs"
                    class="fd-link"
                    onclick="onPopoverClick('breadcrumb1');"
                    onkeypress="isSpaceOrEnter(event, onPopoverClick('breadcrumb1'));"
                    role="button"
                    tabindex="0">
                    <span class="fd-link__content"><i role="presentation" class="sap-icon sap-icon--overflow"></i></span>
                    <i role="presentation" class="sap-icon sap-icon--slim-arrow-down"></i>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="breadcrumb1">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--navigation" role="menu">
                        <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                            <a class="fd-list__link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-list__title">Products</span></a>
                        </li>
                        <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                            <a class="fd-list__link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-list__title">Suppliers</span></a>
                        </li>
                        <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                            <a class="fd-list__link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-list__title">Titanium</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div></li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
<div style="height: 150px"></div>
`,s=`<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
`,i=`<h4>Slash (default)</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Backslash</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--backslash">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Double slash</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--double-slash">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Double backslash</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--double-backslash">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Greater than</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--greater-than">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Double greater than</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--double-greater-than">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>`,t=`<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
<br>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="page" aria-label="Current page 7 of 7"><span class="fd-link__content">Laptop</span></a>
        </li>
    </ol>
</nav>
`,p={title:"Components/Breadcrumb",parameters:{description:`
The breadcrumb component is a type of navigation that indicates the position of a page within the application’s page hierarchy. Users can navigate backward by selecting the previous pages in the navigation path.

##Usage
**Use breadcrumb if:**

- You want to show secondary navigation on the object page
- You want to show navigation in a table
- You want to show navigation in charts
- Use a breadcrumb only when the drilldown scenario leads to related object pages: parent object page / child object page 1 / child object page 2 / child object page 3.

**Do not use breadcrumb if:**

- Your hierarchy contains only one level.

**Do not include these elements in your breadcrumb path:**

- Other floorplans, such as overview pages and list reports
- Cross-application navigation to other object pages
- Independent object pages, such as fact sheets
`,tags:["f3","a11y","theme"]}},a=()=>s;a.parameters={docs:{description:{story:"The standard breadcrumb component displays several pages in text format separated by dividers, indicating a navigation path. Each page can be specifically selected to navigate to its corresponding page. It can be displayed by using the `fd-breadcrumb` class."}}};const e=()=>i;e.parameters={docs:{description:{story:"Separator between the links can be configured with modifier classes added to the main `fd-breadcrumb` class. For example: `fd-breadcrumb--backslash` or `fd-breadcrumb--double-greater-than`.\n\n| **Separator style**      | **Modifier class**                 |\n| :------------------ | :-------------------------------------- |\n| Slash               | default (no modiier class)              |\n| Backslash           | `fd-breadcrumb--backslash`            |\n| Double slash        | `fd-breadcrumb--double-slash`         |\n| Double backslash	  | `fd-breadcrumb--double-backslash`     |\n| Greater than        | `fd-breadcrumb--greater-than`         |\n| Double greater than	| `fd-breadcrumb--double-greater-than`  |"}}};const n=()=>t;n.parameters={docs:{description:{story:'The Breadcrumbs component offers two visual styles for the last item: as a "current page" (non-interactive and without a separator) or as a regular link with a following separator.'}}};const r=()=>l;r.parameters={docs:{story:{},description:{story:"The overflow breadcrumb component displays a dropdown menu, followed by several pages in the navigation path. <br>Like the standard breadcrumb, each page can be selected to navigate to its corresponding page. This type is responsive and will collapse into a dropdown menu if there is insufficient horizontal space on the screen. <br>To display the overflow breadcrumb, include the `fd-popover` component in the first breadcrumb item within the element."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => standardExampleHtml",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => stylesExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => currentItemExampleHtml",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => overflowExampleHtml",...r.parameters?.docs?.source}}};const u=["Standard","Styles","CurrentItem","Overflow"];export{n as CurrentItem,r as Overflow,a as Standard,e as Styles,u as __namedExportsOrder,p as default};
