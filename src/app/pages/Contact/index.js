import React from 'react';
import '../index.scss';

import { Header, Main, Footer } from '../../components';

function Contact() {
  return (
    <React.Fragment>
      <div className="All">
        <Header />
        <Main />
        Contact me
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Contact;
