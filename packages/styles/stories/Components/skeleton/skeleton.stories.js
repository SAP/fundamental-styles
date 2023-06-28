import skeletonExampleHtml from "./skeleton.example.html?raw";
import circleExampleHtml from "./circle.example.html?raw";
import linesExampleHtml from "./lines.example.html?raw";
import complexExampleHtml from "./complex.example.html?raw";
import '../../../src/skeleton.scss';
export default {
  title: 'Components/Skeleton',
  parameters: {
    description: `Placeholder loading is a type of busy indicator that provides the user with a skeleton page as a placeholder while the content is still loading. The aim is to inform the user of the ongoing loading progress.
    \r\nA skeleton page shows the frame of the final content without the content being fully loaded. Visually, skeleton pages are grey boxes with animations to indicate loading activity.
    \r\nSkeleton pages are used to create an impression of speed and reliability when an app encounters performance barriers. They provide a generic preview of the layout, which makes the app seem to load faster. This improves the overall user experience.
    \r\nThe Placeholder Skeleton is made up of Placeholder Shapes that aim to give an idea of how the actual content will look like. The placeholders can take various forms, depending on the type of content that is being loaded.`,
    tags: ['f3']
  }
};
export const Skeleton = () => skeletonExampleHtml;
Skeleton.storyName = 'Rectangle';
Skeleton.parameters = {
  docs: {
    description: {
      story: 'An example of a rectangular placeholder'
    }
  }
};
export const Circle = () => circleExampleHtml;
Circle.parameters = {
  docs: {
    description: {
      story: 'An example of a circular placeholder'
    }
  }
};
export const Lines = () => linesExampleHtml;
Lines.parameters = {
  docs: {
    description: {
      story: 'Examples of lines placeholders (3 and 2 lines)'
    }
  }
};
export const ComplexExamples = () => complexExampleHtml;
ComplexExamples.parameters = {
  docs: {
    description: {
      story: 'The library allows setting customly build examples like this one'
    }
  }
};
