import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Home from './components/Pages/Home.tsx';
import Agents from './components/Pages/Agents.tsx';
import Lineups from './components/Pages/Lineups.tsx';
import Info from './components/Pages/Info.tsx';
import Upload from './components/Misc/Upload.tsx';


const App = () => {

    const [uploadPopup, setUploadPopup] = useState(false);

    const handlePopup = () => {
        setUploadPopup(!uploadPopup)
    };

    return (
        <>
        <div className="header">
            <div className ="gradient__navbar">
            <Navbar uploadPopup={handlePopup} />
            </div>
        </div>
        <div className='container'>
            <Routes>
                <Route path = "/" element={ <Home />} />
                <Route path = "/home" element={ <Home />} />
                <Route path = "/agents" element={ <Agents />} />
                <Route path = "/lineups" element={ <Lineups />} />
                <Route path = "/info" element={ <Info />} />
            </Routes>

        </div>
        <Upload trigger={uploadPopup} setTrigger={setUploadPopup}>
            <h3>Testing</h3>
        </Upload>
        </>

    );
}


export default App;