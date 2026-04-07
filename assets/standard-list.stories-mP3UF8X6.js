/* empty css             *//* empty css             *//* empty css                 *//* empty css               *//* empty css                       *//* empty css               *//* empty css                *//* empty css             *//* empty css            *//* empty css              */const h=`<ul class="fd-list fd-list__infinite-scroll fddocs-list-height" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 5</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 6</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 7</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 8</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 9</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 10</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 11</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">List item 12</span>
  </li>
</ul>
`,x=`<ul class="fd-list fd-list--navigation" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link fd-list__item--inactive">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 1 - Inactive</span>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 2</span>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 3</span>
    </a>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
    <a tabindex="0" class="fd-list__link">
      <span class="fd-list__title">List item 4</span>
    </a>
  </li>
</ul>
`,y=`<ul class="fd-list fd-list--selection" role="listbox" aria-labelledby="XezW11">
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez1" aria-labelledby="Az0bg1">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez1">
            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
          </label>
      </div>
      <span class="fd-list__title" id="Az0bg1">List item 1</span>
  </li>
  <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez2" checked aria-labelledby="Az0bg2">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez2">
            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
          </label>
      </div>
      <span class="fd-list__title" id="Az0bg2">List item 2</span>
  </li>
  <li role="option" tabindex="0" class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez3" aria-labelledby="Az0bg3">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez3">
            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
          </label>
      </div>
      <span class="fd-list__title" id="Az0bg3">List item 3</span>
  </li>
</ul>
`,g=`<ul class="fd-list fd-list--no-border" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
`,v=`<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
<span class="fd-list__footer">
  Footer text
</span>
`,L=`<ul class="fd-list" role="list">
  <li role="listitem" class="fd-list__group-header">
    <span class="fd-list__title">Group header 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" class="fd-list__group-header">
    <span class="fd-list__title">Group header 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 5</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 6</span>
  </li>
</ul>
`,w=`<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <i role="presentation" class="fd-list__icon sap-icon--lightbulb"></i>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <i role="presentation" class="fd-list__icon sap-icon--history"></i>
  </li>
</ul>`,E=`<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--lightbulb"></i>
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__item-counter">12345</span>
  </li>
</ul>
`,S=`<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary">Neutral Status</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary fd-list__secondary--positive">Positive Status</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary fd-list__secondary--critical">Critical Status</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__secondary fd-list__secondary--negative">Negative Status</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__title">Wrapping Rules for Long Text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    <span class="fd-list__secondary fd-list__secondary--informative">Informative Status Wrapping Rules for Long Text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
</li>
</ul>
`,k=`<h4>Standard</h4>
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Forward</button>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Save</button>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Action</button>
    </li>
</ul>

<h4>Action List item with other list items </h4>
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 1</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 2</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 3</span>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Action</button>
    </li>
</ul>

<h4>Growing List Item with Busy Indicator </h4>
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 1</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 2</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 3</span>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action fd-list__item--growing">
        <button class="fd-list__title">
            <span class="fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
                <span class="fd-busy-indicator__circle"></span>
                <span class="fd-busy-indicator__circle"></span>
                <span class="fd-busy-indicator__circle"></span>
            </span>
            <span class="fd-list__title-text">More</span>
        </button>
    </li>
</ul>
`,I=`<ul class="fd-list fd-list--navigation fd-list--navigation-indication" role="list">
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
        <span class="fd-list__title">List item 1</span>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected" href="#">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 2</span>
      </a>
  </li>
  <li tabindex="0" role="listitem" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0" role="listitem" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
        <span class="fd-list__title">List item 5</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
      <span class="fd-list__title">List item 5</span>
      <i role="presentation" class="fd-list__icon sap-icon--map"></i>
    </a>
</li>
</ul>
`,T=`<ul class="fd-list" role="list">
  <li tabindex="-1" role="listitem" class="fd-list__item">
    <span class="fd-list__title">List item 1</span>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--edit"></i>
    </button>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item">
    <span class="fd-list__title">List item 1</span>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--decline"></i>
    </button>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item">
    <span class="fd-list__title">List item 2</span>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--edit"></i>
    </button>
    <button class="fd-button fd-button--transparent fd-list__button">
        <i class="sap-icon--decline"></i>
    </button>
  </li>
</ul>
`,H=`<ul class="fd-list fd-list--navigation" role="list">
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link">
        <span class="fd-list__title">List item 1</span>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 2</span>
      </a>
  </li>
  <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
      <a tabindex="0" class="fd-list__link">
        <span class="fd-list__title">List item 3</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
      </a>
  </li>
</ul>
`,V=`<h4>Interactive Items</h4>
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
      <span class="fd-list__title">Regular State</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-hover">
      <span class="fd-list__title">Hover State</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-active">
      <span class="fd-list__title">Down/Active State</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-selected">
      <span class="fd-list__title">Selected State</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-hover is-selected">
      <span class="fd-list__title">Hover on Selected State</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-focus">
    <span class="fd-list__title">Focus State</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-focus is-selected">
    <span class="fd-list__title">Focus Selected State</span>
  </li>
</ul>
`,A=`<h4>Unread Options</h4>
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--unread">
      <span class="fd-list__title">List item 1 Unread</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--unread">
      <span class="fd-list__title">List item 2 Unread</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3 Read</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4 Read</span>
  </li>
</ul>
`,B=`<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
`,N=`<div style="height: 600px;">
    <div class="fd-popover__body fd-popover__body--no-arrow" style="width: 400px; position: static;" role="dialog" aria-modal="false" aria-label="Suggestions">
        <div class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader fd-bar--initial-suggestion-title">
                <div class="fd-bar__left">
                    <span class="fd-title fd-title--h6 fd-title--two-line-clamp">Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! </span>
                </div>
            </div>
            <div class="fd-bar fd-bar--subheader fd-bar--initial-suggestion-subline">
                <div class="fd-bar__left">
                    <span class="fd-text fd-text--subline">Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects"</span>
                </div>
            </div>
        </div>
        <div role="listbox" aria-label="Nine results are available in two groups.">
            <ul class="fd-list fd-list--navigation fd-list--search-results" role="group" aria-label="Recently Entered Elements / Top Rated">
                <li role="option" id="search-result-option-1" tabindex="0" aria-selected="true" aria-label="Viewed Element - Selected" class="fd-list__item is-selected fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
                <li role="option" id="search-result-option-2" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element - To Be Deleted</span>
                    <button class="fd-button fd-button--transparent fd-list__button" aria-label="Refresh" title="Refresh">
                        <i class="sap-icon--refresh"></i>
                    </button>
                    <button class="fd-button fd-button--transparent fd-list__button" aria-label="Delete" title="Remove Suggestion">
                        <i class="sap-icon--decline"></i>
                    </button>
                </li>
                <li role="option" id="search-result-option-3" aria-label="Prefix + Viewed Element" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <span class="fd-list__thumbnail">
                        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    </span>
                    <span class="fd-list__info-label fd-info-label fd-info-label--accent-color-10">
                        <span class="fd-info-label__sr-only">Prefix Info Label</span>
                        <span class="fd-info-label__text">Prefix: </span>
                    </span>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
                <li role="option" id="search-result-option-4" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--search"></i>
                    <span class="fd-list__title">Search Term</span>
                </li>
                <li role="option" id="search-result-option-5" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
            </ul>
            <ul class="fd-list fd-list--navigation fd-list--search-results" role="group">
                <li role="heading" aria-roledescription="Group Header" tabindex="0" class="fd-list__group-header" aria-owns="search-result-option-6 search-result-option-7 search-result-option-8 search-result-option-9">
                    <span class="fd-list__title">Group header</span>
                </li>
                <li role="option" id="search-result-option-6" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--byline">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="Avatar John Doe"></span>
                    <div class="fd-list__content">
                        <div class="fd-list__title">List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item </div>
                        <div class="fd-list__subline">Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline </div>
                    </div>
                    <button class="fd-button fd-button--transparent fd-list__button" aria-label="Delete" title="Remove Suggestion">
                        <i class="sap-icon--decline"></i>
                    </button>
                </li>
                <li role="option" id="search-result-option-7" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
                <li role="option" id="search-result-option-8" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element </span>
                </li>
                <li role="option" id="search-result-option-9" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <span class="fd-list__title fd-list__title--scope">Search in [Scope]</span>
                    <span class="fd-list__item-counter" role="tooltip" aria-label="Total Results 12345">12345</span>
                </li>
            </ul>
        </div>
        <div class="fd-popover__body-footer">
            <div class="fd-bar fd-bar--footer">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent fd-button--full-width">Show All Search Results</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,P={title:"Components/List/Standard",parameters:{description:`
In SAP Fiori, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have rather basic data, while the data in tables tend to be more complex. Lists are mostly used in the master list for a master-detail scenario using the flexible column layout, as well as in **Popovers** or **Dialogs**.

##Usage
**Use the standard list if:**

- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple datasets.
- You need to display a single-level hierarchy rather than using a complex tree table to support this simple use case.


**Do not use the standard list if:**

- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
- You work with complex hierarchies. In this case, use a **Tree**.

`,tags:["f3","a11y","theme","development"]}},t=()=>B;t.storyName="Default";t.parameters={docs:{description:{story:"The default standard list displays list items in the standard size, which is ideal for mobile. To display the standard list in compact mode (for desktop), add the `is-compact` modifier class to the main element.\n        "}}};const o=()=>A;o.parameters={docs:{description:{story:"The `fd-list__item--unread` modifier will change the font weight to bold for easier legibility.\n        "}}};const d=()=>V;d.parameters={docs:{description:{story:"\nThe `fd-list__item--interractive` will force list item to handle hover and active states.\nUsage of this modifier is not needed on `Selection`, `Navigation` and `Action` modes.\n        "}}};const r=()=>H;r.parameters={docs:{description:{story:"\nStandard list items can contain navigation links. To add navigation, add the `fd-list—navigation` modifier class to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.\n"}}};const c=()=>T;c.parameters={docs:{description:{story:`
`}}};const i=()=>I;i.storyName="Navigation indicators";i.parameters={docs:{description:{story:"\nIf only a subset of the list items is navigable you should indicate them with an arrow icon. To display navigation indicators, add the `fd-list--navigation-indication` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a standard list with navigation (in the example above).\n"}}};const s=()=>k;s.storyName="Action";s.parameters={docs:{description:{story:"\nStandard list items can display actions that users can choose from. To display actions, add the `fd-list__item--action` modifier class to the list elements.\n"}}};const e=()=>S;e.storyName="Secondary data";e.parameters={docs:{description:{story:"To display secondary data in standard list items, add a span element with `fd-list__secondary` class within the list elements. The secondary data can also be a status message by adding the appropriate modifiers. \n\n| **Status** | **Modifier class** |\n| :--------- | :---------- | \n| Neutral | `fd-list__secondary` |\n| Positive | `fd-list__secondary fd-list__secondary--positive` |\n| Critical | `fd-list__secondary fd-list__secondary--critical` |\n| Negative | `fd-list__secondary fd-list__secondary--negative` |\n| Informative | `fd-list__secondary fd-list__secondary--informative` |\n\n        "}}};const m=()=>E;m.parameters={docs:{description:{story:`The item counter is vertically aligned within the list item, to the right. The maximum number of digits is 5. In case of more digits, the formatting and the transformation is left to the applications. It's recommended to avoid combining item counter to other list variations and status texts.
        `}}};const l=()=>w;l.storyName="Icon";l.parameters={docs:{description:{story:"To display an icon inside standard list items, add the `fd-list__icon` class along with the icon within the list elements. For example, `fd-list__icon sap-icon—lightbulb`.\n        "}}};const a=()=>L;a.storyName="Group";a.parameters={docs:{description:{story:"Standard list items can be displayed with headers, separating the items into groups. To add group headers, add the `fd-list__group-header` class to the list elements.\n        "}}};const _=()=>v;_.parameters={docs:{description:{story:"The standard list can display a footer by adding a span element with an `fd-list__footer` class after the unordered list element.\n        "}}};const p=()=>g;p.parameters={docs:{description:{story:"To display a borderless standard list, add the `fd-list--no-border` modifier class to the main element.\n        "}}};const f=()=>y;f.parameters={docs:{description:{story:"Standard list items can display checkboxes that users can select from. To display standard list items with selection, add the `fd-list--selection` modifier class to the main element. To create checkbox form items, add the `fd-list__form-item` class within each list element.\n"}}};const u=()=>x;u.parameters={docs:{description:{story:`Some list item can be made inactive, to make it non-clickable.
`}}};const n=()=>h;n.storyName="Infinite scroll";n.parameters={docs:{description:{story:`If height for list is fixed and there are more list otem to show, then we should be able to scroll to next list items.
`}}};const b=()=>N;b.parameters={docs:{description:{story:"To be used in a popover containing sophisticated search results."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => standardExampleHtml",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => unreadExampleHtml",...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => interactiveExampleHtml",...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => navigationExampleHtml",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => buttonsExampleHtml",...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => navigationIndicatorExampleHtml",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => actionListExampleHtml",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => secondaryDataExampleHtml",...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => itemCounterExampleHtml",...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => iconsExampleHtml",...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => groupsExampleHtml",...a.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"() => footerExampleHtml",..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => borderlessExampleHtml",...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => selectionExampleHtml",...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"() => inactiveExampleHtml",...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => scrollExampleHtml",...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => searchResultsExampleHtml",...b.parameters?.docs?.source}}};const Y=["Standard","Unread","Interactive","Navigation","Buttons","NavigationIndicator","ActionList","SecondaryData","ItemCounter","Icons","Groups","Footer","Borderless","Selection","Inactive","Scroll","SearchResults"];export{s as ActionList,p as Borderless,c as Buttons,_ as Footer,a as Groups,l as Icons,u as Inactive,d as Interactive,m as ItemCounter,r as Navigation,i as NavigationIndicator,n as Scroll,b as SearchResults,e as SecondaryData,f as Selection,t as Standard,o as Unread,Y as __namedExportsOrder,P as default};
