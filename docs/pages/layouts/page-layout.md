---
title: Page
id: page
keywords: page layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/page-layout.html
folder: layouts
summary:
---

Page layout containers are used to construct the view states of the application. 
{: .docs-intro}
<br>

### Page Background Designs
* `fd-page`: standard (default)
* `fd-page--solid`: solid
* `fd-page--list`: list
* `fd-page--transparent`: transparent 
<br/>

### Container Hierarchy
The elements used to construct a page are:
* `fd-page`: The page-level wrapper
  * `Header`: Uses a Bar component with `fd-bar--page` and `fd-bar--header` modifier classes  
  * `Header with SubHeader`: Uses a Bar component with `fd-bar--page` and `fd-bar--header-with-subheader` modifier classes 
  * `SubHeader`: Uses a Bar component with `fd-bar--page` and `fd-bar--subheader` modifier classes
  * `Content`: The page content is wrapped in `fd-page__content` container
  * `Footer`: Uses a Bar component with `fd-bar--page` and `fd-bar--footer` modifier classes 
<br/>

### Page Responsive Behaviour
The left and right spacings of the Bar and the Content could be adjusted according to the container width.
  * `default`: Bar component with `fd-bar--page` modifier class and `fd-page__content` class for the content
  * `Size S`: Bar component with additional `fd-bar--page-s` modifier class and `fd-page__content--s`  modifier class for the content
  * `Size M & L`: Bar component with additional `fd-bar--page-m_l` modifier class and `fd-page__content--m_l` modifier class for the content
  * `Size XL`: Bar component with additional `fd-bar--page-xl` modifier class and `fd-page__content--xl` modifier class for the content
<br/>

## Basic page

{% capture page-layout-1 %}
<main class="fd-page">
    <header>
        <div class="fd-bar fd-bar--page fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <span class="fd-image--s" aria-label="Image label"
                        style="background-image: url('https://placeimg.com/400/400/nature');">
                    </span>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light sap-icon--grid"></button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--page fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
{% endcapture %}
{% include display-component.html component=page-layout-1  class="page"%}

<br><br>

## Page with `Transparent` Background Design, Header with SubHeader, and Responsive Behaviour - M_L

{% capture page-layout-2 %}
<main class="fd-page fd-page--transparent">
    <header>
        <div class="fd-bar fd-bar--page-m_l fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light sap-icon--overflow"></button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-bar fd-bar--page-m_l fd-bar--subheader">
        <div class="fd-bar__middle">
            <div class="fd-bar__element fd-bar__element--full-width">
                <input class="fd-input fd-input--compact" type="text" id="input-1" placeholder="Field placeholder text">
            </div>
        </div>
    </div>
    <div class="fd-page__content--m_l">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
{% endcapture %}
{% include display-component.html component=page-layout-2  class="page"%}


<br><br>

## Home page with `List` Background Design, Floating Footer and Responsive Behaviour - XL

{% capture page-layout-3 %}
<main class="fd-page fd-page--home fd-page--list">
    <header>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light sap-icon--navigation-left-arrow"></button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light sap-icon--overflow"></button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content--xl">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--floating-footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
{% endcapture %}
{% include display-component.html component=page-layout-3  class="page"%}

<style media="screen">
    .fd-page__content, .fd-page__content--m_l, .fd-page__content--xl{
        height: 300px;
    }
</style>
