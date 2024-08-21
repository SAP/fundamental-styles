var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var o=(a,n,e)=>n in a?d(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,s=(a,n)=>{for(var e in n||(n={}))c.call(n,e)&&o(a,e,n[e]);if(t)for(var e of t(n))f.call(n,e)&&o(a,e,n[e]);return a},i=(a,n)=>m(a,p(n));/* empty css             *//* empty css               *//* empty css             */const h=`<h4>AI Button with Menu in one of the states</h4>
<div class="fddocs-container fddocs-button-container fddocs-ai-button-container" style="min-height: 400px;">
    <button class="fd-button">
        <i class="sap-icon--ai"></i>
        <span class="fd-button__text">Generate</span>
    </button>

    <button class="fd-button">
        <i class="sap-icon--stop"></i>
        <span class="fd-button__text">Stop Generation</span>
    </button>

    <button class="fd-button">
        <i class="sap-icon--ai"></i>
        <span class="fd-button__text">Revise</span>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button">
                <i class="sap-icon--ai"></i>
                <span class="fd-button__text">Revise</span>
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <nav class="fd-menu" style="overflow: visible;">
                <ul class="fd-menu__list" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Regenerate</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Fix Spelling & Grammar</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <span
                            class="fd-menu__link has-child"
                            aria-controls="EX_AI_1"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="menuitem"
                            onclick="onPopoverClick('EX_AI_1')">
                                <span class="fd-menu__title">Change Tone</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </span>
                        <ul class="fd-menu__sublist" id="EX_AI_1" aria-hidden="true" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Option 1</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Option 2</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Option 3</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <span
                            class="fd-menu__link has-child"
                            aria-controls="EX_AI_2"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="menuitem"
                            onclick="onPopoverClick('EX_AI_2')">
                                <span class="fd-menu__title">Text Length</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </span>
                        <ul class="fd-menu__sublist" id="EX_AI_2" aria-hidden="true" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Short</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Medium</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Long</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Bulleted List</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <span
                            class="fd-menu__link has-child"
                            aria-controls="EX_AI_3"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="menuitem"
                            onclick="onPopoverClick('EX_AI_3')">
                                <span class="fd-menu__title">Translate</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </span>
                        <ul class="fd-menu__sublist" id="EX_AI_3" aria-hidden="true" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">English</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">German</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Spanish</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>


<br><br><br>
<h4>Icon-only AI Button with Menu in one of the states</h4>
<div class="fddocs-container fddocs-button-container fddocs-ai-button-container" style="min-height: 400px;">
    <button class="fd-button" aria-label="Generate">
        <i class="sap-icon--ai"></i>
    </button>

    <button class="fd-button" aria-label="Stop Generation">
        <i class="sap-icon--stop"></i>
    </button>

    <button class="fd-button" aria-label="Revise">
        <i class="sap-icon--ai"></i>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button" aria-label="Revise">
                <i class="sap-icon--ai"></i>
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <nav class="fd-menu" style="overflow: visible;">
                <ul class="fd-menu__list" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Regenerate</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Fix Spelling & Grammar</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <span
                            class="fd-menu__link has-child"
                            aria-controls="EX_AI_1a"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="menuitem"
                            onclick="onPopoverClick('EX_AI_1a')">
                                <span class="fd-menu__title">Change Tone</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </span>
                        <ul class="fd-menu__sublist" id="EX_AI_1a" aria-hidden="true" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Option 1</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Option 2</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Option 3</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <span
                            class="fd-menu__link has-child"
                            aria-controls="EX_AI_2a"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="menuitem"
                            onclick="onPopoverClick('EX_AI_2a')">
                                <span class="fd-menu__title">Text Length</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </span>
                        <ul class="fd-menu__sublist" id="EX_AI_2a" aria-hidden="true" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Short</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Medium</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Long</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Bulleted List</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <span
                            class="fd-menu__link has-child"
                            aria-controls="EX_AI_3a"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="menuitem"
                            onclick="onPopoverClick('EX_AI_3a')">
                                <span class="fd-menu__title">Translate</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </span>
                        <ul class="fd-menu__sublist" id="EX_AI_3a" aria-hidden="true" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">English</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">German</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Spanish</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>`,A={title:"AI/Components/Button",parameters:{description:`The AI button is a button used in AI-related scenarios. It enables users to trigger actions by clicking or tapping the button, or by pressing the Enter key. The AI button can have one or more states. Each state have a name that identifies it and can have text, icon and end icon defined (in any combination) depending on the state purpose. <br>
        <b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},l=()=>h;var _,r,u;l.parameters=i(s({},l.parameters),{docs:i(s({},(_=l.parameters)==null?void 0:_.docs),{source:s({originalSource:"() => aiButtonExampleHtml"},(u=(r=l.parameters)==null?void 0:r.docs)==null?void 0:u.source)})});const E=["AIButton"];export{l as AIButton,E as __namedExportsOrder,A as default};
