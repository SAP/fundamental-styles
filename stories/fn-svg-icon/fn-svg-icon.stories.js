import data from './data.json';

export default {
    title: 'Experimental/SVG Icons',
    parameters: {
        description: `
SVG Icons
        `,
        components: ['fn-button', 'fn-svg-icons']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        column-gap: 0.5rem;
        row-gap: 0.5rem;
        background: white;
        padding: 1.5rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

</style>
`;

export const Primary = () => `${localStyles}
<svg class="fn-svg-wrapper" width="18" height="18" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" tabindex="-1" role="img" aria-label="test">
    <use href="fiori-sprite.svg#Netweaver-business-client"/>
</svg>
<svg class="fn-svg-wrapper" width="36" height="36" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" tabindex="-1" role="img" aria-label="test">
    <use href="fiori-sprite.svg#print"/>
</svg>
<svg class="fn-svg-wrapper" width="72" height="72" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" tabindex="-1" role="img" aria-label="test">
    <use href="fiori-sprite.svg#print"/>
</svg>
<svg class="fn-svg-wrapper" width="100" height="100" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" tabindex="-1" role="img" aria-label="test">
    <use href="fiori-sprite.svg#print"/>
</svg>

`;

Primary.storyName = 'SVG Icon Sizes';

export const ColorIcons = () => `${localStyles}
<svg class="fn-svg-wrapper" style="color:red" width="18" height="18" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" tabindex="-1" role="img" aria-label="test">
    <use href="fiori-sprite.svg#print"/>
</svg>
`;

export const AvailableIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = data.icons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                '<svg class="fn-svg-wrapper" width="100" height="100" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" tabindex="-1" role="img" aria-label="test">' +
                    `<use href="fiori-sprite.svg#${icon}"/>` +
                '</svg>' +
                `<div>${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
};

AvailableIcons.parameters = {
    docs: {
        description: {
            story: ''
        }
    },
    skipRTLSnapshot: true
};
