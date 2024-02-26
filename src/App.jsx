import { useState } from 'react'
// import Inputboxes from './components/Inputboxes'
import Calc from './components/Calc'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Calc />
    </>
  )
}

export default App
