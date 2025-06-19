import radioButtonGroupsExampleHtml from "./radio-button-groups.example.html?raw";
import checkboxGroupsExampleHtml from "./checkbox-groups.example.html?raw";
import '../../../../src/fieldset.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/checkbox.scss';
import '../../../../src/radio.scss';
export default {
  title: 'Components/Forms/Field Set',
  parameters: {
    description: `A fieldset is used to give semantic meaning to a group of elements inside a form (e.g. Billing or Shipping Address).
Grouping fields together into a fieldset also provides styling and accessibility benefits.`,
    tags: []
  }
};
export const CheckboxGroups = () => checkboxGroupsExampleHtml;
CheckboxGroups.parameters = {
  docs: {
   description: {
      story: 'Checkbox groups should always be grouped using fieldset for accessibility reasons.'
    }
  }
};
export const RadioButtonGroups = () => radioButtonGroupsExampleHtml;
RadioButtonGroups.parameters = {
  docs: {
   description: {
      story: 'Radio button groups should always be grouped using fieldset for accessibility reasons.'
    }
  }
};