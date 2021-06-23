export default {
    title: 'Theming/Semantic Color',
    parameters: {
        components: ['object-status', 'icon', 'button', 'message-strip']
    }
};

export const primary = () => `
    <div class="fddocs-container">
        <span class="fd-object-status fd-object-status--negative">
            <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
            <span class="fd-object-status__text">Negative</span>
        </span>
        <span class="fd-object-status fd-object-status--critical">
            <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
            <span class="fd-object-status__text">Critical</span>
        </span>
        <span class="fd-object-status fd-object-status--positive">
            <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
            <span class="fd-object-status__text">Positive</span>
        </span>
        <span class="fd-object-status fd-object-status--informative">
            <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
            <span class="fd-object-status__text">Info</span>
        </span>
    </div>
    <br>

    <div class="fddocs-container">
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
    
    <div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" 
        role="alert" id="SsoiW592">
        <p class="fd-message-strip__text">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
        </p>
        <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW592" aria-label="Close">
            <i class="sap-icon--decline"></i>
        </button>
    </div>
    <br />

    <div class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible" 
        role="alert" id="SsoiW593">
        <p class="fd-message-strip__text">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
        </p>
        <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW593" aria-label="Close">
            <i class="sap-icon--decline"></i>
        </button>
    </div>
    <br />

    <div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" 
        role="alert" id="SsoiW594">
        <p class="fd-message-strip__text">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
        </p>
        <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW594" aria-label="Close">
            <i class="sap-icon--decline"></i>
        </button>
    </div>
    <br />

    <div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" 
        role="alert" id="SsoiW595">
        <p class="fd-message-strip__text">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
        </p>
        <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW595" aria-label="Close">
            <i class="sap-icon--decline"></i>
        </button>
    </div>
`;
