import { createContext, useContext } from "react";
import { LanguageId } from "./tools";

export interface LanguageContextValues {
  selectedLanguageId: LanguageId | null
  setSelectedLanguageId: (languageId: LanguageId | null) => void
}

export const LanguageContext = createContext<LanguageContextValues>({ selectedLanguageId: null, setSelectedLanguageId: (languageId) => null})

export const useLanguageContext = () => {
  return useContext(LanguageContext)
}