import '../../dist/semantic-elements.css';

export default {
    title: 'Components/Semantic Elements',
    parameters: {
        description: ``
    }
};

export const button = () => `
    <button>Default Button</button>
    <button disabled>Disabled Button</button>
`;

button.parameters = {
    docs: { iframeHeight: 300 }
};

export const input = () => `
    <input type="text" aria-label="Default Input Text" placeholder="Default Input Text">
    <input type="number" aria-label="Default Input Number" placeholder="Default Input Number">
    <input type="password" aria-label="Default Input Password" placeholder="Default Input Password">
    
    <input type="text" disabled aria-label="Disabled Input" value="Disabled Input">
    <input type="text" readonly aria-label="Readonly Input" value="Readonly Input">
`;

input.parameters = {
    docs: { iframeHeight: 300 }
};

export const textarea = () => `
    <textarea aria-label="Default Textarea" placeholder="Write something in textarea..."></textarea>
    <textarea aria-label="Disabled Textarea" disabled>Disabled Textarea</textarea>
    <textarea aria-label="Disabled Textarea" readonly>Readonly Textarea</textarea>
`;

textarea.parameters = {
    docs: { iframeHeight: 300 }
};

export const link = () => `
    <a href="#">Link</a>
    <br/>
    <a href="#" aria-disabled="true">Disabled Link</a>
`;

link.parameters = {
    docs: { iframeHeight: 300 }
};

export const list = () => `
<ul role="list">
  <li role="listitem" tabindex="0">
      List item 1
  </li>
  <li role="listitem" tabindex="0">
      List item 2
  </li>
  <li role="listitem" tabindex="0">
      List item 3
  </li>
  <li role="listitem" tabindex="0">
      List item 4
  </li>
</ul>
`;

list.parameters = {
    docs: { iframeHeight: 400 }
};
