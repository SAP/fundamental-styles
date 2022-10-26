import {BuildThemingPreviewExecutorSchema} from './schema';
import fs from 'fs-extra';
import {execSync} from 'child_process';
import {processWithPostCss} from "../shared/postcss";
import {ExecutorContext, logger, readJsonFile, writeJsonFile} from "@nrwl/devkit";
import {readPackageJson} from "nx/src/project-graph/file-utils";

const packageJson = readPackageJson();
const {copySync} = fs;

export default async function runExecutor(
    options: BuildThemingPreviewExecutorSchema,
    context: ExecutorContext
) {
  const rootPath = context.projectGraph?.nodes[context.projectName as string].data.root;
  const sourcePath = context.projectGraph?.nodes[context.projectName as string].data.sourceRoot;
  const outputPath = `dist/packages/${context.projectName}`;

  copySync(sourcePath, outputPath, {recursive: true, overwrite: true});
  const projectPackageJson = readJsonFile(`${rootPath}/package.json`);
  projectPackageJson.version = packageJson.version;
  projectPackageJson.dependencies['fundamental-styles'] = packageJson.version;
  writeJsonFile(`${outputPath}/package.json`, projectPackageJson, {appendNewLine: true});
  logger.info('Copied theming preview to dist-theming');

  execSync(`npx sass -q --no-source-map --style expanded packages/styles/src/fundamental-styles.scss:${outputPath}/fundamental-styles.css`, {stdio: 'inherit'});
  const commit = await processWithPostCss({
    input: `${outputPath}/fundamental-styles.css`,
    output: `${outputPath}/fundamental-styles.css`,
    minify: options.minify,
    map: false
  });
  commit();
  logger.info('Copied fundamental styles css');

  return {
    success: true
  };
}

