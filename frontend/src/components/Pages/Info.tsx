import React from "react";
import logo from '../../assets/GitHub-Logo.png'

import './Info.css';

const Info = () => {
    return (
        <div className="info-page">
            <div className="info-banner">
                <h1>INFO</h1>
            </div>
            <div className="info-content">
                <h1><a href="https://github.com/kyledotzip" target="_blank">Github</a></h1>
                <h1><a href="https://www.linkedin.com/in/kyle-house-75a84a132/" target="_blank">LinkedIn</a></h1>
                <h1><a href="https://www.instagram.com/kyle.zip/" target="_blank">Instagram</a></h1>
            </div>
        </div>

    )
}

export default Info;