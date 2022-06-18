import React from 'react'
import Guest from './guest'
import User from './user'

export default function Greeting(props) {
    const isLoggedİn=props.isLoggedIn
   if(isLoggedİn){
    return <Guest/>
   }
   {
    return <User/>
   }
   
  
}
