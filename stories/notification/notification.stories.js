import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/notification.css';

export default {
    title: 'Components/Notifications',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development', 'under-review'],
        description: `
Notifications are used to relay information to the user about a situation or task that requires their input. They can notice and access the notifications by the bell icon in the shell bar on the top-right of the screen. In the notification popover, they take immediate action, navigate to the source of a specific notification or in the case of a notification group, they can sort the list items in various ways.

__Usage__
Use notifications if:
    
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
                <h2>Your leave request has been accepted</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">SAP Analytics Cloud &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
primary.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Primary notifications display a container with an avatar, content area with text, as well as an open and close button. To display primary notifications, use the fd-notification class.'
    }
};

export const noAvatar = () => `
<div class="fd-notification">
    <div class="fd-notification__body">
        <div class="fd-notification__content fd-notification__content--no-avatar">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                <h2>Your leave request has been accepted</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">SAP Analytics Cloud &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
noAvatar.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Notifications can be displayed without an avatar by adding the fd-notification__content--no-avatar modifier class together with the fd-notification__content class.'
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
                <h2>You have new items</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="fd-notification__footer">SAP Analytics Cloud &middot; Just now
                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__footer--button">Show less</button>
            </p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
information.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Notifications can also include alerts, and in this case it is informative. You can display information alerts by adding the fd-message strip fd-message-strip--warning fd-message-strip--dismissible class together with role="alert". To add text to the message, add the fd-message-strip__text class before the text in paragraph tags.'
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
              <h2>You have new items</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p class="fd-notification__footer">Tom &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
warning.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Notifications can also include alerts, and in this case it is informative. You can display information alerts by adding the fd-message strip fd-message-strip--warning fd-message-strip--dismissible class together with role="alert". To add text to the message, add the fd-message-strip__text class before the text in paragraph tags.'
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
            <h2>You have new items</h2>
          </div>
          <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p class="fd-notification__footer">SAP Analytics Cloud &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`;
error.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'You can display a group of notifications in a list format, and the user can sort them from the header. To display a notification group, add the fd-notification fd-notification__group class.'
    }
};

export const notificationGroup = () => `
<div class="fd-notification fd-notification__group">
    <ul class="fd-tabs fd-tabs--l fd-notification__group--tabs" role="tablist">
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
                <h2>Today (5)</h2>
            </div>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact fd-notification__actions--button">Accept All</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="presentation" aria-label="John Doe">JD</span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                <h2>You've got new item</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">SAP Team &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
              <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA4');">
                         <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA4">
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

            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
            <div class="fd-notification__indicator fd-notification__indicator--success"></div>
            <h2>Your leave request has been accepted</h2>
            </div>
            <p class="fd-notification__paragraph">Lagna aliqua.</p>
            <p class="fd-notification__footer">SAP Analytics Cloud &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>

            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
     <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
            <div class="fd-notification__indicator fd-notification__indicator--error"></div>
            <h2>Your leave request has been rejected. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </div>
            <p class="fd-notification__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="fd-notification__footer">SAP Analytics Cloud &middot; 7 minutes ago</p>
        </div>
        <div class="fd-notification__actions">
            <button class="fd-button fd-button--compact">Open</button>
            <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
    <div class="fd-notification__limit">
        <h1>There are 30 more notifications</h1>
        <p class="fd-notification__limit--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
`;
notificationGroup.parameters = {
    docs: {
        iframeHeight: 200
    }
};
