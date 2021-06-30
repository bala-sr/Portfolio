import React, { useState } from 'react';
import "./Header.css";

function Header() {
    const [clicked, setClicked] = useState(false);
    const toggle = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar">
            <div class="brand-div">
                <a href="#">B</a>

            </div>
            <a className="toggle-btn" onClick={toggle}>
                {/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
                <i className={clicked === true ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
            </a>
            <div className={clicked === true ? "navbar-links-mobile" : "navbar-links"}>
                <ul>
                    <li><a id="home-link" href="#landing-page">Home</a></li>
                    <li><a id="about-link" href="#about">About</a></li>
                    <li><a id="skills-link" href="#skills">Skills</a></li>
                    <li><a id="exp-link" href="#exp">Experience</a></li>
                    <li><a id="projects-link" href="#projects">Projects</a></li>
                    {/* <li><a id="about" href="#footer">Contacts</a></li> */}
                </ul>    
            </div>
        </nav>
    )
}

export default Header;
