export default {
    title: 'Theming/Indication Color',
    parameters: {
        components: ['object-status', 'icon']
    }
};

export const primary = () => `
    <div class="fddocs-container">
        <span class="fd-object-status fd-object-status--indication-1">
            <span class="fd-object-status__text">Dark Red</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-2">
            <span class="fd-object-status__text">Red</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-3">
            <span class="fd-object-status__text">Yellow</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-4">
            <span class="fd-object-status__text">Green</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-5">
            <span class="fd-object-status__text">Blue</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-6">
            <span class="fd-object-status__text">Teal</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-7">
            <span class="fd-object-status__text">Purple</span>
        </span>
        <span class="fd-object-status fd-object-status--indication-8">
            <span class="fd-object-status__text">Pink</span>
        </span>
    </div>
    <br>

    <div class="fddocs-container">
        <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link">
            <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
            <span class="fd-object-status__text">Negative</span>
        </a>
        <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link">
            <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
            <span class="fd-object-status__text">Critical</span>
        </a>
        <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link">
            <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
            <span class="fd-object-status__text">Positive</span>
        </a>
        <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link" tabindex="0">
            <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
            <span class="fd-object-status__text">Info</span>
        </span>
        <span role="button" class="fd-object-status fd-object-status--link" tabindex="0">
            <span class="fd-object-status__text">Neutral</span>
        </span>

        <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1">
            <span class="fd-object-status__text">Dark Red</span>
        </a>
        <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2">
            <span class="fd-object-status__text">Red</span>
        </a>
        <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3">
            <span class="fd-object-status__text">Yellow</span>
        </a>
        <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4">
            <span class="fd-object-status__text">Green</span>
        </a>
        <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5">
            <span class="fd-object-status__text">Blue</span>
        </a>
        <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6" tabindex="0">
            <span class="fd-object-status__text">Teal</span>
        </span>
        <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7" tabindex="0">
            <span class="fd-object-status__text">Purple</span>
        </span>
        <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8" tabindex="0">
            <span class="fd-object-status__text">Pink</span>
        </span>
    </div>
    <br>

    <div class="fddocs-container">
        <span class="fd-object-status fd-object-status--negative fd-object-status--inverted">
            <span class="fd-object-status__text">Inverted Negative</span>
        </span>
        <span class="fd-object-status fd-object-status--critical fd-object-status--inverted">
            <span class="fd-object-status__text">Inverted Warning</span>
        </span>
        <span class="fd-object-status fd-object-status--positive fd-object-status--inverted">
            <span class="fd-object-status__text">Inverted Success</span>
        </span>
        <span class="fd-object-status fd-object-status--informative fd-object-status--inverted">
            <span class="fd-object-status__text">Inverted informative</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted">
            <span class="fd-object-status__text">Inverted Neutral</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
            <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
            <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
            <span class="fd-object-status__text">Negative</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
            <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
            <span class="fd-object-status__text">Critical</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
            <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
            <span class="fd-object-status__text">Positive</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
            <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
            <span class="fd-object-status__text">Informative</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted">
            <span class="fd-object-status__text">Neutral</span>
        </span>
    </div>
    <br>

    <div class="fddocs-container">
        <a class="fd-object-status fd-object-status--link fd-object-status--negative fd-object-status--inverted">
            <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
            <span class="fd-object-status__text">Inverted Negative</span>
        </a>
        <a class="fd-object-status fd-object-status--link fd-object-status--critical fd-object-status--inverted">
            <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
            <span class="fd-object-status__text">Inverted Warning</span>
        </a>
        <a class="fd-object-status fd-object-status--link fd-object-status--positive fd-object-status--inverted">
            <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
            <span class="fd-object-status__text">Inverted Success</span>
        </a>
        <a class="fd-object-status fd-object-status--link fd-object-status--informative fd-object-status--inverted">
            <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
            <span class="fd-object-status__text">Inverted informative</span>
        </a>
        <a class="fd-object-status fd-object-status--link fd-object-status--inverted">
            <span class="fd-object-status__text">Inverted Neutral</span>
        </a>
    </div>
    <br>

    <div class="fddocs-container">
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">
            <span class="fd-object-status__text">Indication1</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">
            <span class="fd-object-status__text">Indication2</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">
            <span class="fd-object-status__text">Indication3</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">
            <span class="fd-object-status__text">Indication4</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">
            <span class="fd-object-status__text">Indication5</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">
            <span class="fd-object-status__text">Indication6</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">
            <span class="fd-object-status__text">Indication7</span>
        </span>
        <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
            <span class="fd-object-status__text">Indication8</span>
        </span>
    </div>
`;
