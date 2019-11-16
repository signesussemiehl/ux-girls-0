import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Opgave2.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

class MyForm extends React.Component {
    render() {
      return (
        <form id= "Form">
          <h1>Opgave 2</h1>
          <p>Vælg 3 ord der bedst beskriver billedet</p>
          <input
            type="text"
          />
          <br/>
          <br/>
          <input
            type="text"
          />
          <br/>
          <br/>
          <input
            type="text"
          />
        </form>
      );
    }
  }



ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<MyForm />, document.getElementById('Form'));
ReactDOM.render(<MyForm />, document.getElementById('Redirect'));
//ReactDOM.render(<MyHeader />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();