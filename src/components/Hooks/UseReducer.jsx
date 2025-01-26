import { useReducer } from "react"

const UseReducer=()=>{
    var actions={
        INC:'increment',
        DEC:'decrement'
    }
    function reducerFunc(state,action){
        if(action.type===actions.INC){
            return {val:state.val+1}
        }
        else if(action.type===actions.DEC){
            return {val:state.val-1}
        }
        else{
            return state
        }
    }
    var [stateVal,setAction]=useReducer(reducerFunc,{val:0})
    return ( 
    <div>
        <button onClick={()=>{setAction({type:actions.INC})}}>+</button>
        <span>{stateVal.val}</span>
        <button onClick={()=>{setAction({type:actions.DEC})}}>-</button>
    </div>
)
}
export default UseReducer