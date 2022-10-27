import { IntroductionPage, SAPContainer } from 'fundamental-styles/doc-ui';

export function IntroductionPageWrapper({ content }) {
    return <SAPContainer>
        <IntroductionPage content={content}/>
    </SAPContainer>
}
