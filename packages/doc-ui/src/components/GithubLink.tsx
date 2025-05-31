import lernaJson from '../../../../lerna.json';
import { IconButton } from 'storybook/internal/components';
import { styled } from 'storybook/theming';
import { GithubIcon } from '@storybook/icons';

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
        href={`https://github.com/SAP/fundamental-styles/tree/v${lernaJson.version}`}
        target={'_blank'}
        title={'Github Link'}
        content={undefined}
        rel={undefined}
        autoFocus={false}
        rev={undefined}
    >
        <GithubIcon/>
        <StyledSpan>
            {`v${lernaJson.version}`}
        </StyledSpan>
    </IconButton>
</StyledGhButtonContainer>;
