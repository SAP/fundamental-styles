import { IntroductionPage, SAPContainer } from 'fundamental-styles/doc-ui';
import { Markdown } from "@storybook/blocks"

function IntroductionPageWrapper({ children }) {
    return <SAPContainer>
        <IntroductionPage>
            {children}
        </IntroductionPage>
    </SAPContainer>;
}

export function RenderPackageIntroduction(readme: any) {
    return () => <IntroductionPageWrapper>
        <Markdown options={{forceBlock: true}}>{readme}</Markdown>
    </IntroductionPageWrapper>;
}
