import {useContext} from "react";
import { SAPContext } from '../contexts/SAPContext';
import { IconButton, TooltipLinkList, WithTooltip } from 'storybook/internal/components';
import { PaintBrushIcon } from '@storybook/icons'
import { IfBlock } from './IfBlock';
import IconButtonLabel from "./IconButtonLabel";
import {packageValueToPackageThemesMapMap} from "fundamental-styles/configuration";


export default () => {
    const sapContext = useContext(SAPContext);
    const currentTheme = packageValueToPackageThemesMapMap.get(sapContext.storyPackage?.value || '')?.get(sapContext.theme || '');

    return (
        <WithTooltip
            placement="top"
            trigger="click"
            closeOnOutsideClick={true}
            tooltip={({ onHide }) => {
                const themesList = (sapContext.storyPackage?.themes || []).map(theme => {
                    return {
                        id: theme.id,
                        title: theme.name,
                        active: theme.id === sapContext.theme,
                        onClick: () => {
                            sapContext.setTheme(theme.id);
                            onHide();
                        }
                        }
                    });
                    return <TooltipLinkList links={themesList}/>;
                }}
            >
            <IconButton
                disabled={false}
                title={'Theme Selector'}
                active={!!sapContext.theme} content={undefined} rel={undefined} autoFocus={undefined}
                rev={undefined}>
                <PaintBrushIcon/>
                <IfBlock condition={!!sapContext.theme}>
                    <IconButtonLabel>{currentTheme?.name}</IconButtonLabel>
                </IfBlock>
            </IconButton>
            </WithTooltip>
    );
};
