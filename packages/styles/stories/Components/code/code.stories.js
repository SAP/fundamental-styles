import '../../../src/code.scss';
export default {
    title: 'Components/Code',
    parameters: {
        description: `The code component helps with formating and styling code snippets. It differantiates the code lines from the normal text.
##Usage

**Use the code if:**
* You want to display a block of code.
* You want to dispaly a line of code.

`,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};


export const Primary = () => `

<pre><code class="fd-code">apiVersion: extensions.name/v1alpha1
kind: Class
metadata:
  name: fundamental-extension-management
spec:
  cdmUrl: {{ url.path.version1 }}://{{ .subdomain.domain }}{{ .Values.cdmPath }}
  description: This Extension adds Extension Management to Project1
  displayName: Extension Management
  supportsDynamicCdmUrls: false
  multipleInstallations: false
  image: "data:image/png;base64,sfg87sg98f7gs9d8g7s9fgdfg"
  installableScopes:
    - Cluster
  extensionConfig:
    extensionManagerServiceUrl: https://extension-manager-name.{{ .Values.landscapeDomainName }}/graphql
</code></pre>
`;

Primary.storyName = 'Code Block';
Primary.parameters = {
    docs: {
        description: {
            story: 'Code Block is a combination of multiple lines of code which can be displayed as a standalone element.'
        }
    }
};

export const InlineCode = () => `You can add inline code like here <code class="fd-code fd-code--inline">FundamentalExtension</code> and add mores
<code class="fd-code fd-code--inline">ClassName</code>`;

InlineCode.parameters = {
    docs: {
        description: {
            story: 'Inline Code is used to hightlight a short snippet code inside a paragraph.'
        }
    }
};
