import React from 'react';
import profileImage from '../assets/images/profileImage.png';
import { FaGithub, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaFileDownload, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <section id="home" className="sectionContainer">
      <div className="profileContainer">
        <img src={profileImage} alt="Profile" className="profileImage" />
        <div className="profileDetails">
          <h2>Hello, I'm Sudeep Shrestha</h2>
          <p>Computer Engineer | Mobile App Developer</p>
          <p>Welcome to my portfolio website</p>
          <div className="socialHandles">
            <a href="https://example.com">
              <FaLinkedin size={24} />
            </a>
            <a href="https://example.com">
              <FaGithub size={24} />
            </a>
            <a href="https://example.com">
              <FaInstagram size={24} />
            </a>
            <a href="https://example.com">
              <FaSquareXTwitter size={24} />
            </a>
          </div>
          <a href="/path/to/your/cv.pdf" download className="cvButton">
            <span className="dowloadText">Download CV</span>
            <FaFileDownload className="FaFileDownload" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
