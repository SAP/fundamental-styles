const React = require('react');
const { WithTooltip, TooltipLinkList, Icons, IconButton } = require('@storybook/components');
const { useState, useEffect } = require('react');
const { getOwner } = require('../../../utilities/get-owner');
const IconButtonLabel = require('./IconButtonLabel').default;

const Selector = ({ api }) => {
    const [availableThemes, setAvailableThemes] = useState([]);
    const [currentTheme, setCurrentTheme] = useState(null);

    const globals = api.getGlobals();
    const currentStory = api.getCurrentStoryData();
    const storyProject = getOwner(currentStory);

    useEffect(() => {
        if (currentStory) {
            setAvailableThemes(storyProject?.themes || []);
        }
    }, [currentStory, storyProject]);

    useEffect(() => {
        const theme = availableThemes.find((theme) => theme.value === globals?.[`${storyProject?.value}-theme`]);
        if (theme) {
            setCurrentTheme(theme);
        } else {
            setCurrentTheme(null);
        }
    }, [availableThemes, globals, storyProject]);
    const RenderThemes = (onHide) => availableThemes.map(theme => {
        return {
            id: theme.value,
            title: theme.title,
            active: theme.value === currentTheme?.value,
            onClick: () => {
                api.updateGlobals({ ...globals, [`${storyProject?.value}-theme`]: theme.value });
                setCurrentTheme(theme);
                onHide();
            }
        };
    });

    return <>
        <WithTooltip
            placement="top"
            trigger="click"
            closeOnClick
            tooltip={({ onHide }) => {
                return <TooltipLinkList links={RenderThemes(onHide)}/>;
            }}
        >
            <IconButton
                disabled={availableThemes.length === 0}
                title={'Theme Selector'}
                active={!!currentTheme}
            >
                <Icons icon={'paintbrush'}/>
                {currentTheme ? <IconButtonLabel>{currentTheme?.title}</IconButtonLabel> : <></>}
            </IconButton>
        </WithTooltip>
    </>;
};

module.exports = Selector;
