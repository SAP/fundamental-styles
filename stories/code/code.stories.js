export default {
    title: 'Components/Code',
    parameters: {
        description: 'A component for styling code',
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
    extensionManagerServiceUrl: https://extension-manager.{{ .Values.landscapeDomain }}/graphql
</code></pre>
`;

primary.storyName = 'Code';
primary.parameters = {
    docs: {
        storyDescription: 'Code example'
    }
};
