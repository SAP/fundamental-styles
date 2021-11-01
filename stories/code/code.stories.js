export default {
    title: 'Components/Code',
    parameters: {
        description: 'A component for styling code snippet',
        tags: ['development'],
        components: ['code']
    }
};


export const primary = () => `

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

primary.storyName = 'Code Block';
primary.parameters = {
    docs: {
        storyDescription: 'Code example as a block where you are include multiple lines'
    }
};

export const inlineCode = () => `You can add inline code like here <code class="fd-code fd-code--inline">FundamentalExtension</code> and add mores
<code class="fd-code fd-code--inline">ClassName</code>`;

inlineCode.parameters = {
    docs: {
        storyDescription: 'Inline Code Example which can be used as part of a bigger text paragraph'
    }
};
