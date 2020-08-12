import '../../dist/icon.css';
import '../../dist/popover.css';
import '../../dist/list.css';
import '../../dist/form-label.css';
import '../../dist/form-message.css';
import '../../dist/select.css';
import '../../dist/dialog.css';
import '../../dist/bar.css';

export default {
    title: 'Components/Select',
    parameters: {
        description: `The **Select** component is commonly used to enable users to select an item from a predefined list.
      It should be used when there are less than 12 items to choose from. 
      For lists that require more than 12 options, the Combobox Input should be used.`
    }
};

export const cozy = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div
            aria-controls="h031XCM5"
            aria-expanded="false"
            aria-haspopup="listbox"
            class="fd-select__control"
            onclick="onControlClick('h0C6A325');"
            role="combobox"
            tabindex="0">
             <span class="fd-select__text-content">Select</span>
             <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i> 
            </span>
         </div>
      </div>
  </div>
  <div
    aria-hidden="true"
    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
    id="h0C6A325">
     <ul
        aria-labelledby="f45564A57"
        class="fd-list fd-list--dropdown"
        role="listbox"
        id="h031XCM5">
        <li aria-selected="true"
            class="fd-list__item is-selected"
            role="option"
            tabindex="0">
           <span class="fd-list__title">List item 1</span>
        </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 2</span>
       </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
`;

cozy.parameters = {
    docs: { iframeHeight: 300 }
};

export const compact = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div onclick="onControlClick('h0C6A326');" class="fd-select__control" role="combobox" tabindex="0" aria-controls="h037CLM5" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
            </span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C6A326">
     <ul tabIndex="-1" aria-labelledby="f45564A58" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="h037CLM5">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">
               Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
               Very long text, Very long text, Very long text
           </span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
`;

compact.parameters = {
    docs: { iframeHeight: 300 }
};

/** The **Select** component can be customized by adding additional information in additional columns. */

export const twoColumn = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="a34FL7NC" onclick="onControlClick('h0C62325');" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Select Product</span>
             <span class="fd-button fd-button--transparent">
                <i class="sap-icon--slim-arrow-down"></i>
             </span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C62325">
     <ul tabIndex="-1" aria-labelledby="f45564A59" class="fd-list fd-list--dropdown" role="listbox" id="a34FL7NC">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">Product 1</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 2</span>
           <span class="fd-list__secondary">750 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 3</span>
           <span class="fd-list__secondary">780 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 4</span>
           <span class="fd-list__secondary">40 EUR</span>
        </li>
     </ul>
  </div>
</div>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="d301CQF4" onclick="onControlClick('h07jj326');" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select Product</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
             </span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jj326">
     <ul tabIndex="-1" aria-labelledby="g45564A59" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="d301CQF4">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">Product 1</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 2</span>
           <span class="fd-list__secondary">750 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 3</span>
           <span class="fd-list__secondary">780 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 4</span>
           <span class="fd-list__secondary">40 EUR</span>
        </li>
     </ul>
  </div>
</div>
`;

twoColumn.parameters = {
    docs: {
        iframeHeight: 300
    }
};

export const twoColumnsAndIcons = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="s45GH6Y7" onclick="onControlClick('h090G325');" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select Product</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
            </span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h090G325">
     <ul tabIndex="-1" aria-labelledby="g45564A50" class="fd-list fd-list--dropdown" role="listbox" id="s45GH6Y7">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__icon sap-icon--marketing-campaign"></span>
           <span class="fd-list__title">Marketing</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__icon sap-icon--save"></span>
           <span class="fd-list__title">Backups</span>
           <span class="fd-list__secondary">500 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__icon sap-icon--shipping-status"></span>
           <span class="fd-list__title">Shipping</span>
           <span class="fd-list__secondary">125 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__icon sap-icon--headset"></span>
           <span class="fd-list__title">Consulting</span>
           <span class="fd-list__secondary">200 EUR</span>
        </li>
     </ul>
  </div>
</div>
`;

twoColumnsAndIcons.parameters = {
    docs: { iframeHeight: 300 }
};

/** In cases where the list items need to be categorized into groups, it is possible to add headers for each category. */

export const itemGrouping = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="f34HLM5G" onclick="onControlClick('h09GDGG325');" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Select Ingredient</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
            </span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h09GDGG325">
        <ul tabIndex="-1" aria-labelledby="g45464A50" class="fd-list fd-list--dropdown" role="listbox" id="f34HLM5G">
            <li class="fd-list__group-header">
                Fruits
            </li>
            <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                <span class="fd-list__title">Apple</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
            <li class="fd-list__group-header">
                Vegetables
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Tomato</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Onion</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Spinach</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Potato</span>
            </li>
        </ul>
  </div>
</div>
`;

itemGrouping.parameters = {
    docs: {
        iframeHeight: 400
    }
};

/** In the **Select** component, the text is wrapped by default. In order to prevent the text from wrapping,
* the `--no-wrap` modifier can be added to the `fd-list__title`, or `fd-list__secondary` elements. */

export const textWrapping = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="s12LFMR5" onclick="onControlClick('h0GFF2325');" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
            </span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GFF2325">
     <ul tabIndex="-1" aria-labelledby="g45464A40" class="fd-list fd-list--dropdown" role="listbox" id="s12LFMR5">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text </span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
`;

textWrapping.parameters = {
    docs: {
        iframeHeight: 400
    }
};

export const noWrapping = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="t53GL7U8" onclick="onControlClick('h0GZH2325');" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
            </span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GZH2325">
     <ul tabIndex="-1" aria-labelledby="g45464B40" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="t53GL7U8">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title fd-list__title--no-wrap">
               Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text 
           </span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
`;

noWrapping.parameters = {
    docs: { iframeHeight: 300 }
};

/** The default size for the popover body is often longer than the text length. The length can be adjusted to match the text
 * length by adding the `fd-popover__body--dropdown-fill` class to `fd-popover__body`. */

export const matchSelectPopoverBodySize = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="wGH468IL" onclick="onControlClick('h0GTKE325');" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Much Longer than Usual</span>
            <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i>
            </span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h0GTKE325">
     <ul tabIndex="-1" aria-labelledby="g4546C40" class="fd-list fd-list--dropdown" role="listbox" id="wGH468IL">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">List item 1</span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
`;


matchSelectPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 300
    }
};

/** To disable a **Select** component, the `aria-disabled="true"` attribute needs to be added to the
* `fd-popover__control` and the `fd-select__control` elements. */

export const disabled = () => `
<div class="fd-popover">
    <div class="fd-popover__control" aria-disabled="true">
        <div class="fd-select">
            <div class="fd-select__control" role="combobox" aria-expanded="false" aria-haspopup="false" aria-disabled="true">
                <span class="fd-select__text-content">Select</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </div>
        </div>
    </div>
</div>
`;

/** To make the **Select** component read-only, the `.is-readonly` class needs to be added to the `fd-select__control` element.  */

export const readonly = () => `
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-readonly" role="combobox" aria-readonly="true" aria-expanded="false" aria-label="Select" aria-haspopup="false" tabindex="0">
              <span class="fd-select__text-content">Selected Item 2</span>
            </div>
        </div>
    </div>
</div>
`;

/**
 * The semantic mode can be used to modify the  select component by adding one of the
 * `is-error` | `is-success` | `is-warning` | `is-information` classes into the `fd-select__control` element.
 * To add text in the body of the component, simply include your text in the `fd-list__message`
 * above the `ul` element.
 */

export const semanticStates = () => `
<label class="fd-form-label" id="a4546C40">
    Success Select Example
</label>
<br>
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-success" role="combobox" tabindex="0" aria-controls="s34GLW8I" onclick="onControlClick('h07jjhYH');"  aria-expanded="false" aria-haspopup="listbox">
                <span class="fd-select__text-content">Success</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
            </div>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jjhYH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--success" role="alert">Success message</div>
         <ul tabIndex="-1" aria-labelledby="a4546C40" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="s34GLW8I">
            <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
               <span class="fd-list__title">
                   List Item 1
               </span>
               <span class="fd-list__secondary">A1</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
               <span class="fd-list__title">List item 2</span>
               <span class="fd-list__secondary">A2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
               <span class="fd-list__title">List item 3</span>
               <span class="fd-list__secondary">A3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
               <span class="fd-list__title">List item 4</span>
               <span class="fd-list__secondary">A4</span>
            </li>
         </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>

<br/>
<br/>
<br/>
<label class="fd-form-label" id="b4546C40">
    Error Select Example
</label>
<br>
<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-error" role="combobox" tabindex="0" aria-controls="e36GLS1W" onclick="onControlClick('h07j9978H');" aria-expanded="false" aria-haspopup="listbox">
               <span class="fd-select__text-content">Error</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j9978H">
        <div aria-live="assertive" class="fd-list__message fd-list__message--error" role="alert">Error message</div>
        <ul tabIndex="-1" aria-labelledby="b4546C40" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="e36GLS1W">
           <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
   </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--error">Error message</span>

<br/>
<br/>
<br/>
<label class="fd-form-label" id="b45336C4">
    Warning Select Example
</label>
<br />
<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-warning" role="combobox" tabindex="0" aria-controls="s490DG4M" onclick="onControlClick('h07j998hhH');"  aria-expanded="false" aria-haspopup="listbox">
               <span class="fd-select__text-content">Warning</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j998hhH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--warning" role="alert">Warning message</div>
        <ul tabIndex="-1" aria-labelledby="b45336C4" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="s490DG4M">
           <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--warning">Warning message</span>

<br/>
<br/>
<br/>

<label class="fd-form-label" id="h45336C4">
    Information Select Example
</label>
<br />
<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-information" role="combobox" tabindex="0" aria-controls="h83LDO23" onclick="onControlClick('hkhh998hhH');"  aria-expanded="false" aria-haspopup="listbox">
               <span class="fd-select__text-content">Information</span>
                <span class="fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--slim-arrow-down"></i>
                </span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="hkhh998hhH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Information message</div>
        <ul tabIndex="-1" aria-labelledby="h45336C4" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="h83LDO23">
           <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--information">Information message</span>
`;

semanticStates.parameters = {
    docs: {
        iframeHeight: 400
    }
};

/** For mobile devices, or tablets, select component should be displayed in fullscreen mode. It can be achieved by wrapping
select component in **Dialog** and **Bar** components.  */

export const mobileMode = () => `
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        <span class="fd-select__text-content">Select Ingredient</span>
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Choose one item</div>
            <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                   <span class="fd-list__title">Apple</span>
               </li>
               <li role="option" tabindex="0" class="fd-list__item">
                   <span class="fd-list__title">Orange</span>
               </li>
               <li role="option" tabindex="0" class="fd-list__item">
                   <span class="fd-list__title">Banana</span>
               </li>
                <li role="option" tabindex="0" class="fd-list__item">
                   <span class="fd-list__title">Kiwi</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Tomato</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Onion</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Spinach</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Potato</span>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

mobileMode.parameters = {
    docs: {
        iframeHeight: 400
    }
};

export const expanded = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div
            aria-controls="h0C6A3245234"
            aria-expanded="true"
            aria-haspopup="listbox"
            class="fd-select__control"
            role="combobox"
            tabindex="0">
             <span class="fd-select__text-content">Select</span>
             <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i> 
            </span>
         </div>
      </div>
  </div>
  <div
    aria-hidden="false"
    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
    id="h0C6A325">
     <ul
        aria-labelledby="h0C6A3245234"
        class="fd-list fd-list--dropdown"
        role="listbox">
        <li aria-selected="true"
            class="fd-list__item is-selected"
            role="option"
            tabindex="0">
           <span class="fd-list__title">List item 1</span>
        </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 2</span>
       </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
`;

expanded.parameters = {
    docs: {
        disable: true
    }
};

export const blank = () => `
<label class="fd-form-label" id="h45336F3">
    Select with Blank Option
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div onClick="onControlClick('h0B6A326');" class="fd-select__control" role="combobox" tabindex="0" aria-controls="h2A6CEW2" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content"></span>
             <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i> 
            </span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0B6A326">
     <ul tabIndex="-1" aria-labelledby="h45336F3" class="fd-list fd-list--dropdown" role="listbox" id="h2A6CEW2">
        <li class="fd-list__item is-selected" aria-label="None selected" aria-selected="true" role="option" tabIndex="0">
           <span class="fd-list__title" />
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />
<label class="fd-form-label" id="h45336F4">
    Select with Blank Option - Compact Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div onClick="onControlClick('h0B6A327');" class="fd-select__control" role="combobox" tabindex="0" aria-controls="r57YU8P5" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content"></span>
             <span class="fd-button fd-button--transparent fd-select__button">
                <i class="sap-icon--slim-arrow-down"></i> 
            </span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0B6A327">
     <ul tabIndex="-1" aria-labelledby="h45336F4" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="r57YU8P5">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title" />
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
`;

blank.parameters = {
    docs: {
        iframeHeight: 400
    }
};
