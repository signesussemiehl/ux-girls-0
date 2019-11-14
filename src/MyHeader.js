import React from 'react';

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

export default MyHeader;