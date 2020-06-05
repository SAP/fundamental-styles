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
        description: `The select component is commonly used to enable users to select an item from a predefined list.
      It should be used when there are less than 12 items to choose from. 
      For lists that require more than 12 options, the Combobox Input should be used.`
    }
};

export const cozy = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div
            aria-controls="h0C6A325"
            aria-expanded="false"
            aria-haspopup="true"
            class="fd-select__control"
            onclick="onSelectClick('h0C6A325');"
            role="button"
            tabindex="0">
             Select
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
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

cozy.parameters = {
    docs: { iframeHeight: 300 }
};

export const compact = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div onclick="onSelectClick('h0C6A326');" class="fd-select__control" role="button" tabindex="0" aria-controls="h0C6A326" aria-expanded="false" aria-haspopup="true">
            Select
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C6A326">
     <ul tabIndex="-1" aria-labelledby="f45564A58" class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
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

export const twoColumn = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="button" tabindex="0" aria-controls="h0C62325" onclick="onSelectClick('h0C62325');" aria-expanded="false" aria-haspopup="true">
             Select Product
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C62325">
     <ul tabIndex="-1" aria-labelledby="f45564A59" class="fd-list fd-list--dropdown" role="listbox">
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
        <div class="fd-select__control" role="button" tabindex="0" aria-controls="h07jj326" onclick="onSelectClick('h07jj326');" aria-expanded="false" aria-haspopup="true">
            Select Product
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jj326">
     <ul tabIndex="-1" aria-labelledby="g45564A59" class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
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
        iframeHeight: 300,
        storyDescription: `
The <code>Select</code> component can be customized by adding additional information
in additional columns.
        `
    }
};

export const twoColumnsAndIcons = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="button" tabindex="0" aria-controls="h090G325" onclick="onSelectClick('h090G325');" aria-expanded="false" aria-haspopup="true">
             Select Product
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h090G325">
     <ul tabIndex="-1" aria-labelledby="g45564A50" class="fd-list fd-list--dropdown" role="listbox">
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

export const itemGrouping = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="button" tabindex="0" aria-controls="h09GDGG325" onclick="onSelectClick('h09GDGG325');" aria-expanded="false" aria-haspopup="true">
             Select Ingredient
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h09GDGG325">
        <ul tabIndex="-1" aria-labelledby="g45464A50" class="fd-list fd-list--dropdown" role="listbox">
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
        iframeHeight: 470,
        storyDescription: `
In cases where the list items need to be categorized into groups,
it is possible to add headers for each category.
      `
    }
};

export const textWrapping = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="button" tabindex="0" aria-controls="h0GFF2325" onclick="onSelectClick('h0GFF2325');" aria-expanded="false" aria-haspopup="true">
             Select
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GFF2325">
     <ul tabIndex="-1" aria-labelledby="g45464A40" class="fd-list fd-list--dropdown" role="listbox">
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
        iframeHeight: 300,
        storyDescription: `
In the **Select** component, the text is wrapped by default. In order to prevent the text from wrapping, 
the <code>--no-wrap</code> modifier can be added to the <code>fd-list__title</code>, or <code>fd-list__secondary</code> elements.
    `
    }
};

export const noWrapping = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="button" tabindex="0" aria-controls="h0GZH2325" onclick="onSelectClick('h0GZH2325');" aria-expanded="false" aria-haspopup="true">
            Select
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GZH2325">
     <ul tabIndex="-1" aria-labelledby="g45464B40" class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
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

export const matchSelectPopoverBodySize = () => `
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="button" tabindex="0" aria-controls="h0GTKE325" onclick="onSelectClick('h0GTKE325');" aria-expanded="false" aria-haspopup="true">
             Much Longer than Usual
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h0GTKE325">
     <ul tabIndex="-1" aria-labelledby="g4546C40" class="fd-list fd-list--dropdown" role="listbox">
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
        iframeHeight: 300,
        storyDescription: `
The default size for the popover body is often longer than the text length. 
The length can be adjusted to match the text length by adding the
<code>fd-popover__body--dropdown-fill</code> class to <code>fd-popover__body</code>.
    `
    }
};

export const disabled = () => `
<div class="fd-popover">
    <div class="fd-popover__control" aria-disabled="true">
        <div class="fd-select">
            <div class="fd-select__control" role="button" aria-expanded="false" aria-haspopup="false" aria-disabled="true">
                Select
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
        </div>
    </div>
</div>
`;

disabled.parameters = {
    docs: {
        storyDescription: `
To disable a **Select** component, the <code>aria-disabled="true"</code> attribute needs to be added to the
<code>fd-popover__control</code> and the <code>fd-select__control</code> elements.
    `
    }
};

export const readonly = () => `
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-readonly" role="button" aria-expanded="false" aria-label="Select" aria-haspopup="false">Selected Item 2</div>
        </div>
    </div>
</div>
`;

disabled.parameters = {
    docs: {
        storyDescription: `
To make the **Select** component read-only, the <code>.is-readonly</code>
class needs to be added to the <code>fd-select__control</code> element. 
    `
    }
};

export const semanticStates = () => `
<label class="fd-form-label" id="a4546C40">
    Success Select Example
</label>
<br>
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-success" role="button" tabindex="0" aria-controls="h07jjhYH" onclick="onSelectClick('h07jjhYH');"  aria-expanded="false" aria-haspopup="true">
                Success
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jjhYH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--success" role="alert">Success message</div>
         <ul tabIndex="-1" aria-labelledby="a4546C40" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
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
           <div class="fd-select__control is-error" role="button" tabindex="0" aria-controls="h07j9978H" onclick="onSelectClick('h07j9978H');" aria-expanded="false" aria-haspopup="true">
               Error
               <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j9978H">
        <div aria-live="assertive" class="fd-list__message fd-list__message--error" role="alert">Error message</div>
        <ul tabIndex="-1" aria-labelledby="b4546C40" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
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
           <div class="fd-select__control is-warning" role="button" tabindex="0" aria-controls="h07j998hhH" onclick="onSelectClick('h07j998hhH');"  aria-expanded="false" aria-haspopup="true">
               Warning
               <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j998hhH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--warning" role="alert">Warning message</div>
        <ul tabIndex="-1" aria-labelledby="b45336C4" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
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
           <div class="fd-select__control is-information" role="button" tabindex="0" aria-controls="hkhh998hhH" onclick="onSelectClick('hkhh998hhH');"  aria-expanded="false" aria-haspopup="true">
               Information
               <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="hkhh998hhH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Information message</div>
        <ul tabIndex="-1" aria-labelledby="h45336C4" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
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
        iframeHeight: 500,
        storyDescription: `
The semantic mode can be used to modify the  select component by adding one of the 
<code>is-error</code> | <code>is-success</code> | <code>is-warning</code> | <code>is-information</code>
classes into the <code>fd-select__control</code> element.
To add text in the body of the component, simply include your text in the <code>fd-list__message</code>
above the <code>ul</code> element. 
    `
    }
};

export const mobileMode = () => `
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Select Ingredient
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button tabindex="-1" class="fd-button fd-button--transparent sap-icon--decline" aria-label="close"></button>
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
        iframeHeight: 400,
        storyDescription: `
For mobile devices, or tablets, select component should be displayed in fullscreen mode. It can be achieved by wrapping
select component in **Dialog** and **Bar** components. 
    `
    }
};
