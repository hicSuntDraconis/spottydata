import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home'
import Playlists from './Components/Playlists'



const App = () => {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/playlists/" component={Playlists}>
        </Route>
        <Route path="/" exact component={Home}>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
