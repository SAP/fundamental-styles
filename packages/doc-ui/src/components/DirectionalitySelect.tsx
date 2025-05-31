import {SAPContext} from "../contexts/SAPContext";
import {useContext, useMemo} from "react";
import {IconButton, TooltipLinkList, WithTooltip} from "storybook/internal/components";
import IconButtonLabel from "./IconButtonLabel";
import { ParagraphIcon } from "@storybook/icons";

export default () => {
    const sapContext = useContext(SAPContext);
    const currentDirectionality = useMemo(() => sapContext.directionalities.find(directionality => directionality.value === sapContext.directionality), [sapContext.directionalities, sapContext.directionality]);
    return (
        <WithTooltip
            placement="top"
            trigger="click"
            closeOnClick
            tooltip={({onHide}) => {
                const directionalities = sapContext.directionalities.map(dir => {
                    return {
                        id: dir.value,
                        title: dir.title,
                        active: dir.value === sapContext.directionality,
                        onClick: () => {
                            sapContext.setDirectionality(dir.value);
                            onHide();
                        }
                    }
                });
                return <TooltipLinkList links={directionalities}/>;
            }}
        >
            <IconButton
                title={'Directionality'}
                active={!!sapContext.directionality}
                rel={undefined}
                content={undefined}
                autoFocus={false}
                rev={undefined}
            >
                <ParagraphIcon/>
                {!!currentDirectionality && <IconButtonLabel>{currentDirectionality.title}</IconButtonLabel>}
            </IconButton>
        </WithTooltip>
    );
};
