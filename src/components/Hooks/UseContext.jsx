import Invigilator from '../ContextComponents/Invigilator'
import {createContext} from "react";

export const ThemeProvider = createContext();
const UseContext=()=>{
    return(
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5,cgpa:6.5}}>
            <h2>This is a exampple of UseContext Hook which is an alternative for Props Drilling</h2>
            <h4>Students exams are done</h4>
            <Invigilator/>
            </ThemeProvider.Provider>
        </div>
    )
}

export default UseContext;