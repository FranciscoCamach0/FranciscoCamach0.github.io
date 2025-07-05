// src/pages/HomePage.js

import React from 'react';
import '../css/background.css';
import selfie from '../images/selfie.jpg';
import linkedIn from '../images/linkedIn.jpg'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p> Hellp I'm </p>
      <h2> Francisco Camacho </h2>
      <h3> Software Engineer </h3>

      <span> </span>
      <div className = "homePageDiv">

        <div className = "updown">

          <p className = "homepageText"> I’m a recent Computer Science graduate from California State University, Monterey Bay, with a concentration in Software Engineering. I first discovered my passion for coding in high school and have been hooked ever since. I went on to complete the CSin3 program, an accelerated pathway that allowed me to earn my Bachelor’s degree in just three years while developing strong skills in software design, development, and teamwork.</p>
          <span></span>

          <button className = "contactButton"> Contact </button>
          <div className = "links"> 
            <a
                className="linkedinButton"
                href="https://www.linkedin.com/in/francisco-solis-a51a962b1/"
                target="_blank"
              >
                <img className="linkedInlogo" src={linkedIn} alt="LinkedIn logo" />
              </a>`

            <a
              className="githubButton"
              href="https://github.com/FranciscoCamach0"
              target="_blank"
            >
              <img className="linkedInlogo" src={linkedIn} alt="GitHub logo" />
            </a>

          </div>
      
        </div>
        <img className = "selfie" src={selfie} alt="picture of francisco" />


      </div>
      
      <h1>About Me </h1>
     

    </div>
  );
}

export default HomePage;



{/* <div className = "homePageDiv">
        <div className = "updown">
            <h2>Software Delevoper</h2>
            <p>Back-End / Front-End </p>
        </div>

        <img className = "selfie" src={selfie} alt="picture of francisco" />

        <div className = "updown">
          <h2> Coder </h2>
          <p> Back-End / Front-End </p>
        </div>


      </div> */}