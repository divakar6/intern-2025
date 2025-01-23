import { useEffect, useState } from "react"

const ListItems = ({ func }) => {
    var [number, setNumber] = useState([])
    useEffect(()=>{
        setNumber(func())
        console.log(number)
    },[func])
    return (
        <div>
            <h3>
                This list is as follows according to the number present in input box
            </h3>
            {number.map((number,index)=>{
                return <h4 key={index}>{number}</h4>
            })}
        </div>
    )
}
export default ListItems