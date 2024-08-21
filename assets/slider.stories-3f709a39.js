var R=Object.defineProperty,z=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var o=(s,d,a)=>d in s?R(s,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[d]=a,e=(s,d)=>{for(var a in d||(d={}))N.call(d,a)&&o(s,a,d[a]);if(_)for(var a of _(d))j.call(d,a)&&o(s,a,d[a]);return s},i=(s,d)=>z(s,I(d));/* empty css               */const B=`
<div style="display: flex; flex-flow: row wrap; justify-content: space-between">
  <div>
  <p>Standard vertical slider</p>
    <div style="display: flex;">
      <div class="slider-container" style="height: 500px; width: 50px">
          <div class="fd-slider fd-slider--vertical">
              <div class="fd-slider__inner">
                  <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="bottom: 50%;"></div>
                  <div class="fd-slider__track">
                      <div class="fd-slider__track-range" style="height: 50%;"></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="slider-container" style="height: 500px; width: 50px">
          <div class="fd-slider fd-slider--vertical">
              <div class="fd-slider__inner">
                  <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="bottom: 30%;"></div>
                  <div class="fd-slider__track">
                      <div class="fd-slider__track-range" style="height: 30%;"></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="slider-container" style="height: 500px; width: 50px">
          <div class="fd-slider fd-slider--vertical">
              <div class="fd-slider__inner">
                  <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="bottom: 70%;"></div>
                  <div class="fd-slider__track">
                      <div class="fd-slider__track-range" style="height: 70%;"></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  <div>
    <p>Mobile vertical slider with ticks and labels</p>
    <div class="slider-container" style="height: 500px; width: 50px">
      <div class="fd-slider fd-slider--lg fd-slider--vertical">
        <div class="fd-slider__inner">
          <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks and labels" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="bottom: 50%;"></div>
          <div class="fd-slider__track">
              <div class="fd-slider__track-range" style="height: 50%;"></div>
          </div>
          <div class="fd-slider__tick-wrapper">
              <div class="fd-slider__ticks">
                  <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                  <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                  <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                  <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                  <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                  <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                  <div class="fd-slider__tick"></div>
                  <div class="fd-slider__tick"></div>
                  <div class="fd-slider__tick"></div>
                  <div class="fd-slider__tick"></div>
                  <div class="fd-slider__tick"></div>
              </div>
              <div class="fd-slider__labels">
                  <div class="fd-slider__label">0</div>
                  <div class="fd-slider__label">10</div>
                  <div class="fd-slider__label">20</div>
                  <div class="fd-slider__label">30</div>
                  <div class="fd-slider__label">40</div>
                  <div class="fd-slider__label">50</div>
                  <div class="fd-slider__label">60</div>
                  <div class="fd-slider__label">70</div>
                  <div class="fd-slider__label">80</div>
                  <div class="fd-slider__label">90</div>
                  <div class="fd-slider__label">100</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p>Range slider</p>
    <div class="slider-container slider-container--range" style="height: 500px; width: 50px">
        <div class="fd-slider fd-slider--range fd-slider--vertical">
            <div class="fd-slider__inner">
                <div class="fd-slider__track">
                  <div class="fd-slider__track-range" style="height: 40%; bottom: 40%">
                    <div class="fd-slider__track-focus-range" tabindex="0"></div>
                  </div>
                </div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="bottom: 40%;"></div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="bottom: 80%;"></div>
            </div>
        </div>
    </div>
  </div>
</div>
`,C=`
<div class="slider-container">
    <div class="fd-slider fd-slider--lg">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>
`,U=`
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks and labels" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
            <div class="fd-slider__tick-wrapper">
                <div class="fd-slider__ticks">
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                </div>
                <div class="fd-slider__labels">
                    <div class="fd-slider__label">0</div>
                    <div class="fd-slider__label">10</div>
                    <div class="fd-slider__label">20</div>
                    <div class="fd-slider__label">30</div>
                    <div class="fd-slider__label">40</div>
                    <div class="fd-slider__label">50</div>
                    <div class="fd-slider__label">60</div>
                    <div class="fd-slider__label">70</div>
                    <div class="fd-slider__label">80</div>
                    <div class="fd-slider__label">90</div>
                    <div class="fd-slider__label">100</div>
                </div>
            </div>
        </div>
    </div>
</div>
`,V=`
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
            <div class="fd-slider__tick-wrapper">
                <div class="fd-slider__ticks">
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`,D=`<h3>Regular</h3>
<div class="slider-container slider-container--range">
    <div class="fd-slider fd-slider--range">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">
              <div class="fd-slider__track-range" style="width: 40%">
                <div class="fd-slider__track-focus-range" tabindex="0"></div>
              </div>
            </div>
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
        </div>
    </div>
</div>

<br><br>
<h3>Hover (on one handle)</h3>
<div class="slider-container slider-container--range">
  <div class="fd-slider fd-slider--range">
      <div class="fd-slider__inner">
          <div class="fd-slider__track">
            <div class="fd-slider__track-range" style="width: 40%">
              <div class="fd-slider__track-focus-range" tabindex="0"></div>
            </div>
          </div>
          <div class="fd-slider__handle is-hover" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
          <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
      </div>
  </div>
</div>

<br><br>
<h3>Active (on one handle)</h3>
<div class="slider-container slider-container--range">
  <div class="fd-slider fd-slider--range">
      <div class="fd-slider__inner">
          <div class="fd-slider__track">
            <div class="fd-slider__track-range" style="width: 40%">
              <div class="fd-slider__track-focus-range" tabindex="0"></div>
            </div>
          </div>
          <div class="fd-slider__handle is-active" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
          <div class="fd-slider__handle tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
      </div>
  </div>
</div>


<br><br>
<h3>Focus</h3>
<div class="slider-container slider-container--range">
  <div class="fd-slider fd-slider--range">
      <div class="fd-slider__inner">
          <div class="fd-slider__track">
            <div class="fd-slider__track-range" style="width: 40%">
              <div class="fd-slider__track-focus-range is-focus" tabindex="0"></div>
            </div>
          </div>
          <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
          <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
      </div>
  </div>
</div>



`,F=`
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
        <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>
<br><br>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
        <div class="fd-slider__handle is-hover" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>
<br><br>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
        <div class="fd-slider__handle is-active" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>
<br><br>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
        <div class="fd-slider__handle is-focus" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>

`,$={title:"Components/Slider",parameters:{description:`There are two types of sliders, <a href="https://experience.sap.com/internal/fiori-design-web/slider/">Standard Slider</a> and  <a href="https://experience.sap.com/internal/fiori-design-web/range-slider/">Range Slider</a>. The standard slider is a control that enables the user to adjust single values within a specified numerical range. The range slider enables the user to select a value range within a predefined numerical interval.

##Usage
**Use the slider if:**

-	you want to change values with graphical support.


**Use the range slide if:**

- you want to select a value range within a predefined numerical interval. If you want to specify only a single value within a predefined numerical interval, use the slider instead.

## Responsiveness
The slider itself is not responsive. It adjusts to the responsiveness of its parent container by recalculating and resizing the width of the control.

## Components
- **Track: ** a horizontal bar which visually represents the range between a minimum and maximum value. A portion of the slider represents the current value or a range.
- **Tick Marks:** vertical elements that allow the slider to snap to predefined values
- **Handles:**	interactive elements which can be dragged horizontally to change the current slider value or range
- **Labels:**	the text or numeric representation of a tick mark value
- **Helper Area:**	the area where the input and the tooltip are shown.


## Accessibility
To ensure that both the standard and range sliders are accessible, a div element with class \`fd-slider__handle\` must have the following aria attributes:

- \`tabindex="0"\`
- \`role="slider"\`
- \`aria-label\`: a string that labels the element
- \`aria-labelledby\`: an ID reference to a visible element that labels the slider, used if \`aria-label\` isn't provided
- \`aria-valuemin\`: the decimal value representing the minimum allowed value of the slider
- \`aria-valuemax\`: the decimal value representing the maximum allowed value of the slider
- \`aria-valuenow\`: the decimal value representing the current value of the slider
- \`aria-valuetext\`: a string representation of the current value if needed (e.g., 20$, 33°C)

**Note:** It should be possible to change slider's value by pressing the arrow keys.

`},tags:["f3","theme"]},t=()=>F;t.parameters={docs:{description:{story:`
The standard slider displays a track with a handle. When the user hovers over the handle, a hand cursor appears. The user can either drag and drop the handle or click on the bar to change the slider setting.
`}}};const v=()=>D;v.parameters={docs:{description:{story:"\nThe range slider displays a track with two handles, indicating that a range between two values can be selected. To display a range slider, add the `fd-slider__track-range` class to the `fd-slider__track` element.\n\n        "}}};const c=()=>V;c.parameters={docs:{description:{story:"\nThe slider can display ticks on the bar to help guide the user. If a tick is in selected range (Active Area), the `fd-slider__tick--in-range` modifier class should be applied to the `fd-slider__tick` base class.\n        "}}};const l=()=>U;l.storyName="Ticks and labels";l.parameters={docs:{description:{story:"\nThe slider can display labels that indicate the values of each tick. Labels can be displayed with the `fd-slider__label` class. Be advised that this styling does not include the positioning of the labels.\n        "}}};const r=()=>C;r.storyName="Mobile";r.parameters={docs:{description:{story:"\nBy default, the slider is not responsive. However, to make the slider more mobile-friendly, you may enlarge the slider handle and its hit area by adding `fd-slider__handle--lg` class to `fd-slider__handle` element.\nTo add horizontal paddings of `0.8125rem` use the `fd-slider--lg` modifier class\n        "}}};const n=()=>B;n.storyName="Vertical Slider";n.parameters={docs:{description:{story:"\nBy default, the slider is not responsive. However, to make the slider more mobile-friendly, you may enlarge the slider handle and its hit area by adding `fd-slider__handle--lg` class to `fd-slider__handle` element.\nTo add horizontal paddings of `0.8125rem` use the `fd-slider--lg` modifier class\n        "}}};var f,h,m;t.parameters=i(e({},t.parameters),{docs:i(e({},(f=t.parameters)==null?void 0:f.docs),{source:e({originalSource:"() => standardExampleHtml"},(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source)})});var u,b,g;v.parameters=i(e({},v.parameters),{docs:i(e({},(u=v.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => rangeExampleHtml"},(g=(b=v.parameters)==null?void 0:b.docs)==null?void 0:g.source)})});var p,k,y;c.parameters=i(e({},c.parameters),{docs:i(e({},(p=c.parameters)==null?void 0:p.docs),{source:e({originalSource:"() => ticksExampleHtml"},(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source)})});var x,w,T;l.parameters=i(e({},l.parameters),{docs:i(e({},(x=l.parameters)==null?void 0:x.docs),{source:e({originalSource:"() => ticksAndLabelsExampleHtml"},(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source)})});var H,S,E;r.parameters=i(e({},r.parameters),{docs:i(e({},(H=r.parameters)==null?void 0:H.docs),{source:e({originalSource:"() => mobileModeExampleHtml"},(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source)})});var M,A,L;n.parameters=i(e({},n.parameters),{docs:i(e({},(M=n.parameters)==null?void 0:M.docs),{source:e({originalSource:"() => verticalModeExampleHtml"},(L=(A=n.parameters)==null?void 0:A.docs)==null?void 0:L.source)})});const q=["Standard","Range","Ticks","TicksAndLabels","MobileMode","VerticalMode"];export{r as MobileMode,v as Range,t as Standard,c as Ticks,l as TicksAndLabels,n as VerticalMode,q as __namedExportsOrder,$ as default};
