/*=============================================== Nav component ===============================================*/

import { Fragment } from "react/jsx-runtime"
import { NavLink } from "react-router-dom"
import { slugify, toTitleCase } from "@julseb-lib/react"
import { categoriesArr } from "types"
import { navLinks, allPages } from "data"
import { StyledNav } from "./styles"

export const Nav = () => {
    return (
        <StyledNav>
            {navLinks.map(l => (
                <NavLink key={l.to} to={l.to}>
                    {l.text}
                </NavLink>
            ))}

            {categoriesArr.map(category => {
                const catPages = allPages.filter(p => p.category === category)

                return (
                    <Fragment key={category}>
                        <NavLink to={`/${slugify(category)}`} end>
                            {toTitleCase(category)}
                        </NavLink>

                        {catPages.map(p => (
                            <NavLink
                                key={p.name}
                                to={`/${slugify(category)}/${slugify(p.name)}`}
                                className="ComponentPage"
                            >
                                {toTitleCase(p.name)}
                            </NavLink>
                        ))}
                    </Fragment>
                )
            })}
        </StyledNav>
    )
}
