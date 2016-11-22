import React from 'react';


const StudentList = (props) => {


  console.log("Props are",props);
  return (<div className="container">
    <div className="row">
    {props.students.map( (student) => {

      var average = (+student.UserOneScore + +student.UserTwoScore + +student.UserThreeScore
                    + +student.UserFourScore)/4;

      var Interview = false;
      if (average > 2.5){
        Interview = true;
      };

      return (<div className="col-sm-4 panel panel-default rounded-circle">
          Name: {student.Name}<br />
          Average Score: {average}<br />
          {Interview && <div className="bg-success">Recommended for Interview</div>
          }
          {!Interview && <div className="bg-danger">Not Recommended for Interview</div>
          }
          <br />
        </div>);
    })}
    </div>
  </div>);
}

export default StudentList;
