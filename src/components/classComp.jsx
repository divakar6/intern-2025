import React from "react"
class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>This is a class example</h1>
            </div>
        )
    }
}

const Gallery=(props1)=>{

        return(
            <div>
                <h1>Inside the gallery</h1>
                <h3>Welcome to {props1.page} page</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s" alt="oops..." />
                <h3>Viewing {props1.image}</h3>
                
            </div>
        )
}

export {ClassComponent,Gallery}