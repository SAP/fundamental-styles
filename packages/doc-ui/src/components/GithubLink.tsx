import packageJson from '../../../../package.json';
import { IconButton, Icons } from '@storybook/components';
import { styled } from '@storybook/theming';

const StyledSpan = styled.span(({ theme }) => ({
    fontSize: theme.typography.size.s1,
    marginLeft: 10
}));

const StyledGhButtonContainer = styled.div`
  display: inline-block;

  > a {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 6px;
  }
`;

export default () => <StyledGhButtonContainer>
    <IconButton
        href={`https://github.com/SAP/fundamental-styles/tree/v${packageJson.version}`}
        target={'_blank'}
        title={'Github Link'}
        content={undefined}
        rel={undefined}
        autoFocus={false}
        rev={undefined}
    >
        <Icons icon={'github'}></Icons>
        <StyledSpan>
            {`v${packageJson.version}`}
        </StyledSpan>
    </IconButton>
</StyledGhButtonContainer>;
