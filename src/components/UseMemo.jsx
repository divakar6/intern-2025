import { useMemo, useState } from 'react'

function slowFunction(num) {
    for (var slow = 0; slow < 1000000000; slow++) { }
    return num * 2
}

const UseMemo = () => {
    var [num, setNum] = useState(0)
    var [dark, setDark] = useState(true)
    var styling = {
        backgroundColor: dark ? "white" : "black",
        color: dark ? "black" : "white"
    }
    
    // var [doublingANumber,setd]=useState(0)
    // useEffect(() => {
    //     setd(slowFunction(num))
    // },[num])
    // the above does the same thing as below

    var doublingANumber = useMemo(() => {
        return slowFunction(num)
    },[num])
    return (
        <div style={styling}>
            <h2>This page is meant for useMemo hook</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} /><br/><br/>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
            <button onClick={()=>setNum(0)}>Reset</button>
            <h4>the number is {doublingANumber}</h4>
        </div>
    )
}
export default UseMemo