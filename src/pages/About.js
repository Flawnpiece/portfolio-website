import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const About = () => {
    return (
        <div>

            <h1 class="center">Skill & Experience</h1>
            <div class="red-line stretch"></div>
            <br /><br /><br />


            <div class="flex-container">
                <div class="flex-item">

                    <h2 class="center">Education</h2>
                    <div class="red-line sub-text2 line-center"></div>
                    <br />

                    <h4>Diplomas</h4>
                    <p>Got my highschool diploma at Polyvalente de l'Érablière and I am currently undertaking my university diploma for software engeenering. I will be finished in end 2024.</p>
                    <br />

                    <h4>Certificate</h4>
                    <p>Got the Azure fundamentals certificate showcasing that I knew the tools and service that Azure provides as well as have knowledge of how a cloud environement works.</p>

                </div>
                <div class="flex-item ">
                    <h2 class="center">Skills</h2>
                    <div class="red-line sub-text2 line-center"></div>
                    <br />
                    <h4>Coding</h4>
                    <p>Proficient with Python and java languages with personal and professional experience. I also used HTML/CSS/Javascript for various websiteproject as well as SQL for database managements. I also have some knowledge of Powershell.</p>
                    <br />

                    <h4>UI/UX</h4>
                    <p>Produced various mockups and wireframes using Adobe XD and Figma for school and personal projects. I also self-thaught myself tools such as Adobe Photoshop, Adobe After Effects and Sony Vegas Pro 15 for personal projects.</p>

                </div>
                <div class="flex-item">
                    <h2 class="center">Experience</h2>
                    <div class="red-line sub-text2 line-center"></div>
                    <br />
                    <h4>Governement of Canada</h4>
                    <p>Build an auditing solution to monitor logs in the Azure cloud environment. Established a tagging standard for tools and resources inside the Azure environment. Also used Powershell scripts to automate configuration of diagnostic settings resource in Azure.</p>
                    <br />

                    <h4>Nokia - Wavesuite</h4>
                    <p>Tested several components of a network management software through a well established testing procedure. Started with manual testing of the front-end of the software and ended up writing testcases using python for regression testing.</p>
                </div>
            </div>

            <Link to="/projects" class="down-arrow line-center"><img class="button-continue" src='https://flawnpiece.github.io/portfolio-website/assets/down-arrow.png' alt="" width="20%" /></Link>

        </div>
    );
};

export default About;