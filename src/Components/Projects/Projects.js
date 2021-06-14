import React from 'react';
import "./Projects.css";

function Projects() {
    return (
        <div id="projects">
            <section id="my-projects">
                <h1>Projects</h1>
                <section id="project-cards">
                    <section id="url-shortener">
                        <h1>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ84oV-xK3dZcLvF_9Rf9RNj4io1_NvmLrQ&usqp=CAU" />
                            Url Shortener
                        </h1>
                        <p><i>Are long URLs troubling you? Shorten your URL here!!</i></p>
                        <h5>Features: </h5>
                        <ul>
                            <li>Login feature with password reset</li>
                            <li>Authorization using JWT</li>
                            <li>View the history of URLs shortened</li>
                        </ul>
                        <ul id="stack">
                            <li>HTML, CSS</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                        </ul>
                        <h5>Links: </h5>
                        <ul id="links">
                            <li>Frontend:  
                                <a href="https://github.com/bala-sr/URL-Shortener-fe" target="_blank">
                                    https://github.com/bala-sr/URL-Shortener-fe
                                </a>
                            </li>
                            <li>Backend:  
                                <a href="https://github.com/bala-sr/URL-Shortener-be" target="_blank">
                                    https://github.com/bala-sr/URL-Shortener-be
                                </a>
                            </li>
                            <li>Demo URL:  
                                <a href="https://balasr-url-shortener.netlify.app" target="_blank">
                                    https://balasr-url-shortener.netlify.app
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section id="car-rental">
                        <h1>
                            <img src="https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            Car Rental Service
                        </h1>
                        <p><i>No Car? No problem! Rent a car here!!</i></p>
                        <h5>Features: </h5>
                        <ul>
                            <li>Login as user and admin</li>
                            <li>Pay online using Payment Gateway</li>
                            <li>View all bookings and its status as admin</li>
                        </ul>
                        <ul id="stack">
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                        </ul>
                        <h5>Links: </h5>
                        <ul id="links">
                            <li>Frontend:  
                                <a href="https://github.com/bala-sr/URL-Shortener-fe" target="_blank">
                                    https://github.com/bala-sr/URL-Shortener-fe
                                </a>
                            </li>
                            <li>Backend:  
                                <a href="https://github.com/bala-sr/URL-Shortener-be" target="_blank">
                                    https://github.com/bala-sr/URL-Shortener-be
                                </a>
                            </li>
                            <li>Demo URL:  
                                <a href="https://balasr-url-shortener.netlify.app" target="_blank">
                                    https://balasr-url-shortener.netlify.app
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Projects;
