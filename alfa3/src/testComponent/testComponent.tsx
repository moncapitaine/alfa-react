import { useRef, useState } from 'react'

export interface TestComponentProps {
  prop1: string
}

let rendercount = 0

export const TestComponent: React.FC<TestComponentProps> = ({ prop1 }) => {
  
  const inputReference = useRef<HTMLInputElement>(null)
  
  const [state1, setState1] = useState('stateVal1')

  // avoid rerender if state1 does not change it's string
  const handleButton1Click = () => {
    const newValue = inputReference.current?.value
    if (state1 === newValue) {
      return
    }
    setState1(newValue ?? '')
  }

  // set state1 on click to inputRef value, do not re-render if value does not change
  console.log('re-render', ++rendercount)
  return (
    <div className='p-5'>
      <input className='border-2' ref={inputReference} type="text" defaultValue={state1} />
      <button className='border-2 bg-gray-200' onClick={handleButton1Click}>Change state1</button>
      <p>prop1: {prop1}</p>
      <p>state1: {state1}</p>
      <p>inputRef: {inputReference.current?.value}</p>
    </div>
  )
}
