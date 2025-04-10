import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { useClickOutside, useMaxWidth, useLibTheme } from "@julseb-lib/react"
import { SITE_DATA } from "data"
import { PATHS } from "routes"
import { HeaderNav } from "./HeaderNav"
import { StyledHeader, StyledBurger } from "./styles"

export const Header = () => {
    const { selectedTheme } = useLibTheme()

    const [isOpen, setIsOpen] = useState(false)
    const el = useRef<HTMLDivElement>(null)
    const isMobile = useMaxWidth(600)

    useClickOutside(el, () => {
        if (isOpen && isMobile) setIsOpen(!isOpen)
    })

    return (
        <StyledHeader ref={el} $selectedTheme={selectedTheme ?? "light"}>
            <Link to={PATHS.ROOT} className="Logo">
                {SITE_DATA.NAME}
            </Link>

            <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            <HeaderNav />
        </StyledHeader>
    )
}
