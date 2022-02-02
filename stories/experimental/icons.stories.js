import description from '!./description.md?raw';
import { DocsContainer } from '@storybook/addon-docs';
import IconsDocsPage from './IconsDocsPage';
import { independentSVGUsage } from './svg-icons/IndependentSVGUsage/IndependentSVGUsage';

export default {
    parameters: {
        description,
        docs: {
            container: DocsContainer,
            page: IconsDocsPage
        },
        components: ['fn-search', 'page', 'bar']
    }
};

export const IndependentSVGUsage = independentSVGUsage;

export const SpriteSVGUsage = () => {
    return '<div>will demonstrate usage with sprite</div>';
};
