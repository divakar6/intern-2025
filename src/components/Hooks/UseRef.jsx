import { useEffect, useRef, useState } from "react"

const UseRef = () => {
    var [text, setText] = useState("")
    var prevRender = useRef("")
    var pprender = useRef("")

    
    useEffect(()=>{
        pprender.current = prevRender.current
    },[prevRender.current])
    useEffect(()=>{
        prevRender.current = text
    },[text])


    return (
        <div>
            <h1>This page is meant for useRef hook</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h4>The text is {text}</h4>
            <h3>The previous render is {prevRender.current}</h3>
            <h3>The previous render of previos render is {pprender.current}</h3>
        </div>
    )
}

export default UseRef