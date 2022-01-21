export default (linkTag) => {
    return () => {
        document.head.appendChild(linkTag);
    };
}
