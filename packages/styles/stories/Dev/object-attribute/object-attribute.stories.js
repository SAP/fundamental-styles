export default {
    title: 'Dev/Object Attribute'
};

export const Text = () => `<div class="fd-object-attribute" id="standardtext">Standard Object Attribute Text</div>
`;

Text.parameters = { docs: { disable: true } };

export const TextWithLink = () => `<a id="textwithlink" href="#" class="fd-object-attribute--link" tabindex="0">Text With Link</a>
`;

TextWithLink.parameters = { docs: { disable: true } };

export const DisabledLink = () => `<a id="disabledlink" class="fd-object-attribute fd-object-attribute--link" aria-disabled="true">Disabled Object Attribute linked Text</a>
`;

DisabledLink.parameters = { docs: { disable: true } };

export const TruncatedText = () => `<div style="width: 120px;">
<span id="truncated" class="fd-object-attribute" title="Truncate Very long Object Attribute Text">Truncate Very long Object Attribute Text</span>
</div>
`;

TruncatedText.parameters = { docs: { disable: true } };
