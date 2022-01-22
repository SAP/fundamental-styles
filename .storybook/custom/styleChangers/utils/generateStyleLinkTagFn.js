
export default (managedBy) => {
    return (stylePath) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = stylePath;
        link.setAttribute('data-managedBy', managedBy);
        return link;
    }
}
