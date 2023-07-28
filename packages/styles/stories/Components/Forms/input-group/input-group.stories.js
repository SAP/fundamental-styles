import testSixExampleHtml from "./test-six.example.html?raw";
import testFiveExampleHtml from "./test-five.example.html?raw";
import testFourExampleHtml from "./test-four.example.html?raw";
import testThreeExampleHtml from "./test-three.example.html?raw";
import testTwoExampleHtml from "./test-two.example.html?raw";
import testOneExampleHtml from "./test-one.example.html?raw";
import focusExampleHtml from "./focus.example.html?raw";
import statesExampleHtml from "./states.example.html?raw";
import inputWithActionsExampleHtml from "./input-with-actions.example.html?raw";
import inputWithIconsExampleHtml from "./input-with-icons.example.html?raw";
import textAddOnExampleHtml from "./text-add-on.example.html?raw";
import defaultExampleHtml from "./sizes.example.html?raw";
import '../../../../src/icon.scss';
import '../../../../src/button.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
import '../../../../src/input-group.scss';
export default {
  title: 'Components/Forms/Input Group',
  parameters: {
    description: 'The input group includes form inputs with add-ons that allow the user to better understand the information being entered.',
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {}
};
export const TextAddOn = () => textAddOnExampleHtml;
TextAddOn.parameters = {
  docs: {
   description: {
      story: 'The Input Group with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right (or both) of the input element.'
    }
  }
};
export const InputWithIcons = () => inputWithIconsExampleHtml;
InputWithIcons.parameters = {
  docs: {
   description: {
      story: 'The Input with add-on supports icons.'
    }
  }
};
export const InputWithActions = () => inputWithActionsExampleHtml;
InputWithActions.parameters = {
  docs: {
   description: {
      story: 'The Input with add-on supports actions. Actions can be shown with a text label or icon.'
    }
  }
};
export const States = () => statesExampleHtml;
States.parameters = {};
export const Focus = () => focusExampleHtml;
Focus.parameters = {
  docs: {
   description: {
      story: 'The Input Group supports <b>focus</b> state, it can be added by putting `.is-focus` class to component.'
    }
  }
};
export const TestOne = () => testOneExampleHtml;
TestOne.parameters = {
  docs: {
    disable: true
  }
};
export const TestTwo = () => testTwoExampleHtml;
TestTwo.parameters = {
  docs: {
    disable: true
  }
};
export const TestThree = () => testThreeExampleHtml;
TestThree.parameters = {
  docs: {
    disable: true
  }
};
export const TestFour = () => testFourExampleHtml;
TestFour.parameters = {
  docs: {
    disable: true
  }
};
export const TestFive = () => testFiveExampleHtml;
TestFive.parameters = {
  docs: {
    disable: true
  }
};
export const TestSix = () => testSixExampleHtml;
TestSix.parameters = {
  docs: {
    disable: true
  }
};