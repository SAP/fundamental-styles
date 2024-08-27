var O=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(l,a,s)=>a in l?O(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,e=(l,a)=>{for(var s in a||(a={}))H.call(a,s)&&h(l,s,a[s]);if(f)for(var s of f(a))U.call(a,s)&&h(l,s,a[s]);return l},c=(l,a)=>D(l,E(a));/* empty css                   *//* empty css                 *//* empty css                 */const W=`<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Inline checkboxes</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619" disabled checked>
            <label class="fd-checkbox__label" for="Ai4ez619">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Carrots</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Potatoes</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618" checked>
            <label class="fd-checkbox__label" for="Ai4ez618">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tomatoes</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`,B=`<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Required checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez61rc">
            <label class="fd-checkbox__label fd-checkbox__label--required" for="Ai4ez61rc">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Required Checkbox</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`,J={title:"Components/Forms/Checkbox",parameters:{description:`A checkbox lets the user set a binary value such as “true/false”. When the user selects the checkbox, it toggles between:

- **Checked**: the state described by the checkbox text applies, or that the item has been chosen.
- **Un-checked**: the state described by the checkbox is not applied.
- **Tri-state**: a state that indicates it is neither checked nor unchecked. JavaScript must be used to set the input's 'indeterminate' property to true. The main purpose of the tri-state is to represent a mixed selection of states of dependent input fields. If some (but not all) of the dependent fields are selected, the checkbox shows a partially selected state. This is only a visual state and can’t be achieved by a direct user interaction. In this example the indeterminate state is set on page load.

Note: With checkboxes, all options are visible, and the user can make one or more selections.

##Usage
**Use the checkbox if:**

- Only one option can be selected or deselected, for example to accept terms of use. Use it only if the meaning is obvious.
- A group or a list of options can be selected independently of each other.
- the options are displayed right away without any user interaction.
- An intermediate selection state (tri-state) is required when multiple sub-options are grouped under a parent option. The tri-state will represent that multiple (but not all) sub-options are selected in the list.

**Do not use the checkbox if:**

- The user needs to choose multiple options from a large list. Use a **Combo Box Input** instead.
- The user can choose only one option from a list. Use **Radio Buttons**, a **Select**, or a **List** instead.
- The user needs to perform instantaneous actions that do not need reviewing or confirming. Consider using a **Switch** instead.
- There is not enough space available on the screen. Use a **Combo Box** instead.
        `,tags:["f3","a11y","theme"]}},b=`
<style>
    .checkbox-example-container > fieldset {
        max-width: 100%;
    }
</style>
`,d=()=>B;d.parameters={docs:{description:{story:"To show that a checkbox input is required, use the `fd-checkbox__label--required` class.\n        "}}};const i=()=>`
${b}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Normal State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611hov">
            <label class="fd-checkbox__label is-hover" for="Ai4ez611hov">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Hover State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Selected/Checked State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez622" disabled>
            <label class="fd-checkbox__label" for="Ai4ez622">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Disabled State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez632" checked disabled>
            <label class="fd-checkbox__label" for="Ai4ez632">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Selected/Checked Disabled State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez643" disabled>
            <label class="fd-checkbox__label" for="Ai4ez643">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-State Disabled</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;i.parameters={docs:{}};const n=()=>W;n.parameters={docs:{description:{story:"Checkboxes can display horizontally in a line. To display them this way, add the `fd-checkbox__label--inline` modifier class to the element."}}};const o=()=>`
${b}
<div class="checkbox-example-container">
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Error checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119">
                <label class="fd-checkbox__label" for="Ai4ez6119">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Regular Stat</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez6119hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Hover Stat</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
                <label class="fd-checkbox__label" for="Ai4ez6129">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
                <label class="fd-checkbox__label" for="Ai4ez613i1">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Success checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192">
                <label class="fd-checkbox__label" for="Ai4ez61192">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61192hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
                <label class="fd-checkbox__label" for="Ai4ez61292">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
                <label class="fd-checkbox__label" for="Ai4ez613i2">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Warning checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193">
                <label class="fd-checkbox__label" for="Ai4ez61193">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61193hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
                <label class="fd-checkbox__label" for="Ai4ez61293">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
                <label class="fd-checkbox__label" for="Ai4ez613i3">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Information checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194">
                <label class="fd-checkbox__label" for="Ai4ez61194">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61194hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
                <label class="fd-checkbox__label" for="Ai4ez61294">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Checked State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
                <label class="fd-checkbox__label" for="Ai4ez613i4">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Disabled checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61196" disabled>
                <label class="fd-checkbox__label" for="Ai4ez61196">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled>
                <label class="fd-checkbox__label" for="Ai4ez61296">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled>
                <label class="fd-checkbox__label" for="Ai4ez613i6">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Readonly checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611967" readonly>
                <label class="fd-checkbox__label" for="Ai4ez611967">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611967hov" readonly>
                <label class="fd-checkbox__label is-hover" for="Ai4ez611967hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296cc" checked readonly>
                <label class="fd-checkbox__label" for="Ai4ez61296cc">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Checked State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6cc" readonly>
                <label class="fd-checkbox__label" for="Ai4ez613i6cc">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;o.parameters={docs:{description:{story:"Checkboxes can display several interaction states to communicate semantic meaning to the users. To display different states, add the classes below to the `fd-form-item`:\n\n| States | Class |\n| :----------------- | :------------------ |\n| Error | `fd-checkbox is-error` |\n| Success | `fd-checkbox is-success` |\n| Warning | `fd-checkbox is-warning` |\n| Information | `fd-checkbox is-information` |\n| Disabled | `fd-checkbox is-disabled` |\n"}}};const t=()=>`
${b}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Truncation Options</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611lw">
            <label class="fd-checkbox__label" for="Ai4ez611lw" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Apple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612lw" checked>
            <label class="fd-checkbox__label fd-checkbox__label--wrap" for="Ai4ez612lw" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612lwtop" checked>
            <label class="fd-checkbox__label fd-checkbox__label--wrap-top-aligned" for="Ai4ez612lwtop" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;t.parameters={docs:{description:{story:"By default, long checkbox label truncates with ellipsis. For this behaviour no modifier class is needed. For checkbox label that wraps on a new line to show the entire content, use `.fd-checkbox__label--wrap` modifier class applied with `.fd-checkbox__label`. Keep in mind that for this to work <b>max-width</b> should be set on the label. For a <b>top-left aligned</b> label use the `.fd-checkbox__label--wrap-top-aligned` modifier class.\n        "}}};const r=()=>`
${b}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Display Only</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez611lwdo">
            <label class="fd-checkbox__label" for="Ai4ez611lwdo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Unchecked Icon</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez612lwdo" checked>
            <label class="fd-checkbox__label" for="Ai4ez612lwdo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Checked Icon</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez614ldo">
            <label class="fd-checkbox__label" for="Ai4ez614ldo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-state</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;r.parameters={docs:{description:{story:`In the Display Only Mode, the checkbox is replaced by two icons to represent the checked and unchecked states. The control becomes a simple icon. <br>Add the <code>.is-display</code> modifier class to <code>.fd-checkbox</code> for Display Only Mode.
        `}}};var k,_,p;d.parameters=c(e({},d.parameters),{docs:c(e({},(k=d.parameters)==null?void 0:k.docs),{source:e({originalSource:"() => requiredExampleHtml"},(p=(_=d.parameters)==null?void 0:_.docs)==null?void 0:p.source)})});var x,m,v;i.parameters=c(e({},i.parameters),{docs:c(e({},(x=i.parameters)==null?void 0:x.docs),{source:e({originalSource:`() => \`
\${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Normal State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611hov">
            <label class="fd-checkbox__label is-hover" for="Ai4ez611hov">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Hover State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Selected/Checked State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez622" disabled>
            <label class="fd-checkbox__label" for="Ai4ez622">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Disabled State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez632" checked disabled>
            <label class="fd-checkbox__label" for="Ai4ez632">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Selected/Checked Disabled State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-State</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez643" disabled>
            <label class="fd-checkbox__label" for="Ai4ez643">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-State Disabled</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
\``},(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source)})});var u,y,A;n.parameters=c(e({},n.parameters),{docs:c(e({},(u=n.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => inlineExampleHtml"},(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source)})});var z,g,S;o.parameters=c(e({},o.parameters),{docs:c(e({},(z=o.parameters)==null?void 0:z.docs),{source:e({originalSource:`() => \`
\${localStyles}
<div class="checkbox-example-container">
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Error checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119">
                <label class="fd-checkbox__label" for="Ai4ez6119">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Regular Stat</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez6119hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Hover Stat</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
                <label class="fd-checkbox__label" for="Ai4ez6129">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
                <label class="fd-checkbox__label" for="Ai4ez613i1">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Success checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192">
                <label class="fd-checkbox__label" for="Ai4ez61192">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61192hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
                <label class="fd-checkbox__label" for="Ai4ez61292">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
                <label class="fd-checkbox__label" for="Ai4ez613i2">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Warning checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193">
                <label class="fd-checkbox__label" for="Ai4ez61193">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61193hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
                <label class="fd-checkbox__label" for="Ai4ez61293">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
                <label class="fd-checkbox__label" for="Ai4ez613i3">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Information checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194">
                <label class="fd-checkbox__label" for="Ai4ez61194">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61194hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
                <label class="fd-checkbox__label" for="Ai4ez61294">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Checked State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
                <label class="fd-checkbox__label" for="Ai4ez613i4">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Disabled checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61196" disabled>
                <label class="fd-checkbox__label" for="Ai4ez61196">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled>
                <label class="fd-checkbox__label" for="Ai4ez61296">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled>
                <label class="fd-checkbox__label" for="Ai4ez613i6">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Readonly checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611967" readonly>
                <label class="fd-checkbox__label" for="Ai4ez611967">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Regular State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611967hov" readonly>
                <label class="fd-checkbox__label is-hover" for="Ai4ez611967hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Hover State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296cc" checked readonly>
                <label class="fd-checkbox__label" for="Ai4ez61296cc">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Checked State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6cc" readonly>
                <label class="fd-checkbox__label" for="Ai4ez613i6cc">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Tri-State</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>
</div>
\``},(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source)})});var w,T,q;t.parameters=c(e({},t.parameters),{docs:c(e({},(w=t.parameters)==null?void 0:w.docs),{source:e({originalSource:`() => \`
\${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Truncation Options</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611lw">
            <label class="fd-checkbox__label" for="Ai4ez611lw" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Apple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612lw" checked>
            <label class="fd-checkbox__label fd-checkbox__label--wrap" for="Ai4ez612lw" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612lwtop" checked>
            <label class="fd-checkbox__label fd-checkbox__label--wrap-top-aligned" for="Ai4ez612lwtop" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
\``},(q=(T=t.parameters)==null?void 0:T.docs)==null?void 0:q.source)})});var R,C,I;r.parameters=c(e({},r.parameters),{docs:c(e({},(R=r.parameters)==null?void 0:R.docs),{source:e({originalSource:`() => \`
\${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Display Only</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez611lwdo">
            <label class="fd-checkbox__label" for="Ai4ez611lwdo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Unchecked Icon</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez612lwdo" checked>
            <label class="fd-checkbox__label" for="Ai4ez612lwdo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Checked Icon</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez614ldo">
            <label class="fd-checkbox__label" for="Ai4ez614ldo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-state</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
\``},(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source)})});const K=["Required","Default","Inline","States","TextTruncation","DisplayOnly"];export{i as Default,r as DisplayOnly,n as Inline,d as Required,o as States,t as TextTruncation,K as __namedExportsOrder,J as default};
