export default {
    title: 'Dev/Object Attribute',
    components: ['object-attribute']
};

export const Text = () => `

<div class="fd-object-attribute">Standard Object Attribute Text</div>
`;

Text.parameters = { docs: { disable: true } };


export const TextWithLink = () => `
<div class="fd-object-attribute">Object Attribute :
<span class="fd-object-attribute--link" role="link" tabindex="0">Text With Link</span></div>
`;

TextWithLink.parameters = { docs: { disable: true } };

export const DisabledLink = () => `
    <span class="fd-object-attribute fd-object-attribute--link" role="link" tabindex="0" disabled="true" aria-disabled="true">Disabled Object Attribute linked Text</span>
`;

DisabledLink.parameters = { docs: { disable: true } };

export const TruncatedText = () => `
<div style="width: 120px;">
    <span class="fd-object-attribute" tabindex="0" title="Truncate Very long Object Attribute Text">Truncate Very long Object Attribute Text</span>
    </div>
`;

TruncatedText.parameters = { docs: { disable: true } };
