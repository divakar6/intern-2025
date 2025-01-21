import {Link} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar=()=>{
    return(
        <header>
            <nav>
                <ol>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/about'>About</Link></li>
                    <li><Link className='link' to='/gallery'>Gallery</Link></li>
                    <li><Link className='link' to='/Contact'>Contact</Link></li>
                    <li><Link className='link' to='/signup'>SignUp</Link></li>
                </ol>
            </nav>
        </header>
        
    )
}

export default Navbar