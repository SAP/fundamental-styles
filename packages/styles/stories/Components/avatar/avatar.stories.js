import '../../../src/avatar.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Avatar',
    parameters: {
        description: `The avatar component displays an image, icon or user initials, and is used for user profiles, placeholder images, icons or business-related images i.e. product photos. <br>
        For detailed information check Fiori Design Guidelines for <a target="_blank" href="https://experience.sap.com/fiori-design-web/avatar/">Avatar</a> component. 


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

## Sizes
The avatar control is adaptive and has five predefined sizes. These are the same for both compact and cozy.

| **Size** | **rem** | &nbsp;&nbsp; **Use for images in…** | **Modifier class** |
| :--------- | ----------: | :----------------------- | :--------------- |
| XS | 2 rem | &nbsp;&nbsp; Table list items, Card list items &nbsp;&nbsp;  | \`fd-avatar--xs\` |
| S | 3 rem | &nbsp;&nbsp; Card headers, Card list items &nbsp;&nbsp; | \`fd-avatar--s\` |
| M | 4 rem | &nbsp;&nbsp; App headers for small screen sizes &nbsp;&nbsp; | \`fd-avatar--m\` |
| L | 5 rem | &nbsp;&nbsp; App headers for normal screen sizes &nbsp;&nbsp; | \`fd-avatar--l\` |
| XL | 7 rem | &nbsp;&nbsp; App headers for large screen sizes &nbsp;&nbsp; | \`fd-avatar--xl\` |

<br><br><br>
`,
        tags: ['a11y', 'f3', 'theme']
    }
};

export const Icon = () => `
<span class="fd-avatar fd-avatar--xs" role="presentation" tabindex="0">
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

Icon.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'The icon avatar can be used to display non-interactive icons. If you want the icon to be interactive, use the **Button** component with an icon inside instead. <br><br>When using the icon avatar for illustrative purposes only, include `role="presentation"` in the element.'
        }
    }
};



export const Initials = () => `
<span class="fd-avatar fd-avatar--xs" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--s" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--m" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--l" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl" aria-label="Wendy Wallace">WW</span>
`;

Initials.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'The initials avatar can display up to three alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings.<br><br> When there is no equivalent text for the avatar, include `aria-label` in the element. This isn’t necessary if the avatar is used for illustrative purposes only. See **Icon** above.'
        }
    }
};


export const Circle = () => `
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

Circle.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'A circle style can be displayed by adding the `fd-avatar--circle` modifier class to the `fd-avatar` base class.'
        }
    }
};

export const BackgroundImage = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M2.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_F3.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_F4.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--thumbnail" style="background-image: url('/assets/images/landscape/L1.jpg')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--thumbnail fd-avatar--background-contain" style="background-image: url('/assets/images/landscape/L2.jpg')" role="img" aria-label="John Doe"></span>
`;

BackgroundImage.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `
A background image can be displayed by adding the \`fd-avatar--thumbnail\` modifier class.
There are two options to set the background: Cover (default) and Contain.

- <b>Cover:</b> The size of the image is scaled up to completely cover the control area. As a result, parts of the image may be outside the shape.
- <b>Contain:</b> The image is scaled down to fit into the control area. The entire image is displayed, but might not fully fill the shape. In this case, the control displays a default background color. The image itself is always centered inside the shape.

Changing the default \`background-size: cover\` to \`background-size: contain\` CSS property can be achieved by adding \`fd-avatar--background-contain\` modifier class.`
        }
    }
};

export const Transparent = () => `
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

Transparent.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'A transparent style can be displayed by adding the `fd-avatar--transparent` modifier class to the `fd-avatar` base class. This can be useful for displaying descriptive illustrations and decorative pictures, for example.'
        }
    }
};


export const PlaceholderBackground = () => `
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

PlaceholderBackground.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'An avatar with a placeholder background can be displayed by adding the `fd-avatar--placeholder` modifier class.'
        }
    }
};


export const TileIconBackground = () => `
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


TileIconBackground.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'An avatar with a tile icon background can be displayed by adding the `fd-avatar--tile` modifier class.'
        }
    }
};


export const AccentColors = () => `
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

AccentColors.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'To change the accent background color, add the `fd-avatar--accent-color-*` class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: `fd-avatar--accent-color-10`.'
        }
    }
};

export const AccentColorsShellHeaderContext = () => `
<div style="background-color: var(--sapShellColor); padding: 1rem;">
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-1 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-2 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-3 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-4 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-5 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-6 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-7 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-8 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-9 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
    <span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-10 fd-avatar--m" aria-label="Avatar">
        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    </span>
</div>
`;

AccentColorsShellHeaderContext.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'When used in Shell header context, an additional modifier class `fd-avatar--shell` should be added to the `fd-avatar` base class and the modifier class specifying the accent color `fd-avatar--accent-color-*`.'
        }
    }
};


export const ZoomIcon = () => `
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1" tabindex="0" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2" tabindex="0" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3" tabindex="0" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4" tabindex="0" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5" tabindex="0" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" tabindex="0" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s" tabindex="0" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m" tabindex="0" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l" tabindex="0" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" tabindex="0" aria-label="Wendy Wallace">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" aria-label="Edit"></i>
</span>
`;

ZoomIcon.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `If an avatar is clickable, you can show an optional badge and icon. 
            The badge indicates that the avatar is interactive and the icon indicates the action triggered by clicking the avatar. This feature gives users visual affordance of the available action, and is particularly useful for images.`
        }
    }
};


export const Borders = () => `
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

Borders.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'You can add a very subtle border to the avatar with the `fd-avatar--border` modifier class.'
        }
    }
};
