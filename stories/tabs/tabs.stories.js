export default {
    title: 'Components/Tabs',
    parameters: {
        tags: ['f3', 'a11y', 'theme'],
        description: `Tabs are based on the folder metaphor and used to separate content into different sections. Tabs should be ordered based on priority to create visual hierarchy.

##Usage
**Use tabs if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.


**Do not use tabs if:**

- You plan to use only one single tab.


##Horizontal padding

By default, tabs have no horizontal paddings. If horizontal paddings are added, they should behave responsively based on the screen width.

These modifier classes are used to display horizontal padding for tabs in various sizes.

| rem&nbsp;&nbsp; | Min-width&nbsp;&nbsp; | Max-width&nbsp;&nbsp; | Modifier class |
| ---- | ---------- | ---------- | ----------- |
| 1rem&nbsp;&nbsp; | _n/a_ | 599 px | <code>fd-tabs--s</code> |
| 2rem&nbsp;&nbsp; | 600 px | 1023 px | <code>fd-tabs--m</code> |
| 2rem&nbsp;&nbsp; | 1024 px | 1439 px| <code>fd-tabs--l</code> |
| 3rem&nbsp;&nbsp; | 1440 px | _n/a_ | <code>fd-tabs--xl</code> |

<br>
        `,
        docs: {
            iframeHeight: 150
        },
        components: ['button', 'tabs', 'icon']
    }
};

export const primary = () => `
<div class="fd-tabs" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                tabindex="0" 
                class="fd-tabs__link" 
                aria-controls="fuCwV550" 
                href="#fuCwV550">
                <span class="fd-tabs__tag">Link</span>
            </button>
        </div>
        <div class="fd-tabs__item" aria-selected="true">
            <button 
                role="tab" 
                tabindex="0" 
                class="fd-tabs__link is-selected" 
                aria-controls="AiWfz165" 
                href="#AiWfz165">
                <span class="fd-tabs__tag">Selected</span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                tabindex="0" 
                class="fd-tabs__link" 
                aria-controls="7ae0T849" 
                href="#7ae0T849">
                <span class="fd-tabs__tag">Link</span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
        Nullam ut
    </div>
</div>
`;

primary.storyName = 'Default';
primary.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `By default, tabs are displayed in a bar and are either inactive or active (highlighted in blue). The bar can also contain actions that apply to the whole page. The example below illustrates the tabs component in cozy mode with no horizontal padding.
        `
    }
};

export const tabWithCounters = () => `
<div class="fd-tabs fd-tabs--xl fd-tabs--compact" role="tablist">
    <div class="fd-tabs__wrapper">
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="d9vOir" 
                href="#d9vOir">
                <p class="fd-tabs__count">13</p>
                <span class="fd-tabs__tag">Link</span>
            </button>
        </div>
        <div class="fd-tabs__item" aria-selected="true">
            <button 
                role="tab" 
                class="fd-tabs__link is-selected" 
                href="#bSj6ft" 
                aria-controls="bSj6ft">
                <p class="fd-tabs__count">1</p>
                <span class="fd-tabs__tag">Selected</span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                href="#VrHfHi" 
                aria-controls="VrHfHi">
                <p class="fd-tabs__count">97</p>
                <span class="fd-tabs__tag">Link</span>
            </button>
        </div>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="d9vOir" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="bSj6ft" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="VrHfHi" role="tabpanel">
        Nullam ut
    </div>
</div>
`;

tabWithCounters.storyName = 'Counters';
tabWithCounters.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed with counters to indicate that there are a number of resources the user can or should access. To display counters, wrap the \`fd-tabs__count\` class in paragraph tags below the \`fd-tabs__link\` element. 
        
In the example below, the tabs component is optimized for an extra-large screen with the \`fd-tabs--xl\` modifier class, which adds 3rem horizontal paddings.
        `
    }
};

export const navTab = () => `
<nav class="fd-tabs fd-tabs--l" role="navigation">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <span class="fd-tabs__item">
            <button class="fd-tabs__link" aria-controls="kf8369" href="#kf8369">
                <span class="fd-tabs__tag">Link</span>
            </button>
        </span>
        <span class="fd-tabs__item" aria-selected="true">
            <button class="fd-tabs__link is-selected" aria-controls="9uQ282" href="#9uQ282">
                <span class="fd-tabs__tag">Selected</span>
            </button>
        </span>
        <span class="fd-tabs__item">
            <button class="fd-tabs__link" aria-controls="DGl707" href="#DGl707">
                <span class="fd-tabs__tag">Link</span>
            </button>
        </span>
    </div>
    <span class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </span>
</nav>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
        Nullam ut
    </div>
</div>
`;

navTab.storyName = 'Navigable';
navTab.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be navigable by applying the \`role=”navigation”\` attribute to the main element.
    `
    }
};


export const iconOnly = () => `
<div class="fd-tabs fd-tabs--s fd-tabs--icon-only" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="pliA92" 
                href="#pliA92">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">12</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item" aria-selected="true">
            <button 
                role="tab" 
                class="fd-tabs__link is-selected" 
                aria-controls="ZAN8Hd" 
                href="#ZAN8Hd">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">15</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="QrQ5Cl" 
                href="#QrQ5Cl">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">1</p>
                </span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="pliA92" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="ZAN8Hd" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="QrQ5Cl" role="tabpanel">
        Nullam ut
    </div>
</div>
`;

iconOnly.storyName = 'Icon';
iconOnly.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can display icons instead of text with the \` fd-tabs__icon\` class (see **Icon** for a list of available icons). To display icon tabs without text, you will also need to add the \`fd-tabs--icon-only\` modifier class to the main element.
    `
    }
};

export const compactIconOnly = () => `
<div class="fd-tabs fd-tabs--xl fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item fd-tabs__item--icon-only">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="0bT4aB" 
                href="#0bT4aB">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">5</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item" aria-selected="true">
            <button 
                role="tab" 
                class="fd-tabs__link is-selected" 
                aria-controls="kzRyN3" 
                href="#kzRyN3">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">78</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="f2epu6" 
                href="#f2epu6">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">43</p>
                </span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="0bT4aB" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="kzRyN3" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="f2epu6" role="tabpanel">
        Nullam ut
    </div>
</div>
`;

compactIconOnly.storyName = 'Icon (compact)';
compactIconOnly.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed with icons in compact mode. To display compact tabs, add the \`fd-tabs--compact\` modifier class to the main element. See example above on how to display icon tabs.
    `
    }
};

export const processMode = () => `
<div class="fd-tabs fd-tabs--l fd-tabs--process" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="NoQLy6" 
                href="#NoQLy6">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                </span>
                <div class="fd-tabs__process">
                    <span class="fd-tabs__label">58 of 122 items</span>
                    <span class="fd-tabs__label">Description</span>
                </div>
            </button>
            <span class="fd-tabs__process-icon"></span>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="h4yBDR" 
                href="#h4yBDR">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                </span>
                <div class="fd-tabs__process">
                    <span class="fd-tabs__label">22 of 122 items</span>
                    <span class="fd-tabs__label">Description</span>
                </div>
            </button>
            <span class="fd-tabs__process-icon"></span>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="nd1EMQ" 
                href="#nd1EMQ">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                </span>
                <div class="fd-tabs__process">
                    <span class="fd-tabs__label">42 of 122 items</span>
                    <span class="fd-tabs__label">Description</span>
                </div>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="NoQLy6" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="h4yBDR" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="nd1EMQ" role="tabpanel">
        Tincidunt nunc
    </div>
</div>
`;

processMode.storyName = 'Process mode';
processMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed in subsequent steps, indicating to the user that there is a process to follow. To display tabs in process mode, add the \`fd-tabs--process\` modifier class to the main element.
    `
    }
};

export const compactProcessMode = () => `
<div class="fd-tabs fd-tabs--l fd-tabs--process fd-tabs--compact" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="LHsxsZ" 
                href="#LHsxsZ">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                </span>
                <div class="fd-tabs__process">
                    <span class="fd-tabs__label">58 of 122 items</span>
                    <span class="fd-tabs__label">Description</span>
                </div>
            </button>
            <span class="fd-tabs__process-icon"></span>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="ZQvAjG" 
                href="#ZQvAjG">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                </span>
                <div class="fd-tabs__process">
                    <span class="fd-tabs__label">42 of 122 items</span>
                    <span class="fd-tabs__label">Description</span>
                </div>
            </button>
            <span class="fd-tabs__process-icon"></span>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="wdqPV9" 
                href="#wdqPV9">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                </span>
                <div class="fd-tabs__process">
                    <span class="fd-tabs__label">22 of 122 items</span>
                    <span class="fd-tabs__label">Description</span>
                </div>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="LHsxsZ" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="ZQvAjG" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="wdqPV9" role="tabpanel">
        Nullam ut
    </div>
</div>
`;

compactProcessMode.storyName = 'Process mode (compact)';
compactProcessMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed in subsequent steps while in compact mode. To display compact tabs in process mode, add the \`fd-tabs--process\` and \`fd-tabs--compact\` modifier classes to the main element.
    `
    }
};

export const filterMode = () => `
<div class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item fd-tabs__item--header">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="5ZkDVE" 
                href="#5ZkDVE">
                <span class="fd-tabs__header">
                    <span class="fd-tabs__counter-header">100</span>
                    <span class="fd-tabs__label">products</span>
                </span>
            </button>
        </div>
        <div class="fd-tabs__separator"></div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="znvnwr" 
                href="#znvnwr">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">35</p>
                </span>
                <span class="fd-tabs__label">Description</span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="oyYpL7" 
                href="#oyYpL7">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">5</p>
                </span>
                <span class="fd-tabs__label">Description</span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="gRpu9H" 
                href="#gRpu9H">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">60</p>
                </span>
                <span class="fd-tabs__label">Description</span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
        Nullam ut
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
        Occaecat cupidatat
    </div>
</div>
`;

filterMode.storyName = 'Filter mode';
filterMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed in filter mode, indicating to the user that a value has been filtered into separate tabs. To display tabs in filter mode, add the \`fd-tabs--filter\` modifier class to the main element.
    `
    }
};

export const compactFilterMode = () => `
<div class="fd-tabs fd-tabs--l fd-tabs--filter fd-tabs--compact" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item fd-tabs__item--header">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="YETAv8"
                href="#YETAv8">
                <span class="fd-tabs__header">
                    <span class="fd-tabs__counter-header">150</span>
                    <span class="fd-tabs__label">products</span>
                </span>
            </button>
        </div>
        <div class="fd-tabs__separator"></div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="eu3WeD"
                href="#eu3WeD">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">3</p>
                </span>
                <span class="fd-tabs__label">Description</span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="VqJcYO" 
                href="#VqJcYO">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">40</p>
                </span>
                <span class="fd-tabs__label">Description</span>
            </button>
        </div>
        <div class="fd-tabs__item">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="ceoDu7" 
                href="#ceoDu7">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">107</p>
                </span>
                <span class="fd-tabs__label">Description</span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="YETAv8" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="eu3WeD" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="VqJcYO" role="tabpanel">
        Nullam ut
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="ceoDu7" role="tabpanel">
        Occaecat cupidatat
    </div>
</div>
`;

compactFilterMode.storyName = 'Filter mode (compact)';
compactFilterMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed in compact mode while in filter mode. To display compact tabs in filter mode, add the \`fd-tabs--filter\` and \`fd-tabs--compact\` modifier classes to the main element.
    `
    }
};

export const semanticMode = () => `
<div class="fd-tabs fd-tabs--l fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item fd-tabs__item--success">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="XTsSDD" 
                href="#XTsSDD">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">54</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--warning" aria-selected="true">
        <button 
            role="tab" 
            class="fd-tabs__link is-selected" 
            aria-controls="DomvG6"
            href="#DomvG6">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">71</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--information">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="DqIStt"
                href="#DqIStt">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">23</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--error" >
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="bRCSzS"
                href="#bRCSzS">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">4</p>
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--neutral" >
            <button 
                role="tab" 
                class="fd-tabs__link"
                aria-controls="xMN6I9" 
                href="#xMN6I9">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">100</p>
                </span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="XTsSDD" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="DomvG6" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="DqIStt" role="tabpanel">
        Nullam ut
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="bRCSzS" role="tabpanel">
        Quaerat voluptatem
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="xMN6I9" role="tabpanel">
        Occaecat cupidatat
    </div>
</div>
`;

semanticMode.storyName = 'Semantic mode';
semanticMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed with semantic colors to indicate a status. To display semantic tabs, add the following modifier classes to the \`fd-tabs__item\` elements:

State | Modifier class
:------- | :---------------
Success | \`fd-tabs__item--success\`
Warning | \`fd-tabs__item--warning\`
Information | \`fd-tabs__item--information\`
Error | \`fd-tabs__item--error\`
Neutral | \`fd-tabs__item--neutral\`  
        `
    }
};


export const semanticFilterMode = () => `
<div class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item fd-tabs__item--header">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="5ZkDVE"
                href="#5ZkDVE">
                <span class="fd-tabs__header">
                    <span class="fd-tabs__counter-header">150</span>
                    <span class="fd-tabs__label">products</span>
                </span>
            </button>
        </div>
        <div class="fd-tabs__separator"></div>
        <div class="fd-tabs__item fd-tabs__item--success" >
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="znvnwr"
                href="#znvnwr">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">35</p>
                </span>
                <span class="fd-tabs__label">Success</span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--warning" >
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="oyYpL7"
                href="#oyYpL7">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">5</p>
                </span>
                <span class="fd-tabs__label">Warning</span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--information">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="gRpu9H"
                href="#gRpu9H">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">60</p>
                </span>
                <span class="fd-tabs__label">Information</span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--error">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="gRpu1A"
                href="#gRpu1A">
                <span class="fd-tabs__icon">
                    <i class="sap-icon--cart" role="presentation"></i>
                    <p class="fd-tabs__count">50</p>
                </span>
                <span class="fd-tabs__label">Error</span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
        Nullam ut
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
        Occaecat cupidatat
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="gRpu1A" role="tabpanel">
        Nullam sit
    </div>
</div>
`;

semanticFilterMode.storyName = 'Semantic filter mode';
semanticFilterMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed in filter mode with semantic colors. As detailed in the previous examples, add the \`fd-tabs--filter\` modifier class to the main element and add the semantic modifier classes to the \`fd-tabs__item\` elements (see **semantic mode** example for modifier class names). 
        `
    }
};

export const semanticInline = () => `
<div class="fd-tabs fd-tabs--l" role="tablist">
    <div class="fd-tabs__wrapper fd-tabs__wrapper--collapsible">
        <div class="fd-tabs__item fd-tabs__item--error">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="5abyKZ"
                href="#5abyKZ">
                <p class="fd-tabs__count">13</p>
                <span class="fd-tabs__tag">
                    Error
                </span>
            </button>
        </div>
        <div aria-selected="true" class="fd-tabs__item fd-tabs__item--information">
            <button 
                role="tab" 
                class="fd-tabs__link is-selected"
                aria-controls="wupC7s"
                href="#wupC7s">
                <p class="fd-tabs__count">24</p>
                <span class="fd-tabs__tag">
                    Information
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--warning">
            <button 
                role="tab" 
                class="fd-tabs__link"
                aria-controls="XlKpQM" 
                href="#XlKpQM">
                <p class="fd-tabs__count">31</p>
                <span class="fd-tabs__tag">
                    Warning
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--success">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="3dUJAI" 
                href="#3dUJAI">
                <p class="fd-tabs__count">65</p>
                <span class="fd-tabs__tag">
                    Success
                </span>
            </button>
        </div>
        <div class="fd-tabs__item fd-tabs__item--neutral">
            <button 
                role="tab" 
                class="fd-tabs__link" 
                aria-controls="TWlAup" 
                href="#TWlAup">
                <p class="fd-tabs__count">159</p>
                <span class="fd-tabs__tag">
                    Neutral
                </span>
            </button>
        </div>
    </div>
    <div class="fd-tabs__item fd-tabs__item--overflow">
        <button 
            role="tab" 
            class="fd-tabs__link" 
            tabindex="0">
            <span class="fd-tabs__tag">More</span>
            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
        </button>
    </div>
</div>
<div class="fd-tabs__content">
    <div class="fd-tabs__panel" aria-expanded="false" id="5abyKZ" role="tabpanel">
        Lorem ipsum
    </div>
    <div class="fd-tabs__panel" aria-expanded="true" id="wupC7s" role="tabpanel">
        Dolor sit
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="XlKpQM" role="tabpanel">
        Nullam ut
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="3dUJAI" role="tabpanel">
        Tincidunt nunc
    </div>
    <div class="fd-tabs__panel" aria-expanded="false" id="TWlAup" role="tabpanel">
        Occaecat cupidatat
    </div>
</div>
`;

semanticInline.storyName = 'Semantic inline';
semanticInline.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Tabs can be displayed with inline text in semantic colors. To display inline text tabs, add the \`fd-tabs__tag\` class below the \`fd-tabs__link\` element. 
        `
    }
};
