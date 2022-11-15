import { useRef, useState } from "react";

let count = 0

export const TestUseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const countRef = useRef(0);

  count = count + 1
  countRef.current = countRef.current + 1
  console.log('TestUseRef rerender useRef', countRef.current)
  console.log('TestUseRef rerender let', count)

  return (
    <div>
      <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}