import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Classcomponent from './components/classcomponent'
import FunksiyaComponent from './components/funksiyacomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FunksiyaComponent/>
      <Classcomponent/>
    </div>
  )
}

export default App
