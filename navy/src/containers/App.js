import React, { createContext, useState, useEffect } from 'react';
import GlobalStyle from './globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';

// Pages
import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import { getAllPlanes, getPlaneById, filterPlane } from '../api';


// Images
import archangel from '../img/project_archangel.jpg';
import logo from '../img/kamikaze.jpg';
import ItemPage from './ItemPage/ItemPage';

export const DataContext = createContext();

function App() {

  const [ planes, setPlanes ] = useState([]);

  function handleSetPlanes(planes) {
    setPlanes([]);
    setPlanes(planes);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlanes = await getAllPlanes();
        if (Array.isArray(fetchedPlanes)) {
          setPlanes(fetchedPlanes);
        } else {
          console.error("Error: getAllPlanes did not return an array");
        }
      } catch (error) {
        console.error("Error fetching planes:", error);
      }
    };
  
    fetchData();
  }, []);

  if (planes.length === 0 ) {
    return <Spin />;
  } 

  return (
    <DataContext.Provider value = {{planes, handleSetPlanes, getPlaneById, filterPlane}}>
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
