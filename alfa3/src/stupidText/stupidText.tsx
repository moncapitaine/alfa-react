import { useLanguageContext } from '../languageContext'

export const StupidText = () => {
  const { selectedLanguageId } = useLanguageContext()

  return (
    <>
      {selectedLanguageId === 'de' && (
        <p className="p-6 border-[6px] border-[#FF0000]">
          Das ist ein seltsamer Text auf Deutsch
        </p>
      )}
      {selectedLanguageId === 'en' && (
        <p className="p-6 border-[6px] border-[#FF0000]">
          Das ist ein seltsamer Text auf Englisch
        </p>
      )}
    </>
  )
}
