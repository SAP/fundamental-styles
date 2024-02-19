import { Tree } from '@nx/devkit';
import { KeyValueProperty, ObjectExpression, parseSync, printSync, VariableDeclaration } from '@swc/core';

export const updateProjectsJs = (
    tree: Tree,
    newProjectSpecs: { projectName: string, root: string, projectTitle: string }
): void => {
    const projectsJs = tree.read('./projects.js', 'utf-8') as string;

    const projectsJsSwcAst = parseSync(projectsJs, {
        syntax: 'ecmascript'
    });

    const projectNamesVariableDeclaration = projectsJsSwcAst.body.find(n => n.type === 'VariableDeclaration' && n.declarations[0].id.type === 'Identifier' && n.declarations[0].id.value === 'projectNames') as VariableDeclaration | undefined ;
    const workspaceProjectsVariableDeclaration = projectsJsSwcAst.body.find(n => n.type === 'VariableDeclaration' && n.declarations[0].id.type === 'Identifier' && n.declarations[0].id.value === 'workspaceProjects') as VariableDeclaration | undefined;

    if (!projectNamesVariableDeclaration) {
        throw new Error('Could not find projectNames variable in projects.js');
    }
    if (!workspaceProjectsVariableDeclaration) {
        throw new Error('Could not find workspaceProjects variable in projects.js');
    }

    const projectNamesObjectExpression = projectNamesVariableDeclaration.declarations[0].init as ObjectExpression;
    const workspaceProjectsObjectExpression = workspaceProjectsVariableDeclaration.declarations[0].init as ObjectExpression;

    if (!projectNamesObjectExpression.properties.some(p => p.type === 'KeyValueProperty' && p.key.type === 'Identifier' && p.key.value === newProjectSpecs.projectName)) {
        projectNamesObjectExpression.properties.push({
            type: 'KeyValueProperty',
            key: {
                type: 'Identifier',
                value: newProjectSpecs.projectName,
                optional: false,
                span: {
                    start: 0,
                    end: 0,
                    ctxt: 0
                },
            },
            value: {
                type: 'StringLiteral',
                value: newProjectSpecs.projectTitle,
                span: {
                    start: 0,
                    end: 0,
                    ctxt: 0
                },
            }
        });
    }

    if (!workspaceProjectsObjectExpression.properties.some(p => p.type === 'KeyValueProperty' && p.key.type === 'Identifier' && p.key.value === newProjectSpecs.projectName)) {
        const propertyWorkspaceProjectEntry: KeyValueProperty = {
            type: 'KeyValueProperty',
            key: {
                type: 'Identifier',
                value: newProjectSpecs.projectName,
                optional: false,
                span: {
                    start: 0,
                    end: 0,
                    ctxt: 0
                },
            },
            value: {
                type: 'StringLiteral',
                value: newProjectSpecs.root,
                span: {
                    start: 0,
                    end: 0,
                    ctxt: 0
                },
            }
        };
        workspaceProjectsObjectExpression.properties.push(propertyWorkspaceProjectEntry);
    }
    tree.write('./projects.js', printSync(projectsJsSwcAst).code);
};
