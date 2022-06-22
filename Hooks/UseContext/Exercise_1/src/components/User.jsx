import React  from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";


const User= ({user})=>{
    const change=useContext(UserContext)
    console.log(change)
return(
    <div style={{backgroundColor:user.color}}>
        <h4>User:{user.name}</h4>
        <p>Mail:{user.mail}</p>
        <p>Age:{user.age}</p>
        Color:{" "}
        <input type="text"
        value={user.color}
        onChange={e => change.changeColor(user.id, e.target.value)}
        />
    </div>
)
}

export default User