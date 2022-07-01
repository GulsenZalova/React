import { useState } from 'react'
import Common from './components/Common'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Common/>
    </div>
  )
}

export default App