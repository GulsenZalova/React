import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <Navbar job="İş" travel="Səyahət" edu="Təhsil" personDev="Şəxsi inkişaf"  />
    <Home/>
    <Footer/>
    </div>
  )
}

export default App
