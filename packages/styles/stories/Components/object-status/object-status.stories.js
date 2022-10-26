import '../../../src/object-status.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Object Status',
    parameters: {
        description: `Object Status is a short text that represents the semantic status of an object. It has a semantic 
color and an optional icon. Typically, the object status is used in the dynamic page header and as a status 
attribute of a line item in a table. `,
        tags: ['f3', 'a11y', 'theme']
    }
};

/**
 * Object Status can display the semantic status of an object: negative (class: `fd-object-status--negative`), critical
 * (class: `fd-object-status--critical`), positive (class: `fd-object-status--positive`),
 * informative (class: `fd-object-status--informative`), or none.
 */

export const Primary = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
</div>
`;

/**
 * Object status icon only
 */

export const Icon = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" aria-label="Warning"></i>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" aria-label="Correct"></i>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" aria-label="More information"></i>
    </span>
</div>
`;

/**
 * Object status text only
 */

export const Text = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`;

/**
 * Object status icon and text
 */

export const IconAndText = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
</div>
`;

/**
 * Object Status with Generic Indication Colors
 */

export const GenericIndicationColors = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--indication-1">
        <span class="fd-object-status__text">Dark Red</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-2">
        <span class="fd-object-status__text">Red</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-3">
        <span class="fd-object-status__text">Yellow</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-4">
        <span class="fd-object-status__text">Green</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-5">
        <span class="fd-object-status__text">Blue</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-6">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-7">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-8">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
`;

/**
 If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the `fd-object-status--link` modifier class.
 */

export const ClickableObjectStatus = () => `<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link" tabindex="0">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
`;


export const LargeObjectStatus = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--large fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status fd-object-status--large">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`;

/**
 Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the `fd-object-status--inverted` modifier class.
 */

export const Inverted = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Warning</span>
    </span>
    <span class="fd-object-status fd-object-status--positive fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Success</span>
    </span>
    <span class="fd-object-status fd-object-status--informative fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>

    <h4>Clickable Inverted Object Status</h4>
<div class="fddocs-container">
    <a class="fd-object-status fd-object-status--link fd-object-status--negative fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Inverted Negative</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--critical fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Inverted Warning</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--positive fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Inverted Success</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--informative fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Inverted informative</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </a>
</div>
`;

/**
 Inverted indication colors
 */

export const InvertedIndication = () => `<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
        <span class="fd-object-status__text">Indication8</span>
    </span>
</div>

<h4>Clickable Inverted Object Status</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
</div>
`;
