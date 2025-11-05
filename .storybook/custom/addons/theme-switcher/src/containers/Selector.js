import { getOwner } from '../../../utilities/get-owner.js';
import IconButtonLabel from './IconButtonLabel.js';
import React, { useState, useEffect } from 'react';
import { WithTooltip, TooltipLinkList, IconButton } from 'storybook/internal/components';
import { PaintBrushIcon } from '@storybook/icons';

const Selector = ({ api }) => {
    const [availableThemes, setAvailableThemes] = useState([]);
    const [currentTheme, setCurrentTheme] = useState(null);
    const [globals, setGlobals] = useState(api.getGlobals());
    const [currentStory, setCurrentStory] = useState(api.getCurrentStoryData());

    const storyProject = getOwner(currentStory);

    // Listen for globals and story changes
    useEffect(() => {
        const onGlobalsChanged = () => {
            setGlobals(api.getGlobals());
        };
        
        const onStoryChanged = () => {
            setCurrentStory(api.getCurrentStoryData());
        };

        api.on('globalsUpdated', onGlobalsChanged);
        api.on('storyChanged', onStoryChanged);

        return () => {
            api.off('globalsUpdated', onGlobalsChanged);
            api.off('storyChanged', onStoryChanged);
        };
    }, [api]);

    useEffect(() => {
        if (currentStory && storyProject?.themes) {
            setAvailableThemes(storyProject.themes.themes || []);
        }
    }, [currentStory, storyProject]);

    useEffect(() => {
        if (storyProject) {
            const themeKey = `${storyProject.value}-theme`;
            const theme = availableThemes.find((theme) => theme.value === globals?.[themeKey]);
            if (theme) {
                setCurrentTheme(theme);
            } else {
                // Set default theme if no theme is selected
                const defaultTheme = availableThemes.find(t => t.value === storyProject.themes?.defaultTheme);
                setCurrentTheme(defaultTheme || null);
            }
        }
    }, [availableThemes, globals, storyProject]);
    const RenderThemes = (onHide) => availableThemes.map(theme => {
        return {
            id: theme.value,
            title: theme.title,
            active: theme.value === currentTheme?.value,
            onClick: () => {
                const newGlobals = { ...globals, [`${storyProject?.value}-theme`]: theme.value };
                api.updateGlobals(newGlobals);
                setCurrentTheme(theme);
                onHide();
            }
        };
    });

    return React.createElement(React.Fragment, null,
        React.createElement(WithTooltip, {
            placement: "top",
            trigger: "click",
            closeOnOutsideClick: true,
            tooltip: ({ onHide }) => {
                return React.createElement(TooltipLinkList, { links: RenderThemes(onHide) });
            }
        },
            React.createElement(IconButton, {
                disabled: availableThemes.length === 0,
                title: 'Theme Selector',
                active: !!currentTheme
            },
                React.createElement(PaintBrushIcon),
                currentTheme 
                    ? React.createElement(IconButtonLabel, null, currentTheme?.title) 
                    : React.createElement(React.Fragment)
            )
        )
    );
};

export default Selector;
