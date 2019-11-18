import React from 'react';

class FormName extends React.Component {
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
  

export default FormName;