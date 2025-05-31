import { makeDecorator } from 'storybook/preview-api';

export const withContentDensity = makeDecorator({
    name: 'directionalityProvider',
    parameterName: 'directionality',
    wrapper: (storyFn, context) => {
        const contentDensity = context?.globals?.contentDensity || 'cozy';
        const story = storyFn(context);
        if (typeof story === 'string') {
            // visual stories return HTMLElements, whereas ordinary stories return html strings
            return `
<div class="is-${contentDensity}">
    ${storyFn(context)}
</div>`;
        }
        if (story instanceof HTMLElement) {
            story.classList.add(`is-${contentDensity}`);
        }
        return story;
    }
})
