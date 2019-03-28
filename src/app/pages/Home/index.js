import React from 'react';
import '../index.scss';

import { Header, Main, Footer } from '../../components';

function Home() {
  return (
    <React.Fragment>
      <div className="All">
        <Header />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
