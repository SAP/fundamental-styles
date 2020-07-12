import '../../dist/input-group.css';
import '../../dist/form-item.css';
import '../../dist/form-label.css';
import '../../dist/input-group.css';
import '../../dist/popover.css';
import '../../dist/textarea.css';
import '../../dist/localization-editor.css';

export default {
    title: 'Components/Localization Editor',
    tags: ['non-f3'],
    parameters: {
        description: ''
    }
};

export const withInput = () => `
<div class="fd-localization-editor">
<div class="fd-popover">
   <div class="fd-popover__control">
      <div class="fd-form-item">
         <label class="fd-form-label" for="vTshu851">Localization Editor Label</label>
         <div class="fd-input-group">
            <input type="text" class="fd-input fd-input-group__input" id="" aria-controls="NJvVh542c"
            aria-label="localization-input" aria-haspopup="true" placeholder="Enter Label" onclick="onPopoverClick('NJvVh542c')">
            <span class="fd-input-group__addon fd-input-group__addon--button">
               <button class="fd-input-group__button fd-button  fd-button--transparent"
               aria-controls="NJvVh542c" aria-haspopup="true" onclick="onPopoverClick('NJvVh542c')">EN*</button>
            </span>
         </div>
      </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="NJvVh542c">
      <nav class="fd-menu">
         <ul class="fd-menu__list fd-menu__list--no-shadow">
            <li class="fd-localization-editor__language">
               <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Enter Label">
                  <span class="fd-input-group__addon">
                  ES
                  </span>
               </div>
            </li>
            <li class="fd-localization-editor__language">
               <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input-group__input"  id="" placeholder="Enter Label">
                  <span class="fd-input-group__addon">
                  CH
                  </span>
               </div>
            </li>
            <li class="fd-localization-editor__language">
               <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Enter Label">
                  <span class="fd-input-group__addon">
                  PL
                  </span>
               </div>
            </li>
         </ul>
      </nav>
   </div>
</div>
</div>

<br>

<div class="fd-localization-editor">
<div class="fd-popover">
   <div class="fd-popover__control">
      <div class="fd-form-item">
         <label class="fd-form-label" for="vTshu851">Localization Editor Compact Mode</label>
         <div class="fd-input-group">
            <input aria-label="localization-input-compact" type="text" class="fd-input fd-input--compact fd-input-group__input" id="" aria-controls="test22"
            aria-haspopup="true" placeholder="Enter Label" onclick="onPopoverClick('test22')">
            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
               <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact"
               aria-controls="test22" aria-haspopup="true" onclick="onPopoverClick('test22')">EN*</button>
            </span>
         </div>
      </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="test22">
      <nav class="fd-menu">
         <ul class="fd-menu__list fd-menu__list--no-shadow">
            <li class="fd-localization-editor__language">
               <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Enter Label">
                  <span class="fd-input-group__addon fd-input-group__addon--compact">
                  ES
                  </span>
               </div>
            </li>
            <li class="fd-localization-editor__language">
               <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Enter Label">
                  <span class="fd-input-group__addon fd-input-group__addon--compact">
                  CH
                  </span>
               </div>
            </li>
            <li class="fd-localization-editor__language">
               <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Enter Label">
                  <span class="fd-input-group__addon fd-input-group__addon--compact">
                  PL
                  </span>
               </div>
            </li>
         </ul>
      </nav>
   </div>
</div>
</div>
`;

withInput.parameters = {
    docs: {
        iframeHeight: 200
    }
};
