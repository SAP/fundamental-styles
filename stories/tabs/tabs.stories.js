import '../../dist/tabs.css';
import '../../dist/icon.css';

export default {
    title: 'Components/Tabs',
    parameters: {
        tags: ['f3', 'a11y', 'theme'],
        description: `
Tabs are based on a folder metaphor and used to separate content into different sections. 
Tabs should be ordered to create a visual hierarchy based on priority.
        `,
        docs: {
            iframeHeight: 150
        }
    }
};


export const primary = () => `
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
`;

primary.storyName = 'Default';


export const tabWithCounters = () => `
<ul class="fd-tabs fd-tabs--s fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="d9vOir" href="#d9vOir" role="tab">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="bSj6ft" aria-selected="true" href="#bSj6ft" role="tab">
            <p class="fd-tabs__count">1</p>
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="VrHfHi" href="#VrHfHi" role="tab">
            <p class="fd-tabs__count">97</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="d9vOir" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="bSj6ft" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="VrHfHi" role="tabpanel">
    Nullam ut
</div>
`;




export const navTab = () => `
<nav class="fd-tabs fd-tabs--l" role="navigation">
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="kf8369" href="#kf8369">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link is-selected" aria-controls="9uQ282" href="#9uQ282">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="DGl707" href="#DGl707">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </span>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</nav>
<div class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
</div>
`;


navTab.parameters = {
    storyDescription: 'Standard Tabs with `nav` element'
};




export const iconOnly = () => `
<ul class="fd-tabs fd-tabs--l fd-tabs--icon-only" role="tablist">
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="pliA92" href="#pliA92" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">12</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="ZAN8Hd" aria-selected="true" href="#ZAN8Hd" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">15</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="QrQ5Cl" href="#QrQ5Cl" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="pliA92" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="ZAN8Hd" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="QrQ5Cl" role="tabpanel">
    Nullam ut
</div>
`;


iconOnly.parameters = {
    storyDescription: 'Standard Tabs with `nav` element'
};




export const compactIconOnly = () => `
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--icon-only">
        <a class="fd-tabs__link" aria-controls="0bT4aB" href="#0bT4aB" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="kzRyN3" aria-selected="true" href="#kzRyN3" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">78</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="f2epu6" href="#f2epu6" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">43</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="0bT4aB" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="kzRyN3" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="f2epu6" role="tabpanel">
    Nullam ut
</div>
`;




export const processMode = () => `
<ul class="fd-tabs fd-tabs--l fd-tabs--process" role="tablist">
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="NoQLy6" href="#NoQLy6" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">58 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="h4yBDR" href="#h4yBDR" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">22 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="nd1EMQ" href="#nd1EMQ" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">42 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-right" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="NoQLy6" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="h4yBDR" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="nd1EMQ" role="tabpanel">
    Tincidunt nunc
</div>
`;





export const compactProcessMode = () => `
<ul class="fd-tabs fd-tabs--s fd-tabs--process fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="LHsxsZ" href="#LHsxsZ" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">58 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="ZQvAjG" href="#ZQvAjG" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">42 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="wdqPV9" href="#wdqPV9" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">22 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="LHsxsZ" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="ZQvAjG" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="wdqPV9" role="tabpanel">
    Nullam ut
</div>
`;


export const filterMode = () => `
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--header">
        <a class="fd-tabs__link" aria-controls="5ZkDVE" href="#5ZkDVE" role="tab">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">100</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="znvnwr" href="#znvnwr" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="oyYpL7" href="#oyYpL7" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="gRpu9H" href="#gRpu9H" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
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
`;


export const compactFilterMode = () => `
<ul class="fd-tabs fd-tabs--s fd-tabs--filter fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--header">
        <a class="fd-tabs__link" aria-controls="YETAv8" href="#YETAv8" role="tab">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="eu3WeD" href="#eu3WeD" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">3</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="VqJcYO" href="#VqJcYO" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">40</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="ceoDu7" href="#ceoDu7" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">107</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-button--compact fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
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
`;


export const semanticMode = () => `
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only fd-tabs--compact" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="XTsSDD" href="#XTsSDD" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">54</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--warning">
      <a class="fd-tabs__link" aria-controls="DomvG6" aria-selected="true" href="#DomvG6" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">71</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--information">
        <a class="fd-tabs__link" aria-controls="DqIStt" href="#DqIStt" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">23</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="bRCSzS" href="#bRCSzS" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">4</p>
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--neutral">
        <a class="fd-tabs__link" aria-controls="xMN6I9" href="#xMN6I9" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">100</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
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
`;


export const semanticFilterMode = () => `
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--header">
        <a class="fd-tabs__link" aria-controls="5ZkDVE" href="#5ZkDVE" role="tab">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="znvnwr" href="#znvnwr" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Success</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--warning">
        <a class="fd-tabs__link" aria-controls="oyYpL7" href="#oyYpL7" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Warning</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--information">
        <a class="fd-tabs__link" aria-controls="gRpu9H" href="#gRpu9H" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Information</span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="gRpu1A" href="#gRpu1A" role="tab">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">50</p>
            </span>
            <span class="fd-tabs__label">Error</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
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
`;


export const semanticInline = () => `
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li role="listitem" class="fd-tabs__item fd-tabs__item--error">
        <a class="fd-tabs__link" aria-controls="5abyKZ" href="#5abyKZ" role="tab">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Error
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--information">
        <a class="fd-tabs__link" aria-controls="wupC7s" aria-selected="true" href="#wupC7s" role="tab">
            <p class="fd-tabs__count">24</p>
            <span class="fd-tabs__tag">
                Information
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--warning">
        <a class="fd-tabs__link" aria-controls="XlKpQM" href="#XlKpQM" role="tab">
            <p class="fd-tabs__count">31</p>
            <span class="fd-tabs__tag">
                Warning
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="3dUJAI" href="#3dUJAI" role="tab">
            <p class="fd-tabs__count">65</p>
            <span class="fd-tabs__tag">
                Success
            </span>
        </a>
    </li>
    <li role="listitem" class="fd-tabs__item fd-tabs__item--neutral">
        <a class="fd-tabs__link" aria-controls="TWlAup" href="#TWlAup" role="tab">
            <p class="fd-tabs__count">159</p>
            <span class="fd-tabs__tag">
                Neutral
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
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
`;
