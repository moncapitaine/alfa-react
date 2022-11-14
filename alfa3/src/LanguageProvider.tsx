import { useState } from 'react'
import { LanguageContext, LanguageContextValues } from './languageContext'
import { LanguageId } from './tools'

export interface LanguageProviderProps {
  children: JSX.Element
}

export const LanguageProvider: React.FunctionComponent<
  LanguageProviderProps
> = ({ children }) => {
  const [internalLanguageId, setInternalLanguageId] =
    useState<LanguageId | null>(null)

  const contextValues: LanguageContextValues = {
    selectedLanguageId: internalLanguageId,
    setSelectedLanguageId: setInternalLanguageId,
  }
  return (
    <LanguageContext.Provider value={contextValues}>{children}</LanguageContext.Provider>
  )
}
