import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/action-sheet.scss';
import '../../../src/popover.scss';
import '../../../src/button.scss';
export default {
    title: 'Components/Action Sheet',
    parameters: {
        description: `
An action sheet consists of a list of options a user can select from to complete an action. Actions can be
clustered if there is not enough space on the screen.

## Usage

**Use the action sheet if:**

- You need an option that provides more than one action.
- It is really important that the user stays in context on a phone.
- You only have a small number of actions.

**Do not use the action sheet if:**

- The menu provides only one option. In this case, consider using a **Button** instead.
- You need to show a hierarchical menu. In this case, use the menu button instead.
- Your users would benefit more from a split button, which offers an easily-accessible default action, with the option to include additional actions.
        `,
        tags: ['a11y', 'f3', 'theme', 'responsive']
    }
};

export const ActionSheetDesktop = () => `
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--compact fd-button--transparent"
                aria-label="More Options" aria-controls="actionSheetDesktop" aria-expanded="true"
                aria-haspopup="true" onclick="onPopoverClick('actionSheetDesktop');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--compact" aria-hidden="false" id="actionSheetDesktop">
        <ul class="fd-action-sheet fd-action-sheet--compact" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left"
                        onclick="onPopoverClick('actionSheetDesktop');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
        </ul>
    </div>
</div>
<div style="height: 300px"></div>
`;

ActionSheetDesktop.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story:
            'The action sheet is displayed in desktop mode by adding the `fd-action-sheet--compact` modifier class to the container, and `fd-button--compact` to each button.'
        }
    }
};

ActionSheetDesktop.storyName = 'Desktop';

export const ActionSheetTablet = () => `
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent"
                aria-label="More Options" aria-controls="actionSheetTablet" aria-expanded="true"
                aria-haspopup="true" onclick="onPopoverClick('actionSheetTablet');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="actionSheetTablet">
        <ul class="fd-action-sheet" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                        onclick="onPopoverClick('actionSheetTablet');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
        </ul>
    </div>
</div>
<div style="height: 300px"></div>
`;

ActionSheetTablet.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story:
            'Although the tablet mode is visually similar to desktop, it doesn\'t require any modifier classes. Therefore, the container and buttons appear slightly larger for better visibility.'
        }
    }
};

ActionSheetTablet.storyName = 'Tablet';

export const ActionSheetMobile = () => `<div style="width: 350px; height: 600px; position: relative">
    <button class="fd-button fd-button--transparent"
            aria-label="More Options" aria-controls="actionSheetPhone" aria-expanded="true"
            aria-haspopup="true" onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
        <i class="sap-icon--settings"></i>
    </button>
    <div class="fd-action-sheet__wrapper fd-action-sheet__wrapper--active" id="actionSheetPhone">
        <h6 class="fd-action-sheet__title">Press cancel to hide action sheet</h6>
        <ul class="fd-action-sheet fd-action-sheet--mobile" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                        onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--negative"
                        onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Cancel</span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

ActionSheetMobile.parameters = {
    docs: {
        iframeHeight: 800,
        description: {
            story: `To display the action sheet on mobile screens,
        the container requires a \`fd-action-sheet--mobile\` modifier class and is additionally wrapped by \`fd-action-sheet__wrapper\`.`
        }
    }
};

ActionSheetMobile.storyName = 'Mobile';
