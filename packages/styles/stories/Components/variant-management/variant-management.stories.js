import sizesExampleHtml from "./sizes.example.html?raw";
import dirtyLabelExampleHtml from "./dirty-label.example.html?raw";
import '../../../src/variant-management.scss';
import "../../../src/button.scss";
import "../../../src/title.scss";
import "../../../src/icon.scss";
export default {
  title: 'Components/Variant Management',
  parameters: {
    description: `Variants store filter settings which have been defined, for example, within the filter bar.
    The filter settings consist of filter parameters, selection fields and layout.
    This control enables the user to load, save, and change variants.
    In some cases, the table settings are also saved within a variant.
    In the context of tables, this control is used to save, manage, and load table settings which include layout, column visibility, sorting, and grouping.`,
    tags: ['f3', 'theme', 'development']
  }
};

export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
    description: {
      story: `- <b>For matching the dynamic / object page header style:</b> add the modifier class <code>.fd-variant-management__title--object-header</code> to the <code>.fd-variant-management__title</code> base class.
- <b>For matching the dynamic / object page header style when the header is snapped or scrolled:</b> add the modifier class <code>.fd-variant-management__title--snapped-object-header</code> to the <code>.fd-variant-management__title</code> base class.
- <b>For matching the size of Headers within Tables:</b> add the modifier class <code>.fd-variant-management__title--title</code> to the <code>.fd-variant-management__title</code> base class.`
    }
  }
};

export const DirtyLabel = () => dirtyLabelExampleHtml;
DirtyLabel.storyName = 'Dirty state';
DirtyLabel.parameters = {
  docs: {
    description: {
      story: `
<p>Variant management supports dirty indicator in cases when selected variant has been modified but not saved.</p>
<p>It can be either an asterisk sign, or a human-readable text.</p>`
    }
  }
};