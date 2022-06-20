import React from 'react'
import Guest from './guest'
import User from './user'

export default function Greeting(props) {
    const isLoggedİn=props.isLoggedIn
    return(
        <div>
        { isLoggedİn ? <Guest/> : <User/> }
        </div>
    )

//    if(isLoggedİn){
//     return <Guest/>
//    }
//    {
//     return <User/>
//    }
   
  
}
