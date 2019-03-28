import React from 'react';
import './index.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/contact">Contack</a>
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
    </header>
  );
}

export default Header;
