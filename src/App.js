import React, { Component } from 'react';
import Welcome from './pages/Welcome';
import MyNavBar from './components/MyNavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {




  render() {
    return (
      <Router>
          <Switch>
            <Route  exact path="/">
              <Welcome />
            </Route>
            <Route path="/Inicio">
            <MyNavBar />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
