import { useState } from "react"
import useLocalStorage from "./SampleCustomHook"

const UseLocalStorage=()=>{
    var [text,setText]=useLocalStorage("customerID","")
    return(
        <div>
            <h2>Utilizing Custom hook created</h2>
            <input type="text" value={text}/>
            <h3>The text typed is {text}</h3>
        </div>
    )
}

export default UseLocalStorage