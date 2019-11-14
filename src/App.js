import React from 'react';
import './App.css';
import Image from './Image/Image.js';
import Knap from './Knap.js';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
    <Image/>
    <MyForm/>
    <p><Knap/></p>
    </div>
);
}

export default App;