/*=============================================== Nav component ===============================================*/

import { NavLink } from "react-router-dom"
import { navLinks } from "../../../data"
import { StyledNav } from "./styles"

export const Nav = () => {
    return (
        <StyledNav>
            {navLinks.map(l => (
                <NavLink key={l.text} to={l.to}>
                    {l.text}
                </NavLink>
            ))}
        </StyledNav>
    )
}
