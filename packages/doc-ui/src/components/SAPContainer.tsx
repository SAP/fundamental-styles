import {DocsContext} from '@storybook/addon-docs';
import addons from '@storybook/addons';
import {UPDATE_GLOBALS} from '@storybook/core-events';
import {useContext, useEffect, useMemo, useState} from 'react';
import {SAPContext} from '../contexts/SAPContext';
import {directionalities} from "fundamental-styles/configuration";
import {getPackage} from "fundamental-styles/utils";

export const SAPContainer = ({children}) => {
    const channel = useMemo(() => addons.getChannel(), []);
    const docsContext = useContext(DocsContext);

    const story = docsContext.storyById(docsContext.id);
    const storyContext = docsContext.getStoryContext(story);

    const params = {
        ...storyContext.globals,
        ...storyContext.parameters
    };

    const [packageValue, setPackageValue] = useState(params["packageId"]);
    const [storyPackage, setStoryPackage] = useState(getPackage(story));
    const [themeValue, setThemeValue] = useState('');
    const [directionalityValue, setDirectionalityValue] = useState(params["directionality"]);

    useEffect(() => {
        setStoryPackage(getPackage(story))
    }, [story]);

    useEffect(() => {
        if (storyPackage) {
            const theme = params[`${storyPackage.value}-theme`] || storyPackage.defaultTheme;
            setThemeValue(theme);
        }
    }, [story, storyPackage])

    const setPackage = (packageId: string) => {
        channel.emit(UPDATE_GLOBALS, {globals: {...storyContext.globals, packageId}});
        setPackageValue(packageId);
    }

    const setTheme = (theme: string) => {
        channel.emit(UPDATE_GLOBALS, {
            globals: {
                ...storyContext.globals,
                [`${storyPackage?.value}-theme`]: theme
            }
        });
        setThemeValue(theme);
    }

    const setDirectionality = (directionality: string) => {
        channel.emit(UPDATE_GLOBALS, {globals: {...storyContext.globals, directionality}});
        setDirectionalityValue(directionality);
    }

    return (
        <SAPContext.Provider
            value={{
                storyContext,
                storyPackage,
                theme: themeValue,
                setTheme,
                directionality: directionalityValue,
                setDirectionality,
                selectedPackage: packageValue,
                setPackage,
                directionalities
            }}
        >
            {children}
        </SAPContext.Provider>
    );
};
