import '../../dist/avatar.css';
import '../../dist/icon.css';

export default {
    title: 'Components/Avatar',
    parameters: {
        description: `Avatar is a way to visually present something using an icon or user initials.

There are multiple sizes:

- Extra Small (--xs - 2rem)
- Small (--s) - 3rem
- Medium (--m) - 4rem
- Large (--l) - 5rem
- Extra Large (--xl) - 7rem`
    }
};

/**
 * Include <code>role="presentation"</code> when the avatar is used for only illustrative purposes. For example, if the icon sits right next to a label, use role.
 */

export const icon = () => `
<span class="fd-avatar fd-avatar--xs sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--s sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--l sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl sap-icon--washing-machine" role="presentation"></span>
`;



/**
 * Include aria-label when there is no text equivalent for the avatar. This is not necessary if the avatar is used for illustrative purposes only. See Icon above.
 */

export const initials = () => `
<span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl" aria-label="Wendy Wallace">WW</span>
`;


/**
 * A circle style can be rendered using the <code>--circle</code> modifier.
 */

export const circle = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle sap-icon--money-bills" role="presentation"></span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
`;


/**
 * A background image can be applied to any style using the <code>--thumbnail</code> modifier.
 */

export const backgroundImage = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
`;


/**
 * A transparent style can be rendered using the <code>--transparent</code> modifier.
 */

export const transparent = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent sap-icon--money-bills" role="presentation"></span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
`;


/**
 * An Avatar with placeholder background can be rendered using the <code>--placeholder</code> modifier.
 */

export const placeholderBackground = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
`;


/**
 * An Avatar with TileIcon background can be rendered using the <code>--tile</code> modifier.
 */

export const tileIconBackground = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
`;


/**
 * Use helpers classes to change the background colors, for example, <code>.fd-has-background-color-accent-9</code>.
 */

export const accentColors = () => `
<span class="fd-avatar fd-avatar--accent-color-1 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-2 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-4 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-5 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--m sap-icon--money-bills" role="presentation"></span>
`;


/**
 * A zoom icon button can be added with another element using the <code>.fd-avatar__zoom-icon</code> class.
 */

export const zoomIcon = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 sap-icon--money-bills" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 sap-icon--money-bills" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 sap-icon--money-bills" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 sap-icon--money-bills" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 sap-icon--money-bills" role="presentation">
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>

<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" aria-label="Wendy Wallace">WW
    <span class="fd-avatar__zoom-icon sap-icon--edit" role="presentation"></span>
</span>
`;


/**
 * An optional border can be added with the <code>--border</code> modifier.
 */

export const borders = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border sap-icon--money-bills" role="presentation"></span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW</span>
`;

