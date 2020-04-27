import '../../dist/action-bar.css';

export default { title: 'Action Bar' };

export const withDescription = () => (
`<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <div class="btn-playground"></div>
        </div>
        <h3 class="fd-action-bar__title">Action Bar with description and back button</h3>
        <div class="fd-action-bar__actions" >                  
        <div class="btn-playground">Button</div>                        
        <div class="btn-playground">Button</div>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Description message lorem ipsum</p>
</div>`);

export const withNoDescription = () => (
`<div class="fd-action-bar"> 
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <div class="btn-playground"><</div>
        </div>
        <h3 class="fd-action-bar__title">Action Bar with no description</h3>
        <div class="fd-action-bar__actions" >                        
            <div class="btn-playground">Button</div>                        
            <div class="btn-playground">Button</div>
        </div>
    </div>
</div>`);

export const withH2Heading = () => (
    `<div class="fd-action-bar">          
        <div class="fd-action-bar__header">
            <div class="fd-action-bar__back">
                <div class="btn-playground"><</div>
            </div>
            <h2 class="fd-action-bar__title">Action Bar with header</h2>
            <div class="fd-action-bar__actions">                        
                <div class="btn-playground">Button</div>                    
                <div class="btn-playground">Button</div>
            </div>
        </div>
        <p class="fd-action-bar__description fd-action-bar__description--back">Description message lorem ipsum</p>
    </div>`);

export const withH3Heading = () => (
`<div class="fd-action-bar">          
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <div class="btn-playground"><</div>
        </div>
        <h3 class="fd-action-bar__title">Action Bar with header</h3>
        <div class="fd-action-bar__actions">                        
            <div class="btn-playground">Button</div>                    
            <div class="btn-playground">Button</div>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Description message lorem ipsum</p>
</div>`);

export const withH4Heading = () => (
`<div class="fd-action-bar">          
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <div class="btn-playground"><</div>
        </div>
        <h4 class="fd-action-bar__title">Action Bar with header</h4>
        <div class="fd-action-bar__actions">                        
            <div class="btn-playground">Button</div>                    
            <div class="btn-playground">Button</div>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Description message lorem ipsum</p>
</div>`);

export const withH5Heading = () => (
`<div class="fd-action-bar">          
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <div class="btn-playground"><</div>
        </div>
        <h5 class="fd-action-bar__title">Action Bar with header</h5>
        <div class="fd-action-bar__actions">                        
            <div class="btn-playground">Button</div>                    
            <div class="btn-playground">Button</div>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Description message lorem ipsum</p>
</div>`);

export const withH6Heading = () => (
`<div class="fd-action-bar">          
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <div class="btn-playground"><</div>
        </div>
        <h6 class="fd-action-bar__title">Action Bar with header</h6>
        <div class="fd-action-bar__actions">                        
            <div class="btn-playground">Button</div>                    
            <div class="btn-playground">Button</div>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Description message lorem ipsum</p>
</div>`);