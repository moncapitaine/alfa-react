import { ChangeEventHandler } from "react"

let testText = "nix"
export const TestForm = () => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    testText = e.target.value
  }

  console.log('aussen log', testText)

  return(<><form>
    <h2>TestForm</h2>
    <label>
      <input onChange={handleChange} defaultValue={testText} />
    </label>
  </form>
  <div>{testText}</div>
  </>)
}