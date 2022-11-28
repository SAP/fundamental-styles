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
      `,
        docs: { iframeHeight: 500 }
    }
};

export const OverflowVisible = () => `<div>
<div class="sap-overflow-visible" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`;
OverflowVisible.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For overflow visible use: <code>.sap-overflow-visible</code>, <code>.sap-overflow-x-visible</code> or <code>.sap-overflow-y-visible</code> classes.`
        }
    }
};

export const OverflowHidden = () => `<div>
<div class="sap-overflow-hidden" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`;
OverflowHidden.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For overflow hidden use: <code>.sap-overflow-hidden</code>, <code>.sap-overflow-x-hidden</code> or <code>.sap-overflow-y-hidden</code> classes.`
        }
    }
};

export const OverflowScroll = () => `<div>
<div class="sap-overflow-scroll" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`;
OverflowScroll.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For overflow scroll use: <code>.sap-overflow-scroll</code>, <code>.sap-overflow-x-scroll</code> or <code>.sap-overflow-y-scroll</code> classes.`
        }
    }
};

export const OverflowAuto = () => `<div>
<div class="sap-overflow-auto" style="background: #E2EEFF; padding: 1rem; width: 20rem; height: 5rem; margin-bottom: 2rem">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</div>`;
OverflowAuto.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For overflow auto use: <code>.sap-overflow-auto</code>, <code>.sap-overflow-x-auto</code> or <code>.sap-overflow-y-auto</code> classes.`
        }
    }
};
