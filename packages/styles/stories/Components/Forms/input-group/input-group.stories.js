import '../../../../src/icon.scss';
import '../../../../src/button.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
import '../../../../src/input-group.scss';
export default {
    title: 'Components/Forms/Input Group',
    parameters: {
        description: 'The input group includes form inputs with add-ons that allow the user to better understand the information being entered.',
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Sizes = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde111">Default Size </label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde111" name="" value="1234568910 ">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde112">Compact Size </label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon fd-input-group__addon--compact">$</span>
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde112" name="" value="1234568910 ">
    </div>
</div>
`;

Sizes.parameters = {
    docs: {
        iframeHeight: 160,
        description: {
            story: 'The Input Group supports **compact** mode (by virtue of the `--compact` modifier on child components).'
        }
    }
};

export const TextAddOn = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde113">Left Aligned Text Add-on</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde113" name="" value="1234568910 ">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde114">Right Aligned Text Add-on</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde114" name="" value="1234568910 ">
        <span class="fd-input-group__addon">€</span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde115">Right Aligned Text Add-on With Right Aligned Input Text</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input right-align" type="text" id="aqwsde115" name="" value="1234568910 ">
        <span class="fd-input-group__addon">€</span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde116">Left and Right Aligned Text Add-ons</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde116" name="" value="This is a test">
        <span class="fd-input-group__addon">.00</span>
    </div>
</div>
`;

TextAddOn.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The Input Group with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right (or both) of the input element.'
        }
    }
};

export const InputWithIcons = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde117">Input with icon on the left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">
            <span class="sap-icon--employee" role="presentation"></span>
        </span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde117" name="" value="1000000">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde118">Input with icon on the right</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde118" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde119">Input with icon on the right and right aligned input text</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input right-align" type="text" id="aqwsde119" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
`;

InputWithIcons.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The Input with add-on supports icons.'
        }
    }
};

export const InputWithActions = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde120">Input with text add-on</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde120" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--transparent">
                Button
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde121">Input with icon action</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde121" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde122">Compact Input with icon action</label>
    <div class="fd-input-group">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde122" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent fd-button--compact" aria-label="Navigation">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde123">Input with text action on left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--transparent">
                Button
            </button>
        </span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde123" name="" value="1000000">
    </div>
</div>
`;

InputWithActions.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The Input with add-on supports actions. Actions can be shown with a text label or icon.'
        }
    }
};

export const States = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde124">Success</label>
    <div class="fd-input-group is-success">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde124" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde125">Error</label>
    <div class="fd-input-group is-error">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde125" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde126">Warning (Alert)</label>
    <div class="fd-input-group is-warning">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde126" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde127">Information compact</label>
    <div class="fd-input-group is-information">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde127" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact">
                Button
            </button>
        </span>
    </div>
</div>

<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde127">Error compact</label>
    <div class="fd-input-group is-error">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde127" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact">
                Button
            </button>
        </span>
    </div>
</div>

<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde127">Warning(Alert) compact</label>
    <div class="fd-input-group is-warning">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde127" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact">
                Button
            </button>
        </span>
    </div>
</div>

<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde127">Success compact</label>
    <div class="fd-input-group is-success">
        <input class="fd-input fd-input--compact fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde127" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
            <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact">
                Button
            </button>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde128">Disabled</label>
    <div class="fd-input-group is-disabled">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" disabled type="text" id="aqwsde128" name="" placeholder="Enter a value">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde129">Disabled Success</label>
    <div class="fd-input-group is-success is-disabled">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" disabled type="text" id="aqwsde129" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde130">Disabled Error</label>
    <div class="fd-input-group is-error is-disabled">
        <input class="fd-input fd-input-group__input" disabled type="text" id="aqwsde130" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde131">Disabled Warning (Alert)</label>
    <div class="fd-input-group is-warning is-disabled">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" disabled type="text" id="aqwsde131" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde132">Disabled Information</label>
    <div class="fd-input-group is-information is-disabled">
        <input class="fd-input fd-input--compact fd-input-group__input" disabled type="text" id="aqwsde132" name="" value="1000000">
        <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact" disabled>
                Button
            </button>
        </span>
    </div>
</div>
`;

States.parameters = {
    docs: {
        iframeHeight: 700
    }
};

export const Focus = () => `
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde133">Default</label>
    <div class="fd-input-group is-focus">
        <span class="fd-input-group__addon">$</span>
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde133" name="" value="1234568910">
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde134">Error State</label>
    <div class="fd-input-group is-error is-focus">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde134" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde134ff">Success State</label>
    <div class="fd-input-group is-success is-focus">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde134ff" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
<br />
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde134ss">Warning State</label>
    <div class="fd-input-group is-warning is-focus">
        <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="aqwsde134ss" name="" value="1000000">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation"></span>
        </span>
    </div>
</div>
`;

Focus.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'The Input Group supports <b>focus</b> state, it can be added by putting `.is-focus` class to component.'
        }
    }
};

export const TestOne = () => `
<div class="fd-input-group  ">
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
`;

TestOne.parameters = {
    docs: {
        disable: true
    }
};

export const TestTwo = () => `
<div class="fd-input-group  ">
   <input aria-label="test" class="input-group-input-playground input-group-input-playground--compact fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon fd-input-group__addon--compact">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  fd-input-group__addon--compact">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground input-group-input-playground--compact fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  fd-input-group__addon--compact">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground input-group-input-playground--compact fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon fd-input-group__addon--compact">
   .00
   </span>
</div>
`;

TestTwo.parameters = {
    docs: {
        disable: true
    }
};
export const TestThree = () => `
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
`;

TestThree.parameters = {
    docs: {
        disable: true
    }
};

export const TestFour = () => `
<div class="fd-input-group  ">
        <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />

<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
                <br />

<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />

<div class="fd-input-group  ">
        <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />

<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
                <br />

<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
        <h3>Disabled</h3>

<div class="fd-input-group   is-disabled">
        <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />

<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
                <br />

<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />

<div class="fd-input-group   is-disabled">
        <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />

<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
                <br />

<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
`;

TestFour.parameters = {
    docs: {
        disable: true
    }
};

export const TestFive = () => `
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
`;

TestFive.parameters = {
    docs: {
        disable: true
    }
};

export const TestSix = () => `
<div class="fd-input-group fd-input-group--inline  ">
   <span class="fd-input-group__addon  ">
   phone
   </span>
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="Field placeholder text" value="" />
</div>
<div class="fd-input-group fd-input-group--inline  ">
   <input aria-label="test" class="input-group-input-playground  fd-input-group__input" placeholder="Field placeholder text" value="" />
   <span class="fd-input-group__addon ">
   fax
   </span>
</div>
`;

TestSix.parameters = {
    docs: {
        disable: true
    }
};
