import generateUnuseFn from './generateUnuseFn';
import generateUseFn from './generateUseFn';

export default (linkTagGenerator, uniqueIdentifier = 'href') => {
    return (pathToStyle) => {
        const linkTag = linkTagGenerator(pathToStyle);
        return { use: generateUseFn(linkTag, uniqueIdentifier), unuse: generateUnuseFn(linkTag) };
    };
}
