import React, { Component } from 'react';
import StudentInfo from './StudentInfo'

class UserInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      userArray: ["","","",""],
      showUserForm: true,
      showStudentInfo: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUserOne = this.handleChangeUserOne.bind(this);
    this.handleChangeUserTwo = this.handleChangeUserTwo.bind(this);
    this.handleChangeUserThree = this.handleChangeUserThree.bind(this);
    this.handleChangeUserFour = this.handleChangeUserFour.bind(this);
  }

  handleSubmit(event){

    this.setState({
      showUserForm: false,
      showStudentInfo: true
    });
    console.log(this.state.userArray);

    event.preventDefault();
  }


  handleChangeUserOne(event) {
    var newArray  = this.state.userArray.slice();
    newArray[0] = event.target.value;
    this.setState({userArray:newArray});
  }

  handleChangeUserTwo(event) {
      var newArray  = this.state.userArray.slice();
      newArray[1] = event.target.value;
      this.setState({userArray:newArray});
  }


    handleChangeUserThree(event) {
        var newArray  = this.state.userArray.slice();
        newArray[2] = event.target.value;
        this.setState({userArray:newArray});
    }


    handleChangeUserFour(event) {
          var newArray  = this.state.userArray.slice();
          newArray[3] = event.target.value;
          this.setState({userArray:newArray});
      }

  renderUsers(){
        return (
          <div >
            <fieldset className="form-group">
            <label>
              User Name One <input type="text" value={this.state.userArray[0]} className="form-control" onChange={this.handleChangeUserOne} />
            </label>
          </fieldset>
            <fieldset className="form-group">
            <label>
              User Name Two <input type="text" value={this.state.userArray[1]} className="form-control" onChange={this.handleChangeUserTwo} />
            </label>
          </fieldset>
            <fieldset className="form-group">
            <label>
              User Name Three <input type="text" value={this.state.userArray[2]} className="form-control" onChange={this.handleChangeUserThree} />
            </label>
          </fieldset>
            <fieldset className="form-group">
            <label>
              User Name Four <input type="text" value={this.state.userArray[3]} className="form-control" onChange={this.handleChangeUserFour} />
            </label>
          </fieldset>
          </div>
        );
  }

  renderUserForm() {
    return (
      <div>
          <form onSubmit={this.handleSubmit} >
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
        { this.state.showStudentInfo ? <StudentInfo users={this.state.userArray} /> : null }
      </div>
    );
  }
}

export default UserInfo;
