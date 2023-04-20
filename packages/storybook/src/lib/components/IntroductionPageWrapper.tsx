import { IntroductionPage, SAPContainer } from 'fundamental-styles/doc-ui';
import Markdown from 'markdown-to-jsx';

function IntroductionPageWrapper({ children }) {
    return <SAPContainer>
        <IntroductionPage>
            {children}
        </IntroductionPage>
    </SAPContainer>;
}

export function RenderPackageIntroduction(readme: string) {
    return () => <IntroductionPageWrapper>
        <Markdown>{readme}</Markdown>
    </IntroductionPageWrapper>;
}
