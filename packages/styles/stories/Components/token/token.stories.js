import '../../../src/input.scss';
import '../../../src/token.scss';
import '../../../src/tokenizer.scss';
export default {
    title: 'Components/Token',
    parameters: {
        description: `Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items. The tokenizer is the container that handles the tokens. Tokens can be added, removed, selected, or deselected.

##Usage
- Use tokens only in the **Multi Input** component.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
</span>
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Lorem token close"></button>
</span>
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Dolor token close"></button>
</span>
<span class="fd-token" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Filter token close"></button>
</span>
`;

Primary.storyName = 'Default';
Primary.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `The default token is displayed in grey with text, and a close button that will remove the token when selected. It is displayed in cozy mode, which is ideal for mobile and tablet screens.
        `
        }
    }
};

export const Selected = () => `<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
</span>
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Lorem token close"></button>
</span>
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Dolor token close"></button>
</span>
<span class="fd-token fd-token--selected" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Filter token close"></button>
</span>
`;

Selected.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `Tokens can be displayed in blue, signaling to the user that they are selected. To display selected tokens, add the \`fd-token--selected\` modifier class to the main element.
        `
        }
    }
};

export const ReadOnlyToken = () => `<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
</span>
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
</span>
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
</span>
<span class="fd-token fd-token--readonly" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
</span>
`;

ReadOnlyToken.storyName = 'Read-only';
ReadOnlyToken.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `Tokens can be displayed as read-only, indicating that they cannot be interacted with. Read-only tokens should not contain a close button. To display tokens as read-only, add the \`fd-token--readonly\` modifier class to the main element.
        `
        }
    }
};

export const CompactToken = () => `<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Bibendum
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
</span>
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Lorem
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Lorem token close"></button>
</span>
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Dolor
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Dolor token close"></button>
</span>
<span class="fd-token fd-token--compact" role="button" tabindex="0">
    <span class="fd-token__text">
        Filter
    </span>
    <button class="fd-token__close" tabindex="-1" aria-label="Filter token close"></button>
</span>
`;

CompactToken.storyName = 'Compact';
CompactToken.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `Tokens can be displayed in compact mode, which is ideal for larger desktop screens. To display compact tokens, add the \`fd-token--compact\` modifier class to the main element.
        `
        }
    }
};

export const CozyTokenizer = () => `<div class="fd-tokenizer ">
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
`;

CozyTokenizer.storyName = 'Tokenizer';
CozyTokenizer.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `Tokenizer is a container for tokens, which is often placed inside **Multi-Input** components. It is displayed in cozy mode; therefore, the user can swipe the tokens to the left or right.

To enable focus, the \`is-focus\` class must be added the container.
        `
        }
    }
};

export const CompactTokenizer = () => `<div class="fd-tokenizer fd-tokenizer--compact">
    <div class="fd-tokenizer__inner">
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly fd-token--compact">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-input--compact fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
<br/><br/>
<div class="fd-tokenizer fd-tokenizer--compact is-focus">
    <div class="fd-tokenizer__inner">
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--compact" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly fd-token--compact">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-input--compact fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
`;

CompactTokenizer.storyName = 'Compact tokenizer';
CompactTokenizer.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `The tokenizer can be displayed in compact mode to be viewed on larger desktop screens. Contrary to the previous example, the user can view the tokens by pressing the right or left arrow keys.

To display a compact tokenizer, add the \`fd-tokenizer--compact\` modifier class to the main element.
        `
        }
    }
};

export const ScrollableTokenizer = () => `<div class="fd-tokenizer fd-tokenizer--scrollable">
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
`;

ScrollableTokenizer.storyName = 'Scrollable tokenizer';
ScrollableTokenizer.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `The tokenizer can be scrollable by adding the \`fd-tokenizer--scrollable\` modifier class to the main element. The user can view the tokens by pressing the \`Tab\` key, then \`Shift + Tab\` to jump to the next one.
        `
        }
    }
};
