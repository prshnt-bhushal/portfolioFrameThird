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
  const handleVisibility = () => {
    const navbar = document.querySelector('.navbarUl');
    navbar.classList.toggle('navbarUlVisible');
    setVisible(!visible);
  };
  return (
    <nav>
      <ul className="navbarUl">
        <li>
          <FaHome size={20} />
          <span>Home</span>
        </li>
        <li>
          <FaUserGraduate size={20} />
          <span>About</span>
        </li>
        <li>
          <FaCode size={20} />
          <span>Skills</span>
        </li>
        <li>
          <FaFolderOpen size={20} />
          <span>Projects</span>
        </li>
        <li>
          <FaEnvelopeOpenText size={20} />
          <span>Contact</span>
        </li>
        <li onClick={handleVisibility}>
          <IoReturnDownBack size={20} />
        </li>
      </ul>
      {visible && (
        <FaRegEye style={{ cursor: 'pointer' }} onClick={handleVisibility} />
      )}
    </nav>
  );
}

export default NavBar;
