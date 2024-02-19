import overflowAutoExampleHtml from "./overflow-auto.example.html?raw";
import overflowScrollExampleHtml from "./overflow-scroll.example.html?raw";
import overflowHiddenExampleHtml from "./overflow-hidden.example.html?raw";
import overflowVisibleExampleHtml from "./overflow-visible.example.html?raw";
import '../../src/sap-overflow.scss';
export default {
  title: 'Overflow',
  parameters: {
    description: `The overflow property controls what happens to content that is too big to fit into an area. <br>
        The following values are available:
        <ul>
            <li><b>visible</b>: default value. The overflow is not clipped and the content renders outside the element's box</li>
            <li><b>hidden</b>: the overflow is clipped to fit into the area, and the rest of the content will be hidden</li>
            <li><b>scroll</b>: the overflow is clipped, and a scrollbar is added to see the rest of the content</li>
            <li><b>auto</b>: the overflow is not clipped, scrollbars are added only when necessary</li>
        </ul>
      `
  }
};
export const OverflowVisible = () => overflowVisibleExampleHtml;
OverflowVisible.parameters = {
  docs: {
    description: {
      story: `For overflow visible use: <code>.sap-overflow-visible</code>, <code>.sap-overflow-x-visible</code> or <code>.sap-overflow-y-visible</code> classes.`
    }
  }
};
export const OverflowHidden = () => overflowHiddenExampleHtml;
OverflowHidden.parameters = {
  docs: {
    description: {
      story: `For overflow hidden use: <code>.sap-overflow-hidden</code>, <code>.sap-overflow-x-hidden</code> or <code>.sap-overflow-y-hidden</code> classes.`
    }
  }
};
export const OverflowScroll = () => overflowScrollExampleHtml;
OverflowScroll.parameters = {
  docs: {
    description: {
      story: `For overflow scroll use: <code>.sap-overflow-scroll</code>, <code>.sap-overflow-x-scroll</code> or <code>.sap-overflow-y-scroll</code> classes.`
    }
  }
};
export const OverflowAuto = () => overflowAutoExampleHtml;
OverflowAuto.parameters = {
  docs: {
    description: {
      story: `For overflow auto use: <code>.sap-overflow-auto</code>, <code>.sap-overflow-x-auto</code> or <code>.sap-overflow-y-auto</code> classes.`
    }
  }
};