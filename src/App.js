import React, { Component } from 'react';
import StudentInfo from './StudentInfo';
import UserInfo from './Users';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showStudentInfo: false,
      showUserInfo: true
    }
  }

  render() {
    return (
      <div className="App well">
        <div className="App-header rounded-circle">
          <h2>MTSU HR Helper</h2>
        </div>
        <p className="App-intro">
        </p>
        { this.state.showUserInfo ? <UserInfo /> : null }
        { this.state.showStudentInfo ? <StudentInfo /> : null }
      </div>

    );
  }
}

export default App;
