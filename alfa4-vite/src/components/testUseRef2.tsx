import { useRef, useState } from "react"

export const TestUseRef2 = () => {
  const [textValue1, setTextValue1] = useState("")
  const [textValue2, setTextValue2] = useState("")
  const textElementRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    textElementRef.current?.focus()
    setTextValue1("Michael was here")
  }

  const handleButton2Click = () => {
    setTextValue1(textValue2)
  }

  return (<div>
    <input type="text" ref={textElementRef} onChange={(e) => setTextValue1(e.target.value)} value={textValue1} />
    <input type="text" value={textValue2}  onChange={(e) => setTextValue2(e.target.value)}/>
    <button onClick={handleButtonClick}>Focus to the text</button>
    <button onClick={handleButton2Click}>Transfer text</button>
  </div>)
}