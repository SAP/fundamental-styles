---
title: Panel
id: new-panel
keywords: panel
sidebar: left-navigation-sidebar
toc: false
permalink: components/panel.html
folder: components
---
The panel is a container for grouping and displaying information. It can be collapsed to save space on the screen.
{: .docs-intro}


Use the panel if:
<ul> 
    <li>You need to group or display information.</li>
    <li>You want to give users the option of hiding this information.</li>
    <li>You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).</li>
</ul>
Do not use the panel if:
<ul>
    <li>You are designing an object page. Never use panels in the object page content area.</li>
</ul>


## Expandable Panel
Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).
<div class="fd-new-panel">
    <div class="fd-new-panel__header">
        <div class="fd-new-panel__expand">
            <button class="fd-button fd-button--transparent sap-icon--slim-arrow-down" aria-expanded="false" aria-haspopup="true" aria-controls="jhqDKYdf"></button>
        </div>
        <h5 class="fd-new-panel__title">Panel Header</h5>
        <div>
            <button class="fd-button fd-button--transparent sap-icon--settings"></button>
            <button class="fd-button fd-button--transparent sap-icon--settings"></button>
        </div>
    </div>
    <div class="fd-new-panel__content" aria-hidden="true" id="jhqDKYdf">
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


## Fixed Panel
Fixed panels are useful for grouping custom content. They include headers and info toolbars.
To create fixed panel, add `--fixed` modifier.

<div class="fd-new-panel fd-new-panel--fixed">
    <div class="fd-new-panel__header">
        <h5 class="fd-new-panel__title">Panel Header</h5>
        <div>
            <button class="fd-button fd-button--transparent sap-icon--settings"></button>
            <button class="fd-button fd-button--transparent sap-icon--settings"></button>
        </div>
    </div>
    <div class="fd-new-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus 
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. 
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. 
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. 
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. 
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. 
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>

## Compact Panel
To use compact panel, add `--compact` modifier
<div class="fd-new-panel fd-new-panel--compact">
    <div class="fd-new-panel__header">
        <div class="fd-new-panel__expand">
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--slim-arrow-down"></button>
        </div>
        <h5 class="fd-new-panel__title">Panel Header</h5>
        <div>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--settings"></button>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--settings"></button>
        </div>
    </div>
    <div class="fd-new-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus 
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. 
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. 
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. 
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. 
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. 
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>

## Fixed Height Content Panel
When the height of the panel's content is set to a fixed size, the content area can be scrolled through.

<div class="fd-new-panel">
    <div class="fd-new-panel__header">
        <div class="fd-new-panel__expand">
            <button class="fd-button fd-button--transparent sap-icon--slim-arrow-down"></button>
        </div>
        <h5 class="fd-new-panel__title">Panel Header</h5>
        <div>
            <button class="fd-button fd-button--transparent sap-icon--settings"></button>
            <button class="fd-button fd-button--transparent sap-icon--settings"></button>
        </div>
    </div>
    <div class="fd-new-panel__content" style="height: 100px">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus 
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. 
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. 
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. 
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. 
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. 
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
            Morbi eget diam vehicula, porttitor orci eu, posuere leo. Sed varius orci id ipsum pharetra feugiat. 
            Donec libero mi, vestibulum eget massa non, pretium egestas eros. Aenean quis eros ut augue condimentum faucibus.
            Nam tristique, enim eu volutpat cursus, enim neque pulvinar mauris, nec tempor libero lacus vel lacus. Nunc molestie elit in
            aliquam eleifend. Ut consequat convallis erat, porta egestas lectus sagittis et. Mauris fermentum semper lorem, a sollicitudin nisi sollicitudin nec. 
            Duis semper pretium elit ac molestie. Morbi condimentum nisl vitae dolor varius convallis. Donec a molestie ex, 
            id condimentum velit. Proin dignissim dolor velit, eu malesuada magna porta vel. Aenean quis feugiat libero, sed pretium libero. 
            Nunc ex orci, volutpat in tristique et, accumsan sed ante. Maecenas laoreet egestas iaculis. In quis ligula mauris.
        </span>
    </div>
</div>
