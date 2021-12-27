export default {
    title: 'Experimental/Dialog',
    parameters: {
        description: `
Dialog is un-opinionated component, which offers great options for content.
        `,
        components: ['fn-dialog', 'icon', 'fn-button', 'fn-title']
    }
};

const localStyles = `
<style>

.fn-dialog-doc-static.fn-dialog {
    position: relative;
    z-index: 1;
    justify-content: center;
}

.fn-dialog-doc-static .fn-dialog__content {
    position: relative;
    transform: translate(0%, 0%);
    width: 30%;
    height: auto;
}
    
</style>
`;

export const primary = () => `${localStyles}
<div style="height:300px">
    <section class="fn-dialog-doc-static fn-dialog fn-dialog--active">
        <div class="fn-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-11">
            <div class="fn-dialog__body">
                <h2 class="fn-title" style="padding:1.4375rem 1.5rem 0 1.4375rem" id="dialog-title-11">The Lord of The Rings</h2>
                <p style="padding:0 1.5rem">“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.”</p>
                <p style="padding:0 1.5rem; text-align:right">― J.R.R. Tolkien, The Lord of the Rings</p>
            </div>
            <footer class="fn-dialog__footer">
                <div style="display:flex;justify-content:flex-end;gap:0.375rem;padding: 0.375rem 0.75rem">
                    <button class="fn-button fn-button--emphasized fn-button--icon-left">
                        <span class="sap-icon sap-icon--save"></span>
                        <span class="fn-button__text">Save</span>
                    </button>
                    <button class="fn-button fn-button--ghost">
                        <span class="fn-button__text">Cancel</span>
                    </button>
                </div>
            </footer>
        </div>
    </section>
</div>
`;

primary.storyName = 'Dialog';

primary.parameters = {
    docs: {
        storyDescription: 'Dialog example with title, text and buttons in the footer'
    }
};
