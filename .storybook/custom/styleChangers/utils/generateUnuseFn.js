
export default (linkTag) => {
    return () => {
        if (document.head.contains(linkTag)) {
            document.head.removeChild(linkTag);
        }
    };
};
