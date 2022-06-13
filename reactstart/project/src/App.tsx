import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./components/home"

export function App() {
  const [count, setCount] = useState(0)
  const click= ()=>{
    console.log("salam")
  }
  return (
    <div className="App" onClick={click}>
      <nav>
      <Navbar websiteName="Logo"/> 
      </nav>
      <main>
        <Home/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
 
}


export default App
