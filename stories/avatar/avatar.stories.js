import '../../dist/avatar.css';
import '../../dist/icon.css';

export default {
    title: 'Components/Avatar',
    parameters: {
        description: `Avatar is a way to visually present something using an icon or user initials. Jessie.

There are multiple sizes:

- Extra Small (--xs - 2rem)
- Small (--s) - 3rem
- Medium (--m) - 4rem
- Large (--l) - 5rem
- Extra Large (--xl) - 7rem`,
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
        storyDescription: 'Include <code>role="presentation"</code> when the avatar is used for only illustrative purposes. For example, if the icon sits right next to a label, use role.'
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
        storyDescription: 'Include aria-label when there is no text equivalent for the avatar. This is not necessary if the avatar is used for illustrative purposes only. See Icon above.'
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
