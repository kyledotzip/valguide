import React from 'react';

import './Home.css';

const Home = () => {

    return(
        <div className='home-page'>
            <div className='home-banner'>
                <h1>HOME</h1>
            </div>
            <div className='home-content'>
                <h1>Welcome</h1>
                <p>This website was made as a personal project to learn HTML, CSS, React, Javascript/Typescript</p>
                <p>Utilizing API calls and a REST API, you can discover agents' abilities and upload your own tips/tricks</p>
                <p>Go to the Info page for my information...</p>
            </div>
        </div>
    )
}

export default Home;