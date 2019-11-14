import React from 'react';
import './Knap.css';

function Knap() {
    
    function sayHello () {
        alert ('Godt gået!');
    }

    return (
        <button onClick ={sayHello}>
            Afslut opgaven
        </button>
    );
}

export default Knap;