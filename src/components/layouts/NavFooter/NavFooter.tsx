/*=============================================== NavFooter component ===============================================*/

import { useLocation } from "react-router-dom"
import { slugify, toTitleCase, Icon } from "@julseb-lib/react"
import { allPages } from "../../../data"
import { PATHS } from "../../../routes"
import { StyledNavFooter, StyledLink } from "./styles"

export const NavFooter = () => {
    const { pathname } = useLocation()

    const currentPage = allPages.filter(page => {
        return pathname === "/"
            ? page.name === "Homepage"
            : slugify(pathname.replace("/", "")) ===
                  slugify(page.name.toLowerCase())
    })[0]
    const firstPage = allPages[0]
    const lastPage = allPages[allPages.length - 1]
    const prevPage = allPages[allPages.indexOf(currentPage) - 1]
    const nextPage = allPages[allPages.indexOf(currentPage) + 1]

    const commonIconProps = {
        size: 24,
    }

    return (
        <StyledNavFooter>
            {currentPage === firstPage ? (
                <span />
            ) : (
                <StyledLink
                    to={
                        prevPage?.name === "Homepage"
                            ? PATHS.ROOT
                            : prevPage?.category
                            ? `/${slugify(prevPage.category)}/${slugify(
                                  prevPage.name
                              )}`
                            : `/${slugify(prevPage.name)}`
                    }
                >
                    <Icon src="arrow-left" {...(commonIconProps as any)} />

                    {toTitleCase(prevPage.name)}
                </StyledLink>
            )}

            {currentPage === lastPage ? (
                <span />
            ) : (
                <StyledLink
                    to={
                        nextPage?.category
                            ? `/${slugify(nextPage.category)}/${slugify(
                                  nextPage.name
                              )}`
                            : `/${slugify(nextPage.name)}`
                    }
                >
                    {toTitleCase(nextPage?.name)}

                    <Icon src="arrow-right" {...(commonIconProps as any)} />
                </StyledLink>
            )}
        </StyledNavFooter>
    )
}
