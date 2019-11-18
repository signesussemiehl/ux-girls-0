import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*class MyForm extends React.Component {
    render() {
      return (
        <form id= "Form">
          <h1>Opgave 1</h1> 
          <p>Giv kunstværket en titel, som fortæller hvad der sker på billedet</p>
          <input
            type="text" 
            style={{width:'450px', height:'30px'}}
          />
        </form>
      );
    }
  }
*/

ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<MyForm />, document.getElementById('Form'));

//ReactDOM.render(<MyHeader />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
