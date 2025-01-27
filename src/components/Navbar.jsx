import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { useState } from 'react'

const Navbar = (onLogout) => {
    var[dropdown,showDropdown]=useState(false)
    const toggleDropdown=()=>{
      showDropdown((dropdown)=>!dropdown);
    };
    var[dd,showdd]=useState(false)
    const toggledd=()=>{
        showdd((dd)=>!dd)
    }
    return (
        <header>
            <nav>
                <ol>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/about'>About</Link></li>
                    <li><Link className='link' to='/gallery'>Gallery</Link></li>
                    <li><Link className='link' to='/Contact'>Contact</Link></li>
                    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span className='link'>Hooks</span>
                        {dropdown && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                color:'black',

                                backgroundColor: '#98d1eb',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                                <li><Link to='/use-state' className='link'>useState</Link></li>
                                <li><Link to='/use-effect' className='link'>useEffect</Link></li>
                                <li><Link className='link' to='/use-effect-api'>UseEffectAPI</Link></li>
                                <li><Link className='link' to='/use-reducer'>UseReducer</Link></li>
                                <li><Link to='/use-ref' className='link'>UseRef</Link></li>
                                <li><Link to='/use-memo' className='link'>UseMemo</Link></li>
                                <li><Link to='/use-call-back' className='link'>UseCallBack</Link></li>
                                <li><Link to='/react-life-cycle-methods' className='link'>ReactLifeCycleMethods</Link></li>
                                <li><Link to='/custom-hook' className='link'>Custom Hook</Link></li>
                            </ul>
                        )}
                    </div>
                    <div onMouseEnter={toggledd} onMouseLeave={toggledd} style={{ position: 'relative', display: 'inline-block' }}>
                        <span className='link'>Memoisation</span>
                        {dd && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                color:'black',

                                backgroundColor: '#98d1eb',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                                <li><Link to='/memo' className='link'>Memo</Link></li>
                                <li><Link to='/updatenumber' className='link'>updatenumber</Link></li>
                                <li><Link to='/updatetext' className='link'>updatetext</Link></li>
                                <li><Link to='/lazy-loading' className='link'>Lazy Loading</Link></li>
                                
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