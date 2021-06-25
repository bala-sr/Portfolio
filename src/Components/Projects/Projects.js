import React from 'react';
import "./Projects.css";

function Projects() {
    return (
        <div id="projects">
            <section id="my-projects">
                <h1>Projects</h1>
                <section id="project-cards">
                    <section id="url-shortener">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ84oV-xK3dZcLvF_9Rf9RNj4io1_NvmLrQ&usqp=CAU" />
                        <section className="url-text">
                            <h1 id="title">
                                Url Shortener
                            </h1>
                            <p id="desc">An application to shorten your URL</p>
                            <p id="stack">
                            <button className="tech">HTML</button>
                            <button className="tech">CSS</button>
                            <button className="tech">NodeJS</button>
                            <button className="tech">ExpressJS</button>
                            <button className="tech">MongoDB</button>
                            </p>
                            <ul id="links">
                                <li>  
                                    <a href="https://github.com/bala-sr/URL-Shortener-fe" target="_blank" rel="noreferrer">
                                        FrontendCode
                                    </a>
                                </li>
                                <li>  
                                    <a href="https://github.com/bala-sr/URL-Shortener-be" target="_blank" rel="noreferrer">
                                        BackendCode
                                    </a>
                                </li>
                                <li> 
                                    <a href="https://balasr-url-shortener.netlify.app" target="_blank">
                                        Demo
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section id="car-rental">
                            <img src="https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <section className="car-text">
                            <h1 id="title">
                                Car Rental Service
                            </h1>
                            <p id="desc">An application to rent a car</p>
                            <p id="stack">
                                <button className="tech">ReactJS</button>
                                <button className="tech">NodeJS</button>
                                <button className="tech">ExpressJS</button>
                                <button className="tech">MongoDB</button>
                            </p>
                            <ul id="links">
                                <li>  
                                    <a href="https://github.com/bala-sr/Car-Rental-fe" target="_blank">
                                    FrontendCode
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/bala-sr/Car-Rental-be" target="_blank">
                                    BackendCode
                                    </a>
                                </li>
                                <li>
                                    <a href="https://balasr-car-rental.netlify.app" target="_blank">
                                        Demo
                                    </a>    
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section id="video-chat">
                            <img src="https://miro.medium.com/max/2710/1*XEu9XT-U1RKmuTtz8k3qMQ.png" />
                        <section className="video-text">
                            <h1 id="title">
                                Live Video Chat
                            </h1>
                            <p id="desc">An application used to video chat in real time</p>
                            <p id="stack">
                                <button className="tech">ReactJS</button>
                                <button className="tech">NodeJS</button>
                                <button className="tech">ExpressJS</button>
                                <button className="tech">Socket.io</button>
                            </p>
                            <ul id="links">
                                <li>  
                                    <a href="https://github.com/bala-sr/VideoChatApp-fe" target="_blank">
                                    FrontendCode
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/bala-sr/VideoChatApp-be" target="_blank">
                                    BackendCode
                                    </a>
                                </li>
                                <li>
                                    <a href="https://balasr-video-app.netlify.app/" target="_blank">
                                        Demo
                                    </a>    
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Projects;
