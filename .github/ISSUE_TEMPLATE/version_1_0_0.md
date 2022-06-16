The following tasks should be done to consider this component as ready for version 1.0.0 release. 

*Please make sure that all tasks are completed before opening the PR. Leave comments for the tasks that for some reason cannot be completed or are blocked.

- [ ] design review - compare the properties defined in the design specs with the ones from the implementation. 
Must be done for all themes: 
    - [ ] Quartz Light
    - [ ] Quartz Dark
    - [ ] Quartz HCW
    - [ ] Quartz HCB
    - [ ] Morning Horizon
    - [ ] Evening Horizon
    - [ ] Horizon HCW
    - [ ] Horizon HCB
- [ ] Bug fixing related to the design review
- [ ] Code base clean-up
   - [ ] review the existing code
   - [ ] see if the code can be simplified by using mixins, placeholders, variables
   - [ ] see if a component mixin (for example a mixin added in the Menu file) can be reused in other component by added parameters or using `@content` and move it to the global mixin file
   - [ ] use variables instead of overwriting the rules for modifier classes (ex. compact modifier)
   - [ ] remove deprecated code or code we don't use
- [ ] documentation for the component
    - [ ] API - check if all modifier classes are documented (states, compact/cosy, etc.)
    - [ ] Examples review - check if the existing examples cover all cases we have. We need to add examples for the states of the components (active, hover, disabled, etc.) so we can detect issues with Chromatic
    - [ ] Add links to the UX guidelines and more info about when to use or not use the component, etc.
- [ ] a11y - make sure the component follows the a11y guidelines in terms of markup, aria attributes, focus, etc.
- [ ] review self-contain concept - a component should not modify the properties of another component. Each component should be able to live in isolation, aka not depending on any other component. Modifier classes should be added in such cases.
- [ ] browser testing - the component should look like and behave the same way in all supported by us browsers. 
