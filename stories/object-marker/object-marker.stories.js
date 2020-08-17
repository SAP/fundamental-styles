import '../../dist/object-marker.css';

export default {
    title: 'Components/Object Marker',
    parameters: {
        description: `Object marker indicates the technical status of an object. It display the technical state like (draft, 
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle. 
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size. `
    },
    tags: ['f3', 'a11y', 'theme']
};

/**
 * Object Marker can display the semantic status of an object: (class: `fd-object-marker`)
 */

export const iconOnly = () => `
<span class="fd-object-marker" aria-label="icon for request"><i class="sap-icon--request fd-object-marker__icon"></i></span>
<span class="fd-object-marker" aria-label="icon for favourite"><i class="sap-icon--favorite fd-object-marker__icon"></i></span>
<span class="fd-object-marker" aria-label="icon for flag"><i class="sap-icon--flag fd-object-marker__icon"></i></span>
<span class="fd-object-marker" aria-label="icon for user edit"><i class="sap-icon--user-edit fd-object-marker__icon"></i></span>
<span class="fd-object-marker" aria-label="icon for private"><i class="sap-icon--private fd-object-marker__icon"></i></span>
`;

/**
 * Object Marker Text only
 */

export const markerText = () => `
<span class="fd-object-marker">Draft</span>
<span class="fd-object-marker">Locked</span>
`;

/**
 * Object Marker icon and text
 */

export const iconAndText = () => `
<span class="fd-object-marker"><i class="sap-icon--request fd-object-marker__icon"></i>Request</span>
<span class="fd-object-marker"><i class="sap-icon--favorite fd-object-marker__icon"></i>Favourite</span>
<span class="fd-object-marker"><i class="sap-icon--flag fd-object-marker__icon"></i>Flag</span>
<span class="fd-object-marker"><i class="sap-icon--user-edit fd-object-marker__icon"></i>Draft</span>
<span class="fd-object-marker "><i class="sap-icon--private fd-object-marker__icon"></i>Locked</span>

<div dir="rtl">
<h4>RTL Support</h4>
<span class="fd-object-marker"><i class="sap-icon--request fd-object-marker__icon"></i>Request</span>
<span class="fd-object-marker"><i class="sap-icon--favorite fd-object-marker__icon"></i>Favourite</span>
<span class="fd-object-marker"><i class="sap-icon--flag fd-object-marker__icon"></i>Flag</span>
<span class="fd-object-marker"><i class="sap-icon--user-edit fd-object-marker__icon"></i>Draft</span>
<span class="fd-object-marker "><i class="sap-icon--private fd-object-marker__icon"></i>Locked</span>
</div>
`;
iconAndText.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The Marker supports the Icon and Text mode of displaying the Object.'
    }
};

/**
 If the object marker is used as a link, a hover effect is shown on non-touch devices.
 If the object marker is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object marker has to be clicked/tabbed by the user add the `fd-object-marker--link` modifier class.
 */

export const clickableObjectMarker = () => `
<a class="fd-object-marker fd-object-marker--link"><i class="sap-icon--private fd-object-marker__icon"></i>Locked</a>
<a class="fd-object-marker fd-object-marker--link"><i class="sap-icon--user-edit fd-object-marker__icon"></i>Unsaved Changes</a>

<div dir="rtl">
<h4>RTL Support</h4>
<a class="fd-object-marker fd-object-marker--link"><i class="sap-icon--private fd-object-marker__icon"></i>Locked</a>
<a class="fd-object-marker fd-object-marker--link"><i class="sap-icon--user-edit fd-object-marker__icon"></i>Unsaved Changes</a>
</div>
`;
clickableObjectMarker.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription:
            'If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class.'
    }
};
