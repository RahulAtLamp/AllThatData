import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss";

function Navbar() {
    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <img className='nav-logo-main' src="/images/AllThatData.png" alt="logo" />
            </div>
            <ul className='nav-items'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/organisation">Organisation</Link></li>
                <li className='nav-item'><Link to="/files">Files</Link></li>
                <li className='nav-item'><Link to="/profile">Profile</Link></li>
                <li className='nav-item'><button className='connect-btn'>Connect</button></li>
            </ul>
        </div>
    )
}

export default Navbar