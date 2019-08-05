const postcss = require('postcss');
const parser = require('postcss-selector-parser');
//file name
let processor = (root, fileName) => {
	console.log(fileName)
;    root.walk((selector) => {
		let newClass;
		 if((selector.type === 'tag' || selector.type === 'class') && selector.value.includes('ui5-')){
			
			newClass = selector.value.replace('ui5-', 'fd-');
		
		} else if (selector.type === 'pseudo') {
			if(selector.value === ':host') {
				// newClass = 'fd-button';
			}
		} else if (selector.type === 'combinator') {
			//do nothing
		} else if(selector.type === 'attribute' && selector.value !== undefined) {
			selector.quoted ? 
			newClass = `fd-button--${selector.raws.unquoted.toLowerCase()}`
			: newClass = `fd-button--${selector.value.toLowerCase()}`;

		} else if(selector.type === 'selector') {
			//do nothing
		}
		if(newClass !== undefined) {
			selector.replaceWith(parser.className({value: newClass}));
			selector.remove();
		}
	});	
};

module.exports = postcss.plugin('generate classes plugin', function (opts) {
	opts = opts || {};

	const fileName = opts.fileName;

	return function (root, result) {
		root.walkRules(rule => {
			parser(processor).transformSync(rule, {updateSelector: true});
		});

	}
});