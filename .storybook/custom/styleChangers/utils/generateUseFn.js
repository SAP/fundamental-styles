export default (linkTag, uniqueIdentifier) => {
    return () => {
        if (uniqueIdentifier) {
            const uniqueValue = linkTag.getAttribute(uniqueIdentifier);
            const tagName = linkTag.tagName;
            // If such element with such unique attribute value already loaded on the page, no need to duplicate it once again.
            if (document.querySelector(`${tagName}[${uniqueIdentifier}="${uniqueValue}"]`) !== null) {
                return;
            }
        }
        document.head.appendChild(linkTag);
    };
}
