import React from 'react';
import { Redirect } from 'react-router-dom' //Husk at installere den her: npm install --save react-router-dom

class AfslutKnap extends React.Component {
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
      return <Redirect to='/finish' /> //Det er her jeg har ændret noget, så den skulle redirecte til Opgave2, men det gør den ikke.
    }
  }
  render () {
    return (
       <div id= "Redirect">
        {this.renderRedirect()}
        <button onClick={this.setRedirect} className='myBtn'>Afslut</button>
       </div>
    )
  }
}

export default AfslutKnap;