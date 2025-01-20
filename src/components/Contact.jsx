import {useState} from 'react'

const Contact=()=>{
    var [num,setNum]=useState(0)
    return(
        <div>
            <p>Welcome to contact page</p>
            <h3>This is a state example</h3>
            <h4>{num}</h4>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}
export default Contact