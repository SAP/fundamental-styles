import 'fn/src/fn-busy-indicator.scss';

export default {
  title: 'Busy Indicator',
  parameters: {
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
        text-align: center;
    }
</style>
`;
export const BusyIndicator = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-busy-indicator" aria-hidden="false" aria-label="Loading">
        <div class="fn-busy-indicator--circle-0"></div>
        <div class="fn-busy-indicator--circle-1"></div>
        <div class="fn-busy-indicator--circle-2"></div>
    </div>
</div>
`;
