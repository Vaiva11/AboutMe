import React from 'react';
import './App.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function App() {
  return (
    <React.Fragment>
      <section className="App">
        <header>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
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
        {/* <Main /> */}
      </section>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
