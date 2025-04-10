import { useState, useEffect } from "react"
import { Flexbox, ButtonIcon, useLibTheme, Text } from "@julseb-lib/react"
import { SITE_DATA } from "data"
import { HeaderLang } from "./HeaderLang"
import { HeaderSearch } from "./HeaderSearch"

export const HeaderNav = () => {
    const { selectedTheme, toggleTheme } = useLibTheme()

    const [switchIcon, setSwitchIcon] = useState<"sun" | "moon" | undefined>(
        undefined
    )

    useEffect(() => {
        if (selectedTheme === "light") setSwitchIcon("moon")
        else if (selectedTheme === "dark") setSwitchIcon("sun")
    }, [selectedTheme])

    if (!switchIcon) return null

    return (
        <Flexbox as="nav" alignItems="center" gap="s">
            <HeaderSearch />

            <ButtonIcon
                icon={switchIcon}
                color="background"
                variant="transparent"
                onClick={toggleTheme}
                className="SwitchButton"
            />

            <HeaderLang />

            <Text color="background" className="LibVersion">
                v. {SITE_DATA.LIB_VERSION}
            </Text>
        </Flexbox>
    )
}
