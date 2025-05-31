import { SAPContext } from '../contexts/SAPContext';
import { useContext, useMemo } from 'react';
import { IconButton, TooltipLinkList, WithTooltip } from 'storybook/internal/components';
import IconButtonLabel from './IconButtonLabel';
import { ZoomIcon } from '@storybook/icons';

export default () => {
    const sapContext = useContext(SAPContext);
    const currentContentDensity = useMemo(() => sapContext.contentDensities.find(contentDensity => contentDensity.value === sapContext.contentDensity), [sapContext.contentDensities, sapContext.contentDensity]);
    const title = currentContentDensity ? currentContentDensity.title : 'Content Density';

    return (
        <WithTooltip
            placement="top"
            trigger="click"
            closeOnOutsideClick={true}
            tooltip={({ onHide }) => {
                const contentDensities = sapContext.contentDensities.map(dir => {
                    return {
                        id: dir.value,
                        title: dir.title,
                        active: dir.value === sapContext.contentDensity,
                        onClick: () => {
                            sapContext.setContentDensity(dir.value);
                            onHide();
                        }
                    };
                });
                return <TooltipLinkList links={contentDensities} />;
            }}
        >
            <IconButton
                title={title}
                active={!!sapContext.contentDensity}
                rel={undefined}
                content={undefined}
                autoFocus={false}
                rev={undefined}
            >
                <ZoomIcon/>
                <IconButtonLabel>{title}</IconButtonLabel>
            </IconButton>
        </WithTooltip>
    );
};
