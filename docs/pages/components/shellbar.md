---
title: Shellbar
id: shellbar
keywords: shell shellbar global navigation
toc: false
sidebar: left-navigation-sidebar
permalink: /components/shellbar.html
folder: components
summary:
---

The shellbar offers consistent, responsive navigation across all products and applications.
{: .docs-intro}
Includes support for branding, product navigation, search, notifications, user settings, and CoPilot. This is a composite component comprised of mandatory and optional elements.

## How it works
{: .docs-header-h2}


- The shellbar should be placed inside the shell layout container.
- The shellbar is fluid and responsive by default with proper margins and padding built in.
- The shellbar has three primary containers groups — `product` for branding and product elements, `copilot` reserved for CoPilot, and `actions` for search, product links, and user settings.
- The shellbar actions are duplicated into the overflow menu on mobile screens.

Moving from left to right, the shellbar content will become more variable based on the product needs. See below for more details about child elements.

## Supported elements
{: .docs-header-h2}

The shellbar handles layout and has some built-in elements but relies on standalone components for much of its content.

* `.fd-shellbar__logo` (required) for company branding. Use `--image-replaced` modifier when using CSS to apply the logo.
* `.fd-shellbar__title` (required) displays the current application.
* `.fd-shellbar__subtitle` (optional) displays an application context. _This should be used rarely._
* `.fd-product-menu` (optional) for navigating to applications within the product.
* `.fd-shellbar__action` (required) container for each product action and link.
* `.fd-shellbar__action--mobile` (optional) for product actions only visible on mobile screens.
* `.fd-shellbar__action--desktop` (optional) for product actions only visible on desktop screens.
* `.fd-search-input` (optional) for searching the product.
* `.fd-identifier` (required) for user settings and application meta links such as Sign Out. [Accent colors between 11-15]({{site.baseurl}}/foundation/colors.html#accent) can be randomly assigned to the background.
* `.fd-product-switch` (optional) for navigating between products.

Here are examples of various configurations.

## Basic
{: .docs-header-h2}

This example shows the minimum shellbar for a single application product with only user settings. If no user thumbnail is available then display initials.

{% capture app-layout %}
<div class="fd-shellbar">
  <div class="fd-shellbar__group fd-shellbar__group--product">
    <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>
  <span class="fd-shellbar__title">Corporate Portal</span>
  </div>
  <div class="fd-shellbar__group fd-shellbar__group--actions">
    <div class="fd-shellbar__action">
      <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
          <div class="fd-button fd-shellbar__button fd-user-menu__control" aria-controls="WV3AY276" aria-expanded="false" aria-haspopup="true" role="button">
            <span class="fd-identifier fd-identifier--xs fd-identifier--circle">WW</span>
          </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="WV3AY276">
          <nav class="fd-menu">
            <ul class="fd-menu__list">
              <li><a role="button" class="fd-menu__item">Settings</a></li>
              <li><a role="button" class="fd-menu__item">Sign Out</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout class="" %}


## Product Menu and Search
{: .docs-header-h2}

This example includes the product menu for navigating to applications within the product and shows a search box.


{% capture app-layout %}
<div class="fd-shellbar">
  <div class="fd-shellbar__group fd-shellbar__group--product">
    <span class="fd-shellbar__logo">
      <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP">
    </span>
    <div class="fd-popover">
      <div class="fd-popover__control">
        <button class="fd-button--light fd-button--menu fd-shellbar__button--menu" aria-controls="9GLB26941" aria-haspopup="true" aria-expanded="false">
          <span class="fd-shellbar__title">Corporate Portal</span>
        </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="9GLB26941">
        <nav class="fd-menu">
          <ul class="fd-menu__list">
            <li><a role="button" class="fd-menu__item">Application A</a></li>
            <li><a role="button" class="fd-menu__item">Application B</a></li>
            <li><a role="button" class="fd-menu__item">Application C</a></li>
            <li><a role="button" class="fd-menu__item">Application D</a></li>
          </ul>
        </nav>
      </div>
    </div>
	<div class="fd-shellbar__subtitle">Subtitle</div>
  </div>
  <div class="fd-shellbar__group fd-shellbar__group--actions">
    <div class="fd-shellbar__action fd-shellbar__action--desktop">    
      <div class="fd-popover__control">
        <div aria-label="Image label" aria-controls="F4GcX348b" aria-expanded="false" aria-haspopup="true">
          <div class="fd-input-group fd-shellbar__input-group">
            <input type="text" class="fd-input fd-input-group__input fd-shellbar__input-group__input" id="F4GcX348b1" value="Sear" placeholder="Search...">
            <span class="fd-input-group__addon fd-shellbar__input-group__addon fd-input-group__addon--button">
              <button class="fd-shellbar__button fd-button sap-icon--decline"></button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="fd-shellbar__action fd-shellbar__action--desktop">
      <button class="fd-button fd-shellbar__button sap-icon--search" aria-label="Search"></button>
    </div>
    <div class="fd-shellbar__action">
      <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
          <div class="fd-button fd-shellbar__button fd-user-menu__control" aria-controls="ZY3AY276" aria-expanded="false" aria-haspopup="true" role="button">
            <span class="fd-identifier fd-identifier--xs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url({{site.baseurl}}/images/thumbs/headshot-male.jpg);" aria-label="William Wallingham">WW</span>
          </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="ZY3AY276">
          <nav class="fd-menu">
            <ul class="fd-menu__list">
              <li><a role="button" class="fd-menu__item">Settings</a></li>
              <li><a role="button" class="fd-menu__item">Sign Out</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout class="" %}

## Links with collapsible menu
{: .docs-header-h2}

When a product has multiple links, the product links should collapse into an overflow menu on mobile screens. All actions, except for the user menu, should be collapsed. See the placement of the `.fd-shellbar__action--mobile` container below.

{% capture app-layout %}
<div class="fd-shellbar">
  <div class="fd-shellbar__group fd-shellbar__group--product">
    <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>
  <span class="fd-shellbar__title">Corporate Portal</span>
  </div>
  <div class="fd-shellbar__group fd-shellbar__group--actions">
    <div class="fd-shellbar__action fd-shellbar__action--desktop">    
      <div class="fd-popover__control">
        <div aria-label="Image label" aria-controls="UIO6J688" aria-expanded="false" aria-haspopup="true">
          <div class="fd-input-group fd-shellbar__input-group">
            <input type="text" class="fd-input fd-input-group__input fd-shellbar__input-group__input" id="UIO6J6881" value="Sear" placeholder="Search...">
            <span class="fd-input-group__addon fd-shellbar__input-group__addon fd-input-group__addon--button">
              <button class="fd-shellbar__button fd-button sap-icon--navigation-down-arrow"></button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="fd-shellbar__action fd-shellbar__action--desktop">
      <button class="fd-button fd-shellbar__button sap-icon--search" aria-label="Search"></button>
    </div>
      <div class="fd-shellbar__action fd-shellbar__action--desktop">
        <button class="fd-button fd-shellbar__button sap-icon--bell" aria-label="Notifications">
        <span class="fd-counter fd-counter--notification fd-shellbar__counter--notification" aria-label="Unread count">25</span></button>
      </div>
      <div class="fd-shellbar__action fd-shellbar__action--desktop">
        <button class="fd-button fd-shellbar__button sap-icon--pool" aria-label="Pool"></button>
      </div>
      <div class="fd-shellbar__action fd-shellbar__action--mobile">
        <div class="fd-shellbar-collapse">
          <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
              <div class="fd-shellbar-collapse--control" aria-controls="CWaGX278" aria-expanded="false" aria-haspopup="true" role="button">
                <button class="fd-button fd-shellbar__button sap-icon--overflow" aria-controls="undefined" aria-haspopup="true" aria-expanded="false">
                <span class="fd-counter fd-counter--notification fd-shellbar__counter--notification" aria-label="Unread count">25</span></button>
              </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="CWaGX278">
              <nav class="fd-menu">
                <ul class="fd-menu__list">
                  <li><a role="button" class="fd-menu__item">Search</a></li>
                  <li><a role="button" class="fd-menu__item">Notifications</a></li>
                  <li><a role="button" class="fd-menu__item">Pool</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="fd-shellbar__action">
        <div class="fd-popover fd-popover--right">
          <div class="fd-popover__control">
            <div class="fd-button fd-shellbar__button fd-user-menu__control" aria-controls="DD35G276" aria-expanded="false" aria-haspopup="true" role="button">
              <span class="fd-identifier fd-identifier--xs fd-identifier--circle fd-shellbar__identifier--circle">WW</span>
            </div>
          </div>
          <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="DD35G276">
            <nav class="fd-menu">
              <ul class="fd-menu__list">
                <li><a role="button" class="fd-menu__item">Settings</a></li>
                <li><a role="button" class="fd-menu__item">Sign Out</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout class="" %}

## Product Switch and CoPilot
{: .docs-header-h2}

This example shows an application with CoPilot, integration with other products, and a customized logo.
For more information about the Product Switch, see [Product Switch](product-switch.html) component.

{% capture app-layout %}

<div class="fd-shellbar">
  <div class="fd-shellbar__group fd-shellbar__group--product">
    <span class="fd-shellbar__logo">
      <svg style="height: 32px;" width="286" height="143" viewBox="0 0 286 143" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="-91.234%" y1="50%" x2="98.574%" y2="50%" id="a"><stop stop-color="#32B79D" stop-opacity=".59" offset="0%"/><stop stop-color="#33EAFF" stop-opacity=".59" offset="35.525%"/><stop stop-color="#7FCAFF" stop-opacity=".59" offset="73.603%"/><stop stop-color="#84A2FF" stop-opacity=".59" offset="100%"/></linearGradient></defs><g transform="translate(-19)" fill="url(#a)" fill-rule="evenodd"><path d="M114.232.963h190.464c0 16.966-13.754 30.72-30.72 30.72H83.512c0-16.966 13.754-30.72 30.72-30.72zM80.44 56.259h116.736c0 16.966-13.754 30.72-30.72 30.72H49.72c0-16.966 13.754-30.72 30.72-30.72zM49.72 111.555h18.432c0 16.966-13.754 30.72-30.72 30.72H19c0-16.966 13.754-30.72 30.72-30.72z"/></g></svg>
    </span>
    <span class="fd-shellbar__title">Corporate Portal</span>
  </div>
  <div class="fd-shellbar__group fd-shellbar__group--copilot">
    <button class="fd-button fd-shellbar__button"><img src="//unpkg.com/fundamental-styles/dist/images/copilot.png" alt="CoPilot" height="30" width="30" /></button>
  </div>
  <div class="fd-shellbar__group fd-shellbar__group--actions">
      <div class="fd-shellbar__action">
        <div class="fd-popover fd-popover--right">
          <div class="fd-popover__control">
            <div class="fd-button fd-shellbar__button fd-user-menu__control" aria-controls="MKFAY276" aria-expanded="false" aria-haspopup="true" role="button">
              <span class="fd-identifier fd-identifier--xs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url({{site.baseurl}}/images/thumbs/headshot-male.jpg);" aria-label="William Wallingham">WW</span>
            </div>
          </div>
          <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="MKFAY276">
            <nav class="fd-menu">
              <ul class="fd-menu__list">
                <li><a role="button" class="fd-menu__item">Settings</a></li>
                <li><a role="button" class="fd-menu__item">Sign Out</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="fd-shellbar__action fd-shellbar__action--desktop">
        <div class="fd-product-switch">
            <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button class="fd-button--light fd-popover__control fd-product-switch__control sap-icon--grid" 
                        aria-label="Image label" 
                        aria-controls="product-switch-body" 
                        aria-expanded="false" 
                        aria-haspopup="true">
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="product-switch-body">
                    <div class="fd-product-switch__body">
                        <ul class="fd-product-switch__list">
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--home"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Home</div>
                                    <div class="fd-product-switch__subtitle">Central Home</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item selected">
                                <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Analytics Cloud</div>
                                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--contacts"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Catalog</div>
                                    <div class="fd-product-switch__subtitle">Ariba</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--credit-card"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Guided Buying</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--cart-3"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Strategic Procurement</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--flight"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Travel & Expense</div>
                                    <div class="fd-product-switch__subtitle">Concur</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--shipping-status"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Vendor Management</div>
                                    <div class="fd-product-switch__subtitle">Fieldglass</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--customer"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Human Capital Management</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--sales-notification"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Sales Cloud</div>
                                    <div class="fd-product-switch__subtitle">Sales Cloud</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--retail-store"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Commerce Cloud</div>
                                    <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--marketing-campaign"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Marketing Cloud</div>
                                    <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--family-care"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Service Cloud</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--customer-briefing"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">Customer Data Cloud</div>
                                </div>
                            </li>
                            <li class="fd-product-switch__item">
                                <div class="fd-product-switch__icon sap-icon--batch-payments"></div>
                                <div class="fd-product-switch__text">
                                    <div class="fd-product-switch__title">S/4HANA</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout class="" %}
