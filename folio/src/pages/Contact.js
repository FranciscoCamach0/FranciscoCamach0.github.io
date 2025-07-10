import React from 'react';
import '../css/background.css';
import React, { useState } from "react";


function Contact() {
    return (
        <section className = "contact-container">
            <form> 
                <h2>Contact Form</h2>

                <div className = "input-box">
                    <label>Full Name</label>
                    <input type = "text" className = "field" placeholder="Enter Full Name" required></input>
                </div>

                <div className = "input-box">
                    <label>Email</label>
                    <input type = "text" className = "field" placeholder="Enter Email" required></input>
                </div>

                <div className = "input-box">
                    <label>Message</label>
                    <input type = "text" className = "field" placeholder="Enter Message" required></input>
                </div>

                <button type = "submit"> Submit </button>

            </form>
          
        </section>
    );
}

export default Contact;