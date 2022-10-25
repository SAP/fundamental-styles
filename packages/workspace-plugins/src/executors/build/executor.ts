import {BuildExecutorSchema} from './schema';
import {copyAssets} from '@nrwl/js';
import {execSync} from 'child_process';
import {ExecutorContext} from '@nrwl/devkit';
import {copyFileSync, existsSync, readFileSync, rmSync, writeFileSync} from 'fs';
import glob from "glob";
import {parse} from 'path';
import {processWithPostCss} from "../shared/postcss";

const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
const versions = {
    VERSION_PLACEHOLDER: packageJson.version,
    SAP_THEMING_VERSION: packageJson.devDependencies['@sap-theming/theming-base-content']
};

export default async function runExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
    const projectName = <string>context.projectName;
    if (existsSync(options.outputPath)) {
        rmSync(options.outputPath, {recursive: true});
    }
    const compilationOutputPath = `${options.outputPath}/dist`;
    const projectJson = context.projectGraph?.nodes[projectName].data;
    execSync(`npx sass -q --no-source-map --style expanded ${options.source}:${compilationOutputPath}`, {stdio: 'inherit'});
    const assetsCopyResult = await copyAssets({
        assets: options.assets || [],
        outputPath: options.outputPath,
        watch: false
    }, context);
    if (!assetsCopyResult.success) {
        return assetsCopyResult;
    }
    let projectPackageJsonContent = readFileSync(`${projectJson.root}/package.json`, 'utf-8');
    Object.entries(versions).forEach(([key, value]) => {
        projectPackageJsonContent = projectPackageJsonContent.replace(new RegExp(key, 'g'), value);
    });
    writeFileSync(`${options.outputPath}/package.json`, projectPackageJsonContent);
    const projectPackageJson = JSON.parse(projectPackageJsonContent);
    copyFileSync(`./LICENSES/${projectPackageJson.license}.txt`, `${options.outputPath}/LICENSE`);

    const outputFiles = glob.sync(`${compilationOutputPath}/**/*.css`, {nodir: true});

    for (const file of outputFiles) {
        const parsedPath = parse(file);
        const outputPath = `${compilationOutputPath}/${parsedPath.name}${parsedPath.ext}`;
        const commit = await processWithPostCss({
            input: file,
            output: outputPath,
            minify: options.minify,
            map: false
        });
        commit();
    }

    return {
        success: true
    };
}
