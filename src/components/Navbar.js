import React from 'react'
import './style.css'
import logo from "./logo.png";

const Navbar = () => {
    return(
        <div>
            <div className='logo'>
                <img src={logo} alt="potrait" className='logoImg'></img>
            </div>
            <div className='header'>
                
                <div className='navButtons'>
                    <ul>
                        <li className='home'>Home</li>
                        <li className='about'>About</li>
                        <li className='contact'>Contact</li>
                        <li className='donate'><button className='donate-button'>Donate</button></li>
                    </ul>
                </div>
            </div>
            
        </div>

    )
}

export default Navbar