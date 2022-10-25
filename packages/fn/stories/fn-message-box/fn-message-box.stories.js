import 'fn/src/fn-message-box.scss';
import 'styles/src/icon.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-title.scss';
import 'fn/src/fn-link.scss';

export default {
  title: 'Message Box',
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
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

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
export const Primary = () => `${localStyles}
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
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--save"></span>
                <span class="fn-button__text">Save</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Discard</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Cancel</span>
            </button>
        </footer>
    </section>
</div>
`;
Primary.storyName = 'Message Box';
Primary.parameters = {
  docs: {
    description: {
      story: 'Message Box Example'
    }
  }
};
export const Confirmation = () => `${localStyles}
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
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--save"></span>
                <span class="fn-button__text">Save</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Discard</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Cancel</span>
            </button>
        </footer>
    </section>
</div>
`;
Confirmation.storyName = 'Confirmation Message Box';
Confirmation.parameters = {
  docs: {
    description: {
      story: 'Confirmation Message Box Example'
    }
  }
};
export const Negative = () => `${localStyles}
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
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;
Negative.storyName = 'Negative Message Box';
Negative.parameters = {
  docs: {
    description: {
      story: 'Negative Message Box Example'
    }
  }
};
export const Critical = () => `${localStyles}
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
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;
Critical.storyName = 'Critical Message Box';
Critical.parameters = {
  docs: {
    description: {
      story: 'Critical Message Box Example'
    }
  }
};
export const Positive = () => `${localStyles}
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
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;
Positive.storyName = 'Positive Message Box';
Positive.parameters = {
  docs: {
    description: {
      story: 'Positive Message Box Example'
    }
  }
};
export const Info = () => `${localStyles}
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
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Close</span>
            </button>
        </footer>
    </section>
</div>
`;
Info.storyName = 'Info Message Box';
Info.parameters = {
  docs: {
    description: {
      story: 'Info Message Box Example'
    }
  }
};
