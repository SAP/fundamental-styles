import { useEffect } from 'react';
import tocbot from 'tocbot';

export const initToc = (deps) => {
    useEffect(() => {
        tocbot.init({
            tocSelector: '.js-toc',
            contentSelector: '.sbdocs-wrapper',
            headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
            orderedList: true,
            collapseDepth: 3,
            hasInnerContainers: true
        });
        document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));
    }, deps);
}
