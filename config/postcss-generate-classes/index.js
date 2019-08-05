const postcss = require('postcss');
const parser = require('postcss-selector-parser');
//TO DO: figure out how to pass file name- to replace fd-button

let processor = (root) => {
;    root.walk((selector) => {
		let newClass;
	     //converts tags to classes, replaces classes ui5-* to fd-*
		 if((selector.type === 'tag' || selector.type === 'class') && selector.value.includes('ui5-')){
			
			newClass = selector.value.replace('ui5-', 'fd-');

		//replaces all attribute selectors, with fd-components--selector
		 } else if(selector.type === 'attribute') {
			 if(selector.value !== undefined) {
				selector.quoted ? 
				newClass = `fd-button--${selector.raws.unquoted.toLowerCase()}`
				: newClass = `fd-button--${selector.value.toLowerCase()}`;
			 } else {
				newClass = `fd-button--${selector._attribute.toLowerCase()}`
			 }
		}
		if(newClass !== undefined) {
			selector.replaceWith(parser.className({value: newClass}));
			selector.remove();
		}
	});	
};

module.exports = postcss.plugin('generate classes plugin', function (opts) {
	opts = opts || {};

	return function (root, result) {
		root.walkRules(rule => {
			parser(processor).transformSync(rule, {updateSelector: true});

			//replace :host selector with included contents after the other transformations, if replaced before, erases _all_ information inside of :host(...)
			if( rule.selector.includes(':host')) {
				
				// let ruleContents = rule.selector.match(/(?<=:host\()(.*)(?=\))/, rule.selector);
				
				// //handles empty :host selector
				// if(ruleContents === null) {
				// 	ruleContents = '.fd-button'
				// }
				// rule.selector = rule.selector.replace(rule.selector, ruleContents);
			}
		});

	}
});