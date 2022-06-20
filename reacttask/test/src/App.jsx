import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Classcomponent from './components/classcomponent'
import FunksiyaComponent from './components/funksiyacomponent'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow]=useState(true)
  return (
    <div className="App">
      <button onClick={()=> setShow(!show)}>Toggle</button>
      <FunksiyaComponent/>
     {show ? <Classcomponent/> : <div/>}
    </div>
  )
}

export default App
