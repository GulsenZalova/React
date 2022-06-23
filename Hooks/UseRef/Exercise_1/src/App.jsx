import { useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
 const inputRef=useRef(null)
const divRef=useRef(0)
useEffect(()=>{
console.log(inputRef.current)
console.log(divRef)
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

  return (
    <div className="App">
      <div ref={divRef} style={{ width: "1000px", height: "1000px", backgroundColor: "violet" }}>
      <input type="text" ref={inputRef} style={{ width: "50%"}} />
      <button onClick={inputuFokusla}>Kliklə</button>
      <button onClick={diviKliklə}>Kliklə 2</button>
      </div>
    </div>
  )
}

export default App
