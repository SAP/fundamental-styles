const g=`
<h3>All-Round Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-tiny"></div>
</div>
<br>
<h3>All-Round Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-small"></div>
</div>
<br>
<h3>All-Round Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-medium"></div>
</div>
<br>
<h3>All-Round Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-large"></div>
</div>
<br>
`,c=`
<h3>Top Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-block-start-tiny"></div>
</div>
<br>
<h3>Top Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-block-start-small"></div>
</div>
<br>
<h3>Top Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-block-start-medium"></div>
</div>
<br>
<h3>Top Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-block-start-large"></div>
</div>
<br>
`,p=`
<h3>Bottom Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-block-end-tiny"></div>
</div>
<br>
<h3>Bottom Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-block-end-small"></div>
</div>
<br>
<h3>Bottom Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-block-end-medium"></div>
</div>
<br>
<h3>Bottom Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-block-end-large"></div>
</div>
<br>
`,y=`
<h3>Begin Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-start-tiny"></div>
</div>
<br>
<h3>Begin Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-start-small"></div>
</div>
<br>
<h3>Begin Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-start-medium"></div>
</div>
<br>
<h3>Begin Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-start-large"></div>
</div>
<br>
`,h=`
<h3>End Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-end-tiny"></div>
</div>
<br>
<h3>End Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-end-small"></div>
</div>
<br>
<h3>End Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-end-medium"></div>
</div>
<br>
<h3>End Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-end-large"></div>
</div>
<br>
`,v=`
<h3>Horizontal Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-tiny"></div>
</div>
<br>
<h3>Horizontal Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-small"></div>
</div>
<br>
<h3>Horizontal Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-medium"></div>
</div>
<br>
<h3>Horizontal Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-inline-large"></div>
</div>
<br>
`,b=`
<h3>Vertical Tiny (0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-block-tiny"></div>
</div>
<br>
<h3>Vertical Small (1rem)</h3>
<div class="demo">
    <div class="sap-margin-block-small"></div>
</div>
<br>
<h3>Vertical Medium (2rem)</h3>
<div class="demo">
    <div class="sap-margin-block-medium"></div>
</div>
<br>
<h3>Vertical Large (3rem)</h3>
<div class="demo">
    <div class="sap-margin-block-large"></div>
</div>
<br>
`,u=`
<div class="demo">
    <div class="sap-margin-responsive"></div>
</div>
`,M=`
<h3>Horizontal Negative Tiny (-0.5rem)</h3>
<div class="demo">
    <div class="sap-margin-tiny-negative"></div>
</div>
<br>
<h3>Horizontal Negative Small (-1rem)</h3>
<div class="demo">
    <div class="sap-margin-small-negative"></div>
</div>
<br>
<h3>Horizontal Negative Medium (-2rem)</h3>
<div class="demo">
    <div class="sap-margin-medium-negative"></div>
</div>
<br>
<h3>Horizontal Negative Large (-3rem)</h3>
<div class="demo">
    <div class="sap-margin-large-negative"></div>
</div>
<br>
`,S=`<h3>Example usage</h3>
<pre>
    .custom-card {
        background: var(--sapBackgroundColor);
        width: 4rem;
        height: 6rem;
        
        @include sap-set-margin-bottom(8rem);
        @include sap-set-margin-x-equal(0.25rem);
    }
</pre>`,_={title:"Margins",parameters:{description:`The CSS margin properties are used to create space around elements, outside of any defined borders.
`}},e=`
<style>
    div.demo {
        display: flex;
        width: fit-content;
        background: #69ADF8;
    }
    .demo div {
        height: 4rem;
        width: 8rem;
        background: #E2EEFF;
    }
</style>
`,d=()=>`${e}${g}`;d.storyName="All-Round Margins";d.parameters={docs:{description:{story:`All-round margins appear on all sides of the element they are applied to. 

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-small</code></td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-large</code></td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large)</td>
    </tr>
    
</table>`}}};const t=()=>`${e}${c}`;t.storyName="Top Margins";t.parameters={docs:{description:{story:`The top margin is displayed on the top of the element.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-top-tiny</code> or <br><code>.sap-margin-block-start-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny, top);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-top-small</code> or <br><code>.sap-margin-block-start-small</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small, top);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-top-medium</code> or <br><code>.sap-margin-block-start-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium, top);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-top-large</code> or <br><code>.sap-margin-block-start-large</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-start: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large, top);</td>
    </tr>
</table>`}}};const a=()=>`${e}${p}`;a.storyName="Bottom Margins";a.parameters={docs:{description:{story:`The bottom margin is displayed on the bottom of the element.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-bottom-tiny</code> or <br><code>.sap-margin-block-end-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny, bottom);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-bottom-small</code> or <br><code>.sap-margin-block-end-small</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small, bottom);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-bottom-medium</code> or <br><code>.sap-margin-block-end-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium, bottom);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-bottom-large</code> or <br><code>.sap-margin-block-end-large</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block-end: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large, bottom);</td>
    </tr>
</table>`}}};const r=()=>`${e}${y}`;r.storyName="Begin Margins";r.parameters={docs:{description:{story:`The begin margin is displayed on the left side and in right-to-left mode on the right side of the element.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-begin-tiny</code> or <br><code>.sap-margin-inline-start-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny, begin);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-begin-small</code> or <br><code>.sap-margin-inline-start-small</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small, begin);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-begin-medium</code> or <br><code>.sap-margin-inline-start-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium, begin);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-begin-large</code> or <br><code>.sap-margin-inline-start-large</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-start: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large, begin);</td>
    </tr>
</table>`}}};const n=()=>`${e}${h}`;n.storyName="End Margins";n.parameters={docs:{description:{story:`The end margin is displayed on the right side and in right-to-left mode on the left side of the element.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-end-tiny</code> or <br><code>.sap-margin-inline-end-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny, end);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-end-small</code> or <br><code>.sap-margin-inline-end-small</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small, end);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-end-medium</code> or <br><code>.sap-margin-inline-end-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium, end);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-end-large</code> or <br><code>.sap-margin-inline-end-large</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline-end: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large, end);</td>
    </tr>
</table>`}}};const i=()=>`${e}${v}`;i.storyName="Horizontal Margins";i.parameters={docs:{description:{story:`The horizontal margins are displayed on left and right side of the element.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-x-tiny</code> or <br><code>.sap-margin-inline-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny, x);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-x-small</code> or <br><code>.sap-margin-inline-small</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small, x);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-x-medium</code> or <br><code>.sap-margin-inline-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium, x);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-x-large</code> or <br><code>.sap-margin-inline-large</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin-inline: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large, x);</td>
    </tr>
</table>`}}};const s=()=>`${e}${b}`;s.storyName="Vertical Margins";s.parameters={docs:{description:{story:`The vertical margins are displayed on top and bottom of the element.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-y-tiny</code> or <br><code>.sap-margin-block-tiny</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: var(--sapContent\\_Space\\_Tiny);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: 0.5rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(tiny, y);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-y-small</code> or <br><code>.sap-margin-block-small</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: var(--sapContent\\_Space\\_Small);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: 1rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(small, y);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-y-medium</code> or <br><code>.sap-margin-block-medium</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: var(--sapContent\\_Space\\_Medium);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: 2rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(medium, y);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-y-large</code> or <br><code>.sap-margin-block-large</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: var(--sapContent\\_Space\\_Large);</code></td>
        <td style="padding: 0.25rem;"><code>margin-block: 3rem;</code></td>
        <td style="padding: 0.25rem;">@include sap-margin(large, y);</td>
    </tr>
</table>`}}};const m=()=>`${e}${u}`;m.storyName="Responsive Margins";m.parameters={docs:{description:{story:`The responsive margins class adds a margin around an element based on the width of the container the element is in. <br>

<b>CSS Class: </b><code>.sap-margin-responsive</code><br>
<b>Mixin: </b><code>@include sap-margin-responsive()</code>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Screen Size</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Margin\\_S);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 0 1rem 0;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Margin\\_M);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 1rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Margin\\_L);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 1rem 2rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;"><code>margin: var(--sapContent\\_Margin\\_XL);</code></td>
        <td style="padding: 0.25rem;"><code>margin: 1rem 3rem;</code></td>
    </tr>
</table>`}}};const l=()=>`${e}${M}`;l.storyName="Negative Margins";l.parameters={docs:{description:{story:`The negative margin class adds a double sided negative margin to an element. This is useful when aligning elements with built-in paddings.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Value</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Tiny</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-tiny-negative</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 calc(-1 * var(--sapContent\\_Space\\_Tiny));</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 -0.5rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-small-negative</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 calc(-1 * var(--sapContent\\_Space\\_Small));</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 -1rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-medium-negative</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 calc(-1 * var(--sapContent\\_Space\\_Medium));</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 -2rem;</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>.sap-margin-large-negative</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 calc(-1 * var(--sapContent\\_Space\\_Large));</code></td>
        <td style="padding: 0.25rem;"><code>margin: 0 -3rem;</code></td>
    </tr>
</table>`}}};const o=()=>`${e}${S}`;o.parameters={docs:{description:{story:`<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>

    <tr>
        <th style="padding: 0.25rem 0.75rem;">Mixin</th>
        <th style="padding: 0.25rem 0.75rem;">Resultant CSS</th>
        <th style="padding: 0.25rem 0.75rem;">$value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-all($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-top($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-block-start: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-bottom($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-block-end: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-begin($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-inline-start: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-end($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-inline-end: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-x-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-inline: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-y-equal($value)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-block: $value;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-x($valueLeft, $valueRight)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-inline-start: $valueLeft;<br>margin-inline-end: $valueRight;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-set-margin-y($valueTop, $valueBottom)</td>
        <td style="padding: 0.25rem 0.75rem;">margin-block-start: $valueTop;<br>margin-block-end: $valueBottom;</td>
        <td style="padding: 0.25rem 0.75rem;">defined by the user</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem 0.75rem;">@include sap-margin($value, $side)</td>
        <td style="padding: 0.25rem 0.75rem;">based on parameters</td>
        <td style="padding: 0.25rem 0.75rem;">$value: tiny, small, medium, large or defined by the user <br> $side:
            top, bottom, begin, end, x, y, inline, block, inline-start, inline-end, block-start, block-end
        </td>
    </tr>
    </tbody>
</table>`}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => `${localStyles}${allRoundMarginExampleHtml}`",...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => `${localStyles}${topMarginExampleHtml}`",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => `${localStyles}${bottomMarginExampleHtml}`",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => `${localStyles}${beginMarginExampleHtml}`",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => `${localStyles}${endMarginExampleHtml}`",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => `${localStyles}${horizontalMarginExampleHtml}`",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => `${localStyles}${verticalMarginExampleHtml}`",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => `${localStyles}${responsiveMarginExampleHtml}`",...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => `${localStyles}${negativeMarginExampleHtml}`",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `${localStyles}${helperMixinsExampleHtml}`",...o.parameters?.docs?.source}}};const $=["AllRoundMargin","TopMargin","BottomMargin","BeginMargin","EndMargin","HorizontalMargin","VerticalMargin","ResponsiveMargin","NegativeMargin","HelperMixins"];export{d as AllRoundMargin,r as BeginMargin,a as BottomMargin,n as EndMargin,o as HelperMixins,i as HorizontalMargin,l as NegativeMargin,m as ResponsiveMargin,t as TopMargin,s as VerticalMargin,$ as __namedExportsOrder,_ as default};
