import { BuildExecutorSchema } from './schema';
import { copyAssets } from '@nx/js';
import { execSync } from 'child_process';
import { ExecutorContext } from '@nx/devkit';
import { copyFileSync, existsSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { sync as fastGlobSync } from 'fast-glob';
import { processWithPostCss } from '../shared/postcss';
import { mkdirpSync } from 'fs-extra';
import { parse } from 'path';
import { parse as semverParse } from 'semver';
import path from 'path';
import { workspaceRoot } from '@nx/devkit';

const aboveMinorVersion = (version: string) => {
    const parsed = semverParse(version);
    return `^${parsed!.major}.${parsed!.minor}.0`;
};
const lernaJson = JSON.parse(readFileSync(path.resolve(workspaceRoot, 'lerna.json'), 'utf-8'));
const packageJson = JSON.parse(readFileSync(path.resolve(workspaceRoot, 'package.json'), 'utf-8'));
const versions = {
    VERSION_PLACEHOLDER: lernaJson.version,
    SAP_THEMING_VERSION: aboveMinorVersion(packageJson.devDependencies['@sap-theming/theming-base-content'])
};

export default async function runExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
    const projectName = <string>context.projectName;
    if (existsSync(options.outputPath)) {
        rmSync(options.outputPath, { recursive: true });
    }
    const compilationOutputPath = `${options.outputPath}/dist`;

    const projectJson = context.projectGraph?.nodes[projectName].data;
    execSync(`npx sass -q --no-source-map --style expanded ${options.source}:${compilationOutputPath}`, {
        stdio: 'inherit'
    });
    const assetsCopyResult = await copyAssets(
        {
            assets: options.assets || [],
            outputPath: options.outputPath,
            watch: false
        },
        context
    );
    if (!assetsCopyResult.success) {
        return assetsCopyResult;
    }

    const outputFiles = fastGlobSync(`${compilationOutputPath}/**/*.css`, { onlyFiles: true });

    for (const file of outputFiles) {
        const commit = await processWithPostCss({
            input: file,
            output: file,
            minify: options.minify,
            map: false
        });
        commit();
    }

    let projectPackageJsonContent = readFileSync(`${projectJson!.root}/package.json`, 'utf-8');
    const projectPackageJson = JSON.parse(projectPackageJsonContent);

    projectPackageJson['exports'] = projectPackageJson['exports'] || {};

    const files = fastGlobSync(`${compilationOutputPath}/**/*.css`);

    for (const file of files) {
        const content = readFileSync(file, 'utf-8');
        const filePath = file.replace(
            new RegExp(`^${compilationOutputPath}(.*).css$`),
            `${compilationOutputPath}/js$1.mjs`
        );
        const typesPath = file.replace(
            new RegExp(`^${compilationOutputPath}(.*).css$`),
            `${compilationOutputPath}/js$1.d.ts`
        );
        mkdirpSync(parse(filePath).dir);
        writeFileSync(filePath, `export default { cssSource: \`${content}\` };`);
        writeFileSync(typesPath, `declare const _default: { cssSource: string }; export default _default;`);
    }
    projectPackageJson['exports'] = {
        ...projectPackageJson['exports'],
        './dist/js/*': {
            types: './dist/js/*.d.ts',
            default: './dist/js/*.mjs'
        },
        './dist/*.css': {
            default: './dist/*.css'
        },
        './dist/*': {
            default: './dist/*'
        }
    };
    projectPackageJsonContent = JSON.stringify(projectPackageJson, null, 4);

    Object.entries(versions).forEach(([key, value]) => {
        projectPackageJsonContent = projectPackageJsonContent.replace(new RegExp(key, 'g'), value);
    });
    writeFileSync(`${options.outputPath}/package.json`, projectPackageJsonContent);

    copyFileSync(`./LICENSES/${projectPackageJson.license}.txt`, `${options.outputPath}/LICENSE`);

    return {
        success: true
    };
}
