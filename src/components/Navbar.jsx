import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import { useState } from 'react'

const Navbar=()=>{
    var [dropdown,setdd]=useState(false)
    const toggle=()=>{
        setdd(!dropdown)
    }
    return(
        <header>
            <nav>
                <ol>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/about'>About</Link></li>
                    <li><Link className='link' to='/gallery'>Gallery</Link></li>
                    <li><Link className='link' to='/Contact'>Contact</Link></li>
                    <li><Link className='link' to='/use-effect-api'>UseEffectAPI</Link></li>
                    <div onMouseOver={()=>setdd(true)} onMouseLeave={()=>setdd(false)}>
                        <span className='link'>Hooks</span>
                        {dropdown &&(
                        <ul>
                            <li><Link to='/use-state' className='link'>useState</Link></li>
                            <li><Link to='/use-effect' className='link'>useEffect</Link></li>
                        </ul>
                    )}
                    </div>
                    <li><Link className='link' to='/signup'>SignUp</Link></li>
                </ol>
            </nav>
        </header>
        
    )
}

export default Navbar