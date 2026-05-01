import {useEffect, useRef} from 'react';
import tocbot from 'tocbot';
import './toc.scss';

const IGNORE_SELECTOR = '.toc-heading, .fddocs-community *, .fddocs-footer *, .sbdocs-preview *, .docs-story *';

const Toc = () => {
    const tocRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const wrapper = document.querySelector('.sbdocs-wrapper');
        if (!wrapper || !tocRef.current) return;

        let observer: IntersectionObserver | null = null;
        let cleanupScrollSpy: (() => void) | null = null;

        const buildToc = () => {
            // Use tocbot only to generate the TOC HTML, then immediately destroy
            // it to remove its buggy scroll handler that crashes on stale refs.
            tocbot.init({
                tocSelector: '.js-toc',
                contentSelector: '.sbdocs-wrapper',
                headingSelector: 'h2, h3, h4',
                ignoreSelector: IGNORE_SELECTOR,
                orderedList: true,
                collapseDepth: 3,
                hasInnerContainers: true
            });
            document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));

            // Grab the generated HTML before destroying tocbot
            const tocHtml = tocRef.current?.innerHTML || '';
            try { tocbot.destroy(); } catch { /* noop */ }
            if (tocRef.current) {
                tocRef.current.innerHTML = tocHtml;
            }

            // Set up our own scroll spy
            cleanupScrollSpy = setupScrollSpy(wrapper);
        };

        const setupScrollSpy = (container: Element) => {
            const getHeadings = () => Array.from(
                container.querySelectorAll('h2, h3, h4')
            ).filter(h => !h.matches(IGNORE_SELECTOR) && h.id) as HTMLElement[];

            const scrollContainer = container.closest('.os-viewport') || window;
            const topOffset = 200; // trigger earlier so section activates when heading is ~1/4 down viewport

            const updateActive = () => {
                const headings = getHeadings();
                if (headings.length === 0) return;

                // Find the last heading that scrolled past the top offset
                let activeId = headings[0]?.id || '';
                for (const heading of headings) {
                    const rect = heading.getBoundingClientRect();
                    if (rect.top <= topOffset) {
                        activeId = heading.id;
                    } else {
                        break;
                    }
                }

                tocRef.current?.querySelectorAll('.toc-link').forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${activeId}`) {
                        link.classList.add('is-active-link');
                    } else {
                        link.classList.remove('is-active-link');
                    }
                });
            };

            scrollContainer.addEventListener('scroll', updateActive, { passive: true });
            updateActive(); // Set initial state

            // Store cleanup ref
            return () => scrollContainer.removeEventListener('scroll', updateActive);
        };

        // Wait for headings to appear, then build TOC
        const mutationObserver = new MutationObserver(() => {
            const headings = wrapper.querySelectorAll('h2:not(.toc-heading), h3, h4');
            if (headings.length > 0) {
                mutationObserver.disconnect();
                buildToc();
            }
        });

        mutationObserver.observe(wrapper, { childList: true, subtree: true });

        const timer = setTimeout(() => {
            mutationObserver.disconnect();
            buildToc();
        }, 2000);

        return () => {
            clearTimeout(timer);
            mutationObserver.disconnect();
            if (cleanupScrollSpy) cleanupScrollSpy();
            try { tocbot.destroy(); } catch { /* noop */ }
        };
    }, []);

    return (
        <>
            <h2 className="toc-heading">Contents</h2>
            <nav ref={tocRef} className="js-toc toc"/>
        </>
    );
};

Toc.displayName = 'Toc';

export default Toc;
