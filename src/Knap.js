import React from 'react';
import './Knap.css';
import { Redirect } from 'react-router-dom' //Husk at installere den her: npm install --save react-router-dom

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
      return <Redirect to='/opgave2' /> //Det er her jeg har ændret noget, så den skulle redirecte til Opgave2, men det gør den ikke.
    }
  }
  render () {
    return (
       <div id= "Redirect">
        {this.renderRedirect()}
        <button onClick={this.setRedirect} className='myBtn'>Næste opgave</button>
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