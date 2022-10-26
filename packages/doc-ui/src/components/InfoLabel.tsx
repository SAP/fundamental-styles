import {tags} from "fundamental-styles/configuration";
import 'styles/src/info-label.scss';

const InfoLabel = ({ tag }) => {
    const tagInfo = tags[tag];
    if (tagInfo) {
        return <span
            title={tagInfo.title}
            className={`fddocs fd-info-label fd-info-label--accent-color-${tagInfo.color}`}
        >
            <span className={'fd-info-label__text'}>{tagInfo.name}</span>
        </span>
    }
    return null
}

InfoLabel.displayName = 'InfoLabel';

export default InfoLabel;
