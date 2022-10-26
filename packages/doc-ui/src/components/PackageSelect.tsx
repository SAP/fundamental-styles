import React, {useContext} from 'react';
import {packages, packageValueToPackageMap} from 'fundamental-styles/configuration';
import {SAPContext} from "../contexts/SAPContext";
import {IconButton, Icons, TooltipLinkList, WithTooltip} from "@storybook/components";
import IconButtonLabel from "./IconButtonLabel";

export default () => {
    const sapContext = useContext(SAPContext);
    const selectedPackage = packageValueToPackageMap.get(sapContext.selectedPackage || 'all');
    return (
        <WithTooltip
            placement="top"
            trigger="click"
            closeOnClick
            tooltip={({onHide}) => {
                const packageOptions = packages.map(dir => {
                    return {
                        id: dir.value,
                        title: dir.title,
                        active: dir.value === sapContext.selectedPackage,
                        onClick: () => {
                            sapContext.setPackage(dir.value);
                            onHide();
                        }
                    }
                });
                return <TooltipLinkList links={[...packageOptions]}/>;
            }}
        >
            <IconButton
                title={'Package'}
                active={!!selectedPackage}
            >
                <Icons icon={'filter'}/>
                {!!selectedPackage && <IconButtonLabel>{selectedPackage.title}</IconButtonLabel>}
            </IconButton>
        </WithTooltip>
    );
};
