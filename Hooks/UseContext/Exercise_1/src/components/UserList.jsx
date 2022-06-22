import React from "react";
import User from "./User";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const Userlist = ({}) =>{
    const context=useContext(UserContext)
 return(
  <div>
      <h3>UserList</h3>
      {context.users.map(user=>
      <User key={user.name} user={user}/>
        )}
     
  </div>
 )
}

export default Userlist