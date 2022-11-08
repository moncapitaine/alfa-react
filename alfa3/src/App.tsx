import React, { useState } from 'react';
import { SelectBox } from './selectBox/selectBox';

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
    <div className="container flex flex-col">
      <div className="self-center border-2 p-3">
        <h2 className="text-2xl p-3">Select Box Example</h2>
        <SelectBox
          value={selectedPerson !== null ? ({id: selectedPerson?.id.toString(), name: selectedPerson?.name, disabled: selectedPerson?.unavailable}) : null}
          onChange={(item) => setSelectedPerson({id: parseInt(item.id), name: item.name, unavailable: !!item.disabled})}
          options={people.map((person) => ({id: person.id.toString(), name: person.name, disabled: person.unavailable }))} />
      </div>
      <h1 className="text-3xl text-center p-6">Ueberschrift 1</h1>
      <p className='p-6 border-[6px] border-[#FF0000]'>Das ist ein seltsamer Text</p>
    </div>
  );
}

export default App;
