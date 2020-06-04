import '../toc.scss';
import React from 'react';

const Toc = () => {
    return (
    <>
        <h2 className='toc-heading'>Contents</h2>
        <nav className='js-toc toc' />
    </>
    )
}

Toc.displayName = 'Toc';

export default Toc;
