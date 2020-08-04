/* eslint-disable no-useless-escape */
const fs = require('fs-extra');
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
