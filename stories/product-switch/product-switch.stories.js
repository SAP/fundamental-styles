export default {
    title: 'Components/Product Switch',
    parameters: {
        description: 'Product Switch provides a role based access to all products or LoBs. It shows only one level of navigation.',
        tags: ['f3', 'a11y', 'theme'],
        components: ['product-switch', 'popover', 'button']
    }
};

export const productSwitchInShellbar = () => `
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
`;

productSwitchInShellbar.parameters = {
    docs: {
        iframeHeight: 600
    }
};

export const productSwitchOnDesktop = () => `
<div class="fd-product-switch__body">
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

productSwitchOnDesktop.parameters = {
    docs: {
        storyDescription: 'Desktop or very large screen has a maximum of 4 columns.',
        iframeHeight: 600
    }
};

export const productSwitch3ColumnLayout = () => `
<div class="fd-product-switch__body fd-product-switch__body--col-3">
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

productSwitch3ColumnLayout.parameters = {
    docs: {
        iframeHeight: 350,
        storyDescription: `Use the 3 column layout when the Product Switch has up to 6 items. 

Add the modifier class <code>fd-product-switch__body--col-3</code> for 3 column layout.`
    }
};


export const smallestScreen = () => `
<div style="width:450px;">
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
                    <div class="fd-product-switch__title">Human Capital Management Human Capital Management Human Capital Management Human Capital Management Management</div>
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

smallestScreen.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `For narrow screens the Product Switch transforms to a List.

Add the modifier class <code>fd-product-switch__body--mobile</code> for a list layout.`
    }
};
