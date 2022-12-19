import '../../../src/quick-view.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/popover.scss';
import '../../../src/dialog.scss';
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/link.scss';
import '../../../src/form-layout-grid.scss';
import '../../../src/form-group.scss';
import '../../../src/form-item.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
import '../../../src/text.scss';
export default {
    title: 'Components/Quick View',
    parameters: {
        description: `The quick view is similar to a popover but has a predefined structure, a fixed set of UI
        elements, and automatic UI rendering. Should be used in combination with the popover or dialog components`,
        docs: { iframeHeight: 500 },
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Popover = () => `<div class="fd-popover">
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-bar fd-bar--header">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">Company</div>
                </div>
            </div>

            <div class="fd-quick-view__content">
                <div class="fd-bar fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <span class="fd-avatar fd-avatar--s" role="presentation">
                            <i role="presentation" class="fd-avatar__icon sap-icon--building"></i>
                        </span>

                        <div class="fd-quick-view__subheader-text">
                            <h5 class="fd-title fd-title--h5">Company B</h5>

                            <div class="fd-quick-view__subtitle">
                                Michael Adams
                            </div>
                        </div>
                    </div>
                </div>


                <div class="fd-form-group" role="group">
                    <div class="fd-form-group__header" aria-labelledby="contactDetails">
                        <h1 class="fd-form-group__header-text" id="contactDetails">Contact Details</h1>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">Phone</label>
                        <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">Address</label>
                        <span class="fd-text">
                            781 Main Street <br>
                            Anytown, SD 57401, USA
                        </span>
                    </div>
                </div>

                <div class="fd-form-group" role="group">
                    <div class="fd-form-group__header" aria-labelledby="mainContact">
                        <h1 class="fd-form-group__header-text" id="mainContact">Main Contact</h1>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">Name</label>
                        <span class="fd-text">Michael Adams</span>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">Mobile</label>
                        <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">Mobile</label>
                        <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Popover.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'QuickView component as popover'
        }
    }
};

export const Dialog = () => `<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__middle">
                <div class="fd-bar__element" id="dialog-title">Company B</div>
            </div>
        </header>

        <div class="fd-dialog__body">
            <div class="fd-quick-view">
                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s" role="presentation">
                                <i role="presentation" class="fd-avatar__icon sap-icon--camera"></i>
                            </span>

                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Company B</h5>
    
                                <div class="fd-quick-view__subtitle">
                                    Michael Adams
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-item">
                            <label class="fd-form-label">Start Date:</label>
                            <span class="fd-text">01/01/2015</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">End Date:</label>
                            <span class="fd-text">31/12/2015</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Occurrence:</label>
                            <span class="fd-text">Weekly</span>
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

Dialog.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `QuickView component as dialog. Because of the dialog structure quick view title should be
        set within the dialog header but not in the quick view header`
        }
    }
};

export const NoHeader = () => `<div class="fd-popover">
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-quick-view__content">
                <div class="fd-bar fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <span class="fd-avatar fd-avatar--s" role="presentation">
                            <i role="presentation" class="fd-avatar__icon sap-icon--camera"></i>
                        </span>

                        <div class="fd-quick-view__subheader-text">
                            <h5 class="fd-title fd-title--h5">Company B</h5>

                            <div class="fd-quick-view__subtitle">
                                Michael Adams
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-form-group" role="group">
                    <div class="fd-form-item">
                        <label class="fd-form-label">Start Date:</label>
                        <span class="fd-text">01/01/2015</span>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">End Date:</label>
                        <span class="fd-text">31/12/2015</span>
                    </div>
                    <div class="fd-form-item">
                        <label class="fd-form-label">Occurrence:</label>
                        <span class="fd-text">Weekly</span>
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
        description: {
            story: 'QuickView without the header'
        }
    }
};
