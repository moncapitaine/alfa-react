import React, { useState } from 'react'
import { LanguageContext } from './languageContext'
import { SelectBox } from './selectBox/selectBox'
import { LanguageId } from './tools'

interface Person {
  id: number
  name: string
  unavailable: boolean
}

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const availableLanguages = [
  {
    id: 'de',
    name: 'Deutsch',
  },
  { id: 'en', name: 'English' },
]

function App() {
  const [selectedLanguageId, setSelectedLanguageId] =
    useState<LanguageId | null>(null)
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)

  return (
    <LanguageContext.Provider
      value={{ selectedLanguageId: selectedLanguageId }}
    >
      <div className="container flex flex-col">
        <div className="self-center border-2 p-3">
          <SelectBox
            value={
              availableLanguages.find(
                (language) => language.id === selectedLanguageId,
              ) ?? null
            }
            onChange={(item) => setSelectedLanguageId(item.id as LanguageId)}
            options={[
              { id: 'en', name: 'English' },
              { id: 'de', name: 'Deutsch' },
            ]}
          />
        </div>
        <div className="self-center border-2 p-3">
          <h2 className="text-2xl p-3">Select Box Example</h2>
          <SelectBox
            value={
              selectedPerson !== null
                ? {
                    id: selectedPerson?.id.toString(),
                    name: selectedPerson?.name,
                    disabled: selectedPerson?.unavailable,
                  }
                : null
            }
            onChange={(item) =>
              setSelectedPerson({
                id: Number.parseInt(item.id),
                name: item.name,
                unavailable: !!item.disabled,
              })
            }
            options={people.map((person) => ({
              id: person.id.toString(),
              name: person.name,
              disabled: person.unavailable,
            }))}
          />
        </div>
        <h1 className="text-3xl text-center p-6">
          Hallo {selectedPerson?.name}
        </h1>
        <p className="p-6 border-[6px] border-[#FF0000]">
          Das ist ein seltsamer Text auf Deutsch
        </p>
        <p className="p-6 border-[6px] border-[#FF0000]">
          Das ist ein seltsamer Text auf Englisch
        </p>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
