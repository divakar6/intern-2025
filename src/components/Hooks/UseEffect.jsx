import { useState,useEffect } from "react"
const UseEffect=()=>{
    var [text,setText]= useState("hello")
    var [text1,setText1]= useState("")
    useEffect(()=>{
        console.log(text);
    },[])
    return(
        <div>
            <h1>This is use effect example</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>This is {text}</h4>
            <input type="text" value={text1} onChange={(e)=>setText1(e.target.value)}/>
            <h4>This is {text1}</h4>
        </div>
    )
}

export default UseEffect