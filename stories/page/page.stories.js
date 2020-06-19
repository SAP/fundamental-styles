import '../../dist/page.css';
import '../../dist/bar.css';
import '../../dist/button.css';
import '../../dist/icon.css';

export default {
    title: 'Layouts/Page',
    parameters: {
        description: `
 - fd-page: standard (default)
 - fd-page--solid: solid
 - fd-page--list: list
 - fd-page--transparent: transparent


 ### CONTAINER HIERARCHY

 The elements used to construct a page are:
 
 - fd-page: The page-level wrapper
 - Header: Uses a Bar component with <code>fd-bar--page</code> and <code>fd-bar--header</code> modifier classes
 - Header with SubHeader: Uses a Bar component with <code>fd-bar--page</code> and <code>fd-bar--header-with-subheader</code> modifier classes
 - SubHeader: Uses a Bar component with <code>fd-bar--page</code> and <code>fd-bar--subheader</code> modifier classes
 - Content: The page content is wrapped in <code>fd-page__content container</code>
 - Footer: Uses a Bar component with <code>fd-bar--page</code> and <code>fd-bar--footer</code> modifier classes


 ### PAGE RESPONSIVE BEHAVIOUR

 The left and right spacings of the Bar and the Content could be adjusted according to the container width.

 - default: Bar component with <code>fd-bar--page modifier</code> class and <code>fd-page__content</code> class for the content
 - Size S: Bar component with additional <code>fd-bar--page-s</code> modifier class and <code>fd-page__content--s</code> modifier class for the content
 - Size M & L: Bar component with additional <code>fd-bar--page-m_l</code> modifier class and <code>fd-page__content--m_l</code> modifier class for the content
 - Size XL: Bar component with additional <code>fd-bar--page-xl</code> modifier class and <code>fd-page__content--xl</code> modifier class for the content
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const basicPage = () => `
<main class="fd-page">
    <header>
        <div class="fd-bar fd-bar--page fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow" aria-label="Go back"></button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--grid" aria-label="See more"></button>
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
basicPage.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const transparentPage = () => `
<main class="fd-page fd-page--transparent">
    <header>
        <div class="fd-bar fd-bar--page-m_l fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow" aria-label="Go back"></button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--overflow" aria-label="See more"></button>
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
transparentPage.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription: 'Page with Transparent Background Design, Header with SubHeader, and Responsive Behaviour - M_L'
    }
};


export const responsivePage = () => `
<main class="fd-page fd-page--home fd-page--list">
    <header>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow" aria-label="Go back"></button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--overflow" aria-label="See more"></button>
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
responsivePage.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription: 'Home page with List Background Design, Floating Footer and Responsive Behaviour - XL'
    }
};
