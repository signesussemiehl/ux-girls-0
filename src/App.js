import React from 'react';
import './App.css';
import Image from './Image/Image.js';
import Knap from './Knap.js';
import MyForm from './MyForm.js';
import Image from './Image/Image.js'
import Knap from './Knap.js'
import './Knap.css';
import MyHeader from './MyHeader.js';

function App() {
  return (
    <div className="App">
    <Knap/>
    <Image/>
    <MyForm/>
    <MyHeader/>
    </div>
);
}

export default App;