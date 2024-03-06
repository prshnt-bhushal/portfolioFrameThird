import React from 'react';
import { FaHtml5, FaPython, FaJava, FaCss3, FaAws } from 'react-icons/fa';
import { SiC, SiCpp, SiFlutter } from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="sectionContainer">
      <div className="skillsContainer">
        <div className="skills-content">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <div className="skill">
              <SiFlutter size={50} />
              <span>Flutter</span>
            </div>
            <div className="skill">
              <FaHtml5 size={50} />
              <span>HTML</span>
            </div>
            <div className="skill">
              <FaPython size={50} />
              <span>Python</span>
            </div>
            <div className="skill">
              <FaJava size={50} />
              <span>Java</span>
            </div>
            <div className="skill">
              <FaCss3 size={50} />
              <span>CSS</span>
            </div>
            <div className="skill">
              <FaAws size={50} />
              <span>AWS</span>
            </div>
          </div>
        </div>
        <div className="achievements">
          <h3>Achievements</h3>
          <ul className="timeline">
            <li>
              <div>
                <h4>College Graduation</h4>
                <p>Graduated with Engineering in Computer Science</p>
              </div>
              <span>2023</span>
            </li>
            <li>
              <div>
                <h4>Completed Advanced flutter Course</h4>
                <p>Received certification for Advanced flutter</p>
              </div>
              <span>2022</span>
            </li>
            {/* add others */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
