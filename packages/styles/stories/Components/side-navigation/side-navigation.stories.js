
import collapsedExampleHtml from "./collapsed.example.html?raw";
import expandedExampleHtml from "./expanded.example.html?raw";
import floatingExampleHtml from "./floating.example.html?raw";
import '../../../src/side-nav.scss';
import '../../../src/navigation-list.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/_nested-list.scss';
import '../../../src/popover.scss';
export default {
  title: 'Components/Side Navigation',
  parameters: {
    description: `The Side Navigation is an additional option to add a navigation to an application. Same as the vertical navigation it offers the user easy access to multiple pages per space. Side Navigation is triggered by the Menu Icon in Shellbar and can be hidden, collapsed or expanded.

## Anatomy
The Side Navigation consists of the following elements: <br>
<ul>
  <li>**<code>.fd-side-nav</code>**: navigation container. **<code>.is-collapsed</code>** class is added for collapsed state.</li>
  <li>**<code>.fd-side-nav\\_\\_container</code>** with modifier classes **<code>.fd-side-nav\\_\\_container--top</code>** for the main navigation and **<code>.fd-side-nav\\_\\_container--bottom</code>** for the footer navigation.</li>
  <li>**<code>.fd-side-nav\\_\\_separator</code>** separator between the main and footer area. </li>
</ul>


The List structure is based on **Navigation List** 
<ul>
  <li>
    **<code>.fd-navigation-list</code>** with modifier classes **<code>.level-1</code>** and **<code>.level-2</code>** 
  </li>
  <li>
    **<code>.fd-navigation-list\\_\\_item</code>**
    <ul>
        <li>**<code>.fd-navigation-list\\_\\_item--group</code>**</li>
        <li>**<code>.fd-navigation-list\\_\\_item--quick-create</code>** </li>
        <li>**<code>.fd-navigation-list\\_\\_item--two-click</code>**</li>
    </ul>
  </li>
  <li>**<code>.fd-navigation-list\\_\\_content</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_content-container</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_icon</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_text</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_navigation-indicator</code>**</li>
  <li>**<code>.fd-navigation-list\\_\\_indication-arrow</code>**</li>
</ul>

        `,
    tags: []
  }
};
export const Expanded = () => expandedExampleHtml;
Expanded.storyName = 'Expanded State, Defaut (fixed) Style';
Expanded.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};

export const Collapsed = () => collapsedExampleHtml;
Collapsed.storyName = 'Collapsed State, Defaut (fixed) Style';
Collapsed.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};

export const Floating = () => floatingExampleHtml;
Floating.storyName = 'Floating (Overlay) Style, Always Expanded';
Floating.parameters = {
  docs: {
    description: {
      story: `Additional to the fixed default style a floating variant of the Side Navigation is possible. This is always expanded.`
    }
  }
};