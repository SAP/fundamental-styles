import {useEffect} from 'react';
import tocbot from 'tocbot';
import './toc.scss';

const Toc = () => {
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
    }, []);
    return (
        <>
            <h2 className="toc-heading">Contents</h2>
            <nav className="js-toc toc"/>
        </>
    );
};

Toc.displayName = 'Toc';

export default Toc;
