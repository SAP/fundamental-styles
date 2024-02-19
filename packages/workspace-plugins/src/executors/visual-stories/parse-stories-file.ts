import { BooleanLiteral, KeyValueProperty, ObjectExpression, parseSync } from '@swc/core';
import { readFileSync } from 'fs';

export function parseStoriesFile(storyFileName: string) {
    const storyFileContents = readFileSync(storyFileName, 'utf8');
    const swcParsedStoryFile = parseSync(storyFileContents, {
        syntax: 'typescript'
    });
    let fullTitle = '';
    let storyTitle = '';
    let visualStoriesDisabled = false;

    swcParsedStoryFile.body.forEach((node) => {
        if (node.type === 'ExportDefaultExpression') {
            const expression = node.expression as ObjectExpression;
            const titleKeyValueProp = expression.properties.find((property) => property.type === 'KeyValueProperty' && property.key.type === 'Identifier' && property.key.value === 'title') as KeyValueProperty;
            if (titleKeyValueProp && titleKeyValueProp.value.type === 'StringLiteral') {
                fullTitle = (titleKeyValueProp.value).value;
                storyTitle = fullTitle.split('/').reverse()[0];
            }
            const parametersKeyValueProp = expression.properties.find((property) => property.type === 'KeyValueProperty' && property.key.type === 'Identifier' && property.key.value === 'parameters') as KeyValueProperty;
            if (parametersKeyValueProp) {
                const parametersValue = parametersKeyValueProp.value as ObjectExpression;
                visualStoriesDisabled = parametersValue.properties.some((property) => {
                    return property.type === 'KeyValueProperty'
                        && property.key.type === 'Identifier'
                        && property.key.value === 'visualDisabled'
                        && (property.value as BooleanLiteral).value;
                });
            }
        }
    });
    return { fullTitle, storyTitle, visualStoriesDisabled };
}
