import { Tree } from 'nx/src/generators/tree';
import { Schema } from './schema';
import { readProjectConfiguration } from 'nx/src/generators/utils/project-configuration';
import { sync as fastGlobSync } from 'fast-glob';
import { parse as babelParser } from '@babel/core';
import { parse as parsePath } from 'path';
import {
    ArrowFunctionExpression,
    ExportNamedDeclaration,
    identifier,
    Identifier,
    importDeclaration,
    importDefaultSpecifier,
    isArrowFunctionExpression,
    isIdentifier,
    stringLiteral,
    VariableDeclarator
} from '@babel/types';
import generate from '@babel/generator';
import { names } from '@nx/devkit';
import { format as prettierFormat } from 'prettier';

export default async function (tree: Tree, schema: Schema): Promise<void> {
    const projectConfiguration = readProjectConfiguration(tree, schema.projectName);
    if (!projectConfiguration.targets) {
        return;
    }
    const storyFiles = fastGlobSync(`${projectConfiguration.root}/**/*.stories.js`).sort();

    for (const storyFile of storyFiles) {
        const originalContents = tree.read(storyFile, 'utf-8') as string;
        const parsed = babelParser(originalContents);
        const exports = (parsed?.program.body || []).filter(
            (node) => node.type === 'ExportNamedDeclaration'
        ) as Array<ExportNamedDeclaration>;
        const parsedPath = parsePath(storyFile);

        for (const node of exports) {
            const declarationType = node.declaration?.type;
            if (declarationType === 'VariableDeclaration') {
                const variable = node.declaration.declarations[0] as VariableDeclarator;

                if (isArrowFunctionExpression(variable.init)) {
                    const variableIdentifier = variable.id as Identifier;
                    const variableName = variableIdentifier.name;
                    const { fileName, propertyName } = names(variableName);
                    const templateFileName = `${fileName}.example.html`;
                    const fileNameLiteral = stringLiteral(`./${templateFileName}?raw`);
                    const propertyNameIdentifier = identifier(`${propertyName}ExampleHtml`);
                    const createHTMLTemplate = (contents: string): void => {
                        // try {
                        //     contents = prettierFormat(contents, { parser: 'html' }).trim()
                        // } catch (e) {
                        //     debugger;
                        // }
                        tree.write(`${parsedPath.dir}/${templateFileName}`, contents);
                    };
                    const extractFromArrowFunctionExpression = (
                        arrowFunction: ArrowFunctionExpression
                    ): Identifier | ArrowFunctionExpression['body'] => {
                        const content = arrowFunction.body;
                        if (content.type === 'TemplateLiteral') {
                            if (content.quasis.length > 1) {
                                return content;
                            }
                            const newFileContent = content.quasis[0].value.raw;
                            createHTMLTemplate(newFileContent);
                            return propertyNameIdentifier;
                        }
                        return content;
                    };
                    variable.init.body = extractFromArrowFunctionExpression(variable.init);
                    if (isIdentifier(variable.init.body)) {
                        parsed?.program.body.unshift(
                            importDeclaration([importDefaultSpecifier(propertyNameIdentifier)], fileNameLiteral)
                        );
                    } else {
                        // debugger;
                    }
                }
            }
            console.log({ node });
        }

        const { code } = generate(parsed!.program);
        tree.write(storyFile, code);
    }
}
