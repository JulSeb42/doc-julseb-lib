/*=============================================== Lang context ===============================================*/

import { createContext, useContext, useState, useEffect } from "react"
import type { ILangContext, Lang } from "./types"

const LangContext = createContext<ILangContext>(null as any)

interface ILangProvider {
    children?: Children
}

export const LangProviderWrapper = ({ children }: ILangProvider) => {
    const [lang, setLang] = useState<Lang>(undefined as any)
    const [isLangLoading, setIsLangLoading] = useState(true)

    useEffect(() => {
        const { localStorage } = window

        if (localStorage.getItem("lang")) {
            setLang(localStorage.getItem("lang") as Lang)
            setIsLangLoading(false)
        } else {
            setLang("js")
            setIsLangLoading(false)
        }
    }, [lang])

    const handleSelectLang = (lang: Lang) => {
        setLang(lang)
        window.localStorage.setItem("lang", lang)
    }

    return (
        <LangContext.Provider
            value={{
                selectedLang: lang,
                handleSelectLang,
                loading: isLangLoading,
            }}
        >
            {children}
        </LangContext.Provider>
    )
}

export const useLangContext = () => useContext(LangContext) as ILangContext
