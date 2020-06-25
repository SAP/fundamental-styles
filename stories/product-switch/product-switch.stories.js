import '../../dist/product-switch.css';

export default {
    title: 'Components/Product Switch',
    parameters: {
        description: 'Testing Part only'
    }
};

export const one = () => `
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
            <div class="fd-product-switch__title">Analytics Cloud Analytics CloudAnalytics CloudAnalytics Cloud</div>
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
            <div class="fd-product-switch__title">Human Capital Management Human Capital Management</div>
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
`;

one.parameters = {
    docs: {
        disable: true
    }
};

export const two = () => `
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
`;

two.parameters = {
    docs: {
        disable: true
    }
};
export const three = () => `
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
                    <div class="fd-product-switch__title">Analytics Cloud Analytics CloudAnalytics CloudAnalytics Cloud</div>
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
                    <div class="fd-product-switch__title">Human Capital Management Human Capital Management Human Capital Management Human Capital Management Management</div>
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
`;

three.parameters = {
    docs: {
        disable: true
    }
};
export const rtl = () => `
<div style="width:450px;" dir="rtl">
    <div class="fd-product-switch__body fd-product-switch__body--mobile">
        <ul class="fd-product-switch__list">
            <li class="fd-product-switch__item" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--home"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين</div>
                    <div class="fd-product-switch__subtitle">Central Home</div>
                </div>
            </li>
            <li class="fd-product-switch__item selected" tabindex="0">
                <div class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين</div>
                    <div class="fd-product-switch__subtitle">ة، ولكن بفضل هؤلاء الأشخاص الذينحقيقة وأساس ت</div>
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
`;

rtl.parameters = {
    docs: {
        disable: true
    }
};
