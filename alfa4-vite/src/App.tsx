import { useState } from 'react'
import './App.css'
import { Layout } from './components/layout'
import { TestUseRef } from './components/testUseRef'
import { TestUseRef2 } from './components/testUseRef2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestUseRef2 />
      <TestUseRef />
      <Layout />
    </>
  )
}

export default App
