/* empty css             *//* empty css             *//* empty css                 *//* empty css             *//* empty css               *//* empty css                   */const f=`<h4 id="O09lk8">Standard</h4>
<ul class="fd-list fd-list--byline fd-list--unread-indicator" role="listbox" aria-labelledby="O09lk9">
    <li role="option" tabindex="0" class="fd-list__item fd-list__item--unread is-selected">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title" id="O09lk1">Title</span>
            <span class="fd-list__byline">Byline (description)</span>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item fd-list__item--unread">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
              style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
        <div class="fd-list__content">
            <div class="fd-list__title" id="O09lk2">List item with 2-column byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
            </div>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
              style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
        <div class="fd-list__content">
            <div class="fd-list__title" id="O09lk2sdf">List item with 2-column byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
            </div>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item fd-list__item--unread">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <div class="fd-list__content">
            <div class="fd-list__title" id="O09lk3">Text-only list item</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
</ul>

<h4 id="O09lk9">Navigation</h4>
<ul class="fd-list fd-list--byline fd-list--navigation fd-list--unread-indicator" role="list">
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-list__item--unread">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <a tabindex="0" class="fd-list__link" href="#">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">Title</div>
                <div class="fd-list__byline">Byline (description)</div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-list__item--unread is-selected">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <a tabindex="0" class="fd-list__link" href="#">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with no byline</div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link" href="#">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
              style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link" href="#">
            <div class="fd-list__content">
                <div class="fd-list__title">Text-only list item</div>
                <div class="fd-list__byline">Byline (description)</div>
            </div>
        </a>
    </li>
</ul>
`,m=`
<ul class="fd-list fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List Item Title</div>
      <div class="fd-list__byline fd-list__byline--wrap">Very Long Byline (description), Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <a href="#" class="fd-link fd-list__link--more" tabindex="0"><span class="fd-link__content">More</span></a></div>
    </div>
    <span class="fd-list__item-counter">12345</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title fd-list__title--wrap">Very long list item with no byline, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title fd-list__title--wrap">Very long title, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      <div class="fd-list__byline fd-list__byline--wrap">
          <div class="fd-list__byline-left">First text item in byline (standard text), Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" class="fd-link fd-list__link--more" tabindex="0"><span class="fd-link__content">Less</span></a></div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-list__content">
      <div class="fd-list__title">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
</ul>
`,b=`
<ul class="fd-list fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List Item Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
    <span class="fd-list__item-counter">123</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
    <span class="fd-list__item-counter">456</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
      </div>
  </div>
  <span class="fd-list__item-counter">12345</span>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <div class="fd-list__content">
      <div class="fd-list__title">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
    <span class="fd-list__item-counter">67890</span>
</li>
</ul>
`,p=`<ul class="fd-list fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox"
    aria-labelledby="Ki81L1">
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6118N" aria-labelledby="Ki81L2">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6118N">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title" id="Ki81L2">Title</span>
            <span class="fd-list__byline">Byline (description)</span>
        </div>
    </li>
    <li role="option" tabindex="-1" class="fd-list__item fd-list__item--link is-selected" aria-selected="true">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6119N" checked aria-labelledby="Ki81L3">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6119N">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
            <div class="fd-list__content">
                <div class="fd-list__title" id="Ki81L3">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </a>
    </li>
    <li role="option" tabindex="-1" class="fd-list__item fd-list__item--link">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez61110N" aria-labelledby="Ki81L4">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61110N">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
            <div class="fd-list__content">
                <div class="fd-list__title" id="Ki81L4">Text-only list item</div>
                <div class="fd-list__byline">Byline (description)</div>
            </div>
        </a>
    </li>
</ul>
`,v=`<ul class="fd-list fd-list--selection fd-list--byline" role="listbox" aria-labelledby="O09lk9">
    <li role="option" tabindex="0" class="fd-list__item is-selected">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6111Z" checked aria-labelledby="O09lk1">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111Z">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title" id="O09lk1">Title</span>
            <span class="fd-list__byline">Byline (description)</span>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6112X" aria-labelledby="O09lk2">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6112X">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
              style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
        <div class="fd-list__content">
            <div class="fd-list__title" id="O09lk2">List item with 2-column byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
            </div>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6113C" aria-labelledby="O09lk3">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113C">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <div class="fd-list__content">
            <div class="fd-list__title" id="O09lk3">Text-only list item</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
</ul>`,u=`<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">list item with no byline</div>
    </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
  <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in byline (positive)</div>
      </div>
  </div>
</li>
<li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--world"></i></span>
  <div class="fd-list__content">
      <div class="fd-list__title">List item with 2-column byline (with an additional semantic byline)</div>
      <div class="fd-list__byline fd-list__byline--2-col">
          <div class="fd-list__byline-left">First text item in byline (standard text)</div>
          <div class="fd-list__byline-right fd-list__byline-right--informative">Second text item in byline (information)</div>
      </div>
  </div>
</li>
</ul>
`,y=`<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
  <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item">
      <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
      <div class="fd-list__content">
          <div class="fd-list__title">List item with 2-column byline</div>
          <div class="fd-list__byline fd-list__byline--2-col">
              <div class="fd-list__byline-left">First text item in byline (standard text)</div>
              <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
          </div>
      </div>
</li>
</ul>
`,h=`<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Title</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-hover">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Hover State</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-active">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Active State</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Selected State</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected is-hover">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Selected and Hover States</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-focus">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
      <div class="fd-list__content">
          <div class="fd-list__title">Focus States</div>
          <div class="fd-list__byline">Byline</div>
      </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected is-focus">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
      <div class="fd-list__content">
          <div class="fd-list__title">Selected and Focus States</div>
          <div class="fd-list__byline">Byline</div>
      </div>
    </li>
</ul>
`,x=`
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title">List item 1</span>
        </div>
        <button class="fd-button fd-button--transparent fd-list__button">
            <i class="sap-icon--edit"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-list__button">
            <i class="sap-icon--decline"></i>
        </button>
    </li>
</ul>
`,g=`<ul class="fd-list fd-list--byline fd-list--navigation" role="list">
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">Title</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
  <a tabindex="0" class="fd-list__link" href="#">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
    <div class="fd-list__content">
      <div class="fd-list__title">List item with no byline</div>
    </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
      <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
  style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
      <div class="fd-list__content">
          <div class="fd-list__title">List item with 2-column byline</div>
          <div class="fd-list__byline fd-list__byline--2-col">
              <div class="fd-list__byline-left">First text item in byline (standard text)</div>
              <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
          </div>
      </div>
  </a>
</li>
<li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
  <a tabindex="0" class="fd-list__link" href="#">
    <div class="fd-list__content">
      <div class="fd-list__title">Text-only list item</div>
      <div class="fd-list__byline">Byline (description)</div>
    </div>
  </a>
</li>
</ul>
`,k=`<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--attachment-photo"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
      <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--pdf-attachment"></i></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List item with no byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--attachment-text-file"></i></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List item with 2-column byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in byline (standard text)</div>
            <div class="fd-list__byline-right">Second text item in byline (standard text)</div>
        </div>
    </div>
  </li>
</ul>
`,w=`<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
              style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with 2-column byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
            </div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
          style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with 2-column byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
            </div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <div class="fd-list__content">
            <div class="fd-list__title">Text-only list item</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
</ul>
`,E={title:"Components/List/Byline",parameters:{description:`
Byline lists allow users to extend standard list items with additional content. To display a byline list, add the \`fd-list--byline\` modifier class to the \`fd-list\` element introduced in **Standard List**.

##Usage

**Use the byline list if:**

-	You want to include additional text in standard list items.
-	You want to present a semantic status in standard list items.

**Do not use the byline list if:**

-	You want to include objects in your list items. Instead, use the **Object List**.
-	You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
-	You work with complex hierarchies. In this case, use a **Tree**.

##Elements
The byline list consists of a few extra elements to add additional text and semantic colors to the list items.

Modifier/Class | Description
:---------------| :---------------
\`fd-list__byline--2-col\` | Displays a 2-column byline that consists of two sides: left and right.
\`fd-list__byline-left\` | The left side is best suited for standard text, and occupies 60% of the available space.
\`fd-list__byline-right\` | The right side is best suited for supplemental information (can be a semantic status), and occupies 40% of the available space.
\` fd-list__byline-right--*\` | To represent a semantic status, replace the * with either: _neutral_, _positive_, _negative_, _critical_ or _informative_.
`,tags:["f3","a11y","theme","development"]}},i=()=>w;i.storyName="Default";i.parameters={docs:{description:{story:"The default byline list dislays list items in the standard size, which is ideal for mobile. To display the byline list in compact mode (for desktop), add the `is-compact` modifier class to the main element.\n    "}}};const l=()=>k;l.parameters={docs:{description:{story:`The Attachment List shares the same specification as the Standard List with Byline. The only difference is that if two text items are set within the Byline row, the text aligned to the right is always standard text (i.e. not semantic text)
    `}}};const n=()=>g;n.parameters={docs:{description:{story:"\nByline list items can contain navigation links. To add navigation, add the `fd-list--navigation` modifier class to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.\n"}}};const a=()=>x;a.parameters={docs:{description:{story:`
`}}};const d=()=>h;d.parameters={docs:{description:{story:"The `fd-list__item--interractive` will force list item to handle hover and active states.\n            Usage of this modifier is not needed on `Selection`, `Navigation` and `Action` modes."}}};const t=()=>y;t.storyName="Navigation indicators";t.parameters={docs:{description:{story:"\nIf only some of the list items are navigable, you should indicate them with an arrow icon. To display navigation indicators, add the `fd-list--navigation-indication` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a byline list with navigation (in the example above).\n"}}};const o=()=>u;o.parameters={docs:{description:{story:"To display a borderless byline list, add the `fd-list--no-border` modifier class to the main element.\n    "}}};const c=()=>v;c.parameters={docs:{description:{story:"\nByline list items can display checkboxes that users can select from. To display byline list items with selection, add the `fd-list--selection` modifier class to the main element. To create checkbox form items, add the `fd-list__form-item` class within each list element.\n    "}}};const s=()=>p;s.storyName="Selection with navigation";s.parameters={docs:{description:{story:"To display byline list items with selection and navigation, add these following modifier classes to the main element:\n\n- `fd-list--byline`\n- `fd-list--selection`\n- `fd-list--navigation`\n- `fd-list--navigation-indicator`\n    "}}};const r=()=>b;r.storyName="Byline List with Counter";i.parameters={docs:{}};const e=()=>m;e.storyName="List with long Title and Byline";e.parameters={docs:{description:{story:`By default, To allow the title and byline text to wrap, add these following modifier classes to the the title and byline respectively:

- \`fd-list__title--wrap\`
- \`fd-list__byline--wrap\`

When more than 100 characters for small screens or 300 characters for medium to large screens are used, a clickable "MORE" link should be displayed to reveal the entire contents of the text.`}}};const _=()=>f;_.parameters={docs:{description:{story:`<span class="fd-info-label fd-info-label--accent-color-1"><span class="fd-info-label__text">non-fiori 3</span></span><br>
    `}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => standardExampleHtml",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => attachmentExampleHtml",...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => navigationExampleHtml",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => buttonsExampleHtml",...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => interractiveExampleHtml",...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => navigationIndicatorExampleHtml",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => borderlessExampleHtml",...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => selectionExampleHtml",...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => selectionAndNavigationExampleHtml",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => counterExampleHtml",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => longTextExampleHtml",...e.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"() => unreadNotificationExampleHtml",..._.parameters?.docs?.source}}};const H=["Standard","Attachment","Navigation","Buttons","Interractive","NavigationIndicator","Borderless","Selection","SelectionAndNavigation","Counter","LongText","UnreadNotification"];export{l as Attachment,o as Borderless,a as Buttons,r as Counter,d as Interractive,e as LongText,n as Navigation,t as NavigationIndicator,c as Selection,s as SelectionAndNavigation,i as Standard,_ as UnreadNotification,H as __namedExportsOrder,E as default};
