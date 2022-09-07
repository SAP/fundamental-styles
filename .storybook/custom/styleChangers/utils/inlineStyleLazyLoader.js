const uniqueIdentifier = "id";
let uniqueId = 0;

function createStyleTag(content) {
    let style = document.createElement('style');
    style.textContent = content;
    style.setAttribute("id", `style-${uniqueId++}`);
    return style;
}

function generateUseStyleTagFn(styleTag) {
    return () => {
        const uniqueValue = styleTag.getAttribute(uniqueIdentifier);
        const tagName = styleTag.tagName;

        // If such element with such unique attribute value already loaded on the page, no need to duplicate it once again.
        if (document.querySelector(`${tagName}[${uniqueIdentifier}="${uniqueValue}"]`) !== null) {
            return;
        }

        document.head.appendChild(styleTag);
    }
}

function generateUnuseStyleTagFn(styleTag) {
    return () => {
        if (document.head.contains(styleTag)) {
            document.head.removeChild(styleTag);
        }
    };
}

export default (content) => {
    const styleTag = createStyleTag(content);
    return { use: generateUseStyleTagFn(styleTag), unuse: generateUnuseStyleTagFn(styleTag) };
}
