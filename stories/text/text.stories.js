export default {
    title: 'Components/Text',
    parameters: {
        description: `The text control is used to display text. It generally contains the text
         that developers want apps to display (property: text).`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['text']
    }
};

export const defaultExample = () => `
    <p class="fd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>
`;

defaultExample.storyName = 'Default';
defaultExample.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription: 'Default example of the text component'
    }
};

export const wrapping = () => `
    <h3>Whitespace normal</h3>
    <p class="fd-text" style="white-space: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>
    
    <h3>Whitespace pre-wrap</h3>
    <p class="fd-text" style="white-space: pre-wrap;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.</p>

    <h3>Whitespace nowrap</h3>
    <div style="overflow: auto;">
        <p class="fd-text" style="white-space: nowrap;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    </div>
`;

wrapping.storyName = 'Wrapping';
wrapping.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `You can define whether the text should wrap or truncate directly
                           by setting <code class="docs-code">white-space</code> style`
    }
};

export const maxLines = () => `
    <h3>No max lines rule</h3>
    <p className="fd-text" style="white-space: normal;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
    
    <h3>2 max lines</h3>
    <p class="fd-text" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;">
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

    <h3>3 max lines</h3>
    <p class="fd-text" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
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
`;

maxLines.storyName = 'Max lines';
maxLines.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `You can define maximum number of lines for text, after reaching the limit text will be
        truncated and ellipsis will be added. To set maximum numbers you should use these styles:
        <code class="docs-code">
        display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: [number of lines]; overflow: hidden;
        </code>`
    }
};

export const hyphenation = () => `

    <h3>Without hyphens</h3>
    <div style="width: 300px">
        <p class="fd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    </div>
    
    <h3>Hyphen</h3>
    <div style="width: 300px">
        <p class="fd-text">Lorem ipsum dolor sit amet, consectetur adip-iscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad mi-nim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    </div>
    
    <h3>Shy</h3>
    <div style="width: 300px">
        <p class="fd-text">Lorem ipsum dolor sit amet, con&shy;sectetur adip&shy;iscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad mi&shy;nim veniam, quis nostrud exer&shy;citation ullamco laboris nisi ut
        aliquip ex ea commodo conse&shy;quat. Duis aute irure dolor in reprehenderit in vo&shy;luptate velit esse cillum dolore
        eu fu&shy;giat nulla pari&shy;atur. Excepteur sint occaecat cupidatat non pro&shy;ident, sunt in culpa qui officia
        deserunt mollit anim id est la&shy;bo&shy;rum.</p>
    </div>
`;

hyphenation.storyName = 'Hyphenation';
hyphenation.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `The text control supports hyphenation. There are two characters used to manually
specify potential line break points within text:

- **HYPHEN:** The "hard" hyphen character indicates a visible line break opportunity. Even if the line
is not actually broken at that point, the hyphen is still rendered.

- **SHY:** An invisible, "soft" hyphen. This character is not rendered visibly; instead, 
it marks a place where the browser should break the word if hyphenation is necessary.
In HTML, use <code class="docs-code">&shy;</code> to insert a soft hyphen.`
    }
};
