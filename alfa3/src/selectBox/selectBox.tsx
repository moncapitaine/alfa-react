import React from 'react'

import { Listbox } from '@headlessui/react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export interface SelectBoxItem {
  id: string
  name: string
  disabled?: boolean
}
export interface SelectBoxProps {
  value: SelectBoxItem | null
  options: SelectBoxItem[]
  onChange: (item: SelectBoxItem) => void
}

export const SelectBox: React.FunctionComponent<SelectBoxProps> = ({
  value,
  onChange,
  options,
}) => {
  const HandleValueChange = (item: SelectBoxItem) => {
    onChange(item)
  }
  return (
    <div className="relative">
      <Listbox value={value} onChange={HandleValueChange}>
        <Listbox.Button className="w-full pl-3 pr-1 py-1 rounded-full bg-gray-300 flex items-center justify-between">
          <span>{value?.name ?? 'Please select item...'}</span>
          <RiArrowDropDownLine size="1.7em" />
        </Listbox.Button>
        <Listbox.Options className="border-2 absolute p-2 mb-1 right-1 top-[2em] bg-white rounded-md">
          {options.map((option) => (
            <Listbox.Option
              className={`cursor-pointer py-1 px-2 hover:bg-slate-100 hover:rounded-full ${
                option.disabled ? 'text-gray-400 hover:cursor-not-allowed' : ''
              }`}
              key={option.id}
              value={option}
              disabled={option.disabled}
            >
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
