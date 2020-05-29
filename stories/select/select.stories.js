import { action } from "@storybook/addon-actions";

import "../base.scss";

import "../../dist/select.css";
import "../../dist/icon.css";
import "../../dist/popover.css";
import "../../dist/list.css";
import "../../dist/form-message.css";

import Select from "./select.html";

const actionsData = {
  openDropdown: action("openDropdown"),
};

const selectData = {
  compact: false,
  dir: "ltr",
  disabled: false,
  openDropdown: false,
  optionData: [
    {
      text: "List Item 1",
      selected: true,
    },
    {
      text: "List Item 2",
      selected: false,
    },
    {
      text: "List Item 3",
      selected: false,
    },
    {
      text: "List Item 4",
      selected: false,
    },
  ],
  readOnly: false,
};

export default {
  title: "Select",
  component: Select,
  props: {
    select: selectData,
  },
  on: {
    ...actionsData,
  }
};

export const primary = () => ({
  Component: Select,
  props: {
    select: selectData,
  },
  on: {
    ...actionsData,
  }
});

export const compact = () => ({
  Component: Select,
  props: {
    select: { ...selectData, compact: true },
  },
  on: {
    ...actionsData,
  }
});

export const disabled = () => ({
  Component: Select,
  props: {
    select: { ...selectData, disabled: true },
  },
  on: {
    ...actionsData,
  }
});

export const readOnly = () => ({
  Component: Select,
  props: {
    select: { ...selectData, readOnly: true, placeholder: 'Selected Item 2' },
  },
  on: {
    ...actionsData,
  }
});

export const twoColumn = () => ({
  Component: Select,
  props: {
    select: { ...selectData,  optionData: [
        {
          text: "Product 1",
          secondaryText: "1000 EUR", 
          selected: false,
        },
        {
          text: "Product 2",
          secondaryText: "750 EUR", 
          selected: true,
        },
        {
          text: "Product 3",
          secondaryText: "780 EUR", 
          selected: false,
        },
        {
          text: "Product 4",
          secondaryText: "40 EUR", 
          selected: false,
        },
      ],
    },
  },
  on: {
    ...actionsData,
  }
});

export const twoColumnCompact = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      compact: true,
      optionData: [
        {
          text: "Product 1",
          secondaryText: "1000 EUR", 
          selected: false,
        },
        {
          text: "Product 2",
          secondaryText: "750 EUR", 
          selected: true,
        },
        {
          text: "Product 3",
          secondaryText: "780 EUR", 
          selected: false,
        },
        {
          text: "Product 4",
          secondaryText: "40 EUR", 
          selected: false,
        },
      ],
    },
  },
  on: {
    ...actionsData,
  }
});

export const twoColumnIcons = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      optionData: [
        {
          icon: "sap-icon--marketing-campaign",
          text: "Marketing",
          secondaryText: "1000 EUR", 
          selected: false,
        },
        {
          icon: "sap-icon--save",
          text: "Backups",
          secondaryText: "500 EUR", 
          selected: true,
        },
        {
          icon: "sap-icon--shipping-status",
          text: "Shipping",
          secondaryText: "125 EUR", 
          selected: false,
        },
        {
          icon: "sap-icon--headset",
          text: "Consulting",
          secondaryText: "200 EUR",
          selected: false,
        },
      ],
    },
  },
  on: {
    ...actionsData,
  }
});

export const textWrapping = () => ({
  Component: Select,
  props: {
    select: { ...selectData,  optionData: [
      {
        text: "Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text",
        secondaryText: "A1", 
        selected: false,
      },
      {
        text: "List Item 2",
        secondaryText: "A2", 
        selected: true,
      },
      {
        text: "List Item 3",
        secondaryText: "A3", 
        selected: false,
      },
      {
        text: "List Item 4",
        secondaryText: "A4", 
        selected: false,
      },
    ],
  },
},
  on: {
    ...actionsData,
  }
});

export const noWrapping = () => ({
  Component: Select,
  props: {
    select: { ...selectData,  optionData: [
      {
        noWrap: true,
        text: "Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text",
        secondaryText: "A1", 
        selected: false,
      },
      {
        text: "List Item 2",
        secondaryText: "A2", 
        selected: true,
      },
      {
        text: "List Item 3",
        secondaryText: "A3", 
        selected: false,
      },
      {
        text: "List Item 4",
        secondaryText: "A4", 
        selected: false,
      },
    ],
  },
},
  on: {
    ...actionsData,
  }
});


export const matchPopoverBodySize = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      placeholder: 'Much Longer than Usual',
      dropdownFill: true, 
    },
  },
  on: {
    ...actionsData,
  }
});

export const successState = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      formMessage: {
        type: 'success',
        message: 'Success Validation Message'
      },
    },
  },
  on: {
    ...actionsData,
  }
});

export const errorState = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      formMessage: {
        type: 'error',
        message: 'Error Validation Message'
      },
    },
  },
  on: {
    ...actionsData,
  }
});

export const warningState = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      formMessage: {
        type: 'warning',
        message: 'Warning Validation Message'
      },
    },
  },
  on: {
    ...actionsData,
  }
});

export const information = () => ({
  Component: Select,
  props: {
    select: { ...selectData,
      formMessage: {
        type: 'information',
        message: 'Information Validation Message'
      },
    },
  },
  on: {
    ...actionsData,
  }
});


export const Rtl = () => ({
  Component: Select,
  props: {
    select: { ...selectData, dir: "rtl" },
  },
  on: {
    ...actionsData,
  }
});
