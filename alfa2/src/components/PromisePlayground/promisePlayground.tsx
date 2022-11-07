import { useEffect, useState } from "react"

const getNewMessage = ():string => (Math.random() + 1).toString(36).substring(7);

const getNewMessageAsync = ():Promise<string> => new Promise((resolve, reject) => {
  resolve(getNewMessage())
})

// Todo1: Implement getNewMessageAsync to return new message after 1234ms using setTimeout
// Todo2: Use this function to fill the PromisePlayground

export const PromisePlayground = () => {

  const [messageList, setMessageList] = useState<string[]>([])

  useEffect(() => {
    // synchrone Aufruf
    setMessageList((oldList) => [...oldList, 'sync:' + getNewMessage()])
    // asynchrone Aufruf
    getNewMessageAsync().then((newMessage) => setMessageList((oldList) => [...oldList, 'async:' + newMessage]))
  }, [])

  return (<ul>
    {messageList.map((message) => (
      <li>{message}</li>
    ))}
  </ul>)
}