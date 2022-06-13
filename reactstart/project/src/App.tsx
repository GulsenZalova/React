import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "./components/navbar"
import Footer from "./components/navbar"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  )
 
}


export default App
