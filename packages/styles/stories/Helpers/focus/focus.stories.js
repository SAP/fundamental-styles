export default {
    title: 'Helpers/Focus Visual',
    parameters: {
        description: `Focus Visual is the visual representation of the focus state. When focus visual is shown it is always visible regardless of the other states the control is in (normal, hover, pressed, active, selected, etc). The Focus Visual Element is available in all themes with colors that work on light and dark backgrounds. The usage of focus or contrast focus colors is determined by each control individually and might be different for the light and dark versions of the controls.
      `,
        docs: { iframeHeight: 500 }
    }
};

export const FioriFocus = () => `<div>
1. with default parameters ($offset: -0.1875rem, $alternative: false)

<pre>@include sap-fiori-focus();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $alternative: false)
<pre>@include sap-fiori-focus(0.0625rem);</pre>
<br>

3. with specified focus offset and alternative focus color ($offset: 0.0625rem, $alternative: true)
<pre>@include sap-fiori-focus(0.0625rem, true);</pre>
</div>`;
FioriFocus.storyName = 'Mixin sap-fiori-focus';
FioriFocus.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: '<code>sap-fiori-focus</code> has 2 optional parameters: <code>$offset</code> and <code>$alternative</code>. By default, the <code>$offset</code> is set to -0.1875rem, and <code>$alternative</code> to false. If <code>$alternative</code> is set to true, the outline color is <code>--sapContent_ContrastFocusColor</code>, instead of <code>--sapContent_FocusColor</code>.'
        }
    }
};

export const FioriFocusWithin = () => `<div>
1. with default parameters ($offset: -0.1875rem, $alternative: false)

<pre>@include sap-fiori-focus-within();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $alternative: false)
<pre>@include sap-fiori-focus-within(0.0625rem);</pre>
<br>

3. with specified focus offset and alternative focus color ($offset: 0.0625rem, $alternative: true)
<pre>@include sap-fiori-focus-within(0.0625rem, true);</pre>
</div>`;
FioriFocusWithin.storyName = 'Mixin sap-fiori-focus-within';
FioriFocusWithin.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'The focus-within applies styling rules to a parent element when any child element receives focus. Use the <code>sap-fiori-focus-within</code> mixin in such cases. The parameters are the same as in <code>sap-fiori-focus</code>'
        }
    }
};

export const FakeFioriFocus = () => `<div>
1. with default parameters ($offset: 0, $radius: 0, $alternative: false)

<pre>@include sap-fake-fiori-focus();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $radius: 0, $alternative: false)
<pre>@include sap-fake-fiori-focus(0.0625rem);</pre>
<br>

3. with specified focus offset, radius and alternative focus color ($offset: 0.0625rem, $radius: 0.25rem, $alternative: true)
<pre>@include sap-fake-fiori-focus(0.0625rem, 0.25rem, true);</pre>
</div>`;
FakeFioriFocus.storyName = 'Mixin sap-fake-fiori-focus';
FakeFioriFocus.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `Most modern browsers do not support outline radius. An alternative apporach, using <code>sap-fake-fiori-focus</code> mixin, can be applied to solve this problem. 
            The parameters this mixin accepts are: $offset, $radius and $alternative.`
        }
    }
};

export const FakeFioriFocusWithin = () => `<div>
1. with default parameters ($offset: 0, $radius: 0, $alternative: false)

<pre>@include sap-fake-fiori-focus-within();</pre>
<br>

2. with specified focus offset ($offset: 0.0625rem, $radius: 0, $alternative: false)
<pre>@include sap-fake-fiori-focus-within(0.0625rem);</pre>
<br>

3. with specified focus offset, radius and alternative focus color ($offset: 0.0625rem, $radius: 0.25rem, $alternative: true)
<pre>@include sap-fake-fiori-focus-within(0.0625rem, 0.25rem, true);</pre>
</div>`;
FakeFioriFocusWithin.storyName = 'Mixin sap-fake-fiori-focus-within';
FakeFioriFocusWithin.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: ''
        }
    }
};
