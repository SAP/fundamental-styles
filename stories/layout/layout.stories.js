import '../../dist/layout-panel.css';
import '../../dist/layout.css';
import '../../dist/section.css';
import '../../dist/layout-grid.css';

export default {
    title: 'Layouts/Layout',
    parameters: {
        description: 'Testing Part only'
    }
};

export const one = () => `
<div class="fd-container fddocs">
    <code>.fd-container</code>
    Max width at 1290px (default)
</div>
`;

one.parameters = {
    docs: {
        disable: true
    }
};

export const two = () => `
<div class="fd-container fd-container--fluid fddocs">
    <code>.fd-container--fluid</code>
    No max width
</div>
`;

two.parameters = {
    docs: {
        disable: true
    }
};
export const three = () => `
<div class="fd-container fd-container--centered fddocs">
    .fd-container--centered
    Auto left and right margin, this does NOT center content
</div>
`;

three.parameters = {
    docs: {
        disable: true
    }
};
export const four = () => `
<div class="fd-container fd-container--flex fddocs">
    <code>.fd-container--flex</code>
</div>
`;

four.parameters = {
    docs: {
        disable: true
    }
};
export const five = () => `
<div class="fd-container fddocs">
    <div class="fd-col--1">1</div>
    <div class="fd-col--1">2</div>
    <div class="fd-col--1">3</div>
    <div class="fd-col--1">4</div>
    <div class="fd-col--1">5</div>
    <div class="fd-col--1">6</div>
    <div class="fd-col--1">7</div>
    <div class="fd-col--1">8</div>
    <div class="fd-col--1">9</div>
    <div class="fd-col--1">10</div>
    <div class="fd-col--1">11</div>
    <div class="fd-col--1">12</div>
</div>
`;

five.parameters = {
    docs: {
        disable: true
    }
};
export const six = () => `
<div class="fd-container fddocs">
    <div class="fd-col--2">1</div>
    <div class="fd-col--2">2</div>
    <div class="fd-col--2">3</div>
    <div class="fd-col--2">4</div>
    <div class="fd-col--2">5</div>
    <div class="fd-col--2">6</div>
</div>
`;

six.parameters = {
    docs: {
        disable: true
    }
};
export const seven = () => `
<div class="fd-container fddocs">
    <div class="fd-col--3">1</div>
    <div class="fd-col--3">2</div>
    <div class="fd-col--3">3</div>
    <div class="fd-col--3">4</div>
</div>
`;

seven.parameters = {
    docs: {
        disable: true
    }
};

export const eight = () => `
<div class="fd-container fddocs">
    <div class="fd-col--4">1</div>
    <div class="fd-col--4">2</div>
    <div class="fd-col--4">3</div>
</div>
`;

eight.parameters = {
    docs: {
        disable: true
    }
};

export const nine = () => `
<div class="fd-container fd-has-align-items-center fddocs">
    <div class="fd-col--3">1</div>
    <div class="fd-col--9">2</div>
</div>
`;

nine.parameters = {
    docs: {
        disable: true
    }
};

export const eleven = () => `
<div class="fd-container fddocs">
    <div class="fd-col--3">1</div>
    <div class="fd-col--6">2</div>
    <div class="fd-col--3">3</div>
</div>
`;

eleven.parameters = {
    docs: {
        disable: true
    }
};

export const twelve = () => `
<div class="fd-container fddocs">
    <div class="fd-col--9 fd-col--shift-3">1</div>
</div>
`;

twelve.parameters = {
    docs: {
        disable: true
    }
};

export const thirteen = () => `
<div class="fd-container fd-container--flex fddocs">
    <div class="fd-col--9">1</div>
    <div class="fd-col">2</div>
    <div class="fd-col">3</div>
    <div class="fd-col">4</div>
</div>
`;

thirteen.parameters = {
    docs: {
        disable: true
    }
};

export const forteen = () => `
<div class="fd-container fd-container--flex fddocs">
    <div class="fd-col">1</div>
    <div class="fd-col">2</div>
    <div class="fd-col">3</div>
</div>
`;

forteen.parameters = {
    docs: {
        disable: true
    }
};
