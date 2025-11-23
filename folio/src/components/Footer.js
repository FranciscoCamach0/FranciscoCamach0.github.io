import React from 'react';
import '../css/Footer.css';
// import '../css/background.css';
import { ImLinkedin, ImGithub } from "react-icons/im";
function Footer() {
    return (
        <footer className="footer">
        <h4>Francisco Camacho</h4>
        <p>&copy; 2025 All rights reserved.</p>
             <div className="footer-icons">
                <a href="https://www.linkedin.com/in/francisco-solis-a51a962b1/"> <ImLinkedin size="2em" style={{ color: 'white' }} /> </a>
                <a href="https://github.com/FranciscoCamach0">  <ImGithub size="2em" style={{ color: 'white' }} /> </a>
            </div>
        </footer>
    );
}

export default Footer;