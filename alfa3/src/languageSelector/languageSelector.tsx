import { useLanguageContext } from "../languageContext"
import { SelectBox } from "../selectBox/selectBox"
import { LanguageId } from "../tools"

const availableLanguages:Array<{id: LanguageId, name: string}> = [{ id: 'de', name: 'Deutsch'}, { id: 'en', name: 'English'},  ]

export const LanguageSelector = () => {
  const {selectedLanguageId, setSelectedLanguageId} = useLanguageContext()
  const selectedLanguage = availableLanguages.find((language) => language.id === selectedLanguageId) ?? null
  return (
      <SelectBox
        value={selectedLanguage}
        onChange={(item) => setSelectedLanguageId(item.id as LanguageId)}
        options={availableLanguages}
      />
  )
}