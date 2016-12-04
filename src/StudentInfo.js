import React, { Component } from 'react';
import StudentDetail from './StudentDetail';

class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {students: [],
                  value:''
                 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var myArray  = this.state.students.slice();
    console.log(myArray);
    myArray.push({"Name":this.state.value,
                              "UserOneScore":event.target.scoresOne.value,
                              "UserTwoScore":event.target.scoresTwo.value,
                              "UserThreeScore":event.target.scoresThree.value,
                              "UserFourScore":event.target.scoresFour.value,
                  });

    this.setState( {students: myArray});
    this.setState({value: ""});



     event.preventDefault();
  }

  renderUser(userName, scoreSelector) {
    return (
      <div className="border col-xs-3">
      <label>
        {userName} Score
        <select name={scoreSelector}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
         </select>
      </label>
      <br />
      </div>
    );
  }

  render() {

    console.log(this.props.users);
    var userOne = this.props.users[0];
    var userTwo = this.props.users[1];
    var userThree = this.props.users[2];
    var userFour = this.props.users[3];

    return (
      <div>
      <form onSubmit={this.handleSubmit} className="text-center">
        <fieldset className="form-group">
        <label>
          Student
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        </fieldset>

        <div className="row">
        {this.renderUser(userOne, "scoresOne")}
        {this.renderUser(userTwo, "scoresTwo")}
        {this.renderUser(userThree, "scoresThree")}
        {this.renderUser(userFour, "scoresFour")}
        </div>
        <br />
        <input className="btn btn-primary btn-md" type="submit" value="Add Student Scores" />
        <hr />
      </form>
      {this.state.students.length > 0 &&
      <StudentDetail students={this.state.students}/>

    }
      </div>
    );
  }
}

export default StudentInfo;
