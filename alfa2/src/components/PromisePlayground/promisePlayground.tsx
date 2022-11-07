import { useEffect, useState } from "react"

const getNewMessage = ():string => (Math.random() + 1).toString(36).substring(7);
 
export const PromisePlayground = () => {

  const [messageList, setMessageList] = useState<string[]>([])

  useEffect(() => {
    setMessageList([getNewMessage()])
  }, [])

  return (<ul>
    {messageList.map((message) => (
      <li>{message}</li>
    ))}
  </ul>)
}