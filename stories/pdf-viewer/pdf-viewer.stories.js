import '../../dist/dialog.css';
import '../../dist/pdf-viewer.css';
import '../../dist/message-page.css';

export default {
    title: 'Components/PDF Viewer',
    parameters: {
        description: `
The PDF viewer component can be either displayed within a page or inside of a dialog. By default, the PDF viewer should be in a large size dialog, meaning it should contian the classname <code>.fd-dialog__content--l</code>. The download and close buttons are in the dialog footer.

Within a page, use the Bar component to construct the header. Unlike the dialog version, the in page version has a download button within the top title bar and no option to close the viewer.

`,
        tags: ['f3', 'a11y']
    }
};

export const dialog = () => `
<div class="fd-dialog-docs-static fd-pdf-viewer fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--l" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        PDF Viewer title
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <iframe
              class="fd-pdf-viewer__content"
              title='PDF viewer'
              src="https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/sample/PDFViewerEmbedded/sample.pdf#view=FitH"}
              frameBorder='0'></iframe>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        Download
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

dialog.storyName = 'Dialog';
dialog.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The PDF viewer dialog component displays a PDF within an iframe. The document viewer controls are left up to the browser defaults, but a download button is provided in the footer for convenience.'
    }
};

export const page = () => `
    <div class="fd-pdf-viewer">
        <div class="fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        PDF Viewer title
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="Download" class="fd-button fd-button--transparent">
                        <i class="sap-icon--download"></i>
                    </button>
                </div>
            </div>
        </div>
        <iframe
          class="fd-pdf-viewer__content--in-page"
          title='PDF viewer'
          src="https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/sample/PDFViewerEmbedded/sample.pdf#view=FitH"}
          frameBorder='0'></iframe>
    </div>
`;

page.storyName = 'In-Page';
page.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'Unlike the dialog version, the download button is on the title bar and there is no close button.'
    }
};

export const error = () => `
    <div class="fd-pdf-viewer fd-pdf-viewer--in-page">
        <div class="fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        PDF Viewer title
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="Download" class="fd-button fd-button--transparent">
                        <i class="sap-icon--download"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-pdf-viewer__content fd-pdf-viewer__content--error">
            <div class="fd-message-page">
                <div class="fd-message-page__container">
                    <div class="fd-message-page__icon-container">
                        <span class="sap-icon sap-icon--documents fd-message-page__icon"></span>
                    </div>
                    <div role="status" aria-live="polite" class="fd-message-page__content">
                        <div class="fd-message-page__title">
                            The PDF document could not be loaded.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

error.storyName = 'error';
error.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'When there is an error loading the PDF document, display a Message Page component to inform the user of the error.'
    }
};
