import { useContext, useRef } from "react"
import { UserContext } from "../userContext"

const allowedUserNames = ['Harry', 'Sabine', 'Bill']

export const Header = () => {

  const userNameRef = useRef<HTMLInputElement>(null)
  const { userName, setUserName } = useContext(UserContext)
  // todo: Implement login and logout - user context has user object or null
  // => needs access to the user context
  const handleLogin = () => {
    const newValue = userNameRef.current?.value ?? null
    setUserName(newValue)
  }
  const handleLogout = () => {
    setUserName(null)
  }
  return (<section>
    <input placeholder="Enter username" defaultValue={userName ?? ''} ref={userNameRef} />
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
  </section>)
}