import '../../../src/section.scss';
import '../../../src/layout-grid.scss';
import '../../../src/layout-panel.scss';
import '../../../src/layout.scss';
export default {
    title: 'Layouts/Section',
    parameters: {
        description: `
The section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.

You will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.

Can hold two child types:
- \`.fd-layout-panel\`
- \`.fd-container\`, \`.fd-row\` and \`fd-col--[num]\` can be used to organize panels or content when a grid layout is not desired.`,
        tags: ['non-f3']
    }
};

export const Structure = () => `<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
`;

Structure.storyName = 'Section Structure';
Structure.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: ''
        }
    }
};

export const SectionLayoutGrid = () => `<section class="fd-section">
    <div class="fd-container">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">

        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      </div>
    </div>
</section>
`;

SectionLayoutGrid.storyName = 'With Layout Grid';
SectionLayoutGrid.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Shows an example with the grid span helper class.
This is most appropriate when displaying a collection of content in a linear order.`
        }
    }
};

export const SectionPanels = () => `<section class="fd-section">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__header">
            <div class="fd-layout-panel__head">
                <h3 class="fd-layout-panel__title">
                    .fd-layout-panel__title
                </h3>
                <p class="fd-layout-panel__description">
                    .fd-layout-panel__description
                </p>
            </div>
            <div class="fd-layout-panel__actions">
                .fd-layout-panel__actions
            </div>
        </div>
        <div class="fd-layout-panel__filters" id="">
            .fd-layout-panel__filters
        </div>
        <div class="fd-layout-panel__body">
            .fd-layout-panel__body
        </div>
        <div class="fd-layout-panel__footer">
            .fd-layout-panel__footer
        </div>
    </div>
</section>
`;

SectionPanels.storyName = 'With Panels';
SectionPanels.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Shows an alternate layout option using columns.
This may be more appropriate depending on the need to maintain source order and structure.`
        }
    }
};

export const SectionHeaders = () => `<section class="fd-section">
    <div class="fd-section__header">
      <h3 class="fd-section__title">Section title</h3>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            fd-layout-panel
        </div>
    </div>
</section>
`;

SectionHeaders.storyName = 'With Headers';
SectionHeaders.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'Header and title elements are available when necessary to label content groups.'
        }
    }
};

export const TestingSimpleSection = () => `<section class='fd-section '>
    Simple Section
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Section Title</h3>
    </div>
    Section Content
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action section</div>
    </div>
    Section Content
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section fd-section--full-bleed'>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content with Full Bleed
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>Simple Section</section>
`;

TestingSimpleSection.parameters = {
    docs: {
        disable: true
    }
};

export const TestingSectionWithHeadlines = () => `
<section class='fd-section '>
    <div class='fd-section__header'>
        <h2 class='fd-section__title'>section with h2 headline</h2>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>section with h3 headline</h3>
            <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h4 class='fd-section__title'>section with h4 headline</h4>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h5 class='fd-section__title'>section with h5 headline</h5>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h6 class='fd-section__title'>section with h6 headline</h6>
        <div class='fd-section__actions'>action part</div>
    </div>
Section Content
    <div class='fd-section__footer'>footer part</div>
</section>
`;

TestingSectionWithHeadlines.parameters = {
    docs: {
        disable: true
    }
};
