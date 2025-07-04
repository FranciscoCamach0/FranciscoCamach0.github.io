// src/pages/HomePage.js

import React from 'react';
import '../css/background.css';
function HomePage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage of my React site deployed with GitHub Pages.</p>

      <div className = "homePageDiv">
        <div className = "updown">
            <h2>Software Delevoper</h2>
            <p>Back-End / Front-End </p>
        </div>

        <img src="../images/selfie.jpg" alt="picture of francisco"> </img>

        <div className = "updown">
          <h2> Coder </h2>
          <p> Back-End / Front-End </p>
        </div>


        <p> </p>
      </div>

    </div>
  );
}

export default HomePage;
