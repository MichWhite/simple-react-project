import React, { Component } from 'react';
import logo from './game-control-handle-icon-73482.png';
import './App.css';
import FormCreate from './components/formcreate.js';
// import reviewList from './components/reviewList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo}  className="App-logo" alt="logo" />
          <h2>GAME REVIEW</h2>
        </div>


          <div className="container">
          <FormCreate/>

          </div>

        </div>
    );
  }
}

export default App;


