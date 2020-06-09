import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/notification.css';

export default {
    title: 'Components/Notification',
    parameters: {
        description: `
- **Sizes**: Notifications have 3 sizes: Large (width more than 640px), Medium (width from 320px to 640px) and Small (width up to 320px). The default size is Large (L). It takes 100% of the parent container but can't exceed 60rem. 
- **Types**: default, success, warning, error, and information.`
    }
};

export const primary = () => `
<div class="fd-notification">
<div class="fd-notification__header">
    <div class="fd-notification__title">Default Notification Title</div>
    <button role="button" aria-label="decline-button" class="fd-button fd-button--compact fd-button--transparent sap-icon--decline fd-notification__close"></button>
</div>
<div class="fd-notification__body">
    <div class="fd-notification__content">
        <div class="fd-notification__text">
            <div class="fd-notification__description">
                Default Notification Description <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="fd-notification__metadata">
                Default Notification Metadata
            </div>
        </div>
    </div>
    <div class="fd-notification__footer">
        <button role="button" class="fd-button fd-button--transparent">More Info</button>
        <div class="fd-notification__actions">
            <button role="button" class="fd-button fd-button--positive">Approve</button>
            <button role="button" class="fd-button fd-button--negative">Reject</button>
        </div>
    </div>
</div>
</div>
`;

/*
 * Add the modifier class `fd-notification--success` for Success notification.
 */

export const success = () => `
<div class="fd-notification fd-notification--success">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--success"></div>
        <div class="fd-notification__title">This is the notifications title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="fd-notification__metadata">
                    5 mins ago
                </div>
            </div>
        </div>
        <div class="fd-notification__footer">
            <button role="button" class="fd-button fd-button--transparent">More Info</button>
            <div class="fd-notification__actions">
                <button role="button" class="fd-button fd-button--positive">Approve</button>
                <button role="button" class="fd-button fd-button--negative">Reject</button>
            </div>
        </div>
    </div>
</div>
`;

/**
 * Add the modifier class `fd-notification--warning` for Warning notification.
 */

export const warning = () => `
<div class="fd-notification fd-notification--warning">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--warning"></div>
        <div class="fd-notification__title">This is the notifications title</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="fd-notification__metadata">
                    7 hours ago
                </div>
            </div>
        </div>
        <div class="fd-notification__footer">
            <button role="button" class="fd-button fd-button--transparent">More Info</button>
            <div class="fd-notification__actions">
                <button role="button" class="fd-button fd-button--positive">Approve</button>
                <button role="button" class="fd-button fd-button--negative">Reject</button>
            </div>
        </div>
    </div>
</div>
`;

/**
* Add the modifier class `fd-notification--error` for Error notification.
*/

export const error = () => `
<div class="fd-notification fd-notification--error">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--error"></div>
        <div class="fd-notification__title">This is the notifications title</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs fd-has-background-color-accent-9" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div class="fd-notification__metadata">
                    Excepteur sint occaecat cupidatat non proident.
                </div>
            </div>
        </div>
        <div class="fd-notification__footer">
            <div class="fd-notification__actions">
                <button role="button" class="fd-button fd-button--positive">Approve</button>
                <button role="button" class="fd-button fd-button--negative">Reject</button>
            </div>
        </div>
    </div>
</div>
`;

/**Add the modifier class `fd-notification--information` for Information notification. */

export const information = () => `
<div class="fd-notification fd-notification--information">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--information"></div>
        <div class="fd-notification__title">Information notification title</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </div>
                <div class="fd-notification__metadata">
                    Author | 7 minutes ago
                </div>
            </div>
        </div>
        <div class="fd-notification__footer">
            <button role="button" class="fd-button fd-button--transparent">More Info</button>
            <div class="fd-notification__actions">
                <button role="button" class="fd-button fd-button--positive">Approve</button>
                <button role="button" class="fd-button fd-button--negative">Reject</button>
            </div>
        </div>
    </div>
</div>
`;

/**
* Medium (m) size notifications have width from 320px to 640px.
* Include the modifier class `fd-notification--m` to achieve medium size notification.
*/

export const mediumSize = () => `
<div class="fd-notification fd-notification--success fd-notification--m">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--success"></div>
        <div class="fd-notification__title">This is the notifications title.</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="fd-notification__metadata">
                    1 hour ago
                </div>
            </div>
        </div>
        <div class="fd-notification__footer">
            <div class="fd-notification__actions">
                <button role="button" class="fd-button fd-button--positive">Approve</button>
                <button role="button" class="fd-button fd-button--negative">Reject</button>
            </div>
        </div>
    </div>
</div>
`;

/**Small (s) size notifications have width 320px . Include the modifier class `fd-notification--s` to achieve small size notification. */

export const smallSize = () => `
<div class="fd-notification fd-notification--information fd-notification--s">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--information"></div>
        <div class="fd-notification__title">This is the notifications title</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </div>
                <div class="fd-notification__metadata">
                    Author | 15 minutes ago
                </div>
            </div>
        </div>
        <div class="fd-notification__footer">
            <div class="fd-notification__actions">
                <button role="button" class="fd-button fd-button--positive">Approve</button>
                <button role="button" class="fd-button fd-button--negative">Reject</button>
            </div>
        </div>
    </div>
</div>

<br><br><br>

<div class="fd-notification fd-notification--information fd-notification--s">
    <div class="fd-notification__header">
        <div class="fd-notification__indicator--information"></div>
        <div class="fd-notification__title">This is the notifications title</div>
        <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
    </div>
    <div class="fd-notification__body">
        <div class="fd-notification__content">
            <div class="fd-notification__avatar">
                <span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-notification__text">
                <div class="fd-notification__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </div>
                <div class="fd-notification__metadata">
                    Author | 15 minutes ago
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const notificationGroup = () => `
<div class="fd-notification--group">
    <div class="fd-notification fd-notification--success fd-notification--m">
        <div class="fd-notification__header">
            <div class="fd-notification__indicator--success"></div>
            <div class="fd-notification__title">This is the notifications title.</div>
            <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
        </div>
        <div class="fd-notification__body">
            <div class="fd-notification__content">
                <div class="fd-notification__avatar">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
                </div>
                <div class="fd-notification__text">
                    <div class="fd-notification__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div class="fd-notification__metadata">
                        Author | 2 minutes ago
                    </div>
                </div>
            </div>
            <div class="fd-notification__footer">
                <button role="button" class="fd-button fd-button--transparent">More Info</button>
                <div class="fd-notification__actions">
                    <button role="button" class="fd-button fd-button--positive">Approve All</button>
                    <button role="button" class="fd-button fd-button--negative">Reject All</button>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-notification fd-notification--warning fd-notification--m">
        <div class="fd-notification__header">
            <div class="fd-notification__indicator--warning"></div>
            <div class="fd-notification__title">This is the notifications title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
        </div>
        <div class="fd-notification__body">
            <div class="fd-notification__content">
                <div class="fd-notification__avatar">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
                </div>
                <div class="fd-notification__text">
                    <div class="fd-notification__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div class="fd-notification__metadata">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div class="fd-notification__footer">
                <button role="button" class="fd-button fd-button--transparent">More Info</button>
                <div class="fd-notification__actions">
                    <button role="button" class="fd-button fd-button--positive">Approve</button>
                    <button role="button" class="fd-button fd-button--negative">Reject</button>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-notification fd-notification--error fd-notification--m">
        <div class="fd-notification__header">
            <div class="fd-notification__indicator--error"></div>
            <div class="fd-notification__title">This is the notifications title</div>
            <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
        </div>
        <div class="fd-notification__body">
            <div class="fd-notification__content">
                <div class="fd-notification__avatar">
                    <span class="fd-avatar fd-avatar--xs fd-has-background-color-accent-9" aria-label="Wendy Wallace">WW</span>
                </div>
                <div class="fd-notification__text">
                    <div class="fd-notification__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div class="fd-notification__metadata">
                        Author | 16 minutes ago
                    </div>
                </div>
            </div>
            <div class="fd-notification__footer">
                <button role="button" class="fd-button fd-button--transparent">More Info</button>
                <div class="fd-notification__actions">
                    <button role="button" class="fd-button fd-button--positive">Approve</button>
                    <button role="button" class="fd-button fd-button--negative">Reject</button>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-notification fd-notification--information fd-notification--m">
        <div class="fd-notification__header">
            <div class="fd-notification__indicator--information"></div>
            <div class="fd-notification__title">This is the notifications title</div>
            <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
        </div>
        <div class="fd-notification__body">
            <div class="fd-notification__content">
                <div class="fd-notification__avatar">
                    <span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
                </div>
                <div class="fd-notification__text">
                    <div class="fd-notification__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </div>
                    <div class="fd-notification__metadata">
                        Author | 5 minutes ago
                    </div>
                </div>
            </div>
            <div class="fd-notification__footer">
                <div class="fd-notification__actions">
                    <button role="button" class="fd-button fd-button--positive">Approve</button>
                    <button role="button" class="fd-button fd-button--negative">Reject</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div class="fd-notification--group" dir="rtl">
    <div class="fd-notification fd-notification--success fd-notification--m">
        <div class="fd-notification__header">
            <div class="fd-notification__indicator--success"></div>
            <div class="fd-notification__title">حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.</div>
            <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
        </div>
        <div class="fd-notification__body">
            <div class="fd-notification__content">
                <div class="fd-notification__avatar">
                    <span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
                </div>
                <div class="fd-notification__text">
                    <div class="fd-notification__description">
                        حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.
                    </div>
                    <div class="fd-notification__metadata">
                        حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.
                    </div>
                </div>
            </div>
            <div class="fd-notification__footer">
                <button role="button" class="fd-button fd-button--transparent">المزيد</button>
                <div class="fd-notification__actions">
                    <button role="button" class="fd-button fd-button--positive">موافق</button>
                    <button role="button" class="fd-button fd-button--negative">إلغاء</button>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-notification fd-notification--warning fd-notification--m">
        <div class="fd-notification__header">
            <div class="fd-notification__indicator--warning"></div>
            <div class="fd-notification__title">حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.</div>
            <button aria-label="decline-button" role="button" class="fd-button fd-button--transparent sap-icon--decline fd-notification__close"></button>
        </div>
        <div class="fd-notification__body">
            <div class="fd-notification__content">
                <div class="fd-notification__avatar">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
                </div>
                <div class="fd-notification__text">
                    <div class="fd-notification__description">
                       حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.
                    </div>
                    <div class="fd-notification__metadata">
                       حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانيأسي.
                    </div>
                </div>
            </div>
            <div class="fd-notification__footer">
                <button role="button" class="fd-button fd-button--transparent">المزيد</button>
                <div class="fd-notification__actions">
                    <button role="button" class="fd-button fd-button--positive">موافق</button>
                    <button role="button" class="fd-button fd-button--negative">إلغاء</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;
