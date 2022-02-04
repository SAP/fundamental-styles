import fioriVersions from '../../constants/fioriVersions';

export const ADDON_ID = 'SAP/FioriVersion';

export const EVENTS = {
    SET_VERSION: 'setFioriVersion'
};

export const FioriVersions = fioriVersions.map(({ value }) => value);

export const fioriVersionCompliance = {
    fiori: (story) => story.id.match(/introduction/) || !story.id.match(/fn-components/),
    fioriNext: (story) => story.id.match(/introduction/) || story.id.match(/fn-components/),
    all: () => true
};
