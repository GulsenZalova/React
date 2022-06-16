import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Appp from "./components/Appp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Appp/>
    </div>
  )
}

export default App
