import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]



export const SelectBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div  className="relative">
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="w-full pl-3 pr-1 py-1 rounded-full bg-gray-300 flex items-center justify-between">
        <span>{selectedPerson.name}</span>
        <RiArrowDropDownLine size="1.7em" />
      </Listbox.Button>
      <Listbox.Options className="border-2 absolute p-2 mb-1 right-1 top-[2em] bg-white rounded-md">
        {people.map((person) => (
          <Listbox.Option
            className="cursor-pointer py-1 px-2 hover:bg-slate-100 hover:rounded-full"
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
    </div>
  )
}