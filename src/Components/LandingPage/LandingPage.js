import React from "react";
import "./LandingPage.css";

export default function LandingPage() {

    return (
        <div id="landing-page">
            <section className="greetings">
                <span className="hi">Hi, My name is <br /><span className="name">BALASUBRAMANIAM S R</span></span><br />
                <span className="designation">I love to build Web Applications</span><br />
                <button className="resume">
                    <a href="https://drive.google.com/file/d/1B4nWwMnWCFazECgjDXkKYjNsvQMeEWOE/view" target="_blank" rel="noreferrer">
                        View Resume
                    </a>
                </button>
            </section>
            <section id="media-links">
                <ul>
                    <li>
                    <a id="links" href="mailto: balasr97@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-envelope" aria-hidden="true"></i>    
                    </a>
                    </li>
                    <li>
                        <a id="links" href="https://github.com/bala-sr">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/balasubramaniam-s-r-75784712b/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    
                </ul>
            </section>
        </div>
    )
}


            
            
