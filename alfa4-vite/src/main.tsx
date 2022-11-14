import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserContext } from './userContext'

const Root = () => {
const [userName, setUserName] = useState<string | null>(null)
return (
    <UserContext.Provider value={{userName, setUserName}}>
      <App />
    </UserContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Root />
)
