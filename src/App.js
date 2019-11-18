import React from 'react';
import './App.css';
import Image from './Image/Image.js';
import Knap from './Knap.js';
import FormName from './MyForm';
import SecondForm from './Opgave2';
import AfslutKnap from './AfslutKnap.js';
import MyFinish from './Finish.js';

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
        <p><AfslutKnap/></p>
      </Route>
      <Route path="/">
      
        <FormName />
        <p><Knap/></p>
      </Route>

      <Route path="/Finish">
        
        <MyFinish />
        <p><AfslutKnap/></p>
      </Route>
    </Switch>
    </div>
    </Router>
);
}

export default App;