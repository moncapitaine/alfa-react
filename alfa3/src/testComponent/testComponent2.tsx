import { useEffect, useState } from "react"

export const TestComponent2 = () => {
  const [currentTime, setCurrentTime] = useState('')
  useEffect(() => {
    setInterval(() => {
      const t = new Date()
      setCurrentTime(`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`)
    }, 1000)
  }, [])
  // todo: change timezone for clock with buttons
  return (<div className="p-4">
    <button className="m-2 p-1  border-2">UTC-1</button>
    <button className="m-2 p-1  border-2">UTC</button>
    <button className="m-2 p-1  border-2">UTC+1</button>
    <p className="text-3xl">{currentTime}</p>
  </div>)
}