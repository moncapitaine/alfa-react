import { createContext } from "react";
import { LanguageId } from "./tools";

export interface LanguageContextValues {
  selectedLanguageId: LanguageId | null
}

export const LanguageContext = createContext<LanguageContextValues>({ selectedLanguageId: null})