import GithubSvg from "./GithubSvg";
import packageJson from "../../../../package.json";

export default () => <>
    <a className="fddocs-header__anchor" href="https://github.com/SAP/fundamental-styles" target="_blank"
       rel="noreferrer">
        <GithubSvg/>
    </a>
    <a
        className="fddocs-header__anchor"
        href={`https://github.com/SAP/fundamental-styles/tree/v${packageJson.version}`}
        target="_blank" rel="noreferrer"
    >
        {`v${packageJson.version}`}
    </a>
</>;
