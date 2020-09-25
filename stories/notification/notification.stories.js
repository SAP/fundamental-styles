import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/notification.css';

export default {
    title: 'Components/Notifications',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development'],
        description: `
Notifications are used to relay information to the user about a situation or task that requires their input. They can notice and access the notifications by the bell icon in the shell bar on the top-right of the screen. In the notification popover, they take immediate action, navigate to the source of a specific notification or in the case of a notification group, they can sort the list items in various ways.

##Usage
**Use notifications if:**
    
* You want to make users aware of situations that require attention.
* You intend to reduce the amount of information and actions to a minimum, but provide enough information to highlight the level of importance.
            `
    }
};

export const primary = () => `
<div class="fd-notification">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">Your leave request has been accepted</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">Long author name - SAP Analytics Cloud incididunt ut labore et dolore magna aliqua </span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
primary.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Primary notifications display a container with an avatar, content area with text, as well as an open and close button. To display primary notifications, use the <code>fd-notification</code> class.
`
    }
};

export const noAvatar = () => `
<div class="fd-notification">
    <div class="fd-notification__body">
        <div class="fd-notification__content fd-notification__content--no-avatar">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">Your leave request has been accepted</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Analytics Cloud</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
noAvatar.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Notifications can be displayed without an avatar by adding the <code>fd-notification\\__content--no-avatar</code> modifier class together with the <code>fd-notification\\__content</code> class.
`
    }
};

export const information = () => `
<div class="fd-notification">
  <div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="alert">
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
      </p>
       <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-label="Close">
        <i class="sap-icon--decline"></i>
      </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <h2 class="fd-notification__title fd-notification__title--unread">You have new items</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="fd-notification__footer">
            <span class="fd-notification__footer-content">SAP Analytics Cloud</span>
            <span class="fd-notification__separator"></span>Just now
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
information.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Notifications can also include alerts, and in this case it is informative. You can display information alerts by adding the <code>fd-message-strip fd-message-strip--information fd-message-strip--dismissible</code> class together with <code>role="alert"</code>. To add text to the message, add the <code>fd-message-strip\\__text</code> class before the text in paragraph tags.
`
    }
};

export const warning = () => `
<div class="fd-notification">
    <div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert">
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
      </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-label="Close">
        <i class="sap-icon--decline"></i>
      </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
       <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
              <h2 class="fd-notification__title fd-notification__title--unread">You have new items</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">Tom Norton Beam</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
warning.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Notifications can display warning alerts by adding the <code>fd-message-strip fd-message-strip--warning fd-message-strip--dismissible</code> class together with <code>role="alert"</code>.
`
    }
};


export const error = () => `
<div class="fd-notification">
    <div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert">
        <p class="fd-message-strip__text">
          Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
        </p>
          <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-label="Close">
            <i class="sap-icon--decline"></i>
          </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
          <div class="fd-notification__header">
            <h2 class="fd-notification__title fd-notification__title--unread">You have new items</h2>
          </div>
          <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p class="fd-notification__footer">
            <span class="fd-notification__footer-content">SAP Analytics Cloud</span>
            <span class="fd-notification__separator"></span>
            <span class="fd-notification__footer-content">7 minutes ago</span>
          </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
error.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Notifications can display error alerts by adding the <code>fd-message-strip fd-message-strip--error fd-message-strip--dismissible</code> class together with <code>role="alert"</code>.
`
    }
};

export const notificationGroup = () => `
<div class="fd-notification fd-notification--group">
    <ul class="fd-tabs fd-tabs--l fd-notification--tabs" role="tablist">
        <li role="listitem" class="fd-tabs__item">
            <a class="fd-tabs__link" aria-selected="true" role="tab">
                <span class="fd-tabs__tag">
                    By Date
                </span>
            </a>
        </li>
        <li role="listitem" class="fd-tabs__item">
            <a class="fd-tabs__link" role="tab">
                <span class="fd-tabs__tag">
                    By Type
                </span>
            </a>
        </li>
        <li role="listitem" class="fd-tabs__item">
            <a class="fd-tabs__link" role="tab">
                <span class="fd-tabs__tag">
                    By Priority
                </span>
            </a>
        </li>
    </ul>
    <div class="fd-notification__group-header">
        <button role="button" aria-label="arrow-down-button" class="fd-button fd-button--compact fd-button--transparent">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">Today (5)</h2>
            </div>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Accept All</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="presentation" aria-label="John Doe">JD</span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">You've got new item</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Team dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit </span>
            </p>
        </div>
        <div class="fd-notification__actions">
              <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA4');">
                         <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow fd-notification__actions--popover" aria-hidden="true" id="popoverA5">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Accept</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Decline</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Forward</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
            <div class="fd-notification__indicator fd-notification__indicator--success"></div>
            <h2 class="fd-notification__title">The title you've already read.</h2>
            </div>
            <p class="fd-notification__paragraph">Lagna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Analytics Cloud very long author name to test truncate</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago long long time ago ages ago years ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>

            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
     <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
            <div class="fd-notification__indicator fd-notification__indicator--error"></div>
            <h2 class="fd-notification__title fd-notification__title--unread">Your leave request has been rejected. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Analytics Cloud</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago m dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span> 
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__limit">
        <h1 class="fd-notification__limit--title">There are 30 more notifications</h1>
        <p class="fd-notification__limit--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
`;
notificationGroup.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `You can display a group of notifications in a list format, and the user can sort them from the header. To display a notification group, add the <code>fd-notification fd-notification\\__group</code> class.
    `
    }
};



export const mobile = () => `
<div style="heigt: 200px; max-width: 20rem">

<div class="fd-notification fd-notification--mobile"">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">Your leave request has been accepted</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Analytics Cloud</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
               <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA4');">
                         <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow fd-notification__actions--popover" aria-hidden="true" id="popoverA4">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Open</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Decline</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <button class="fd-button fd-button--transparent fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
</div>
<div style="heigt: 200px; max-width: 20rem">
<div class="fd-notification fd-notification--mobile fd-notification--group">
    <ul class="fd-tabs fd-tabs--l fd-notification--tabs" role="tablist">
        <li role="listitem" class="fd-tabs__item">
            <a class="fd-tabs__link" aria-selected="true" role="tab">
                <span class="fd-tabs__tag">
                    By Date
                </span>
            </a>
        </li>
        <li role="listitem" class="fd-tabs__item">
            <a class="fd-tabs__link" role="tab">
                <span class="fd-tabs__tag">
                    By Type
                </span>
            </a>
        </li>
        <li role="listitem" class="fd-tabs__item">
            <a class="fd-tabs__link" role="tab">
                <span class="fd-tabs__tag">
                    By Priority
                </span>
            </a>
        </li>
    </ul>
    <div class="fd-notification__group-header">
        <button role="button" aria-label="arrow-down-button" class="fd-button fd-button--transparent">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">Today (5)</h2>
            </div>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--transparent fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="presentation" aria-label="John Doe">JD</span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                <h2 class="fd-notification__title fd-notification__title--unread">You've got new item</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Teamm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
              <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA3');">
                         <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow fd-notification__actions--popover" aria-hidden="true" id="popoverA3">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Open</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Decline</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <button class="fd-button fd-button--transparent fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
            <div class="fd-notification__indicator fd-notification__indicator--success"></div>
            <h2 class="fd-notification__title">The title you've already read.</h2>
            </div>
            <p class="fd-notification__paragraph">Lagna aliqua.</p>
            <p class="fd-notification__footer">
                <span class="fd-notification__footer-content">SAP Analytics Cloud very long author name to test truncate</span>
                <span class="fd-notification__separator"></span>
                <span class="fd-notification__footer-content">7 minutes ago long long time ago ages ago years ago</span>
            </p>
        </div>
        <div class="fd-notification__actions">
               <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA2');">
                         <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow fd-notification__actions--popover" aria-hidden="true" id="popoverA2">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link">
                                    <span class="fd-menu__title">Open</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <button class="fd-button fd-button--transparent fd-notification__actions--dismiss" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    </div>

</div>
`;
error.mobile = {
    docs: {
        iframeHeight: 200
    }
};
