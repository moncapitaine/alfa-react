import { useState } from "react"
import { LanguageContext } from "./languageContext"
import { LanguageId } from "./tools"

export interface LanguageProviderProps {
  children: JSX.Element
}

export const LanguageProvider:React.FunctionComponent<LanguageProviderProps> = ({children}) => {
  const [selectedLanguageId, setSelectedLanguageId] = useState<LanguageId | null>(null)
  return (
    <LanguageContext.Provider value={{selectedLanguageId, setSelectedLanguageId}}>
      {children}
    </LanguageContext.Provider>
  )
}