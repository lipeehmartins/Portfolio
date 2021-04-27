import React from 'react'
import twitter from "./images/project-twitter.png";

const Projects = () => {
    return (
        <div className="projects bg-dark" id="projects">
            <div className="h1">
                <h1>  <span className="orange">P</span>rojects </h1>
            </div>
            <div className="container">
                <div className="box">
                    <div className="image">
                        <img src={twitter} alt="twitter image" />
                    </div>
                    <div className="twitter-clone">
                        <h2>Twitter Clone Project</h2>
                        <p>Built with HTML/CSS/JavaScript for front end, Django(Python) and MySQL forthe database this project was built from scratch.</p>
                        <div className="links">
                            <a className="website" href="https://github.com/lipeehmartins/twitter-clone" target="_blank">Github</a>
                            <a className="website" href="https://tweet-clone-luiz-martins.herokuapp.com" target="_blank">WebSite</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
