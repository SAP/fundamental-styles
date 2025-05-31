import { IntroductionPage, SAPContainer } from 'fundamental-styles/doc-ui';
import { Markdown } from "@storybook/addon-docs/blocks"

function IntroductionPageWrapper({ children }) {
    return <SAPContainer>
        <IntroductionPage>
            {children}
        </IntroductionPage>
    </SAPContainer>;
}

/**
 * Component which creates and renders the IntroductionPage component
 * with given readme content for the package which is currently being viewed.
 * @param readme
 * @constructor
 */
export function RenderPackageIntroduction(readme: any) {
    return () => <IntroductionPageWrapper>
        <Markdown options={{forceBlock: true}}>{readme}</Markdown>
    </IntroductionPageWrapper>;
}
