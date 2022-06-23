import { useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'
import MyInput from './input'

function App() {
// Componentlərdə istifadə olunan reflər
const inputRef=useRef(null)
const divRef=useRef(0)
const countRef=useRef(0)
const elementRef=useRef(null)

const [name, setName]=useState(" ")
useEffect(()=>{
console.log(inputRef.current)
console.log(divRef)
})

useEffect(()=>{
  countRef.current=countRef.current+1
})

const inputuFokusla=()=>{
inputRef.current.focus()
inputRef.current.style.width="100%"
}

const diviKliklə=()=>{
  divRef.current.style.backgroundColor="blue"
  divRef.current.style.border="10px solid black"
  divRef.current.style.width="100%"
  divRef.current.style.height="100vh"

}

const elementiFocusla=()=>{
  elementRef.current.focus()
}

  return (
    <div className="App">
      <div ref={divRef} style={{ width: "1000px", height: "1000px", backgroundColor: "violet" }}>
      <input type="text" ref={inputRef} style={{ width: "50%"}} />
      <button onClick={inputuFokusla}>Kliklə 1</button>
      <button onClick={diviKliklə}>Kliklə 2</button>
      <button onClick={elementiFocusla}>Kliklə3</button>
      <MyInput ref={elementRef}/>
      <input type="text" onChange={e => setName(e.target.value)} />
      {`Inputa daxil edilən dəyərin ümumi sayı ${countRef.current}`}
      </div>
    </div>
  )
}

export default App
