import {makeDecorator} from 'storybook/preview-api';

export const withDirectionality = makeDecorator({
    name: 'directionalityProvider',
    parameterName: 'directionality',
    wrapper: (storyFn, context) => {
        const directionality = context?.globals?.directionality || 'ltr';
        const story = storyFn(context);
        if (typeof story === 'string') {
            // visual stories return HTMLElements, whereas ordinary stories return html strings
            return `
<div dir="${directionality}">
    ${storyFn(context)}
</div>`;
        }
        if (story instanceof HTMLElement) {
            story.setAttribute('dir', directionality);
        }
        return story;
    }
});
