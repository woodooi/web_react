import React from 'react';
import GlobalStyle from './globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home';
import Catalog from './Catalog'

// Images
import archangel from '../img/project_archangel.jpg';
import logo from '../img/kamikaze.jpg';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact render={() => <Home logo={logo} archangel={archangel} />} />
        <Route path="/catalog" exact render ={() => <Catalog logo={logo} archangel={archangel} />} />
      </Switch>
    </Router>
  );
}

export default App;
