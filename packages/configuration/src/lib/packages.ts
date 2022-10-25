import {packageConfig as stylesPackageConfig} from "styles";
import {packageConfig as fnPackageConfig} from "fn";

export const packages = [
    stylesPackageConfig,
    fnPackageConfig
];

export const packageValueToPackageMap = new Map(packages.map((pkg) => [pkg.value, pkg]));
export const packageValueToPackageThemesMapMap = new Map(packages.map((pkg) => [pkg.value, new Map(pkg.themes.map((theme) => [theme.id, theme]))]));
