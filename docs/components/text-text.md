---
component: text
title: Text
category: text
selector: 
cssFile: 
sourcePath: packages/common-css/stories/text/text.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.234Z
---

# Text

The text component displays text inside a form, table, or any other content area. It is generally used throughout the entire application and is responsive to all screen sizes.
<br>

<b>CSS Classes: </b>
<ul>
    <li><code>.sap-text</code></li>
    <li><code>.sap-text-max-lines</code></li>
    <li><code>.sap-text-pre-wrap</code></li>
    <li><code>.sap-text-hyphenation</code></li>
</ul>
<br>
<b>SCSS Mixin: </b>
<code>@include sap-text(<i style="color: red;">$modifier</i>)</code><br>
where <i style="color: red;">$modifier</i> is optional and can be:
<ul>
    <li><code>max-lines</code>: to display text with a maximum line count</li>
    <li><code>pre-wrap</code>: to display indents and/or whitespace</li>
    <li><code>hyphenation</code>: to display hyphens</li>
</ul>

## Basic Usage

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .demo-box {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <div class="demo-box">
        <p class="sap-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        </p>
    </div>
</div>
```

## Examples

### Default

The default text component can display lines of text that wrap to the next line once they reach the end of the content container width.

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .demo-box {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <div class="demo-box">
        <p class="sap-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        </p>
    </div>
</div>
```

### Whitespace

The text component has a property that allows browsers to render specified indents and whitespace. To display indents and/or whitespace, use the \

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .demo-box {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <h4>No Indents or Whitespace</h4>
    <div class="demo-box">
        <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </div>
    </div>

    <div class="border-example-card">
        <h4>Wrapped Text with Indents and Whitespace (with modifier class)</h4>
        <div class="demo-box">
            <p class="sap-text-pre-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            </div>
        </div>

        <div class="border-example-card">
            <h4>Wrapped Text with Indents and Whitespace (with data attribute)</h4>
            <div class="demo-box">
                <p class="sap-text" data-wrap>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.

                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
                </div>
            </div>
```

### Max lines

The text component can be displayed with a maximum number of lines.
When the maximum is reached, the text truncates and displays an ellipsis. To display text with a maximum line count,
use the \

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .demo-box {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    }
</style>

<div class="border-example-card">
    <h4>No Max Lines Rule</h4>
    <div class="demo-box">
        <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
            amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
            scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
            accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
            egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
            diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
            duis at tellus at urna.
            Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
            quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
            id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
            ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
            faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
            Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
            Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>
        </div>
    </div>

    <div class="border-example-card">
        <h4>2 Max Lines (with class)</h4>
        <div class="demo-box">
            <p class="sap-text-max-lines">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
                amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
                scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
                accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
                egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
                diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
                duis at tellus at urna.
                Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
                quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
                id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
                ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
                faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
                Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>
            </div>
        </div>

        <div class="border-example-card">
            <h4>3 Max Lines (with data attribute)</h4>
            <div class="demo-box">
                <p class="sap-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
                    amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
                    scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
                    accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
                    egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
                    diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
                    duis at tellus at urna.
                    Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
                    quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
                    id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
                    ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
                    faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
                    Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                    Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>
                </div>
            </div>

            <div class="border-example-card">
                <h4>4 Max Lines (with data attribute)</h4>
                <div class="demo-box">
                    <p class="sap-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum. Ut etiam sit
                        amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus in metus vulputate eu
                        scelerisque felis imperdiet proin fermentum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra
                        accumsan. Mauris vitae ultricies leo integer malesuada nunc vel risus. Nisi est sit amet facilisis. Eu turpis
                        egestas pretium aenean. Nunc id cursus metus aliquam eleifend. Placerat in egestas erat imperdiet. Etiam dignissim
                        diam quis enim lobortis scelerisque. A erat nam at lectus. Amet nisl purus in mollis nunc sed id. Purus semper eget
                        duis at tellus at urna.
                        Aliquet eget sit amet tellus cras adipiscing enim. Risus ultricies tristique nulla aliquet enim tortor. Varius quam
                        quisque id diam vel quam elementum pulvinar. Eget aliquet nibh praesent tristique magna. Id interdum velit laoreet
                        id donec ultrices tincidunt arcu. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Montes nascetur
                        ridiculus mus mauris vitae ultricies. In nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id
                        faucibus. Ut lectus arcu bibendum at varius. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.
                        Dolor magna eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                        Augue neque gravida in fermentum et. Proin fermentum leo vel orci porta non pulvinar.</p>
                    </div>
                </div>
```

### Hyphenation

The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, use the \

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .demo-box {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    max-width: 300px;
    }
</style>

<div class="border-example-card">
    <h4>Without Hyphenation</h4>
    <div class="demo-box">
        <p class="sap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </div>
    </div>

    <div class="border-example-card">
        <h4>Hyphenation (with data attribute)</h4>
        <div class="demo-box">
            <p class="sap-text" data-hyphens>Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing el&shy;it, sed do eiusmod tempor
                incididunt ut labore et do&shy;lore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
                aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in repre&shy;henderit in vo&shy;luptate velit esse cillum dolore
                eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
                deserunt mollit anim id est la&shy;bo&shy;rum.</p>
            </div>
        </div>

        <div class="border-example-card">
            <h4>Hyphenation (with modifier class)</h4>
            <div class="demo-box">
                <p class="sap-text-hyphenation">Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing el&shy;it, sed do eiusmod tempor
                    incididunt ut labore et do&shy;lore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
                    aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in repre&shy;henderit in vo&shy;luptate velit esse cillum dolore
                    eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
                    deserunt mollit anim id est la&shy;bo&shy;rum.</p>
                </div>
            </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/common-css/stories/text/text.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
