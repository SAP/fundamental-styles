import '../../../src/avatar-group.scss';
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/popover.scss';
import '../../../src/bar.scss';
import '../../../src/layout-grid.scss';
import '../../../src/title.scss';
import '../../../src/quick-view.scss';
import '../../../src/title.scss';
import '../../../src/link.scss';
import '../../../src/form-layout-grid.scss';
import '../../../src/form-group.scss';
import '../../../src/form-item.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
export default {
    title: 'Components/Avatar Group',
    parameters: {
        description: `The avatar group displays a number of avatars, which act as a digital representation of a user. This control is useful for visualizing a team, project team members, or a group of employees, for example. <br />
        For detailed information check Fiori Design Guidelines for <a target="_blank" href="https://experience.sap.com/internal/fiori-design-web/avatar-group/">Avatar Group</a> component. 

<br />
## Usage

Use the **AvatarGroup** if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the **AvatarGroup** if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

<br />
## Sizes and spacings

The spacing between the items depends on the size of the avatars in the group. 

| **Size** | &nbsp;&nbsp; **Group type** | &nbsp;&nbsp; **Individual type** | **Modifier class** |
| :---------: | :----------: | :-----------------------: | :---------------: |
| XS | &nbsp;&nbsp; -0.75rem | &nbsp;&nbsp; 0.0625rem | \`fd-avatar-group--xs\` |
| S | &nbsp;&nbsp; -1.25rem | &nbsp;&nbsp; 0.125rem | \`fd-avatar-group--s\` |
| M | &nbsp;&nbsp; -1.625rem | &nbsp;&nbsp; 0.125rem | \`fd-avatar-group--m\` |
| L | &nbsp;&nbsp; -2rem | &nbsp;&nbsp; 0.125rem | \`fd-avatar-group--l\` |
| XL | &nbsp;&nbsp; -2.75rem | &nbsp;&nbsp; 0.25rem | \`fd-avatar-group--xl\` |

<br />
##Types (Interaction Variations)

The **AvatarGroup** control has two group types:

- **Group type**: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.
- **Individual type**: The avatars are displayed side-by-side and each avatar has its own click/tap area.


##Overflow Button
If an avatar group has too many members to display, an overflow button is displayed at the end of the group. <br />
To change the background color of the button, add the \`fd-avatar-group__more-button--accent-color-*\` class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: \`fd-avatar-group__more-button--accent-color-1\`

`,
        docs: { iframeHeight: 250 },
        tags: ['a11y', 'f3', 'theme']
    }
};

export const IndividualType = () => `<div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--s">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_5z28edb');">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Wendy Wallace" title="Wendy Wallace">WW</span>
            </div>
        </div>
        <div class="fd-popover__body" aria-hidden="false" id="popover_avatar_5z28edb">
            <div class="fd-quick-view">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">Business Card</div>
                    </div>
                </div>

                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Jason Smith" title="Jason Smith">WW</span>
                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Jason Smith</h5>
                                <div class="fd-quick-view__subtitle">Marketing Manager</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header" aria-labelledby="contactDetails_5z28edb">
                            <h1 class="fd-form-group__header-text" id="contactDetails_5z28edb">Contact Details</h1>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+89181818181"><span class="fd-link__content">+89181818181</span></a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link" href="tel:+2828282828"><span class="fd-link__content">+2828282828</span></a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link" href="mailto:blabla@blabla"><span class="fd-link__content">blabla@blabla</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_spbw4q');">
               <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Jason Goldwell" title="Jason Goldwell">
                    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                </span>
            </div>
        </div>
        <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_spbw4q">
            <div class="fd-quick-view">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">Business Card</div>
                    </div>
                </div>

                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Wendy Wallace" title="Wendy Wallace">WW</span>
                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Sarah Parker</h5>
                                <div class="fd-quick-view__subtitle">Visual Designer</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header" aria-labelledby="contactDetails_spbw4q">
                            <h1 class="fd-form-group__header-text" id="contactDetails_spbw4q">Contact Details</h1>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link" href="mailto:blabla@blabla">blabla@blabla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_4ahzcg');">
               <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" alt="Christian Bow" title="Christian Bow"></span></div>
        </div>
        <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_4ahzcg">
            <div class="fd-quick-view">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">Business Card</div>
                    </div>
                </div>

                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" alt="Christian Bow" title="Christian Bow"></span>
                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Christian Bow</h5>
                                <div class="fd-quick-view__subtitle">Marketing Manager</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header" aria-labelledby="contactDetails_4ahzcg">
                            <h1 class="fd-form-group__header-text" id="contactDetails_4ahzcg">Contact Details</h1>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link" href="mailto:blabla@blabla">blabla@blabla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_qc1f1jf');">
               <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Endy Wallace" title="Endy Wallace">EW</span>
            </div>
        </div>
        <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_qc1f1jf">
            <div class="fd-quick-view">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">Business Card</div>
                    </div>
                </div>

                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Endy Wallace" title="Endy Wallace">EW</span>
                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Endy Wallace</h5>
                                <div class="fd-quick-view__subtitle">Software Developer</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header" aria-labelledby="contactDetails_qc1f1jf">
                            <h1 class="fd-form-group__header-text" id="contactDetails_qc1f1jf">Contact Details</h1>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link" href="mailto:blabla@blabla">blabla@blabla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button fd-avatar-group__more-button fd-avatar-group__more-button--s"
                    role="button" aria-label="Has popup type dialog"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_more_aoiwjth');">
               <bdi class="fd-button__text fd-avatar-group__button-text">+4</bdi>
            </button>
        </div>

        <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_more_aoiwjth" style="width: 245px;">
            <div class="fd-popover__wrapper">
                <div class="fd-popover__body-header">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">Team Members (4)</div>
                        </div>
                    </div>
                </div>

                <div class="fd-avatar-group__overflow-body">
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Gordon Smith" title="Gordon Smith">
                            <i class="fd-avatar__icon sap-icon--washing-machine" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M2.png')" role="img" alt="John Doe" title="John Doe"></span>
                    </div>
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="John Moe" title="John Moe">JM</span>
                    </div>
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" role="img" alt="Joe Bloggs" title="Joe Bloggs">JB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

IndividualType.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'For Individual type add the `fd-avatar-group--individual-type` modifier class to the `fd-avatar-group` base class.'
        }
    }
};



export const GroupType = () => `<div class="fd-popover">
    <div class="fd-popover__control fd-avatar-group__popover-control"
         role="button"
         tabindex="0"
         aria-label="Has popup type dialog Conjoined avatars, 6 avatars displayed, 8 avatars hidden, activate for complete list"
         aria-haspopup="true"
         aria-expanded="false"
         onclick="onPopoverClick('popover_avatar-group_tztuj');">
        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--m">
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Wendy Wallace" title="Wendy Wallace">WW</span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Simon Doe" title="Simon Doe">
                    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                </span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" alt="John Doe" title="John Doe"></span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Endy Wallace" title="Endy Wallace">EW</span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Whitney Copper" title="Whitney Copper">
                    <i class="fd-avatar__icon sap-icon--washing-machine" role="presentation"></i>
                </span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M2.png')" role="img" alt="John Doe" title="John Doe"></span>
            </div>

            <button class="fd-button fd-avatar-group__more-button fd-avatar-group__more-button--m" role="button" tabindex="-1">
                <bdi class="fd-button__text fd-avatar-group__button-text">+8</bdi>
            </button>
        </div>
    </div>

    <div class="fd-popover__body" aria-hidden="false" id="popover_avatar-group_tztuj" style="width: 332px;">
        <div class="fd-popover__wrapper" style="max-height: 200px; overflow-x: hidden">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--header">
                    <div class="fd-bar__middle">
                        <div class="fd-bar__element">Team Members (14)</div>
                    </div>
                </div>
            </div>

            <div class="fd-avatar-group__overflow-body">
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Wendy Wallace" title="Wendy Wallace">WW</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Sarah Smith" title="Sarah Smith">
                        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" alt="John Doe" title="John Doe"></span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Endy Wallace" title="Endy Wallace">EW</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Whitney Bow" title="Whitney Bow">
                        <i class="fd-avatar__icon sap-icon--washing-machine" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M2.png')" role="img" alt="John Doe" title="John Doe"></span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Andy Wallace" title="Andy Wallace">AW</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="John Carter" title="John Carter">
                        <i class="fd-avatar__icon sap-icon--account" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_F3.png')" role="img" alt="John Doe" title="John Doe"></span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="John Moe" title="John Moe">JM</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Joe Bloggs" title="Joe Bloggs">JB</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Simon Swan" title="Simon Swan">
                        <i class="fd-avatar__icon sap-icon--visits" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_F4.png')" role="img" alt="John Doe" title="John Doe"></span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Fred Bloggs" title="Fred Bloggs">FB</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" role="img" alt="Jan Alleman" title="Jan Alleman">JA</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

GroupType.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'For Group type add the `fd-avatar-group--group-type` modifier class to the `fd-avatar-group` base class.'
        }
    }
};

