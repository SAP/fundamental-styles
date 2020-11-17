export default {
    title: 'Components/Product Switch',
    parameters: {
        description: `The product switch provides users with role-based access to several products or lines of businesses (LoBs). The product switch displays an icon button that triggers a **Popover** with the products or LoBs. Because it is designed to be as simple as possible, the product switch only has one level of navigation.

##Usage
**Use the product switch if:**

-	You want give your users access to several different products or LoBs within the same UI.


**Do not use the product switch if:**

-	You want your users to navigate within the current product. In this case, use a product menu (see **Shellbar**).        
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['product-switch', 'popover', 'button', 'icon']
    }
};

export const Shellbar = () => `
<div style="background-color: #354A5F;text-align: right;padding: 6px;">
    <div class="fd-product-switch">
        <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
                <button class="fd-button fd-button--transparent fd-popover__control fd-product-switch__control" 
                    aria-label="Image label" 
                    aria-controls="product-switch-body" 
                    aria-expanded="true" 
                    aria-haspopup="true">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="product-switch-body">
                <div class="fd-product-switch__body">
                    <ul class="fd-product-switch__list">
                        <li class="fd-product-switch__item selected" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--home"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Home</div>
                                <div class="fd-product-switch__subtitle">Central Home</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0" selected>
                            <i role="presentation" class="fd-product-switch__icon sap-icon--business-objects-experience"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Analytics Cloud</div>
                                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--contacts"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Catalog</div>
                                <div class="fd-product-switch__subtitle">Ariba</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--credit-card"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Guided Buying</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--cart-3"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Strategic Procurement</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--flight"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Travel & Expense</div>
                                <div class="fd-product-switch__subtitle">Concur</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--shipping-status"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Vendor Management</div>
                                <div class="fd-product-switch__subtitle">Fieldglass</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--customer"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Human Capital Management</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--sales-notification"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Sales Cloud</div>
                                <div class="fd-product-switch__subtitle">Sales Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--retail-store"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Commerce Cloud</div>
                                <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--marketing-campaign"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Marketing Cloud</div>
                                <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--family-care"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Service Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--customer-briefing"></i>
                            <div class="fd-product-switch__text">
                                <div class="fd-product-switch__title">Customer Data Cloud</div>
                            </div>
                        </li>
                        <li class="fd-product-switch__item" tabindex="0">
                            <i role="presentation" class="fd-product-switch__icon sap-icon--batch-payments"></i>
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
<div style="min-height: 530px"></div>
`;

Shellbar.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: `The product switch button is typically displayed within a **Shellbar** on the far-right side.
        `
    }
};

export const Large = () => `<div class="fd-product-switch__body">
   <ul class="fd-product-switch__list">
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--home"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Home</div>
            <div class="fd-product-switch__subtitle">Central Home</div>
         </div>
      </li>
      <li class="fd-product-switch__item selected" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--business-objects-experience"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Analytics Cloud Analytics CloudAnalytics CloudAnalytics Cloud</div>
            <div class="fd-product-switch__subtitle">Analytics Cloud</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--contacts"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Catalog</div>
            <div class="fd-product-switch__subtitle">Ariba</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--credit-card"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Guided Buying</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--cart-3"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Strategic Procurement</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--flight"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Travel & Expense</div>
            <div class="fd-product-switch__subtitle">Concur</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--shipping-status"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Vendor Management</div>
            <div class="fd-product-switch__subtitle">Fieldglass</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--customer"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Human Capital Management Human Capital Management</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--sales-notification"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Sales Cloud</div>
            <div class="fd-product-switch__subtitle">Sales Cloud</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--retail-store"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Commerce Cloud</div>
            <div class="fd-product-switch__subtitle">Commerce Cloud</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--marketing-campaign"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Marketing Cloud</div>
            <div class="fd-product-switch__subtitle">Marketing Cloud</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--family-care"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Service Cloud</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--customer-briefing"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">Customer Data Cloud</div>
         </div>
      </li>
      <li class="fd-product-switch__item" tabindex="0">
         <i role="presentation" class="fd-product-switch__icon sap-icon--batch-payments"></i>
         <div class="fd-product-switch__text">
            <div class="fd-product-switch__title">S/4HANA</div>
         </div>
      </li>
   </ul>
</div>
`;

Large.parameters = {
    docs: {
        storyDescription: 'Product switch is displayed with a maximum of 4 columns on large desktop screens. When the popover contains too many items, it will grow until the maximum is reached. Once the maximum is reached, the popover can be scrolled vertically.',
        iframeHeight: 600
    }
};

export const Medium = () => `<div class="fd-product-switch__body fd-product-switch__body--col-3">
    <ul class="fd-product-switch__list">
        <li class="fd-product-switch__item" tabindex="0">
            <i role="presentation" class="fd-product-switch__icon sap-icon--home"></i>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home</div>
                <div class="fd-product-switch__subtitle">Central Home</div>
            </div>
        </li>
        <li class="fd-product-switch__item selected" tabindex="0">
            <i role="presentation" class="fd-product-switch__icon sap-icon--business-objects-experience"></i>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Analytics Cloud</div>
                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <i role="presentation" class="fd-product-switch__icon sap-icon--contacts"></i>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Catalog</div>
                <div class="fd-product-switch__subtitle">Ariba</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <i role="presentation" class="fd-product-switch__icon sap-icon--credit-card"></i>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Guided Buying</div>
            </div>
        </li>
        <li class="fd-product-switch__item" tabindex="0">
            <i role="presentation" class="fd-product-switch__icon sap-icon--cart-3"></i>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Strategic Procurement</div>
            </div>
        </li>
    </ul>
</div>
`;

Medium.parameters = {
    docs: {
        iframeHeight: 350,
        storyDescription: `If there are 6 (or less) items to display, it is recommended to use the 3-column layout (medium). To display a medium-sized product switch, add the \`fd-product-switchbody--col-3\` modifier class to the main element.
        `
    }
};


export const Small = () => `<div style="width:450px;">
    <div class="fd-product-switch__body fd-product-switch__body--mobile">
        <ul class="fd-product-switch__list">
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--home"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Home</div>
                    <div class="fd-product-switch__subtitle">Central Home</div>
                </div>
            </li>
            <li class="fd-product-switch__item selected" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--business-objects-experience"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud</div>
                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--contacts"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Catalog</div>
                    <div class="fd-product-switch__subtitle">Ariba</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--credit-card"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Guided Buying</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--cart-3"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Strategic Procurement</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--flight"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Travel & Expense</div>
                    <div class="fd-product-switch__subtitle">Concur</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--shipping-status"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Vendor Management</div>
                    <div class="fd-product-switch__subtitle">Fieldglass</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--customer"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Product Management (very long text) ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus rhoncus, tempus diam non, mattis tellus. Praesent ut odio ac lorem mollis dapibus. Maecenas turpis libero, placerat et dui ut, sagittis aliquam augue. Etiam et ex tempus, lobortis velit eget, laoreet nibh. Aliquam molestie sem at lectus ullamcorper eleifend. </div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--sales-notification"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Sales Cloud</div>
                    <div class="fd-product-switch__subtitle">Sales Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--retail-store"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Commerce Cloud</div>
                    <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--marketing-campaign"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Marketing Cloud</div>
                    <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--family-care"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Service Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--customer-briefing"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Customer Data Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0">
                <i role="presentation" class="fd-product-switch__icon sap-icon--batch-payments"></i>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">S/4HANA</div>
                </div>
            </li>
        </ul>
    </div>
</div>
`;

Small.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `For smaller screens (mobile), the product switch is displayed in list format. To achieve this style, add the \`fd-product-switch__body--mobile\` modifier class to the main element.
        `
    }
};
