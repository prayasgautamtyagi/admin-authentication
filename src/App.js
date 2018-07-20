import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginComponent from './Components/LoginComponent'
import CategoryDisplayerComponment from './Components/CategoryDisplayerComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LoginComponent} />
          <Route exact path='/categories' component={CategoryDisplayerComponment} /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
