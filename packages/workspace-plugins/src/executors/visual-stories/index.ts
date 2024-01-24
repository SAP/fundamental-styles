import { ExecutorContext, logger, names, workspaceRoot } from '@nx/devkit';
import { VisualStoriesSchema } from './schema';
import glob from 'glob';
import { themes as projectsThemes } from '../../../../../projects';
import path, { parse as parsePath, relative } from 'path';
import { parse as babelParser, ParseResult, types } from '@babel/core';
import { outputFileSync, readFileSync } from 'fs-extra';
import traverse from '@babel/traverse';
import { format } from 'prettier';

export default async function (schema: VisualStoriesSchema, context: ExecutorContext): Promise<{ success: boolean }> {
    const projectName = <string>context.projectName;
    logger.info(`Creating Visual stories for ${projectName} 👀`);
    const projectRoot = context.projectGraph?.nodes[projectName].data.root;
    const workspaceRootPath = workspaceRoot.replace(/\\/g, '/');
    const storiesFiles = glob.sync(`${projectRoot}/stories/**/*.stories.+(js|jsx|ts|tsx)`, { nodir: true });
    const themes = (projectsThemes[projectName]?.themes || []).filter((theme) => schema.themes.includes(theme.value));
    const excludedStoriesKinds = (schema.excludedStoriesKinds || []).map((pattern) => new RegExp(pattern));
    if (themes.length === 0) {
        throw new Error(`No themes found for project ${projectName}`);
    }
    for (const storyFileName of storiesFiles) {
        const parsedStoryFileName = parsePath(storyFileName);
        const storyFileContents = readFileSync(storyFileName, 'utf8');
        const babelParsedStoryFile = babelParser(storyFileContents, {
            parserOpts: {},
            sourceType: 'module',
            filename: storyFileName,
            presets: ['@babel/preset-react', '@babel/preset-typescript']
        }) as ParseResult;
        let fullTitle = '';
        let storyTitle = '';
        let visualDisabled = false;
        traverse(babelParsedStoryFile, {
            ExportDefaultDeclaration(path) {
                path.traverse({
                    ObjectProperty: (objectPropertyPath) => {
                        const key = (objectPropertyPath.node.key as types.Identifier).name;
                        if (key === 'title') {
                            const titleValue = (objectPropertyPath.node.value as types.StringLiteral).value;
                            fullTitle = titleValue;
                            storyTitle = titleValue.split('/').reverse()[0];
                        }
                        if (key === 'parameters') {
                            const parametersExpression = objectPropertyPath.node.value as types.ObjectExpression;
                            visualDisabled = parametersExpression.properties.some((property: types.ObjectMethod | types.ObjectProperty | types.SpreadElement) => {
                                return types.isObjectProperty(property)
                                    && types.isIdentifier(property.key)
                                    && property.key.name === 'visualDisabled'
                                    && types.isBooleanLiteral(property.value)
                                    && property.value.value;
                            });
                        }
                        if (storyTitle && typeof visualDisabled !== 'undefined') {
                            path.stop();
                        }
                    }
                });
            }
        });
        if (excludedStoriesKinds.some((pattern) => pattern.test(fullTitle))) {
            logger.info(`Skipping ${fullTitle} because it has excluded story kind`);
            continue;
        }

        if (visualDisabled) {
            logger.info(`Skipping ${fullTitle} because it is disabled`);
            continue;
        }

        const { className, fileName: fileBaseName } = names(storyTitle);
        const getFileName = (theme: string) =>
            `${workspaceRootPath}/stories/Visuals/${parsedStoryFileName.dir.replace(
                /packages\/(.*)\/stories/,
                '$1'
            )}/${fileBaseName}.${theme}.visual.ts`;
        for (const theme of themes) {
            const visualStoryFileName = getFileName(theme.value);
            const relativeStoryFilePath = (() => {
                const relativeStoryFilePath = relative(path.dirname(visualStoryFileName), storyFileName).replace(
                    /\\/g,
                    '/'
                );
                return `${path.dirname(relativeStoryFilePath)}/${path.basename(relativeStoryFilePath, '')}`;
            })();
            const fileContent = format(
                `
        import * as stories from '${relativeStoryFilePath}';
        import { visualStory, withThemeProvider } from 'fundamental-styles/storybook';
        
        export default {
            title: ${JSON.stringify('Visuals/' + fullTitle + '/' + theme.title)},
            parameters: {
                theme: ${JSON.stringify(theme.value)},
                packageId: ${JSON.stringify(projectName)},
            },
            decorators: [withThemeProvider]
        };
        export const ${className}Visuals = visualStory(stories);
        `,
                { parser: 'babel-ts' }
            );
            outputFileSync(visualStoryFileName, fileContent);
            logger.info(`✅ Created ${visualStoryFileName}`);
        }
    }
    logger.info(`✅ Visual stories generated for ${projectName} project`);
    return { success: true };
}
