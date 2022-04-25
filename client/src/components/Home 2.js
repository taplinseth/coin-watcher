import React from 'react';


const Home = () => {
    return (
        <div>
                <h1 id='home-header'>Welcome to my app. Please create an account or login to view current coin information.</h1>
            <img id='banner' src={require('./image.png')}></img>
        </div>
    )
}

export default Home;