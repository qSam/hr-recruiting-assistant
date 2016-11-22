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

  render() {
    
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
        <div className="border col-xs-3">
        <label>
          User 1 Score
          <select name="scoresOne">
             <option value="1">1 - Not recommended at all</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4 - Highly rocommended</option>
           </select>
        </label>
        <br />
        </div>
        <div className="border col-xs-3">
        <label>
          User 2 Score
          <select name="scoresTwo">
          <option value="1">1 - Not recommended at all</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 - Highly rocommended</option>
           </select>
        </label>
        <br />
        </div>
        <div className="border col-xs-3">
        <label>
          User 3 Score
          <select name="scoresThree">
          <option value="1">1 - Not recommended at all</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 - Highly rocommended</option>
           </select>
        </label>
        <br />
        </div>
        <div className="border col-xs-3">
        <label>
          User 4 Score
          <select name="scoresFour">
          <option value="1">1 - Not recommended at all</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 - Highly rocommended</option>
           </select>
        </label>
        <br />
        </div>
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
