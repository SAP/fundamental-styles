import {logger} from "@nrwl/devkit";
import {readFileSync, writeFileSync} from "fs";
import postcss from "postcss";
import postCssConfig from './postcss.plugins';
import {codeFrameColumns} from "@nrwl/js/src/utils/code-frames/code-frames";

interface ProcessPostCssOptions {
    input: string;
    output?: string;
    minify?: boolean
    map?: boolean
}

export async function processWithPostCss({
                                             input,
                                             output,
                                             minify,
                                             map = true
                                         }: ProcessPostCssOptions): Promise<() => void> {
    const content = readFileSync(input, 'utf-8');
    const postCssResult = await postcss(postCssConfig(minify)).process(content, {
        from: input,
        to: output,
        map
    });
    postCssResult.messages.forEach(message => {
        if (message.type === 'warning') {
            const codeFrame = codeFrameColumns(content, {
                start: {
                    line: message.line,
                    column: message.column
                },
                end: {
                    line: message.endLine,
                    column: message.endColumn
                }
            });
            logger.warn(`${message.plugin} WARNING: ${message.text}`);
            logger.info(`File: "${input}"`);
            logger.info(codeFrame);
            logger.info(`=========End of warning=========`);
        }
    });
    return (outputFilePath?: string) => {
        if (!outputFilePath && !output) {
            throw new Error('Output file path is required for postcss commit');
        }
        writeFileSync((outputFilePath || output) as string, postCssResult.css)
    };
}
