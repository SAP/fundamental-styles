import { packageConfig as cx } from '@fundamental-styles/cx';
import { packageConfig as stylesPackageConfig } from 'styles';
import { packageConfig as commonCSSPackageConfig } from 'common-css';
export const packages = [stylesPackageConfig, commonCSSPackageConfig, cx];
export const packageValueToPackageThemesMapMap = new Map(
    packages.map((pkg) => [pkg.value, new Map(pkg.themes.map((theme) => [theme.id, theme]))])
);
