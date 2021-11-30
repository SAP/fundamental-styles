export default {
    title: 'Experimental/Message Box',
    parameters: {
        description: `**Modifier classes for Message Box:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;        | Modifier class                 |
| ------------------------------------ | ------------------------------ |
| default&nbsp;&nbsp;&nbsp;&nbsp;      | \`none\`                       |
| information&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-message-box--information\`|
| critical&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-message-box--warning\`    |
| error&nbsp;&nbsp;&nbsp;&nbsp;        | \`fn-message-box--error\`      |
| positive&nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-message-box--success\`    |

        `,
        components: ['fn-message-box', 'icon', 'fn-button', 'fn-title', 'fn-link']
    }
};

const localStyles = `
<style>
    .fn-message-box {
        z-index: 101;
    }

    .fn-message-box-docs-static.fn-message-box {
        position: relative;
        background-color: transparent;
        z-index: 1;
        justify-content: center;

        &::before {
        background-color: transparent;
        }
    }

    .fn-message-box-docs-static .fn-message-box__content {
        position: relative;
        transform: translate(0%, 0%);
        width: 250px;
        height: auto;

        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
</style>
`;

export const primary = () => `${localStyles}
<div class="fn-message-box-docs-static fn-message-box fn-message-box--active" style="height:300px">
    <section class="fn-message-box__content">
        <header class="fn-message-box__header">
            <h2 class="fn-title">The Lord of The Rings</h2>
        </header>
        <div class="fn-message-box__body">
            <p>You have made changes.<br />Do you want to save them before leaving?</p>
            <a href="#" class="fn-link">Get Help</a>
        </div>
        <footer class="fn-bar fn-bar--footer fn-message-box__footer">
            <button class="fn-button fn-button--emphasized fn-button--icon-left">
                <span class="sap-icon sap-icon--save"></span>
                <span class="fn-button__text">Save</span>
            </button>
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Discard</span>
            </button>
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Cancel</span>
            </button>
        </footer>
    </section>
</div>
`;

primary.storyName = 'Message Box';

primary.parameters = {
    docs: {
        storyDescription: 'Message Box Example'
    }
};

export const confirmation = () => `${localStyles}
<div class="fn-message-box-docs-static fn-message-box fn-message-box--confirmation fn-message-box--active" style="height:300px">
    <section class="fn-message-box__content">
        <header class="fn-message-box__header">
            <i class="sap-icon--question-mark"></i>
            <h2 class="fn-title">The Lord of The Rings</h2>
        </header>
        <div class="fn-message-box__body">
            <p>You have made changes.<br />Do you want to save them before leaving?</p>
            <a href="#" class="fn-link">Get Help</a>
        </div>
        <footer class="fn-bar fn-bar--footer fn-message-box__footer">
            <button class="fn-button fn-button--emphasized fn-button--icon-left">
                <span class="sap-icon sap-icon--save"></span>
                <span class="fn-button__text">Save</span>
            </button>
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Discard</span>
            </button>
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Cancel</span>
            </button>
        </footer>
    </section>
</div>
`;

confirmation.storyName = 'Confirmation Message Box';

confirmation.parameters = {
    docs: {
        storyDescription: 'Confirmation Message Box Example'
    }
};

export const negative = () => `${localStyles}
<div class="fn-message-box-docs-static fn-message-box fn-message-box--negative fn-message-box--active" style="height:300px">
    <section class="fn-message-box__content">
        <header class="fn-message-box__header">
            <i class="sap-icon--sys-cancel-2"></i>
            <h2 class="fn-title">The Lord of The Rings</h2>
        </header>
        <div class="fn-message-box__body">
            <p>You cannot save the planning. The vendor address is invalid.</p>
            <a href="#" class="fn-link">Get Help</a>
        </div>
        <footer class="fn-bar fn-bar--footer fn-message-box__footer">
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;

negative.storyName = 'Negative Message Box';

negative.parameters = {
    docs: {
        storyDescription: 'Negative Message Box Example'
    }
};

export const critical = () => `${localStyles}
<div class="fn-message-box-docs-static fn-message-box fn-message-box--critical fn-message-box--active" style="height:300px">
    <section class="fn-message-box__content">
        <header class="fn-message-box__header">
            <i class="sap-icon--message-warning"></i>
            <h2 class="fn-title">The Lord of The Rings</h2>
        </header>
        <div class="fn-message-box__body">
            <p>You cannot save the planning. The vendor address is invalid.</p>
            <a href="#" class="fn-link">Get Help</a>
        </div>
        <footer class="fn-bar fn-bar--footer fn-message-box__footer">
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;

critical.storyName = 'Critical Message Box';

critical.parameters = {
    docs: {
        storyDescription: 'Critical Message Box Example'
    }
};

export const positive = () => `${localStyles}
<div class="fn-message-box-docs-static fn-message-box fn-message-box--positive fn-message-box--active" style="height:300px">
    <section class="fn-message-box__content">
        <header class="fn-message-box__header">
            <i class="sap-icon--message-success"></i>
            <h2 class="fn-title">The Lord of The Rings</h2>
        </header>
        <div class="fn-message-box__body">
            <p>You were able to save the planning.</p>
            <a href="#" class="fn-link">Get Help</a>
        </div>
        <footer class="fn-bar fn-bar--footer fn-message-box__footer">
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;

positive.storyName = 'Positive Message Box';

positive.parameters = {
    docs: {
        storyDescription: 'Positive Message Box Example'
    }
};

export const info = () => `${localStyles}
<div class="fn-message-box-docs-static fn-message-box fn-message-box--info fn-message-box--active" style="height:300px">
    <section class="fn-message-box__content">
        <header class="fn-message-box__header">
            <i class="sap-icon--message-information"></i>
            <h2 class="fn-title">The Lord of The Rings</h2>
        </header>
        <div class="fn-message-box__body">
            <p>You were able to save the planning.</p>
            <a href="#" class="fn-link">Get Help</a>
        </div>
        <footer class="fn-bar fn-bar--footer fn-message-box__footer">
            <button class="fn-button fn-button--ghost">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;

info.storyName = 'Info Message Box';

info.parameters = {
    docs: {
        storyDescription: 'Info Message Box Example'
    }
};
