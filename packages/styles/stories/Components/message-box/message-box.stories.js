import '../../../src/message-box.scss';
import '../../../src/title.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/link.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Message Box',
    parameters: {
        description: `
The message box displays a dialog with a simple message to the user. Contrary to the **Popover**, message box can relay messages unrelated to the UI, such as technical errors. This component inherits the look and behavior of the **Dialog** (excluding dragging/resizing).

Note: Include two action buttons in the message box when the user's decision is required before continuing. The primary action button should always explicitly display the action they're performing (in text), while the secondary buttons provides them with an option to cancel.

**The messages can be displayed with semantic colors and icons to indicate:**

- Error
- Warning
- Success
- Information
- Confirmation


##Usage

**Use the message box if:**

- You want to display non-field-related messages.
- You want to interrupt the user while he or she performs an action.
- You want to display error, warning, success, confirmation, or information messages.
- You need to interrupt the user for some other reason.
- You need the user to acknowledge the message.
- You need the user to make a decision.


**Do not use the message box if:**

- You want to display a short success message. Instead, use **Message Toast**.
- You can show the message directly in a form field.


##Structure
**Message box follows the structure of a dialog, consisting of following elements:**

- \`.fd-message-box\`: styles the backdrop and displays the message box container with \`position: fixed\`. The message box becomes visible by adding the \`.fd-message-box--active\` modifier class to the container.
    - \`.fd-message-box__content\`: Content container
        - \`.fd-message-box__header\`: Header
            - \`.fd-message-box__title\`: Title
        - \`.fd-message-box__body\`: Content body
        - \`.fd-message-box__footer\`: Footer
            - \`.fd-message-box__decisive-button\`: Action buttons in footer
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

const messageBoxHeight = 200;

export const Structure = () => `<div class="fd-message-box-docs-static fd-message-box fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5">Title</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact fd-message-box__decisive-button">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
`;

Structure.storyName = 'Default';

Structure.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        description: {
            story: `
The default message box displays a small dialog with a title, message text and action buttons. Use the default if the message does not fit with one of the semantic types.
    `
        }
    }
};

export const Types = () => `<div class="fd-message-box-docs-static fd-message-box fd-message-box--confirmation fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--sys-help-2"></i>
                    <h2 class="fd-title fd-title--h5">Confirmation</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        OK
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact fd-message-box__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--error"></i>
                    <h2 class="fd-title fd-title--h5">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--sys-enter-2"></i>
                    <h2 class="fd-title fd-title--h5">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et mattis erat vel aliquet in sem urna et sagittis diam in vehicula.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--alert"></i>
                    <h2 class="fd-title fd-title--h5">Warning</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--information"></i>
                    <h2 class="fd-title fd-title--h5">Information</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Vivamus sagittis diam in vehicula lobortis.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
`;
Types.storyName = 'Semantic types';

Types.parameters = {
    docs: {
        iframeHeight: messageBoxHeight * 6.5,
        description: {
            story: `
The message box can be displayed with various semantic colors and icons, indicating the type of message being relayed.

Semantic type | Modifier class | Description
:------------------ | :------------------- | :---------------
Confirmation | \`fd-message-box--confirmation\` | Confirmation messages prompt users to confirm an action that they have triggered. The title of the message box already includes the action that has to be confirmed, such as an intended deletion or an approval.
Error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | \`fd-message-box--error\` | Error messages can be triggered after the user has entered incorrect data or a system error has occurred. They should interrupt the user by displaying a dialog. A final action such as _Submit_ cannot be carried out until the user has rectified the error.
Success | \`fd-message-box--success\` | Success messages give feedback to the user that an action has been executed. The user needs to acknowledge the message.
Warning | \`fd-message-box--warning\` | Warning messages highlight potential issues, but the user can still continue. This includes unintended data loss scenarios.
Information | \`fd-message-box--information\` | Information messages provide information the user needs to acknowledge, but which does not involve a decision. The message provides information that is useful and relevant, but never critical.

        `
        }
    }
};

export const Responsive = () =>
    `
<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <section class="fd-message-box__content fd-message-box__content--s">
        <header class="fd-bar fd-bar--cozy fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5">Information</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Informative message box for a small screen in cozy mode (mobile) and a "Show more" link in the body.
            <div class="fd-message-box__more">
                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Show more</span></a>
            </div>
        </div>
        <footer class="fd-bar fd-bar--cozy fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active">
    <section class="fd-message-box__content fd-message-box__content--m">
        <header class="fd-bar fd-bar--cozy fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Error message box for a medium-sized screen in cozy mode (mobile).
        </div>
        <footer class="fd-bar fd-bar--cozy fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>


<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active">
    <section class="fd-message-box__content fd-message-box__content--l">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Success message box for a large screen in compact mode (desktop).
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active">
    <section class="fd-message-box__content fd-message-box__content--xl">
        <header class="fd-bar fd-bar--header fd-message-box__header">
             <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5">Warning</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
           Warning message box for an extra large screen in compact mode (desktop).
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
`;

Responsive.parameters = {
    docs: {
        iframeHeight: messageBoxHeight * 4,
        description: {
            story: `
The message box has 1rem padding all around the body, and the header and footer both inherit their padding from the **Bar** component. Responsive horizontal padding can be applied to the header, body and footer of the message box; however, the amount depends on the screen width.

**To display responsive padding, add the following modifier classes to the content container:**

Modifier class | rem | Screen width
------------------ | ---- | ---------------------
\`fd-message-box__content--s\` | 1rem | <= 599px
\`fd-message-box__content--m\` | 2rem | 600px - 1023px
\`fd-message-box__content--l\` | 2rem | 1024px - 1439px
\`fd-message-box__content--xl\` | 3rem | >= 1440px

####Mobile

Enable cozy mode when message box is being displayed on mobile. To display message box in cozy mode, add the \`fd-bar--cozy\` modifier class to the header and footer (this will also apply to the buttons). It's also important to note that the content container should always take the full height and width of mobile screens. To achieve this, add the \`fd-message-box__content--mobile\` modifier class to the content container.
         `
        }
    }
};
