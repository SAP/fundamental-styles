import { describe, expect, it } from 'vitest';
import selectionExampleHtml from '../stories/Components/tree/selection.example.html?raw';

describe('Tree selection example', () => {
    it('associates each checkbox label with the checkbox in the same form item', () => {
        const container = document.createElement('div');
        container.innerHTML = selectionExampleHtml;
        document.body.appendChild(container);
        try {
            const inputs = container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
            expect(inputs.length).gt(0);
            for (const input of inputs) {
                const label = input.parentElement!.querySelector('label');
                expect(label?.control).toBe(input);
            }
        } finally {
            container.remove();
        }
    });

    it('activates only the checkbox beside the clicked label', () => {
        const container = document.createElement('div');
        container.innerHTML = selectionExampleHtml;
        document.body.appendChild(container);
        try {
            const inputs = Array.from(container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'));
            expect(inputs.length).gt(0);
            for (const input of inputs) {
                const before = inputs.map((checkbox) => checkbox.checked);
                input.parentElement!.querySelector('label')!.click();
                expect(inputs.map((checkbox) => checkbox.checked)).toEqual(
                    before.map((checked, index) => (inputs[index] === input ? !checked : checked))
                );
            }
        } finally {
            container.remove();
        }
    });
});
