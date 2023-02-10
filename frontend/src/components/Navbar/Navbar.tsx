import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/valorant.png'

const Navbar = ({ uploadPopup }) => {

    const location = useLocation();
    
    return (
        <div className = 'val__navbar'>
            <div className = 'val__navbar-links'>
                <div className = 'val__navbar-links-logo'>
                    <img src={logo} alt = "logo" />
                </div>
                <div className = 'val__navbar-links-container'>
                    <p className=".val__navbar-home"><Link to = "home">HOME</Link></p>
                    <p className=".val__navbar-agents"><Link to = "agents">AGENTS</Link></p>
                    <p className=".val__navbar-lineups"><Link to = "lineups">LINEUPS</Link></p>
                    <p className=".val__navbar-info"><Link to = "info">INFO</Link></p>
                    {location.pathname === '/lineups' &&                   
                        <button className="val__navbar-upload" onClick={uploadPopup}>UPLOAD</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar