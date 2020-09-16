import '../../dist/object-status.css';
import './custom.scss';

export default {
    title: 'Components/Object Status',
    parameters: {
        description: `Object Status is a short text that represents the semantic status of an object. It has a semantic 
color and an optional icon. Typically, the object status is used in the dynamic page header and as a status 
attribute of a line item in a table. `
    },
    tags: ['f3', 'a11y', 'theme']
};

/**
 * Object Status can display the semantic status of an object: negative (class: `fd-object-status--negative`), critical
 * (class: `fd-object-status--critical`), positive (class: `fd-object-status--positive`),
 * informative (class: `fd-object-status--informative`), or none.
 */

export const primary = () => `
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text">Negative</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
    <span class="fd-object-status__text">Critical</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
    <span class="fd-object-status__text">Positive</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
    <span class="fd-object-status__text">Info</span>
</span>
<span class="fd-object-status">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
    <span class="fd-object-status__text">Neutral</span>
</span>
`;

/**
 * Object status icon only
 */

export const icon = () => `
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
</span>
<span class="fd-object-status">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
</span>
`;

/**
 * Object status text only
 */

export const text = () => `

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
`;

/**
 * Object status icon and text
 */

export const iconAndText = () => `
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text">Negative</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
    <span class="fd-object-status__text">Critical</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
    <span class="fd-object-status__text">Positive</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
    <span class="fd-object-status__text">Info</span>
</span>
<span class="fd-object-status">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
    <span class="fd-object-status__text">Neutral</span>
</span>
`;

/**
 * Object Status with Generic Indication Colors
 */

export const genericIndicationColors = () => `
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
`;

/**
 If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the `fd-object-status--link` modifier class.
 */

export const clickableObjectStatus = () => `
<a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text">Negative</span>
</a>
<a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
    <span class="fd-object-status__text">Critical</span>
</a>
<a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
    <span class="fd-object-status__text">Positive</span>
</a>
<span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
    <span class="fd-object-status__text">Info</span>
</span>
<span role="button" class="fd-object-status fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
    <span class="fd-object-status__text">Neutral</span>
</span>

<br><br>

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
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6">
    <span class="fd-object-status__text">Teal</span>
</span>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7">
    <span class="fd-object-status__text">Purple</span>
</span>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8">
    <span class="fd-object-status__text">Pink</span>
</span>
`;


export const largeObjectStatus = () => `
<span class="fd-object-status fd-object-status--large fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text">Negative</span>
</span>
<span class="fd-object-status fd-object-status--large fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
    <span class="fd-object-status__text">Critical</span>
</span>
<span class="fd-object-status fd-object-status--large fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
    <span class="fd-object-status__text">Positive</span>
</span>
<span class="fd-object-status fd-object-status--large fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
    <span class="fd-object-status__text">Info</span>
</span>
<span class="fd-object-status fd-object-status--large">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
    <span class="fd-object-status__text">Neutral</span>
</span>
`;

/**
 Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the `fd-object-status--inverted` modifier class.
 */

export const inverted = () => `
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


<br><br>

<span class="fd-object-status fd-object-status--inverted">
    <span class="fd-object-status__text">Inverted Neutral</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text">Negative</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
    <span class="fd-object-status__text">Critical</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
    <span class="fd-object-status__text">Positive</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
    <span class="fd-object-status__text">Informative</span>
</span>
<span class="fd-object-status fd-object-status--inverted">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
    <span class="fd-object-status__text">Neutral</span>
</span>

<br>
<br>
<h4>Clickable Inverted Object Status</h4>
<a class="fd-object-status fd-object-status--link fd-object-status--negative fd-object-status--inverted">
    <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    <span class="fd-object-status__text">Inverted Negative</span>
</a>
<a class="fd-object-status fd-object-status--link fd-object-status--critical fd-object-status--inverted">
    <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
    <span class="fd-object-status__text">Inverted Warning</span>
</a>
<a class="fd-object-status fd-object-status--link fd-object-status--positive fd-object-status--inverted">
    <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
    <span class="fd-object-status__text">Inverted Success</span>
</a>
<a class="fd-object-status fd-object-status--link fd-object-status--informative fd-object-status--inverted">
    <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
    <span class="fd-object-status__text">Inverted informative</span>
</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted">
    <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
    <span class="fd-object-status__text">Inverted Neutral</span>
</a>

<br><br>

<div dir="rtl">
    <h4>RTL Support</h4>
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

    <br><br>

    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--status-negative" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--status-critical" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--status-positive" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--hint" role="presentation"></i>
        <span class="fd-object-status__text">Informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--to-be-reviewed" role="presentation"></i>
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`;

/**
 Inverted indication colors
 */

export const invertedIndication = () => `
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">Indication1</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">Indication2</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">Indication3</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">Indication4</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">Indication5</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">Indication6</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">Indication7</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">Indication8</span>

<br>
<br>

<h4>Clickable Inverted Object Status</h4>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-1">Indication1</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-2">Indication2</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-3">Indication3</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-4">Indication4</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-5">Indication5</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-6">Indication6</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-7">Indication7</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-8">Indication8</a>
`;
