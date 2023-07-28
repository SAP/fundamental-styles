import clickableObjectMarkerExampleHtml from "./clickable-object-marker.example.html?raw";
import iconAndTextExampleHtml from "./icon-and-text.example.html?raw";
import markerTextExampleHtml from "./marker-text.example.html?raw";
import iconOnlyExampleHtml from "./icon-only.example.html?raw";
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
export const IconOnly = () => iconOnlyExampleHtml;
IconOnly.parameters = {
  docs: {
    storyDescription: `Object Marker can display the semantic status of an object: (class: \`fd-object-marker\`)`
  }
};
export const MarkerText = () => markerTextExampleHtml;
MarkerText.parameters = {
  docs: {
    storyDescription: `Object Marker Text only`
  }
};
export const IconAndText = () => iconAndTextExampleHtml;
IconAndText.parameters = {
  docs: {
    description: {
      story: 'The Marker supports the Icon and Text mode of displaying the Object.'
    }
  }
};
export const ClickableObjectMarker = () => clickableObjectMarkerExampleHtml;
ClickableObjectMarker.parameters = {
  docs: {
    description: {
      story: 'If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class.'
    }
  }
};