import React from 'react'

import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { SelectBox } from "./selectBox"

const testItems = [
  { id:'1', name: 'first item'},
  { id:'2', name: 'second item', disabled: true},
  { id:'3', name: 'third item'},
]

const onChangeMock = jest.fn()

const renderSelectBox = () =>     render(<SelectBox
  value={testItems[0]}
  options={testItems}
  onChange={onChangeMock}
  />)
describe('the selectBox...', () => {
  it('...shows the selected option', () => {
    renderSelectBox()
    const selectedItem =  screen.getByText(/first item/i)
    expect(selectedItem).toBeVisible()
  })

  it('...shows options if clicked on expand', () => {
    renderSelectBox()
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('option', { name: /first item/i })).toBeVisible()
    expect(screen.getByRole('option', { name: /second item/i })).toBeVisible()
    expect(screen.getByRole('option', { name: /third item/i })).toBeVisible()
  })

  it('...enabled option is selectable', () => {
    renderSelectBox()
    userEvent.click(screen.getByRole('button'))
    userEvent.click(screen.getByRole('option', { name: /third item/i }))
    expect(onChangeMock).toHaveBeenCalledWith(testItems[2])
  })

  it('...disabled option not selectable', () => {
    renderSelectBox()
    userEvent.click(screen.getByRole('button'))
    userEvent.click(screen.getByRole('option', { name: /second item/i }))
    expect(onChangeMock).not.toHaveBeenCalled()
  })
})