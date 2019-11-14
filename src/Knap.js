import React from 'react';
import './Knap.css';

function Knap() {
    
    function sayHello () {
        alert ('Mega nice! 54 andre børn har givet en lignende titel til dette billede.');
    }

    return (
        <button onClick ={sayHello}>
            Afslut opgaven
        </button>
    );
}

export default Knap;