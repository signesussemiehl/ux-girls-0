import React from 'react';
import './Knap.css';

function Knap() {
    
    function sayHello () {
        alert ('Hello');
    }

    return (
        <button onClick ={sayHello}>
            Afslut opgaven
        </button>
    );
}

export default Knap;