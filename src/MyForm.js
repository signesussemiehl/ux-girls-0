import React from 'react';

class MyForm extends React.Component {
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

export default MyForm;