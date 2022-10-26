import '../../../src/icon.scss';
import '../../../src/link.scss';
export default {
    title: 'Components/Link',
    parameters: {
        description: `A link (also known as hyperlink) is an interactive text element that allows users to navigate to another page or trigger a certain event.

##Usage

**Use a link if:**

- You want to navigate to another page.
- You want to trigger an event.
- You want to point to an object or person. If so, you can either navigate to the object or person’s details or display them in a quick view after the link is triggered.

** Do not use a link if:**

- You could use a **Button** to trigger the action instead.
- There is no target or reference to be linked to.

##Accessibility
Use a meaningful link text that indicates what will happen when the user interacts with the link i.e. *Open Sales Order*.
Avoid texts such as *Click Here* or *Link*, as these do not make it clear to the user what the purpose of the link is.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `
<a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Default link</span></a>
<br><br>
<a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Emphasized link</span></a>
<br><br>
<a href="#" class="fd-link fd-link--subtle"><span class="fd-link__content">Subtle link</span></a>
<br><br>
<a class="fd-link" aria-disabled="true"><span class="fd-link__content">Disabled link</span></a>
<br><br>
<div  style="background-color:var(--sapShellColor);padding:10px">
    <a href="#" class="fd-link fd-link--inverted"><span class="fd-link__content">Inverted link</span></a>
</div>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    <span class="fd-link__content">Right icon link</span>
    <span class="sap-icon--slim-arrow-right sap-icon--s"></span>
</a>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    <span class="sap-icon--slim-arrow-left sap-icon--s"></span>
    <span class="fd-link__content">Left icon link</span>
</a>
`;

Primary.storyName = 'Types';
Primary.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `There are different types of links for various use cases.

| Types | Modifier class | Use to... |
| ----:| :--------------- | :--------------|
| Default | *n/a* | Display a simple link. |
| Subtle | \`fd-link--subtle\` | Distinguish between important (default) and less important (subtle) links in tables with large data lists. |
| Disabled | \`fd-link--disabled\` | Display a link that a user cannot interactive with. |
| Inverted | \`fd-link--inverted\` | Display a link in a **Shell Bar**. |

###Icons
You can display a link with an icon placed on either side of the link text.

| Icon style | Modifier class |
| ----------: | :-------------|
| Left Arrow | \`sap-icon--slim-arrow-left sap-icon--s\` |
| Right Arrow | \`sap-icon--slim-arrow-right sap-icon--s\` |
`
        }
    }
};
