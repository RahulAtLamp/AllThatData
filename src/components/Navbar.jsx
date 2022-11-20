import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <img className='nav-logo' height="50px" width="50px" src="/images/logo192.png" />
            </div>
            <div className='nav-controls'>
                <ul className='nav-items'>
                    <li className='nav-item'><Link to="/">Home</Link></li>
                    <li className='nav-item'><Link to="/organisation">Organisation</Link></li>
                    <li className='nav-item'><Link to="/files">Files</Link></li>
                    <li className='nav-item'><Link to="/profile">Profile</Link></li>
                    <li className='nav-item'><button>Connect</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar