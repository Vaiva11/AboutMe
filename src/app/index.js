import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Work, Contact } from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
