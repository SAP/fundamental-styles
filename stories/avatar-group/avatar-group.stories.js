export default {
    title: 'Components/Avatar Group',
    parameters: {
        description: `The avatar group displays a number of avatars, which act as a digital representation of a user. This control is useful for visualizing a team, project team members, or a group of employees, for example.



## Sizes

The control allows you to display the avatars in different sizes, depending on your use case.

| **Size** | &nbsp;&nbsp; **Group type** | &nbsp;&nbsp; **Individual type** | **Modifier class** |
| :--------- | ----------: | :----------------------- | ---------------: |
| XS | &nbsp;&nbsp; -0.75rem | &nbsp;&nbsp; 0.0625rem | <code>--xs</code> |
| S | &nbsp;&nbsp; -1.25rem | &nbsp;&nbsp; 0.125rem | <code>--s</code> |
| M | &nbsp;&nbsp; -1.625rem | &nbsp;&nbsp; 0.125rem | <code>--m</code> |
| L | &nbsp;&nbsp; -2rem | &nbsp;&nbsp; 0.125rem | <code>--l</code> |
| XL | &nbsp;&nbsp; -2.75rem | &nbsp;&nbsp; 0.25rem | <code>--xl</code> |

##Types

The **AvatarGroup** control has two group types:

- **Group type**: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.
- **Individual type**: The avatars are displayed side-by-side and each avatar has its own click/tap area.

## Usage

Use the **AvatarGroup** if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the **AvatarGroup** if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

##Overflow Button

To change the background color of the button, add the <code>fd-avatar-group\\_\\_more-button--accent-color-*</code> class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: <code>fd-avatar-group\\_\\_more-button--accent-color-1</code>

`,
        docs: { iframeHeight: 250 },
        tags: ['a11y', 'f3', 'theme'],
        components: ['avatar-group', 'avatar', 'icon', 'button', 'popover', 'bar', 'layout-grid', 'title', 'quick-view', 'title', 'link', 'form-layout-grid', 'form-group', 'form-item', 'form-label', 'input']
    }
};

export const individualType = () => `<div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--s">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_5z28edb');">
                <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Wendy Wallace">WW</span>
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
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Wendy Wallace">WW</span>
                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Wendy Wallace</h5>
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
                            <a class="fd-link fd-input" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link fd-input" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link fd-input" href="mailto:blabla@blabla">blabla@blabla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_spbw4q');">
               <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Avatar">
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
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Wendy Wallace">WW</span>
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
                            <a class="fd-link fd-input" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link fd-input" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link fd-input" href="mailto:blabla@blabla">blabla@blabla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_4ahzcg');">
               <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="presentation" aria-label="Christian Bow"></span>
            </div>
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
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="presentation" aria-label="Christian Bow"></span>
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
                            <a class="fd-link fd-input" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link fd-input" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link fd-input" href="mailto:blabla@blabla">blabla@blabla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false" onclick="onPopoverClick('popover_avatar_qc1f1jf');">
               <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Endy Wallace">EW</span>
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
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Endy Wallace">EW</span>
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
                            <a class="fd-link fd-input" href="tel:+89181818181">+89181818181</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link fd-input" href="tel:+2828282828">+2828282828</a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Email</label>
                            <a class="fd-link fd-input" href="mailto:blabla@blabla">blabla@blabla</a>
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
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                            <i class="fd-avatar__icon sap-icon--washing-machine" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/2.svg')" role="presentation" aria-label="John Doe"></span>
                    </div>
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="John Moe">JM</span>
                    </div>
                    <div class="fd-avatar-group__item" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--border" aria-label="Joe Bloggs">JB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

individualType.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'To use Individual type of Avatar Group use the <code>--individual-type</code> modifier class <i>(<code>fd-avatar-group--individual-type</code> class)<i>.'
    }
};



export const groupType = () => `<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--m"
             role="button"
             tabindex="0"
             aria-label="Has popup type dialog Conjoined avatars, 6 avatars displayed, 8 avatars hidden, activate for complete list"
             aria-haspopup="true"
             aria-expanded="false"
             onclick="onPopoverClick('popover_avatar-group_tztuj');">
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Wendy Wallace">WW</span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                </span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="presentation" aria-label="John Doe"></span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Endy Wallace">EW</span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                    <i class="fd-avatar__icon sap-icon--washing-machine" role="presentation"></i>
                </span>
            </div>
            <div class="fd-avatar-group__item">
                <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/2.svg')" role="presentation" aria-label="John Doe"></span>
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
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Wendy Wallace">WW</span>
                </div>                    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                    </span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/1.svg')" role="presentation" aria-label="John Doe"></span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Endy Wallace">EW</span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                        <i class="fd-avatar__icon sap-icon--washing-machine" role="presentation"></i>
                    </span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/2.svg')" role="presentation" aria-label="John Doe"></span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Andy Wallace">AW</span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                        <i class="fd-avatar__icon sap-icon--account" role="presentation"></i>
                    </span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="presentation" aria-label="John Doe"></span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="John Moe">JM</span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Joe Bloggs">JB</span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Avatar">
                        <i class="fd-avatar__icon sap-icon--visits" role="presentation"></i>
                    </span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/4.svg')" role="presentation" aria-label="John Doe"></span>
                </div>    
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Fred Bloggs">FB</span>
                </div>
                <div class="fd-avatar-group__item">
                    <span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--border" aria-label="Jan Alleman">JA</span>
                </div>
            </div> 
        </div>
    </div>
</div>
`;

groupType.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'To use Group type of Avatar Group use the <code>--group-type</code> modifier class <i>(<code>fd-avatar-group--group-type</code> class)<i>.'
    }
};

