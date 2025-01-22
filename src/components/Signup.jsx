import { Link } from "react-router-dom"
import "../css/signUp.css"
const Signup=()=>{
    return (
    
        <div className="signup">
            <form>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="enter your name"/>
                </div>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="enter your email" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password"/>
                </div>
                <Link to='/home' className="btn">Submit</Link>
            </form>
        </div>
        
    )
}
export default Signup