import {FC} from 'react';

declare global {
    declare module '*.md' {
        const content: FC<any>;
        export default content;
    }
}
