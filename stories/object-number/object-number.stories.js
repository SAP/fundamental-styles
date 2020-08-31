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
 * There are different semantic statuses that can be applied to the object number by adding a modifier class.
 *
 * | **Status**  | **Modifier class**               |
 * | ----------: | :------------------------------- |
 * | Positive    | `fd-object-number--positive`     |
 * | Negative    | `fd-object-number--negative`     |
 * | Critical    | `fd-object-number--critical`     |
 * | Informative | `fd-object-number--informative`  |
 * | None        | `fd-object-number__text` (class) |
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
 * In some cases, it can be useful to enlarge the text for the object number. To display the object number in large text, add the `--large` modifier class to the element.
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
 * When there is a key numeric attribute on the page, it should be emphasized in bold text. To display the object number in bold text, add the `--bold` modifier class to the element.
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
