export default {
    title: 'Components/Object Identifier',
    parameters: {
        description: `
The object identifier is a short text that represents the key identifier of an object, and can be displayed in various types of containers, tables, panels, popovers and more. The text wraps if there is insufficient horizontal space.

The object identifier should be easily read by the users, preferably displaying text instead of an ID. If it necessary to distinguish objects by their IDs, then it should appear as descriptive text below the title text.

**The object number comprises:**

- A title text
- An optional descriptive text
- An active state (if desired) which resembles a link that can trigger an event

##Usage
**Use the object identifier if:**

- You want to indicate the key identifier on an object.

**Do not use the object identifier if:**

- You want to display system messages.
- They are for decorative purposes only.        
`,
        tags: ['f3'],
        components: ['object-identifier', 'link', 'table']
    }
};

export const titleOnly = () => `<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
</div>
`;

titleOnly.storyName = 'Title';
titleOnly.parameters = {
    docs: {
        storyDescription: 'To display the object identifier as a title, add the `fd-object-identifier__title` modifier class to the main element.'
    }
};

export const boldTitle = () => `<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
</div>
`;

boldTitle.storyName = 'Bold';
boldTitle.parameters = {
    docs: {
        storyDescription: `To display the object identifier's title in bold, replace \`fd-object-identifier__title\`
        with the \`fd-object-identifier__title--bold\` modifier class.`
    }
};

export const titleAsLink = () => `<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--link">NoteBook Basic 15</p>
</div>
<br>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold fd-object-identifier__title--link">NoteBook Basic 15</p>
</div>
<br>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title"><a href="#" class="fd-link fd-object-identifier__link">NoteBook Basic 15</a></p>
</div>
<br>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold"><a href="#" class="fd-link fd-object-identifier__link">NoteBook Basic 15</a></p>
</div>
`;

titleAsLink.storyName = 'Link';
titleAsLink.parameters = {
    docs: {
        storyDescription: 'To display the object identifier as a link, add the `fd-object-identifier__title--link` modifier class to the title element.'
    }
};

export const titleAndText = () => `<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--link">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold fd-object-identifier__title--link">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>
`;

titleAndText.storyName = 'Descriptive';
titleAndText.parameters = {
    docs: {
        storyDescription: 'To display the object identifier\'s title with descriptive text, add an additional tag below the title container and a `fd-object-identifier__text` modifier class.'
    }
};

export const withTable = () => `<table class="fd-table fd-object-identifier__table">
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
                    <p class="fd-object-identifier__title fd-object-identifier__title--bold">Astro Phone 6</p>
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
                    <p class="fd-object-identifier__title fd-object-identifier__title--link">Blaster Extreme</p>
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

withTable.storyName = 'Table';
withTable.parameters = {
    docs: {
        storyDescription: 'To display the object identifier in a table, add the `fd-object-identifier__table` class to the table then add the `fd-object-identifier` within the table cells, along with any additional tags to include modifier classes for the styles mentioned above.'
    }
};
