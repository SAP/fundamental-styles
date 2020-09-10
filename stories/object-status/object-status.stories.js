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
<span class="fd-object-status fd-object-status--negative"><i aria-hidden="true" class="fd-object-status__icon sap-icon--status-negative"></i>Negative</span>
<span class="fd-object-status fd-object-status--critical"><i aria-hidden="true" class="fd-object-status__icon sap-icon--status-critical"></i>Critical</span>
<span class="fd-object-status fd-object-status--positive"><i aria-hidden="true" class="fd-object-status__icon sap-icon--status-positive"></i>Positive</span>
<span class="fd-object-status fd-object-status--informative"><i aria-hidden="true" class="fd-object-status__icon sap-icon--hint"></i>Informative</span>
<span class="fd-object-status "><i aria-hidden="true" class="fd-object-status__icon sap-icon--to-be-reviewed"></i>Neutral</span>
`;

/**
 * Object status icon only
 */

export const icon = () => `
<span class="fd-object-status fd-object-status--negative"><i class="fd-object-status__icon sap-icon--status-negative" aria-label="Negative Icon"></i></span>
<span class="fd-object-status fd-object-status--critical"><i class="fd-object-status__icon sap-icon--status-critical" aria-label="Critical Icon"></i></span>
<span class="fd-object-status fd-object-status--positive"><i class="fd-object-status__icon sap-icon--status-positive"  aria-label="Positive Icon"></i></span>
<span class="fd-object-status fd-object-status--informative"><i class="fd-object-status__icon sap-icon--hint" aria-label="Information Icon"></i></span>
<span class="fd-object-status"><i class="fd-object-status__icon sap-icon--to-be-reviewed" aria-hidden="true"></i></span>
`;

/**
 * Object status text only
 */

export const text = () => `
<span class="fd-object-status fd-object-status--negative">Negative</span>
<span class="fd-object-status fd-object-status--critical">Critical</span>
<span class="fd-object-status fd-object-status--positive">Positive</span>
<span class="fd-object-status fd-object-status--informative">Informative</span>
<span class="fd-object-status">Neutral</span>
`;

/**
 * Object status icon and text
 */

export const iconAndText = () => `
<span class="fd-object-status fd-object-status--negative"><i class="fd-object-status__icon sap-icon--status-negative" aria-hidden="true"></i>Negative</span>
<span class="fd-object-status fd-object-status--critical"><i class="fd-object-status__icon sap-icon--status-critical" aria-hidden="true"></i>Critical</span>
<span class="fd-object-status fd-object-status--positive"><i class="fd-object-status__icon sap-icon--status-positive" aria-hidden="true"></i>Positive</span>
<span class="fd-object-status fd-object-status--informative"><i class="fd-object-status__icon sap-icon--hint" aria-hidden="true"></i>Informative</span>
<span class="fd-object-status "><i class="fd-object-status__icon sap-icon--to-be-reviewed" aria-hidden="true"></i>Neutral</span>
`;

/**
 * Object Status with Generic Indication Colors
 */

export const genericIndicationColors = () => `
<span class="fd-object-status fd-object-status--indication-1">Dark Red</span>
<span class="fd-object-status fd-object-status--indication-2">Red</span>
<span class="fd-object-status fd-object-status--indication-3">Yellow</span>
<span class="fd-object-status fd-object-status--indication-4">Green</span>
<span class="fd-object-status fd-object-status--indication-5">Blue</span>
<span class="fd-object-status fd-object-status--indication-6">Teal</span>
<span class="fd-object-status fd-object-status--indication-7">Purple</span>
<span class="fd-object-status fd-object-status--indication-8">Pink</span>
`;

/**
 If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the `fd-object-status--link` modifier class.
 */

export const clickableObjectStatus = () => `
<a href="#" class="fd-object-status fd-object-status--link">Neutral</a>
<a href="#" class="fd-object-status fd-object-status--negative fd-object-status--link">Negative</a>
<a href="#" class="fd-object-status fd-object-status--positive fd-object-status--link">Positive</a>
<span role="button" class="fd-object-status fd-object-status--critical fd-object-status--link"><i class="fd-object-status__icon sap-icon--status-critical" aria-hidden="true"></i>Critical</span>
<span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link "><i class="fd-object-status__icon sap-icon--hint" aria-hidden="true"></i>Informative</span>

<div dir="rtl">
    <h4>RTL Support</h4>
    <a href="#" class="fd-object-status fd-object-status--link">Neutral</a>
    <a href="#" class="fd-object-status fd-object-status--negative fd-object-status--link">Negative</a>
    <a href="#" class="fd-object-status fd-object-status--positive fd-object-status--link">Positive</a>
    <span role="button" class="fd-object-status fd-object-status--critical fd-object-status--link"><i class="fd-object-status__icon sap-icon--status-critical" aria-hidden="true"></i>Critical</span>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link "><i class="fd-object-status__icon sap-icon--hint" aria-hidden="true"></i>Informative</span>
</div>

<br><br>

<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-1">Dark Red</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-2">Red</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-3">Yellow</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-4">Green</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-5">Blue</a>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6">Teal</span>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7">Purple</span>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8">Pink</span>
`;

/**
 Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the `fd-object-status--inverted` modifier class.
 */

export const inverted = () => `
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">Inverted Negative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical">Inverted Warning</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">Inverted Success</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">Inverted informative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">3</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">2.99</span>

<br><br>

<span class="fd-object-status fd-object-status--inverted">Inverted Neutral</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative"><i class="fd-object-status__icon sap-icon--status-negative" aria-label="Inverted Negative Icon"></i></span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative"><i class="fd-object-status__icon  sap-icon--status-negative" aria-hidden="true"></i>Negative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical "><i class="fd-object-status__icon sap-icon--status-critical" aria-hidden="true"></i>Critical</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive "><i class="fd-object-status__icon  sap-icon--status-positive" aria-hidden="true"></i>Positive</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative"><i class="fd-object-status__icon  sap-icon--hint" aria-hidden="true"></i>Informative</span>
<span class="fd-object-status fd-object-status--inverted"><i class="fd-object-status__icon sap-icon--to-be-reviewed" aria-hidden="true"></i>Neutral</span>

<div dir="rtl">
    <h4>RTL Support</h4>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">Inverted Negative</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">Inverted Warning</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">Inverted Success</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">Inverted informative</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">3</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">2.99</span>
    <br><br>
    <span class="fd-object-status fd-object-status--inverted">Inverted Neutral</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative"><i class="fd-object-status__icon sap-icon--status-negative" aria-label="Inverted Negative Icon"></i></span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative"><i class="fd-object-status__icon  sap-icon--status-negative" aria-hidden="true"></i>Negative</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical "><i class="fd-object-status__icon sap-icon--status-critical" aria-hidden="true"></i>Critical</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive "><i class="fd-object-status__icon  sap-icon--status-positive" aria-hidden="true"></i>Positive</span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative"><i class="fd-object-status__icon  sap-icon--hint" aria-hidden="true"></i>Informative</span>
    <span class="fd-object-status fd-object-status--inverted"><i class="fd-object-status__icon sap-icon--to-be-reviewed" aria-hidden="true"></i>Neutral</span>
</div>

<br>
<br>
<h4>Clickable Inverted Object Status</h4>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--negative"><i class="fd-object-status__icon  sap-icon--status-negative" aria-hidden="true"></i>Negative</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--critical"><i class="fd-object-status__icon sap-icon--status-critical" aria-hidden="true"></i>Critical</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--positive"><i class="fd-object-status__icon  sap-icon--status-positive" aria-hidden="true"></i>Positive</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--informative"><i class="fd-object-status__icon  sap-icon--hint" aria-hidden="true"></i>Informative</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted"><i class="fd-object-status__icon sap-icon--to-be-reviewed" aria-hidden="true"></i>Neutral</a>

<br><br>
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
