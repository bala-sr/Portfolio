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
                    <li>
                        Frontend:
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>ReactJS</button>
                    </li>
                    <li>
                        Backend: 
                        <button>NodeJS</button>
                        <button>ExpressJS</button>

                    </li>
                    <li>
                        Database: 
                        <button>SQL</button>
                        <button>MongoDB</button>
                    </li>
                    <li>
                        Version Control: 
                        <button>Git</button>
                    </li>
                    <li>
                        Tools: 
                        <button>VS Code</button>
                        <button>Postman</button>
                    </li>
                </ul>
            </section>            
        </div>
    )
}

export default AboutMe;
