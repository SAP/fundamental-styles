import {useEffect, useRef} from 'react';
import tocbot from 'tocbot';
import './toc.scss';

const IGNORE_SELECTOR = '.toc-heading, .fddocs-community *, .fddocs-footer *, .sbdocs-preview *, .docs-story *, .sb-docs-intro *';

const Toc = () => {
    const tocRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const wrapper = document.querySelector('.sbdocs-wrapper');
        if (!wrapper || !tocRef.current) return;

        // Reset scroll position when component mounts (new page loaded)
        const scrollContainer = wrapper.closest('.os-viewport') as HTMLElement;
        if (scrollContainer) {
            scrollContainer.scrollTop = 0;
        } else {
            window.scrollTo(0, 0);
        }

        let cleanupScrollSpy: (() => void) | null = null;

        const buildToc = () => {
            // Use tocbot only to generate the TOC HTML, then immediately destroy
            // it to remove its buggy scroll handler that crashes on stale refs.
            tocbot.init({
                tocSelector: '.js-toc',
                contentSelector: '.sbdocs-wrapper',
                headingSelector: 'h3, h4',
                ignoreSelector: IGNORE_SELECTOR,
                orderedList: true,
                collapseDepth: 2,
                hasInnerContainers: true
            });
            document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));

            // Grab the generated HTML before destroying tocbot
            const tocHtml = tocRef.current?.innerHTML || '';
            try { tocbot.destroy(); } catch { /* noop */ }
            if (tocRef.current) {
                tocRef.current.innerHTML = tocHtml;
            }

            // Add click handlers to TOC links for proper scrolling with offset
            tocRef.current?.querySelectorAll('.toc-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const href = link.getAttribute('href');
                    if (href) {
                        const targetId = href.replace('#', '');
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            // Use scrollIntoView with block: 'start' to respect scroll-margin-top
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });

            // Set up our own scroll spy
            cleanupScrollSpy = setupScrollSpy(wrapper);
        };

        const setupScrollSpy = (container: Element) => {
            const getHeadings = () => Array.from(
                container.querySelectorAll('h3, h4')
            ).filter(h => !h.matches(IGNORE_SELECTOR) && h.id) as HTMLElement[];

            const scrollContainer = container.closest('.os-viewport') || window;
            const topOffset = 144; // Match scroll-margin-top (9rem = 144px)

            const updateActive = () => {
                const headings = getHeadings();
                if (headings.length === 0) return;

                // Find the heading closest to the top offset (within a reasonable range)
                let activeId = '';
                let closestDistance = Infinity;

                for (const heading of headings) {
                    const rect = heading.getBoundingClientRect();
                    const distance = Math.abs(rect.top - topOffset);

                    // Only consider headings that are above or near the topOffset (within reasonable range)
                    if (rect.top <= topOffset + 50 && distance < closestDistance) {
                        closestDistance = distance;
                        activeId = heading.id;
                    }
                }

                tocRef.current?.querySelectorAll('.toc-link').forEach(link => {
                    const href = link.getAttribute('href');
                    if (activeId && href === `#${activeId}`) {
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
            const headings = wrapper.querySelectorAll('h3, h4');
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
