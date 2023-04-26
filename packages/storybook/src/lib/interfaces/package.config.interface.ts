export interface ThemeDefinition {
    id: string;
    name: string;
    variables: string;
}

export interface PackageConfigInterface {
    value: string;
    title: string;
    pathToPackage: string;
    defaultTheme: string;
    themes: ThemeDefinition[]
}
