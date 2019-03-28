import React from 'react';
import '../index.scss';

import { Header, Main, Footer } from '../../components';

function About() {
  return (
    <React.Fragment>
      <div className="All">
        <Header />
        <Main />
        Here is about me
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default About;
