import React, { useState } from 'react';
import "./Header.css";

function Header() {
    const [clicked, setClicked] = useState(false);
    const toggle = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar">
            <a className="brand" href="#landing-page"><span className="brand-name"><b>B</b></span></a>
            <a className="toggle-btn" onClick={toggle}>
                {/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
                <i className={clicked === true ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
            </a>
            <div className={clicked === true ? "navbar-links-mobile" : "navbar-links"}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#exp">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#footer">Contacts</a></li>
                </ul>    
            </div>
        </nav>
    )
}

export default Header;
