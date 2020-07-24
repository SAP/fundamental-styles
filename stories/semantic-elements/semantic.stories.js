import "../../dist/semantic-elements.css";

export default {
    title: "Components/Semantic Elements",
    parameters: {
        description: ``
    }
};

export const button = () => `
    <button>Default Button</button>
    <button disabled>Disabled Button</button>
`;

button.parameters = {
    docs: { iframeHeight: 200 }
};

export const input = () => `
    <label for="input-1">Default input</label>
    <input type="text" id="input-1" aria-label="Default Input Text" placeholder="Write Something...">
    
    
    <label for="input-2">Default input number</label>
    <input type="number" id="input-2" aria-label="Default Input Number" placeholder="Write Something...">


    <label for="input-3">Default input password</label>
    <input type="password" id="input-3" aria-label="Default Input Password" placeholder="Write Something...">
    
    <label for="input-4">Disabled Input</label>
    <input type="text" id="input-4" disabled aria-label="Disabled Input" value="Disabled Input">


    <label for="input-4">Readonly Input</label>
    <input type="text" id="input-5" readonly aria-label="Readonly Input" value="Readonly Input">
`;

input.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: "There are presented inputs with associated labels"
    }
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
    docs: { iframeHeight: 200 }
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
    docs: { iframeHeight: 300 }
};

export const form = () => `
<form>
    <div>
        <label for="input-form-1">Input inside form</label>
        <input type="text" id="input-form-1" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
    <div>
        <label for="input-form-2">Input inside form</label>
        <input type="text" id="input-form-2" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
    <div>
        <label for="input-form-3">Input inside form</label>
        <input type="text" id="input-form-3" aria-label="Input inside form" placeholder="Write Something...">    
    </div>
</form>
`;

form.parameters = {
    docs: { iframeHeight: 400 }
};


