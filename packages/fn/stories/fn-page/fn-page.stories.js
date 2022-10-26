import 'fn/src/fn-page.scss';
import 'fn/src/fn-title.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-search.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Page',
  parameters: {
    description: `
Some description`,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }
</style>
`;
export const PageTitle = () => `${localStyles}
<div class="fn-page__title">
    <div class="fn-page__container fn-page__container--left">
        <h3 class="fn-title fn-title--h3">Page Title</h3>
    </div>
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--emphasized">
                <span class="fn-button__text">Primary</span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button">
                <span class="fn-button__text">Secondary</span>
            </button>
        </div>
    </div>
</div>

<br><br>
<div class="fn-page__title">
    <div class="fn-page__container fn-page__container--left">
        <h3 class="fn-title fn-title--h3">Page Title</h3>
    </div>
    <div class="fn-page__container fn-page__container--middle">
        <div class="fn-search">
            <span class="sap-icon sap-icon--search"></span>
            <input type="search" class="fn-search__input" placeholder="Search everything" />
            <span class="sap-icon sap-icon--navigation-right-arrow"></span>
        </div>
    </div>
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--pushpin-on"></span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--table-view"></span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </div>
    </div>
</div>

<br><br>
<div class="fn-page__title fn-page__title--no-container">
    <div class="fn-page__container fn-page__container--left">
        <h3 class="fn-title fn-title--h3">Page Title</h3>
    </div>
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--emphasized">
                <span class="fn-button__text">Primary</span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button">
                <span class="fn-button__text">Secondary</span>
            </button>
        </div>
    </div>
</div>

<br><br>
<div class="fn-page__title fn-page__title--no-container">
    <div class="fn-page__container fn-page__container--left">
        <h3 class="fn-title fn-title--h3">Page Title</h3>
    </div>
    <div class="fn-page__container fn-page__container--middle">
        <div class="fn-search">
            <span class="sap-icon sap-icon--search"></span>
            <input type="search" class="fn-search__input" placeholder="Search everything" />
            <span class="sap-icon sap-icon--navigation-right-arrow"></span>
        </div>
    </div>
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--pushpin-on"></span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--table-view"></span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </div>
    </div>
</div>
`;
PageTitle.parameters = {
  docs: {
    iframeHeight: 250,
    description: {
      story: 'For Page Title placed outside of a container use the `.fn-page__title--no-container` modifier class to the `.fn-page__title` base class.'
    }
  }
};
export const PageGroupTitle = () => `${localStyles}
<div class="fn-page__group-title">
    <div class="fn-page__text">Group Title</div>
</div>

<br><br>
<div class="fn-page__group-title fn-page__group-title--no-container">
    <div class="fn-page__text">Group Title</div>
</div>

`;
PageGroupTitle.parameters = {
  docs: {
    iframeHeight: 250,
    description: {
      story: 'For a Group Title placed outside of a container use the `.fn-page__group-title--no-container` modifier class to the `.fn-page__group-title` base class.'
    }
  }
};
export const PageFooter = () => `${localStyles}
<div class="fn-page__footer">
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--emphasized">
                <span class="fn-button__text">Save</span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button">
                <span class="fn-button__text">Cancel</span>
            </button>
        </div>
    </div>
</div>
<br><br>
<div class="fn-page__footer fn-page__footer--floating">
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--emphasized">
                <span class="fn-button__text">Save</span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button">
                <span class="fn-button__text">Cancel</span>
            </button>
        </div>
    </div>
</div>
<br><br>
<div class="fn-page__footer">
    <div class="fn-page__container fn-page__container--left">
        <button class="fn-button fn-button--negative fn-button--icon-only">
            <span class="sap-icon sap-icon--message-error"></span>
        </button>
    </div>
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--emphasized">
                <span class="fn-button__text">Save</span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button">
                <span class="fn-button__text">Cancel</span>
            </button>
        </div>
    </div>
</div>
<br><br>
<div class="fn-page__footer fn-page__footer--floating">
    <div class="fn-page__container fn-page__container--left">
        <button class="fn-button fn-button--negative fn-button--icon-only">
            <span class="sap-icon sap-icon--message-error"></span>
        </button>
    </div>
    <div class="fn-page__container fn-page__container--right">
        <div class="fn-page__element">
            <button class="fn-button fn-button--emphasized">
                <span class="fn-button__text">Save</span>
            </button>
        </div>
        <div class="fn-page__element">
            <button class="fn-button">
                <span class="fn-button__text">Cancel</span>
            </button>
        </div>
    </div>
</div>
`;
PageFooter.parameters = {
  docs: {
    iframeHeight: 250,
    description: {
      story: 'For floating type of footer add the `.fn-page__footer--floating` modifier class to the `.fn-page__footer` base class.'
    }
  }
};
