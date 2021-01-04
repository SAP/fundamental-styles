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
<ul class="fd-tabs" role="tablist">
    <li role="listitem" class="fd-tabs__item" aria-controls="fuCwV550" aria-selected="false" id="tab-001">
        <button role="tab" class="fd-tabs__link" href="#fuCwV550" aria-label="tab-button">
            <span class="fd-tabs__tag">
                Link
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-selected="true" aria-controls="AiWfz165" id="tab-002">
        <button role="tab" class="fd-tabs__link is-selected" href="#AiWfz165" aria-label="tab-button">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="7ae0T849" aria-selected="false" id="tab-003">
        <button role="tab" class="fd-tabs__link" href="#7ae0T849" aria-label="tab-button">
            <span class="fd-tabs__tag">
                Link
            </span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-001" class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-002" class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-003" class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
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
<ul class="fd-tabs fd-tabs--xl fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item" aria-controls="d9vOir" aria-selected="false" id="tab-004">
        <button role="tab" class="fd-tabs__link" href="#d9vOir" aria-label="tab-button">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="bSj6ft" aria-selected="true" id="tab-005">
        <button role="tab" class="fd-tabs__link is-selected" href="#bSj6ft" aria-label="tab-button">
            <p class="fd-tabs__count">1</p>
            <span class="fd-tabs__tag">
                Selected
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="VrHfHi" aria-selected="false" id="tab-006">
        <button role="tab" class="fd-tabs__link" href="#VrHfHi" aria-label="tab-button">
            <p class="fd-tabs__count">97</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-004" class="fd-tabs__panel" aria-expanded="false" id="d9vOir" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-005" class="fd-tabs__panel" aria-expanded="true" id="bSj6ft" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-006" class="fd-tabs__panel" aria-expanded="false" id="VrHfHi" role="tabpanel">
    Nullam ut
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
    <span role="listitem" class="fd-tabs__item" aria-controls="kf8369" id="tab-007" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#kf8369" aria-label="tab-button">
            <span class="fd-tabs__tag">
                Link
            </span>
        </button>
    </span>
    <span role="listitem" class="fd-tabs__item" aria-controls="9uQ282" id="tab-008" aria-selected="true">
        <button role="tab" class="fd-tabs__link is-selected" href="#9uQ282" aria-label="tab-button">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </button>
    </span>
    <span role="listitem" class="fd-tabs__item" aria-controls="DGl707" id="tab-009" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#DGl707" aria-label="tab-button">
            <span class="fd-tabs__tag">
                Link
            </span>
        </button>
    </span>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</nav>
<div aria-labelledby="tab-007" class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-008" class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-009" class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
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
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only" role="tablist">
    <li role="listitem" class="fd-tabs__item" aria-controls="pliA92" id="tab-010" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#pliA92" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">12</p>
            </span>
        </button>
    </li>
    <li role="listitem" aria-selected="true" class="fd-tabs__item" aria-controls="ZAN8Hd" id="tab-011">
      <button role="tab" class="fd-tabs__link is-selected" href="#ZAN8Hd" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">15</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="QrQ5Cl" id="tab-012" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#QrQ5Cl" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">1</p>
            </span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-010" class="fd-tabs__panel" aria-expanded="false" id="pliA92" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-011" class="fd-tabs__panel" aria-expanded="true" id="ZAN8Hd" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-012" class="fd-tabs__panel" aria-expanded="false" id="QrQ5Cl" role="tabpanel">
    Nullam ut
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
<ul class="fd-tabs fd-tabs--xl fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--icon-only" aria-controls="0bT4aB" aria-selected="false" id="tab-013">
        <button role="tab" class="fd-tabs__link" href="#0bT4aB" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-selected="true" aria-controls="kzRyN3" id="tab-014">
      <button role="tab" class="fd-tabs__link is-selected" href="#kzRyN3" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">78</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="f2epu6" aria-selected="false" id="tab-015">
        <button role="tab" class="fd-tabs__link" href="#f2epu6" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">43</p>
            </span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-013" class="fd-tabs__panel" aria-expanded="false" id="0bT4aB" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-014" class="fd-tabs__panel" aria-expanded="true" id="kzRyN3" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-015" class="fd-tabs__panel" aria-expanded="false" id="f2epu6" role="tabpanel">
    Nullam ut
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
<ul class="fd-tabs fd-tabs--l fd-tabs--process" role="tablist">
    <li role="listitem" class="fd-tabs__item" aria-controls="NoQLy6" id="tab-016" aria-selected="true">
        <button role="tab" class="fd-tabs__link is-selected" href="#NoQLy6" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">58 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </button>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="h4yBDR" id="tab-017" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#h4yBDR" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">22 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </button>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="nd1EMQ" id="tab-018" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#nd1EMQ" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">42 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-right" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-016" class="fd-tabs__panel" aria-expanded="false" id="NoQLy6" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-017" class="fd-tabs__panel" aria-expanded="true" id="h4yBDR" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-018" class="fd-tabs__panel" aria-expanded="false" id="nd1EMQ" role="tabpanel">
    Tincidunt nunc
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
<ul class="fd-tabs fd-tabs--l fd-tabs--process fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item" aria-controls="LHsxsZ" id="tab-019" aria-selected="true">
        <button role="tab" class="fd-tabs__link is-selected" href="#LHsxsZ" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">58 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </button>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="ZQvAjG" id="tab-020" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#ZQvAjG" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">42 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </button>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="wdqPV9" id="tab-021" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#wdqPV9" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">22 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-019" class="fd-tabs__panel" aria-expanded="false" id="LHsxsZ" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-020" class="fd-tabs__panel" aria-expanded="true" id="ZQvAjG" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-021" class="fd-tabs__panel" aria-expanded="false" id="wdqPV9" role="tabpanel">
    Nullam ut
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
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--header" aria-controls="5ZkDVE" id="tab-022">
        <button role="tab" class="fd-tabs__link" href="#5ZkDVE" aria-label="tab-button">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">100</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </button>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="listitem" class="fd-tabs__item" aria-controls="znvnwr" id="tab-023" aria-selected="true">
        <button role="tab" class="fd-tabs__link is-selected" href="#znvnwr" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="oyYpL7" id="tab-024" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#oyYpL7" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="gRpu9H" id="tab-025" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#gRpu9H" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-022" class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-023" class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-024" class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div aria-labelledby="tab-025" class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
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
<ul class="fd-tabs fd-tabs--l fd-tabs--filter fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--header" aria-controls="YETAv8" id="tab-026">
        <button role="tab" class="fd-tabs__link" href="#YETAv8" aria-label="tab-button">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </button>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="listitem" class="fd-tabs__item" aria-controls="eu3WeD" id="tab-027" aria-selected="true">
        <button role="tab" class="fd-tabs__link is-selected" href="#eu3WeD" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">3</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="VqJcYO" id="tab-028" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#VqJcYO" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">40</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item" aria-controls="ceoDu7" id="tab-029" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#ceoDu7" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">107</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-026" class="fd-tabs__panel" aria-expanded="false" id="YETAv8" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-027" class="fd-tabs__panel" aria-expanded="true" id="eu3WeD" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-028" class="fd-tabs__panel" aria-expanded="false" id="VqJcYO" role="tabpanel">
    Nullam ut
</div>
<div aria-labelledby="tab-029" class="fd-tabs__panel" aria-expanded="false" id="ceoDu7" role="tabpanel">
    Occaecat cupidatat
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
<ul class="fd-tabs fd-tabs--l fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--success" aria-controls="XTsSDD" id="tab-030" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#XTsSDD" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">54</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--warning" aria-selected="true" aria-controls="DomvG6" id="tab-031">
      <button class="fd-tabs__link is-selected" href="#DomvG6" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">71</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--information" aria-controls="DqIStt" id="tab-032" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#DqIStt" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">23</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--error" aria-controls="bRCSzS" id="tab-033" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#bRCSzS" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">4</p>
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--neutral" aria-controls="xMN6I9" id="tab-034" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#xMN6I9" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">100</p>
            </span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-030" class="fd-tabs__panel" aria-expanded="false" id="XTsSDD" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-031" class="fd-tabs__panel" aria-expanded="true" id="DomvG6" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-032" class="fd-tabs__panel" aria-expanded="false" id="DqIStt" role="tabpanel">
    Nullam ut
</div>
<div aria-labelledby="tab-033" class="fd-tabs__panel" aria-expanded="false" id="bRCSzS" role="tabpanel">
    Quaerat voluptatem
</div>
<div aria-labelledby="tab-034" class="fd-tabs__panel" aria-expanded="false" id="xMN6I9" role="tabpanel">
    Occaecat cupidatat
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
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--header" aria-controls="5ZkDVE" id="tab-035">
        <button role="tab" class="fd-tabs__link" href="#5ZkDVE" aria-label="tab-button">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </button>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--success" aria-controls="znvnwr" id="tab-036" aria-selected="true">
        <button role="tab" class="fd-tabs__link is-selected" href="#znvnwr" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Success</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--warning" aria-controls="oyYpL7" id="tab-037" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#oyYpL7" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Warning</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--information" aria-controls="gRpu9H" id="tab-038" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#gRpu9H" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Information</span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--error" aria-controls="gRpu1A" id="tab-039" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#gRpu1A" aria-label="tab-button">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">50</p>
            </span>
            <span class="fd-tabs__label">Error</span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-035" class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-036" class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-037" class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div aria-labelledby="tab-038" class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
</div>
<div aria-labelledby="tab-039" class="fd-tabs__panel" aria-expanded="false" id="gRpu1A" role="tabpanel">
    Nullam sit
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
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--error" aria-controls="5abyKZ" id="tab-040" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#5abyKZ" aria-label="tab-button">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Error
            </span>
        </button>
    </li>
    <li role="listitem" aria-selected="true" class="fd-tabs__item fd-tabs__item--information" aria-controls="wupC7s" id="tab-041">
        <button class="fd-tabs__link is-selected" href="#wupC7s" aria-label="tab-button">
            <p class="fd-tabs__count">24</p>
            <span class="fd-tabs__tag">
                Information
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--warning" aria-controls="XlKpQM" id="tab-042" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#XlKpQM" aria-label="tab-button">
            <p class="fd-tabs__count">31</p>
            <span class="fd-tabs__tag">
                Warning
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--success">
        <button role="tab" class="fd-tabs__link" aria-controls="3dUJAI" href="#3dUJAI" id="tab-043" aria-label="tab-button" aria-selected="false">
            <p class="fd-tabs__count">65</p>
            <span class="fd-tabs__tag">
                Success
            </span>
        </button>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--neutral" aria-controls="TWlAup" id="tab-044" aria-selected="false">
        <button role="tab" class="fd-tabs__link" href="#TWlAup" aria-label="tab-button">
            <p class="fd-tabs__count">159</p>
            <span class="fd-tabs__tag">
                Neutral
            </span>
        </button>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div aria-labelledby="tab-040" class="fd-tabs__panel" aria-expanded="false" id="5abyKZ" role="tabpanel">
    Lorem ipsum
</div>
<div aria-labelledby="tab-041" class="fd-tabs__panel" aria-expanded="true" id="wupC7s" role="tabpanel">
    Dolor sit
</div>
<div aria-labelledby="tab-042" class="fd-tabs__panel" aria-expanded="false" id="XlKpQM" role="tabpanel">
    Nullam ut
</div>
<div aria-labelledby="tab-043" class="fd-tabs__panel" aria-expanded="false" id="3dUJAI" role="tabpanel">
    Tincidunt nunc
</div>
<div aria-labelledby="tab-044" class="fd-tabs__panel" aria-expanded="false" id="TWlAup" role="tabpanel">
    Occaecat cupidatat
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
