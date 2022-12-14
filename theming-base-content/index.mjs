import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

export const resourcePath = join(dirname(fileURLToPath(import.meta.url)), 'content');