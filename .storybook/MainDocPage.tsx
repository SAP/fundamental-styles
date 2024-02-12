import {DocsPage, SAPContainer} from "fundamental-styles/doc-ui";

/**
 * Component which creates and renders the DocsPage component
 * in a SAPContext provided environment.
 * This component is used in the storybook preview
 */
export function MainDocPage() {
    return <SAPContainer>
        <DocsPage />
    </SAPContainer>
}
