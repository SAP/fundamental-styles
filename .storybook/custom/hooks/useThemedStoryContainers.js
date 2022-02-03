import { useEffect } from 'react';

/**
 Makes story containers themed by adding appropriate className
 */
export default () => {
    useEffect(() => {
        document.querySelectorAll('.sbdocs-preview > div.docs-story').forEach(({ classList }) => {
            classList.add('themed-container');
        });
    }, []);
};
