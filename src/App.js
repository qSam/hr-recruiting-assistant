import React, { Component } from 'react';
import StudentInfo from './StudentInfo';

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App well">
        <div className="App-header rounded-circle">
          <h2>MTSU HR Helper</h2>
        </div>
        <p className="App-intro">
        </p>
        <StudentInfo />
      </div>

    );
  }
}

export default App;
