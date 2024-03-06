import React from 'react';
import profileImage from '../assets/images/profileImage.png';
function About() {
  return (
    <section id="about" className="sectionContainer">
      <div className="aboutContainer">
        <div className="aboutContent">
          <h2>About Me</h2>
          <p>
            My name is Sudeep Shrestha and I am a passionate Computer Engineer.
            I love creating beautiful and functional websites that make a
            difference. With a strong background in front-end development and a
            keen eye for design, I strive to deliver exceptional user
            experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            reading, or enjoying outdoor activities.
          </p>
        </div>
        <div className="profileImageContainer">
          <img src={profileImage} alt="Profile" className="profileImage" />
        </div>
      </div>
    </section>
  );
}

export default About;
