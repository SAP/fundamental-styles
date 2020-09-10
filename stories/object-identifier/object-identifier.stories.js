import '../../dist/object-identifier.css';
import '../../dist/link.css';
import '../../dist/table.css';

export default {
    title: 'Components/Object Identifier',
    parameters: {
        description: 'The object identifier is a small building block representing an object by a title and short description.',
        tags: ['f3']
    }
};

export const titleOnly = () => `
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
</div>
`;

titleOnly.storyName = 'Title only';
titleOnly.parameters = {
    docs: {
        storyDescription: 'To make title needs to add the `fd-object-identifier__title` modifier class.'
    }
};

export const boldTitle = () => `
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title-bold">NoteBook Basic 15</p>
</div>
`;

boldTitle.storyName = 'Bold title';
boldTitle.parameters = {
    docs: {
        storyDescription: `To make title bolder needs to add the \`fd-object-identifier__title-bold\` modifier class 
        instead of \`fd-object-identifier__title\`.`
    }
};

export const titleAsLink = () => `
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__link">NoteBook Basic 15</p>
</div>
<br>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title-bold fd-object-identifier__link">NoteBook Basic 15</p>
</div>
<br>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title"><a href="#" class="fd-link">NoteBook Basic 15</a></p>
</div>
`;

titleAsLink.storyName = 'Title as link';
titleAsLink.parameters = {
    docs: {
        storyDescription: `To make title as link needs to add the \`fd-object-identifier__link\` modifier class 
        to the \`fd-object-identifier__title\` or \`fd-object-identifier__title-bold\`.`
    }
};

export const titleAndText = () => `
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title-bold">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__link">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title-bold fd-object-identifier__link">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>
`;

titleAndText.storyName = 'Title and description';
titleAndText.parameters = {
    docs: {
        storyDescription: 'To make title and description need to add an extra tag below the title and add to them `fd-object-identifier__text` modifier class.'
    }
};

export const withTable = () => `
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Product</th>
            <th class="fd-table__cell" scope="col">Supplier</th>
            <th class="fd-table__cell" scope="col">Weight</th>
            <th class="fd-table__cell" scope="col">Price</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">
                <div class="fd-object-identifier">
                    <p class="fd-object-identifier__title">10" Portable DVD player</p>
                    <p class="fd-object-identifier__text">HT-2001</p>
                </div>
            </td>
            <td class="fd-table__cell">Titanium</td>
            <td class="fd-table__cell">0.84 KG</td>
            <td class="fd-table__cell">449.99 EUR</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">
                <div class="fd-object-identifier">
                    <p class="fd-object-identifier__title-bold">Astro Phone 6</p>
                    <p class="fd-object-identifier__text">HT-1252</p>
                </div>
            </td>
            <td class="fd-table__cell">Technocom</td>
            <td class="fd-table__cell">1.79 KG</td>
            <td class="fd-table__cell">349.99 EUR</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">
                <div class="fd-object-identifier">
                    <p class="fd-object-identifier__title fd-object-identifier__link">Blaster Extreme</p>
                    <p class="fd-object-identifier__text">HT-1091</p>
                </div>
            </td>
            <td class="fd-table__cell">Ultrasonic United</td>
            <td class="fd-table__cell">0.79 KG</td>
            <td class="fd-table__cell">249.99 EUR</td>
        </tr>
    </tbody>
</table>
`;

withTable.storyName = 'Object Identifier inside table';
