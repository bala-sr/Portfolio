import React from 'react';
import "./Experience.css";

function Experience() {
    return (
        <div id="exp">
            <section className="my-exp">
                <h1>Work Experience</h1>
                <h4><b>Programmer Analyst</b></h4>
                <h5>Cognizant</h5>
                <p><i>(Jun-2019 - present)</i></p>
                <h6><b>Job Responsibilities:</b></h6>
                <ul>
                    <li>To monitor the production activities in 6 different sites</li>
                    <li>To handle any production disruptions occurring due to data issue in the file</li>
                    <li>To handle user raised concerns</li>
                    <li>To perform data update/creation/deletion in production environment based on user
                    requirement</li>
                </ul>
                <h1>Education</h1>
                <h4 id="college"><b>SASTRA UNIVERSITY, Thanjavur</b></h4>
                <p id="degree">Bachelor of Technology, Electronics and Communication Engineering(2015-2019)</p>
                <p id="cgpa">CGPA: 7.3913</p>
                <h4 id="school"><b>MAHARISHI INTERNATIONAL RESIDENTIAL SCHOOL, Kancheepuram</b></h4>
                <p id="degree">Higher Secondary(2013-2015)</p>
                <p id="cgpa">Percentage: 92.2%</p>

            </section>
        </div>
    )
}

export default Experience;
