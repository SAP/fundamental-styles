import { workspaceRoot } from '@nx/devkit';
import { get } from 'lodash';

const _defaultOptions = { workspaceRoot: workspaceRoot };
const varReplaceRegex = /{\s*([^{}\s]*)\s*}/g

export function replaceWithNxVars(str: string, options: {
    workspaceRoot?: string,
    projectRoot: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: Record<string, any>
}) {
    const { workspaceRoot, projectRoot, options: _options } = { ..._defaultOptions, ...options };
    return str.replace(varReplaceRegex, (match, varName) => {
        if (varName === 'workspaceRoot') {
            return workspaceRoot;
        }
        if (varName === 'projectRoot') {
            return projectRoot;
        }
        if (varName.includes('options') && _options) {
            return get(_options, varName.replace('options.', ''));
        }
        return match;
    });
}
