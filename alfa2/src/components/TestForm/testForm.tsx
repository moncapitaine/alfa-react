import { ChangeEventHandler, useState } from "react"

export const TestForm = () => {
  const [testText, setTestText] = useState('nix')
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTestText(e.target.value)
  }

  console.log('re-run of TestForm', testText)

  return(<><form>
    <h2>TestForm</h2>
    <label>
      <input onChange={handleChange} defaultValue={testText} />
    </label>
  </form>
  <div>{testText}</div>
  </>)
}