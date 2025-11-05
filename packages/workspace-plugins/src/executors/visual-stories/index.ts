import { ExecutorContext, logger, names, workspaceRoot } from '@nx/devkit';
import { VisualStoriesSchema } from './schema';
import { sync as fastGlobSync } from 'fast-glob';
import path, { parse as parsePath, relative } from 'path';
import { outputFileSync } from 'fs-extra';
import { format } from 'prettier';
import { parseStoriesFile } from './parse-stories-file';

export default async function(schema: VisualStoriesSchema, context: ExecutorContext): Promise<{ success: boolean }> {
    // Use CommonJS version for executor compatibility
    const projectsPath = path.resolve(workspaceRoot, 'projects.cjs');
    const { themes: projectsThemes } = require(projectsPath);
    const projectName = <string>context.projectName;
    logger.info(`Creating Visual stories for ${projectName} 👀`);
    const projectRoot = context.projectGraph?.nodes[projectName].data.root;
    const workspaceRootPath = workspaceRoot.replace(/\\/g, '/');
    const storiesFiles = fastGlobSync(`${projectRoot}/stories/**/*.stories.+(js|jsx|ts|tsx)`, { onlyFiles: true });
    const themes = (projectsThemes[projectName]?.themes || []).filter((theme: {
        value: string
    }) => schema.themes.includes(theme.value));
    const excludedStoriesKinds = (schema.excludedStoriesKinds || []).map((pattern) => new RegExp(pattern));
    if (themes.length === 0) {
        throw new Error(`No themes found for project ${projectName}`);
    }
    for (const storyFileName of storiesFiles) {
        const parsedStoryFileName = parsePath(storyFileName);

        const { fullTitle, storyTitle, visualStoriesDisabled } = parseStoriesFile(storyFileName);
        if (excludedStoriesKinds.some((pattern) => pattern.test(fullTitle))) {
            logger.info(`Skipping ${fullTitle} because it has excluded story kind`);
            continue;
        }

        if (visualStoriesDisabled) {
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
            const fileContent = await format(
                `
        import * as stories from '${relativeStoryFilePath}';
        import { visualStory, withThemeProvider } from 'fundamental-styles/storybook';
        
        export default {
            title: ${JSON.stringify('Visuals/' + fullTitle + '/' + theme.value)},
            parameters: {
                theme: ${JSON.stringify(theme.value)},
                packageId: ${JSON.stringify(projectName)},
            },
            decorators: [withThemeProvider]
        };
        export const ${className}${names(theme.value).className}Visuals = visualStory(stories as any);
        `,
                { parser: 'typescript' }
            );
            outputFileSync(visualStoryFileName, fileContent);
            logger.info(`✅ Created ${visualStoryFileName}`);
        }
    }
    logger.info(`✅ Visual stories generated for ${projectName} project`);
    return { success: true };
}
