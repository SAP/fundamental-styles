/* eslint-disable no-useless-escape */
const fs = require('fs-extra');
const introductionPath = 'stories/docs/introduction.stories.mdx';

const throwError = (error) => {
    if (error) throw error;
};

// if readme copy already exists, remove it
if (fs.existsSync(introductionPath)) {
    fs.unlink(introductionPath, throwError);
}

// create Docs folder if it doesn't already exist
fs.mkdirSync('stories/docs', { recursive: true });

// enrich file content with necessary elements
const fileContent = `
import Community from '../../.storybook/custom/components/Community';
import Header from '../../.storybook/custom/components/Header';
import Footer from '../../.storybook/custom/components/Footer';
import { Meta } from '@storybook/addon-docs';

<Meta title="Introduction/Overview" />

<Header />

${fs.readFileSync('README.md')}

<Community />

<Footer />`;

fs.writeFile(introductionPath, fileContent, throwError);
