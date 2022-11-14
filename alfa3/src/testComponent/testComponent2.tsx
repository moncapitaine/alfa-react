import { useEffect, useState } from "react"

let timer: any = null

export const TestComponent2 = () => {
  const [currentTime, setCurrentTime] = useState('...')
  const [timeOffset, setTimeOffset] = useState(0)

  useEffect(() => {
    if (timer) {
      clearInterval(timer)
    }
    timer = setInterval(() => {
      const t = new Date()
      const hours = t.getUTCHours() + timeOffset
      const minutes = t.getUTCMinutes()
      const seconds = t.getUTCSeconds()
      setCurrentTime(`${hours}:${minutes < 10 ? '0' + minutes.toString() : minutes}:${seconds < 10 ? '0' + seconds.toString() : seconds}`)
    }, 1000)
  }, [timeOffset])

  useEffect(() => {
    console.log('2nd useEffect', currentTime)
  }, [])
  // todo: change timezone for clock with buttons
  return (<div className="p-4">
    <button className={`m-2 p-1  border-2 ${timeOffset === -1 ? 'bg-green-200' : 'bg-gray-200'}`} onClick={() => setTimeOffset(-1)}>UTC-1</button>
    <button className={`m-2 p-1  border-2 ${timeOffset === 0 ? 'bg-green-200' : 'bg-gray-200'}`} onClick={() => setTimeOffset(0)}>UTC</button>
    <button className={`m-2 p-1  border-2 ${timeOffset === +1 ? 'bg-green-200' : 'bg-gray-200'}`} onClick={() => setTimeOffset(+1)}>UTC+1</button>
    <p className="text-3xl">{currentTime}</p>
  </div>)
}