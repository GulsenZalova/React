import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const FunksiyaComponent= () => {
    const[Counter, setCounter]=useState(0)
    const[Counter2, setCounter2]=useState(0)
    const[timer, setTimer]=useState(0)
    
    // useEffect(()=>{
    //     console.log("Yükləndi")
    //     console.log("Update olundu")
    // },[Counter,Counter2])
  
    useEffect(()=>{
        const myTimer=setInterval(()=>{
            setTimer(timer => timer + 1)
        },1000)

        return () => clearInterval(myTimer)
    })
  
  useEffect(()=>{
   console.log("Timer: ",  timer)
  })

    const azalt = () =>{
        setCounter(Counter-1)
    }
    return(
    <div>
            <h1>Function Component</h1>
            <p>Counter: {Counter}</p>
            <p>Counter2: {Counter2}</p>
            <button onClick={()=>azalt()}>Azalt</button>
            <button onClick={()=>setCounter2(Counter2-1)}>Azalt2</button>
    </div>
    )
}

export default FunksiyaComponent