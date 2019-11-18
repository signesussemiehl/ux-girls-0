import React from 'react';

class FormName extends React.Component {
  render() {
    return (
      <form id= "Form">
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}

export default FormName;