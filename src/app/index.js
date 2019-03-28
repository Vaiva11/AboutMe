import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Work, Contact } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="All">
      <Header />
      <main>
        <Router>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
