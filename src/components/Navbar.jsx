import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.scss";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { ethers } from "ethers";

function Navbar() {

    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    const location = useLocation();

    const [chainStatus, setChainStatus] = useState(true);

    const { disconnect } = useDisconnect()

    const addChain = () => {
        if (window.ethereum) {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x7ab7",
                    rpcUrls: ["https://wallaby.node.glif.io/rpc/v0"],
                    chainName: "Filecoin - Wallaby Testnet",
                    // nativeCurrency: {
                    //     name: "BitTorrent",
                    //     symbol: "BTT",
                    //     decimals: 18
                    // },
                    blockExplorerUrls: ["https://explorer.glif.io/"]
                }]
            })
            setChainStatus(false);
        } else {
            alert("Please Install a wallet to proceed.")
        }
    };

    const checkChain = async () => {
        if (window.ethereum) {
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const { chainId } = await provider.getNetwork();
            if (chainId !== 31415) {
                setChainStatus(true);
                return true;
            } else {
                setChainStatus(false);
                return false;
            }

        } else {
            alert("Please install a wallet.")
        }
    }

    useEffect(() => {
        if (isConnected) {
            checkChain();
        }
    }, [isConnected])

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
                            <li className={location.pathname === "/"?"nav-item active" : "nav-item"}><Link to="/">Home</Link></li>
                            <li className={location.pathname === "/organisation"?"nav-item active" : "nav-item"}><Link to="/organisation">Organisation</Link></li>
                            <li className={location.pathname === "/files"?"nav-item active" : "nav-item"}><Link to="/files">Files</Link></li>
                            <li className={location.pathname === "/profile"?"nav-item active" : "nav-item"}><Link to="/profile">Profile</Link></li>
                            <li className='nav-item'><button className='connect-btn' onClick={() => { disconnect() }}>DISCONNECT</button></li>
                        </>
                        :
                        <li className='nav-item'><button className='connect-btn' onClick={() => { connect() }}>CONNECT</button></li>
                }
            </ul>
            {/* {
                chainStatus
                    ?
                    <div className="add-chain-main">
                        <div className="add-chain-box">
                            <p className="add-chain-message">
                                Currently our application only supports bittorrent testnet. Please add the BTT chain. If you have already added please switch to BTT.
                            </p>
                            <button className="add-chain-btn" onClick={() => { addChain() }}>add chain</button>
                        </div>
                    </div>
                    :
                    null
            } */}
        </div>
    )
}

export default Navbar