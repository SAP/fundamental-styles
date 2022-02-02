import { useEffect } from 'react';

export default (...styles) => {
    useEffect(() => {
        styles.forEach((style) => style.use());
        return () => {
            styles.forEach((style) => style.unuse());
        };
    }, []);
};
