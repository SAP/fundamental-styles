import '../../../src/page.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
export default {
    title: 'Layouts/Page',
    parameters: {
        description: `
 - \`fd-page\`: standard (default)
 - \`fd-page--solid\`: solid
 - \`fd-page--list\`: list
 - \`fd-page--transparent:\` transparent


 ### CONTAINER HIERARCHY

 The elements used to construct a page are:

 - fd-page: The page-level wrapper
 - Header: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--header\` modifier classes
 - Header with SubHeader: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--header-with-subheader\` modifier classes
 - SubHeader: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--subheader\` modifier classes
 - Content: The page content is wrapped in \`fd-page__content container\`
 - Footer: Uses a Bar component with \`fd-bar--page\` and \`fd-bar--footer\` modifier classes


 ### PAGE RESPONSIVE BEHAVIOUR

 The left and right spacings of the Bar and the Content could be adjusted according to the container width.

 - default: Bar component with \`fd-bar--page modifier\` class and \`fd-page__content\` class for the content
 - Size S: Bar component with additional \`fd-bar--page-s\` modifier class and \`fd-page__content--s\` modifier class for the content
 - Size M & L: Bar component with additional \`fd-bar--page-m_l\` modifier class and \`fd-page__content--m_l\` modifier class for the content
 - Size XL: Bar component with additional \`fd-bar--page-xl\` modifier class and \`fd-page__content--xl\` modifier class for the content
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const BasicPage = () => `<main class="fd-page">
    <header>
        <div class="fd-bar fd-bar--page fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content" role="region">
        <div style="height: 400px">
            Page Content
        </div>
    </div>
    <footer>
        <div class="fd-bar fd-bar--page fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
`;
BasicPage.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const TransparentPage = () => `<main class="fd-page fd-page--transparent">
    <header>
        <div class="fd-bar fd-bar--page-m_l fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-bar fd-bar--page-m_l fd-bar--subheader">
        <div class="fd-bar__middle">
            <div class="fd-bar__element fd-bar__element--full-width">
                <div class="fd-form-item fd-form-item--horizontal">
                    <label class="fd-form-label" for="input-1">
                        Field Text:
                    </label>
                    <input class="fd-input fd-input--compact" type="text" id="input-1" placeholder="Field placeholder text">
                </div>
            </div>
        </div>
    </div>
    <div class="fd-page__content--m_l" role="region">
        <div style="height: 400px">
            Page Content
        </div>
    </div>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
`;
TransparentPage.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: 'Page with Transparent Background Design, Header with SubHeader, and Responsive Behaviour - M_L'
        }
    }
};


export const ResponsivePage = () => `<main class="fd-page fd-page--home fd-page--list">
    <header>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content--xl" role="region">
        <div style="height: 400px">
            Page Content
        </div>
    </div>
    <footer>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--floating-footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
`;
ResponsivePage.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: 'Home page with List Background Design, Floating Footer and Responsive Behaviour - XL'
        }
    }
};
