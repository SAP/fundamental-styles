import '../../dist/object-number.css';
import './custom.scss';

export default {
    title: 'Components/Object Number',
    parameters: {
        description: `The Object Number displays number and number unit properties for an object.
        The number can be displayed using semantic colors to provide additional meaning about the object to the user.`
    },
    tags: ['f3', 'theme']
};

/**
 * Object Number can display the semantic status of an object: negative (class: `fd-object-number--negative`), critical
 * (class: `fd-object-number--critical`), positive (class: `fd-object-number--positive`),
 * informative (class: `fd-object-number--informative`), or none.
 */

export const primary = () => `
<span class="fd-object-number fd-object-number--negative">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--critical">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--positive">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--informative">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
</span>
`;

/**
 * Object Number can be large (class: `fd-object-number--large`)
 */

export const large = () => `
<span class="fd-object-number fd-object-number--large fd-object-number--negative">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--large fd-object-number--critical">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--large fd-object-number--positive">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--large fd-object-number--informative">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--large">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
</span>
`;

/**
 * Object Number text part could be bold (class: `fd-object-number__text--bold`)
 */

export const bold = () => `
<span class="fd-object-number fd-object-number--negative">
    <span class="fd-object-number__text fd-object-number__text--bold">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--critical">
    <span class="fd-object-number__text fd-object-number__text--bold">0.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-object-number__text--bold">1,000.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number fd-object-number--informative">
    <span class="fd-object-number__text fd-object-number__text--bold">100.00</span><span class="fd-object-number__unit">EUR</span>
</span>
<span class="fd-object-number">
    <span class="fd-object-number__text fd-object-number__text--bold">999.00</span><span class="fd-object-number__unit">EUR</span>
</span>
`;
