export default {
    title: 'Components/Quick View',
    parameters: {
        description: `The quick view is similar to a popover but has a predefined structure, a fixed set of UI
        elements, and automatic UI rendering. Should be used in combination with the popover or dialog components`,
        docs: { iframeHeight: 500 },
        tags: ['f3', 'a11y', 'theme'],
        components: ['quick-view', 'bar', 'button', 'popover', 'dialog', 'avatar', 'icon', 'title', 'link']
    }
};

export const Popover = () => `<div class="fd-popover">
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-quick-view__header">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">Company</div>
                    </div>
                </div>
            </div>

            <div class="fd-quick-view__content">
                <div class="fd-quick-view__subheader">
                    <span class="fd-avatar fd-avatar--s" role="presentation">
                        <i role="presentation" class="fd-avatar__icon sap-icon--building"></i>
                    </span>
                    
                    <div class="fd-quick-view__text">
                        <div class="fd-quick-view__title">
                            <h5 class="fd-title fd-title--h5">Company B</h5>
                        </div>
                        
                        <div class="fd-quick-view__subtitle">
                            <div class="fd-quick-view__subtitle">Michael Adams</div>
                        </div>
                    </div>
                </div>
                
                <div class="fd-quick-view__group">
                    <div class="fd-quick-view__group-title">
                        <h5 class="fd-title fd-title--h5">Contact Details</h5>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Phone
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            <a class="fd-link" href="tel:+1 605 555 5555">+1 605 555 5555</a>
                        </div>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Address
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            781 Main Street <br>
                            Anytown, SD 57401, USA
                        </div>
                    </div>
                </div>
                
                <div class="fd-quick-view__group">
                    <div class="fd-quick-view__group__title">
                        <h5 class="fd-title fd-title--h5">Main Contact</h5>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Name
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            Michael Adams
                        </div>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Mobile
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            <a class="fd-link" href="tel:+1 605 555 5555">+1 605 555 5555</a>
                        </div>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Phone
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            <a class="fd-link" href="tel:+1 316 555 5555">+1 316 555 5555</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Popover.storyName = 'Popover';

Popover.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'QuickView component as popover'
    }
};

export const Dialog = () => `<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">Company B</div>
            </div>
        </header>

        <div class="fd-dialog__body">
            <div class="fd-quick-view">
                <div class="fd-quick-view__content">
                    <div class="fd-quick-view__subheader">
                        <span class="fd-avatar fd-avatar--s" role="presentation">
                            <i role="presentation" class="fd-avatar__icon sap-icon--camera"></i>
                        </span>
                        
                        <div class="fd-quick-view__text">
                            <div class="fd-quick-view__title">
                                <h5 class="fd-title fd-title--h5">
                                    <a class="fd-link" href="#">Inventarisation</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    
                    <div class="fd-quick-view__group">                    
                        <div class="fd-quick-view__group-item">
                            <div class="fd-quick-view__group-item-label">
                                Start Date:
                            </div>
                            <div class="fd-quick-view__group-item-content">
                                01/01/2015
                            </div>
                        </div>
                        
                        <div class="fd-quick-view__group-item">
                            <div class="fd-quick-view__group-item-label">
                                End Date:
                            </div>
                            <div class="fd-quick-view__group-item-content">
                                31/12/2015
                            </div>
                        </div>
                        
                        <div class="fd-quick-view__group-item">
                            <div class="fd-quick-view__group-item-label">
                                Occurrence:
                            </div>
                            <div class="fd-quick-view__group-item-content">
                                Weekly
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">
                        Send reminder
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
`;

Dialog.storyName = 'Dialog';

Dialog.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `QuickView component as dialog. Because of the dialog structure quick view title should be
        set within the dialog header but not in the quick view header`
    }
};

export const NoHeader = () => `<div class="fd-popover">
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-quick-view__content">
                <div class="fd-quick-view__subheader">
                    <span class="fd-avatar fd-avatar--s" role="presentation">
                        <i role="presentation" class="fd-avatar__icon sap-icon--camera"></i>
                    </span>
                    
                    <div class="fd-quick-view__text">
                        <div class="fd-quick-view__title">
                            <h5 class="fd-title fd-title--h5">
                                <a class="fd-link" href="#">Inventarisation</a>
                            </h5>
                        </div>
                    </div>
                </div>
                
                <div class="fd-quick-view__group">                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Start Date:
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            01/01/2015
                        </div>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            End Date:
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            31/12/2015
                        </div>
                    </div>
                    
                    <div class="fd-quick-view__group-item">
                        <div class="fd-quick-view__group-item-label">
                            Occurrence:
                        </div>
                        <div class="fd-quick-view__group-item-content">
                            Weekly
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

NoHeader.storyName = 'Without the header';

NoHeader.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'QuickView without the header'
    }
};
