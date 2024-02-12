import { Tree } from '@nx/devkit';
import { ExportDeclaration, parseSync, printSync } from '@swc/core';

export const updatePackageConfigurations = (
    tree: Tree,
    newPackageSpecs: { configName: string, importPath: string }
): void => {
    const packagesConfigTsContent = tree.read('packages/configuration/src/lib/packages.ts', 'utf-8') as string;
    const ast = parseSync(packagesConfigTsContent, {
        syntax: 'typescript'
    });
    const packagesVarExportDecl = ast.body.find(n => n.type === 'ExportDeclaration' && n.declaration.type === 'VariableDeclaration' && n.declaration.declarations[0].id.type === 'Identifier' && n.declaration.declarations[0].id.value === 'packages') as ExportDeclaration | undefined;
    if (!packagesVarExportDecl) {
        throw new Error('Could not find packages variable in packages.ts');
    }
    if (packagesVarExportDecl.declaration.type !== 'VariableDeclaration') {
        throw new Error('Export of the packages variable is not a VariableDeclaration');
    }
    const packagesConfigValue = packagesVarExportDecl.declaration.declarations[0].init;
    if (!packagesConfigValue || packagesConfigValue.type !== 'ArrayExpression') {
        throw new Error('Could not find packages array in packages.ts');
    }
    packagesConfigValue.elements.push({
        expression: {
            type: 'Identifier',
            value: newPackageSpecs.configName,
            optional: false,
            span: {
                start: 0,
                end: 0,
                ctxt: 0
            }
        }
    });
    const newPackagesContent = `
            import {packageConfig as ${newPackageSpecs.configName}} from '${newPackageSpecs.importPath}';
            ${printSync(ast).code}
            `;
    tree.write('packages/configuration/src/lib/packages.ts', newPackagesContent);
};
