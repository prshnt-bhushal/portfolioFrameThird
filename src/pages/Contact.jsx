import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="sectionContainer">
      <div className="contactContainer">
        <div className="contactContent">
          <h2>Contact</h2>
          <p>
            You can contact me at <strong>nwrsudeep@gmail.com</strong>
          </p>
          <div className="socialHandles">
            <a href="mailto:nwrsudeep@gmail.com">
              <FaEnvelope size={24} />
            </a>
            <a href="https://twitter.com/example">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/example">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/example">
              <FaGithub size={24} />
            </a>
          </div>
          <form className="contactForm">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
