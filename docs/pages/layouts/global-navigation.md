---
title: Global Navigation
id: global-nav
keywords: global navigation
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/global-navigation.html
folder: layouts
summary:
---

The global navigation component offers a similar navigation approach between Hybris applications. It allows for branding, application groupings, access to a left navigation, switch between applications, contexts and access tooling such as search or a users' profile.
{: .docs-intro}

> Use `shellbar` instead

Elements and positioning in the global navigation are optional but included are:

* **Suite name**: identifies the suite or common grouping of the applications
* **Logo**: allows for common branding. SAP Hybris applications display the SAP logo.
* **Left navigation menu icon**: allows for the left navigation to be expanded or collapsed
* **Application switcher**: allows for the identification of the application. Users can switch between applications within the suite/grouping of applications.
* **Context switcher**: allows for switching context of application such as an organization or subscription.
* **Search icon**: on click, a search field is displayed.
* **User icon**: on click, user options are displayed such as Sign Off and Preferences.

> {{ site.data.strings.headerDisclaimer }}

{% capture app-layout %}
<nav class="fd-global-nav">
   <div class="fd-global-nav__group fd-global-nav__group--left">
      <div class="fd-global-nav__side-menu">
         <button class=" fd-button--secondary fd-button--l sap-icon--menu2 fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
      </div>
      <div class="fd-global-nav__logo fd-has-margin-left-none"></div>
      <div class="fd-global-nav__product-name">
         Product Name
      </div>
   </div>
   <div class="fd-global-nav__group fd-global-nav__group--right">
      <div class="fd-global-nav__context-menu">
         <div class="fd-popover">
            <div class="fd-popover__control"><button class="fd-button--secondary" aria-label="Image label" aria-controls="3A2YE389" aria-expanded="false" aria-haspopup="true" >Context Switcher</button></div>
            <div class="fd-popover__body"  aria-hidden="true" id="3A2YE389">
               <nav class="fd-menu">
                  <ul class="fd-menu__list">
                     <li><a href="#" class="fd-menu__item">Link 1</a>
                     </li>
                     <li><a href="#" class="fd-menu__item">Link 2</a>
                     </li>
                     <li><a href="#" class="fd-menu__item">Link 3</a>
                     </li>
                     <li><a href="#" class="fd-menu__item">Link 4</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
      <div class="fd-global-nav__actions">
         <div class="fd-global-nav__search">
            <button class=" fd-button--secondary fd-button--m sap-icon--search fd-global-nav__btn" aria-label="BUTTON_LABEL" aria-controls="RUmA0636" aria-haspopup="true" aria-expanded="false"></button>
            <input type="text" class="fd-form__control" id="RUmA0636" aria-hidden="true" placeholder="Search... ">
         </div>
         <button class=" fd-button--secondary fd-button--m sap-icon--action-settings fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
         <button class=" fd-button--secondary fd-button--m fd-global-nav__btn" aria-label="BUTTON_LABEL"><span class=" fd-identifier--s fd-identifier--circle">WW</span></button>
      </div>
   </div>
</nav>
{% endcapture %}
{% include display-component.html component=app-layout class="global-nav" %}
