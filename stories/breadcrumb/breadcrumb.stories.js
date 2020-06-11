import '../../dist/popover.css';
import '../../dist/list.css';
import '../../dist/breadcrumb.css';

export default {
    title: 'Components/Breadcrumb',
    parameters: {
        description: `
The breadcrumb allows users to see the current page and navigation path to that page.
Users can navigate to previous levels in the path. When clicking on the current page, a dropdown allows users to access other pages at that same level.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const defaultStory = () => `
<ul class="fd-breadcrumb">
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Products</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Suppliers</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Titanium</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Ultra Portable</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">12 inch</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Super portable deluxe</a></li>
    <li class="fd-breadcrumb__item">Laptop</li>
</ul>
`;

defaultStory.storyName = 'Default';

export const overflow = () => `
<ul class="fd-breadcrumb">
    <li class="fd-breadcrumb__item">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div
                    class="fd-breadcrumb__link"
                    onclick="onPopoverClick('breadcrumb1');"
                    aria-controls="breadcrumb1"
                    aria-expanded="false"
                    aria-haspopup="true"
                    >
                ...
                <span class="fd-breadcrumb__dropdown-icon"></span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="breadcrumb1">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--navigation" role="list">
                        <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                            <a tabindex="0" class="fd-list__link" href="https://sap.github.io/fundamental-styles/">
                            <span class="fd-list__title">Products</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                            <a tabindex="0" class="fd-list__link" href="https://sap.github.io/fundamental-styles/">
                            <span class="fd-list__title">Suppliers</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                            <a tabindex="0" class="fd-list__link" href="https://sap.github.io/fundamental-styles/">
                            <span class="fd-list__title">Titanium</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Ultra Portable</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">12 inch</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Super portable deluxe</a></li>
    <li class="fd-breadcrumb__item">Laptop</li>
</ul>
`;

overflow.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The breadcrumb takes the width of its parent container. Breadcrumbs are responsive. If there is insufficient horizontal space, the links in the breadcrumb trail collapse into a dropdown menu.'
    }
};
