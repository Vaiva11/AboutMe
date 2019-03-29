import React from 'react';
import './index.scss';

function About() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Personal Profile:</h1>
        <section id="box">
          <p>
            Junior front-end developer. Laboratory assistant in physical
            sciences.
          </p>
        </section>
      </div>
      <div className="container">
        <h1>Education:</h1>
        <section id="box">
          <h2>Vilnus University</h2>
          <h3>Computer physics and modelling</h3>
          <span id="year">Septemper 2015 - Present</span>
          <p>
            Advanced mathematics, physics, specialty languages (Lithuanian,
            English), computer science, introduction to programming (C, C++,
            JAVA), objective oriented programming, database management (SQL),
            numerical methods, system software, computer security, introduction
            to project management.
          </p>

          <h2>Code Academy</h2>
          <h3>Front-end developer</h3>
          <span id="year">October 2018 - Present</span>
          <p>
            HTML, CSS / SCSS, Bootstrap, JavaScript, Node.Js, React, Redux,
            Webpack.
          </p>
        </section>
      </div>
      <div className="container">
        <h1>Practice:</h1>
        <section id="box">
          <h2>Bite</h2>
          <h3>Database management</h3>
          <span id="year">June 2017 - Septemper 2017</span>
          <p>
            Database management, meetings with clients and telecommunication
            improvement.
          </p>
        </section>
      </div>
      <div className="container">
        <h1>Work Experience:</h1>
        <section id="box">
          <h2>Vilnius University</h2>
          <h3>Laboratory Assistant</h3>
          <span id="year">July 2018 - Present</span>
          <p>Research on dielectric spectroscopy</p>
        </section>
      </div>
    </React.Fragment>
  );
}

export default About;
