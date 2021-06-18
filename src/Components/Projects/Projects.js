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
                        <p id="stack">
                        <b>Technology used:</b> HTML, CSS, NodeJS, ExpressJS, MongoDB
                        </p>
                        <h5>Links: </h5>
                        <ul id="links">
                            <li>Frontend:  
                                <a href="https://github.com/bala-sr/URL-Shortener-fe" target="_blank" rel="noreferrer">
                                    https://github.com/bala-sr/URL-Shortener-fe
                                </a>
                            </li>
                            <li>Backend:  
                                <a href="https://github.com/bala-sr/URL-Shortener-be" target="_blank" rel="noreferrer">
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
                        <p id="stack">
                            <b>Technology used:</b> ReactJS, NodeJS, ExpressJS, MongoDB
                        </p>
                        <h5>Links: </h5>
                        <ul id="links">
                            <li>Frontend:  
                                <a href="https://github.com/bala-sr/Car-Rental-fe" target="_blank">
                                https://github.com/bala-sr/Car-Rental-fe
                                </a>
                            </li>
                            <li>Backend:  
                                <a href="https://github.com/bala-sr/Car-Rental-be" target="_blank">
                                https://github.com/bala-sr/Car-Rental-be
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
