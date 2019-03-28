import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Project BUBO
          </p>
          <div>
              <a
                className="App-link"
                href="https://omniist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Omniist
              </a>
              <i> - Always Be Improving</i>
          </div>
          <div>
              <a
                className="App-link"
                href="https://www.codinginfire.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              Coding In Fire
              </a>
              <i> - Automate Everything</i>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
