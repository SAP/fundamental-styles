var m=Object.defineProperty,c=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var l=(a,n,e)=>n in a?m(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,o=(a,n)=>{for(var e in n||(n={}))f.call(n,e)&&l(a,e,n[e]);if(i)for(var e of i(n))_.call(n,e)&&l(a,e,n[e]);return a},s=(a,n)=>c(a,u(n));/* empty css              *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const h=`<div style="height: 400px;">
    <div style="display:flex;justify-content:space-around;">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button
                    id="asmdi9a789edh"
                    onclick="
                        toggleElAttrs('pQqQR213', ['aria-hidden']);
                        toggleElAttrs('asmdi9a789edh', ['aria-expanded']);
                    "
                    class="fd-button fd-button--transparent"
                    aria-controls="pQqQR213"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-label="More">
                    <i class="sap-icon--overflow"></i>
                </button>
            </div>
            <div class="fd-popover__body" aria-hidden="false" id="pQqQR213">
                <nav aria-label="context menu" class="fd-menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="fd-popover">
            <div class="fd-popover__control">
                <button
                    id="mioas8fahfmanf"
                    onclick="
                        toggleElAttrs('jhqD0558', ['aria-hidden']);
                        toggleElAttrs('mioas8fahfmanf', ['aria-expanded']);
                    "
                    class="fd-button"
                    aria-controls="jhqD0558"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-label="More">More</button>
            </div>
            <div class="fd-popover__body" aria-hidden="false" id="jhqD0558">
                <nav aria-label="more options"class="fd-menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                            </li>
                        <li class="fd-menu__separator" aria-hidden="true"></li>
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
`,w={title:"Patterns/Contextual Menu",parameters:{description:`
The contextual menu component is an opinionated composition of the \`popover\` and \`menu\` components with the use of a styled button.

A More icon or the word, "More", is used to indicate there are more options than room to display them. On click or tap, a contextual menu opens. Composed by the "popover" and "menu" components.

This component is completely composed from other components CSS and doesn't have any of its own.

Implementation Guidelines:

- Only one menu should be open at a give time

- Opening one menu should close all other menus

- Clicking away from the menu should also close the menu
`,tags:["f3","a11y","theme"]}},t=()=>h;t.storyName="Examples with Icon and Button";var d,r,p;t.parameters=s(o({},t.parameters),{docs:s(o({},(d=t.parameters)==null?void 0:d.docs),{source:o({originalSource:"() => withIconAndButtonExampleHtml"},(p=(r=t.parameters)==null?void 0:r.docs)==null?void 0:p.source)})});const O=["WithIconAndButton"];export{t as WithIconAndButton,O as __namedExportsOrder,w as default};
