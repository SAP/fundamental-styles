---
title: Product Switch
id: product-switch
keywords: product-switch, shellbar
sidebar: left-navigation-sidebar
toc: false
permalink: components/product-switch.html
folder: components
tags: [f3, a11y, theme]
---

{: .docs-intro}
Product Switch provides a role based access to all products or LoBs. It shows only one level of navigation.

## Product Switch in Shellbar

{% capture product-switch-body-control %}
<div style="background-color: #354A5F;text-align: right;padding: 6px;">
    <div class="fd-product-switch">
        <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
                <button class="fd-button fd-button--transparent fd-popover__control fd-product-switch__control sap-icon--grid" 
                    aria-label="Image label" 
                    aria-controls="product-switch-body" 
                    aria-expanded="false" 
                    aria-haspopup="true">
                </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="product-switch-body">
                <div class="fd-product-switch__body">
                    <ul class="fd-product-switch__list">
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--home"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Home</div>
                                <div class="fd-product-switch__subtitle">Central Home</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0" selected>
                            <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Analytics Cloud</div>
                                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--contacts"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Catalog</div>
                                <div class="fd-product-switch__subtitle">Ariba</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--credit-card"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Guided Buying</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--cart-3"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Strategic Procurement</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--flight"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Travel & Expense</div>
                                <div class="fd-product-switch__subtitle">Concur</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--shipping-status"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Vendor Management</div>
                                <div class="fd-product-switch__subtitle">Fieldglass</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--customer"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Human Capital Management</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--sales-notification"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Sales Cloud</div>
                                <div class="fd-product-switch__subtitle">Sales Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--retail-store"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Commerce Cloud</div>
                                <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--marketing-campaign"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Marketing Cloud</div>
                                <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--family-care"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Service Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <div class="fd-product-switch__icon sap-icon--customer-briefing"></div>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Customer Data Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
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
{% endcapture %}
{% include display-component.html component=product-switch-body-control %}

<br>

## Product Switch - Desktop
Desktop or very large screen has a maximum of 4 columns.

{% capture product-switch-body %}
<div class="fd-product-switch__body">
    <ul class="fd-product-switch__list">
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--home"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home</div>
                <div class="fd-product-switch__subtitle">Central Home</div>
            </div>
        </li>
        <li class="fd-product-switch__item selected" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Analytics Cloud</div>
                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--contacts"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Catalog</div>
                <div class="fd-product-switch__subtitle">Ariba</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--credit-card"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Guided Buying</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--cart-3"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Strategic Procurement</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--flight"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Travel & Expense</div>
                <div class="fd-product-switch__subtitle">Concur</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--shipping-status"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Vendor Management</div>
                <div class="fd-product-switch__subtitle">Fieldglass</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--customer"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Human Capital Management</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--sales-notification"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Sales Cloud</div>
                <div class="fd-product-switch__subtitle">Sales Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--retail-store"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Commerce Cloud</div>
                <div class="fd-product-switch__subtitle">Commerce Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--marketing-campaign"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Marketing Cloud</div>
                <div class="fd-product-switch__subtitle">Marketing Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--family-care"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Service Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--customer-briefing"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Customer Data Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--batch-payments"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">S/4HANA</div>
            </div>
        </li>
    </ul>
</div>
{% endcapture %}
{% include display-component.html component=product-switch-body %}

<br>

## Product Switch - 3-column layout
Use the 3 column layout when the Product Switch has up to 6 items. 
Add the modifier class `fd-product-switch__body--col-3` for 3 column layout. 

{% capture product-switch-body-3col %}
<div class="fd-product-switch__body fd-product-switch__body--col-3">
    <ul class="fd-product-switch__list">
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--home"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home</div>
                <div class="fd-product-switch__subtitle">Central Home</div>
            </div>
        </li>
        <li class="fd-product-switch__item selected" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Analytics Cloud</div>
                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--contacts"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Catalog</div>
                <div class="fd-product-switch__subtitle">Ariba</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--credit-card"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Guided Buying</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <div class="fd-product-switch__icon sap-icon--cart-3"></div>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Strategic Procurement</div>
            </div>
        </li>
    </ul>
</div>
{% endcapture %}
{% include display-component.html component=product-switch-body-3col %}

<br>

## Product Switch - Smallest Screen
For narrow screens the Product Switch transforms to a List.
Add the modifier class `fd-product-switch__body--mobile` for a list layout.

{% capture product-switch-body-mobile %}
<div style="width:450px;">
    <div class="fd-product-switch__body fd-product-switch__body--mobile">
        <ul class="fd-product-switch__list">
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--home"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Home</div>
                    <div class="fd-product-switch__subtitle">Central Home</div>
                </div>
            </li>
            <li class="fd-product-switch__item selected" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Analytics Cloud</div>
                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--contacts"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Catalog</div>
                    <div class="fd-product-switch__subtitle">Ariba</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--credit-card"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Guided Buying</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--cart-3"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Strategic Procurement</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--flight"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Travel & Expense</div>
                    <div class="fd-product-switch__subtitle">Concur</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--shipping-status"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Vendor Management</div>
                    <div class="fd-product-switch__subtitle">Fieldglass</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--customer"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Human Capital Management</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--sales-notification"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Sales Cloud</div>
                    <div class="fd-product-switch__subtitle">Sales Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--retail-store"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Commerce Cloud</div>
                    <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--marketing-campaign"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Marketing Cloud</div>
                    <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--family-care"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Service Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--customer-briefing"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Customer Data Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--batch-payments"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">S/4HANA</div>
                </div>
            </li>
        </ul>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=product-switch-body-mobile %}


<br>

## Product Switch - Smallest Screen, RTL

{% capture product-switch-body-mobile %}
<div style="width:450px;" dir="rtl">
    <div class="fd-product-switch__body fd-product-switch__body--mobile">
        <ul class="fd-product-switch__list">
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--home"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين</div>
                    <div class="fd-product-switch__subtitle">، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأسولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس</div>
                </div>
            </li>
            <li class="fd-product-switch__item selected" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين</div>
                    <div class="fd-product-switch__subtitle">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأسولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--contacts"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
                    <div class="fd-product-switch__subtitle">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--credit-card"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--cart-3"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--flight"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
                    <div class="fd-product-switch__subtitle">ة، ولكن بفضل ساس ت</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--shipping-status"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل لكن بفضل </div>
                    <div class="fd-product-switch__subtitle">لكن بفضل </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--customer"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل لكن بفضل لكن بفضل </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--sales-notification"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن ب</div>
                    <div class="fd-product-switch__subtitle">لكن </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--retail-store"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل لكن بفضل </div>
                    <div class="fd-product-switch__subtitle">لكنضل </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--marketing-campaign"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل </div>
                    <div class="fd-product-switch__subtitle">لكن بفضل </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--family-care"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل لكن بفضل لكن بفضل </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--customer-briefing"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل لكن بفضل لكن بفضل لكن بفضل لكن بفضل </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--batch-payments"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">لكن بفضل لكن بفضل لكن بفضل </div>
                </div>
            </li>
        </ul>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=product-switch-body-mobile %}
