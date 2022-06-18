import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Formcontrol from './components/Formcontrol'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formcontrol/>
    </div>
  )
}

export default App
