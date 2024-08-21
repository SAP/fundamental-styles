var u=Object.defineProperty,f=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var d=(t,n,e)=>n in t?u(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,o=(t,n)=>{for(var e in n||(n={}))T.call(n,e)&&d(t,e,n[e]);if(i)for(var e of i(n))m.call(n,e)&&d(t,e,n[e]);return t},a=(t,n)=>f(t,x(n));/* empty css              *//* empty css              *//* empty css                  */const z=`<div class="fd-tokenizer fd-tokenizer--scrollable">
    <div class="fd-tokenizer__inner" id="tokenizer-scrollable">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 1
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 2
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 3
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 4
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 5
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 6
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 7
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 8
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 9
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Long Token Option 10
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
`,h=`<div class="fd-tokenizer ">
    <div class="fd-tokenizer__inner">
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" placeholder="Type Ahead"/>
    </div>
</div>
<br/><br/>
<div class="fd-tokenizer ">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" placeholder="Type Ahead"/>
    </div>
</div>
<br/><br/>
<div class="fd-tokenizer is-focus">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
`,O={title:"Components/Tokenizer",parameters:{description:`Tokenizer is a container that wraps multiple tokens. The Tokenizer is used either stand alone or within Input controls such as **MultiInput**.In cozy mode the user can swipe the tokens to the left or right.

##Usage
- Use tokenizer in the **Multi Input**, **Multi Combobox**, or as a standalone component.
        `,tags:["f3","a11y","theme"]}},l=()=>h;l.storyName="Tokenizer";const s=()=>z;s.storyName="Scrollable tokenizer";s.parameters={docs:{description:{story:"The tokenizer can be scrollable by adding the `fd-tokenizer--scrollable` modifier class to the main element. The user can view the tokens by pressing the `Tab` key, then `Shift + Tab` to jump to the next one.\n        "}}};var r,c,p;l.parameters=a(o({},l.parameters),{docs:a(o({},(r=l.parameters)==null?void 0:r.docs),{source:o({originalSource:"() => cozyTokenizerExampleHtml"},(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source)})});var b,k,_;s.parameters=a(o({},s.parameters),{docs:a(o({},(b=s.parameters)==null?void 0:b.docs),{source:o({originalSource:"() => scrollableTokenizerExampleHtml"},(_=(k=s.parameters)==null?void 0:k.docs)==null?void 0:_.source)})});const S=["CozyTokenizer","ScrollableTokenizer"];export{l as CozyTokenizer,s as ScrollableTokenizer,S as __namedExportsOrder,O as default};
