var st=Object.defineProperty,at=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var x=(e,a,n)=>a in e?st(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,t=(e,a)=>{for(var n in a||(a={}))et.call(a,n)&&x(e,n,a[n]);if(v)for(var n of v(a))ct.call(a,n)&&x(e,n,a[n]);return e},s=(e,a)=>at(e,nt(a));/* empty css                      *//* empty css             */const ot=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative fd-object-status--truncate" style="max-width: 15rem;">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Default behaviour of Object Status with very long text. The text goes on multiple lines.</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--truncate" style="max-width: 15rem;">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Object Status with text truncation with ellipsis</span>
    </span>
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted fd-object-status--truncate" style="max-width: 15rem;">
        <span class="fd-object-status__text">Inverted Negative with very, very long text which truncates</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--positive fd-object-status--truncate" style="max-width: 15rem;">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive with very, very long text which truncates</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 fd-object-status--truncate" tabindex="0" style="max-width: 15rem;">
        <span class="fd-object-status__text">Indication8 with very, very long text which truncates</span>
    </span>
</div>
`,it=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-9">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-10">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>
<br><br>
<h4>Clickable Inverted Object Status (Regular)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>

<br><br>
<h4>Clickable Inverted Object Status (Hover)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10 is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>

<br><br>
<h4>Clickable Inverted Object Status (Active/Down)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10 is-active" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>

<br><br>
<h4>Clickable Inverted Object Status (Focus)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10 is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>
`,dt=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1b">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2b">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3b">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4b">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5b">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6b">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7b">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8b">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-9b">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-10b">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>
<br><br>
<h4>Clickable Inverted Object Status (Regular)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10b" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>

<br><br>
<h4>Clickable Inverted Object Status (Hover)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10b is-hover" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>

<br><br>
<h4>Clickable Inverted Object Status (Active/Down)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10b is-active" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>

<br><br>
<h4>Clickable Inverted Object Status (Focus)</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication9</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10b is-focus" tabindex="0">
        <span class="fd-object-status__text">Indication10</span>
    </span>
</div>
`,bt=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Warning</span>
    </span>
    <span class="fd-object-status fd-object-status--positive fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Success</span>
    </span>
    <span class="fd-object-status fd-object-status--informative fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>

<br><br>
<h4>Large Inverted Object Status</h4>
<div class="fddocs-container" style="align-items: baseline; gap: 1rem;">
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Warning</span>
    </span>
    <span class="fd-object-status fd-object-status--positive fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Success</span>
    </span>
    <span class="fd-object-status fd-object-status--informative fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative fd-object-status--large fd-object-status--icon-only">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,ut=`<h4>Regular</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Information</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical" tabindex="0">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Caution</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive" tabindex="0">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative" tabindex="0">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
</div>
<br><br>
<h4>Hover</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link is-hover" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-hover" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Information</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-hover" tabindex="0">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Caution</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-hover" tabindex="0">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-hover" tabindex="0">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
</div>
<br><br>
<h4>Down</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link is-active" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-active" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Information</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-active" tabindex="0">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Caution</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-active" tabindex="0">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-active" tabindex="0">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
</div>
<br><br>
<h4>Regular, Focus</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link is-focus" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Information</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Caution</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
</div>
<br><br>
<h4>Hover, Focus</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link is-hover is-focus" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-hover is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Information</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-hover is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Caution</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-hover is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-hover is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
</div>
`,ft=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--large fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status fd-object-status--large">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,pt=`<h3>Regular State</h3>
<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
<br><br>
<h3>Hover State</h3>
<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link is-hover">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link is-hover">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link is-hover">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link is-hover" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link is-hover" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-hover">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-hover">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-hover">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-hover">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-hover">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-hover" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-hover" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-hover" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
<br><br>
<h3>Down State</h3>
<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link is-active">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link is-active">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link is-active">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link is-active" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link is-active" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-active">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-active">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-active">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-active">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-active">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-active" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-active" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-active" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
<br><br>
<h3>Visited State</h3>
<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link is-visited">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link is-visited">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link is-visited">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link is-visited" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link is-visited" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-visited">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-visited">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-visited">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-visited">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-visited">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-visited" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-visited" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-visited" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
<br><br>
<h3>Focus State</h3>
<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link is-focus">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link is-focus">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link is-focus">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link is-focus" tabindex="0">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link is-focus" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-focus">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-focus">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-focus">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-focus">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-focus">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-focus" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-focus" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-focus" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
`,jt=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--indication-1">
        <span class="fd-object-status__text">Dark Red</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-2">
        <span class="fd-object-status__text">Red</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-3">
        <span class="fd-object-status__text">Yellow</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-4">
        <span class="fd-object-status__text">Green</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-5">
        <span class="fd-object-status__text">Blue</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-6">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-7">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-8">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
`,lt=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status fd-object-status--neutral">
        <i class="fd-object-status__icon sap-icon--circle-task-2" role="presentation"></i>
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,rt=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,_t=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--error" aria-label="Negative"></i>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--alert" aria-label="Warning"></i>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" aria-label="Correct"></i>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--information" aria-label="More information"></i>
    </span>
</div>
`,vt=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--alert" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
</div>
`,ht={title:"Components/Object Status",parameters:{description:`Object Status is a short text that represents the semantic status of an object. It has a semantic
color and an optional icon. Typically, the object status is used in the dynamic page header and as a status
attribute of a line item in a table. `,tags:["f3","a11y","theme"]}},o=()=>vt;o.parameters={docs:{description:{story:"\n  Object Status can display the semantic status of an object: negative (class: `fd-object-status--negative`), critical\n  (class: `fd-object-status--critical`), positive (class: `fd-object-status--positive`),\n  informative (class: `fd-object-status--informative`), or none.\n            "}}};const i=()=>_t;i.parameters={docs:{description:{story:"Object status icon only"}}};const d=()=>rt;d.parameters={docs:{description:{story:"Object status text only"}}};const b=()=>lt;b.parameters={docs:{description:{story:"Object status icon and text"}}};const u=()=>jt;u.parameters={docs:{description:{story:"Object Status with Generic Indication Colors"}}};const f=()=>pt;f.parameters={docs:{description:{story:`
 If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the \`fd-object-status--link\` modifier class.
 `}}};const _=()=>ft,p=()=>bt;p.parameters={docs:{description:{story:`
 Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the \`fd-object-status--inverted\` modifier class.
            `}}};const j=()=>ut;j.parameters={docs:{description:{story:`
 
            `}}};const l=()=>it;l.parameters={docs:{description:{story:"Inverted indication colors"}}};const r=()=>dt;r.parameters={docs:{description:{story:"Secondary Set of Inverted indication colors"}}};const c=()=>ot;c.storyName="Object Status with single line text with ellipsis";c.parameters={docs:{description:{story:`
  By default, Object Status text goes on multiple lines based on the max width that is set for the element. For a single line text with ellipsis add the <code>fd-object-status--truncate</code> modifier class to the <code>fd-object-status</code> base class.
            `}}};var k,m,h;o.parameters=s(t({},o.parameters),{docs:s(t({},(k=o.parameters)==null?void 0:k.docs),{source:t({originalSource:"() => primaryExampleHtml"},(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source)})});var I,g,y;i.parameters=s(t({},i.parameters),{docs:s(t({},(I=i.parameters)==null?void 0:I.docs),{source:t({originalSource:"() => iconExampleHtml"},(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var S,N,C;d.parameters=s(t({},d.parameters),{docs:s(t({},(S=d.parameters)==null?void 0:S.docs),{source:t({originalSource:"() => textExampleHtml"},(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source)})});var w,O,P;b.parameters=s(t({},b.parameters),{docs:s(t({},(w=b.parameters)==null?void 0:w.docs),{source:t({originalSource:"() => iconAndTextExampleHtml"},(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source)})});var E,H,R;u.parameters=s(t({},u.parameters),{docs:s(t({},(E=u.parameters)==null?void 0:E.docs),{source:t({originalSource:"() => genericIndicationColorsExampleHtml"},(R=(H=u.parameters)==null?void 0:H.docs)==null?void 0:R.source)})});var T,D,G;f.parameters=s(t({},f.parameters),{docs:s(t({},(T=f.parameters)==null?void 0:T.docs),{source:t({originalSource:"() => clickableObjectStatusExampleHtml"},(G=(D=f.parameters)==null?void 0:D.docs)==null?void 0:G.source)})});var B,A,F;_.parameters=s(t({},_.parameters),{docs:s(t({},(B=_.parameters)==null?void 0:B.docs),{source:t({originalSource:"() => largeObjectStatusExampleHtml"},(F=(A=_.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var Y,L,W;p.parameters=s(t({},p.parameters),{docs:s(t({},(Y=p.parameters)==null?void 0:Y.docs),{source:t({originalSource:"() => invertedExampleHtml"},(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source)})});var z,M,U;j.parameters=s(t({},j.parameters),{docs:s(t({},(z=j.parameters)==null?void 0:z.docs),{source:t({originalSource:"() => invertedStatesExampleHtml"},(U=(M=j.parameters)==null?void 0:M.docs)==null?void 0:U.source)})});var V,q,J;l.parameters=s(t({},l.parameters),{docs:s(t({},(V=l.parameters)==null?void 0:V.docs),{source:t({originalSource:"() => invertedIndicationExampleHtml"},(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source)})});var K,Q,X;r.parameters=s(t({},r.parameters),{docs:s(t({},(K=r.parameters)==null?void 0:K.docs),{source:t({originalSource:"() => invertedIndicationSecondaryExampleHtml"},(X=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Z,$,tt;c.parameters=s(t({},c.parameters),{docs:s(t({},(Z=c.parameters)==null?void 0:Z.docs),{source:t({originalSource:"() => truncateExampleExampleHtml"},(tt=($=c.parameters)==null?void 0:$.docs)==null?void 0:tt.source)})});const It=["Primary","Icon","Text","IconAndText","GenericIndicationColors","ClickableObjectStatus","LargeObjectStatus","Inverted","InvertedStates","InvertedIndication","InvertedIndicationSecondary","TruncateExample"];export{f as ClickableObjectStatus,u as GenericIndicationColors,i as Icon,b as IconAndText,p as Inverted,l as InvertedIndication,r as InvertedIndicationSecondary,j as InvertedStates,_ as LargeObjectStatus,o as Primary,d as Text,c as TruncateExample,It as __namedExportsOrder,ht as default};
