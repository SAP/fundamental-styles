import React, {useContext} from "react";
import {SAPContext} from "../contexts/SAPContext";
import {IconButton, Icons, TooltipLinkList, WithTooltip} from "@storybook/components";
import {IfBlock} from "./IfBlock";
import IconButtonLabel from "./IconButtonLabel";
import {packageValueToPackageThemesMapMap} from "fundamental-styles/configuration";


export default () => {
    const sapContext = useContext(SAPContext);
    const currentTheme = packageValueToPackageThemesMapMap.get(sapContext.storyPackage?.value || '')?.get(sapContext.theme || '');

    return (
        <IfBlock condition={(sapContext.storyPackage?.themes || []).length > 0}>
            <WithTooltip
                placement="top"
                trigger="click"
                closeOnClick
                tooltip={({onHide}) => {
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
                    active={!!sapContext.theme}
                >
                    <Icons icon={'paintbrush'}/>
                    <IfBlock condition={!!sapContext.theme}>
                        <IconButtonLabel>{currentTheme?.name}</IconButtonLabel>
                    </IfBlock>
                </IconButton>
            </WithTooltip>
        </IfBlock>

    );
};
