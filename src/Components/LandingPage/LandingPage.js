import React from "react";
import "./LandingPage.css";

export default function LandingPage() {

    return (
        <div id="landing-page">
            <section className="greetings">
                <span className="hi">Hi, My name is <br /><span className="name">BALASUBRAMANIAM S R</span></span><br />
                <span className="designation">I love to build Web Applications.</span><br />
                <button className="resume">
                    <a href="https://drive.google.com/file/d/1ug3TY0cg4MLg_3uBJJbGcQmwDzMTtJDm/view" target="_blank" rel="noreferrer">
                        View Resume
                    </a>
                </button>
                <section id="media-links">
                    <ul>
                        <li>
                        <a className="links" href="mailto: balasr97@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>    
                        </a>
                        </li>
                        <li>
                            <a className="links" href="https://github.com/bala-sr" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a className="links" href="https://www.linkedin.com/in/balasubramaniam-s-r-75784712b/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                        
                    </ul>
                </section>
            </section>
        </div>
    )
}


            
            
