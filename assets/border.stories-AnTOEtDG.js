const r=`<style>
    .demo {
        gap: 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
        background: #fff;
    }
</style>

<div class="demo">
    <div class="sap-border-style-solid sap-border-width-1 sap-border-color-error"></div>
    <div class="sap-border-style-dashed sap-border-width-2 sap-border-color-warning"></div>
    <div class="sap-border-style-dotted sap-border-width-3 sap-border-color-success"></div>
    <div class="sap-border-style-double sap-border-width-4 sap-border-color-information"></div>
    <div class="sap-border-style-solid sap-border-width-4 sap-border-color-button"></div>
    <div class="sap-border-style-dashed sap-border-width-4 sap-border-color-assistant"></div>
</div>

<br><br>

<div class="demo">
    <div class="sap-border-inline-style-solid sap-border-inline-width-4 sap-border-inline-color-error"></div>
    <div class="sap-border-block-style-dashed sap-border-block-width-4 sap-border-block-color-warning"></div>
    <div class="sap-border-inline-start-style-dotted sap-border-inline-start-width-4 sap-border-inline-start-color-success"></div>
    <div class="sap-border-inline-end-style-double sap-border-inline-end-width-4 sap-border-inline-end-color-information"></div>
    <div class="sap-border-block-start-style-solid sap-border-block-start-width-4 sap-border-block-start-color-button"></div>
    <div class="sap-border-block-end-style-dashed sap-border-block-end-width-4 sap-border-block-end-color-assistant"></div>
</div>`,o=`<div>
1. <b>All</b>

<pre>@include sap-border(0.125rem, solid, #000);</pre>
<br>

2. <b>Border Top</b>
<pre>@include sap-border(0.125rem, solid, #000, top);</pre> or <pre>@include sap-border(0.125rem, solid, #000, block-start);</pre>
<br>

3. <b>Border Bottom</b>
<pre>@include sap-border(0.125rem, solid, #000, bottom);</pre> or <pre>@include sap-border(0.125rem, solid, #000, block-end);</pre>
<br>

4. <b>Border Left</b>
<pre>@include sap-border(0.125rem, solid, #000, left);</pre> or <pre>@include sap-border(0.125rem, solid, #000, inline-start);</pre>
<br>

6. <b>Border Right</b>
<pre>@include sap-border(0.125rem, solid, #000, right);</pre> or <pre>@include sap-border(0.125rem, solid, #000, inline-end);</pre>
<br>

7. <b>Border Top and Bottom (y)</b>
<pre>@include sap-border(0.125rem, solid, #000, y);</pre> or <pre>@include sap-border(0.125rem, solid, #000, block);</pre>
<br>

8. <b>Border Left and Right (x)</b>
<pre>@include sap-border(0.125rem, solid, #000, x);</pre> or <pre>@include sap-border(0.125rem, solid, #000, inline);</pre>
<br>

</div>`,t={title:"Border",parameters:{description:`Border utilities provide ready-to-use classes for commonly used border parameters—style, width, and color. In addition to these predefined classes, SCSS mixins are available for applying the same styles in custom classes, allowing flexibility while ensuring design consistency.
<br><br><h3>Border Style Classes</h3><table>
  <thead>
    <tr>
      <th>Style</th>
      <th>CSS Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>solid</td>
      <td><code>.sap-border-style-solid</code></td>
    </tr>
    <tr>
      <td>dashed</td>
      <td><code>.sap-border-style-dashed</code></td>
    </tr>
    <tr>
      <td>dotted</td>
      <td><code>.sap-border-style-dotted</code></td>
    </tr>
    <tr>
      <td>double</td>
      <td><code>.sap-border-style-double</code></td>
    </tr>
    <tr>
      <td>hidden</td>
      <td><code>.sap-border-style-hidden</code></td>
    </tr>
    <tr>
      <td>none</td>
      <td><code>.sap-border-style-none</code></td>
    </tr>
  </tbody>
</table>
<br><h3>Border Width Classes</h3>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>CSS Class</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><code>.sap-border-width-1</code></td>
      <td>0.0625rem</td>
    </tr>
    <tr>
      <td>2</td>
      <td><code>.sap-border-width-2</code></td>
      <td>0.125rem</td>
    </tr>
    <tr>
      <td>3</td>
      <td><code>.sap-border-width-3</code></td>
      <td>0.1875rem</td>
    </tr>
    <tr>
      <td>4</td>
      <td><code>.sap-border-width-4</code></td>
      <td>0.25rem</td>
    </tr>
    <tr>
      <td>element</td>
      <td><code>.sap-border-width-element</code></td>
      <td>var(--sapElement_BorderWidth)</td>
    </tr>
    <tr>
      <td>group</td>
      <td><code>.sap-border-width-group</code></td>
      <td>var(--sapGroup_BorderWidth)</td>
    </tr>
    <tr>
      <td>content-focus</td>
      <td><code>.sap-border-width-content-focus</code></td>
      <td>var(--sapContent_FocusWidth)</td>
    </tr>
    <tr>
      <td>list</td>
      <td><code>.sap-border-width-list</code></td>
      <td>var(--sapList_BorderWidth)</td>
    </tr>
    <tr>
      <td>button</td>
      <td><code>.sap-border-width-button</code></td>
      <td>var(--sapButton_BorderWidth)</td>
    </tr>
    <tr>
      <td>message</td>
      <td><code>.sap-border-width-message</code></td>
      <td>var(--sapMessage_BorderWidth)</td>
    </tr>
    <tr>
      <td>field</td>
      <td><code>.sap-border-width-field</code></td>
      <td>var(--sapField_BorderWidth)</td>
    </tr>
    <tr>
      <td>field-invalid</td>
      <td><code>.sap-border-width-field-invalid</code></td>
      <td>var(--sapField_InvalidBorderWidth)</td>
    </tr>
    <tr>
      <td>field-warning</td>
      <td><code>.sap-border-width-field-warning</code></td>
      <td>var(--sapField_WarningBorderWidth)</td>
    </tr>
    <tr>
      <td>field-success</td>
      <td><code>.sap-border-width-field-success</code></td>
      <td>var(--sapField_SuccessBorderWidth)</td>
    </tr>
    <tr>
      <td>field-information</td>
      <td><code>.sap-border-width-field-information</code></td>
      <td>var(--sapField_InformationBorderWidth)</td>
    </tr>
  </tbody>
</table>
<br><h3>Border Color Classes</h3>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>CSS Class</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>error</td><td><code>.sap-border-color-error</code></td><td>var(--sapErrorBorderColor)</td></tr>
    <tr><td>warning</td><td><code>.sap-border-color-warning</code></td><td>var(--sapWarningBorderColor)</td></tr>
    <tr><td>success</td><td><code>.sap-border-color-success</code></td><td>var(--sapSuccessBorderColor)</td></tr>
    <tr><td>information</td><td><code>.sap-border-color-information</code></td><td>var(--sapInformationBorderColor)</td></tr>
    <tr><td>neutral</td><td><code>.sap-border-color-neutral</code></td><td>var(--sapNeutralBorderColor)</td></tr>
    <tr><td>content-badge</td><td><code>.sap-border-color-content-badge</code></td><td>var(--sapContent_BadgeBorderColor)</td></tr>
    <tr><td>content-foreground</td><td><code>.sap-border-color-content-foreground</code></td><td>var(--sapContent_ForegroundBorderColor)</td></tr>
    <tr><td>shell</td><td><code>.sap-border-color-shell</code></td><td>var(--sapShell_BorderColor)</td></tr>
    <tr><td>shell-interactive</td><td><code>.sap-border-color-shell-interactive</code></td><td>var(--sapShell_InteractiveBorderColor)</td></tr>
    <tr><td>assistant</td><td><code>.sap-border-color-assistant</code></td><td>var(--sapAssistant_BorderColor)</td></tr>
    <tr><td>button</td><td><code>.sap-border-color-button</code></td><td>var(--sapButton_BorderColor)</td></tr>
    <tr><td>field</td><td><code>.sap-border-color-field</code></td><td>var(--sapField_BorderColor)</td></tr>
    <tr><td>list</td><td><code>.sap-border-color-list</code></td><td>var(--sapList_BorderColor)</td></tr>
    <tr><td>tile</td><td><code>.sap-border-color-tile</code></td><td>var(--sapTile_BorderColor)</td></tr>
    <tr><td>message-error</td><td><code>.sap-border-color-message-error</code></td><td>var(--sapMessage_ErrorBorderColor)</td></tr>
    <tr><td>message-warning</td><td><code>.sap-border-color-message-warning</code></td><td>var(--sapMessage_WarningBorderColor)</td></tr>
    <tr><td>message-success</td><td><code>.sap-border-color-message-success</code></td><td>var(--sapMessage_SuccessBorderColor)</td></tr>
    <tr><td>message-information</td><td><code>.sap-border-color-message-information</code></td><td>var(--sapMessage_InformationBorderColor)</td></tr>
  </tbody>
</table>
<br><br>

<p>
  The classes listed above apply borders on <strong>all four sides</strong> of an element.
  Similar variations are available for applying borders to specific directions:
</p>

<ul>
  <li>
    **Inline**: applies border along the inline (text) direction
    (left/right in LTR, right/left in RTL)
    <ul>
      <li><code>sap-border-inline-style-*</code></li>
      <li><code>sap-border-inline-width-*</code></li>
      <li><code>sap-border-inline-color-*</code></li>
    </ul>
  </li>

  <li>
    **Block**: applies border along the block (vertical) direction (top/bottom)
    <ul>
      <li><code>sap-border-block-style-*</code></li>
      <li><code>sap-border-block-width-*</code></li>
      <li><code>sap-border-block-color-*</code></li>
    </ul>
  </li>

  <li>
    **Block Start**: applies border to the start edge of the block direction
    (top in horizontal writing modes)
    <ul>
      <li><code>sap-border-block-start-style-*</code></li>
      <li><code>sap-border-block-start-width-*</code></li>
      <li><code>sap-border-block-start-color-*</code></li>
    </ul>
  </li>

  <li>
    **Block End**: applies border to the end edge of the block direction
    (bottom in horizontal writing modes)
    <ul>
      <li><code>sap-border-block-end-style-*</code></li>
      <li><code>sap-border-block-end-width-*</code></li>
      <li><code>sap-border-block-end-color-*</code></li>
    </ul>
  </li>

  <li>
    **Inline Start**: applies border to the start edge of the inline direction
    (left in LTR, right in RTL)
    <ul>
      <li><code>sap-border-inline-start-style-*</code></li>
      <li><code>sap-border-inline-start-width-*</code></li>
      <li><code>sap-border-inline-start-color-*</code></li>
    </ul>
  </li>

  <li>
    **Inline End**: applies border to the end edge of the inline direction
    (right in LTR, left in RTL)
    <ul>
      <li><code>sap-border-inline-end-style-*</code></li>
      <li><code>sap-border-inline-end-width-*</code></li>
      <li><code>sap-border-inline-end-color-*</code></li>
    </ul>
  </li>
</ul>`}},e=()=>r;e.storyName="";e.parameters={docs:{description:{story:""}}};const d=()=>o;d.storyName="SCSS mixin sap-border";d.parameters={docs:{description:{story:`<p>
  The <code>sap-border</code> helper mixin allows you to specify the width, style, and color of an element's border. 
  This is achieved by providing values to the <code>sap-border</code> parameters: 
  <code>$width</code>, <code>$style</code>, <code>$color</code>, and <code>$pos</code>.
</p>

<p>
  The <code>$pos</code> parameter defines where the border will be applied and can be one of the following:
</p>

<ul>
  <li>**all**: applies borders to all sides (default).</li>
  <li>**top**: applies the border to the top side (<code>border-block-start</code>).</li>
  <li>**bottom**: applies the border to the bottom side (<code>border-block-end</code>).</li>
  <li>**left**: applies the border to the left side (<code>border-inline-start</code>).</li>
  <li>**right**: applies the border to the right side (<code>border-inline-end</code>).</li>
  <li>**x**: applies the border to left and right sides (<code>border-inline</code>).</li>
  <li>**y**: applies the border to top and bottom sides (<code>border-block</code>).</li>
  <li>**inline**: applies the border to both inline sides (<code>border-inline</code>).</li>
  <li>**block**: applies the border to both block sides (<code>border-block</code>).</li>
  <li>**inline-start**: applies the border to the start of the inline axis (<code>border-inline-start</code>).</li>
  <li>**inline-end**: applies the border to the end of the inline axis (<code>border-inline-end</code>).</li>
  <li>**block-start**: applies the border to the start of the block axis (<code>border-block-start</code>).</li>
  <li>**block-end**: applies the border to the end of the block axis (<code>border-block-end</code>).</li>
</ul>
`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => borderExampleHtml",...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => borderMixinExampleHtml",...d.parameters?.docs?.source}}};const s=["Border","BorderMixin"];export{e as Border,d as BorderMixin,s as __namedExportsOrder,t as default};
