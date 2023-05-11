import boldExampleHtml from "./bold.example.html?raw";
import largeExampleHtml from "./large.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/object-number.scss';
export default {
  title: 'Components/Object Number',
  parameters: {
    description: `
An object number represents a numeric attribute of an object and its unit. The object number should be displayed with semantics to provide more insight to the user about the object's value.

##Accessibility
Make sure that the object number is properly described and semantically understandable. For instance, if the color is describing the object number as negative, ensure that it is accompanied by either an icon, label, unit or attribute. Color should not be the only way the value state of the object is conveyed to the user.

##Usage
**Use the object number if:**

- You want to display the key number of an object.
- You need to display one or more numeric attributes of an object (for example, for objects you want to compare).

**Emphasize (bold) the object number if:**

- You want to represent the key numeric attributes on the page.
- It is being used as a line item status in a table.

**Do not use the object number if:**

- You want to display system messages.
- They are for decorative purposes only.
        `,
    tags: ['f3', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
 There are different semantic statuses that can be applied to the object number by adding a modifier class.
 
 | **Status** | **Modifier class**              |
 | ----------: | :------------------------------- |
 | Positive    | \`fd-object-number--positive\`     |
 | Negative    | \`fd-object-number--negative\`     |
 | Critical    | \`fd-object-number--critical\`     |
 | Informative | \`fd-object-number--informative\`  |
 | None        | \`fd-object-number__text\` (class) |
 `
    }
  }
};
export const Large = () => largeExampleHtml;
Large.parameters = {
  docs: {
    description: {
      story: `In some cases, it can be useful to enlarge the text for the object number. To display the object number in large text, add the \`--large\` modifier class to the element.`
    }
  }
};
export const Bold = () => boldExampleHtml;
Bold.parameters = {
  docs: {
    description: {
      story: `When there is a key numeric attribute on the page, it should be emphasized in bold text. To display the object number in bold text, add the \`--bold\` modifier class to the element.`
    }
  }
};