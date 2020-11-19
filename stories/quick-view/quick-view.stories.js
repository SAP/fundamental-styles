export default {
    title: 'Components/Quick View',
    parameters: {
        description: 'The quick view is similar to a popover, but has a predefined structure, a fixed set of UI elements, and automatic UI rendering.',
        docs: { iframeHeight: 350 },
        tags: ['f3', 'a11y', 'theme'],
        components: ['quick view']
    }
};

export const Basic = () => '<div></div>';

Basic.storyName = 'Basic';

Basic.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Basic'
    }
};

export const Navigation = () => 'Navigation';

Navigation.storyName = 'Navigation';

Navigation.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Navigation'
    }
};

export const DataBinding = () => 'Data Binding';

DataBinding.storyName = 'Data Binding';

DataBinding.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Data Binding'
    }
};

export const FallbackIcon = () => 'Fallback Icon';

FallbackIcon.storyName = 'Fallback Icon';

FallbackIcon.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Fallback Icon'
    }
};
