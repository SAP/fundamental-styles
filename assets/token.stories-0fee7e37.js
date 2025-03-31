/* empty css              *//* empty css              */const e=`<style>
    .docs-tokens {
        width: 100%;
    }
    .docs_tokens_item_wrapper {
        display: flex;
    }
    .docs-tokens-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: right;
        align-items: center;
    }
</style>


<section class="docs-tokens">
    <div class="docs-tokens-container">
        <div></div>
        <div>Regular</div>
        <div>Selected</div>
    </div>
    <div class="docs-tokens-container">
        <div>Normal</div>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Hover</div>
        <span class="fd-token is-hover" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-hover" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Focus</div>
        <span class="fd-token is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Hover&Focus</div>
        <span class="fd-token is-hover is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-hover is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Read-only</div>
        <span class="fd-token fd-token--readonly" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
        </span>
        <span></span>
        <!-- <span class="fd-token fd-token--selected fd-token--readonly" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
        </span> -->
    </div>
</section>`,o={title:"Components/Token",parameters:{description:`Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items. The tokenizer is the container that handles the tokens. Tokens can be added, removed, selected, or deselected.

##Usage
- Use tokens only in the **Multi Input** component.

The default token is displayed in grey with text, and a close button that will remove the token when selected.

| **Modifier Class** | **Usage** |
| -----: | :----- | 
| \`fd-token--selected\` | signaling to the user that they are selected |
| \`fd-token--disabled\` | change to disabled coursor |
| \`fd-token--readonly\` | displayed as read-only, indicating that they cannot be interacted with. Read-only tokens should not contain a close button |
        `,tags:["f3","a11y","theme"]}},n=()=>e;n.storyName="Tokens";n.parameters={docs:{description:{story:`The default token is displayed in grey with text, and a close button that will remove the token when selected. It is displayed in cozy mode, which is ideal for mobile and tablet screens.
        `}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...n.parameters?.docs?.source}}};const a=["Primary"];export{n as Primary,a as __namedExportsOrder,o as default};
