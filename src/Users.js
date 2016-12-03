import React, { Component } from 'react';
import StudentInfo from './StudentInfo'

class UserInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      userCounter: 1,
      userArray: [1],
      showUserForm: true,
      showStudentInfo: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubtractClick = this.handleSubtractClick.bind(this);
  }

  handleSubmit(event){

    console.log(event);
    console.log(this);
    event.preventDefault();
  }

  handleAddClick(event){

    let newCounter = this.state.userCounter;
    let newUserArray = [];
    newCounter++;

    for (var i = 1; i <= newCounter; i++){
      newUserArray.push(i);
    }

    this.setState({
        userCounter : newCounter,
        userArray: newUserArray,
        showStudentInfo: true
    });



    event.preventDefault();
  }

  handleSubtractClick(event) {
    let newCounter = this.state.userCounter;
    let newUserArray = [];
    newCounter--;

    for (var i = 1; i <= newCounter; i++){
      newUserArray.push(i);
    }

    this.setState({
        userCounter : newCounter,
        userArray: newUserArray
    });



    event.preventDefault();

  }

  renderUsers(){
    return this.state.userArray.map( (user) => {
        return (
          <div key={user }>
            <fieldset className="form-group">
            <label>
              User Name <input key={user} type="text" className="form-control"  />
            </label>
          </fieldset>
          </div>
        )
    });
  }

  renderUserForm() {
    return (
      <div>
          <form onSubmit={this.handleSubmit} >
              Add more users <button type="button" className="btn btn-default btn-circle" onClick={this.handleAddClick} ><i className="fa fa-plus"></i></button><button type="button" className="btn btn-default btn-circle" onClick={this.handleSubtractClick} ><i className="fa fa-minus"></i></button>
              {this.renderUsers()}
              <input className="btn btn-primary btn-sm" type="submit" value="Begin" />
          </form>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.state.showUserForm ? this.renderUserForm() : null }
        { this.state.showStudentInfo ? <StudentInfo /> : null }
      </div>
    );
  }
}

export default UserInfo;
