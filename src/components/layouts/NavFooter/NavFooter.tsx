import { useLocation } from "react-router-dom"
import { slugify, Icon, toTitleCase } from "@julseb-lib/react"
import { allPages } from "data"
import { PATHS } from "routes"
import { StyledNavFooter, StyledLink } from "./styles"

type Page = {
    name: string
    path: string
}

export const NavFooter = () => {
    const { pathname } = useLocation()

    const pages: Array<Page> = [
        { name: "Homepage", path: PATHS.ROOT },
        { name: "Getting started", path: PATHS.GETTING_STARTED },
        { name: "CLI & Boilerplates", path: PATHS.CLI_AND_BOILERPLATES },
        ...allPages.map(page => ({
            name: page.name,
            path: `/${slugify(page.category ?? "")}/${slugify(page.name)}`,
        })),
    ]

    const firstPage: Page = pages[0]
    const lastPage: Page = pages[pages.length - 1]
    const currentPage: Page | undefined = pages.find(
        page => page.path === pathname
    )
    const prevPage: Page | undefined =
        pathname === PATHS.ROOT
            ? undefined
            : pages[pages.indexOf(currentPage!) - 1]
    const nextPage: Page | undefined =
        pathname === pages[pages.length - 1].path
            ? undefined
            : pages[pages.indexOf(currentPage!) + 1]

    return (
        <StyledNavFooter>
            {currentPage?.path === firstPage?.path && prevPage ? (
                <span />
            ) : (
                <StyledLink to={prevPage?.path ?? ""}>
                    {currentPage?.path !== firstPage?.path && (
                        <Icon src="arrow-left" size={24} />
                    )}
                    {toTitleCase(prevPage?.name ?? "")}
                </StyledLink>
            )}

            {currentPage?.path === lastPage?.path ? (
                <span />
            ) : (
                <StyledLink to={nextPage?.path ?? ""}>
                    {toTitleCase(nextPage?.name ?? "")}
                    <Icon src="arrow-right" size={24} />
                </StyledLink>
            )}
        </StyledNavFooter>
    )
}
