import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Navbar() {

    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    const { disconnect } = useDisconnect()

    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <img className='nav-logo-main' src="/images/AllThatData.png" alt="logo" />
            </div>
            <ul className='nav-items'>
                {
                    isConnected
                        ?
                        <>
                            <li className='nav-item'><Link to="/">Home</Link></li>
                            <li className='nav-item'><Link to="/organisation">Organisation</Link></li>
                            <li className='nav-item'><Link to="/files">Files</Link></li>
                            <li className='nav-item'><Link to="/profile">Profile</Link></li>
                            <li className='nav-item'><button className='connect-btn' onClick={()=>{disconnect()}}>DISCONNECT</button></li>
                        </>
                        :
                        <li className='nav-item'><button className='connect-btn' onClick={() => { connect() }}>CONNECT</button></li>
                }
            </ul>
        </div>
    )
}

export default Navbar