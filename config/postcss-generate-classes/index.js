const postcss = require('postcss');
const parser = require('postcss-selector-parser');

let processor = (root) => {
    root.walkAttributes((attr) => {
		// console.log({attr});
		const className = parser.className({value: `sapUix-${attr._attribute}`});
		attr.replaceWith(className);
		// attr.remove();
		// console.log("nested", node.nodes)
    });
};
const selectorProcessor = parser(processor);

module.exports = postcss.plugin('generate classes plugin', function (opts) {
	opts = opts || {};

	return function (root, result) {
		root.walkRules(rule => {
			selectorProcessor.transformSync(rule, {updateSelector: true});
			// console.log({rule: rule.selector});
			// rule.selector = rule.selector.replace(":host", "___")

		});

	}
});