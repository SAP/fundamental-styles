/* empty css               *//* empty css             *//* empty css                     *//* empty css             *//* empty css               *//* empty css                *//* empty css             *//* empty css                      *//* empty css               *//* empty css            *//* empty css              */const H=`
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1" style="max-width: 40rem;">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element fd-bar__element--full-width">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        Dialog with Notifications
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding fd-dialog__body--no-horizontal-padding">
            <div class="fd-notification fd-notification--mobile fd-notification--in-dialog">
                <div class="fd-notification__body">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                        <button class="fd-button is-compact">Open</button>
                        <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-notification fd-notification--mobile fd-notification--in-dialog">
                <div class="fd-notification__body">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                        <button class="fd-button is-compact">Open</button>
                        <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button is-compact">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
`,J=`<div style="heigt: 200px; max-width: 20rem">

<div class="fd-notification fd-notification--mobile">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA4">
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
            <button class="fd-button fd-button--transparent" aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
</div>
<div style="heigt: 200px; max-width: 20rem">
    <div class="fd-notification fd-notification--mobile fd-notification--group">
        <ul class="fd-tabs fd-tabs--l" role="tablist">
            <li role="tab" aria-selected="true" class="fd-tabs__item">
                <a
                    class="fd-tabs__link"
                    aria-controls="notifP300"
                    href="#notifP300">
                    <span class="fd-tabs__tag">By Date</span>
                </a>
            </li>
            <li role="tab" class="fd-tabs__item">
                <a
                    class="fd-tabs__link"
                    aria-controls="notifP301"
                    href="#notifP301">
                    <span class="fd-tabs__tag">By Type</span>
                </a>
            </li>
            <li role="tab" class="fd-tabs__item">
                <a
                    class="fd-tabs__link"
                    aria-controls="notifP302"
                    href="#notifP302">
                    <span class="fd-tabs__tag">By Priority</span>
                </a>
            </li>
        </ul>
        <div class="fd-tabs__panel" aria-expanded="true" id="notifP300" role="tabpanel">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe">JD</span>
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
                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA3">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA2">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-tabs__panel" aria-expanded="false" id="notifP301" role="tabpanel">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe">JD</span>
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
                            <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA42" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA42');">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA42">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                            <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA245" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA245');">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA245">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-tabs__panel" aria-expanded="false" id="notifP302" role="tabpanel">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe">JD</span>
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
                            <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA5" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA5');">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA5">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
            <div class="fd-notification__body">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                            <button class="fd-button fd-button--transparent" aria-label="Image label" aria-controls="popoverA43212" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA43212');">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA43212">
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
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`,E=`<div class="fd-notification fd-notification--group">
    <ul class="fd-tabs fd-tabs--l" role="tablist">
        <li role="tab" class="fd-tabs__item" aria-selected="true">
            <a
                class="fd-tabs__link"
                aria-controls="notifV550"
                href="#notifV550">
                <span class="fd-tabs__tag">
                    By Date
                </span>
            </a>
        </li>
        <li role="tab" class="fd-tabs__item">
            <a
                aria-controls="notifV551"
                class="fd-tabs__link"
                href="#notifV551">
                <span class="fd-tabs__tag">
                    By Type
                </span>
            </a>
        </li>
        <li role="tab" class="fd-tabs__item">
            <a
                aria-controls="notifV552"
                class="fd-tabs__link"
                href="#notifV552">
                <span class="fd-tabs__tag">
                    By Priority
                </span>
            </a>
        </li>
    </ul>
    <div class="fd-tabs__panel" aria-expanded="true" id="notifV550" role="tabpanel">
        <div class="fd-notification__group-header">
            <button role="button" aria-label="arrow-down-button" class="fd-button is-compact fd-button--transparent">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <div class="fd-notification__content">
                <div class="fd-notification__header">
                    <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                    <h2 class="fd-notification__title fd-notification__title--unread">Today (5)</h2>
                </div>
            </div>
            <div class="fd-notification__actions">
                <button class="fd-button is-compact">Accept All</button>
                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
        <div class="fd-notification__body">
            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe">JD</span>
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
                        <button class="fd-button fd-button--transparent is-compact" aria-label="Image label" aria-controls="popoverA5" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA5');">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="popoverA5">
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

                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
        <div class="fd-notification__body">
            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                <button class="fd-button is-compact">Open</button>

                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
        <div class="fd-notification__body">
            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                <button class="fd-button is-compact">Open</button>
                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
        <div class="fd-notification__limit">
            <h1 class="fd-notification__limit--title">There are 30 more notifications</h1>
            <p class="fd-notification__limit--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="notifV551" role="tabpanel">
        <div class="fd-notification__group-header">
            <button role="button" aria-label="arrow-down-button" class="fd-button is-compact fd-button--transparent">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <div class="fd-notification__content">
                <div class="fd-notification__header">
                    <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                    <h2 class="fd-notification__title fd-notification__title--unread">Today (5)</h2>
                </div>
            </div>
            <div class="fd-notification__actions">
                <button class="fd-button is-compact">Accept All</button>
                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
        <div class="fd-notification__body">
            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                <button class="fd-button is-compact">Open</button>

                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="notifV552" role="tabpanel">
        <div class="fd-notification__group-header">
            <button role="button" aria-label="arrow-down-button" class="fd-button is-compact fd-button--transparent">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <div class="fd-notification__content">
                <div class="fd-notification__header">
                    <div class="fd-notification__indicator fd-notification__indicator--warning"></div>
                    <h2 class="fd-notification__title fd-notification__title--unread">Today (5)</h2>
                </div>
            </div>
            <div class="fd-notification__actions">
                <button class="fd-button is-compact">Accept All</button>
                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
        <div class="fd-notification__body">
            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
                <button class="fd-button is-compact">Open</button>

                <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </div>
    </div>
</div>
`,O=`<div class="fd-notification">
    <div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-3" aria-labelledby="message-strip-3">
        <div class="fd-message-strip__icon-container" aria-hidden="true">
            <span class="sap-icon sap-icon--message-information" focusable="false" role="presentation" aria-hidden="true"></span>
        </div>
        <p class="fd-message-strip__text">
          Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
        </p>
          <button class="fd-button fd-button--transparent is-compact fd-message-strip__close" aria-controls="message-strip-3" aria-label="Close" title="Close">
            <i class="sap-icon--decline"></i>
          </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
            <button class="fd-button is-compact">Open</button>
            <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`,Y=`<div class="fd-notification">
    <div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-2" aria-labelledby="message-strip-2">
    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--message-warning" focusable="false" role="presentation" aria-hidden="true"></span>
    </div>
    <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
      </p>
      <button class="fd-button fd-button--transparent is-compact fd-message-strip__close" aria-controls="message-strip-2" aria-label="Close" title="Close">
        <i class="sap-icon--decline"></i>
      </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
       <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
            <button class="fd-button is-compact">Open</button>
            <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`,I=`<div class="fd-notification">
  <div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--message-information" focusable="false" role="presentation" aria-hidden="true"></span>
    </div>
    <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.
      </p>
       <button class="fd-button fd-button--transparent is-compact fd-message-strip__close" aria-controls="message-strip-1" aria-label="Close" title="Close">
        <i class="sap-icon--decline"></i>
      </button>
    </div>
    <div class="fd-notification__body fd-notification__body--message">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
            <button class="fd-button is-compact">Open</button>
            <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`,N=`<div class="fd-notification">
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
            <button class="fd-button is-compact">Open</button>
            <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`,V=`<div class="fd-notification">
    <div class="fd-notification__body">
        <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
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
            <button class="fd-button is-compact">Open</button>
            <button class="fd-button fd-button--transparent is-compact " aria-label="Close">
                <i class="sap-icon--decline"></i>
            </button>
        </div>
    </div>
</div>
`,X={title:"Components/Notifications",parameters:{tags:["f3","a11y","theme","development"],description:`
Notifications are used to relay information to the user about a situation or task that requires their input. They can notice and access the notifications by the bell icon in the shell bar on the top-right of the screen. In the notification popover, they take immediate action, navigate to the source of a specific notification or in the case of a notification group, they can sort the list items in various ways.

##Usage
**Use notifications if:**

* You want to make users aware of situations that require attention.
* You intend to reduce the amount of information and actions to a minimum, but provide enough information to highlight the level of importance.
            `,components:["button","icon","notification","tabs","avatar","popover","menu","message-strip","dialog","bar","title"]}},a=()=>V;a.parameters={docs:{story:{iframeHeight:200},description:{story:"\nPrimary notifications display a container with an avatar, content area with text, as well as an open and close button. To display primary notifications, use the `fd-notification` class.\n"}}};const i=()=>N;i.parameters={docs:{story:{iframeHeight:200},description:{story:"\nNotifications can be displayed without an avatar by adding the `fd-notification\\__content--no-avatar` modifier class together with the `fd-notification\\__content` class.\n"}}};const t=()=>I;t.parameters={docs:{story:{iframeHeight:200},description:{story:"\nNotifications can also include alerts, and in this case it is informative. You can display information alerts by adding the `fd-message-strip fd-message-strip--information fd-message-strip--dismissible`. To add text to the message, add the `fd-message-strip\\__text` class before the text in paragraph tags.\n"}}};const o=()=>Y;o.parameters={docs:{story:{iframeHeight:200},description:{story:"\nNotifications can display warning alerts by adding the `fd-message-strip fd-message-strip--warning fd-message-strip--dismissible` class.\n"}}};const n=()=>O;n.parameters={docs:{story:{iframeHeight:200},description:{story:"\nNotifications can display error alerts by adding the `fd-message-strip fd-message-strip--error fd-message-strip--dismissible` class.\n"}}};const s=()=>E;s.parameters={docs:{story:{iframeHeight:200},description:{story:"You can display a group of notifications in a list format, and the user can sort them from the header. To display a notification group, add the `fd-notification fd-notification\\__group` class.\n    "}}};const d=()=>J;n.mobile={docs:{iframeHeight:200}};const e=()=>H;e.parameters={docs:{description:{story:"If you want to show the notification in a dialog, you need to add the <code>fd-notification--in-dialog</code> class to the notification.\n            Also, you need to apply `fd-dialog__body--no-vertical-padding fd-dialog__body--no-horizontal-padding` classes to the dialog body."}}};var c,l,r;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"() => primaryExampleHtml",...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var f,p,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"() => noAvatarExampleHtml",...(_=(p=i.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var u,v,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"() => informationExampleHtml",...(m=(v=t.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var b,g,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"() => warningExampleHtml",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,w,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"() => errorExampleHtml",...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var A,C,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:"() => notificationGroupExampleHtml",...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,P,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:"() => mobileExampleHtml",...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var S,L,T;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:"() => inDialogExampleHtml",...(T=(L=e.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const Z=["Primary","NoAvatar","Information","Warning","Error","NotificationGroup","Mobile","InDialog"];export{n as Error,e as InDialog,t as Information,d as Mobile,i as NoAvatar,s as NotificationGroup,a as Primary,o as Warning,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=notification.stories-d1526616.js.map
