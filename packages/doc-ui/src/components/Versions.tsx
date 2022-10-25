import {previousVersions} from "fundamental-styles/configuration";

const Versions = () => {
    return (
        <div className='fddocs-versions'>
            <section>
                <h4>Previous Versions</h4>
                <ul>
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
            </section>
        </div>
    )
}

Versions.displayName = 'Previous Versions';

export default Versions;
