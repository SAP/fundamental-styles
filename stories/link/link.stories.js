import '../../dist/link.css';

export default {
    title: 'Components/Link',
    parameters: {
        description: 'Link component supports the use of modifiers, as well as the <code>is-visited</code> flag, which allows for optimal customization of your hyperlink. There are currently no restrictions as to which content can be included in this component.',
        tags: ['f3', 'a11y', 'theme']
    }
};

export const primary = () => `
<a href="#" class="fd-link" tabindex="0">Standard Link</a>
<br><br>
<a href="#" class="fd-link fd-link--emphasized" tabindex="0">Emphasized Link</a>
<br><br>
<a class="fd-link" aria-disabled="true">Disabled Link</a>
<br><br>
<a href="#" class="fd-link fd-link--inverted">Inverted Link</a>
<br><br>
<a href="#" class="fd-link fd-link--subtle">Subtle Link</a>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    Icon Left Link 
    <span class="sap-icon--slim-arrow-right sap-icon--s"></span>
</a>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    <span class="sap-icon--slim-arrow-left sap-icon--s"></span> 
    Icon Right Link
</a>
`;

primary.storyName = 'Link types examples';
primary.parameters = {
    docs: {
        iframeHeight: 300
    }
};
