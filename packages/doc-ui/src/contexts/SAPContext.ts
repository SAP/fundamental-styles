import {createContext} from 'react';
import {PackageConfigInterface} from "fundamental-styles/storybook";
import {DocsContextProps} from "@storybook/addon-docs";

export interface SAPContextType {
    storyContext: ReturnType<DocsContextProps['getStoryContext']>
    storyPackage?: PackageConfigInterface;
    theme?: string,
    setTheme: (theme: string) => void,
    directionality: string,
    setDirectionality: (directionality: string) => void,
    selectedPackage?: string,
    setPackage: (packageId: string) => void,
    directionalities: { value: string, title: string }[],
}

export const SAPContext = createContext<SAPContextType>({} as unknown as SAPContextType);
