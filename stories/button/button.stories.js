
import "../base.scss";

import "../../dist/button.css";
import "../../dist/icon.css";

import Button from "./button.html";


const buttonData = {
  compact: false,
  dir: "ltr",
  disabled: false,
  text: 'Button'
}

export default {
  title: "Button",
  component: Button,
  props: {
    select: buttonData,
  },
};

export const primary = () => ({
  Component: Button,
  props: {
    button: buttonData,
  },
});

export const icon = () => ({
  Component: Button,
  props: {
    button: {...buttonData, icon: 'sap-icon--cart'},
  },
});

export const emphasized = () => ({
  Component: Button,
  props: {
    button: {...buttonData, emphasized: true },
  },
});


