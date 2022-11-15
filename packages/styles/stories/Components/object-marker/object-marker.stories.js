import '../../../src/object-marker.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Object Marker',
    parameters: {
        description: `Object marker indicates the technical status of an object. It display the technical state like (draft,
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle.
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size. `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const IconOnly = () => `
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--request" aria-label="icon for request"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--flag" aria-label="icon for flag"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--user-edit" aria-label="icon for user edit"></i>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--private" aria-label="icon for private"></i>
</div>
`;
IconOnly.parameters = {
    docs: {
        storyDescription: `Object Marker can display the semantic status of an object: (class: \`fd-object-marker\`)`
    }
}

export const MarkerText = () => `
<div class="fd-object-marker">
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker">
    <span class="fd-object-marker__text">Locked</span>
</div>
`;
MarkerText.parameters = {
    docs: {
        storyDescription: `Object Marker Text only`
    }
}

export const IconAndText = () => `
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--request" role="presentation"></i>
    <span class="fd-object-marker__text">Request</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--favorite" role="presentation"></i>
    <span class="fd-object-marker__text">Favourite</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--flag" role="presentation"></i>
    <span class="fd-object-marker__text">Flag</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
    <span class="fd-object-marker__text">Locked</span>
</div>
`;
IconAndText.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'The Marker supports the Icon and Text mode of displaying the Object.'
        }
    }
};

export const ClickableObjectMarker = () => `
<a href="#" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
    <span class="fd-object-marker__text">Locked</span>
</a>
<a href="#" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
    <span class="fd-object-marker__text">Unsaved Changes</span>
</a>
`;
ClickableObjectMarker.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story:
            'If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class.'
        }
    }
};
