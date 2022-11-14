import { createContext } from "react";

export interface UserContextProps {
  userName: string | null
  setUserName: (newName: string | null) => void
}

const defaultContextProps: UserContextProps = {
  userName: null,
  setUserName: (newName) => console.log('newname cannot be set because there is no UserContext provider', newName)
}

export const UserContext 
  = createContext<UserContextProps>(defaultContextProps)
