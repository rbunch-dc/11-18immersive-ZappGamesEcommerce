import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Headers from './components/navHeader/Headers';

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <div className="container center">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
