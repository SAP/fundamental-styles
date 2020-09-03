import '../../dist/avatar.css';
import '../../dist/icon.css';
import '../../dist/action-sheet.css';

export default {
    title: 'Components/Action Sheet',
    parameters: {
        description: `
An action sheet consists of a list of options a user can select from to complete an action. Actions can be
clustered if there is not enough space on the screen
            
## Usage

**Use the action sheet if:**

- You need an option that provides more than one action.
- It is really important that the user stays in context on a phone.
- You only have a small number of actions.

**Do not use the action sheet if:**
- The menu provides only one option. In this case, consider using a button instead.
- You need to show a hierarchical menu. In this case, use the menu button instead.
- Your users would benefit more from a split button, which offers an easily-accessible default action, with the option to include additional actions.

## Responsiveness

The action sheet is fully responsive. On smartphones, the actions are displayed as a list inside a dialog.
On tablets and desktop devices, the actions are displayed in a popover.
        `,
        tags: ['a11y', 'f3', 'theme']
    }
};

export const actionSheetDesktop = () => `    
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--compact fd-button--transparent" 
                aria-label="More Options" aria-controls="actionSheetDesktop" aria-expanded="false" 
                aria-haspopup="true" onclick="onPopoverClick('actionSheetDesktop');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="actionSheetDesktop">
        <ul class="fd-action-sheet fd-action-sheet--compact">
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--home"></i>
                    <span class="fd-button__text">Go to landing page</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent" onclick="onPopoverClick('actionSheetDesktop');">
                    Decide Later
                </button>
            </li>
        </ul>
    </div>
</div>
`;

actionSheetDesktop.parameters = {
    docs: {
        iframeHeight: 300
    }
};


export const actionSheetTablet = () => `    
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent" 
                aria-label="More Options" aria-controls="actionSheetTablet" aria-expanded="false" 
                aria-haspopup="true" onclick="onPopoverClick('actionSheetTablet');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="actionSheetTablet">
        <ul class="fd-action-sheet">
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--home"></i>
                    <span class="fd-button__text">Go to landing page</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent" onclick="onPopoverClick('actionSheetTablet');">
                    Decide Later
                </button>
            </li>
        </ul>
    </div>
</div>
`;

actionSheetTablet.parameters = {
    docs: {
        iframeHeight: 300
    }
};



export const actionSheetPhone = () => `
<div style="width: 350px; height: 600px; position: relative">
    <button class="fd-button fd-button--transparent" 
            aria-label="More Options" aria-controls="actionSheetPhone" aria-expanded="false" 
            aria-haspopup="true" onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
        <i class="sap-icon--settings"></i>
    </button>
    <div class="fd-action-sheet__wrapper" id="actionSheetPhone">
        <h6 class="fd-action-sheet__title">Press cancel to hide action sheet</h6>
        <ul class="fd-action-sheet">
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--home"></i>
                    <span class="fd-button__text">Go to landing page</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent"
                        onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    Decide Later
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--negative"
                        onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Cancel</span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

actionSheetPhone.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'On smartphones the action sheet is wrapped by `fd-action-sheet__wrapper`, instead of popover.'
    }
};
