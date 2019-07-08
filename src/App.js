import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ColoredBlock from  './ColoredBlock.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            Hi {this.props.name}!
          </p>
          <ColoredBlock />
        </header>
      </div>
    );
  }
}

export default App;
