import dataFusion from './dataFusion.json';

export default {
    title: 'Components/Icons/Fusion Icons',
    parameters: {
        description: 'Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. add the font file in .storybook/static/assets/Fusion-Icon-Font.woff',
        tags: ['development'],
        components: ['button', 'button-split', 'icon', 'menu', 'popover', 'segmented-button']
    }
};

export const sizes = () => `

    <span class="sap-icon-fusion sap-icon-fusion--logo-fusion-circle"></span>
    <br />
    <span class="sap-icon-fusion sap-icon-fusion--logo-fusion-circle" style="font-size:2rem"></span>
    <br />
    <span class="sap-icon-fusion sap-icon-fusion--logo-fusion-circle" style="font-size:5rem"></span>
`;

sizes.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.'
    }
};


export const fusionIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = dataFusion.fusionIcons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon-fusion sap-icon-fusion--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon-fusion--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
};

fusionIcons.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'For icons of <b>sap-icon-fusion</b> font-family add the <code>sap-icon-fusion--{icon-name}</code> modifier class identifying the icon style to the <code>sap-icon-TNT</code> class. For example, for an <i>exceptions</i> icon, add <code>sap-icon-TNT sap-icon-TNT--exceptions</code> with the desired font size value.'
    },
    skipRTLSnapshot: true
};
