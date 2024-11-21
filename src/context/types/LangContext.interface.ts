/*=============================================== LangContext types ===============================================*/

export type Lang = "js" | "ts"

export interface ILangContext {
    selectedLang: Lang
    handleSelectLang: (lang: Lang) => void
    loading: boolean
}
