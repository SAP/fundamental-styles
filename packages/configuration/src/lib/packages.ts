import { packageConfig as cx } from '@fundamental-styles/cx';
import { packageConfig as stylesPackageConfig } from 'styles';
import { packageConfig as fnPackageConfig } from 'fn';
import { packageConfig as commonCSSPackageConfig } from 'common-css';
export const packages = [stylesPackageConfig, fnPackageConfig, commonCSSPackageConfig, cx];
export const packageValueToPackageMap = new Map(packages.map((pkg) => [pkg.value, pkg]));
export const packageValueToPackageThemesMapMap = new Map(
    packages.map((pkg) => [pkg.value, new Map(pkg.themes.map((theme) => [theme.id, theme]))])
);
