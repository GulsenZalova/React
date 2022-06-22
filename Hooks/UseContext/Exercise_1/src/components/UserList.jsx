import React from "react";
import User from "./User";

const Userlist = ({users,changeColor}) =>{
 return(
  <div>
      <h3>UserList</h3>
      {users.map(user=>
      <User key={user.name} user={user} changeColor={changeColor}/>
        )}
     
  </div>
 )
}

export default Userlist