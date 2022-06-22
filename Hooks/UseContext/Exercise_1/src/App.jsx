import { useState } from 'react'
import './App.css'
import Userlist from './components/UserList'
import { UserContext } from './Contexts/UserContext'

function App() {
 const data =[
  {id: 1, name:"Aytən", mail: "ayten@mail.com", age: 22, color:"blue" },
  {id: 2, name:"Elmin", mail: "elmin@mail.com", age: 24, color:"red" },
  {id: 3, name:"Narın", mail: "narın@mail.com", age: 25, color:"green" }
 ]
const [users, setusers]=useState(data)

const changeColor = (id, color)=>{
 setusers(
  users.map(user=> (user.id===id ? {... user, color: color} : user))
)
}
  return (
    <UserContext.Provider value={{users,changeColor}}>
    <div className="App">
      <h1>Welcome</h1>
       <Userlist />
    </div>
    </UserContext.Provider>
  )
}

export default App
