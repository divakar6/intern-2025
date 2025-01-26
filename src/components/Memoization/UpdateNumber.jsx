import {memo} from 'react'

const UpdateNumber = ({ value }) => {
    return (
        <div>
            <h2>Update Number </h2>
            <h3>The value is {value}</h3>
        </div>
    )
}

export default memo(UpdateNumber);