import React from 'react';
import "./Skills.css";

function Skills() {
    return (
        <div id="skills">
            <section id="my-skills">
                <h1 id="skills-heading"><b>Skills</b></h1>    
                <ul id="my-skills">
                    <li>
                        <label>HTML | CSS</label><br />
                        <div className="container">
                            <div className="skill html">80%</div>
                        </div>
                    </li>
                    <li>
                        <label>JavaScript | ReactJS</label><br />
                        <div className="container">
                            <div className="skill js">70%</div>
                        </div>
                    </li>
                    <li>
                        <label>NodeJS | ExpressJS</label><br />
                        <div className="container">
                            <div className="skill node">70%</div>
                        </div>
                    </li>
                    <li>
                        <label>SQL | MongoDB</label><br />
                        <div className="container">
                                <div className="skill db">70%</div>
                        </div>
                    </li>
                    <li>
                        <label>Git</label><br />
                        <div className="container">
                                <div className="skill git">80%</div>
                        </div>
                    </li>
                    <li>
                        <label>Postman | Netlify | Heroku</label><br />
                        <div className="container">
                                <div className="skill tools">90%</div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Skills;
