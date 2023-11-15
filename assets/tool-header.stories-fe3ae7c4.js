/* empty css               *//* empty css               *//* empty css             *//* empty css                     *//* empty css                    */const f=`<h4>Without Menu Button (default)</h4>
<div class="fd-tool-header fd-tool-header--compact">
    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back navigation" title="Back navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>
    </div>
</div>

<h4>With Menu Button</h4>
<div class="fd-tool-header fd-tool-header--menu fd-tool-header--compact">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>
    </div>
</div>
`,_=`<h4>Tablet - Landscape</h4>
<div class="fd-tool-header fd-tool-header--menu" style="max-width: 1000px;">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>
    </div>
</div>

<h4>Tablet - Portrait</h4>
<div class="fd-tool-header fd-tool-header--menu" style="max-width: 700px;">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center fd-tool-header__group--hidden">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>

    </div>
</div>

<h4>Tablet - Portrait (Expanded Search)</h4>
<div class="fd-tool-header fd-tool-header--menu" style="max-width: 700px;">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__elemen fd-tool-header__element--hiddent">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>
    </div>
</div>
`,u=`<h4>Phone</h4>
<div class="fd-tool-header fd-tool-header--menu" style="max-width: 500px;">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back navigation" title="Back navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center fd-tool-header__group--hidden">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>
    </div>
</div>

<h4>Phone (Expanded Search)</h4>
<div class="fd-tool-header fd-tool-header--menu" style="max-width: 500px;">
    <div class="fd-tool-header__group fd-tool-header__group--menu fd-tool-header__group--hidden">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
        />
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__elemen fd-tool-header__element--hidden">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">
                <div role="presentation" aria-hidden="true" class="fd-search-field__underline"></div>
                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <span class="fd-tool-header__separator"></span>
        </div>


        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/3.svg')"
                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
            ></span>
        </div>

    </div>
</div>
`,A={title:"BTP/Tool Header",parameters:{description:`The Tool Header exists on all BTP tools. It is the uppermost section of the tool. It is always visible to give users access to various functions.

## Structure
- <code>fd-tool-header</code> -&nbsp;<b>(required)</b> Tool Header Container element. Holds all Tool Header UI elements
        - <code>fd-tool-header--menu</code> -&nbsp; if the Tool Header has a Menu Button
- <code>fd-tool-header__group</code> -&nbsp; groups UI elements. The spacing between the groups is 0.75rem;
        - <code>fd-tool-header__group--hidden</code> -&nbsp;modifier class to hide an entire group;
        - <code>fd-tool-header__group--menu</code> -&nbsp;modifier class for the group element that contains the Menu Button;
        - <code>fd-tool-header__group--center</code> -&nbsp;modifier class for the group element that contains the Search/Context Switch;
        - <code>fd-tool-header__group--actions</code> -&nbsp;modifier class for the group element that contains the <b>custom</b> and <b>system</b> actions;

- <code>fd-tool-header__element</code> -&nbsp;a wrapping HTML element around every UI control. The spacing between individual elements in the group is 0.375rem;
        - <code>fd-tool-header__element--hidden</code> -&nbsp;modifier class to hide an element depending on the screen size;

- <code>fd-tool-header__logo</code> -&nbsp;<b>(required)</b> the logo is the logo of the company using the tool. The SAP logo is used as default. The logo is an interactive element that always navigates to the tool's homepage. 

- <code>fd-tool-header__product-name</code> -&nbsp;<b>(required)</b> the Product Name is the official name of the tool. 

- <code>fd-tool-header__second-title</code> -&nbsp; the Second Title is an optional second text identifier of the tool. 

- <code>fd-tool-header__separator</code> -&nbsp; The Separator is an optional element that adds space between the <b>Custom Actions Area</b> (optional), <b>System Actions Area</b> (optional) and <b>User Avatar</b> (required).
`,tags:["btp","development","horizon-only"]}},e=()=>f;e.parameters={docs:{description:{story:"When <b>menu button</b> is present use the <code>fd-tool-header--menu</code> modifier class with the <code>fd-tool-header</code> base class. Additionally, apply the <code>fd-tool-header__group--menu</code> modifier to the <code>fd-tool-header__group</code> wrapping element."}}};const n=()=>_;n.parameters={docs:{description:{story:"The <b>second title</b> is not displayed on tablets. The <b>separator</b> between the actions areas is hidden on tablet portrait orientation. The separator between the actions and the user avatar is present in all views."}}};const t=()=>u;t.parameters={docs:{description:{story:"Phone specification depicts only deltas from the tablet specification. It is possible that actions will overflow on phones. In such cases, the overflowing actions are displayed in a dropdown menu. The <b>Product Name</b>, <b>Second Title</b>, and <b>Separator</b> between the actions areas are not displayed on phones."}}};var a,o,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"() => desktopExampleHtml",...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,s,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"() => tabletExampleHtml",...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var r,c,h;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"() => mobileExampleHtml",...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const S=["Desktop","Tablet","Mobile"];export{e as Desktop,t as Mobile,n as Tablet,S as __namedExportsOrder,A as default};
//# sourceMappingURL=tool-header.stories-fe3ae7c4.js.map
