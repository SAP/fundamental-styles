/* empty css              *//* empty css              *//* empty css                  */const d=`<div class="fd-tokenizer fd-tokenizer--scrollable">
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
`,r=`<div class="fd-tokenizer ">
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
`,k={title:"Components/Tokenizer",parameters:{description:`Tokenizer is a container that wraps multiple tokens. The Tokenizer is used either stand alone or within Input controls such as **MultiInput**.In cozy mode the user can swipe the tokens to the left or right.

##Usage
- Use tokenizer in the **Multi Input**, **Multi Combobox**, or as a standalone component.
        `,tags:["f3","a11y","theme"]}},e=()=>r;e.storyName="Tokenizer";const n=()=>d;n.storyName="Scrollable tokenizer";n.parameters={docs:{description:{story:"The tokenizer can be scrollable by adding the `fd-tokenizer--scrollable` modifier class to the main element. The user can view the tokens by pressing the `Tab` key, then `Shift + Tab` to jump to the next one.\n        "}}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => cozyTokenizerExampleHtml",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"() => scrollableTokenizerExampleHtml",...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const _=["CozyTokenizer","ScrollableTokenizer"];export{e as CozyTokenizer,n as ScrollableTokenizer,_ as __namedExportsOrder,k as default};
