import generateUnuseFn from './generateUnuseFn';
import generateUseFn from './generateUseFn';

export default (linkTagGenerator) => {
    return (pathToStyle) => {
        const linkTag = linkTagGenerator(pathToStyle);
        return { use: generateUseFn(linkTag), unuse: generateUnuseFn(linkTag) };
    };
}
