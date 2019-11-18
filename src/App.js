import React from 'react';
import './App.css';
import Image from './Image/Image.js';
import Knap from './Knap.js';
import FormName from './MyForm';
import SecondForm from './Opgave2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Image/>
    <Switch>
      <Route path="/opgave2">
        <SecondForm />
      </Route>
      <Route path="/">
      
        <FormName />
        <p><Knap/></p>
      </Route>
    </Switch>
    </div>
    </Router>
);
}

export default App;