import '../../dist/link.css';

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

export const primary = () => `
<a href="#" class="fd-link" tabindex="0">Default link</a>
<br><br>
<a href="#" class="fd-link fd-link--emphasized" tabindex="0">Emphasized link</a>
<br><br>
<a href="#" class="fd-link fd-link--subtle">Subtle link</a>
<br><br>
<a class="fd-link" aria-disabled="true">Disabled link</a>
<br><br>
<div style="background-color:#314a5e;padding:10px">
    <a href="#" class="fd-link fd-link--inverted">Inverted link</a>
</div>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    Right icon link 
    <span class="sap-icon--slim-arrow-right sap-icon--s"></span>
</a>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    <span class="sap-icon--slim-arrow-left sap-icon--s"></span> 
    Left icon link
</a>
`;

primary.storyName = 'Types';
primary.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `There are different types of links for various use cases.
    
| Types | Modifier class | Use to... |
| ----:| :--------------- | :--------------|
| Default | *n/a* | Display a simple link. |
| Subtle | <code>fd-link--subtle</code> | Distinguish between important (default) and less important (subtle) links in tables with large data lists. |
| Disabled | <code>fd-link--disabled</code> | Display a link that a user cannot interactive with. |
| Inverted | <code>fd-link--inverted</code> | Display a link in a **Shell Bar**. |
###Icons
You can display a link with an icon placed on either side of the link text.
| Icon style | Modifier class |
| ----------: | :-------------| 
| Left Arrow | <code>sap-icon--slim-arrow-left sap-icon--s</code> |
| Right Arrow | <code>sap-icon--slim-arrow-right sap-icon--s</code> |
`

    }
};
