import React, { Component } from 'react';
import ActivePage from './components/ActivePage'
import Nav from './components/Nav'

class App extends Component {

  constructor() {
    super()
    this.state = {
      activePage: 0
    }
  }

  changeState = (numero) => { 
    this.setState({
      activePage: numero
    })
  }
  render() {
    return (
      <div>
        <Nav cambiaEstado={this.changeState.bind(this)} />
        <ActivePage estado={this.state.activePage} />
      </div>
    );
  }
}

export default App;
