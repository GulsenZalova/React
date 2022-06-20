import React from 'react'
import { useState } from 'react'
const FunksiyaComponent= () => {
    const[Counter, setCounter]=useState(0)

    const azalt=()=>{
        setCounter(Counter-1)
    }
    return(

    <div>
            <h1>Function Component</h1>
            <p>Counter: {Counter}</p>
            <button onClick={()=>setCounter()}>Azalt</button>
    </div>


    )



}

export default FunksiyaComponent