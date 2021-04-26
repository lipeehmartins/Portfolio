import React from 'react';
import photo from './images/me.jpg';

const Home = () => {
    return (

        <div className="home bg-dark">
            <div className="container">
                <h1><span className="orange">H</span>ome </h1>
                <div className="martins">
                    <img
                        src={photo}
                        alt="my pic"
                    />
                </div>
                <div className="title">
                    <h2>
                        <p>Luiz Felipe Martins</p>
                        <p>Full Stack Developer</p>
                    </h2>
                    <h3>HTML / CSS / JavaScript / React.js / Redux / Python / Django / MySQL</h3>
                </div>
            </div>
        </div>
    )
}

export default Home
