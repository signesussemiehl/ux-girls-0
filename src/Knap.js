import React from 'react';
import './Knap.css';
import { Redirect } from 'react-router-dom'

class Knap extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='./Opgave2.js' />
    }
  }
  render () {
    return (
       <div id= "Redirect">
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Næste opgave</button>
       </div>
    )
  }
}

/*

Det her er vores gamle knap

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
*/
export default Knap;