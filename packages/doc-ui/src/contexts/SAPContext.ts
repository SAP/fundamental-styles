import {createContext} from 'react';
import {PackageConfigInterface} from "fundamental-styles/storybook";
import {DocsContextProps} from "@storybook/addon-docs/blocks";

export interface SAPContextType {
    storyContext: ReturnType<DocsContextProps['getStoryContext']>
    storyPackage?: PackageConfigInterface;
    theme?: string,
    setTheme: (theme: string) => void,
    directionality: string,
    setDirectionality: (directionality: string) => void,
    contentDensity: string,
    setContentDensity: (directionality: string) => void,
    directionalities: { value: string, title: string }[],
    contentDensities: { value: string, title: string }[],
}

/**
 * Main context for SAP documentation site.
 * This context is used to store and share state between components.
 * The state includes theme, directionality, content density and selected package information,
 * as well as functions to update the state.
 */
export const SAPContext = createContext<SAPContextType>({} as unknown as SAPContextType);
