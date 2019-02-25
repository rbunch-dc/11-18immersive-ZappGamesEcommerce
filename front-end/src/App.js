import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="container center">
        <Home />
      </div>
    );
  }
}

export default App;
