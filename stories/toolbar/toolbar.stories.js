import { action } from "@storybook/addon-actions";

import "../base.scss";

import "../../dist/toolbar.css";
import "../../dist/button.css";
import "../../dist/list.css";
import "../../dist/menu.css";
import "../../dist/popover.css";

import Toolbar from "./toolbar.html";

const actionsData = {
  onPopoverMenuClicked: action("onPopoverMenuClicked"),
};

const toolbarData = {
  hideOverflowMenu: true,
  dir: "ltr",
};

export default {
  title: "Toolbar",
  component: Toolbar,
  props: {
    toolbar: toolbarData,
  },
  on: {
    ...actionsData,
  },
};

export const Default = () => ({
  Component: Toolbar,
  props: {
    toolbar: toolbarData,
  },
  on: {
    ...actionsData,
  },
});

export const OverflowMenuOpened = () => ({
  Component: Toolbar,
  props: {
    toolbar: { ...toolbarData, hideOverflowMenu: false },
  },
  on: {
    ...actionsData,
  },
});

export const Rtl = () => ({
  Component: Toolbar,
  props: {
    toolbar: { ...toolbarData, dir: "rtl" },
  },
  on: {
    ...actionsData,
  },
});
