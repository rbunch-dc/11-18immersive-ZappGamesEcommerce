// 3rd party modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custom components
import './App.css';
import Home from './components/home/Home';
import Headers from './components/navHeader/Headers';
import Login from './components/pages/Login'; 
import Register from './components/pages/Register'; 
import Game from './components/pages/Game';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Headers />
          <div className="container center">
            <Route exact path="/" component={Home} />
            <Route exact path = "/login" component={Login} />
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/game/:id" component={Game} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
