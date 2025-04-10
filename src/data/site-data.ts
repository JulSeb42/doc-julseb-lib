import packageJson from "../../package.json"

const versionArr = packageJson.dependencies["@julseb-lib/react"].split(".")
const version = [versionArr[0], versionArr[1]].join(".").replaceAll("^", "")

const EMAIL = "julien.sebag@me.com"
const NPM_REACT = "@julseb-lib/react"

export const SITE_DATA = {
    NAME: "Documentation Julseb Library",
    FAVICON: "/favicon.svg",
    EMAIL,
    AUTHOR: "Julien Sebag",
    YEAR: "2024",
    URL: "https://julseb-lib-documentation.vercel.app/",
    LIB_VERSION: version,

    // Meta
    DESCRIPTION: "Documentation website for @julseb-lib",
    COVER: "",
    TYPE: "library_documentation",
    LANGUAGE: "en_EN",
    KEYWORDS: [
        "react",
        "react-components",
        "components-library",
        "typescript",
        "react-typescript",
        "react-ts",
    ],

    FOOTER_LINKS: {
        GITHUB: "https://github.com/JulSeb42/julseb-lib-react",
        NPM: "https://www.npmjs.com/package/@julseb-lib/react",
        EMAIL: `mailto:${EMAIL}`,
        PORTFOLIO: "https://julien-sebag.com/",
    },

    BASE_API_URL: "/api",

    NPM_REACT,
    NPM_REACT_TYPES: `${NPM_REACT}/types`,
    NPM_REACT_COMPONENT: `${NPM_REACT}/component-props`,
    NPM_UTILS: "@julseb-lib/utils",
    NPM_CLI: "@julseb-lib/julseb-cli",
    LOCAL_COMMAND: "julseb-cli",
    CSS: 'import "@julseb-lib/react/index.css"',

    GITHUB_FULL_STACK:
        "https://github.com/JulSeb42/julseb-lib-boilerplate-fullstack",
    GITHUB_CLIENT: "https://github.com/JulSeb42/julseb-lib-boilerplate-client",
}
