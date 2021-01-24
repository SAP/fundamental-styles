## Related Issue
Closes SAP/fundamental-styles#

## Description
{{ _Enter short description of the change_ }}

## Screenshots
> **NOTE:** If you've made any style changes, please provide appropriate screenshots (before and after) to help reviewers.
>
> To see examples of which screenshots to include, go to [Screenshot Examples](https://github.com/SAP/fundamental-styles/wiki/Pull-Request-Screenshot-Examples).

### Before:


### After:

#### Please check whether the PR fulfills the following requirements

1. The output matches the design specs
- [ ] All values are in `rem`
- [ ] Text elements follow the truncation rules
- [ ] hover state of the element follow design spec
- [ ] focus state of the element follow design spec
- [ ] active state of the element follow design spec
- [ ] selected state of the element follow design spec
- [ ] selected hover state of the element follow design spec
- [ ] pressed state of the element follow design spec
- [ ] Responsiveness rules - the component has modifier classes for all breakpoints
- [ ] Includes Compact/Cosy/Tablet design
- [ ] RTL support
2. The code follows fundamental-styles code standards and style
- [ ] only one top level `fd-*` class is used in the file
- [ ] BEM naming convention is used
- [ ] Mixins are used for repeatable code (`fd-rtl`, `fd-ellipsis`, `fd-flex`, `fd-selected`, `fd-focus`, ect.)
- [ ] A11y support - keyboard support, screenreader support, proper ARIA attributes, etc.
- [ ] `fd-reset()` mixin is applied to all elements
- [ ] Variables are used, if some value is used more than twice.
- [ ] Checked if current components can be reused, instead of having new code.
3. Testing
- [ ] tested Storybook examples with "CSS Resources" `normalize` option 
- [ ] tested Storybook examples with "CSS Resources" `unnormalize` option 
- [ ] Verified all styles in IE11
- [ ] Updated tests
- [ ] last commit message should have `[ci visual]` so it can trigger chromatic visual regression (e.g. `test: run chromatic visual regression [ci visual]`)
4. Documentation
- [ ] Storybook documentation has been created/updated
- [ ] Breaking Changes [wiki](https://github.com/SAP/fundamental-styles/wiki/Breaking-Changes) has been updated in case of breaking changes.
