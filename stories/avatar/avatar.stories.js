import '../../dist/avatar.css';
import '../../dist/icon.css';

export default {
    title: 'Components/Avatar',
    parameters: {
        description: `The avatar component displays an image, icon or user initials, and is used for user profiles, placeholder images, icons or business-related images i.e. product photos.

####Sizes

Size   |  rem  | Use for images in…	| Modifier |
:-----:|:-----:|--------------------|--------------------------|

XS | 2 rem | Table list items, Card list items | --xs modifier|
S | 3 rem | Card headers, Card list items | --s modifier|
M | 4 rem | App headers for small screen sizes | --m modifier|
L | 5 rem | App headers for normal screen sizes | --l modifier|
XL | 7 rem | App headers for large screen sizes | --xl modifier|

####Usage
Use avatar to display:
* A user’s image or initials
* Standardized images for business-related content (such as products, company logos, ad campaign images etc.)
* Icons
* Images with a transparent background
* Placeholder images

Do not use avatar if:
* You want to display an image for any other use case. Instead, use the Image component.
* You want to display images in a carousel. Instead, use the Carousel component.
* You want to display an interactive icon. Instead, use the Button component with an icon inside.
`,
        tags: ['a11y', 'f3', 'theme']
    }
};

export const icon = () => `
<span class="fd-avatar fd-avatar--xs sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--s sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--m sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--l sap-icon--washing-machine" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl sap-icon--washing-machine" role="presentation"></span>
`;

icon.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The icon avatar can be used to display non-interactive icons. If you want the icon to be interactive, use the button with an icon inside instead. When using the icon avatar for illustrative purposes only, include <code>role="presentation"</code> in the element. For instance, include role if the icon sits right next to a label.'
    }
};



export const initials = () => `
<span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl" aria-label="Wendy Wallace">WW</span>
`;

initials.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The initials avatar can display up to 3 alphabetical characters, representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings. When there is no text equivalent for the avatar, include <code>aria-label</code> in the element.'
    }
};


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

circle.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A circle style can be rendered using the <code>--circle</code> modifier.'
    }
};

export const backgroundImage = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('https://placeimg.com/400/400/nature')" role="presentation" aria-label="John Doe"></span>
`;

backgroundImage.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A background image can be applied to any style using the <code>--thumbnail</code> modifier.'
    }
};

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

transparent.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A transparent style can be rendered using the <code>--transparent</code> modifier.'
    }
};


export const placeholderBackground = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder sap-icon--money-bills" role="presentation"></span>
`;

placeholderBackground.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'An Avatar with placeholder background can be rendered using the <code>--placeholder</code> modifier.'
    }
};


export const tileIconBackground = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile sap-icon--money-bills" role="presentation"></span>
`;

tileIconBackground.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'An Avatar with TileIcon background can be rendered using the <code>--tile</code> modifier.'
    }
};


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

accentColors.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Use <code>fd-avatar--accent-color-*</code> classes to change the background colors. Options include numbers from 1 to 10. For example: <code>fd-avatar--accent-color-10</code>'
    }
};


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

zoomIcon.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A zoom icon button can be added with another element using the <code>.fd-avatar\\_\\_zoom-icon</code> class.'
    }
};


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

borders.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'An optional border can be added with the <code>--border</code> modifier.'
    }
};
