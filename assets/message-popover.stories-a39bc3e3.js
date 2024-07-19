var h=Object.defineProperty,x=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(e,s,a)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,t=(e,s)=>{for(var a in s||(s={}))j.call(s,a)&&c(e,a,s[a]);if(r)for(var a of r(s))k.call(s,a)&&c(e,a,s[a]);return e},n=(e,s)=>x(e,w(s));/* empty css             *//* empty css             *//* empty css               *//* empty css                      *//* empty css                *//* empty css            *//* empty css                         *//* empty css             *//* empty css                  */const y=`
<div style="height: 500px">
  <div class="fd-popover" style="margin-top: 300px;">
      <div class="fd-popover__control">
          <button aria-controls="popoverHSF5" aria-expanded="true" aria-haspopup="dialog" class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information" onclick="onPopoverClick('popoverHSF5');" role="button">
            <i class="sap-icon--message-information" aria-label="Information"></i>
            <span class="fd-button__text">5</span>
          </button>
      </div>
      <section style="top: auto; bottom: 100%;" aria-hidden="false" class="fd-popover__body fd-popover__body--no-arrow" id="popoverHSF5" aria-label="Dialog Data 1" role="dialog">
          <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header fd-bar--growing">
              <div class="fd-bar__left">
                <div class="fd-bar__element">
                  <button aria-label="Close" aria-controls="popoverHSF5" class="fd-button fd-button--transparent"><i class="sap-icon--navigation-left-arrow"></i></button>
                </div>
              </div>
              <div class="fd-bar__right">
                <button aria-label="Close" aria-controls="popoverHSF5" onclick="onPopoverClick('popoverHSF5');" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
              </div>
            </div>
          </header>
          <div>
            <div class="fd-message-view fd-scrollbar">
              <section class="fd-message-view__list fd-message-view__list--hidden" id="messageViewListDetails">
                <ul class="fd-list fd-list--navigation-indication fd-list--navigation fd-list--message-view" role="list">
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--byline fd-list__item--link">
                    <a onclick="toggleClass('messageViewListDetails', 'fd-message-view__list--hidden'); toggleClass('messageViewListDetails', 'fd-message-view__details--visible');" tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--negative fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          The file could not be uploaded.
                        </span>
                        <span class="fd-list__subtitle">
                          Uploaded file does not meet security requirements.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--byline fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--negative fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          Missing configuration objects.
                        </span>
                        <span class="fd-list__subtitle">
                          Missing master data.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--critical fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-warning" aria-label="Warning"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          Incorrect master data.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--byline fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--positive fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-success" aria-label="Correct"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          The status of the document has been changed.
                        </span>
                        <span class="fd-list__subtitle">
                          The transaction has been approved.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--neutral fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-information" aria-label="More information"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          The field Location has no entry.
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </section>
              <section class="fd-message-view__details fd-message-view__details--visible" id="messageViewDetailsCompact">
                <span class="fd-message-view__details-title">
                  <span class="fd-object-status fd-object-status--negative fd-message-view__icon">
                    <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                  </span>
                  The file could not be uploaded
                </span>
                <span class="fd-message-view__details-description">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                </span>
                <a class="fd-link">
                  <span class="fd-link__content">Read more</span>
                </a>
              </section>
            </div>
          </div>
      </section>
  </div>
</div>
`,C=`
<div style="height: 500px">
  <div class="fd-popover" style="margin-top: 300px;">
      <div class="fd-popover__control">
          <button aria-controls="popoverHSF3" aria-expanded="true" aria-haspopup="dialog" class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative" onclick="onPopoverClick('popoverHSF3');" role="button">
            <i class="sap-icon--message-error" aria-label="Negative"></i>
            <span class="fd-button__text">5</span>
          </button>
      </div>
      <section style="top: auto; bottom: 100%;" aria-hidden="false" class="fd-popover__body fd-popover__body--no-arrow" id="popoverHSF3" aria-label="Dialog Data 1" role="dialog">
          <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header fd-bar--growing">
              <div class="fd-bar__left">
                <div class="fd-bar__element">
                  <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="Survey" class="fd-button fd-button--toggled" aria-pressed="true">
                      <span class="fd-button__text">All</span>
                    </button>
                    <button aria-label="Survey" class="fd-button" aria-pressed="false">
                      <span class="fd-object-status fd-object-status--negative">
                        <i class="fd-button__icon fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                      </span>
                      <span class="fd-button__text">2</span>
                    </button>
                    <button aria-label="Chart" class="fd-button" aria-pressed="false">
                      <span class="fd-object-status fd-object-status--critical">
                        <i class="fd-button__icon fd-object-status__icon sap-icon--message-warning" aria-label="Warning"></i>
                      </span>
                      <span class="fd-button__text">1</span>
                    </button>
                    <button aria-label="Pool" class="fd-button" aria-pressed="false">
                      <span class="fd-object-status fd-object-status--positive">
                        <i class="fd-button__icon fd-object-status__icon sap-icon--message-success" aria-label="Correct"></i>
                      </span>
                      <span class="fd-button__text">1</span>
                    </button>
                    <button aria-label="Pool" class="fd-button" aria-pressed="false">
                      <span class="fd-object-status fd-object-status--neutral">
                        <i class="fd-button__icon fd-object-status__icon sap-icon--message-information" aria-label="More information"></i>
                      </span>
                      <span class="fd-button__text">1</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="fd-bar__right">
                <button aria-label="Close" aria-controls="popoverHSF3" onclick="onPopoverClick('popoverHSF3');" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
              </div>
            </div>
          </header>
          <div>
            <div class="fd-message-view fd-scrollbar">
              <section class="fd-message-view__list" id="messageViewList">
                <ul class="fd-list fd-list--navigation-indication fd-list--navigation fd-list--message-view" role="list">
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--byline fd-list__item--link">
                    <a onclick="toggleClass('messageViewList', 'fd-message-view__list--hidden'); toggleClass('messageViewDetails', 'fd-message-view__details--visible');" tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--negative fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          The file could not be uploaded. Title with some long text which is not fitting into the viewport of the message view container.
                        </span>
                        <span class="fd-list__subtitle">
                          Uploaded file does not meet security requirements.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--byline fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--negative fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          Missing configuration objects.
                        </span>
                        <span class="fd-list__subtitle">
                          Missing master data.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--critical fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-warning" aria-label="Warning"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          Incorrect master data.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--byline fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--positive fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-success" aria-label="Correct"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          The status of the document has been changed.
                        </span>
                        <span class="fd-list__subtitle">
                          The transaction has been approved.
                        </span>
                      </span>
                    </a>
                  </li>
                  <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                      <span class="fd-object-status fd-object-status--neutral fd-list__icon">
                        <i class="fd-object-status__icon sap-icon--message-information" aria-label="More information"></i>
                      </span>
                      <span class="fd-list__content">
                        <span class="fd-list__title">
                          The field Location has no entry.
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </section>
              <section class="fd-message-view__details" id="messageViewDetails">
                <span class="fd-message-view__details-title">
                  <span class="fd-object-status fd-object-status--negative fd-message-view__icon">
                    <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
                  </span>
                  The file could not be uploaded
                </span>
                <span class="fd-message-view__details-description">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                </span>
                <a class="fd-link">
                  <span class="fd-link__content">Read more</span>
                </a>
              </section>
            </div>
          </div>
      </section>
  </div>
</div>
`,S=`
<div style="height: 500px">
  <h3>(Secondary) Information/ Neutral Button</h3>
  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information" role="button">
    <i class="sap-icon--message-information" aria-label="Information"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information is-hover" role="button">
    <i class="sap-icon--message-information" aria-label="Information"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information is-active" role="button">
    <i class="sap-icon--message-information" aria-label="Information"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information is-active is-focus" role="button">
    <i class="sap-icon--message-information" aria-label="Information"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information is-disabled" role="button">
    <i class="sap-icon--message-information" aria-label="Information"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--information is-focus" role="button">
    <i class="sap-icon--message-information" aria-label="Information"></i>
    <span class="fd-button__text">5</span>
  </button>


  <h3>(Primary) Negative Button</h3>
  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative" role="button">
    <i class="sap-icon--message-error" aria-label="Negative"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative is-hover" role="button">
    <i class="sap-icon--message-error" aria-label="Negative"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative is-active" role="button">
    <i class="sap-icon--message-error" aria-label="Negative"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative is-active is-focus" role="button">
    <i class="sap-icon--message-error" aria-label="Negative"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative is-disabled" role="button">
    <i class="sap-icon--message-error" aria-label="Negative"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--negative is-focus" role="button">
    <i class="sap-icon--message-error" aria-label="Negative"></i>
    <span class="fd-button__text">5</span>
  </button>

  <h3>(Primary) Critical Button</h3>
  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--critical" role="button">
    <i class="sap-icon--message-warning" aria-label="Critical"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--critical is-hover" role="button">
    <i class="sap-icon--message-warning" aria-label="Critical"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--critical is-active" role="button">
    <i class="sap-icon--message-warning" aria-label="Critical"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--critical is-active is-focus" role="button">
    <i class="sap-icon--message-warning" aria-label="Critical"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--critical is-disabled" role="button">
    <i class="sap-icon--message-warning" aria-label="Critical"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--critical is-focus" role="button">
    <i class="sap-icon--message-warning" aria-label="Critical"></i>
    <span class="fd-button__text">5</span>
  </button>

  <h3>(Primary) success Button</h3>
  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--success" role="button">
    <i class="sap-icon--message-success" aria-label="Success"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--success is-hover" role="button">
    <i class="sap-icon--message-success" aria-label="Success"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--success is-active" role="button">
    <i class="sap-icon--message-success" aria-label="Success"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--success is-active is-focus" role="button">
    <i class="sap-icon--message-success" aria-label="Success"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--success is-disabled" role="button">
    <i class="sap-icon--message-success" aria-label="Success"></i>
    <span class="fd-button__text">5</span>
  </button>

  <button class="fd-button fd-message-popover__trigger fd-message-popover__trigger--success is-focus" role="button">
    <i class="sap-icon--message-success" aria-label="Success"></i>
    <span class="fd-button__text">5</span>
  </button>



</div>
`;const E={title:"Components/Message Popover",parameters:{description:`
A Message Popover is used to display a summarized list of different types of messages (error, warning, success, and information messages).
It provides a handy and systematized way to navigate and explore details for every message. It is adaptive and responsive. It renders as a dialog with a Close button in the header on phones, and as a popover on tablets and higher resolution devices.

##Usage
**When to use:**

- When you want to make sure that all content is visible on any device.
- When you want a way to centrally manage messages and show them to the user without additional work for the developer.

`,tags:["f3","theme"]}},i=()=>C,o=()=>y,l=()=>S;var d,p,_;i.parameters=n(t({},i.parameters),{docs:n(t({},(d=i.parameters)==null?void 0:d.docs),{source:t({originalSource:"() => cozyMessagePopoverExampleHtml"},(_=(p=i.parameters)==null?void 0:p.docs)==null?void 0:_.source)})});var f,g,b;o.parameters=n(t({},o.parameters),{docs:n(t({},(f=o.parameters)==null?void 0:f.docs),{source:t({originalSource:"() => detailsViewExampleHtml"},(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source)})});var u,m,v;l.parameters=n(t({},l.parameters),{docs:n(t({},(u=l.parameters)==null?void 0:u.docs),{source:t({originalSource:"() => messageTriggerExampleHtml"},(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source)})});const z=["CozyMessagePopover","DetailsView","MessageTrigger"];export{i as CozyMessagePopover,o as DetailsView,l as MessageTrigger,z as __namedExportsOrder,E as default};
