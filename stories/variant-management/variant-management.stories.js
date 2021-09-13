export default {
    title: 'Components/Variant Management',
    parameters: {
        description: `Variants store view settings, such as filter settings or control parameters. The filter settings consist of filter parameters, selection fields, and the layout of filters. They are set within the filter bar. Control parameters are the sort order, filter and group settings, column visibility, and the layout of a table or chart. They are set within the toolbar of the control. The variant management control enables the user to load, save, change, and maintain variants.
 
<a target="_blank" href="https://experience.sap.com/internal/fiori-design-web/variant-management/">See Variant Management interaction design specifications for more details</a>
<br><br><br>
## Usage

**Use the variant management if:**

- The user needs to save and load different filter settings to find the relevant data.
- The user needs to save and load different layouts (for example, a table) to display data in different views.
- The user needs to save the settings for the whole page, including the filter settings and table layout.

## Responsiveness

The variant management uses the standard Responsive Popover. This means it is a standard popover on tablet and desktop with both compact and cozy mode support.
On phone the dialog is stretched full screen.

The popover and dialog contents are header, footer, actions and select list.

<br><br><br>

`,
        docs: { iframeHeight: 400 },
        tags: ['f3', 'theme', 'development'],
        components: ['action-sheet', 'bar', 'button', 'icon', 'list', 'popover', 'title', 'variant-management']
    }
};

export const defaultExample = () => `<div style="height: 400px;">
    <div class="fd-variant-management">
        <h3 class="fd-title fd-title--h3 fd-variant-management__title">Title Level 3</h3>
        <div class="fd-variant-management__indicator">*</div>
        <div class="fd-popover">
            <button 
                class="fd-button fd-button--compact fd-button--transparent fd-popover__control" 
                aria-label="Open variant vanagement popover" 
                aria-controls="popoverDefault" 
                aria-expanded="true" 
                aria-haspopup="dialog"
                onclick="onPopoverClick('popoverDefault');">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <section 
                aria-hidden="false" 
                class="fd-popover__body" 
                id="popoverDefault" 
                aria-label="My Views" 
                role="dialog">
                <header class="fd-popover__body-header">
                    <div class="fd-bar fd-bar--cozy">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h4 class="fd-title fd-title--h4">My Views</h4>
                            </div>
                        </div>
                    </div>
                </header>
                <div style="min-width: 400px;">
                    <ul class="fd-list" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-selected">
                            <span class="fd-list__title">Standard</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">Accounts by ID</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">Accounts by Name</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">My Better Variant</span>
                        </li>
                    </ul>
                </div>
                <footer class="fd-popover__body-footer">
                    <div class="fd-bar fd-bar--cozy fd-bar--footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--emphasized">Save</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--transparent">Save As</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--transparent">Manage</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    </div>
</div>
`;

defaultExample.storyName = 'Default';
defaultExample.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `The text of the variant management control should use Title
        control with the H3 level as default. By using the title control the variant management control can be set to any header level size.
`
    }
};


export const unsavedExample = () => `<div style="height: 400px;">
    <div class="fd-variant-management fd-variant-management--unsaved">
        <h3 class="fd-title fd-title--h3 fd-variant-management__title">Title Level 3</h3>
        <div class="fd-variant-management__indicator">*</div>
        <div class="fd-popover">
            <button 
                class="fd-button fd-button--compact fd-button--transparent fd-popover__control" 
                aria-label="Open variant vanagement popover" 
                aria-controls="popoverUnsaved" 
                aria-expanded="true" 
                aria-haspopup="dialog"
                onclick="onPopoverClick('popoverUnsaved');">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <section 
                aria-hidden="false" 
                class="fd-popover__body" 
                id="popoverUnsaved" 
                aria-label="My Views" 
                role="dialog">
                <header class="fd-popover__body-header">
                    <div class="fd-bar fd-bar--cozy">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h4 class="fd-title fd-title--h4">My Views</h4>
                            </div>
                        </div>
                    </div>
                </header>
                <div style="min-width: 400px;">
                    <ul class="fd-list" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-selected">
                            <span class="fd-list__title">Standard</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">Accounts by ID</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">Accounts by Name</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">My Better Variant</span>
                        </li>
                    </ul>
                </div>
                <footer class="fd-popover__body-footer">
                    <div class="fd-bar fd-bar--cozy fd-bar--footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--emphasized">Save</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--transparent">Save As</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--transparent">Manage</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    </div>
</div>
`;

unsavedExample.storyName = 'Unsaved Variant';
unsavedExample.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `Variants that have been modified but not saved can be marked with an asterisk. 

Apply the \`.fd-variant-management--unsaved\` modifier class to \`.fd-variant-management\` base class and wrap the asterisk with a div or span with \`.fd-variant-management__indicator\` class.`
    }
};


export const changedExample = () => `<div style="height: 400px;">
    <div class="fd-variant-management fd-variant-management--changed">
        <h3 class="fd-title fd-title--h3 fd-variant-management__title">Title Level 3</h3>
        <div class="fd-variant-management__indicator">changed</div>
        <div class="fd-popover">
            <button 
                class="fd-button fd-button--compact fd-button--transparent fd-popover__control" 
                aria-label="Open variant vanagement popover" 
                aria-controls="popoverChanged" 
                aria-expanded="true" 
                aria-haspopup="dialog"
                onclick="onPopoverClick('popoverChanged');">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <section 
                aria-hidden="false" 
                class="fd-popover__body" 
                id="popoverChanged" 
                aria-label="My Views" 
                role="dialog">
                <header class="fd-popover__body-header">
                    <div class="fd-bar fd-bar--cozy">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h4 class="fd-title fd-title--h4">My Views</h4>
                            </div>
                        </div>
                    </div>
                </header>
                <div style="min-width: 400px;">
                    <ul class="fd-list" role="list">
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-selected">
                            <span class="fd-list__title">Standard</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">Accounts by ID</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">Accounts by Name</span>
                        </li>
                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                            <span class="fd-list__title">My Better Variant</span>
                        </li>
                    </ul>
                </div>
                <footer class="fd-popover__body-footer">
                    <div class="fd-bar fd-bar--cozy fd-bar--footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--emphasized">Save</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--transparent">Save As</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--compact fd-button--transparent">Manage</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    </div>
</div>
`;

changedExample.storyName = 'Changed Variant';
changedExample.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `The optional dirty state feature is recommended by global design concepts. The text to represent changed (dirty state) should be an additional option to represent the dirty state.
        
Apply the \`.fd-variant-management--changed\` modifier class to \`.fd-variant-management\` base class and wrap the text with a div or span with \`.fd-variant-management__indicator\` class.`
    }
};

