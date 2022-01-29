import fioriVersions from '../../constants/fioriVersions';

export const ADDON_ID = 'SAP/FioriVersion';

export const EVENTS = {
    FILTER_STORIES: 'filterStories',
    SET_VERSION: 'setFioriVersion'
};

export const FioriVersions = fioriVersions.map(({ value }) => value);

export const isFioriComponent = (id) => {
    return id.match(/introduction/) || !id.match(/experimental/);
};

export const isFioriNextComponent = (id) => {
    return id.match(/introduction/) || id.match(/experimental/);
};
