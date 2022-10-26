import {projects} from '../../../../../workspace.json';

const projectKeys = Object.keys(projects);

export interface ThemeDefinition {
    id: string;
    name: string;
    variables: string;
}

export interface PackageConfigInterface {
    value: typeof projectKeys[number];
    title: string;
    pathToPackage: string;
    defaultTheme: string;
    themes: ThemeDefinition[]
}
