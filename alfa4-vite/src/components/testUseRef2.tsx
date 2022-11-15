import { useRef, useState } from "react"

export const TestUseRef2 = () => {
  const [, setIrgendwas ] = useState("")
  const textElementRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    // focus the text input
    // read value from the text input
    textElementRef.current?.focus()
    textElementRef.current?.setAttribute("value", "Michael was here")
    setIrgendwas("das")
  }
  return (<div>
    <input type="text" ref={textElementRef} />
    <button onClick={handleButtonClick}>Focus to the text</button>
  </div>)
}