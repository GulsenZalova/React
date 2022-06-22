import { useState } from 'react'
import './App.css'
import Content from './components/content'
import { createContext } from 'react'

const Theme={
  lightTheme:{
    backgroundColor:"white",
    color:"blue"
  },
  darkTheme:{
    backgroundColor:"blue", 
    color:"white"
  }
 }

export const themeContext=createContext(Theme.darkTheme)

function App() {
 
 const[theme, setTheme]=useState(Theme.darkTheme)

 const changeTheme = ()=>{
  if(theme===Theme.darkTheme){
    setTheme(Theme.lightTheme)
    // console.log("salam")
  }else{
    setTheme(Theme.darkTheme)
  }
 }
  return (
    <div className="App">
      <button onClick={changeTheme}>{theme===Theme.darkTheme ? "Dark Theme" : "LightTheme"}</button>
      <themeContext.Provider value={theme}>
       <Content/>
    </themeContext.Provider>
    </div>
  )
}

export default App
