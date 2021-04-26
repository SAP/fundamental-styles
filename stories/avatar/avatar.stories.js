export default {
    title: 'Components/Avatar',
    parameters: {
        description: `The avatar component displays an image, icon or user initials, and is used for user profiles, placeholder images, icons or business-related images i.e. product photos.

## Sizes

| **Size** | **rem** | &nbsp;&nbsp; **Use for images in…** | **Modifier class** |
| :--------- | ----------: | :----------------------- | ---------------: |
| XS | 2 rem | &nbsp;&nbsp; Table list items, Card list items | <code>--xs</code> |
| S | 3 rem | &nbsp;&nbsp; Card headers, Card list items | <code>--s</code> |
| M | 4 rem | &nbsp;&nbsp; App headers for small screen sizes | <code>--m</code> |
| L | 5 rem | &nbsp;&nbsp; App headers for normal screen sizes | <code>--l</code> |
| XL | 7 rem | &nbsp;&nbsp; App headers for large screen sizes | <code>--xl</code> |

## Usage
Use avatar to display:

- A user’s image or initials
- Standardized images for business-related content (such as products, company logos, ad campaign images etc.)
- Icons
- Images with a transparent background
- Placeholder images

Do not use avatar if:

- You want to display an image for any other use case. Instead, use the **Image** component.
- You want to display images in a carousel. Instead, use the **Carousel** component.
- You want to display an interactive icon. Instead, use the **Button** component with an icon inside.
`,
        tags: ['a11y', 'f3', 'theme'],
        components: ['avatar', 'icon']
    }
};

export const icon = () => `
<span class="fd-avatar fd-avatar--xs" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--s" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--m" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--l" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--xl" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
`;

icon.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `The icon avatar can be used to display non-interactive icons. If you want the icon to be interactive, use the **Button** component with an icon inside instead.
        <br><br>When using the icon avatar for illustrative purposes only, include <code>role="presentation"</code> in the element. For instance, include <code>role=</code> if the icon sits right next to a label.`
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
        storyDescription: `The initials avatar can display up to three alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings.
        <br><br> When there is no equivalent text for the avatar, include <code>aria-label</code> in the element. This isn’t necessary if the avatar is used for illustrative purposes only. See **Icon** above.`
    }
};


export const circle = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" aria-label="Wendy Wallace">WW</span>
`;

circle.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A circle style can be displayed by adding the <code>--circle</code> modifier class.'
    }
};

export const backgroundImage = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/2.svg')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/4.svg')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/5.svg')" role="img" aria-label="John Doe"></span>
`;

backgroundImage.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A background image can be displayed by adding the <code>--thumbnail</code> modifier class.<br />Changing the default <code>background-size: cover</code> to <code>background-size: contain</code> CSS property can be achieved by adding <code>--background-contain</code> modifier class'
    }
};

export const transparent = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
`;

transparent.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'A transparent style can be displayed by adding the <code>--transparent</code> modifier class.'
    }
};


export const placeholderBackground = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
`;

placeholderBackground.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'An avatar with a placeholder background can be displayed by adding the <code>--placeholder</code> modifier class.'
    }
};


export const tileIconBackground = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--tile" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--tile" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--tile" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--tile" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
`;


tileIconBackground.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'An avatar with a tile icon background can be displayed by adding the <code>--tile</code> modifier class.'
    }
};


export const accentColors = () => `
<span class="fd-avatar fd-avatar--accent-color-1 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-2 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-4 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-5 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--m" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
`;

accentColors.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To change the background color, add the <code>fd-avatar--accent-color-*</code> class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: <code>fd-avatar--accent-color-10</code>.'
    }
};


export const zoomIcon = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
`;

zoomIcon.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Any avatar can display a zoom icon by creating an element with <code>fd-avatar\\_\\_zoom-icon</code> class.'
    }
};


export const borders = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--transparent fd-avatar--border" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--transparent fd-avatar--border" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--transparent fd-avatar--border" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--transparent fd-avatar--border" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Wendy Wallace">WW
</span>
`;

borders.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Borders can be displayed by adding the <code>--border</code> modifier class.'
    }
};
