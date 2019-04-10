import React from 'react';
import './index.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contack</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/Vaiva11">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </header >
  );
}

export default Header;
