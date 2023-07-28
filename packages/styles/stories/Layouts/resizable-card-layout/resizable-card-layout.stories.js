import resizeCardVerticalDirectionExampleHtml from "./resize-card-vertical-direction.example.html?raw";
import resizeCardHorizontalDirectionExampleHtml from "./resize-card-horizontal-direction.example.html?raw";
import resizeCardHorizontalVerticalDirectionExampleHtml from "./resize-card-horizontal-vertical-direction.example.html?raw";
import resizeCardLayoutExampleHtml from "./resize-card-layout.example.html?raw";
import '../../../src/resizable-card-layout.scss';
import '../../../src/button.scss';
import '../../../src/avatar.scss';
import '../../../src/badge.scss';
import '../../../src/card.scss';
import '../../../src/object-status.scss';
import '../../../src/numeric-content.scss';
import '../../../src/table.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/link.scss';
import '../../../src/icon.scss';
export default {
  title: 'Layouts/Resizable Card Layout',
  parameters: {
    description: `The resizable card layout is a layout for the overview page. It enables users to define a personalized card layout by changing not only the position of a card, but also its size, and thus how the card content is presented.

This layout gives users much greater flexibility in tailoring the overview page to their specific business needs. And it allows app teams to offer varying levels of detail for any given card. Whenever the size of a card changes, the content adapts automatically to show the most relevant information in the available space.

Cards can be resized vertically in rows of 1 rem and horizontally in steps of 20 rem (minimum width).
        `,
    tags: ['f3', 'theme', 'development'],
    components: ['resizable-card-layout', 'button', 'avatar', 'badge', 'card', 'object-status', 'numeric-content', 'table', 'checkbox', 'list', 'link', 'icon']
  }
};
export const ResizeCardLayout = () => resizeCardLayoutExampleHtml;
ResizeCardLayout.storyName = 'Resizable card layout';
ResizeCardLayout.parameters = {
  docs: {
    description: {
      story: `Resizable card layout with multiple cards.
        `
    }
  }
};
export const ResizeCardHorizontalVerticalDirection = () => resizeCardHorizontalVerticalDirectionExampleHtml;
ResizeCardHorizontalVerticalDirection.storyName = 'Card resize in horizontal and vertical directions';
ResizeCardHorizontalVerticalDirection.parameters = {
  docs: {
    description: {
      story: `Cards can be resized in horizontal direction as well as vertical direction. Resize handle will expand on right border for horizontal resize and bottom border for vertical resize.
        `
    }
  }
};
export const ResizeCardHorizontalDirection = () => resizeCardHorizontalDirectionExampleHtml;
ResizeCardHorizontalDirection.storyName = 'Card resize in horizontal directions';
ResizeCardHorizontalDirection.parameters = {
  docs: {
    description: {
      story: `Cards can also be resized in horizontal direction only. Resize handle will expand on right border.
        `
    }
  }
};
export const ResizeCardVerticalDirection = () => resizeCardVerticalDirectionExampleHtml;
ResizeCardVerticalDirection.storyName = 'Card resize in vertical directions';
ResizeCardVerticalDirection.parameters = {
  docs: {
    description: {
      story: `Cards can be resized in vertical direction only. Resize handle will expand on bottom border.
        `
    }
  }
};