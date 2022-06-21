import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Classcomponent from './components/classcomponent'
import FunksiyaComponent from './components/funksiyacomponent'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow]=useState(true)
  const [hide,setHide]= useState(true)
  return (
    <div className="App">
      <button onClick={()=> setShow(!show)}>Funksiya komponentini göstər/gizlə</button>
      <button onClick={()=> setHide(!hide)}>Class komponentini göstər/gizlə</button>
    {show ? <FunksiyaComponent/> : <div/>}
     {hide ? <Classcomponent/> : <div/>}
    </div>
  )
}

export default App
