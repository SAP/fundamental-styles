
export default (linkTag) => {
    return () => {
        document.head.removeChild(linkTag);
    };
};
