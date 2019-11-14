import React from 'react';
import './Knap.css';

function Knap() {
    
    function sayHello () {
        alert ('Hello');
    }

    return (
        <button onClick ={sayHello}>
            Choose this image
        </button>
    );
}

export default Knap;