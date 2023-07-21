import microProcessFlowCustomWidthExampleHtml from "./micro-process-flow-custom-width.example.html?raw";
import microProcessFlowWithObjectsExampleHtml from "./micro-process-flow-with-objects.example.html?raw";
import overflowMicroProcessFlowExampleHtml from "./overflow-micro-process-flow.example.html?raw";
import microProcessFlowWithPopoverExampleHtml from "./micro-process-flow-with-popover.example.html?raw";
import microProcessFlowCustomExampleHtml from "./micro-process-flow-custom.example.html?raw";
import microProcessFlowIndependentStepsExampleHtml from "./micro-process-flow-independent-steps.example.html?raw";
import defaultMicroProcessFlowExampleHtml from "./default-micro-process-flow.example.html?raw";
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/micro-process-flow.scss';
import '../../../src/popover.scss';
import '../../../src/status-indicator.scss';
export default {
  title: 'Components/Micro Process Flow',
  parameters: {
    description: `The micro process flow control enables you to visualize the state of individual items in a linear workflow. You can embed it into a list or a table.

##Usage

**Use micro process flow if:**

- You need to show the state of each step in a linear, multi-step process.

- The progress of multiple items needs to be displayed in a list or table.


**Do not use the micro process flow if:**

- You only need to show the state of a single-step process. Use the progress indicator or object status instead.

- you want to visualize a complex non-linear workflow. Use the process flow instead.


##Responsiveness
The micro process flow is responsive and adapts to the size of its parent container. If the micro process flow is too long for the parent container’s width, you can choose how it should behave:

- **Simple wrap:** Steps that don’t fit into the width of the parent container wrap to a new line.

- **Overflow:** Navigation arrows appear on both sides of the micro process flow, with the number of hidden steps indicated next to each arrow. By clicking the navigation arrows, users can scroll horizontally through all of the steps in the micro process flow.

##Layout
The micro process flow acts as a generic container in which process steps are laid out linearly along the horizontal axis. The control provides the following layout options:

- **Default: **the process steps appear as icons with a circular background. They use semantic colors and provide click events. You can choose from different icons provided by the SAP icon font.

- **Custom: **the default steps can be replaced by other controls. Supported controls: status indicator, button, label, link, avatar.

##Types

- **With dependent steps (default)**: the steps come with a connector line that appears between the process step and the step that follows it. Use this type when the completion of a step is a precondition for the subsequent step. You can also indicate the state of the transition between two steps with a suitable icon.

- **With independent steps**:  the steps are not connected and can be processed in any order. This type can be used when the user doesn’t need to perform the steps in a linear sequence.

        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const DefaultMicroProcessFlow = () => defaultMicroProcessFlowExampleHtml;
DefaultMicroProcessFlow.storyName = 'Micro process flow with dependent steps (Default)';
DefaultMicroProcessFlow.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const MicroProcessFlowIndependentSteps = () => microProcessFlowIndependentStepsExampleHtml;
MicroProcessFlowIndependentSteps.storyName = 'Micro process flow with independent steps';
MicroProcessFlowIndependentSteps.parameters = {
  docs: {
    description: {
      story: `Add the \`.fd-micro-process-flow--independent-steps\` modifier class to \`.fd-micro-process-flow\` class to remove the connector line.
        `
    }
  }
};
export const MicroProcessFlowCustom = () => microProcessFlowCustomExampleHtml;
MicroProcessFlowCustom.storyName = 'Micro process flow with custom steps';
MicroProcessFlowCustom.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const MicroProcessFlowWithPopover = () => microProcessFlowWithPopoverExampleHtml;
MicroProcessFlowWithPopover.storyName = 'Micro process flow with popover';
MicroProcessFlowWithPopover.parameters = {
  docs: {
    description: {
      story: `Information displayed in micro flow process items can be extended by adding popovers with additional context.
        `
    }
  }
};
export const OverflowMicroProcessFlow = () => overflowMicroProcessFlowExampleHtml;
OverflowMicroProcessFlow.storyName = 'Micro process flow with overflow';
OverflowMicroProcessFlow.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const MicroProcessFlowWithObjects = () => microProcessFlowWithObjectsExampleHtml;
MicroProcessFlowWithObjects.storyName = 'Micro process flow with elements inserted between nodes';
MicroProcessFlowWithObjects.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const MicroProcessFlowCustomWidth = () => microProcessFlowCustomWidthExampleHtml;
MicroProcessFlowCustomWidth.storyName = 'Micro process flow with custom node width';
MicroProcessFlowCustomWidth.parameters = {
  docs: {
    description: {
      story: `By default, the width of the item container is calculated based on the actual item width and the connector line. To change the width add inline style to the element with \`.fd-micro-process-flow__item\` class and provide value for the width.

For example:
\`<div class="fd-micro-process-flow__item" style="width: 6rem;">\`
        `
    }
  }
};