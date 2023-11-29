import {previousVersions} from "fundamental-styles/configuration";

const Versions = () => {
    return (
        <ul className='fddocs-versions'>
            {
                previousVersions.map(
                    ({url, version}, index) => <li key={index}>
                        <a href={url} target='_blank' rel="noreferrer">
                            <strong>{version}</strong>
                        </a>
                    </li>
                )
            }
        </ul>
    )
}

Versions.displayName = 'Previous Versions';

export default Versions;
