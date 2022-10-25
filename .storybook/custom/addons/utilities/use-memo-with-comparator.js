const { useMemo, useRef } = require('react');

function useMemoizedDeps(deps, comparator) {
    const memoizedDeps = useRef(deps);

    if (!comparator(deps, memoizedDeps.current)) {
        memoizedDeps.current = deps;
    }

    return memoizedDeps.current;
}

module.exports.useMemoWithComparator = function (callback, deps, comparator) {
    const memoizedDeps = useMemoizedDeps(deps, comparator);

    return useMemo(callback, memoizedDeps);
};
