import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home, About, Work, Contact } from './pages';
import { Header, Footer } from './components';
import { Html, JS, NodeJs, ReactPage, VueJs } from './pages/Work/pages';

function App() {
  return (
    <div className="All">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/work/Html" component={Html} />
            <Route exact path="/work/JS" component={JS} />
            <Route exact path="/work/NodeJs" component={NodeJs} />
            <Route exact path="/work/ReactPage" component={ReactPage} />
            <Route exact path="/work/VueJs" component={VueJs} />
            <Redirect from="/" to="home" />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
