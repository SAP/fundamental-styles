import '../../dist/avatar.css';
import '../../dist/icon.css';
import '../../dist/action-sheet.css';

export default {
    title: 'Components/Action Sheet',
    parameters: {
        tags: ['a11y', 'f3', 'theme'],
        description: `
            The avatar component displays an image, icon or user initials, and is used for user profiles, placeholder images, icons or business-related images i.e. product photos.
        `
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
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">Action</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">Action</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">ActionAction</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">ActionActionAction</span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

actionSheetDesktop.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: ''
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
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">Action</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">ActionAction</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">ActionActionAction</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">Action</span>
                </button>
            </li>
        </ul>
    </div>
</div>
`;

actionSheetTablet.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: ''
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
        <ul class="fd-action-sheet">
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">Action</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">ActionAction</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">ActionActionAction</span>
                </button>
            </li>
            <li class="fd-action-sheet__item">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--settings"></i>
                    <span class="fd-button__text">Action</span>
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
        storyDescription: ''
    }
};
