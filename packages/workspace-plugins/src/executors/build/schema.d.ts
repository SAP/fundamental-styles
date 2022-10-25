import { AssetGlob } from '@nrwl/workspace/src/utilities/assets';

export interface BuildExecutorSchema {
    source: string,
    outputPath: string,
    assets: Array<AssetGlob | string>,
    minify?: boolean,
}
