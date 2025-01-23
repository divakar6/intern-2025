import { useState, useCallback } from "react"
import ListItems from "./List"

const UseCallBack = () => {
    var [num, setNum] = useState(0)
    var [dark, setDark] = useState(true)
    var styling = {
        backgroundColor: dark ? 'white' : 'black',
        color: dark ? 'black' : 'white'
    }
    var getItems = () => {
        return [Number(num) + 1, Number(num) + 2,Number(num) + 3]
    }
    return (
        <div style={styling}>
            <br />
            <button onClick={() => setDark(!dark)}><i className="ri-sun-line"></i></button>
            <h2>Welcome to UseCallback page</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <ListItems func={getItems}/>

        </div>
    )
}
export default UseCallBack