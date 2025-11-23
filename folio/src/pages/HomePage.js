// src/pages/HomePage.js

import React from 'react';
import '../css/background.css';
import selfie from '../images/selfie.jpg';
// import linkedIn from '../images/linkedIn.jpg'
// import gitHub from '../images/gitHub.png'
import { Link } from "react-router-dom";
import { ImLinkedin, ImGithub } from "react-icons/im";

function HomePage() {
  return (
    <div className = "intro">
      <h1>Welcome to My Portfolio</h1>

      <div className = "homePageDiv">

        <div className = "leftside">
          <div className = "HomePageText"> 

          <h4> Hello I'm </h4>
          <h2 className = "name">
            <span className="name-highlight">Francisco</span> Camacho
          </h2>
          <h3 className="my-title">Recent Computer Science Graduate</h3>
          </div>

            <p className = "homepageDescription"> I’m a recent Computer Science graduate from California State University, Monterey Bay, with a concentration in Software Engineering. I first discovered my passion for coding in high school and have been hooked ever since. I went on to complete the CSin3 program, an accelerated pathway that allowed me to earn my Bachelor’s degree in just three years while developing strong skills in software design, development, and teamwork.</p>
           
            <button 
                className="download-resume-btn"
                onClick={() => window.open('/resume.pdf', '_blank')}
            >
                View Resume
            </button>
            <Link to="/contact">
                <button className="contactButton">Contact</button>
            </Link>

            <div className = "links"> 
              <a
                  className="linkButton"
                  href="https://www.linkedin.com/in/francisco-solis-a51a962b1/"
                  target="_blank"
                >
              
                  <ImLinkedin size="2em"/>
                </a>

              <a
                className="linkButton"
                href="https://github.com/FranciscoCamach0"
                target="_blank"
              >
                {/* <img className="gitHublogo" src={gitHub} alt="GitHub logo" />
                 */}
                 <ImGithub size="2em"/>
              </a>
            </div>
      
        </div>
       
        <div className="selfie">
          <div className="imageContainer">
            <img className="profileImage" src={selfie} alt="Francisco Camacho" />
          </div>
        </div>


      </div>
      
     
     

    </div>
  );
}

export default HomePage;



