import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/notification.css';

export default {
    title: 'Components/Notification',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development', 'under-review']
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>SAP Analytics Cloud &middot; 7 minutes ago</p>
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
        iframeHeight: 200
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>SAP Analytics Cloud &middot; 7 minutes ago</p>
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
        iframeHeight: 200
    }
};

export const information = () => `
<div class="fd-notification">
  <div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="alert">
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
      </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-label="Close">
        </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
                <h2>You have new items</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>SAP Analytics Cloud &middot; Just now
                <button class="fd-button fd-button--transparent fd-button--compact">Show less</button>
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
        iframeHeight: 200
    }
};

export const warning = () => `
<div class="fd-notification">
    <div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert">
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
      </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-label="Close">
      </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
       <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
            <div class="fd-notification__header">
              <h2>You have new items</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Tom &middot; 7 minutes ago</p>
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
        iframeHeight: 200
    }
};


export const error = () => `
<div class="fd-notification">
    <div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert">
        <p class="fd-message-strip__text">
          Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
        </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-label="Close">
      </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('http://lorempixel.com/400/400/nature/4/')" role="presentation" aria-label="John Doe"></span>
        <div class="fd-notification__content">
          <div class="fd-notification__header">
            <h2>You have new items</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>SAP Analytics Cloud &middot; 7 minutes ago</p>
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
        iframeHeight: 200
    }
};

export const notificationGroup = () => `
<div class="fd-notification fd-notification__group">
    <ul class="fd-tabs fd-tabs--l" role="tablist">
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
            <button class="fd-button fd-button--compact">Accept All</button>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>SAP Team &middot; 7 minutes ago</p>
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
            <p>Lagna aliqua.</p>
            <p>SAP Analytics Cloud &middot; 7 minutes ago</p>
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
            <h2>Your leave request has been rejected</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>SAP Analytics Cloud &middot; 7 minutes ago</p>
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
