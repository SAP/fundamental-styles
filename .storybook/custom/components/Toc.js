import tocbot from 'tocbot';
import useStyles from '../hooks/useStyles';
import tocStyles from '../toc.scss';
import React, { useEffect } from 'react';

const Toc = () => {
    const initToc = () => {
        tocbot.init({
            tocSelector: '.js-toc',
            contentSelector: '.sbdocs-wrapper',
            headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
            orderedList: true,
            collapseDepth: 3,
            hasInnerContainers: true
        });
        document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));
    };
    useStyles(tocStyles);
    useEffect(() => {
        initToc();
    }, []);
    return (
        <>
            <h2 className="toc-heading">Contents</h2>
            <nav className="js-toc toc" />
        </>
    );
};

Toc.displayName = 'Toc';

export default Toc;
