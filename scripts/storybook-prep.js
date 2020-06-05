/* eslint-disable no-useless-escape */
const fs = require('fs-extra');

// All files for Storybook documentation website
// fonts and icons
const fontPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Regular.woff');
const fontPathLight = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Light.woff');
const fontPathBold = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Bold.woff');
const iconPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/fonts/SAP-icons.woff');

const defaultCssVariables = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css');
const darkCssVariables = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_dark/css_variables.css');
const lightDarkCssVariables = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_light_dark/css_variables.css');
const HCBCssVariables = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_hcb/css_variables.css');
const HCWCssVariables = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_hcw/css_variables.css');


const introductionPath = 'stories/docs/introduction.stories.mdx';

// if readme copy already exists, remove it
if (fs.existsSync(introductionPath)) {
    fs.unlink(introductionPath, (err) => {
        if (err) return err;
    });
}

// create Docs folder if it doesn't already exist
fs.mkdirSync('stories/docs', { recursive: true });

// copy readme file and prepend necessary <Meta />, <Header />, <Community /> and <Footer />
fs.copyFile('README.md', introductionPath, (err) => {
    if (err) throw err;

    const data = fs.readFileSync(introductionPath).toString().split('\n');
    data.splice(0, 0, `
import Community from \'../../.storybook/custom/components/Community\';
import Header from \'../../.storybook/custom/components/Header\';
import Footer from \'../../.storybook/custom/components/Footer\';
import { Meta } from \'@storybook/addon-docs/blocks\';\n
<Meta title=\'Introduction/Overview\' />\n
<Header />\n` );
    const text = data.join('\n');

    fs.writeFile(introductionPath, text, function(writeErr) {
        if (writeErr) return writeErr;
    });

    fs.appendFile(introductionPath, `
<Community />
<Footer />
`, function(isError) {
        if (isError) throw isError;
    });

});

if (!fs.existsSync('.storybook/static')) {
    fs.mkdirSync('.storybook/static');
}

fs.copyFile(fontPath, '.storybook/static/72-Regular.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(fontPathLight, '.storybook/static/72-Light.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(fontPathBold, '.storybook/static/72-Bold.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(iconPath, '.storybook/static/SAP-icons.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(defaultCssVariables, '.storybook/static/css_variables.css', (err) => {
    if (err) throw err;
});
fs.copyFile(darkCssVariables, '.storybook/static/dark_css_variables.css', (err) => {
    if (err) throw err;
});
fs.copyFile(lightDarkCssVariables, '.storybook/static/light_dark_css_variables.css', (err) => {
    if (err) throw err;
});
fs.copyFile(HCBCssVariables, '.storybook/static/HCB_css_variables.css', (err) => {
    if (err) throw err;
});
fs.copyFile(HCWCssVariables, '.storybook/static/HCW_css_variables.css', (err) => {
    if (err) throw err;
});
