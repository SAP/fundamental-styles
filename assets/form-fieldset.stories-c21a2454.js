/* empty css                 *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css              */const a=`<fieldset class="fd-fieldset" id="radio1">
    <legend class="fd-fieldset__legend">Radio Buttons</legend>
    <div class="fd-form__group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh761" name="radio1" checked>
            <label class="fd-radio__label" for="pDidh761">
                <span class="fd-radio__text">Field label</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7612" name="radio1">
            <label class="fd-radio__label" for="pDidh7612">
                <span class="fd-radio__text">Field label</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7613" name="radio1">
            <label class="fd-radio__label" for="pDidh7613">
                <span class="fd-radio__text">Field label</span>
            </label>
        </div>
    </div>
</fieldset>
`,d=`
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label" for="Ai4ez611">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
                <label class="fd-checkbox__label" for="Ai4ez612">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Selected State
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
                <label class="fd-checkbox__label" for="Ai4ez613">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        TriState Text
                    </span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes disabled</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez614" disabled>
                <label class="fd-checkbox__label" for="Ai4ez614">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez615" disabled>
                <label class="fd-checkbox__label" for="Ai4ez615">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez616" disabled>
                <label class="fd-checkbox__label" for="Ai4ez616">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes inline</legend>
        <div class="fd-form-group fd-form-group--inline">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label" for="Ai4ez617">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez618">
                <label class="fd-checkbox__label" for="Ai4ez618">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez619">
                <label class="fd-checkbox__label" for="Ai4ez619">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__text">
                        Field label
                    </span>
                </label>
            </div>
        </div>
    </fieldset>
`,t={title:"Components/Forms/Field Set",parameters:{description:`A fieldset is used to give semantic meaning to a group of elements inside a form (e.g. Billing or Shipping Address).
Grouping fields together into a fieldset also provides styling and accessibility benefits.`,tags:["f3","a11y","theme"]}},e=()=>d;e.parameters={docs:{description:{story:"Checkbox groups should always be grouped using fieldset for accessibility reasons."}}};const s=()=>a;s.parameters={docs:{description:{story:"Radio button groups should always be grouped using fieldset for accessibility reasons."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => checkboxGroupsExampleHtml",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => radioButtonGroupsExampleHtml",...s.parameters?.docs?.source}}};const r=["CheckboxGroups","RadioButtonGroups"];export{e as CheckboxGroups,s as RadioButtonGroups,r as __namedExportsOrder,t as default};
