import React from 'react';
import "./AboutMe.css";
import pic from "./myPic.jpg";

function AboutMe() {
    return (
        <div id="about">
            <section className="aboutme">
                <h1>About Me</h1>
                <section id='section-aboutme'>
                    <p id="p-aboutme">
                        Hi, I am Balasubramaniam. I graduated from <a className="college" href="https://www.sastra.edu/" target="_blank" rel="noreferrer">SASTRA UNIVERSITY</a> in 2019 majoring in B.Tech Electronics and Communication Engineering. After graduating, I joined <a className="college" href="https://www.cognizant.com//" target="_blank" rel="noreferrer">Cognizant</a> as a Programmer  Analyst Trainee.
                        <br/>I am passionate about developing full-stack web applications.
                    </p>
                    <img id="my-pic" src={pic} alt="Profile Picture" />
                </section>
            </section>            
            <section className="skills">
                <h1>Skills</h1>    
                <ul id="my-skills">
                    <li>Frontend: <span>HTML, CSS, ReactJS</span></li>
                    <li>Backend: <span>NodeJS, ExpressJS</span></li>
                    <li>Database: <span>SQL, MongoDB</span></li>
                    <li>Version Control: <span>Git</span></li>
                    <li>Tools: <span>VS Code, Postman</span></li>
                </ul>
            </section>            
        </div>
    )
}

export default AboutMe;
