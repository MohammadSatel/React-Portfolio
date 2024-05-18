import React from 'react';
import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let's talk about everything!</h1>
        <p>
          Don't like forms? Send me an <a href="mailto:MohammadSatelDev@gmail.com">email</a> 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={`/socials/${social.icon}`} alt={social.name} />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            <a href="mailto:MohammadSatelDev@gmail.com">MohammadSatelDev@gmail.com</a>
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
             054-244-5567
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Tel Aviv, Israel
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        {/* The "netlify" attribute is for Netlify forms */}
        {/* If you're not using Netlify, remove that attribute */}
        <form name="contact" method="POST" data-netlify="true">
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="email" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
