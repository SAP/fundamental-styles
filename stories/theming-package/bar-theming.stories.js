export default {
    title: 'Theming/Bar',
    parameters: {
        components: ['button', 'icon', 'input', 'segmented-button', 'avatar', 'bar']
    }
};

export const headerAndFooter = () => `
    <h3>Header</h3>
    <div>Default (desktop)</div>
    <br>
    <div class="fd-bar fd-bar--header">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                    <i class="sap-icon--navigation-left-arrow"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                    <i class="sap-icon--home"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                    <i class="sap-icon--account"></i>
                </button>
            </div>
        </div>
        <div class="fd-bar__middle">
            <div class="fd-bar__element">
                <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="true">
                        <i class="sap-icon--email"></i>
                    </button>
                    <button aria-label="button" class="fd-button fd-button--compact">
                        <i class="sap-icon--iphone"></i>
                    </button>
                    <button aria-label="button" class="fd-button fd-button--compact">
                        <i class="sap-icon--notification-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                    style="background-image: url('/assets/images/avatars/1.svg')"
                    role="img" aria-label="John Doe"></span>
                </div>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>
    <br><br>
    <div>Cozy (tablet and mobile)</div>
    <br>
    <div class="fd-bar fd-bar--header fd-bar--cozy">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-left-arrow"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--home"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--account"></i>
                </button>
            </div>
        </div>
        <div class="fd-bar__middle">
            <div class="fd-bar__element">
                <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="button" class="fd-button" aria-pressed="true">
                        <i class="sap-icon--email"></i>
                    </button>
                    <button aria-label="button" class="fd-button">
                        <i class="sap-icon--iphone"></i>
                    </button>
                    <button aria-label="button" class="fd-button">
                        <i class="sap-icon--notification-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                    style="background-image: url('/assets/images/avatars/1.svg')"
                    role="img" aria-label="John Doe"></span>
                </div>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>
    <br><br>

    <h3>Footer</h3>
    <div>Default (desktop)</div>
    <br>
    <div class="fd-bar fd-bar--footer">
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
            </div>
        </div>
    </div>
    <br><br>
    <div>Cozy (tablet and mobile)</div>
    <br>
    <div class="fd-bar fd-bar--footer fd-bar--cozy">
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
            </div>
        </div>
    </div>
    <br><br>

    <div style="margin-bottom: 2rem;">Default (desktop)</div>
    <br>
    <div style="position: relative;">
        <div class="fd-bar fd-bar--floating-footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <br><br>
    <div style="margin-bottom: 2rem;">Cozy (tablet and mobile)</div>
    <br>
    <div style="position: relative;">
        <div class="fd-bar fd-bar--floating-footer fd-bar--cozy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </div>
`;
