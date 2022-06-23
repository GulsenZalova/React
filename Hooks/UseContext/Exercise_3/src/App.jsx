import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer  from './components/Footer'
import { useEffect } from 'react'
import { createContext } from 'react'

export const ThemeContext=createContext()

function App() {
  const [theme, setTheme]=useState("Pink")

useEffect(()=>{
  document.body.className=theme
},[theme])


  const data={
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={data}>
      <div className="App">
     <Header/>
     <Footer/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
