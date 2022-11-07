import { useEffect, useState } from "react"

const getNewMessage = ():string => (Math.random() + 1).toString(36).substring(7);

const getNewMessageAsync = (timeout = 1000):Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => resolve(getNewMessage()), timeout)
})

// Todo1: Implement getNewMessageAsync to return new message after 1234ms using setTimeout
// Todo2: Use this function to fill the PromisePlayground

export const PromisePlayground = () => {

  const [messageList, setMessageList] = useState<string[]>([])

  // 1. Moeglichkeit fuer setStateValue: setStateValue(newValue)
  // 2. Moeglichkeit fuer setStateValue: setStateValue((oldValue) => `${oldValue} replaced with ${newValue}`)

  useEffect(() => {
    // synchrone Aufruf
    const newMessage = getNewMessage()
    setMessageList((oldList) => [...oldList, 'sync:' + newMessage])

    // asynchrone Aufruf
    const newMessagePromise = getNewMessageAsync(1234) // returns Promise of string
    newMessagePromise.then((newMessage2) => setMessageList((oldList) => [...oldList, 'async:' + newMessage2]))

    // Aufruf einer async
    fillListWithNewMessage().then(() => console.log('async function call finished'))
  }, [])

  const fillListWithNewMessage = async () => {
    const newMessage = await getNewMessageAsync(123)
    setMessageList((oldList) => [...oldList, 'async await:' + newMessage])
  }

  return (<ul>
    {messageList.map((message) => (
      <li>{message}</li>
    ))}
  </ul>)
}