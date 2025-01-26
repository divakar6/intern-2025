import {memo} from 'react'


const UpdateText = ({value}) => {
  return (
    <div>
      <h2>Update number 1</h2>
      <h3>The value is {value}</h3>
    </div>
  )
}

export default memo(UpdateText)