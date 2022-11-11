import React, { useState } from 'react'
import { LanguageProvider } from './LanguageProvider'
import { LanguageSelector } from './languageSelector/languageSelector'
import { SelectBox } from './selectBox/selectBox'
import { StupidText } from './stupidText/stupidText'

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

function App() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)

  return (
    <LanguageProvider>
      <div className="container flex flex-col">
        <div className="self-center border-2 p-3">
          <LanguageSelector />
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
        <StupidText />
      </div>
    </LanguageProvider>
  )
}

export default App
