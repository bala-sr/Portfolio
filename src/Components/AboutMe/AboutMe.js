import React from 'react';
import "./AboutMe.css";
import pic from "./myPic.jpg";

function AboutMe() {
    return (
        <div id="about">
            <section className="aboutme">
                <h1><b>About Me</b></h1>
                <section id='section-aboutme'>
                    <p id="p-aboutme">
                        Hi, I am Balasubramaniam. I graduated from <a className="college" href="https://www.sastra.edu/" target="_blank" rel="noreferrer">SASTRA UNIVERSITY</a> in 2019 majoring in B.Tech Electronics and Communication Engineering. After graduating, I joined <a className="college" href="https://www.cognizant.com//" target="_blank" rel="noreferrer">Cognizant</a> as a Programmer  Analyst Trainee.
                        <br/>I am passionate about developing full-stack web applications. I like to learn new technologies and leverage the knowledge I have to make better applications. I spend my leisure time studying about stock market and trying to make sense of it.
                    </p>
                <img id="my-pic" src={pic} alt="Profile Picture" />    
                </section>
            </section>                      
        </div>
    )
}

export default AboutMe;
