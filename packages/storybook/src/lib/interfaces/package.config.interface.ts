/**
 * Theme definition interface,
 * used to define the theme and its variables
 */
export interface ThemeDefinition {
    /** Theme unique identifier, in snake_case */
    id: string;
    /** Theme title, in sentence case, visible on selectors and etc */
    name: string;
    /** Theme variables, in CSS format, commonly loaded using FS reads of the CSS files */
    variables: string;
}

/**
 * Package configuration interface,
 * used to define the package and its themes
 */
export interface PackageConfigInterface {
    /** Package unique identifier, in dash-case */
    value: string;
    /** Package title, in sentence case */
    title: string;
    /** Path to the package root directory, from workspace root */
    pathToPackage: string;
    /** Default theme's identifier */
    defaultTheme: string;
    /** Package themes */
    themes: ThemeDefinition[]
}
