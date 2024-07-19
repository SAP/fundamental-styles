var ti=Object.defineProperty,si=Object.defineProperties;var ei=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var li=Object.prototype.hasOwnProperty,ni=Object.prototype.propertyIsEnumerable;var y=(l,s,e)=>s in l?ti(l,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[s]=e,i=(l,s)=>{for(var e in s||(s={}))li.call(s,e)&&y(l,e,s[e]);if(u)for(var e of u(s))ni.call(s,e)&&y(l,e,s[e]);return l},t=(l,s)=>si(l,ei(s));/* empty css             *//* empty css             *//* empty css                 *//* empty css             *//* empty css               *//* empty css                   */const ai=`<h4 id="O09lk8">Standard</h4>
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
`,di=`
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
`,oi=`
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
`,ci=`<ul class="fd-list fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox"
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
`,ri=`<ul class="fd-list fd-list--selection fd-list--byline" role="listbox" aria-labelledby="O09lk9">
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
</ul>`,_i=`<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
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
`,fi=`<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
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
`,mi=`<ul class="fd-list fd-list--byline" role="list">
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
`,bi=`
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
`,pi=`<ul class="fd-list fd-list--byline fd-list--navigation" role="list">
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
`,vi=`<h4>Standard size</h4>
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
`,ui=`<h4>Standard size</h4>
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
`,Li={title:"Components/List/Byline",parameters:{description:`
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
`,tags:["f3","a11y","theme","development"]}},n=()=>ui;n.storyName="Default";n.parameters={docs:{description:{story:"The default byline list dislays list items in the standard size, which is ideal for mobile. To display the byline list in compact mode (for desktop), add the `is-compact` modifier class to the main element.\n    "}}};const c=()=>vi;c.parameters={docs:{description:{story:`The Attachment List shares the same specification as the Standard List with Byline. The only difference is that if two text items are set within the Byline row, the text aligned to the right is always standard text (i.e. not semantic text)
    `}}};const r=()=>pi;r.parameters={docs:{description:{story:"\nByline list items can contain navigation links. To add navigation, add the `fd-list--navigation` modifier class to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.\n"}}};const _=()=>bi;_.parameters={docs:{description:{story:`
`}}};const f=()=>mi;f.parameters={docs:{description:{story:"The `fd-list__item--interractive` will force list item to handle hover and active states.\n            Usage of this modifier is not needed on `Selection`, `Navigation` and `Action` modes."}}};const a=()=>fi;a.storyName="Navigation indicators";a.parameters={docs:{description:{story:"\nIf only some of the list items are navigable, you should indicate them with an arrow icon. To display navigation indicators, add the `fd-list--navigation-indication` modifier class to the unordered list element. Do not show indicators if all items are navigable. In this case, use a byline list with navigation (in the example above).\n"}}};const m=()=>_i;m.parameters={docs:{description:{story:"To display a borderless byline list, add the `fd-list--no-border` modifier class to the main element.\n    "}}};const b=()=>ri;b.parameters={docs:{description:{story:"\nByline list items can display checkboxes that users can select from. To display byline list items with selection, add the `fd-list--selection` modifier class to the main element. To create checkbox form items, add the `fd-list__form-item` class within each list element.\n    "}}};const d=()=>ci;d.storyName="Selection with navigation";d.parameters={docs:{description:{story:"To display byline list items with selection and navigation, add these following modifier classes to the main element:\n\n- `fd-list--byline`\n- `fd-list--selection`\n- `fd-list--navigation`\n- `fd-list--navigation-indicator`\n    "}}};const p=()=>oi;p.storyName="Byline List with Counter";n.parameters={docs:{}};const o=()=>di;o.storyName="List with long Title and Byline";o.parameters={docs:{description:{story:`By default, To allow the title and byline text to wrap, add these following modifier classes to the the title and byline respectively:

- \`fd-list__title--wrap\`
- \`fd-list__byline--wrap\`

When more than 100 characters for small screens or 300 characters for medium to large screens are used, a clickable "MORE" link should be displayed to reveal the entire contents of the text.`}}};const v=()=>ai;v.parameters={docs:{description:{story:`<span class="fd-info-label fd-info-label--accent-color-1"><span class="fd-info-label__text">non-fiori 3</span></span><br>
    `}}};var h,x,g;n.parameters=t(i({},n.parameters),{docs:t(i({},(h=n.parameters)==null?void 0:h.docs),{source:i({originalSource:"() => standardExampleHtml"},(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source)})});var k,w,S;c.parameters=t(i({},c.parameters),{docs:t(i({},(k=c.parameters)==null?void 0:k.docs),{source:i({originalSource:"() => attachmentExampleHtml"},(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source)})});var L,T,B;r.parameters=t(i({},r.parameters),{docs:t(i({},(L=r.parameters)==null?void 0:L.docs),{source:i({originalSource:"() => navigationExampleHtml"},(B=(T=r.parameters)==null?void 0:T.docs)==null?void 0:B.source)})});var I,z,E;_.parameters=t(i({},_.parameters),{docs:t(i({},(I=_.parameters)==null?void 0:I.docs),{source:i({originalSource:"() => buttonsExampleHtml"},(E=(z=_.parameters)==null?void 0:z.docs)==null?void 0:E.source)})});var H,N,G;f.parameters=t(i({},f.parameters),{docs:t(i({},(H=f.parameters)==null?void 0:H.docs),{source:i({originalSource:"() => interractiveExampleHtml"},(G=(N=f.parameters)==null?void 0:N.docs)==null?void 0:G.source)})});var q,A,O;a.parameters=t(i({},a.parameters),{docs:t(i({},(q=a.parameters)==null?void 0:q.docs),{source:i({originalSource:"() => navigationIndicatorExampleHtml"},(O=(A=a.parameters)==null?void 0:A.docs)==null?void 0:O.source)})});var F,j,U;m.parameters=t(i({},m.parameters),{docs:t(i({},(F=m.parameters)==null?void 0:F.docs),{source:i({originalSource:"() => borderlessExampleHtml"},(U=(j=m.parameters)==null?void 0:j.docs)==null?void 0:U.source)})});var C,K,D;b.parameters=t(i({},b.parameters),{docs:t(i({},(C=b.parameters)==null?void 0:C.docs),{source:i({originalSource:"() => selectionExampleHtml"},(D=(K=b.parameters)==null?void 0:K.docs)==null?void 0:D.source)})});var Y,M,V;d.parameters=t(i({},d.parameters),{docs:t(i({},(Y=d.parameters)==null?void 0:Y.docs),{source:i({originalSource:"() => selectionAndNavigationExampleHtml"},(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source)})});var X,Z,R;p.parameters=t(i({},p.parameters),{docs:t(i({},(X=p.parameters)==null?void 0:X.docs),{source:i({originalSource:"() => counterExampleHtml"},(R=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:R.source)})});var W,J,P;o.parameters=t(i({},o.parameters),{docs:t(i({},(W=o.parameters)==null?void 0:W.docs),{source:i({originalSource:"() => longTextExampleHtml"},(P=(J=o.parameters)==null?void 0:J.docs)==null?void 0:P.source)})});var Q,$,ii;v.parameters=t(i({},v.parameters),{docs:t(i({},(Q=v.parameters)==null?void 0:Q.docs),{source:i({originalSource:"() => unreadNotificationExampleHtml"},(ii=($=v.parameters)==null?void 0:$.docs)==null?void 0:ii.source)})});const Ti=["Standard","Attachment","Navigation","Buttons","Interractive","NavigationIndicator","Borderless","Selection","SelectionAndNavigation","Counter","LongText","UnreadNotification"];export{c as Attachment,m as Borderless,_ as Buttons,p as Counter,f as Interractive,o as LongText,r as Navigation,a as NavigationIndicator,b as Selection,d as SelectionAndNavigation,n as Standard,v as UnreadNotification,Ti as __namedExportsOrder,Li as default};
