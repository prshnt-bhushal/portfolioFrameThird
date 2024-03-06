import React, { useState } from 'react';
import {
  FaCode,
  FaEnvelopeOpenText,
  FaFolderOpen,
  FaHome,
  FaRegEye,
} from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';
import { IoReturnDownBack } from 'react-icons/io5';

function NavBar() {
  const [visible, setVisible] = useState(false);

  const handleScroll = (scrollto) => {
    document.getElementById(scrollto).scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleVisibility = () => {
    const navbar = document.querySelector('.navbarUl');
    navbar.classList.toggle('navbarUlVisible');
    setVisible(!visible);
  };

  return (
    <nav>
      <ul className="navbarUl">
        <li onClick={() => handleScroll('home')}>
          <FaHome size={20} />
          <span>Home</span>
        </li>
        <li onClick={() => handleScroll('about')}>
          <FaUserGraduate size={20} />
          <span>About</span>
        </li>
        <li onClick={() => handleScroll('skills')}>
          <FaCode size={20} />
          <span>Skills</span>
        </li>
        <li onClick={() => handleScroll('projects')}>
          <FaFolderOpen size={20} />
          <span>Projects</span>
        </li>
        <li onClick={() => handleScroll('contact')}>
          <FaEnvelopeOpenText size={20} />
          <span>Contact</span>
        </li>
        <li onClick={handleVisibility}>
          <IoReturnDownBack size={20} />
        </li>
      </ul>
      {visible && (
        <FaRegEye
          size={20}
          style={{
            cursor: 'pointer',
            margin: '10px',
          }}
          onClick={handleVisibility}
        />
      )}
    </nav>
  );
}

export default NavBar;
