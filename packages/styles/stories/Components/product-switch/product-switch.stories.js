import smallExampleHtml from "./small.example.html?raw";
import mediumExampleHtml from "./medium.example.html?raw";
import largeExampleHtml from "./large.example.html?raw";
import '../../../src/product-switch.scss';
import '../../../src/popover.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/shellbar.scss';
import '../../../src/avatar.scss';
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
    tags: []
  }
};
const localStyles = `
<style>
    .docs-product-switch-shellbar {
        background-color: #354A5F; 
        padding: 6px; 
        display: flex;
        justify-content: end;
    }
</style>
`;
export const Shellbar = () => `${localStyles}
<div class="fd-shellbar">
    <div class="fd-shellbar__group fd-shellbar__group--full-width fd-shellbar__group--actions">
        <div class="fd-shellbar__action">
            <div class="fd-product-switch">
                <div class="fd-popover fd-popover--right">
                    <button class="fd-button fd-button--transparent fd-popover__control fd-shellbar__button"
                        aria-label="Products"
                        aria-controls="product-switch-body"
                        aria-expanded="true"
                        aria-haspopup="true">
                        <i class="sap-icon--grid"></i>
                    </button>
                    <div class="fd-popover__body fd-popover__body--right" role="dialog" aria-modal="false" aria-label="Products" aria-hidden="false" id="product-switch-body">
                        <div class="fd-product-switch__body">
                            <ul class="fd-product-switch__list" role="menu">
                                <li class="fd-product-switch__item selected" tabindex="0" role="menuitem" aria-label="Home Home Home Home Home Home Home Home Central Home Central Home Central Home Central Home" aria-posinset="1" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Home">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--home"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Home Home Home Home Home Home Home Home</div>
                                        <div class="fd-product-switch__subtitle">Central Home Central Home Central Home Central Home</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Analytics Cloud Analytics Cloud Analytics Cloud" aria-posinset="2" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Analytics Cloud">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--business-objects-experience"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Analytics Cloud</div>
                                        <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Catalog Ariba" aria-posinset="3" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Catalog">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--contacts"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Catalog</div>
                                        <div class="fd-product-switch__subtitle">Ariba</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Guided Buying" aria-posinset="4" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" style="background-image: url('/assets/images/landscape/demo-avatar.png')" role="img" aria-label="Guided Buying"></span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Guided Buying</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Strategic Procurement" aria-posinset="5" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Strategic Procurement">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--cart-3"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Strategic Procurement</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Travel &amp; Expense Concur" aria-posinset="6" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Travel &amp; Expense">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--flight"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Travel & Expense</div>
                                        <div class="fd-product-switch__subtitle">Concur</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Vendor Management Fieldglass" aria-posinset="7" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Vendor Management">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--shipping-status"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Vendor Management</div>
                                        <div class="fd-product-switch__subtitle">Fieldglass</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Human Capital Management" aria-posinset="8" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Human Capital Management">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--customer"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Human Capital Management</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Sales Cloud Sales Cloud" aria-posinset="9" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Sales Cloud">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--sales-notification"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Sales Cloud</div>
                                        <div class="fd-product-switch__subtitle">Sales Cloud</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Commerce Cloud Commerce Cloud" aria-posinset="10" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Commerce Cloud">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--retail-store"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Commerce Cloud</div>
                                        <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Marketing Cloud Marketing Cloud" aria-posinset="11" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Marketing Cloud">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--marketing-campaign"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Marketing Cloud</div>
                                        <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Service Cloud" aria-posinset="12" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Service Cloud">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--family-care"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Service Cloud</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Customer Data Cloud" aria-posinset="13" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Customer Data Cloud">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--customer-briefing"></i>
                                    </span>
                                    <div class="fd-product-switch__text">
                                        <div class="fd-product-switch__title">Customer Data Cloud</div>
                                    </div>
                                </li>
                                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="S/4HANA" aria-posinset="14" aria-setsize="14">
                                    <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="S/4HANA">
                                        <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--batch-payments"></i>
                                    </span>
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
<div style="min-height: 530px"></div>
`;
Shellbar.parameters = {
  docs: {
    description: {
      story: `The product switch button is typically displayed within a **Shellbar** on the far-right side.
<br> <b>Note: </b>Products are represented by application icons, implemented using the Avatar component in size S (48x48 px). The Avatar component supports PNG, JPG, and SVG formats. To maintain visual consistency, all icons must be rendered within a 48x48 px bounding box.
<br> Both **title** and **subtitle** are recommended to wrap at maximum of 2 lines of text although text is never truncated. If the title or subtitle exceeds 2 lines of text, the item height will grow to accommodate the text.
        `
    }
  }
};
export const Large = () => largeExampleHtml;
Large.parameters = {
  docs: {
    description: {
      story: 'Product switch is displayed with a maximum of 4 columns on large desktop screens. When the popover contains too many items, it will grow until the maximum is reached. Once the maximum is reached, the popover can be scrolled vertically.',
    }
  }
};
export const Medium = () => mediumExampleHtml;
Medium.parameters = {
  docs: {
    description: {
      story: `If there are 6 (or less) items to display, it is recommended to use the 3-column layout (medium). To display a medium-sized product switch, add the \`fd-product-switchbody--col-3\` modifier class to the main element.
        `
    }
  }
};
export const Small = () => smallExampleHtml;
Small.parameters = {
  docs: {
    description: {
      story: `For smaller screens (mobile), the product switch is displayed in list format. To achieve this style, add the \`fd-product-switch__body--mobile\` modifier class to the main element.
        `
    }
  }
};