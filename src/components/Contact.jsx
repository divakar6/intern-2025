import {useState} from 'react'

const Contact=()=>{
    var [num,setNum]=useState(0)
    return(
        <div>
            <h1>Welcome to contact page</h1>
            {/*This is a state example*/}
            <h3>Contact the '+' button</h3>
            <h4>{num}</h4>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}
export default Contact