import React from "react";

const MyInput=React.forwardRef((props,ref)=>{
    return(
        <div>
              <input type="text" ref={ref}/>
        </div>
    )
})

export default MyInput