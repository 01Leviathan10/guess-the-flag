import React, { Component } from 'react';
// import worldImage from '../public/world.jpg';
import './App.css';
import CountryGame from './CountryGame.jsx';

class App extends Component {
  render() {
    return (
      <div className="flag-app">  
        <header
          className="title-app "
          style = {{background: `url({worldImg})`}}>
          <h1 className="title-text">Guess The Flag</h1>
          <CountryGame />
        </header>
      </div>
    );
  }
}

export default App;
