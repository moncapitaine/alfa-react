import { useRef, useState } from 'react'

export interface TestComponentProps {
  prop1: string
}

let rendercount = 0

export const TestComponent: React.FC<TestComponentProps> = ({ prop1 }) => {
  
  // if (true) {
  //   return (<div>Prop1 not enough</div>)
  // }
  const inputReference = useRef<HTMLInputElement>(null)
  const [state1, setState1] = useState('stateVal1')
  const [myItems, setMyItems] = useState<Array<string>>([])

  const newValue = inputReference.current?.value ?? ''

  // avoid rerender if state1 does not change it's string
  const handleButton1Click = () => {
    if (state1 === newValue) {
      return
    }
    setState1(newValue)
  }

  const handleButton2Click = () => {
    myItems.push(newValue)
    // setMyItems(myItems)
    // todo: fix the rendering of my items, force that they are rendered if a new item was added
  }

  // set state1 on click to inputRef value, do not re-render if value does not change
  console.log('re-render', ++rendercount)
  console.log(myItems)
  return (
    <div className='p-5'>
      <input className='border-2' ref={inputReference} type="text" defaultValue={state1} />
      <button className='border-2 bg-gray-200' onClick={handleButton1Click}>Change state1</button>
      <button className='border-2 bg-gray-200' onClick={handleButton2Click}>Add to MyItems</button>

      <p>prop1: {prop1}</p>
      <p>state1: {state1}</p>
      <p>inputRef: {inputReference.current?.value}</p>
      <ul>
        {myItems.map((item, index) => (
          <li key={index}>{index}: {item}</li>
        ))}
      </ul>
    </div>
  )
}
