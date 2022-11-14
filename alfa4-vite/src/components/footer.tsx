import { useRef } from "react"

export const Footer = () => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleParse = () => {
    const newValue = inputRef.current?.value ?? ''
    const newNumber = +newValue
    console.log(`newValue as number`, newValue, newNumber)
  }

  return (
    <div>
      <input type="text" defaultValue="0" ref={inputRef} />
      <button onClick={handleParse}>Parse</button>
      <h2>Footer</h2>
    
    </div>
  )
}