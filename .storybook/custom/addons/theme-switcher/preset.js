module.exports = {
    managerEntries: function(entry = []) {
        return [...entry, require.resolve('./register')];
    }
};
