import React from 'react';
import './App.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function App() {
  return (
    <React.Fragment>
      <div className="All">
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
        <footer>
          Junior front-end developer. Laboratory assistant in physical sciences.
          (https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-04.jpg)
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
