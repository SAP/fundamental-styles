const panelStyle = {
    height: '100%'
};

const panelBodyStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
};
export default ({ iconName }) => {
    const iconClass = `fn-icon fn-icon--${iconName}`;
    const copy = () => {
        navigator.clipboard.writeText(`<span class="fn-icon fn-icon--${iconName}" />`);
    };
    return (
        <div className="fd-layout-panel" style={panelStyle}>
            <div className="fd-layout-panel__body" style={panelBodyStyle}>
                <div>
                    <span className={iconClass} style={{ width: '40px', height: '40px' }} />
                    <p>{iconName}</p>
                </div>
                <div>
                    <button
                        onClick={copy}
                        className="fn-button"
                        aria-label="Copy styles"
                        style={{ margin: '0 auto' }}
                    >
                        <span className="fn-icon fn-icon--copy" />
                        <span className="fn-button__text">Copy</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
