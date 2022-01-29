import fioriVersions from '../../constants/fioriVersions';

export const ADDON_ID = 'SAP/FioriVersion';

export const EVENTS = {
    SET_VERSION: 'setFioriVersion'
};

export const FioriVersions = fioriVersions.map(({ value }) => value);

export const fioriVersionCompliance = {
    fiori: (storyId) => storyId.match(/introduction/) || !storyId.match(/experimental/),
    fioriNext: (storyId) => storyId.match(/introduction/) || storyId.match(/experimental/),
    all: () => true
}
