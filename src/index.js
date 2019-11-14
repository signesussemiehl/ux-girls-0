import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class MyHeader extends React.Component {
    render() {
        return (
            <div id="opgave"> 
            <h1 style = {{color: "black"}}> Opgave 1</h1>
            <p>Her skal der stå en opgavebeskrivelse</p>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<MyHeader/>, document.getElementById('opgave'));
//ReactDOM.render(<MyHeader />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
