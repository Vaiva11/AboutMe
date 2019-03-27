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
        <main>
          <h1>Vaiva</h1>
          <p>
            The world as we have created it is a process of our thinking. It
            cannot be changed without changing our thinking. -Albert Einstein
          </p>
        </main>
      </section>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
