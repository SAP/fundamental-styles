export default {
    title: 'Components/Icon Tab Bar',
    parameters: {
        description: `
The Icon Tab Bar can be used for navigation within an object, or as a filter. Each tab of the component links to a different content area or view.

##Usage
**Use the icon tab bar if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.

**Do not use the icon tab bar if:**

- You plan to use only a single tab.

##Semantic colors
Only use semantic colors if it is important for users to know that they need to take action (for example, to indicate errors or critical situations requiring action). Otherwise, use the neutral default colors. To add semantic color to a tab use a modifier class from the table below on <code>fd-icon-tab-bar\\_\\_item</code> level.

| **Color** | **Modifier class** |
| :--------- | :---------- |
| positive &nbsp;&nbsp; | <code>fd-icon-tab-bar\\_\\_item--positive</code> |
| negative &nbsp;&nbsp; | <code>fd-icon-tab-bar\\_\\_item--negative</code> |
| critical &nbsp;&nbsp; | <code>fd-icon-tab-bar\\_\\_item--critical</code> |
| informative &nbsp;&nbsp; | <code>fd-icon-tab-bar\\_\\_item--informative</code> |

##Horizontal paddings
You can add horizontal paddings by applying a modifier class to the container. For responsive horizontal paddings (based on the screen size) add the <code>fd-icon-tab-bar--responsive-paddings</code> modifier class. In this case the left and right spacing will change as the screen size changes.

| **Size** | **Modifier class** |
| :--------- | :---------- |
| sm (1rem) &nbsp;&nbsp; | <code>fd-icon-tab-bar--sm</code> |
| md (2rem) &nbsp;&nbsp; | <code>fd-icon-tab-bar--md</code> |
| lg (2rem) &nbsp;&nbsp; | <code>fd-icon-tab-bar--lg</code> |
| xl (3rem) &nbsp;&nbsp; | <code>fd-icon-tab-bar--xl</code> |
| xxl (3rem) &nbsp;&nbsp; | <code>fd-icon-tab-bar--xxl</code> |

##Background
By default, the background for the Icon Tab Bar header and content is set to "solid". This will apply <code>--sapObjectHeader_Background</code> background color and <code>--sapContent_HeaderShadow</code> box-shadow to the header and <code>--sapBackgroundColor</code> to the container (panel). It can be changed to "translucent" or "transparent" using modifier classes. In translucent mode the header gets <code>--sapObjectHeader_Background</code> background color and the panel <code>--sapGroup_ContentBackground</code> background color. 

| **Background** | **Modifier class** |
| :--------- | :---------- |
| solid &nbsp;&nbsp; | default |
| translucent &nbsp;&nbsp; | <code>fd-icon-tab-bar--translucent</code> |
| transparent &nbsp;&nbsp; | <code>fd-icon-tab-bar--transparent</code> |

<br><br><br>
      `,
        tags: ['f3', 'theme', 'development'],
        components: ['icon', 'icon-tab-bar', 'popover', 'menu', 'button', 'list']
    }
};


export const textOnly = () => `<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
        </li>
    </ul> 
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">  
        Section 1
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>  
        Section 2
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>  
        Section 3
    </section>
</div>
`;
textOnly.storyName = 'Text Only (Inline mode)';
textOnly.parameters = {
    docs: {
        storyDescription: 'The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. The labels of the tabs do not get truncated. The full text is always shown. As a result, you need to ensure that your labels do not become too long. They should still be easy to read on smaller screens. The control has the same look and feel in Cozy and Compact mode.'
    }
};

export const textOnlySemantic = () => `<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" aria-selected="true" id="tab1">
            <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
            <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" aria-selected="true" id="tab3">
            <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" aria-selected="true" id="tab4">
            <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">Section 1</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>Section 2</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>Section 3</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section4" aria-labelledby="tab4" hidden>Section 4</section>
</div>
`;
textOnlySemantic.storyName = 'Text Only (Inline mode) Semantic Colors';


export const counter = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--counters">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__counter">16</span>
                <span class="fd-icon-tab-bar__tag">Attachments</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__counter">42</span>
                <span class="fd-icon-tab-bar__tag">Approvals</span>
            </a>
        </li>
    </ul> 
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">  
        Section 1
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>  
        Section 2
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>  
        Section 3
    </section>
</div>
`;
counter.storyName = 'Counters and Text';
counter.parameters = {
    docs: {
        storyDescription: 'Counters can be shown on top of labels. In this case you need to apply the <code>fd-icon-tab-bar--counters</code> modifier class. <br> The control has the same look and feel in Cozy and Compact mode.'
    }
};

export const iconOnly = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--account" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--product" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--present" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul> 
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">  
        Section 1
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>  
        Section 2
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>  
        Section 3
    </section>
</div>
`;
iconOnly.storyName = 'Icon Only';
iconOnly.parameters = {
    docs: {
        storyDescription: 'The Icon tabs are rounded tabs that can be populated with any icon. The labels in this case are omitted and counters are optional. You need to apply the <code>fd-icon-tab-bar--icon-only</code> modifier class for this type of tabs.'
    }
};

export const iconOnlyCompact = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only fd-icon-tab-bar--compact">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--pending" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--picture" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul> 
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">  
        Section 1
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>  
        Section 2
    </section>  
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>  
        Section 3
    </section>
</div>
`;
iconOnlyCompact.storyName = 'Icon Only in Compact Mode';
iconOnlyCompact.parameters = {
    docs: {
        storyDescription: 'In compact mode you need to apply an additional modifier class <code>fd-icon-tab-bar--compact</code>.'
    }
};

export const iconOnlySemantic = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--history" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--card" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul> 
</div>
<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only fd-icon-tab-bar--compact">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab5">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--attachment" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab6">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--activities" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--family-care" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--family-care" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul>
</div>
`;
iconOnlySemantic.storyName = 'Icon Only Semantic Colors';

export const icon = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--filter" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--customer" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">99</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--chain-link" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">56 of 123</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul> 
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--compact">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--iphone" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">25 of 789 items</span>
                    <span class="fd-icon-tab-bar__label">Claim Overweights</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--record" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__label">Confirm</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--world" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">12</span>
                    <span class="fd-icon-tab-bar__label">Checks</span>
                </div>
            </a>
        </li>
    </ul> 
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--play" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--unfavorite" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--shipping-status" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>
`;
icon.storyName = 'Icon';
icon.parameters = {
    docs: {
        storyDescription: 'To display Icon Tabs with labels and counters you need to apply the <code>fd-icon-tab-bar--icon</code> modifier class. The counters are optional and can be ommited. The label is always positioned at the bottom. If you decide to use labels, use them for all tabs. The badge is rendered at the top right hand corner of the icon container. Consider using shorter labels or text tabs (without icons), since text tabs cannot get truncated.'
    }
};

export const process = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--person-placeholder" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--paper-plane" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--loan" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>
<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--compact fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--globe" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--theater" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--soccor" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--nutrition-activity" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--vehicle-repair" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--palette" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab11">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
`;
process.storyName = 'Process';
process.parameters = {
    docs: {
        storyDescription: 'You can also use the tab bar to depict a process. In this case, each tab stands for one step. You need to add the <code>fd-icon-tab-bar--process</code> modifier class and a sibling html element with <code>fd-icon-tab-bar\\_\\_separator</code> class to the tab.'
    }
};

export const filter = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--filter">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab"  aria-selected="true" href="#" id="tab1">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--letter" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>
                
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--activate" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--jam" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--filter fd-icon-tab-bar--compact">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab5">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--user-settings" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--write-new" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--bell" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--filter">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--text-color" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab11">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--touch" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--feedback" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>`;
filter.storyName = 'Filter';
filter.parameters = {
    docs: {
        storyDescription: `The tab bar as a filter has two parts: <br>
        - An “all” tab on the left - shows the total number of items, and describes the type of item (for example, 189 Products). <br>
        -  Tabs for specific filters - the tab text indicates the filter attribute. It is recommended to show a counter on every tab.
        <br>
        You need to add the <code>fd-icon-tab-bar--filter</code> modifier class for this type of tabs.`
    }
};


export const overflow = () => `<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header fd-icon-tab-bar__header--left-offset"> 
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow fd-icon-tab-bar__item--overflow--left">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">+2</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li> 
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow" style="left: 20rem;">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">+3</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li> 
    </ul>
</div>
<br><br>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header"> 
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow" style="left: 17rem;">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">More</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li> 
    </ul>
</div>`;
overflow.storyName = 'Overflow';
overflow.parameters = {
    docs: {
        storyDescription: `Tabs can have an overflow to either sides of the control. Depending on if the order is fixed (process steps) or can be rearranged (tabs).
        For processes with a fixed order, an overflow to both sides is used. For tabs that can be rearranged, only one overflow will be displayed on the right side.`
    }
};

export const singleClick = () => `<div class='fddocs-icon-tab-container' style="min-height: 800px;">
    <div class="fd-icon-tab-bar fd-icon-tab-bar--xl">
        <ul role="tablist" class="fd-icon-tab-bar__header">  
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab2" aria-controls="popoverA1" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA1');">
                            <div class="fd-icon-tab-bar__tab-container">
                                <span class="fd-icon-tab-bar__tag">Section 2</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                                <span class="fd-icon-tab-bar__badge"></span>
                            </div>
                        </a>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1.1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
        </ul>
    </div>

    <div style="height: 20rem;"></div>

     <div class='fd-icon-tab-bar fd-icon-tab-bar--icon'>
  <ul role='tablist' class='fd-icon-tab-bar__header'>
    <li role='presentation' class='fd-icon-tab-bar__item'>
      <a role='tab' class='fd-icon-tab-bar__tab' href='#' aria-selected='true' id='1'>
        <div class='fd-icon-tab-bar__container'>
          <span class='fd-icon-tab-bar__icon'>
                        <i class='sap-icon--filter' role='presentation'></i>
                    </span>
        </div>
        <div class='fd-icon-tab-bar__details'>
          <span class='fd-icon-tab-bar__label'>Description</span>
        </div>
      </a>
    </li>
    <li role='presentation' class='fd-icon-tab-bar__item'>
      <a role='tab' class='fd-icon-tab-bar__tab' href='#' id='tab2'>
        <div class='fd-icon-tab-bar__container'>
          <span class='fd-icon-tab-bar__icon'>
                        <i class='sap-icon--customer' role='presentation'></i>
                    </span>
        </div>
        <div class='fd-icon-tab-bar__details'>
          <span class='fd-icon-tab-bar__counter'>99</span>
          <span class='fd-icon-tab-bar__label'>Description</span>
        </div>
      </a>
    </li>
    <li role='presentation' class='fd-icon-tab-bar__item'>
      <a role='tab' class='fd-icon-tab-bar__tab' href='#' id='tab3'>
        <div class='fd-icon-tab-bar__container'>
          <span class='fd-icon-tab-bar__icon'>
                        <i class='sap-icon--chain-link' role='presentation'></i>
                    </span>
        </div>
        <div class='fd-icon-tab-bar__details'>
          <span class='fd-icon-tab-bar__counter'>56 of 123</span>
          <span class='fd-icon-tab-bar__label'>Description</span>
        </div>
      </a>
    </li>
    <li role='presentation' class='fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow' style="left: 23rem;">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button class='fd-icon-tab-bar__overflow'>
                    <span class='fd-icon-tab-bar__overflow-text'>More</span>
                    <i class='sap-icon--slim-arrow-down' role='presentation'></i>   
                </button>
            </div>
                    <div class='fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body' aria-hidden='false' id='popoverA1'>
             <ul role="list" class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list">
                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--informative">
                <a tabindex="0" class="fd-list__link">
                    <span class="fd-icon-tab-bar__list-item-icon-container">
                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                            <i class="sap-icon--letter" role="presentation"></i>
                        </span>
                    </span>
                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(12)</span>
                </a>
                </li>
                                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                <a tabindex="0" class="fd-list__link">
                    <span class="fd-icon-tab-bar__list-item-icon-container">
                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                        <i class="sap-icon--activate" role="presentation"></i>
                        </span>
                    </span>
                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(227)</span>
                </a>
                </li>
                                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--positive">
                <a tabindex="0" class="fd-list__link">
                    <span class="fd-icon-tab-bar__list-item-icon-container">
                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                        <i class="sap-icon--jam" role="presentation"></i>
                        </span>
                    </span>
                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(0)</span>
                </a>
                </li>
             </ul>
        </div>

        </div>
    </li>
  </ul>
</div>
</div>
`;
singleClick.storyName = 'Universal Icon Tab Bar Single Click Area';
singleClick.parameters = {
    docs: {
        storyDescription: `When there is only one click area per tab (also including tabs with sub-items), regular tabs get selected immediately after the click is released. Tabs with sub-items trigger the expansion of a menu (Popover) showing its sub-items. The parent tab title remains displayed when its child is select.
        <br>
        You need to apply the <code>fd-icon-tab-bar\\_\\_item--single-click</code> modifier class to <code>fd-icon-tab-bar\\_\\_item</code> element. The List component inside the Popover has an additional modifier class <code>fd-icon-tab-bar\\_\\_list</code> to achieve the nesting (indentation) of the elements. The list menu can be borderless, with line separators (<code>fd-icon-tab-bar\\_\\_line-separator</code>) or icon separators (<code>fd-icon-tab-bar\\_\\_icon-separator</code>) `
    }
};


export const multiClick = () => `<div style="min-height: 400px;">
    <div class="fd-icon-tab-bar fd-icon-tab-bar--md">
        <ul role="tablist" class="fd-icon-tab-bar__header">  
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab2" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-button--compact  fd-icon-tab-bar__button" aria-controls="popoverA3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA3');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                            <span class="fd-icon-tab-bar__badge"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA3">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
        </ul>
    </div>
</div>
`;
multiClick.storyName = 'Universal Icon Tab Bar Multi Click Area';
multiClick.parameters = {
    docs: {
        storyDescription: 'In case of two click areas for tabs with sub-tabs, the behaviour for regular tabs (without sub-items) remains unchanged, like described above the tabs get selected immediately. Tabs with two click areas behave differently: when the main part of the tab is clicked, it is highlighted and then selected immediately. Clicking the second area opens a menu (Popover) containing the sub-items. Once a sub-item is clicked, the main tab is highlighted as selected. '
    }
};

export const badge = () => `<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section11" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section12" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section13" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section21" aria-selected="true" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section22" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section23" aria-selected="true" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                <span class="fd-icon-tab-bar__badge"></span> 
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section24" aria-selected="true" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--counters">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section41" id="tab8">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section42" aria-selected="true" id="tab9">
                <span class="fd-icon-tab-bar__counter">23</span>
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section43" id="tab10">
                <span class="fd-icon-tab-bar__counter">10</span>
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section44" id="tab11">
                <span class="fd-icon-tab-bar__counter">10</span>
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
    </ul> 
</div>
<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
  <ul role="tablist" class="fd-icon-tab-bar__header">
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--history" role="presentation"></i>
                    </span>
          <span class="fd-icon-tab-bar__badge fd-icon-tab-bar__badge--animated"></span>
          <span class="fd-icon-tab-bar__counter">2</span>
        </div>
      </a>
    </li>
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab13">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--card" role="presentation"></i>
                    </span>
          <span class="fd-icon-tab-bar__badge fd-icon-tab-bar__badge--animated"></span>
          <span class="fd-icon-tab-bar__counter">23</span>
        </div>
      </a>
    </li>
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab14">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
                <i class="sap-icon--cart" role="presentation"></i>
          </span>
          <span class="fd-icon-tab-bar__badge fd-icon-tab-bar__badge--animated"></span>
          <span class="fd-icon-tab-bar__counter">10</span>
        </div>
      </a>
    </li>
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab15">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
            <i class="sap-icon--cart" role="presentation"></i>
          </span>
          <span class="fd-icon-tab-bar__badge fd-icon-tab-bar__badge--animated"></span>
          <span class="fd-icon-tab-bar__counter">10</span>
        </div>
      </a>
    </li>
  </ul>
</div>
`;
badge.storyName = 'Badges';
badge.parameters = {
    docs: {
        storyDescription: `The Tab attention badge is applied as a visual eye-catcher to indicate a change within a Tab. <br>
        The badge is a span element with <code>fd-icon-tab-bar\\_\\_badge</code> class. It can be animated by adding an additional <code> fd-icon-tab-bar\\_\\_badge--animated</code> modifier class. In this case the badge appears for a few milliseconds and then disappears.`
    }
};

export const respPaddings = () => `<div class="fd-icon-tab-bar fd-icon-tab-bar--responsive-paddings">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section11" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section12" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section13" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
`;
respPaddings.storyName = 'Responsive Paddings';
respPaddings.parameters = {
    docs: {
        storyDescription: 'For an Icon Tab Bar with responsive paddings that adjust based on the screen size add the <code>fd-icon-tab-bar--responsive-paddings</code> modifier class.'
    }
};

export const paddings = () => `<h4>SM (1rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--sm">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>MD (2rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--md">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>LG (2rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--lg">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab8">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>XL (3rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--xl">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab13">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab14">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab15">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>XXL (3rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--xxl">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab16">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab17">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab18">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
`;
paddings.storyName = 'Sizes and Horizontal Paddings';
paddings.parameters = {
    docs: {
        storyDescription: 'You can set horizontal paddings by adding a modifier class and specifying the size of the paddings. Please refer to the "Paddings" section at the top of the page for the available sizes.'
    }
};

export const navigation = () => `<div style="min-height: 600px;">
<h4>With Overflow</h4>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--sm fd-icon-tab-bar--navigation" style="max-width: 400px;">
        <ul role="tablist" class="fd-icon-tab-bar__header"> 
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow" style="left: 20rem;">
                <button class="fd-icon-tab-bar__overflow">
                    <span class="fd-icon-tab-bar__overflow-text">More</span>
                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                </button>
            </li> 
        </ul>
    </div>
    <div style="height: 50px;"></div>
    <h4>With Multi Click Area</h4>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--md">
        <ul role="tablist" class="fd-icon-tab-bar__header">  
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab5" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-button--compact  fd-icon-tab-bar__button" aria-controls="popoverAO4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO4">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
        </ul>
    </div>
    <div style="height: 120px;"></div>
    <h4>With Single Click Area</h4>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--xl">
    <ul role="tablist" class="fd-icon-tab-bar__header">
      <li role="presentation" class="fd-icon-tab-bar__item">
        <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
          <span class="fd-icon-tab-bar__tag">Section 1</span>
        </a>
      </li>
      <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
        <div class="fd-popover">
          <div class="fd-popover__control">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab8" tabindex="0" aria-controls="popoverAO5" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverAO5');">
              <div class="fd-icon-tab-bar__tab-container">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__arrow">
                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                </span>
              </div>
            </a>
          </div>
          <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO5">
            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
              <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                <a tabindex="0" class="fd-list__link">
                  <span class="fd-list__title">Subsection 1</span>
                </a>
              </li>
              <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                <a tabindex="0" class="fd-list__link">
                  <span class="fd-list__title">Subsection 2</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li role="presentation" class="fd-icon-tab-bar__item">
        <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
          <span class="fd-icon-tab-bar__tag">Section 3</span>
        </a>
      </li>
      <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
        <div class="fd-popover">
          <div class="fd-popover__control">
            <a role="tab" class="fd-icon-tab-bar__tab" id="tab10" tabindex="0" aria-expanded="true" aria-haspopup="true">
              <div class="fd-icon-tab-bar__tab-container">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__arrow">
                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`;
navigation.storyName = 'Navigation Icon Tab Bar';
navigation.parameters = {
    docs: {
        storyDescription: `The Navigation Tab Bar is the main/default navigation displayed on the SAP Fiori launchpad home page. It offers the user an easy access to multiple pages per space. The background color of the Shell Navigation is connected the Home/Shell Header to properly differentiate the global shell navigation versus any application specific navigation. The Navigation Bar snaps to top and remains visible while scrolling. It is not visible in App view. <br>
        The implementation is based on UniversalIconTabBar with some different color parameters that are specific to Shell Bar and Tool Header. <br>
        If there are more Tabs than the screen can accommodate, the remaining Tabs move into an Overflow.`
    }
};
