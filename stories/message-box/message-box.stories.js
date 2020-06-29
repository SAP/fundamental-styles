import '../../dist/message-box.css';

export default {
    title: 'Components/Message Box',
    parameters: {
        description: 'Message Box is used to display simple messages (text) to the user. These messages could be Standard (Default), Confirmation, Error, Success, Warning and Information (Neutral). The Message Box component inherits the look and the basic behaviour (excludes dragging and resizing) of the Dialog component.',
        tags: ['f3', 'a11y', 'theme']
    }
};

const messageBoxHeight = 200;

export const structure = () => `
<div class="fd-message-box-docs-static fd-message-box fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Title</h2>
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
    </div>
</div>
`;

structure.storyName = 'Structure';

structure.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: `
The Message Box follows the Dialog structure and consists of following elements:

- \`.fd-message-box\`: styles the Backdrop and displays the Message Box Container with \`position: fixed\`. The Message Box becomes visible by applying \`.fd-message--active\` modifier class.
    - \`.fd-message__content\`: Message Box container
        - \`.fd-message__header\`: Message Box Header
            - \`.fd-message__title\`: Message Box Title
        - \`.fd-message__body\`: Message Box Content
        - \`.fd-message__footer\`: Message Box Footer
            - \`.fd-message__decisive-button\`: Footer begin/end button
    `
    }
};

export const types = () => `
<div class="fd-message-box-docs-static fd-message-box fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Standard</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <div class="fd-message-box__more">
                <a href="#" class="fd-link" tabindex="0">Show more</a>
            </div>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--confirmation fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Confirmation</h2>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Error</h2>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Success</h2>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Warning</h2>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Information</h2>
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
    </div>
</div>
`;
types.storyName = 'Types';

types.parameters = {
    docs: {
        iframeHeight: messageBoxHeight * 6.5,
        storyDescription: `Available options are \`standard | confirmation | error | success | warning | information\`.
        Add modifier classes \`fd-message-box--confirmation\`, \`fd-message-box--error\`, \`fd-message-box--success\`,
        \`fd-message-box--warning\`, and \`fd-message-box--information\` to the container class.
        For standard Message Box you don't need a modifier class.`
    }
};


export const noIcon = () =>
    `
<div class="fd-message-box-docs-static fd-message-box fd-message-box--no-icon fd-message-box--success fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Success Message Box with no status icon in the title and "Show more" link in the body
            <div class="fd-message-box__more">
                <a href="#" class="fd-link" tabindex="0">Show more</a>
            </div>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--no-icon fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Error Message Box with no status icon in the title
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
    </div>
</div>
`;

noIcon.storyName = 'No icon';
noIcon.parameters = {
    docs: {
        iframeHeight: messageBoxHeight * 2,
        storyDescription: `To remove the semantic icon from the title of the Message Box apply the
        \`fd-message-box--no-icon\` modifier class to the container.`
    }
};


export const responsive = () =>
    `
<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--s">
        <header class="fd-bar fd-bar--cozy fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Information</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Information Message Box on small screen in Cozy mode 
            <div class="fd-message-box__more">
                <a href="#" class="fd-link" tabindex="0">Show more</a>
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--m">
        <header class="fd-bar fd-bar--cozy fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Error Message Box on medium screen in Cozy mode  
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
    </div>
</div>


<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--l">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Success Message Box on large screen in compact (desktop) mode  
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
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--xl">
        <header class="fd-bar fd-bar--header fd-message-box__header">
             <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Warning</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
           Warning Message Box on extra large screen in compact (desktop) mode 
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
    </div>
</div>
`;

responsive.storyName = 'Responsive';
responsive.parameters = {
    docs: {
        iframeHeight: messageBoxHeight * 4,
        storyDescription: `
By default the Message Box body has 1rem padding all around the content. The values for the paddings in the header and the footer are inherited from the Bar component. 

Horizontal responsive paddings can be applied to the header, the body and the footer of the Message Box. Their values depend on the screen size.
To enable responsive behavior for the paddings use the following modifier classes on the content container:

- \`.fd-message-box__content--s\`: 1rem - max-width: 599px
- \`.fd-message-box__content--m\`: 2rem - min-width: 600px and max-width: 1023px
- \`.fd-message-box__content--l\`: 2rem - min-width: 1024px and max-width: 1439px
- \`.fd-message-box__content--xl\`: 3rem - min-width: 1440px

On mobile devices the component should be in \`cozy\` mode. Add the \`fd-bar--cozy\` modifier class to the header and the footer. The buttons in the footer should also be in Cozy mode. The deafult mode for Buttons is \`cozy\` so no modifier classes are required.

On phone devices the content container takes 100vh and 100vw. It's achieved by applying the \`fd-message-box__content--mobile\` modifier class on the Message Box content container.
        `
    }
};

export const rtl = () => `
<div class="fd-message-box-docs-static fd-message-box fd-message-box--active" dir="rtl">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Title</h2>
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
    </div>
</div>
`;

rtl.storyName = 'Rtl';

rtl.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: 'Message Box in RTL mode'
    }
};
