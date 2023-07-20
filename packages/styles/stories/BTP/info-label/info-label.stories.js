import typesExampleHtml from "./types.example.html?raw";
import '../../../src/btp/info-label.scss';
import '../../../src/icon.scss';

export default {
  title: 'BTP/Info Label',
  parameters: {
    description: `Info Label is a small non-interactive numeric or text-based control. Its primary use is to add user-defined characteristics to an object.
`,
    tags: ['btp']
  }
};
export const Types = () => typesExampleHtml;
Types.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `For <code>Display</code> mode add the <code>fdb-info-label--display</code> modifier class. <br>
      
| **Accent** | **Modifier class** |
| :--------- | :---------------: |
| Accent 1 - Mango | \`fdb-info-label--accent-1\`|
| Accent 2 - Red | \`fdb-info-label--accent-2\`|
| Accent 3 - Raspberry | \`fdb-info-label--accent-3\`|
| Accent 4 - Pink | \`fdb-info-label--accent-4\`|
| Accent 5 - Indigo | \`fdb-info-label--accent-5\`|
| Accent 6 - Blue | \`fdb-info-label--accent-6\`|
| Accent 7 - Teal (Default) | \`fdb-info-label--accent-7\`|
| Accent 8 - Green | \`fdb-info-label--accent-8\`|
| Accent 9 - Cyan | \`fdb-info-label--accent-9\`|
| Accent 10 - Grey | \`fdb-info-label--accent-10\`|

      `
    }
  }
};
