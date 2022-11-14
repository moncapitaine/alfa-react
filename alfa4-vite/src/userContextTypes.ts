
export interface UserContextProps {
  userName: string | null
  setUserName: (newName: string | null) => void
  acl: AccessRights[]
}

export interface AccessRights {
  name: string
}

// ...