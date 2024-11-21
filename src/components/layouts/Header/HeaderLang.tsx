/*=============================================== HeaderLang ===============================================*/

import { useState } from "react"
import { Button, DropdownContainer, DropdownItem } from "@julseb-lib/react"
import { useLangContext } from "context"
import { StyledDropdown } from "./styles"
import type { Lang } from "context/types"

export const HeaderLang = () => {
    const { selectedLang, handleSelectLang, loading } = useLangContext()

    const [isOpen, setIsOpen] = useState(false)

    const handleChangeLang = (lang: Lang) => {
        handleSelectLang(lang)
        setIsOpen(false)
    }

    if (loading) return null

    return (
        <DropdownContainer isOpen={isOpen} justifyContent="flex-end">
            <Button
                onClick={() => setIsOpen(true)}
                variant="transparent"
                icons={{ right: "chevron-down" }}
                color="white"
                className="SelectLangButton"
                noPadding
            >
                {selectedLang.toUpperCase()}
            </Button>

            <StyledDropdown isOpen={isOpen} setIsOpen={setIsOpen}>
                <DropdownItem
                    onClick={() => handleChangeLang("js")}
                    className="DropdownButton"
                >
                    JS
                </DropdownItem>
                <DropdownItem
                    onClick={() => handleChangeLang("ts")}
                    className="DropdownButton"
                >
                    TS
                </DropdownItem>
            </StyledDropdown>
        </DropdownContainer>
    )
}
