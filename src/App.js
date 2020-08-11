import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Planets from './components/Planets';
import People from './components/People';

import { ReactQueryDevtools } from 'react-query-devtools'


function App() {
  let [page, setPage] = useState('planets');

  return (
    <>
    <div className="App">
      <Navbar />
     <h1>Star Wars Info</h1>
     <Switch>
        <Route path ="/Planets">
      <Planets  />
        </Route>
      <Route path="/People">
      <People />
      </Route>
      </Switch>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
