
import '../css/contactPage.css';
import React, { useState } from "react";
import Swal from 'sweetalert2'


function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "14796c63-5d63-4062-aa2a-34f0e472f64d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Form submitted successfuly",
                icon: "success"
              });
        }
      };

    return (
        <section className = "contact-container">
            <form onSubmit={onSubmit}> 
                <h2>Contact Form</h2>

                <div className = "input-box">
                    <label>Full Name</label>
                    <input type = "text" className = "field" placeholder="Enter Full Name" name = "name" required></input>
                </div>

                <div className = "input-box">
                    <label>Email</label>
                    <input type = "email" className = "field" placeholder="Enter Email" name = "email" required></input>
                </div>

                <div className = "input-box">
                    <label>Message</label>
                    <textarea  name = "message" className = "field-mess" placeholder="Enter Message" required></textarea>
                </div>

                <button type = "submit" className= "submitButton"> Submit </button>

            </form>
          
        </section>
    );
}

export default Contact;