import ExamResults from "./ExamResults";

const CoE = (res) =>{
    return(
        <div>
            <h3>paper correction is Done</h3>
            <h3>Mark published</h3>
            <ExamResults sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default CoE;