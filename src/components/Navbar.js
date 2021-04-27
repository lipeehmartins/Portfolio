import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
         <div className="container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                       {/*} <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
    </li>*/}
                    </ul>   
                </div>
            </div>
       </div>
    </nav>
    )
}

export default Navbar
