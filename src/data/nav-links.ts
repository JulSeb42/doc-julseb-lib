/*=============================================== NavLinks ===============================================*/

import type { LibFooterLink } from "@julseb-lib/react/types"
import { PATHS } from "../routes"
import { SITE_DATA } from "./site-data"
import type { INavLink } from "../types"

export const navLinks: Array<INavLink> = [
    { text: "Homepage", to: PATHS.ROOT, end: true },
    { text: "Getting started", to: PATHS.GETTING_STARTED },
    { text: "CLI & Boilerplates", to: PATHS.CLI_AND_BOILERPLATES },
]

export const footerLinks: Array<LibFooterLink> = [
    { text: "Github", href: SITE_DATA.FOOTER_LINKS.GITHUB, blank: true },
    { text: "NPM", href: SITE_DATA.FOOTER_LINKS.NPM, blank: true },
    { text: "Email", href: SITE_DATA.FOOTER_LINKS.EMAIL },
    { text: "Portfolio", href: SITE_DATA.FOOTER_LINKS.PORTFOLIO, blank: true },
]
