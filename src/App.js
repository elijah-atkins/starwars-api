import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Planets from './components/Planets';
import People from './components/People';
import Films from './components/Films'
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Splash from './components/Splash';



function App() {

  return (
    <>
    <div className="App">
     <h1>Star Wars Info</h1>
      <Navbar />
     <Switch>

      <Route path="/films">
      <Films />
      </Route>
        <Route path ="/planets">
      <Planets  />
        </Route>
      <Route path="/people">
      <People />
      </Route>
      <Route path="/species">
      <Species />
      </Route>
      <Route path="/starships">
      <Starships />
      </Route>
      <Route path="/vehicles">
      <Vehicles />
      </Route>
      <Route path="/">
      <Splash />
      </Route>
      </Switch>
    </div>

    </>
  );
}

export default App;
