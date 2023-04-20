import { IntroductionPage, SAPContainer } from 'fundamental-styles/doc-ui';

export function IntroductionPageWrapper({ children }) {
    return <SAPContainer>
        <IntroductionPage>
            { children }
        </IntroductionPage>
    </SAPContainer>
}
