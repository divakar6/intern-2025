import UpdateNumber from "./UpdateNumber"
import UpdateNum1 from "./UpdateText"
import { useState } from "react";

const Memo = () => {
  var[num,setNum]=useState(0);
  var[num1,setNum1]=useState(0);
  return (
    <div>
      <h2>This page is ment for Optimal</h2>
      <UpdateNumber value={num}/>
      <button onClick={() => setNum(num+1)}>+</button>
      <UpdateNum1 value={num1} />
      <button onClick={() => setNum1(num1+1)}>+</button>
    </div>
  )
}

export default Memo