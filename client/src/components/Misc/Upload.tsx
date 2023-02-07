import React from "react";

import './Upload.css';

const Upload = (props) => {

    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";

}

export default Upload