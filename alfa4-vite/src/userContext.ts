import { createContext } from "react";
import { UserContextProps } from "./userContextTypes";


const defaultContextProps: UserContextProps = {
  userName: null,
  setUserName: (newName) => console.log('newname cannot be set because there is no UserContext provider', newName),
  acl: []
}

export const UserContext 
  = createContext<UserContextProps>(defaultContextProps)
