import { useState } from "react";

var UseState=()=>{
    const initial=0
    var [num,setNum]=useState(initial)
    return(
        <div>
            <h1>Here's usestate example</h1>
            <h3>The number:{num}</h3>
            <button onMouseEnter={()=>setNum(num-1)}>-</button>
            <button onMouseEnter={()=>setNum(num+1)}>+</button>
            <button onClick={()=>setNum(initial)}>RESET</button>
        </div>
    )
}

export default UseState