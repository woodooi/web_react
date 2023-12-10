import React, { createContext } from 'react';
import GlobalStyle from './globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home/Home';
import Catalog from './Catalog/Catalog';


// Images
import archangel from '../img/project_archangel.jpg';
import logo from '../img/kamikaze.jpg';
import ItemPage from './ItemPage/ItemPage';
import { planes } from '../data.js'

export const DataContext = createContext();

function App() {
  return (
    <DataContext.Provider value ={planes}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact render={() => <Home logo={logo} archangel={archangel} />} />
          <Route path="/catalog" exact render ={() => <Catalog logo={logo} archangel={archangel} />} />
          <Route path="/catalog/:id" render={() => <ItemPage logo={logo} archangel={archangel} />} />
        </Switch>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
